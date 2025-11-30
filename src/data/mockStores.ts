// ============================================
// MOCK STORE DATA
// Centralized store/restaurant data for the app
// ============================================

import type { Store, StoreDetail, StoreBadge } from '../types';

// ============================================
// FEATURED / SPONSORED STORES
// ============================================
export const SPONSORED_STORE: Store = {
  id: 'sponsored-1',
  name: "Kim's Kitchen",
  nameKo: '김씨네 주방',
  category: 'Korean Fusion',
  rating: 4.9,
  reviews: 1234,
  deliveryTime: '25-35 min',
  deliveryFee: '15,000 VND',
  distance: '1.2 km',
  image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
  badges: ['cheetah'],
  isSponsored: true,
  adProduct: 'Main Home Banner',
};

// ============================================
// MAIN RESTAURANT LIST
// ============================================
export const RESTAURANTS: Store[] = [
  {
    id: 'store-1',
    name: 'K-Chicken',
    nameKo: '케이 치킨',
    category: 'Korean Fried Chicken',
    rating: 4.8,
    reviews: 892,
    deliveryTime: '30-40 min',
    deliveryFee: 'Free',
    distance: '2.1 km',
    image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?w=800&q=80',
    badges: ['free-delivery'],
  },
  {
    id: 'store-2',
    name: 'Seoul Street',
    nameKo: '서울 거리',
    category: 'Street Food',
    rating: 4.7,
    reviews: 567,
    deliveryTime: '20-30 min',
    deliveryFee: '12,000 VND',
    distance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?w=800&q=80',
    badges: [],
  },
  {
    id: 'store-3',
    name: 'Busan BBQ',
    nameKo: '부산 바베큐',
    category: 'Korean BBQ',
    rating: 4.9,
    reviews: 2103,
    deliveryTime: '35-45 min',
    deliveryFee: '18,000 VND',
    distance: '3.5 km',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    badges: ['cheetah'],
  },
  {
    id: 'sindang',
    name: 'Sindang Tteokbokki',
    nameKo: '신당 떡볶이',
    nameVi: 'Tteokbokki Sindang',
    category: 'Street Food',
    rating: 4.9,
    reviews: 1234,
    deliveryTime: '15-25 min',
    deliveryFee: 0,
    distance: '1.8 km',
    image: 'https://images.unsplash.com/photo-1608120073766-c80051eccbf6?w=800&q=80',
    badges: ['free-delivery', 'popular'],
  },
  {
    id: 'kfc-korean',
    name: 'Korean Fried Chicken',
    nameKo: '케이 치킨 본점',
    category: 'Fried Chicken',
    rating: 4.8,
    reviews: 892,
    deliveryTime: '25-35 min',
    deliveryFee: 0,
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?w=800&q=80',
    badges: ['free-delivery', 'new'],
  },
];

// ============================================
// STORE DETAIL (expanded info)
// ============================================
export const STORE_DETAILS: Record<string, StoreDetail> = {
  'sindang': {
    id: 'sindang',
    name: 'Sindang Tteokbokki',
    nameKo: '신당 떡볶이',
    nameVi: 'Tteokbokki Sindang',
    category: 'Street Food',
    rating: 4.9,
    reviews: 1234,
    deliveryTime: '15-25 min',
    deliveryFee: 0,
    distance: '1.8 km',
    image: 'https://images.unsplash.com/photo-1608120073766-c80051eccbf6?w=800&q=80',
    badges: ['free-delivery', 'popular'],
    address: '123 Sindang-dong, Jung-gu, Seoul',
    phone: '+84-28-1234-5678',
    businessHours: 'Daily 11:00 AM - 10:00 PM',
    businessNumber: '123-45-67890',
    description: 'Authentic Korean street food since 1995',
  },
  'kfc-korean': {
    id: 'kfc-korean',
    name: 'Korean Fried Chicken',
    nameKo: '케이 치킨 본점',
    category: 'Fried Chicken',
    rating: 4.8,
    reviews: 892,
    deliveryTime: '25-35 min',
    deliveryFee: 0,
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?w=800&q=80',
    badges: ['free-delivery', 'new'],
    address: '456 Gangnam-gu, Seoul',
    phone: '+84-28-9876-5432',
    businessHours: 'Daily 10:00 AM - 11:00 PM',
    businessNumber: '987-65-43210',
    description: 'Best Korean Fried Chicken in Vietnam',
  },
};

// ============================================
// KOREAN FOOD CATEGORY STORES
// ============================================
export const KOREAN_FOOD_STORES: Store[] = [
  {
    id: 'bibimbap-house',
    name: 'Bibimbap House',
    nameKo: '비빔밥 하우스',
    category: 'Korean',
    rating: 4.7,
    reviews: 543,
    deliveryTime: '20-30 min',
    deliveryFee: 0,
    distance: '1.5 km',
    image: 'https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?w=800&q=80',
    badges: ['popular'],
  },
  {
    id: 'chicken-plus',
    name: 'Chicken Plus',
    nameKo: '치킨 플러스',
    category: 'Chicken',
    rating: 4.8,
    reviews: 892,
    deliveryTime: '25-35 min',
    deliveryFee: 0,
    distance: '2.0 km',
    image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?w=800&q=80',
    badges: ['new', 'free-delivery'],
  },
  {
    id: 'kimbap-heaven',
    name: 'Kimbap Heaven',
    nameKo: '김밥천국',
    category: 'Street Food',
    rating: 4.6,
    reviews: 678,
    deliveryTime: '15-20 min',
    deliveryFee: 0,
    distance: '0.8 km',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
    badges: ['cheetah'],
  },
];

// ============================================
// FEATURED BANNERS
// ============================================
export const FEATURED_BANNERS = [
  {
    id: 'kfcstore',
    image: 'https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?w=800&q=80',
    name: 'Korean Fried Chicken',
    nameKo: '케이 치킨 본점',
    badge: '🔥 오늘만 15% 할인',
    rating: 4.8,
    reviews: 892,
    time: '25-35분',
    deliveryFee: '무료배달',
  },
  {
    id: 'store',
    image: 'https://images.unsplash.com/photo-1608120073766-c80051eccbf6?w=800&q=80',
    name: '신당 떡볶이',
    nameKo: 'Sindang Tteokbokki',
    badge: '✨ 베스트 셀러',
    rating: 4.9,
    reviews: 1234,
    time: '15-25분',
    deliveryFee: '무료배달',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getStoreById(id: string): Store | undefined {
  return [...RESTAURANTS, SPONSORED_STORE].find(store => store.id === id);
}

export function getStoreDetail(id: string): StoreDetail | undefined {
  return STORE_DETAILS[id];
}

export function getStoresByCategory(category: string): Store[] {
  return RESTAURANTS.filter(store => 
    store.category.toLowerCase().includes(category.toLowerCase())
  );
}



