import { ChevronLeft, Package, ShoppingCart, TrendingUp, Star, Filter } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function IngredientsScreen() {
  const { navigate, goBack } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "소스", "고기", "야채", "곡물", "유제품"];

  const products = [
    {
      id: 1,
      name: "프리미엄 참기름",
      nameEn: "Premium Sesame Oil",
      category: "소스",
      price: 45000,
      unit: "1L",
      image: "🍯",
      badge: "인기",
      rating: 4.9,
      reviews: 128
    },
    {
      id: 2,
      name: "한우 등심",
      nameEn: "Korean Beef Sirloin",
      category: "고기",
      price: 89000,
      unit: "1kg",
      image: "🥩",
      badge: "프리미엄",
      rating: 5.0,
      reviews: 89
    },
    {
      id: 3,
      name: "유기농 상추",
      nameEn: "Organic Lettuce",
      category: "야채",
      price: 12000,
      unit: "500g",
      image: "🥬",
      badge: "신선",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 4,
      name: "특제 간장소스",
      nameEn: "Special Soy Sauce",
      category: "소스",
      price: 35000,
      unit: "2L",
      image: "🥫",
      badge: "베스트",
      rating: 4.9,
      reviews: 456
    },
    {
      id: 5,
      name: "국내산 삼겹살",
      nameEn: "Korean Pork Belly",
      category: "고기",
      price: 65000,
      unit: "1kg",
      image: "🥓",
      badge: "인기",
      rating: 4.7,
      reviews: 178
    },
    {
      id: 6,
      name: "백미",
      nameEn: "White Rice",
      category: "곡물",
      price: 52000,
      unit: "10kg",
      image: "🌾",
      badge: "가성비",
      rating: 4.6,
      reviews: 312
    }
  ];

  const filteredProducts = selectedCategory === "전체" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="h-screen overflow-y-auto bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[#004D32] text-white px-5 py-6 relative">
        <button
          onClick={goBack}
          className="absolute top-6 left-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>

        <div className="text-center mt-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Package className="w-6 h-6" />
            <h1 className="text-[22px]">원재료 주문</h1>
          </div>
          <p className="text-[13px] text-white/90">Ingredients Wholesale</p>
          <div className="mt-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 inline-block">
            <span className="text-[11px]">🏆 B2B 전용 폐쇄몰</span>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mx-5 mt-4 bg-gradient-to-r from-blue-50 to-primary/5 rounded-[16px] p-4 border border-primary/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[14px] mb-1" style={{ fontWeight: 600 }}>
              경쟁력 있는 가격으로 납품해드려요
            </p>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              소스, 고기, 야채 등 프리미엄 원재료를 도매가로 제공합니다<br />
              <span className="text-primary">최소 주문 금액: 100,000원</span>
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-5 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[15px]" style={{ fontWeight: 600 }}>카테고리</h3>
          <button className="ml-auto text-[12px] text-primary flex items-center gap-1">
            <Filter className="w-4 h-4" />
            필터
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-foreground border border-border hover:border-primary"
              }`}
            >
              <span className="text-[13px]">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-5 mt-6 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => {/* TODO: 상품 상세 */}}
              className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
                <span className="text-[60px]">{product.image}</span>
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                <p className="text-[13px] mb-1 text-left line-clamp-1" style={{ fontWeight: 600 }}>
                  {product.name}
                </p>
                <p className="text-[11px] text-muted-foreground text-left mb-2 line-clamp-1">
                  {product.nameEn}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-[11px]">{product.rating}</span>
                  <span className="text-[11px] text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[16px] text-primary" style={{ fontWeight: 700 }}>
                      {product.price.toLocaleString()}원
                    </p>
                    <p className="text-[11px] text-muted-foreground">{product.unit}</p>
                  </div>
                  <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Global Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}