import { ChevronLeft, TrendingUp, DollarSign, ShoppingCart, Store, BarChart3, Lightbulb, Calendar, Home } from "lucide-react";
import { useNavigation } from "../../App";

const topBranches = [
  { name: "K-Chicken District 1", revenue: 450, percentage: 100 },
  { name: "K-Chicken District 3", revenue: 380, percentage: 84 },
  { name: "K-Chicken District 7", revenue: 360, percentage: 80 },
  { name: "K-Chicken Binh Thanh", revenue: 320, percentage: 71 },
  { name: "K-Chicken Phu Nhuan", revenue: 285, percentage: 63 },
];

export function FranchiseUnifiedReportScreen() {
  const { navigate } = useNavigation();
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={() => navigate("franchise")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">통합 성과 리포트</h1>
            <p className="text-white/80 text-[12px]">Franchise Performance Report</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Date Filter */}
      <div className="bg-white border-b border-border shadow-sm sticky top-0 z-30">
        <div className="flex gap-2 px-5 py-3">
          <button className="flex-1 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 rounded-[12px] shadow-md flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-[13px]">This Month (Nov)</span>
          </button>
          <button className="flex-1 bg-white border-2 border-border text-foreground py-3 rounded-[12px] hover:bg-accent transition-colors flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-[13px]">Last Month</span>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Hero Cards - Aggregated Data */}
        <div className="px-5 mt-5">
          <h2 className="text-[14px] text-muted-foreground mb-3">전체 프랜차이즈 현황 / Franchise Overview</h2>
          
          <div className="grid grid-cols-1 gap-3 mb-5">
            {/* Total Revenue - Clickable */}
            <button 
              onClick={() => navigate("franchisecompare")}
              className="w-full text-left bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] p-6 shadow-lg border-2 border-green-200 hover:shadow-xl hover:border-green-400 transition-all active:scale-[0.98]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-[12px] text-green-700">Total Franchise Revenue</span>
                  </div>
                  <p className="text-[36px] text-green-900 mb-1">₫5.2B</p>
                  <p className="text-[13px] text-green-700">5.2 Billion VND (Nov 2025)</p>
                </div>
                <div className="bg-green-600 text-white px-3 py-2 rounded-[12px] text-center">
                  <p className="text-[18px]">+12%</p>
                  <p className="text-[10px] text-green-100">vs last month</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-3 py-2">
                  <p className="text-[11px] text-green-700">Avg per Branch</p>
                  <p className="text-[16px] text-green-900">₫104M</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-3 py-2">
                  <p className="text-[11px] text-green-700">Growth</p>
                  <p className="text-[16px] text-green-900">+₫556M</p>
                </div>
              </div>
              <div className="mt-3 text-center text-[11px] text-green-600 flex items-center justify-center gap-1">
                <span>👆 탭하여 지점별 상세 비교</span>
              </div>
            </button>

            {/* Total Orders - Clickable */}
            <button 
              onClick={() => navigate("franchisecompare")}
              className="w-full text-left bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[20px] p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all active:scale-[0.98]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-[12px] text-blue-700">Total Orders</span>
                  </div>
                  <p className="text-[36px] text-blue-900 mb-1">24.5K</p>
                  <p className="text-[13px] text-blue-700">24,500 orders this month</p>
                </div>
                <div className="bg-blue-600 text-white px-3 py-2 rounded-[12px] text-center">
                  <p className="text-[18px]">+8%</p>
                  <p className="text-[10px] text-blue-100">vs last month</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-3 py-2">
                  <p className="text-[11px] text-blue-700">Avg per Branch</p>
                  <p className="text-[16px] text-blue-900">490 orders</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-3 py-2">
                  <p className="text-[11px] text-blue-700">Avg Order Value</p>
                  <p className="text-[16px] text-blue-900">₫212K</p>
                </div>
              </div>
              <div className="mt-3 text-center text-[11px] text-blue-600 flex items-center justify-center gap-1">
                <span>👆 탭하여 지점별 상세 비교</span>
              </div>
            </button>

            {/* Active Branches */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-[16px] p-5 shadow-md border-2 border-orange-200">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <Store className="w-7 h-7 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] text-orange-700 mb-1">Active Branches</p>
                  <p className="text-[28px] text-orange-900">50</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-muted-foreground">Status</p>
                  <p className="text-[13px] text-green-600">All Open ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Charts */}
        <div className="px-5 mb-5">
          <h2 className="text-[14px] text-muted-foreground mb-3">차트 분석 / Visual Analytics</h2>

          {/* Chart 1: Top 5 Branches Revenue - Horizontal Bar Chart - Clickable */}
          <button 
            onClick={() => navigate("franchisecompare")}
            className="w-full text-left bg-white rounded-[20px] shadow-lg border-2 border-border p-5 mb-4 hover:shadow-xl hover:border-primary transition-all active:scale-[0.99]"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[15px] mb-1">Top 5 Branches Revenue</h3>
                <p className="text-[11px] text-muted-foreground">지점별 매출 순위 (November 2025)</p>
              </div>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>

            <div className="space-y-4">
              {topBranches.map((branch, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                        idx === 0 ? "bg-yellow-400 text-yellow-900" :
                        idx === 1 ? "bg-gray-300 text-gray-700" :
                        idx === 2 ? "bg-orange-300 text-orange-800" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {idx + 1}
                      </div>
                      <span className="text-[13px]">{branch.name}</span>
                    </div>
                    <span className="text-[14px]">₫{branch.revenue}M</span>
                  </div>
                  <div className="relative h-8 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all ${
                        idx === 0 ? "bg-gradient-to-r from-primary to-orange-500" :
                        idx === 1 ? "bg-gradient-to-r from-blue-600 to-blue-500" :
                        idx === 2 ? "bg-gradient-to-r from-green-600 to-green-500" :
                        "bg-gradient-to-r from-purple-500 to-purple-400"
                      }`}
                      style={{ width: `${branch.percentage}%` }}
                    >
                      <div className="flex items-center justify-end h-full pr-3">
                        <span className="text-white text-[11px]">{branch.percentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">Total Top 5 Revenue</span>
              <span className="text-[14px] text-primary">₫1.795B (34.5%)</span>
            </div>
            <div className="mt-3 text-center text-[11px] text-primary flex items-center justify-center gap-1">
              <span>👆 탭하여 상세 비교 분석 보기</span>
            </div>
          </button>

          {/* Chart 2: Sales Growth Trend - Line Chart */}
          <div className="bg-white rounded-[20px] shadow-lg border-2 border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[15px] mb-1">Sales Growth Trend</h3>
                <p className="text-[11px] text-muted-foreground">월별 매출 추이 (Last 6 Months)</p>
              </div>
              <div className="text-right">
                <p className="text-[18px] text-green-600">+18%</p>
                <p className="text-[10px] text-muted-foreground">6-month growth</p>
              </div>
            </div>

            {/* Line Chart SVG */}
            <div className="relative h-40 mb-2">
              <svg className="w-full h-full" viewBox="0 0 350 160" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="350" y2="40" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="80" x2="350" y2="80" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="120" x2="350" y2="120" stroke="#e5e7eb" strokeWidth="1" />

                {/* Gradient fill */}
                <defs>
                  <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Area under line */}
                <polygon
                  points="0,140 58,125 117,110 175,115 233,90 292,65 350,45 350,160 0,160"
                  fill="url(#salesGradient)"
                />

                {/* Line */}
                <polyline
                  points="0,140 58,125 117,110 175,115 233,90 292,65 350,45"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {[
                  { x: 0, y: 140 },
                  { x: 58, y: 125 },
                  { x: 117, y: 110 },
                  { x: 175, y: 115 },
                  { x: 233, y: 90 },
                  { x: 292, y: 65 },
                  { x: 350, y: 45 },
                ].map((point, idx) => (
                  <circle
                    key={idx}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="white"
                    stroke="#22c55e"
                    strokeWidth="3"
                  />
                ))}
              </svg>

              {/* Value labels */}
              <div className="absolute inset-0 flex items-end justify-between px-2 pb-2 pointer-events-none">
                {["₫4.0B", "₫4.2B", "₫4.4B", "₫4.3B", "₫4.7B", "₫5.0B", "₫5.2B"].map((value, idx) => (
                  <div key={idx} className="text-center" style={{ width: "14%" }}>
                    <div className="bg-white/90 backdrop-blur-sm rounded px-1 py-0.5 text-[9px] text-green-700 border border-green-200">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Month labels */}
            <div className="flex justify-between text-[10px] text-muted-foreground px-2">
              {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, idx) => (
                <span key={idx}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Insight Badge */}
        <div className="mx-5 mb-6">
          <h2 className="text-[14px] text-muted-foreground mb-3">인사이트 / AI Insights</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-[16px] p-5 shadow-md border-2 border-yellow-300">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] text-yellow-900 mb-2 flex items-center gap-2">
                  <span>💡</span>
                  <span>Performance Insight</span>
                </h3>
                <p className="text-[13px] text-yellow-800 leading-relaxed mb-2">
                  District 7 branches are performing <strong>20% above average</strong> this month.
                </p>
                <p className="text-[11px] text-yellow-700 leading-relaxed">
                  권장 조치: Consider expanding marketing efforts in similar demographic areas. 
                  District 7 성공 사례를 다른 지점에 적용해보세요.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Insights */}
          <div className="mt-3 space-y-2">
            <div className="bg-white rounded-[12px] p-4 shadow-sm border border-border flex items-start gap-3">
              <span className="text-[20px]">📊</span>
              <div className="flex-1">
                <p className="text-[12px] mb-1">Average Order Value increased by 15%</p>
                <p className="text-[10px] text-muted-foreground">Premium menu items driving higher ticket sizes</p>
              </div>
            </div>
            <div className="bg-white rounded-[12px] p-4 shadow-sm border border-border flex items-start gap-3">
              <span className="text-[20px]">⏰</span>
              <div className="flex-1">
                <p className="text-[12px] mb-1">Peak hours: 6-8 PM accounts for 45% of daily sales</p>
                <p className="text-[10px] text-muted-foreground">Consider staffing optimization during peak times</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
