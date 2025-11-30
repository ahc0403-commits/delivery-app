// ============================================
// MOCK CATEGORY DATA
// Centralized category and navigation data
// ============================================

import type { Category, ReviewTag } from '../types';

// ============================================
// HOME CATEGORIES
// ============================================
export const HOME_CATEGORIES: Category[] = [
  { id: 'korean', icon: '🍱', label: '한식', labelVi: 'Korean Food', screenId: 'koreanfood' },
  { id: 'kmart', icon: '🛒', label: 'K-Mart', labelVi: 'K-Mart', screenId: 'search' },
  { id: 'beauty', icon: '💄', label: '뷰티', labelVi: 'Beauty', screenId: 'search' },
  { id: 'pharmacy', icon: '💊', label: '약국', labelVi: 'Pharmacy', screenId: 'search' },
];

// ============================================
// FOOD CATEGORIES (Full list)
// ============================================
export const FOOD_CATEGORIES: Category[] = [
  { id: 'korean', icon: '🍱', label: '한식', labelVi: 'Korean' },
  { id: 'chicken', icon: '🍗', label: '치킨', labelVi: 'Chicken' },
  { id: 'pizza', icon: '🍕', label: '피자', labelVi: 'Pizza' },
  { id: 'burger', icon: '🍔', label: '버거', labelVi: 'Burger' },
  { id: 'chinese', icon: '🥟', label: '중식', labelVi: 'Chinese' },
  { id: 'japanese', icon: '🍣', label: '일식', labelVi: 'Japanese' },
  { id: 'vietnamese', icon: '🍜', label: '베트남', labelVi: 'Vietnamese' },
  { id: 'dessert', icon: '🍰', label: '디저트', labelVi: 'Dessert' },
  { id: 'coffee', icon: '☕', label: '카페', labelVi: 'Cafe' },
  { id: 'convenience', icon: '🏪', label: '편의점', labelVi: 'Convenience' },
];

// ============================================
// TRENDING SEARCH KEYWORDS
// ============================================
export const TRENDING_SEARCHES = [
  { rank: 1, keyword: 'Chicken', keywordKo: '치킨', emoji: '🍗' },
  { rank: 2, keyword: 'Tteokbokki', keywordKo: '떡볶이', emoji: '🌶️' },
  { rank: 3, keyword: 'Jokbal', keywordKo: '족발', emoji: '🥩' },
  { rank: 4, keyword: 'Bossam', keywordKo: '보쌈', emoji: '🥬' },
  { rank: 5, keyword: 'Kimchi Jjigae', keywordKo: '김치찌개', emoji: '🍲' },
];

// ============================================
// HOT KEYWORDS (for home screen)
// ============================================
export const HOT_KEYWORDS = [
  { keyword: '치킨', keywordVi: 'Gà rán', icon: '🔥' },
  { keyword: '떡볶이', keywordVi: 'Bánh gạo', icon: '⭐' },
  { keyword: '피자', keywordVi: 'Pizza', icon: '🍕' },
  { keyword: '김밥', keywordVi: 'Kimbap', icon: '✨' },
];

// ============================================
// FILTER OPTIONS
// ============================================
export const SORT_OPTIONS = [
  { id: 'ranking', label: '인기순 / Ranking', icon: 'TrendingUp' },
  { id: 'lowfee', label: '배달비 낮은순 / Low Fee', icon: 'DollarSign' },
  { id: 'nearme', label: '가까운순 / Near Me', icon: 'MapPin' },
  { id: 'rating', label: '평점 높은순 / Rating', icon: 'Star' },
  { id: 'fastest', label: '빠른배달 / Fastest', icon: 'Zap' },
];

export const FILTER_CHIPS = [
  { id: 'free-delivery', label: '무료배달', labelVi: 'Free Delivery' },
  { id: 'wow-member', label: 'Wow Member', labelVi: 'Wow Member' },
  { id: 'high-rating', label: '★4.5+', labelVi: '★4.5+' },
  { id: 'discount', label: '할인 / Discount', labelVi: 'Discount' },
];

// ============================================
// REVIEW TAGS
// ============================================
export const REVIEW_TAGS: { id: ReviewTag; emoji: string; labelKo: string; labelEn: string; color: string }[] = [
  { id: 'delicious', emoji: '😋', labelKo: 'JMT', labelEn: 'Delicious', color: 'orange' },
  { id: 'value', emoji: '💰', labelKo: '가성비 최고', labelEn: 'Good Value', color: 'green' },
  { id: 'portion', emoji: '📦', labelKo: '양이 많아요', labelEn: 'Generous Portion', color: 'blue' },
  { id: 'fresh', emoji: '✨', labelKo: '재료가 신선해요', labelEn: 'Fresh Ingredients', color: 'purple' },
  { id: 'fast', emoji: '⚡', labelKo: '배달이 빨라요', labelEn: 'Fast Delivery', color: 'yellow' },
  { id: 'packaging', emoji: '🎁', labelKo: '포장이 깔끔해요', labelEn: 'Great Packaging', color: 'pink' },
  { id: 'kind', emoji: '😊', labelKo: '사장님이 친절해요', labelEn: 'Friendly Owner', color: 'cyan' },
  { id: 'clean', emoji: '🧼', labelKo: '위생적이에요', labelEn: 'Very Clean', color: 'teal' },
];

// ============================================
// PAYMENT METHODS
// ============================================
export const PAYMENT_METHODS = [
  {
    id: 'card',
    name: '신용카드로 결제할게요',
    nameVi: 'Credit/Debit Card',
    icon: 'CreditCard',
    recommended: true,
    details: 'Visa, Mastercard',
  },
  {
    id: 'momo',
    name: 'MoMo로 결제할게요',
    nameVi: 'MoMo Wallet',
    icon: 'Wallet',
    recommended: false,
    details: '바로 결제돼요',
    color: '#A50064',
  },
  {
    id: 'zalo',
    name: 'ZaloPay로 결제할게요',
    nameVi: 'ZaloPay',
    icon: 'Wallet',
    recommended: false,
    details: '빠르고 안전해요',
    color: '#0068FF',
  },
  {
    id: 'cod',
    name: '현금으로 결제할게요',
    nameVi: 'Cash on Delivery',
    icon: 'DollarSign',
    recommended: false,
    details: '받으실 때 드려요',
  },
];

// ============================================
// ORDER STATUS STEPS
// ============================================
export const ORDER_STATUS_STEPS = [
  { id: 1, name: '주문완료', nameVi: 'Placed', icon: 'Check', status: 'completed' },
  { id: 2, name: '조리중', nameVi: 'Preparing', icon: 'Clock', status: 'active' },
  { id: 3, name: '배달중', nameVi: 'Delivery', icon: 'Truck', status: 'pending' },
  { id: 4, name: '배달완료', nameVi: 'Delivered', icon: 'Home', status: 'pending' },
];



