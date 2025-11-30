import { ChevronLeft, TrendingUp, TrendingDown, DollarSign, ShoppingBag, Star, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const salesData = [
  { day: "월 / Mon", sales: 2400 },
  { day: "화 / Tue", sales: 1800 },
  { day: "수 / Wed", sales: 3200 },
  { day: "목 / Thu", sales: 2800 },
  { day: "금 / Fri", sales: 4200 },
  { day: "토 / Sat", sales: 5100 },
  { day: "일 / Sun", sales: 4600 },
];

const bestSellers = [
  { rank: 1, name: "치즈 떡볶이", nameVi: "Cheese Tteokbokki", sold: 145, emoji: "🥇" },
  { rank: 2, name: "오리지널 떡볶이", nameVi: "Original Tteokbokki", sold: 128, emoji: "🥈" },
  { rank: 3, name: "튀김 세트", nameVi: "Fried Set", sold: 98, emoji: "🥉" },
  { rank: 4, name: "로제 떡볶이", nameVi: "Rosé Tteokbokki", sold: 76, emoji: "4️⃣" },
];

export function PerformanceReportScreen() {
  const { navigate, goBack } = useNavigation();

  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={goBack}
            className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-[18px] mb-0.5">실적 리포트</h1>
            <p className="text-[11px] text-muted-foreground">Performance Report • 주간 매출</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="px-5 py-4 grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-primary to-orange-600 text-white rounded-[12px] p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-[12px] text-white/80">총 수익 / Revenue</span>
          </div>
          <div className="text-[28px] mb-1">24.2M₫</div>
          <div className="text-[11px] text-white/80">이번 주 / This week</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-[12px] p-4 shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5" />
            <span className="text-[12px] text-white/80">평균 조리시간</span>
          </div>
          <div className="text-[28px] mb-1">18분</div>
          <div className="text-[11px] text-white/80">Avg Prep Time</div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="mx-5 mt-4 bg-white rounded-[12px] shadow-sm p-5">
        <h2 className="text-[16px] mb-4">일일 매출 / Daily Sales</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: "#666" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#666" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
              {salesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 5 ? "#F37021" : "#FFB380"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-[12px]">
          <span className="text-muted-foreground">최고 매출일: 토요일</span>
          <span className="text-primary">5,100₫</span>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="px-5 mt-4 grid grid-cols-3 gap-2">
        <div className="bg-white rounded-[12px] p-3 shadow-sm text-center">
          <div className="text-[20px] text-primary mb-1">156</div>
          <div className="text-[10px] text-muted-foreground">주문 수 / Orders</div>
        </div>
        <div className="bg-white rounded-[12px] p-3 shadow-sm text-center">
          <div className="text-[20px] text-green-600 mb-1">4.8⭐</div>
          <div className="text-[10px] text-muted-foreground">평점 / Rating</div>
        </div>
        <div className="bg-white rounded-[12px] p-3 shadow-sm text-center">
          <div className="text-[20px] text-blue-600 mb-1">94%</div>
          <div className="text-[10px] text-muted-foreground">수락률 / Accept</div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="mx-5 mt-6 bg-white rounded-[12px] shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-primary" />
          <h2 className="text-[16px]">베스트 셀러 / Best Selling Items</h2>
        </div>
        <div className="space-y-3">
          {bestSellers.map((item) => (
            <div key={item.rank} className="flex items-center gap-3">
              <span className="text-[24px] w-8">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] mb-1 truncate">{item.name}</h3>
                <p className="text-[11px] text-muted-foreground truncate">{item.nameVi}</p>
              </div>
              <div className="text-right">
                <div className="text-[16px] text-primary mb-1">{item.sold}</div>
                <div className="text-[10px] text-muted-foreground">판매 / Sold</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth Insight */}
      <div className="mx-5 mt-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-[12px] p-4 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="text-[24px]">📈</div>
          <div className="flex-1">
            <h3 className="text-[14px] mb-1 text-green-800">성장 인사이트 / Growth Insight</h3>
            <p className="text-[12px] text-green-700 mb-2">
              지난 주 대비 매출 23% 증가했습니다!
            </p>
            <p className="text-[11px] text-green-600">
              Sales increased by 23% compared to last week
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}