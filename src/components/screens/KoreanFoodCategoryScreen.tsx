import { ChevronLeft, Star, Clock, Flame, SlidersHorizontal, Heart, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNavigation } from "../../App";
import { useState } from "react";
import { BottomNavBar } from "../BottomNavBar";

// Featured Banner Stores - 배달의민족 스타일 히어로 배너
const featuredStores = [
  {
    id: "kfcstore",
    image: "https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW4lMjB3aW5nc3xlbnwxfHx8fDE3NjQ0MzQ4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Korean Fried Chicken",
    nameKo: "케이 치킨 본점",
    badge: "🔥 오늘만 15% 할인",
    rating: 4.8,
    reviews: 892,
    time: "25-35분",
    deliveryFee: "무료배달",
  },
  {
    id: "store",
    image: "https://images.unsplash.com/photo-1608120073766-c80051eccbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMHR0ZW9rYm9ra2klMjBrb3JlYW4lMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc2NDQ2MzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "신당 떡볶이",
    nameKo: "Sindang Tteokbokki",
    badge: "✨ 베스트 셀러",
    rating: 4.9,
    reviews: 1234,
    time: "15-25분",
    deliveryFee: "무료배달",
  },
];

// Regular Store List - 쿠팡이츠 스타일 리스트
const koreanStores = [
  {
    id: "store",
    image: "https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJpbWJhcCUyMGJvd2x8ZW58MXx8fHwxNzY0NDU0Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "비빔밥 하우스",
    nameEn: "Bibimbap House",
    cuisine: "한식 • Korean",
    rating: 4.7,
    reviews: 543,
    time: "20-30분",
    deliveryFee: "무료",
    discount: null,
    tags: ["인기", "리뷰많음"],
  },
  {
    id: "kfcstore",
    image: "https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDE4Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "치킨 플러스",
    nameEn: "Chicken Plus",
    cuisine: "치킨 • Chicken",
    rating: 4.8,
    reviews: 892,
    time: "25-35분",
    deliveryFee: "무료",
    discount: "15%",
    tags: ["신메뉴", "할인"],
  },
  {
    id: "store",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "김밥천국",
    nameEn: "Kimbap Heaven",
    cuisine: "분식 • Street Food",
    rating: 4.6,
    reviews: 678,
    time: "15-20분",
    deliveryFee: "무료",
    discount: null,
    tags: ["빠른배달"],
  },
  {
    id: "store",
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "매운 떡볶이",
    nameEn: "Spicy Tteokbokki",
    cuisine: "분식 • Street Food",
    rating: 4.5,
    reviews: 432,
    time: "20-25분",
    deliveryFee: "2,000₫",
    discount: "10%",
    tags: ["할인"],
  },
  {
    id: "kfcstore",
    image: "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpfGVufDF8fHx8MTc2NDQxMzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "한식 정원",
    nameEn: "Korean Garden",
    cuisine: "한식 • Korean",
    rating: 4.9,
    reviews: 1021,
    time: "30-40분",
    deliveryFee: "무료",
    discount: null,
    tags: ["고급", "인기"],
  },
  {
    id: "store",
    image: "https://images.unsplash.com/photo-1608120073766-c80051eccbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMHR0ZW9rYm9ra2klMjBrb3JlYW4lMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc2NDQ2MzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "국밥 명가",
    nameEn: "Gukbap Master",
    cuisine: "한식 • Korean",
    rating: 4.7,
    reviews: 765,
    time: "25-30분",
    deliveryFee: "무료",
    discount: null,
    tags: ["리뷰많음"],
  },
];

