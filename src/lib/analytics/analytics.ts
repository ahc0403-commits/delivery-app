// ============================================
// ANALYTICS SERVICE
// Core tracking implementation
// ============================================

import { BaseEvent, DeviceInfo, EventCategory, EventName, EVENTS } from './events';

// Generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Get or create session ID
const getSessionId = (): string => {
  const key = 'deli_session_id';
  let sessionId = sessionStorage.getItem(key);
  if (!sessionId) {
    sessionId = generateId();
    sessionStorage.setItem(key, sessionId);
  }
  return sessionId;
};

// Get device info
const getDeviceInfo = (): DeviceInfo => {
  const ua = navigator.userAgent;
  let platform: 'ios' | 'android' | 'web' = 'web';
  
  if (/iPhone|iPad|iPod/.test(ua)) {
    platform = 'ios';
  } else if (/Android/.test(ua)) {
    platform = 'android';
  }

  return {
    platform,
    os_version: navigator.platform || 'unknown',
    app_version: '1.0.0',
    device_model: ua.substring(0, 100),
    screen_width: window.innerWidth,
    screen_height: window.innerHeight,
  };
};

// Event queue for batch sending
const EVENT_QUEUE_KEY = 'deli_event_queue';
const BATCH_SIZE = 10;
const FLUSH_INTERVAL = 30000; // 30 seconds

class Analytics {
  private userId: string | null = null;
  private userProperties: Record<string, any> = {};
  private sessionId: string;
  private deviceInfo: DeviceInfo;
  private flushTimer: NodeJS.Timeout | null = null;
  private screenStartTime: number = 0;
  private currentScreen: string = '';

  constructor() {
    this.sessionId = getSessionId();
    this.deviceInfo = getDeviceInfo();
    this.loadUserFromStorage();
    this.startFlushTimer();
    this.trackSessionStart();
  }

  // ============================================
  // PUBLIC API
  // ============================================

  /**
   * Identify the current user
   */
  identify(userId: string, properties?: Record<string, any>) {
    this.userId = userId;
    if (properties) {
      this.userProperties = { ...this.userProperties, ...properties };
    }
    localStorage.setItem('deli_user_id', userId);
    localStorage.setItem('deli_user_props', JSON.stringify(this.userProperties));
    
    // Track identification
    this.track(EVENTS.LOGIN_SUCCESS, { user_id: userId, ...properties });
  }

  /**
   * Clear user identity (on logout)
   */
  reset() {
    const previousUserId = this.userId;
    this.userId = null;
    this.userProperties = {};
    localStorage.removeItem('deli_user_id');
    localStorage.removeItem('deli_user_props');
    sessionStorage.removeItem('deli_session_id');
    this.sessionId = getSessionId();
    
    if (previousUserId) {
      this.track(EVENTS.LOGOUT, { previous_user_id: previousUserId });
    }
  }

  /**
   * Set user properties without tracking an event
   */
  setUserProperties(properties: Record<string, any>) {
    this.userProperties = { ...this.userProperties, ...properties };
    localStorage.setItem('deli_user_props', JSON.stringify(this.userProperties));
  }

  /**
   * Track a screen view
   */
  trackScreen(screenId: string, screenName?: string) {
    // Track dwell time for previous screen
    if (this.currentScreen && this.screenStartTime) {
      const dwellTime = Date.now() - this.screenStartTime;
      this.track(EVENTS.SCREEN_DWELL, {
        screen_id: this.currentScreen,
        dwell_time_ms: dwellTime,
        dwell_time_seconds: Math.round(dwellTime / 1000),
      });
    }

    // Track new screen view
    this.currentScreen = screenId;
    this.screenStartTime = Date.now();
    
    this.track(EVENTS.SCREEN_VIEW, {
      screen_id: screenId,
      screen_name: screenName || screenId,
    });
  }

