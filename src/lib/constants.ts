// ============================================
// APPLICATION CONSTANTS
// Centralized constants and configuration
// ============================================

// ============================================
// BRAND COLORS (Design System)
// ============================================
export const COLORS = {
  // Primary Brand Colors
  primary: {
    main: '#00704A',      // Deep Green (Deliberry Nara Brand)
    light: '#00A86B',
    dark: '#004D32',
    foreground: '#FFFFFF',
  },
  
  // Accent Colors
  accent: {
    strawberry: '#FF4E50',  // Strawberry Red (Secondary Brand)
    orange: '#F37021',      // CTA Orange
    warning: '#FFB800',
    success: '#22C55E',
    error: '#D4183D',
  },
  
  // Neutral Colors
  neutral: {
    background: '#FFF8E1',  // Cream background
    card: '#FFFFFF',
    muted: '#F5F5F5',
    border: 'rgba(0, 0, 0, 0.08)',
  },
  
  // Text Colors
  text: {
    primary: '#1A1A1A',
    secondary: '#737373',
    muted: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  
  // External Brand Colors (for integrations)
  external: {
    kakao: '#FEE500',
    zalo: '#0068FF',
    grab: '#00B14F',
    momo: '#A50064',
  },
} as const;

// ============================================
// SPACING & SIZING
// ============================================
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

// ============================================
// TYPOGRAPHY
// ============================================
export const FONT_SIZES = {
  xs: 10,
  sm: 12,
  base: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
} as const;

export const FONT_WEIGHTS = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// ============================================
// APP CONFIGURATION
// ============================================
export const APP_CONFIG = {
  name: 'Deliberry Nara',
  nameKo: '배달나라',
  tagline: 'Korea × Vietnam',
  version: '1.0.0',
  
  // Business settings
  minOrderAmount: 50000, // VND
  defaultDeliveryFee: 15000, // VND
  serviceFeePercent: 0.02, // 2%
  
  // Delivery settings
  estimatedDeliveryMinutes: {
    min: 25,
    max: 45,
  },
} as const;

// ============================================
// CURRENCY FORMATTING
// ============================================
export const CURRENCY = {
  code: 'VND',
  symbol: '₫',
  locale: 'vi-VN',
} as const;

export function formatCurrency(amount: number): string {
  return `${amount.toLocaleString(CURRENCY.locale)}${CURRENCY.symbol}`;
}

// ============================================
// SCREEN IDS (for navigation)
// ============================================
export const SCREEN_IDS = {
  // Auth/Onboarding
  SPLASH: 'splash',
  AUTH_PERMISSION: 'authpermission',
  PHONE_VERIFY: 'phoneverify',
  WELCOME: 'welcome',
  APP_PERMISSIONS: 'apppermissions',
  
  // Customer Main
  HOME: 'home',
  FEED: 'feed',
  SEARCH: 'search',
  CART: 'cart',
  MY_PAGE: 'mypage',
  
  // Store
  KOREAN_FOOD: 'koreanfood',
  STORE_DETAIL: 'store',
  KFC_STORE: 'kfcstore',
  
  // Order Flow
  PAYMENT: 'payment',
  CARD_TYPE: 'cardtype',
  ORDER_STATUS: 'status',
  DELIVERY_MAP: 'map',
  RECEIPT: 'receipt',
  WRITE_REVIEW: 'review',
  
  // Owner
  OWNER_HOME: 'ownerhome',
  OWNER_DASHBOARD: 'ownerdash',
  NEW_ORDER: 'neworder',
  ACTIVE_ORDERS: 'activeorders',
  MENU_MANAGEMENT: 'menu',
  BIZ_WALLET: 'wallet',
  
  // Admin
  ADMIN_DASHBOARD: 'admindash',
  ADMIN_FINANCE: 'adminfinance',
  ADMIN_DISPUTE: 'admindispute',
  ADMIN_ANALYTICS: 'adminanalytics',
} as const;

// ============================================
// AUTH SCREENS (no bottom nav)
// ============================================
export const AUTH_SCREENS = [
  SCREEN_IDS.SPLASH,
  SCREEN_IDS.AUTH_PERMISSION,
  SCREEN_IDS.PHONE_VERIFY,
  SCREEN_IDS.WELCOME,
  SCREEN_IDS.APP_PERMISSIONS,
] as const;

// ============================================
// PROTECTED SCREENS (require specific roles)
// ============================================
export const PROTECTED_SCREENS = {
  owner: [
    SCREEN_IDS.OWNER_HOME,
    SCREEN_IDS.OWNER_DASHBOARD,
    SCREEN_IDS.NEW_ORDER,
    SCREEN_IDS.ACTIVE_ORDERS,
    SCREEN_IDS.MENU_MANAGEMENT,
    SCREEN_IDS.BIZ_WALLET,
    'todaysales',
    'bankaccountregistration',
    'withdrawalrequest',
    'rawmaterials',
    'report',
    'marketing',
    'insights',
    'premiumsubscription',
    'franchise',
    'franchisereport',
    'branchmanagement',
  ],
  admin: [
    SCREEN_IDS.ADMIN_DASHBOARD,
    SCREEN_IDS.ADMIN_FINANCE,
    SCREEN_IDS.ADMIN_DISPUTE,
    SCREEN_IDS.ADMIN_ANALYTICS,
    'userprofiles',
    'menudatabase',
    'searchintelligence',
    'pendingactions',
    'withdrawalapproval',
    'adminfranchise',
    'franchisesubscription',
    'adminadreview',
    'admindiscipline',
  ],
} as const;



