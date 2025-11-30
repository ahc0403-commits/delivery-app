import { Star, Clock, Zap, TrendingUp, DollarSign, MapPin, Home, Search, ShoppingBag, User, Megaphone, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const filterTabs = [
  { id: "ranking", label: "인기순 / Ranking", icon: TrendingUp },
  { id: "lowfee", label: "배달비 낮은순 / Low Fee", icon: DollarSign },
  { id: "nearme", label: "가까운순 / Near Me", icon: MapPin },
];

// Super Premium Slot - Ad Approved Store (Top Position)
const sponsoredRestaurant = {
  id: 999,
  name: "Kim's Kitchen",
  nameKo: "김씨네 주방",
  category: "Korean Fusion",
  rating: 4.9,
  reviews: 1234,
  deliveryTime: "25-35 min",
  deliveryFee: "15,000 VND",
  badges: ["cheetah"],
  distance: "1.2 km",
  image: "korean restaurant food",
  isSponsored: true,
  adProduct: "Main Home Banner",
  adProductKo: "메인 홈 배너",
};

const restaurants = [
  {
    id: 1,
    name: "K-Chicken",
    nameKo: "케이 치킨",
    category: "Korean Fried Chicken",
    rating: 4.8,
    reviews: 892,
    deliveryTime: "30-40 min",
    deliveryFee: "Free",
    badges: ["free-delivery"],
    distance: "2.1 km",
    image: "korean fried chicken",
  },
  {
    id: 2,
    name: "Seoul Street",
    nameKo: "서울 거리",
    category: "Street Food",
    rating: 4.7,
    reviews: 567,
    deliveryTime: "20-30 min",
    deliveryFee: "12,000 VND",
    badges: [],
    distance: "0.8 km",
    image: "korean street food",
  },
  {
    id: 3,
    name: "Busan BBQ",
    nameKo: "부산 바베큐",
    category: "Korean BBQ",
    rating: 4.9,
    reviews: 2103,
    deliveryTime: "35-45 min",
    deliveryFee: "18,000 VND",
    badges: ["cheetah"],
    distance: "3.5 km",
    image: "korean bbq meat",
  },
  {
    id: 4,
    name: "Kim's Kitchen",
    nameKo: "김씨네 주방",
    category: "Korean Fusion",
    rating: 4.9,
    reviews: 1234,
    deliveryTime: "25-35 min",
    deliveryFee: "15,000 VND",
    badges: ["cheetah"],
    distance: "1.2 km",
    image: "korean restaurant food",
  },
  {
    id: 5,
    name: "K-Chicken",
    nameKo: "케이 치킨",
    category: "Korean Fried Chicken",
    rating: 4.8,
    reviews: 892,
    deliveryTime: "30-40 min",
    deliveryFee: "Free",
    badges: ["free-delivery"],
    distance: "2.1 km",
    image: "korean fried chicken",
  },
  {
    id: 6,
    name: "Seoul Street",
    nameKo: "서울 거리",
    category: "Street Food",
    rating: 4.7,
    reviews: 567,
    deliveryTime: "20-30 min",
    deliveryFee: "12,000 VND",
    badges: [],
    distance: "0.8 km",
    image: "korean street food",
  },
  {
    id: 7,
    name: "Busan BBQ",
    nameKo: "부산 바베큐",
    category: "Korean BBQ",
    rating: 4.9,
    reviews: 2103,
    deliveryTime: "35-45 min",
    deliveryFee: "18,000 VND",
    badges: ["cheetah"],
    distance: "3.5 km",
    image: "korean bbq meat",
  },
];

export function RestaurantFeedScreen() {
  const { navigate, adApproved } = useNavigation();
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Header - Simple */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <h1 className="text-[20px] mb-1">맛집 리스트 / Restaurant Feed</h1>
            <p className="text-[12px] text-muted-foreground">District 1, Ho Chi Minh City</p>
          </div>
          <button className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-[18px]">🔔</span>
          </button>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="bg-white border-b border-border shadow-sm sticky top-0 z-30">
        <div className="flex gap-2 px-5 py-3 overflow-x-auto no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[12px] border-2 transition-all ${
                tab.id === "ranking"
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-foreground border-border hover:bg-accent"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-[12px] whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Restaurant List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 pb-24">
        {/* SUPER PREMIUM SLOT - Sponsored Ad (Always First) */}
        <div className="relative">
          {/* Ad Explanation Banner */}
          <div className={`mb-2 rounded-[12px] p-3 border-2 transition-all ${
            adApproved 
              ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-300 shadow-md" 
              : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
          }`}>
            <div className="flex items-start gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                adApproved ? "bg-green-100" : "bg-blue-100"
              }`}>
                <Megaphone className={`w-4 h-4 ${adApproved ? "text-green-600" : "text-blue-600"}`} />
              </div>
              <div>
                <p className={`text-[11px] mb-1 ${adApproved ? "text-green-900" : "text-blue-900"}`}>
                  {adApproved ? "✅ Ad Approved & Published!" : "💡 Ad Ranking Logic"}
                </p>
                <p className={`text-[10px] leading-relaxed ${adApproved ? "text-green-700" : "text-blue-700"}`}>
                  {adApproved 
                    ? "This sponsored ad was just approved by admin and is now live! 광고가 승인되어 게시되었습니다!"
                    : `This store is shown at the top because they purchased the "${sponsoredRestaurant.adProductKo}" (${sponsoredRestaurant.adProduct}) ad product. Premium placement drives more visibility.`
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Sponsored Restaurant Card */}
          <div 
            onClick={() => navigate("store")}
            className="bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-white rounded-[16px] shadow-lg overflow-hidden border-2 border-orange-200 hover:shadow-xl transition-shadow relative cursor-pointer active:scale-[0.98]"
          >
            {/* Restaurant Image - CINEMAGRAPH EFFECT */}
            <div className="relative h-48 overflow-hidden">
              {/* Base Image with Subtle Animation */}
              <div className="relative w-full h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80"
                  alt={sponsoredRestaurant.name}
                  className="w-full h-full object-cover animate-subtle-zoom"
                />
                
                {/* Animated Steam Effect - Multiple Layers */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Steam Layer 1 */}
                  <div className="absolute bottom-0 left-[20%] w-16 h-32 bg-gradient-to-t from-white/30 via-white/10 to-transparent rounded-full blur-md animate-steam-rise-1"></div>
                  {/* Steam Layer 2 */}
                  <div className="absolute bottom-0 left-[45%] w-20 h-36 bg-gradient-to-t from-white/25 via-white/8 to-transparent rounded-full blur-lg animate-steam-rise-2"></div>
                  {/* Steam Layer 3 */}
                  <div className="absolute bottom-0 left-[70%] w-14 h-28 bg-gradient-to-t from-white/20 via-white/6 to-transparent rounded-full blur-md animate-steam-rise-3"></div>
                </div>

                {/* Bubbling/Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[40%] left-[30%] w-3 h-3 bg-white/40 rounded-full blur-sm animate-bubble-1"></div>
                  <div className="absolute top-[50%] left-[55%] w-2 h-2 bg-white/30 rounded-full blur-sm animate-bubble-2"></div>
                  <div className="absolute top-[45%] left-[75%] w-2.5 h-2.5 bg-white/35 rounded-full blur-sm animate-bubble-3"></div>
                </div>
              </div>
              
              {/* Overlay Gradient - Slightly warmer for sponsored */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-black/20 to-transparent"></div>

              {/* LIVE/Play Badge - Top Left */}
              <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                {/* LIVE Badge */}
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-full text-[10px] shadow-lg flex items-center gap-2 animate-pulse-subtle border border-red-700">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-semibold">LIVE</span>
                </div>
                
                {/* Play Icon Badge - Alternative Indicator */}
                <div className="bg-black/70 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-full text-[10px] shadow-lg flex items-center gap-1.5 border border-white/20">
                  <Play className="w-3 h-3 fill-white" strokeWidth={0} />
                  <span className="font-medium">Video</span>
                </div>
              </div>

              {/* Top Right Corner - Cheetah & AD Badge Stack */}
              <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 items-end">
                {/* AD Badge */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-3 py-1.5 rounded-full text-[10px] shadow-lg flex items-center gap-1.5 border border-orange-700">
                  <Megaphone className="w-3 h-3" />
                  <span>AD • 광고</span>
                </div>
                
                {/* Cheetah Badge */}
                <div className="bg-gradient-to-r from-primary to-[#00553D] text-white px-3 py-1.5 rounded-full text-[11px] shadow-lg flex items-center gap-1.5 border border-[#00704A]">
                  <Zap className="w-3.5 h-3.5 fill-white" />
                  <span>Cheetah</span>
                </div>
              </div>

              {/* Rating Badge on Image */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-[13px]">{sponsoredRestaurant.rating}</span>
              </div>

              {/* Store Name Overlay - Bottom */}
              <div className="absolute bottom-3 left-3 max-w-[60%]">
                <h3 className="text-white text-[18px] drop-shadow-lg mb-1" style={{ fontWeight: 700 }}>
                  {sponsoredRestaurant.nameKo}
                </h3>
                <p className="text-white/90 text-[12px] drop-shadow-md">
                  {sponsoredRestaurant.name}
                </p>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="p-4 bg-gradient-to-b from-orange-50/30 to-white">
              {/* Sponsored Label */}
              <div className="mb-2 flex items-center gap-2">
                <div className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-md text-[10px] border border-orange-300 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>Sponsored / 스포트서</span>
                </div>
                <div className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-[9px] border border-blue-200">
                  {sponsoredRestaurant.adProduct}
                </div>
              </div>

              {/* Name & Category */}
              <div className="mb-3">
                <h3 className="text-[17px] mb-1">{sponsoredRestaurant.nameKo}</h3>
                <p className="text-[13px] text-muted-foreground mb-1">{sponsoredRestaurant.name}</p>
                <p className="text-[11px] text-primary">{sponsoredRestaurant.category}</p>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-3 mb-3 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span>{sponsoredRestaurant.rating}</span>
                  <span className="text-[10px]">({sponsoredRestaurant.reviews.toLocaleString()})</span>
                </div>
                <span className="text-border">|</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{sponsoredRestaurant.deliveryTime}</span>
                </div>
                <span className="text-border">|</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{sponsoredRestaurant.distance}</span>
                </div>
              </div>

              {/* Delivery Fee */}
              <div className="flex items-center justify-between pt-3 border-t border-orange-200">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-foreground">배달비 / Delivery</span>
                  <span className="text-[14px] text-foreground">{sponsoredRestaurant.deliveryFee}</span>
                </div>
                <button className="bg-gradient-to-r from-primary to-orange-600 text-white px-5 py-2.5 rounded-[10px] text-[12px] shadow-md hover:shadow-lg transition-all active:scale-95">
                  주문하기 / Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-[11px] text-muted-foreground">일반 검색 결과 / Organic Results</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* Regular Organic Restaurants */}
        {restaurants.map((restaurant, idx) => (
          <div
            key={restaurant.id}
            onClick={() => navigate("store")}
            className="bg-white rounded-[16px] shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer active:scale-[0.98]"
          >
            {/* Restaurant Image */}
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={`https://images.unsplash.com/photo-1${idx % 2 === 0 ? "6" : "5"}26082927389-6cd097cdc6ec?w=800&q=80`}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Badges on Image */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {restaurant.badges.includes("cheetah") && (
                  <div className="bg-gradient-to-r from-primary to-orange-500 text-white px-3 py-1.5 rounded-full text-[11px] shadow-lg flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Cheetah Delivery</span>
                  </div>
                )}
                {restaurant.badges.includes("free-delivery") && (
                  <div className="bg-green-600 text-white px-3 py-1.5 rounded-full text-[11px] shadow-lg flex items-center gap-1.5">
                    <span>🎁</span>
                    <span>Free Delivery</span>
                  </div>
                )}
              </div>

              {/* Rating Badge on Image */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-[13px]">{restaurant.rating}</span>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="p-4">
              {/* Name & Category */}
              <div className="mb-3">
                <h3 className="text-[17px] mb-1">{restaurant.nameKo}</h3>
                <p className="text-[13px] text-muted-foreground mb-1">{restaurant.name}</p>
                <p className="text-[11px] text-primary">{restaurant.category}</p>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-3 mb-3 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span>{restaurant.rating}</span>
                  <span className="text-[10px]">({restaurant.reviews.toLocaleString()})</span>
                </div>
                <span className="text-border">|</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <span className="text-border">|</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{restaurant.distance}</span>
                </div>
              </div>

              {/* Delivery Fee */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-foreground">배달비 / Delivery</span>
                  <span
                    className={`text-[14px] ${
                      restaurant.deliveryFee === "Free" ? "text-green-600" : "text-foreground"
                    }`}
                  >
                    {restaurant.deliveryFee}
                  </span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-[10px] text-[12px] shadow-md hover:shadow-lg transition-all active:scale-95">
                  주문하기 / Order
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Load More Card */}
        <div className="bg-accent rounded-[16px] p-6 text-center border border-border">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <p className="text-[14px] mb-2">더 많은 맛집 보기</p>
          <p className="text-[12px] text-muted-foreground mb-4">Load More Restaurants</p>
          <button className="bg-white border-2 border-primary text-primary px-6 py-2.5 rounded-[10px] text-[13px] hover:bg-primary/5 transition-colors">
            + 20개 더 보기 / Load 20 More
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}