  /**
   * Track any event
   */
  track(eventName: EventName | string, properties: Record<string, any> = {}) {
    const event = this.buildEvent(eventName, properties);
    this.queueEvent(event);
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 [Analytics] ${eventName}`, properties);
    }
  }

  /**
   * Track search with special handling for null results
   */
  trackSearch(query: string, resultCount: number, filters?: Record<string, any>) {
    const isNullSearch = resultCount === 0;
    
    this.track(isNullSearch ? EVENTS.SEARCH_NULL_RESULT : EVENTS.SEARCH_QUERY, {
      query,
      query_length: query.length,
      result_count: resultCount,
      has_results: !isNullSearch,
      filters: filters || {},
    });
  }

  /**
   * Track store card impression (call when visible)
   */
  trackStoreImpression(storeId: string, storeName: string, position: number, isSponsored: boolean, source: string) {
    this.track(EVENTS.STORE_CARD_IMPRESSION, {
      store_id: storeId,
      store_name: storeName,
      position,
      is_sponsored: isSponsored,
      source,
    });
  }

  /**
   * Track store click
   */
  trackStoreClick(storeId: string, storeName: string, position: number, isSponsored: boolean, source: string) {
    this.track(EVENTS.STORE_CARD_CLICK, {
      store_id: storeId,
      store_name: storeName,
      position,
      is_sponsored: isSponsored,
      source,
    });
  }

  /**
   * Track cart operations
   */
  trackCartAdd(itemId: string, itemName: string, price: number, quantity: number, storeId: string, storeName: string) {
    this.track(EVENTS.CART_ITEM_ADD, {
      item_id: itemId,
      item_name: itemName,
      item_price: price,
      quantity,
      store_id: storeId,
      store_name: storeName,
      cart_value: this.getCartValue(),
    });
  }

  trackCartRemove(itemId: string, itemName: string) {
    this.track(EVENTS.CART_ITEM_REMOVE, {
      item_id: itemId,
      item_name: itemName,
    });
  }

  /**
   * Track payment flow
   */
  trackPaymentMethod(method: string, cardBrand?: string) {
    this.track(EVENTS.PAYMENT_METHOD_SELECT, {
      method,
      card_brand: cardBrand,
    });
  }

  trackPaymentSuccess(orderId: string, amount: number, method: string) {
    this.track(EVENTS.PAYMENT_SUCCESS, {
      order_id: orderId,
      amount,
      method,
    });
  }

  trackPaymentFailure(amount: number, method: string, reason: string) {
    this.track(EVENTS.PAYMENT_FAILURE, {
      amount,
      method,
      failure_reason: reason,
    });
  }

  /**
   * Track review submission
   */
  trackReview(orderId: string, storeId: string, rating: number, tags: string[], hasText: boolean) {
    this.track(EVENTS.REVIEW_SUBMIT, {
      order_id: orderId,
      store_id: storeId,
      rating,
      tags,
      tag_count: tags.length,
      has_text: hasText,
    });
  }

  /**
   * Track order rejection (store owner)
   */
  trackOrderRejection(orderId: string, reasonId: string, reasonLabel: string, customReason?: string) {
    this.track(EVENTS.ORDER_REJECTED, {
      order_id: orderId,
      reason_id: reasonId,
      reason_label: reasonLabel,
      custom_reason: customReason,
    });
  }

  /**
   * Flush all queued events immediately
   */
  async flush() {
    const events = this.getQueuedEvents();
    if (events.length === 0) return;

    try {
      // In production, send to backend
      // await fetch('/api/events', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ events }),
      // });

      // For now, just log
      console.log(`📤 [Analytics] Flushing ${events.length} events`);
      
      // Clear the queue
      localStorage.removeItem(EVENT_QUEUE_KEY);
    } catch (error) {
      console.error('[Analytics] Failed to flush events:', error);
    }
  }

  /**
   * Get all queued events (for debugging)
   */
  getQueuedEvents(): BaseEvent[] {
    try {
      const stored = localStorage.getItem(EVENT_QUEUE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  private loadUserFromStorage() {
    const userId = localStorage.getItem('deli_user_id');
    const props = localStorage.getItem('deli_user_props');
    
    if (userId) {
      this.userId = userId;
    }
    if (props) {
      try {
        this.userProperties = JSON.parse(props);
      } catch {
        this.userProperties = {};
      }
    }
  }

  private buildEvent(eventName: string, properties: Record<string, any>): BaseEvent {
    const category = this.categorizeEvent(eventName);
    
    return {
      event_id: generateId(),
      event_name: eventName,
      event_category: category,
      timestamp: new Date().toISOString(),
      session_id: this.sessionId,
      user_id: this.userId || undefined,
      device_info: this.deviceInfo,
      properties: {
        ...properties,
        ...this.userProperties,
      },
    };
  }

  private categorizeEvent(eventName: string): EventCategory {
    if (eventName.startsWith('store_') && !eventName.includes('card') && !eventName.includes('view')) {
      return 'store';
    }
    if (eventName.startsWith('payment_') || eventName.startsWith('withdrawal_')) {
      return 'payment';
    }
    if (eventName.startsWith('admin_') || eventName.startsWith('report_')) {
      return 'admin';
    }
    if (eventName.startsWith('delivery_') || eventName.startsWith('rider_')) {
      return 'rider';
    }
    return 'consumer';
  }

  private queueEvent(event: BaseEvent) {
    const events = this.getQueuedEvents();
    events.push(event);
    localStorage.setItem(EVENT_QUEUE_KEY, JSON.stringify(events));

    // Auto-flush if queue is large
    if (events.length >= BATCH_SIZE) {
      this.flush();
    }
  }

  private startFlushTimer() {
    if (this.flushTimer) return;
    
    this.flushTimer = setInterval(() => {
      this.flush();
    }, FLUSH_INTERVAL);

    // Flush on page unload
    window.addEventListener('beforeunload', () => {
      this.trackSessionEnd();
      this.flush();
    });
  }

  private trackSessionStart() {
    this.track(EVENTS.SESSION_START, {
      referrer: document.referrer,
      landing_page: window.location.pathname,
    });
  }

  private trackSessionEnd() {
    this.track(EVENTS.SESSION_END, {
      session_duration_ms: Date.now() - this.screenStartTime,
    });
  }

  private getCartValue(): number {
    // This would integrate with CartContext in real implementation
    try {
      const cartData = localStorage.getItem('deli_cart');
      if (cartData) {
        const cart = JSON.parse(cartData);
        return cart.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
      }
    } catch {}
    return 0;
  }
}

// Singleton instance
export const analytics = new Analytics();



