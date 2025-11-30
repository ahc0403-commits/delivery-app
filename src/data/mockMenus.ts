// ============================================
// MOCK MENU DATA
// Centralized menu/product data for the app
// ============================================

import type { MenuItem, MenuCategory } from '../types';

// ============================================
// MENU CATEGORIES
// ============================================
export const MENU_CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'top', label: 'Top Menu' },
  { id: 'main', label: 'Main' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
];

// ============================================
// SINDANG TTEOKBOKKI MENU
// ============================================
export const SINDANG_MENU: MenuItem[] = [
  {
    id: 'tteokbokki-original',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'top',
    name: '오리지널 떡볶이',
    nameVi: 'Original Tteokbokki',
    description: 'Chewy rice cakes in sweet & spicy sauce',
    price: 85000,
    priceDisplay: '85,000₫',
    image: 'https://images.unsplash.com/photo-1526576935508-6bccc1e07580?w=800&q=80',
  },
  {
    id: 'tteokbokki-cheese',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'top',
    name: '치즈 떡볶이',
    nameVi: 'Cheese Tteokbokki',
    description: 'Topped with melted mozzarella cheese',
    price: 95000,
    priceDisplay: '95,000₫',
    image: 'https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?w=800&q=80',
  },
  {
    id: 'tteokbokki-rose',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'main',
    name: '로제 떡볶이',
    nameVi: 'Rosé Tteokbokki',
    description: 'Creamy rosé sauce with rice cakes',
    price: 105000,
    priceDisplay: '105,000₫',
    image: 'https://images.unsplash.com/photo-1526576935508-6bccc1e07580?w=800&q=80',
  },
  {
    id: 'tteokbokki-seafood',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'main',
    name: '해물 떡볶이',
    nameVi: 'Seafood Tteokbokki',
    description: 'With shrimp, squid & fish cake',
    price: 125000,
    priceDisplay: '125,000₫',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
  },
  {
    id: 'fried-set',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'sides',
    name: '튀김 세트',
    nameVi: 'Fried Set',
    description: 'Assorted Korean fried snacks',
    price: 65000,
    priceDisplay: '65,000₫',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
  },
  {
    id: 'gimbap',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'sides',
    name: '김밥',
    nameVi: 'Gimbap Roll',
    description: 'Classic Korean seaweed rice roll',
    price: 45000,
    priceDisplay: '45,000₫',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
  },
  {
    id: 'cola',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'drinks',
    name: '콜라',
    nameVi: 'Coca-Cola',
    description: 'Chilled soft drink',
    price: 15000,
    priceDisplay: '15,000₫',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
  },
];

// ============================================
// KOREAN FRIED CHICKEN MENU
// ============================================
export const KFC_MENU: MenuItem[] = [
  {
    id: 'yangnyeom-chicken',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'top',
    name: '양념치킨',
    nameVi: 'Yangnyeom Chicken',
    description: 'Sweet & spicy glazed fried chicken',
    price: 180000,
    priceDisplay: '180,000₫',
    image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?w=800&q=80',
  },
  {
    id: 'fried-chicken',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'top',
    name: '후라이드치킨',
    nameVi: 'Original Fried Chicken',
    description: 'Classic crispy fried chicken',
    price: 160000,
    priceDisplay: '160,000₫',
    image: 'https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?w=800&q=80',
  },
  {
    id: 'half-half',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'main',
    name: '반반치킨',
    nameVi: 'Half & Half Chicken',
    description: 'Half yangnyeom, half fried',
    price: 185000,
    priceDisplay: '185,000₫',
    image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?w=800&q=80',
  },
  {
    id: 'soy-garlic',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'main',
    name: '간장치킨',
    nameVi: 'Soy Garlic Chicken',
    description: 'Sweet soy garlic glazed chicken',
    price: 175000,
    priceDisplay: '175,000₫',
    image: 'https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?w=800&q=80',
  },
  {
    id: 'chicken-mu',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'sides',
    name: '치킨무',
    nameVi: 'Pickled Radish',
    description: 'Sweet pickled radish cubes',
    price: 10000,
    priceDisplay: '10,000₫',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
  },
  {
    id: 'beer',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'drinks',
    name: '맥주',
    nameVi: 'Beer',
    description: 'Ice cold draft beer',
    price: 35000,
    priceDisplay: '35,000₫',
    image: 'https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=800&q=80',
  },
];

// ============================================
// HOME RECOMMENDATIONS
// ============================================
export const HOME_RECOMMENDATIONS: MenuItem[] = [
  {
    id: 'rec-yangnyeom',
    storeId: 'kfc-korean',
    storeName: 'Korean Fried Chicken',
    category: 'top',
    name: '양념치킨',
    nameVi: 'Gà Rán Sốt',
    description: 'Sweet & spicy glazed chicken',
    price: 180000,
    priceDisplay: '180,000₫',
    image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?w=800&q=80',
  },
  {
    id: 'rec-bibimbap',
    storeId: 'bibimbap-house',
    storeName: 'Bibimbap House',
    category: 'main',
    name: '비빔밥',
    nameVi: 'Cơm Trộn',
    description: 'Mixed rice with vegetables',
    price: 120000,
    priceDisplay: '120,000₫',
    image: 'https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?w=800&q=80',
  },
  {
    id: 'rec-tteokbokki',
    storeId: 'sindang',
    storeName: '신당 떡볶이',
    category: 'top',
    name: '떡볶이',
    nameVi: 'Bánh Gạo Cay',
    description: 'Spicy rice cakes',
    price: 95000,
    priceDisplay: '95,000₫',
    image: 'https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?w=800&q=80',
  },
];

// ============================================
// ALL MENUS BY STORE
// ============================================
export const STORE_MENUS: Record<string, MenuItem[]> = {
  'sindang': SINDANG_MENU,
  'kfc-korean': KFC_MENU,
};

// ============================================
// HELPER FUNCTIONS
// ============================================
export function getMenuByStoreId(storeId: string): MenuItem[] {
  return STORE_MENUS[storeId] || [];
}

export function getMenuItemById(itemId: string): MenuItem | undefined {
  return [...SINDANG_MENU, ...KFC_MENU].find(item => item.id === itemId);
}

export function getMenuByCategory(storeId: string, category: MenuCategory): MenuItem[] {
  const menu = getMenuByStoreId(storeId);
  return menu.filter(item => item.category === category);
}