export function KoreanFoodCategoryScreen() {
  const { goBack, navigate } = useNavigation();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [likedStores, setLikedStores] = useState<Set<string>>(new Set());

  const toggleLike = (storeId: string) => {
    const newLiked = new Set(likedStores);
    if (newLiked.has(storeId)) {
      newLiked.delete(storeId);
    } else {
      newLiked.add(storeId);
    }
    setLikedStores(newLiked);
  };

  return (
    <div className="h-screen overflow-y-auto bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-5 py-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
        <button 
          onClick={goBack}
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        
        <div className="flex-1 text-center">
          <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
            🍱 한식 Korean Food
          </h1>
          <p className="text-[11px] text-muted-foreground">
            Authentic Korean Cuisine
          </p>
        </div>

        <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95">
          <SlidersHorizontal className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </div>

      {/* Featured Banners - 배달의민족 스타일 */}
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" fill="currentColor" strokeWidth={0} />
            <h2 className="text-[16px]" style={{ fontWeight: 700 }}>
              지금 HOT한 가게 🔥
            </h2>
          </div>
          <div className="flex gap-1">
            {featuredStores.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentBanner === idx ? "bg-primary w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Swipeable Banner */}
        <div className="relative overflow-hidden rounded-[16px] mb-6">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentBanner * 100}%)` }}
          >
            {featuredStores.map((store, idx) => (
              <div
                key={idx}
                onClick={() => navigate(store.id)}
                className="w-full flex-shrink-0 relative h-[220px] cursor-pointer active:scale-[0.98] transition-transform"
              >
                <ImageWithFallback
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover rounded-[16px]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-[16px]" />
                
                {/* Badge - Top Left */}
                <div className="absolute top-3 left-3">
                  <div className="bg-primary px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-white text-[11px]" style={{ fontWeight: 700 }}>
                      {store.badge}
                    </span>
                  </div>
                </div>

                {/* Heart - Top Right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(store.id);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedStores.has(store.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                    }`}
                    strokeWidth={2.5}
                  />
                </button>

                {/* Store Info - Bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-[20px] mb-1" style={{ fontWeight: 700 }}>
                    {store.name}
                  </h3>
                  <p className="text-white/90 text-[13px] mb-2">{store.nameKo}</p>
                  
                  <div className="flex items-center gap-3 text-white text-[12px]">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" strokeWidth={0} />
                      <span style={{ fontWeight: 600 }}>{store.rating}</span>
                      <span className="text-white/70">({store.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{store.time}</span>
                    </div>
                    <div className="bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      <span style={{ fontWeight: 600 }}>{store.deliveryFee}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Manual Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
            <button
              onClick={() => setCurrentBanner(Math.max(0, currentBanner - 1))}
              disabled={currentBanner === 0}
              className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all ${
                currentBanner === 0 ? "opacity-0" : "opacity-100 hover:scale-110"
              }`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setCurrentBanner(Math.min(featuredStores.length - 1, currentBanner + 1))}
              disabled={currentBanner === featuredStores.length - 1}
              className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all rotate-180 ${
                currentBanner === featuredStores.length - 1 ? "opacity-0" : "opacity-100 hover:scale-110"
              }`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Bar - 쿠팡이츠 스타일 */}
      <div className="px-5 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          <button className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-full text-[12px] shadow-sm" style={{ fontWeight: 600 }}>
            무료배달
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-white border border-border rounded-full text-[12px] hover:border-primary transition-colors" style={{ fontWeight: 500 }}>
            ⭐ 평점 높은 순
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-white border border-border rounded-full text-[12px] hover:border-primary transition-colors" style={{ fontWeight: 500 }}>
            💰 할인 중
          </button>
          <button className="flex-shrink-0 px-4 py-2 bg-white border border-border rounded-full text-[12px] hover:border-primary transition-colors" style={{ fontWeight: 500 }}>
            ⚡ 빠른배달
          </button>
        </div>
      </div>

      {/* Store List - 일반 추천 */}
      <div className="px-5 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[16px]" style={{ fontWeight: 700 }}>
            전체 가게 ({koreanStores.length})
          </h2>
          <button className="text-[12px] text-muted-foreground flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>인기순</span>
          </button>
        </div>

        <div className="space-y-3">
          {koreanStores.map((store, idx) => (
            <button
              key={idx}
              onClick={() => navigate(store.id)}
              className="w-full bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-[0.98] border border-border/50"
            >
              <div className="flex gap-3 p-3">
                {/* Store Image */}
                <div className="relative flex-shrink-0 w-[110px] h-[110px] rounded-[12px] overflow-hidden">
                  <ImageWithFallback
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  {store.discount && (
                    <div className="absolute top-2 left-2 bg-[#FF4E50] text-white px-2 py-1 rounded-full text-[10px]" style={{ fontWeight: 700 }}>
                      {store.discount} OFF
                    </div>
                  )}
                  
                  {/* Heart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(store.id + idx);
                    }}
                    className="absolute bottom-2 right-2 w-7 h-7 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedStores.has(store.id + idx) ? "fill-red-500 text-red-500" : "text-gray-700"
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                </div>

                {/* Store Info */}
                <div className="flex-1 min-w-0 text-left flex flex-col justify-between py-1">
                  <div>
                    <h3 className="text-[15px] mb-0.5 truncate" style={{ fontWeight: 600 }}>
                      {store.name}
                    </h3>
                    <p className="text-[12px] text-muted-foreground mb-1 truncate">
                      {store.nameEn}
                    </p>
                    <p className="text-[11px] text-muted-foreground mb-2">
                      {store.cuisine}
                    </p>
                  </div>

                  {/* Tags */}
                  {store.tags && store.tags.length > 0 && (
                    <div className="flex gap-1 mb-2 flex-wrap">
                      {store.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full"
                          style={{ fontWeight: 600 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Rating & Info */}
                  <div className="flex items-center gap-2 text-[11px]">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" strokeWidth={0} />
                      <span style={{ fontWeight: 600 }}>{store.rating}</span>
                      <span className="text-muted-foreground">({store.reviews})</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-0.5">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>{store.time}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <span className={store.deliveryFee === "무료" ? "text-primary" : "text-muted-foreground"} style={{ fontWeight: 600 }}>
                      {store.deliveryFee === "무료" ? "무료배달" : store.deliveryFee}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}