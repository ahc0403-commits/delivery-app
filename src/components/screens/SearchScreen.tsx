import { Search, MapIcon, Star, Clock, TrendingUp, Flame } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState, useEffect, useCallback } from "react";
import { useNavigation } from "../../App";
import { PreferenceOnboarding, UserPreferences } from "../PreferenceOnboarding";
import { BottomNavBar } from "../BottomNavBar";
import { analytics, EVENTS } from "../../lib/analytics";

const searchResults = [
  {
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "신당 떡볶이",
    nameVi: "Sindang Tteokbokki",
    rating: 4.9,
    time: "15-25분",
    discount: "15% Discount",
    featured: true,
    storeId: "store", // 신당 떡볶이는 StoreDetailScreen으로
  },
  {
    image: "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpfGVufDF8fHx8MTc2NDQxMzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "떡볶이 명가",
    nameVi: "Tteokbokki Master",
    rating: 4.7,
    time: "20-30분",
    featured: false,
    storeId: "store",
  },
  {
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "매운 떡볶이",
    nameVi: "Spicy Tteokbokki",
    rating: 4.6,
    time: "25-35분",
    featured: false,
    storeId: "store",
  },
];

const trendingSearches = [
  { rank: 1, keyword: "Chicken", keywordKo: "치킨", emoji: "🍗" },
  { rank: 2, keyword: "Tteokbokki", keywordKo: "떡볶이", emoji: "🌶️" },
  { rank: 3, keyword: "Jokbal", keywordKo: "족발", emoji: "🥩" },
  { rank: 4, keyword: "Bossam", keywordKo: "보쌈", emoji: "🥬" },
  { rank: 5, keyword: "Kimchi Jjigae", keywordKo: "김치찌개", emoji: "🍲" },
];

