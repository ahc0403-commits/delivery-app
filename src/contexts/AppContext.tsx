// ============================================
// APP CONTEXT
// Centralized application state management
// ============================================

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { User, UserRole, BankAccount } from '../types';
import { AUTH_SCREENS, PROTECTED_SCREENS } from '../lib/constants';
import { toast } from 'sonner@2.0.3';

// ============================================
// CONTEXT TYPES
// ============================================
interface AppContextType {
  // Auth State
  isLoggedIn: boolean;
  user: User | null;
  userRole: UserRole;
  login: (user: User) => void;
  logout: () => void;
  
  // Navigation
  currentScreen: string;
  navigationHistory: string[];
  navigate: (screenId: string) => void;
  goBack: () => void;
  canAccessScreen: (screenId: string) => boolean;
  isAuthScreen: (screenId: string) => boolean;
  
  // UI Helpers
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  
  // Business State (Owner/Admin)
  adApproved: boolean;
  approveAd: () => void;
  hasBankAccount: boolean;
  bankAccount: BankAccount | null;
  registerBankAccount: (bankName: string, accountNumber: string, accountHolder: string) => void;
  getBankAccount: () => BankAccount | null;
}

// ============================================
// DEFAULT USER (for prototype)
// ============================================
const DEFAULT_USER: User = {
  id: 'user-1',
  name: 'Hyochang',
  email: 'hyochang@email.com',
  phone: '+84-912-345-678',
  role: 'customer',
  membershipLevel: 'wow',
  points: 850,
};

// ============================================
// CONTEXT CREATION
// ============================================
const AppContext = createContext<AppContextType | null>(null);

// ============================================
// PROVIDER COMPONENT
// ============================================
export function AppProvider({ children }: { children: ReactNode }) {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [navigationHistory, setNavigationHistory] = useState<string[]>([]);
  
  // Business State
  const [adApproved, setAdApproved] = useState(false);
  const [bankAccount, setBankAccount] = useState<BankAccount | null>(null);
  
  // ============================================
  // AUTH METHODS
  // ============================================
  const login = useCallback((userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  }, []);
  
  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentScreen('splash');
    setNavigationHistory([]);
  }, []);
  
  // ============================================
  // NAVIGATION METHODS
  // ============================================
  const navigate = useCallback((screenId: string) => {
    // Store current screen in history before navigating
    setNavigationHistory(prev => [...prev, currentScreen]);
    setCurrentScreen(screenId);
    
    // Auto-login when leaving auth screens (for prototype)
    if (AUTH_SCREENS.includes(screenId as any) === false && !isLoggedIn) {
      // Simulate login after onboarding
      if (currentScreen === 'welcome' || currentScreen === 'apppermissions') {
        login(DEFAULT_USER);
      }
    }
  }, [currentScreen, isLoggedIn, login]);
  
  const goBack = useCallback(() => {
    if (navigationHistory.length > 0) {
      const previous = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(prev => prev.slice(0, -1));
      setCurrentScreen(previous);
    }
  }, [navigationHistory]);
  
  const canAccessScreen = useCallback((screenId: string): boolean => {
    // Auth screens are always accessible
    if (AUTH_SCREENS.includes(screenId as any)) {
      return true;
    }
    
    // Check role-based access
    const userRole = user?.role || 'customer';
    
    if (PROTECTED_SCREENS.admin.includes(screenId)) {
      return userRole === 'admin';
    }
    
    if (PROTECTED_SCREENS.owner.includes(screenId)) {
      return userRole === 'owner' || userRole === 'admin';
    }
    
    // Customer screens are accessible to all logged-in users
    return true;
  }, [user]);
  
  const isAuthScreen = useCallback((screenId: string): boolean => {
    return AUTH_SCREENS.includes(screenId as any);
  }, []);
  
  // ============================================
  // UI HELPERS
  // ============================================
  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else {
      toast.info(message);
    }
  }, []);
  
  // ============================================
  // BUSINESS METHODS
  // ============================================
  const approveAd = useCallback(() => {
    setAdApproved(true);
    showToast('Ad approved and published! 광고가 승인되어 게시되었습니다!', 'success');
  }, [showToast]);
  
  const registerBankAccount = useCallback((
    bankName: string, 
    accountNumber: string, 
    accountHolder: string
  ) => {
    setBankAccount({ bankName, accountNumber, accountHolder });
    showToast('Bank account registered successfully!', 'success');
  }, [showToast]);
  
  const getBankAccount = useCallback(() => bankAccount, [bankAccount]);
  
  // ============================================
  // CONTEXT VALUE
  // ============================================
  const value: AppContextType = {
    // Auth
    isLoggedIn,
    user,
    userRole: user?.role || 'customer',
    login,
    logout,
    
    // Navigation
    currentScreen,
    navigationHistory,
    navigate,
    goBack,
    canAccessScreen,
    isAuthScreen,
    
    // UI
    showToast,
    
    // Business
    adApproved,
    approveAd,
    hasBankAccount: !!bankAccount,
    bankAccount,
    registerBankAccount,
    getBankAccount,
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// ============================================
// CUSTOM HOOKS
// ============================================

/**
 * Main app context hook - for general app state
 */
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

/**
 * Auth-specific hook
 */
export function useAuth() {
  const { isLoggedIn, user, userRole, login, logout } = useApp();
  return { isLoggedIn, user, userRole, login, logout };
}

/**
 * Navigation-specific hook (backwards compatible with old useNavigation)
 */
export function useNavigation() {
  const { 
    currentScreen, 
    navigate, 
    goBack, 
    showToast,
    adApproved,
    approveAd,
    hasBankAccount,
    registerBankAccount,
    getBankAccount,
  } = useApp();
  
  return { 
    currentScreen, 
    navigate, 
    goBack, 
    showToast,
    adApproved,
    approveAd,
    hasBankAccount,
    registerBankAccount,
    getBankAccount,
  };
}

/**
 * Route protection hook
 */
export function useRouteProtection() {
  const { canAccessScreen, userRole, isLoggedIn } = useApp();
  return { canAccessScreen, userRole, isLoggedIn };
}



