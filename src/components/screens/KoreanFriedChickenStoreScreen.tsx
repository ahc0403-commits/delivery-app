import { Phone, MessageSquare, Users, Share2, Heart, ChevronLeft, ChevronDown, ChevronUp, Plus, Star, Clock, MapPin, FileText, ThumbsUp, Camera } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNavigation } from "../../App";
import { useState, useRef } from "react";
import { BottomNavBar } from "../BottomNavBar";
import { useCart } from "../../contexts/CartContext";
import { FloatingCartButton } from "../FloatingCartButton";

const menuCategories = [
  { id: "popular", label: "인기 메뉴" },
  { id: "chicken", label: "치킨" },
  { id: "sides", label: "사이드" },
  { id: "drinks", label: "음료" },
];

const menuItems = [
  {
    id: "chicken-yangnyeom",
    category: "popular",
    image: "https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDE4Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "양념치킨",
    nameVi: "Spicy Sweet Chicken",
    description: "Our signature sweet & spicy glazed chicken",
    price: 180000,
    priceDisplay: "180,000₫",
    badge: "🔥 베스트",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "chicken-honey-butter",
    category: "popular",
    image: "https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmillZCUyMGNoaWNrZW4lMjB3aW5nc3xlbnwxfHx8fDE3NjQ0MzQ4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "허니 버터 치킨",
    nameVi: "Honey Butter Chicken",
    description: "Sweet honey butter glazed crispy chicken",
    price: 185000,
    priceDisplay: "185,000₫",
    badge: "✨ 신메뉴",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "chicken-fried",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmillZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDE4Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "후라이드 치킨",
    nameVi: "Original Fried Chicken",
    description: "Classic crispy golden fried chicken",
    price: 165000,
    priceDisplay: "165,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "chicken-soy-garlic",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmillZCUyMGNoaWNrZW4lMjB3aW5nc3xlbnwxfHx8fDE3NjQ0MzQ4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "간장치킨",
    nameVi: "Soy Garlic Chicken",
    description: "Savory soy garlic glazed chicken",
    price: 175000,
    priceDisplay: "175,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "chicken-half",
    category: "chicken",
    image: "https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmillZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDE4Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "반반치킨",
    nameVi: "Half & Half",
    description: "Half fried & half seasoned chicken",
    price: 180000,
    priceDisplay: "180,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "side-cheese-balls",
    category: "sides",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NjQ0NTg3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "치즈볼",
    nameVi: "Cheese Balls",
    description: "Deep-fried crispy mozzarella balls",
    price: 45000,
    priceDisplay: "45,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "side-fries",
    category: "sides",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmillZxlbnwxfHx8fDE3NjQ0NTg3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "감자튀김",
    nameVi: "French Fries",
    description: "Crispy golden french fries",
    price: 35000,
    priceDisplay: "35,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "side-coleslaw",
    category: "sides",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "코울슬로",
    nameVi: "Coleslaw",
    description: "Fresh cabbage salad with mayo",
    price: 25000,
    priceDisplay: "25,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "drink-cola",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xhJTIwZHJpbmt8ZW58MXx8fHwxNzY0NDU4Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "콜라",
    nameVi: "Coca-Cola",
    description: "Chilled soft drink",
    price: 15000,
    priceDisplay: "15,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
  {
    id: "drink-beer",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xhJTIwZHJpbmt8ZW58MXx8fHwxNzY0NDU4Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "맥주",
    nameVi: "Beer",
    description: "Cold draft beer",
    price: 25000,
    priceDisplay: "25,000₫",
    storeName: "Korean Fried Chicken",
    storeId: "kfc-store",
  },
];

export function KoreanFriedChickenStoreScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [activeTab, setActiveTab] = useState("popular");
  const [infoExpanded, setInfoExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [reviewsExpanded, setReviewsExpanded] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Set<number>>(new Set());
  const { addItem, getTotalItems } = useCart();
  const reviewSectionRef = useRef<HTMLDivElement>(null);

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      nameVi: item.nameVi,
      price: item.price,
      image: item.image,
      storeName: item.storeName,
      storeId: item.storeId,
    });
    showToast(`${item.name} 담기 완료! 🛒`, "success");
  };

  const handleScrollToReviews = () => {
    setReviewsExpanded(true);
    setTimeout(() => {
      reviewSectionRef.current?.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }, 100);
  };

  const toggleReviewLike = (reviewId: number) => {
    setLikedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  // Mock reviews data - Toss/Coupang style
  const reviews = [
    {
      id: 1,
      author: "Nguyễn Minh",
      authorKr: "응웬민",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      date: "2024-01-15",
      content: "양념치킨 정말 맛있어요! 바삭하면서도 소스가 달달하고 매콤해서 완벽합니다. 배달도 빠르고 치킨도 따뜻했어요. 다음엔 허니버터도 시켜볼게요!",
      contentVi: "The seasoned chicken is amazing! Crispy with sweet and spicy sauce - perfect. Fast delivery and chicken arrived hot. Will try honey butter next!",
      images: [
        "https://images.unsplash.com/photo-1687966699414-095ca9c35593?w=400",
        "https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?w=400"
      ],
      likes: 47,
      menuItem: "양념치킨",
      verified: true
    },
    {
      id: 2,
      author: "Trần Mai",
      authorKr: "쩐마이",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      date: "2024-01-12",
      content: "가족들과 함께 먹었는데 모두 만족했어요. 치즈볼도 꼭 같이 시키세요. 맥주랑 환상 조합!",
      contentVi: "Had it with family and everyone loved it! Make sure to order cheese balls too. Perfect with beer!",
      images: [],
      likes: 23,
      menuItem: "반반치킨",
      verified: true
    }
  ];

  return (
    <div className="h-screen overflow-y-auto bg-white pb-24">
      {/* Full-Width Hero Image - 30% Height */}
      <div className="relative h-[35vh] min-h-[280px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmillZCUyMGNoaWNrZW4lMjB3aW5nc3xlbnwxfHx8fDE3NjQ0MzQ4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Korean Fried Chicken"
          className="w-full h-full object-cover"
        />
        
        {/* Back Button - Floating */}
        <button 
          onClick={goBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95 z-10"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {/* Action Buttons - Floating Top Right */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95">
            <Share2 className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95"
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} strokeWidth={2.5} />
          </button>
        </div>

        {/* Store Badge - Floating Bottom Left */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-primary px-4 py-2 rounded-full shadow-xl">
            <span className="text-white text-[11px]" style={{ fontWeight: 700 }}>오늘만 15% 할인 🔥</span>
          </div>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Main Content Sheet - Sliding Up Over Image */}
      <div className="relative -mt-6 bg-white rounded-t-[24px] shadow-2xl">
        {/* Header Section */}
        <div className="px-6 pt-6 pb-4 border-b border-border/50">
          {/* Store Name with Info Button */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h1 
                className="text-[28px] mb-2 leading-tight"
                style={{ 
                  fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
                  fontWeight: 600,
                  letterSpacing: '-0.01em'
                }}
              >
                Korean Fried Chicken
              </h1>
              <p className="text-[14px] text-muted-foreground">케이 치킨 본점 • 치킨 Chicken</p>
            </div>
            
            {/* Info Toggle Button - Next to Name */}
            <button
              onClick={() => setInfoExpanded(!infoExpanded)}
              className="flex-shrink-0 w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-all active:scale-95"
            >
              {infoExpanded ? (
                <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
              ) : (
                <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Rating & Quick Info */}
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={handleScrollToReviews}
              className="flex items-center gap-1 hover:bg-accent/50 px-2 py-1 -mx-2 rounded-[8px] transition-all active:scale-95 cursor-pointer"
            >
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" strokeWidth={0} />
              <span 
                className="text-[16px] text-yellow-600"
                style={{ fontWeight: 600 }}
              >
                4.8
              </span>
              <span className="text-muted-foreground text-[13px]">(892)</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-0.5" strokeWidth={2} />
            </button>
            <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>25-35분</span>
            </div>
            <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>2.1 km</span>
            </div>
          </div>

          {/* Collapsible Info Panel */}
          {infoExpanded && (
            <div className="bg-green-50 rounded-[12px] p-4 mb-4 space-y-3 border border-green-100 animate-slide-down">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Address / 주소</p>
                  <p className="text-[12px]">123 Nguyen Van Linh, District 7, HCMC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Hours / 영업시간</p>
                  <p className="text-[12px]">Daily 10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Business / 사업자번호</p>
                  <p className="text-[12px]">234-56-78901</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[16px] flex-shrink-0">💰</span>
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Delivery Fee / 배달비</p>
                  <p className="text-[12px] text-primary" style={{ fontWeight: 600 }}>무료배달 🎉</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Bar - 3 Buttons: 전화하기, 채팅하기, 단체주문 */}
          <div className="grid grid-cols-3 gap-2">
            {/* Call Button */}
            <button className="py-3 border border-border rounded-[12px] flex items-center justify-center gap-2 hover:bg-accent transition-colors active:scale-95">
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[12px]" style={{ fontWeight: 600 }}>전화</span>
            </button>

            {/* Chat Button */}
            <button 
              onClick={() => navigate("chat")}
              className="py-3 border border-border rounded-[12px] flex items-center justify-center gap-2 hover:bg-accent transition-colors active:scale-95"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[12px]" style={{ fontWeight: 600 }}>채팅</span>
            </button>

            {/* Group Order Button */}
            <button 
              onClick={() => navigate("group")}
              className="py-3 bg-primary/10 text-primary border border-primary/20 rounded-[12px] flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors active:scale-95"
            >
              <Users className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[12px]" style={{ fontWeight: 600 }}>단체</span>
            </button>
          </div>
        </div>

        {/* Sticky Tab Navigation */}
        <div className="sticky top-0 z-20 bg-white border-b border-border/50 shadow-sm">
          <div className="flex items-center px-3 overflow-x-auto scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex-shrink-0 px-5 py-4 text-[13px] relative transition-colors ${
                  activeTab === category.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{ fontWeight: activeTab === category.id ? 600 : 400 }}
              >
                {category.label}
                {/* Green Underline for Active Tab */}
                {activeTab === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu List - Premium List Style (NOT CARDS) */}
        <div className="px-6 py-4">
          <div className="space-y-0 divide-y divide-border/50">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                className="py-4 flex items-center gap-4 hover:bg-accent/30 transition-colors rounded-[8px] px-2 -mx-2"
              >
                {/* Left: Text Info */}
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-[15px] mb-1 truncate"
                    style={{ fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] mb-1" style={{ fontWeight: 600 }}>
                      {item.badge}
                    </span>
                  )}
                  <p className="text-[13px] text-muted-foreground mb-2 line-clamp-1">
                    {item.description}
                  </p>
                  <p 
                    className="text-primary text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    {item.priceDisplay}
                  </p>
                </div>

                {/* Right: Square Thumbnail */}
                <div className="flex-shrink-0 relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-[12px] object-cover"
                  />
                  
                  {/* Circular + Button - Overlaying Image */}
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section - Toss/Coupang Style */}
        <div className="bg-accent/30 px-6 py-6 border-y border-border/50">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-[18px]" style={{ fontWeight: 600 }}>고객 리뷰</h2>
              <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-[11px]" style={{ fontWeight: 600 }}>
                892개
              </span>
            </div>
            <button
              onClick={() => setReviewsExpanded(!reviewsExpanded)}
              className="flex items-center gap-1 text-[13px] text-primary hover:underline"
              style={{ fontWeight: 600 }}
            >
              <span>{reviewsExpanded ? "접기" : "전체보기"}</span>
              {reviewsExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Review Stats Bar - Toss Style */}
          <div className="bg-white rounded-[12px] p-4 mb-4 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" strokeWidth={0} />
                <span className="text-[28px] text-yellow-600" style={{ fontWeight: 700 }}>4.8</span>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-muted-foreground">총 892개 리뷰</p>
                <p className="text-[11px] text-muted-foreground">Total 892 Reviews</p>
              </div>
            </div>
            {/* Star Distribution */}
            <div className="space-y-1.5">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-foreground w-5">{stars}★</span>
                  <div className="flex-1 h-1.5 bg-accent rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all"
                      style={{ width: stars === 5 ? "75%" : stars === 4 ? "20%" : "5%" }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-muted-foreground w-8 text-right">
                    {stars === 5 ? "75%" : stars === 4 ? "20%" : "5%"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Reviews - Coupang Style Cards */}
          {reviewsExpanded && (
            <div className="space-y-3 animate-slide-down" ref={reviewSectionRef}>
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-[16px] p-5 shadow-md border border-border/50">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src={review.avatar}
                        alt={review.author}
                        className="w-11 h-11 rounded-full object-cover border-2 border-border"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-[14px]" style={{ fontWeight: 600 }}>{review.authorKr}</p>
                          {review.verified && (
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px]" style={{ fontWeight: 600 }}>
                              ✓ 인증
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground">{review.author}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{review.date}</span>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-gray-200 text-gray-200"
                        }`}
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  {/* Menu Item Badge */}
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] mb-3" style={{ fontWeight: 600 }}>
                    {review.menuItem}
                  </div>

                  {/* Review Content */}
                  <p className="text-[13px] leading-relaxed mb-2">{review.content}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">{review.contentVi}</p>

                  {/* Review Images - Horizontal Scroll */}
                  {review.images.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-3 -mx-1 px-1">
                      {review.images.map((img, idx) => (
                        <ImageWithFallback
                          key={idx}
                          src={img}
                          alt={`Review Photo ${idx + 1}`}
                          className="w-24 h-24 rounded-[12px] object-cover flex-shrink-0 border border-border shadow-sm"
                        />
                      ))}
                    </div>
                  )}

                  {/* Review Footer - Like Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <button
                      onClick={() => toggleReviewLike(review.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-[8px] transition-all active:scale-95 ${
                        likedReviews.has(review.id)
                          ? "bg-pink-100 text-pink-600"
                          : "bg-accent text-muted-foreground hover:bg-accent/70"
                      }`}
                    >
                      <ThumbsUp
                        className={`w-4 h-4 ${likedReviews.has(review.id) ? "fill-pink-600" : ""}`}
                        strokeWidth={2}
                      />
                      <span className="text-[11px]" style={{ fontWeight: 600 }}>
                        도움돼요 {review.likes + (likedReviews.has(review.id) ? 1 : 0)}
                      </span>
                    </button>
                    <span className="text-[10px] text-muted-foreground">
                      {review.likes}명에게 도움이 되었어요
                    </span>
                  </div>
                </div>
              ))}

              {/* View All Reviews Button */}
              <button
                onClick={() => navigate("review")}
                className="w-full bg-white text-foreground py-4 rounded-[12px] border-2 border-border hover:bg-accent transition-all active:scale-[0.98] shadow-sm"
              >
                <span className="text-[13px]" style={{ fontWeight: 600 }}>
                  전체 리뷰 892개 보기 →
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Cart Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-xl z-40">
        <div className="max-w-[430px] mx-auto px-6 py-4">
          <button 
            onClick={() => navigate("cart")}
            className="w-full bg-primary text-white py-4 rounded-[12px] flex items-center justify-between px-5 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <span className="text-[15px]" style={{ fontWeight: 600 }}>
              장바구니 보기 / View Cart
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-[13px]" style={{ fontWeight: 600 }}>
              {getTotalItems()} items
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      {/* Floating Cart Button */}
      <FloatingCartButton />

      {/* Custom Styles */}
      <style>{`
        /* Hide Scrollbar for Tab Navigation */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Slide Down Animation for Info Panel */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        /* Import Premium Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600&display=swap');
      `}</style>
    </div>
  );
}