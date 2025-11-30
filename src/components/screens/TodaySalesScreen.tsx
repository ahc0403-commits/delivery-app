import { ChevronLeft, TrendingUp, TrendingDown, DollarSign, ShoppingBag, Clock, Award, CreditCard, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

export function TodaySalesScreen() {
  const { goBack } = useNavigation();

  const salesByHour = [
    { hour: "00-06", amount: 150000, orders: 3 },
    { hour: "06-09", amount: 280000, orders: 7 },
    { hour: "09-12", amount: 650000, orders: 18 },
    { hour: "12-15", amount: 920000, orders: 26 },
    { hour: "15-18", amount: 340000, orders: 9 },
    { hour: "18-21", amount: 560000, orders: 15 },
    { hour: "21-24", amount: 100000, orders: 2 },
  ];

  const topSellingItems = [
    { name: "치즈 떡볶이", nameEn: "Cheese Tteokbokki", quantity: 28, revenue: 2660000 },
    { name: "오리지널 떡볶이", nameEn: "Original Tteokbokki", quantity: 22, revenue: 1870000 },
    { name: "튀김 세트", nameEn: "Fried Set", quantity: 19, revenue: 1235000 },
    { name: "로제 떡볶이", nameEn: "Rosé Tteokbokki", quantity: 11, revenue: 1155000 },
  ];

  const paymentMethods = [
    { method: "Momo", icon: "💳", amount: 1200000, percentage: 48 },
    { method: "ZaloPay", icon: "💰", amount: 800000, percentage: 32 },
    { method: "현금 / Cash", icon: "💵", amount: 300000, percentage: 12 },
    { method: "기타 / Other", icon: "💎", amount: 200000, percentage: 8 },
  ];

  const maxAmount = Math.max(...salesByHour.map(s => s.amount));

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-[#004D32] text-white px-5 py-6 shadow-lg">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-[12px] flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-[24px] mb-1">오늘 매출</h1>
              <p className="text-[13px] text-white/90">Today's Sales Report</p>
            </div>
          </div>

          {/* Current Date */}
          <div className="text-[12px] text-white/70 mb-4">
            📅 2025년 11월 30일 (일요일) • Sunday, Nov 30, 2025
          </div>

          {/* Total Sales Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-5 border border-white/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] text-white/80">총 매출 / Total Sales</span>
              <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-3 h-3 text-green-300" />
                <span className="text-[11px] text-green-300">+15%</span>
              </div>
            </div>
            <div className="text-[36px] mb-1">2,500,000₫</div>
            <div className="flex items-center gap-4 text-[12px] text-white/70">
              <span>어제: 2,173,913₫</span>
              <span>•</span>
              <span>지난 주 평균: 2,100,000₫</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="px-5 py-5 grid grid-cols-3 gap-3">
          <div className="bg-white rounded-[12px] p-4 shadow-sm text-center">
            <ShoppingBag className="w-5 h-5 text-primary mx-auto mb-2" />
            <div className="text-[20px] text-primary mb-1">80</div>
            <div className="text-[10px] text-muted-foreground">주문 건수<br/>Orders</div>
          </div>
          <div className="bg-white rounded-[12px] p-4 shadow-sm text-center">
            <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-2" />
            <div className="text-[20px] text-green-600 mb-1">31.3k₫</div>
            <div className="text-[10px] text-muted-foreground">평균 주문액<br/>Avg Order</div>
          </div>
          <div className="bg-white rounded-[12px] p-4 shadow-sm text-center">
            <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-[20px] text-blue-600 mb-1">14m</div>
            <div className="text-[10px] text-muted-foreground">평균 조리<br/>Avg Cook</div>
          </div>
        </div>

        {/* Hourly Sales Chart */}
        <div className="px-5 mb-5">
          <div className="bg-white rounded-[16px] p-5 shadow-sm">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              시간대별 매출 / Sales by Hour
            </h3>
            <div className="space-y-4">
              {salesByHour.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2 text-[12px]">
                    <span className="text-muted-foreground w-16">{item.hour}</span>
                    <span className="text-primary" style={{ fontWeight: 600 }}>
                      {item.amount.toLocaleString()}₫
                    </span>
                    <span className="text-muted-foreground text-[11px] w-16 text-right">
                      {item.orders}건
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-green-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="px-5 mb-5">
          <div className="bg-white rounded-[16px] p-5 shadow-sm">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              베스트 메뉴 / Top Selling
            </h3>
            <div className="space-y-3">
              {topSellingItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-accent rounded-[12px] hover:bg-accent/70 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[14px]" style={{ fontWeight: 700 }}>
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] mb-0.5">{item.name}</p>
                    <p className="text-[11px] text-muted-foreground">{item.nameEn}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] text-primary mb-0.5">
                      {item.revenue.toLocaleString()}₫
                    </p>
                    <p className="text-[11px] text-muted-foreground">{item.quantity}개 판매</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods Breakdown */}
        <div className="px-5 mb-5">
          <div className="bg-white rounded-[16px] p-5 shadow-sm">
            <h3 className="text-[16px] mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              결제 수단 / Payment Methods
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-2">
                      <span className="text-[18px]">{method.icon}</span>
                      <span>{method.method}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">{method.percentage}%</span>
                      <span className="text-primary" style={{ fontWeight: 600 }}>
                        {method.amount.toLocaleString()}₫
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="px-5 mb-5 grid grid-cols-2 gap-3">
          <div className="bg-green-50 rounded-[12px] p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <ArrowUpRight className="w-4 h-4 text-green-600" />
              <span className="text-[12px] text-green-700">전일 대비</span>
            </div>
            <div className="text-[20px] text-green-600 mb-1">+326,087₫</div>
            <div className="text-[11px] text-green-700">+15.0%</div>
          </div>
          <div className="bg-blue-50 rounded-[12px] p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-[12px] text-blue-700">주평균 대비</span>
            </div>
            <div className="text-[20px] text-blue-600 mb-1">+400,000₫</div>
            <div className="text-[11px] text-blue-700">+19.0%</div>
          </div>
        </div>

        {/* Insights Banner */}
        <div className="mx-5 mb-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-[16px] p-4 border border-purple-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-[13px] text-purple-900 mb-1" style={{ fontWeight: 600 }}>
                💡 AI 인사이트
              </h4>
              <p className="text-[12px] text-purple-700 leading-relaxed mb-2">
                점심 시간대(12-15시) 매출이 전주 대비 <span style={{ fontWeight: 600 }}>+28%</span> 증가했어요!<br />
                <span className="text-[11px]">치즈 떡볶이가 인기몰이 중입니다 🎉</span>
              </p>
              <p className="text-[10px] text-purple-600">
                📊 Lunch hours show strong growth (+28% vs last week)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
