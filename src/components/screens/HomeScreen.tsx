import { MapPin, Bell, ChevronRight, ChevronLeft, Search, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { StrawberryLogoCompact } from "../icons/StrawberryLogo";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const categories = [
  { icon: "🍱", label: "한식", labelVi: "Korean Food" },
  { icon: "🛒", label: "K-Mart", labelVi: "K-Mart" },
  { icon: "💄", label: "뷰티", labelVi: "Beauty" },
  { icon: "💊", label: "약국", labelVi: "Pharmacy" },
];

const recommendations = [
  {
    image: "https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDE4Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "양념치킨",
    nameVi: "Gà Rán Sốt",
    price: "180,000₫",
    rating: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1741295017668-c8132acd6fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJpbWJhcCUyMGJvd2x8ZW58MXx8fHwxNzY0NDU0Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "비빔밥",
    nameVi: "Cơm Trộn",
    price: "120,000₫",
    rating: 4.9,
  },
  {
    image: "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpfGVufDF8fHx8MTc2NDQxMzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "떡볶이",
    nameVi: "Bánh Gạo Cay",
    price: "95,000₫",
    rating: 4.7,
  },
];

// Hot/Trending Search Keywords - 배민, 쿠팡이츠 스타일
const hotKeywords = [
  { keyword: "치킨", keywordVi: "Gà rán", icon: "🔥" },
  { keyword: "떡볶이", keywordVi: "Bánh gạo", icon: "⭐" },
  { keyword: "피자", keywordVi: "Pizza", icon: "🍕" },
  { keyword: "김밥", keywordVi: "Kimbap", icon: "✨" },
];

export function HomeScreen() {
  const { navigate, goBack } = useNavigation();

  return (
    <div className="h-screen overflow-y-auto bg-background relative pb-20">
      {/* Back Button - Floating */}
      <button 
        onClick={goBack}
        className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all active:scale-95 z-20"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Header - With Minimal Logo */}
      <header className="bg-white px-5 py-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <StrawberryLogoCompact size={32} color="#FF4E50" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" strokeWidth={2.5} />
            <span className="text-[14px]" style={{ fontWeight: 600 }}>District 7</span>
          </div>
        </div>
        <button className="relative p-2">
          <Bell className="w-5 h-5" strokeWidth={2.5} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF4E50] rounded-full"></span>
        </button>
      </header>

      {/* Search Bar - 배달의민족, 쿠팡이츠 스타일 */}
      <div className="bg-white px-5 pt-4 pb-3 shadow-sm">
        {/* Main Search Input */}
        <button
          onClick={() => navigate("search")}
          className="w-full bg-accent hover:bg-accent/80 transition-colors rounded-[12px] px-4 py-3.5 flex items-center gap-3 shadow-sm active:scale-[0.99]"
        >
          <Search className="w-5 h-5 text-muted-foreground" strokeWidth={2.5} />
          <div className="flex-1 text-left">
            <p className="text-[15px] text-muted-foreground">
              무엇을 주문할까요?
            </p>
            <p className="text-[12px] text-muted-foreground/70">
              What would you like to order?
            </p>
          </div>
        </button>

        {/* Hot Keywords - Scrollable Tags */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
          {/* Trending Icon Label */}
          <div className="flex items-center gap-1 flex-shrink-0 mr-1">
            <TrendingUp className="w-4 h-4 text-primary" strokeWidth={2.5} />
            <span className="text-[11px] text-muted-foreground" style={{ fontWeight: 600 }}>
              인기
            </span>
          </div>

          {/* Hot Keywords */}
          {hotKeywords.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate("search")}
              className="flex-shrink-0 px-3 py-1.5 bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-full flex items-center gap-1.5 transition-all active:scale-95"
            >
              <span className="text-[14px]">{item.icon}</span>
              <span className="text-[12px] text-primary" style={{ fontWeight: 600 }}>
                {item.keyword}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Hero Banner - Clickable */}
      <button
        onClick={() => navigate("kfcstore")}
        className="relative h-[200px] mx-5 mt-4 rounded-[12px] overflow-hidden w-full block transition-transform active:scale-98 hover:shadow-xl"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636005100120-dd69afa5ebe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW4lMjB3aW5nc3xlbnwxfHx8fDE3NjQ0MzQ4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="New Menu"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white text-left">
          <div className="bg-primary px-3 py-1 rounded-full inline-block text-[11px] mb-2">
            새로 나왔어요 ✨
          </div>
          <h2 className="text-[24px]">Korean Fried Chicken</h2>
          <p className="text-[13px] text-white/90">오늘만 15% 할인해드려요!</p>
        </div>
      </button>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-3 px-5 my-6">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => {
              // Navigate to appropriate category screen
              if (idx === 0) {
                navigate("koreanfood"); // 한식
              } else if (idx === 1) {
                navigate("search"); // K-Mart → search
              } else if (idx === 2) {
                navigate("search"); // 뷰티 → search
              } else if (idx === 3) {
                navigate("search"); // 약국 → search
              }
            }}
            className="bg-white p-5 rounded-[12px] shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 active:scale-95"
          >
            <span className="text-[32px]">{cat.icon}</span>
            <div className="text-left">
              <div className="text-[15px]">{cat.label}</div>
              <div className="text-[11px] text-muted-foreground">{cat.labelVi}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Recommended Section */}
      <div className="px-5 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[18px]">오늘은 이 메뉴 어때요? 🍽️</h3>
          <button 
            onClick={() => navigate("feed")}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-[13px]">더보기</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {recommendations.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate("kfcstore")}
              className="flex-shrink-0 w-[160px] bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-[120px] object-cover"
              />
              <div className="p-3">
                <div className="text-[13px] mb-1">{item.name}</div>
                <div className="text-[11px] text-muted-foreground mb-2">{item.nameVi}</div>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-[13px]">{item.price}</span>
                  <span className="text-[11px]">⭐ {item.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}