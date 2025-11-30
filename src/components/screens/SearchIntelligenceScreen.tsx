import { ChevronLeft, Search, TrendingUp, Clock, MapPin, Filter, Download, BarChart3, Users, Zap } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function SearchIntelligenceScreen() {
  const { goBack } = useNavigation();

  const trendingSearches = [
    { query: "떡볶이", queryEn: "tteokbokki", count: 8234, growth: "+28%", category: "Korean Food" },
    { query: "치킨", queryEn: "chicken", count: 7521, growth: "+34%", category: "Korean Food" },
    { query: "김치찌개", queryEn: "kimchi jjigae", count: 5834, growth: "+15%", category: "Korean Food" },
    { query: "삼겹살", queryEn: "samgyeopsal", count: 4927, growth: "+22%", category: "Korean BBQ" },
    { query: "짜장면", queryEn: "jjajangmyeon", count: 4512, growth: "+8%", category: "Chinese-Korean" },
    { query: "라면", queryEn: "ramyeon", count: 3821, growth: "+41%", category: "Korean Food" },
    { query: "불고기", queryEn: "bulgogi", count: 3654, growth: "+19%", category: "Korean BBQ" },
    { query: "비빔밥", queryEn: "bibimbap", count: 3287, growth: "+12%", category: "Korean Food" },
  ];

  const searchByTime = [
    { hour: "00-06", searches: 2847, peak: "01-02 (late night)" },
    { hour: "06-09", searches: 8234, peak: "08-09 (breakfast)" },
    { hour: "09-12", searches: 15234, peak: "11-12 (lunch prep)" },
    { hour: "12-15", searches: 28541, peak: "12-13 (lunch peak)" },
    { hour: "15-18", searches: 12384, peak: "17-18 (dinner prep)" },
    { hour: "18-21", searches: 31247, peak: "18-19 (dinner peak)" },
    { hour: "21-24", searches: 18634, peak: "22-23 (late dinner)" },
  ];

  const locationInsights = [
    { location: "Hoàn Kiếm", searches: 23847, topQuery: "떡볶이", avgTime: "12:30" },
    { location: "Đống Đa", searches: 19234, topQuery: "치킨", avgTime: "18:45" },
    { location: "Cầu Giấy", searches: 17562, topQuery: "김치찌개", avgTime: "19:15" },
    { location: "District 1 (HCMC)", searches: 15928, topQuery: "삼겹살", avgTime: "19:30" },
    { location: "District 3 (HCMC)", searches: 12543, topQuery: "불고기", avgTime: "18:20" },
  ];

  const searchIntent = [
    { intent: "메뉴 찾기", intentEn: "Find Specific Dish", percentage: 42.3, count: 52875 },
    { intent: "레스토랑 찾기", intentEn: "Find Restaurant", percentage: 28.7, count: 35875 },
    { intent: "카테고리 탐색", intentEn: "Browse Category", percentage: 18.4, count: 23000 },
    { intent: "프로모션 검색", intentEn: "Search Promos", percentage: 10.6, count: 13250 },
  ];

  const emergingTrends = [
    { trend: "치즈 조합", trendEn: "Cheese Combo", growth: "+127%", queries: 4234 },
    { trend: "비건 옵션", trendEn: "Vegan Options", growth: "+89%", queries: 2847 },
    { trend: "야식 배달", trendEn: "Late Night", growth: "+64%", queries: 5621 },
    { trend: "건강식", trendEn: "Healthy Food", growth: "+52%", queries: 3154 },
  ];

  const maxSearches = Math.max(...searchByTime.map(s => s.searches));

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center border border-white/30">
              <Search className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-[26px] mb-1">Search Intelligence</h1>
              <p className="text-[13px] text-white/90">검색 데이터 분석</p>
            </div>
          </div>

          {/* Total Count */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-5 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-white/80 mb-1">Total Search Queries</p>
                <p className="text-[40px] leading-none mb-1">125,000+</p>
                <p className="text-[11px] text-white/70">Consumer Intent Data 💰</p>
              </div>
              <div className="text-right">
                <div className="bg-green-500/20 px-3 py-1.5 rounded-full border border-green-400/30 mb-2">
                  <span className="text-[12px] text-green-300">+5.2K</span>
                </div>
                <p className="text-[10px] text-white/60">today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-5 py-4 bg-white border-b border-border flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-accent rounded-[12px] px-4 py-2.5">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Analyze search trends..."
              className="flex-1 bg-transparent text-[13px] outline-none"
            />
          </div>
          <button className="w-10 h-10 bg-accent rounded-[12px] flex items-center justify-center hover:bg-accent/70 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-primary text-white rounded-[12px] flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Trending Searches */}
        <div className="px-5 py-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>인기 검색어 / Trending Searches</span>
          </h2>
          <div className="space-y-2">
            {trendingSearches.map((search, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    idx < 3 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white' 
                      : 'bg-accent text-muted-foreground'
                  }`}>
                    <span className="text-[14px]" style={{ fontWeight: 700 }}>
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-[15px]">{search.query}</h3>
                      <div className="bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full text-[9px]">
                        {search.growth}
                      </div>
                    </div>
                    <p className="text-[11px] text-muted-foreground">{search.queryEn} • {search.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] text-primary">{search.count.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">searches</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search by Time */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>시간대별 검색량 / Search Volume by Hour</span>
          </h2>
          <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
            <div className="space-y-4">
              {searchByTime.map((time, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2 text-[12px]">
                    <span className="text-muted-foreground w-16">{time.hour}</span>
                    <span className="text-[10px] text-muted-foreground flex-1 px-2">{time.peak}</span>
                    <span className="text-primary" style={{ fontWeight: 600 }}>
                      {time.searches.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(time.searches / maxSearches) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Insights */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>지역별 인사이트 / Location Insights</span>
          </h2>
          <div className="bg-white rounded-[16px] shadow-sm border border-border divide-y divide-border">
            {locationInsights.map((loc, idx) => (
              <div key={idx} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-[14px] mb-1">{loc.location}</h3>
                    <p className="text-[11px] text-muted-foreground">
                      Top: "{loc.topQuery}" • Peak: {loc.avgTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[18px] text-primary">{loc.searches.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground">searches</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Intent Distribution */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>검색 의도 분석 / Search Intent</span>
          </h2>
          <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
            <div className="space-y-4">
              {searchIntent.map((intent, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2 text-[13px]">
                    <div className="flex-1">
                      <p className="mb-0.5">{intent.intent}</p>
                      <p className="text-[11px] text-muted-foreground">{intent.intentEn}</p>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <span className="text-primary" style={{ fontWeight: 600 }}>
                        {intent.count.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-[11px] w-12 text-right">
                        {intent.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${intent.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emerging Trends */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>급부상 트렌드 / Emerging Trends</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {emergingTrends.map((trend, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[16px] p-4 shadow-sm border-2 border-yellow-300"
              >
                <div className="flex items-center gap-1 mb-2">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  <span className="text-[10px] text-yellow-700">HOT</span>
                </div>
                <h3 className="text-[14px] text-yellow-900 mb-1">{trend.trend}</h3>
                <p className="text-[11px] text-yellow-700 mb-2">{trend.trendEn}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-yellow-700">{trend.queries} searches</span>
                  <span className="text-[13px] text-green-600" style={{ fontWeight: 700 }}>
                    {trend.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <span>🤖</span>
            <span>AI 인사이트 / AI Insights</span>
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-[16px] p-5 border-2 border-blue-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] text-blue-900 mb-2" style={{ fontWeight: 600 }}>
                  💡 Peak Hour Optimization Opportunity
                </h3>
                <p className="text-[12px] text-blue-700 leading-relaxed mb-3">
                  저녁 시간대(18-21시) 검색량이 <span style={{ fontWeight: 600 }}>31,247건</span>으로 최고치를 기록하고 있습니다. 
                  이 시간대에 타겟 프로모션을 집행하면 전환율을 크게 높일 수 있습니다.
                </p>
                <div className="bg-white rounded-[12px] p-3 border border-blue-300">
                  <p className="text-[11px] text-blue-800">
                    <span style={{ fontWeight: 600 }}>추천:</span> 18-19시에 "치킨", "떡볶이" 키워드로 타겟 광고 집행
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Value Card */}
        <div className="mx-5 mb-5 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-[16px] p-5 text-white">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[20px]">💎</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>Search Intent Data - Most Valuable</h3>
              <p className="text-[11px] text-white/80 leading-relaxed">
                검색 데이터는 소비자의 실시간 니즈를 보여주는 가장 가치 있는 자산입니다. 광고주, 마케터, 시장조사 기관에게 프리미엄 가격으로 판매 가능합니다.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white/10 rounded-[12px] p-3 border border-white/20">
            <span className="text-[12px] text-white/80">Estimated Value</span>
            <span className="text-[18px]" style={{ fontWeight: 700 }}>$62,500</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
