import { ChevronLeft, Utensils, TrendingUp, DollarSign, Filter, Download, Search, Star, ShoppingCart, BarChart3 } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function MenuDatabaseScreen() {
  const { goBack } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<"all" | "korean" | "vietnamese" | "others">("all");

  const categories = [
    { name: "한식 / Korean", count: 245, revenue: "₫8.2M", color: "from-red-500 to-orange-500" },
    { name: "베트남 / Vietnamese", count: 189, revenue: "₫6.8M", color: "from-green-500 to-emerald-500" },
    { name: "양식 / Western", count: 56, revenue: "₫2.1M", color: "from-blue-500 to-cyan-500" },
    { name: "기타 / Others", count: 50, revenue: "₫1.4M", color: "from-purple-500 to-pink-500" },
  ];

  const topItems = [
    { 
      name: "치즈 떡볶이", 
      nameEn: "Cheese Tteokbokki", 
      category: "Korean",
      stores: 45, 
      avgPrice: "₫95,000",
      totalSold: 2847,
      revenue: "₫270,465,000",
      rating: 4.8,
      trending: "+28%"
    },
    { 
      name: "김치찌개", 
      nameEn: "Kimchi Jjigae", 
      category: "Korean",
      stores: 52, 
      avgPrice: "₫78,000",
      totalSold: 2341,
      revenue: "₫182,598,000",
      rating: 4.7,
      trending: "+15%"
    },
    { 
      name: "양념치킨", 
      nameEn: "Yangnyeom Chicken", 
      category: "Korean",
      stores: 38, 
      avgPrice: "₫165,000",
      totalSold: 1923,
      revenue: "₫317,295,000",
      rating: 4.9,
      trending: "+34%"
    },
    { 
      name: "짜장면", 
      nameEn: "Jjajangmyeon", 
      category: "Korean",
      stores: 28, 
      avgPrice: "₫68,000",
      totalSold: 1654,
      revenue: "₫112,472,000",
      rating: 4.6,
      trending: "+8%"
    },
    { 
      name: "비빔밥", 
      nameEn: "Bibimbap", 
      category: "Korean",
      stores: 41, 
      avgPrice: "₫85,000",
      totalSold: 1487,
      revenue: "₫126,395,000",
      rating: 4.7,
      trending: "+19%"
    },
  ];

  const priceRanges = [
    { range: "Under ₫50k", count: 124, percentage: 23.0 },
    { range: "₫50k - ₫100k", count: 287, percentage: 53.1 },
    { range: "₫100k - ₫200k", count: 98, percentage: 18.1 },
    { range: "Over ₫200k", count: 31, percentage: 5.8 },
  ];

  const insights = [
    { metric: "평균 메뉴 가격", value: "₫92,400", icon: DollarSign, color: "text-green-600" },
    { metric: "평균 평점", value: "4.6★", icon: Star, color: "text-yellow-600" },
    { metric: "월 평균 판매", value: "18.2회", icon: ShoppingCart, color: "text-blue-600" },
    { metric: "재주문률", value: "64%", icon: TrendingUp, color: "text-purple-600" },
  ];

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center border border-white/30">
              <Utensils className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-[26px] mb-1">Menu Database</h1>
              <p className="text-[13px] text-white/90">메뉴 데이터베이스</p>
            </div>
          </div>

          {/* Total Count */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-5 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-white/80 mb-1">Total SKUs Tracked</p>
                <p className="text-[40px] leading-none mb-1">540</p>
                <p className="text-[11px] text-white/70">Across 187 restaurants</p>
              </div>
              <div className="text-right">
                <div className="bg-green-500/20 px-3 py-1.5 rounded-full border border-green-400/30 mb-2">
                  <span className="text-[12px] text-green-300">+12 new</span>
                </div>
                <p className="text-[10px] text-white/60">this week</p>
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
              placeholder="Search menu items..."
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

        {/* Categories Breakdown */}
        <div className="px-5 py-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <span>🍽️</span>
            <span>카테고리별 현황 / Category Breakdown</span>
          </h2>
          <div className="space-y-3">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-[16px] p-4 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-[14px] mb-1">{cat.name}</h3>
                    <p className="text-[11px] text-muted-foreground">{cat.count} menu items</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[18px] text-primary mb-0.5">{cat.revenue}</p>
                    <p className="text-[10px] text-muted-foreground">total revenue</p>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-500`}
                    style={{ width: `${(cat.count / 540) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>베스트셀러 메뉴 / Top Selling Items</span>
          </h2>
          <div className="space-y-3">
            {topItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <span className="text-[16px]" style={{ fontWeight: 700 }}>
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[15px]">{item.name}</h3>
                      <div className="bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full text-[9px]">
                        {item.trending}
                      </div>
                    </div>
                    <p className="text-[12px] text-muted-foreground mb-2">{item.nameEn}</p>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span>🏪 {item.stores} stores</span>
                      <span>⭐ {item.rating}</span>
                      <span className="text-primary">{item.avgPrice}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border">
                  <div>
                    <p className="text-[10px] text-muted-foreground mb-1">Total Sold</p>
                    <p className="text-[15px] text-primary">{item.totalSold.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground mb-1">Revenue</p>
                    <p className="text-[15px] text-green-600">{item.revenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Distribution */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span>가격대 분포 / Price Distribution</span>
          </h2>
          <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
            <div className="space-y-4">
              {priceRanges.map((range, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2 text-[13px]">
                    <span className="text-muted-foreground">{range.range}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-primary" style={{ fontWeight: 600 }}>
                        {range.count} items
                      </span>
                      <span className="text-muted-foreground text-[11px] w-12 text-right">
                        {range.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${range.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Insights */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            <span>메뉴 인사이트 / Menu Insights</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {insights.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-[16px] p-4 shadow-sm border border-border">
                <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                <p className="text-[20px] mb-1">{metric.value}</p>
                <p className="text-[11px] text-muted-foreground">{metric.metric}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Analysis */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <span>🔥</span>
            <span>트렌드 분석 / Trending Analysis</span>
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-[16px] p-5 border-2 border-orange-200">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] text-orange-900 mb-2" style={{ fontWeight: 600 }}>
                  💡 AI Insight: Cheese Menu Boom
                </h3>
                <p className="text-[12px] text-orange-700 leading-relaxed mb-3">
                  치즈가 들어간 메뉴의 주문량이 지난달 대비 <span style={{ fontWeight: 600 }}>+34%</span> 급증했습니다. 
                  특히 20대 여성 고객층에서 선호도가 높습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white px-3 py-1.5 rounded-full text-[11px] text-orange-700 border border-orange-300">
                    #치즈떡볶이 +28%
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-full text-[11px] text-orange-700 border border-orange-300">
                    #치즈불닭 +41%
                  </div>
                  <div className="bg-white px-3 py-1.5 rounded-full text-[11px] text-orange-700 border border-orange-300">
                    #치즈김밥 +22%
                  </div>
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
              <h3 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>Menu Intelligence Value</h3>
              <p className="text-[11px] text-white/80 leading-relaxed">
                메뉴별 판매 데이터와 트렌드 분석은 신규 레스토랑, 프랜차이즈, 식자재 업체에게 판매 가능한 핵심 자산입니다.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white/10 rounded-[12px] p-3 border border-white/20">
            <span className="text-[12px] text-white/80">Estimated Value</span>
            <span className="text-[18px]" style={{ fontWeight: 700 }}>$27,000</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
