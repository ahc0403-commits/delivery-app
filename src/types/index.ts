// ============================================
// CORE TYPE DEFINITIONS
// Centralized types for the entire application
// ============================================

// ============================================
// USER & AUTH TYPES
// ============================================
export type UserRole = 'customer' | 'owner' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  membershipLevel?: 'basic' | 'wow' | 'premium';
  points?: number;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean;
}

// ============================================
// STORE & RESTAURANT TYPES
// ============================================
export interface Store {
  id: string;
  name: string;
  nameKo: string;
  nameVi?: string;
  category: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: string | number;
  distance?: string;
  image: string;
  badges?: StoreBadge[];
  isSponsored?: boolean;
  adProduct?: string;
}

export type StoreBadge = 'cheetah' | 'free-delivery' | 'new' | 'popular';

export interface StoreDetail extends Store {
  address: string;
  phone: string;
  businessHours: string;
  businessNumber: string;
  description?: string;
}

// ============================================
// MENU & PRODUCT TYPES
// ============================================
export interface MenuItem {
  id: string;
  storeId: string;
  storeName: string;
  category: MenuCategory;
  name: string;
  nameVi?: string;
  description: string;
  price: number;
  priceDisplay: string;
  image: string;
  isAvailable?: boolean;
  options?: MenuOption[];
}

export type MenuCategory = 'top' | 'main' | 'sides' | 'drinks' | 'dessert';

export interface MenuOption {
  id: string;
  name: string;
  price: number;
}

// ============================================
// CART & ORDER TYPES
// ============================================
export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  nameVi?: string;
  price: number;
  quantity: number;
  image?: string;
  options?: string[];
  storeName?: string;
  storeId?: string;
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'preparing' 
  | 'ready' 
  | 'delivering' 
  | 'delivered' 
  | 'cancelled';

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  storeId: string;
  storeName: string;
  items: CartItem[];
  status: OrderStatus;
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  deliveryAddress: Address;
  createdAt: string;
  estimatedDelivery?: string;
}

// ============================================
// PAYMENT TYPES
// ============================================
export type PaymentMethod = 'card' | 'momo' | 'zalopay' | 'cod';

export interface PaymentCard {
  id: string;
  type: 'visa' | 'mastercard' | 'jcb' | 'amex';
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault?: boolean;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

// ============================================
// ADDRESS TYPES
// ============================================
export interface Address {
  id: string;
  label: string;
  fullAddress: string;
  detail?: string;
  isDefault?: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// ============================================
// NAVIGATION TYPES
// ============================================
export interface Screen {
  id: string;
  name: string;
  component: React.ComponentType;
  requiresAuth?: boolean;
  allowedRoles?: UserRole[];
}

export type ScreenSection = 'customer' | 'owner' | 'admin';

// ============================================
// CATEGORY TYPES
// ============================================
export interface Category {
  id: string;
  icon: string;
  label: string;
  labelVi?: string;
  screenId?: string;
}

// ============================================
// REVIEW TYPES
// ============================================
export interface Review {
  id: string;
  orderId: string;
  storeId: string;
  userId: string;
  rating: number;
  tags: ReviewTag[];
  comment?: string;
  createdAt: string;
}

export type ReviewTag = 
  | 'delicious' 
  | 'value' 
  | 'portion' 
  | 'fresh' 
  | 'fast' 
  | 'packaging' 
  | 'kind' 
  | 'clean';

// ============================================
// ADMIN & OWNER TYPES
// ============================================
export interface WithdrawalRequest {
  id: string;
  storeId: string;
  storeName: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  bankAccount: BankAccount;
  createdAt: string;
}

export interface Dispute {
  id: string;
  orderId: string;
  userId: string;
  storeId: string;
  type: 'refund' | 'quality' | 'delivery' | 'other';
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  description: string;
  createdAt: string;
}



