// ============================================
// ANALYTICS CONTEXT
// React integration for analytics tracking
// ============================================

import { createContext, useContext, useEffect, ReactNode } from 'react';
import { analytics, EVENTS, EventName } from '../lib/analytics';

// ============================================
// CONTEXT TYPES
// ============================================

interface AnalyticsContextType {
  // Core tracking
  track: (eventName: EventName | string, properties?: Record<string, any>) => void;
  trackScreen: (screenId: string, screenName?: string) => void;
  
  // User identification
  identify: (userId: string, properties?: Record<string, any>) => void;
  reset: () => void;
  setUserProperties: (properties: Record<string, any>) => void;
  
  // Specialized tracking methods
  trackSearch: (query: string, resultCount: number, filters?: Record<string, any>) => void;
  trackStoreImpression: (storeId: string, storeName: string, position: number, isSponsored: boolean, source: string) => void;
  trackStoreClick: (storeId: string, storeName: string, position: number, isSponsored: boolean, source: string) => void;
  trackCartAdd: (itemId: string, itemName: string, price: number, quantity: number, storeId: string, storeName: string) => void;
  trackCartRemove: (itemId: string, itemName: string) => void;
  trackPaymentMethod: (method: string, cardBrand?: string) => void;
  trackPaymentSuccess: (orderId: string, amount: number, method: string) => void;
  trackPaymentFailure: (amount: number, method: string, reason: string) => void;
  trackReview: (orderId: string, storeId: string, rating: number, tags: string[], hasText: boolean) => void;
  trackOrderRejection: (orderId: string, reasonId: string, reasonLabel: string, customReason?: string) => void;
  
  // Utilities
  flush: () => Promise<void>;
  getQueuedEvents: () => any[];
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

// ============================================
// PROVIDER COMPONENT
// ============================================

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // The analytics singleton is already initialized
  // This provider mainly serves as a React-friendly wrapper

  const contextValue: AnalyticsContextType = {
    track: analytics.track.bind(analytics),
    trackScreen: analytics.trackScreen.bind(analytics),
    identify: analytics.identify.bind(analytics),
    reset: analytics.reset.bind(analytics),
    setUserProperties: analytics.setUserProperties.bind(analytics),
    trackSearch: analytics.trackSearch.bind(analytics),
    trackStoreImpression: analytics.trackStoreImpression.bind(analytics),
    trackStoreClick: analytics.trackStoreClick.bind(analytics),
    trackCartAdd: analytics.trackCartAdd.bind(analytics),
    trackCartRemove: analytics.trackCartRemove.bind(analytics),
    trackPaymentMethod: analytics.trackPaymentMethod.bind(analytics),
    trackPaymentSuccess: analytics.trackPaymentSuccess.bind(analytics),
    trackPaymentFailure: analytics.trackPaymentFailure.bind(analytics),
    trackReview: analytics.trackReview.bind(analytics),
    trackOrderRejection: analytics.trackOrderRejection.bind(analytics),
    flush: analytics.flush.bind(analytics),
    getQueuedEvents: analytics.getQueuedEvents.bind(analytics),
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// ============================================
// HOOKS
// ============================================

/**
 * Main hook to access analytics functions
 */
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
}

/**
 * Hook to track screen views automatically
 */
export function useTrackScreen(screenId: string, screenName?: string) {
  const { trackScreen } = useAnalytics();
  
  useEffect(() => {
    trackScreen(screenId, screenName);
  }, [screenId, screenName, trackScreen]);
}

/**
 * Hook to track element visibility (impressions)
 */
export function useTrackImpression(
  ref: React.RefObject<HTMLElement>,
  onVisible: () => void,
  options: { threshold?: number; triggerOnce?: boolean } = {}
) {
  const { threshold = 0.5, triggerOnce = true } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible();
            if (triggerOnce) {
              observer.disconnect();
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, onVisible, threshold, triggerOnce]);
}

/**
 * Hook to track cart abandonment
 */
export function useTrackCartAbandonment(cartItems: any[], timeout = 300000) { // 5 minutes
  const { track } = useAnalytics();

  useEffect(() => {
    if (cartItems.length === 0) return;

    const timer = setTimeout(() => {
      track(EVENTS.CART_ABANDON, {
        item_count: cartItems.length,
        cart_value: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
        })),
      });
    }, timeout);

    return () => clearTimeout(timer);
  }, [cartItems, timeout, track]);
}

// Re-export EVENTS for convenience
export { EVENTS };