export function SearchScreen() {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const { navigate, showToast } = useNavigation();
  
  // Preference Onboarding State
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  // Track screen view on mount
  useEffect(() => {
    analytics.trackScreen("search", "Search Screen");
  }, []);

  // Debounced search tracking
  useEffect(() => {
    if (!searchValue || searchValue.length < 2) return;
    
    const timer = setTimeout(() => {
      // Track search query
      const resultCount = searchValue.toLowerCase().includes("떡볶이") || 
                         searchValue.toLowerCase().includes("tteok") 
                         ? searchResults.length : 0;
      
      analytics.trackSearch(searchValue, resultCount);
    }, 1000); // Debounce 1 second

    return () => clearTimeout(timer);
  }, [searchValue]);

  // Check if user has completed onboarding (in real app, check localStorage)
  useEffect(() => {
    const completed = localStorage.getItem("preferences_completed");
    if (!completed) {
      // Show onboarding after a short delay for better UX
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setHasCompletedOnboarding(true);
    }
  }, []);

  // Track store click
  const handleStoreClick = useCallback((store: typeof searchResults[0], index: number) => {
    analytics.trackStoreClick(
      store.storeId,
      store.name,
      index,
      store.featured || false,
      'search'
    );
    navigate(store.storeId);
  }, [navigate]);

  // Track trending search click
  const handleTrendingClick = useCallback((keyword: string, keywordKo: string) => {
    analytics.track(EVENTS.SEARCH_QUERY, {
      query: keyword,
      source: 'trending',
      keyword_ko: keywordKo,
    });
    setSearchValue(keyword);
    setShowResults(true);
  }, []);

  const handleOnboardingComplete = (preferences: UserPreferences) => {
    // Save preferences (in real app, send to backend)
    localStorage.setItem("preferences_completed", "true");
    localStorage.setItem("user_preferences", JSON.stringify(preferences));
    setHasCompletedOnboarding(true);
    setShowOnboarding(false);
    
    showToast("✨ 맞춤 추천 설정 완료! 이제 고객님께 딱 맞는 가게를 추천해드릴게요!", "success");
  };

  const handleOnboardingSkip = () => {
    localStorage.setItem("preferences_completed", "true");
    setShowOnboarding(false);
    setHasCompletedOnboarding(true);
  };

  return (
    <div className="h-screen overflow-y-auto bg-background">
      {/* Preference Onboarding Modal */}
      {showOnboarding && (
        <PreferenceOnboarding
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}

      {/* Search Bar */}
      <div className="bg-white px-5 py-4 shadow-sm sticky top-0 z-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
            placeholder="Search for food... / 음식을 검색하세요"
            className="w-full pl-12 pr-4 py-3 bg-secondary rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Trending Now Section - BEFORE User Types */}
      {!showResults && (
        <div className="px-5 py-6">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-orange-500" fill="currentColor" strokeWidth={0} />
            <h2 className="text-[16px]" style={{ fontWeight: 600 }}>
              지금 뜨는 검색어 🔥
            </h2>
          </div>
          <p className="text-[12px] text-muted-foreground mb-4">
            Trending Now • Real-time popular searches
          </p>

          {/* Trending List */}
          <div className="space-y-2">
            {trendingSearches.map((item) => (
              <button
                key={item.rank}
                onClick={() => handleTrendingClick(item.keyword, item.keywordKo)}
                className="w-full bg-white rounded-[12px] p-4 shadow-sm border border-border hover:border-primary hover:bg-green-50/50 transition-all active:scale-[0.98] flex items-center gap-3"
              >
                {/* Rank Number */}
                <div 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] ${
                    item.rank === 1 
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' 
                      : item.rank === 2
                      ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white'
                      : item.rank === 3
                      ? 'bg-gradient-to-br from-orange-300 to-orange-400 text-white'
                      : 'bg-gray-100 text-muted-foreground'
                  }`}
                  style={{ fontWeight: 700 }}
                >
                  {item.rank}
                </div>

                {/* Emoji */}
                <span className="text-[24px]">{item.emoji}</span>

                {/* Keyword */}
                <div className="flex-1 text-left">
                  <p className="text-[14px]" style={{ fontWeight: 600 }}>
                    {item.keywordKo}
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    {item.keyword}
                  </p>
                </div>

                {/* Trending Icon */}
                <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
              </button>
            ))}
          </div>

          {/* FOMO Message for Store Owners */}
          <div className="mt-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-[12px] p-4 border border-orange-200">
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              💡 These trending searches are updated in real-time based on user behavior. Store owners can use this data to optimize their menus and ads.
            </p>
          </div>
        </div>
      )}

      {/* Filter Chips - ONLY WHEN SEARCHING */}
      {showResults && (
        <>
          <div className="px-5 py-4 flex gap-2 overflow-x-auto no-scrollbar">
            <button className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-[12px] text-[13px] shadow-md">
              Free Delivery
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-[12px] text-[13px] shadow-md">
              Wow Member
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white text-foreground rounded-[12px] text-[13px] border border-border">
              ★4.5+
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white text-foreground rounded-[12px] text-[13px] border border-border">
              할인 / Discount
            </button>
          </div>

          {/* Results */}
          <div className="px-5 pb-24">
            <p className="text-[13px] text-muted-foreground mb-4">
              검색결과 12개 / 12 results found
            </p>
            <div className="space-y-3">
              {searchResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStoreClick(item, idx)}
                  className={`w-full bg-white rounded-[12px] overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-[0.98] ${
                    item.featured ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="flex gap-3 p-3">
                    <div className="relative flex-shrink-0 w-[100px] h-[100px] rounded-[12px] overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.discount && (
                        <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-full text-[10px]">
                          {item.discount}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[15px] mb-1">{item.name}</h3>
                      <p className="text-[12px] text-muted-foreground mb-2">{item.nameVi}</p>
                      <div className="flex items-center gap-3 text-[12px]">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Floating Map Button */}
      <button className="fixed bottom-24 right-5 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
        <MapIcon className="w-6 h-6" />
      </button>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}