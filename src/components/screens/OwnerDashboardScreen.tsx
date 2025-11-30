import { ChevronLeft, TrendingUp, DollarSign, ShoppingBag, Star, Settings, Wallet, Menu as MenuIcon, Users, Bell, AlertCircle, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

export function OwnerDashboardScreen() {
  const { goBack, navigate } = useNavigation();
  
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header with Store Status */}
      <div className="bg-gradient-to-r from-primary to-orange-500 px-5 py-5 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={goBack} className="p-2 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">신당 떡볶이</h1>
            <p className="text-white/80 text-[12px]">Sindang Tteokbokki</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="p-2 bg-white/10 text-white hover:bg-white/20 rounded-full transition-colors active:scale-95"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>

        {/* Store Status Toggle */}
        <div className="bg-white/20 backdrop-blur-md rounded-[16px] p-4 border border-white/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-[24px]">🏪</span>
              </div>
              <div>
                <p className="text-white text-[14px] mb-1">영업 중 / Open</p>
                <p className="text-white/70 text-[11px]">접수 가능 상태</p>
              </div>
            </div>
            {/* Toggle Switch */}
            <div className="relative">
              <div className="w-16 h-8 bg-green-500 rounded-full shadow-inner flex items-center px-1 cursor-pointer">
                <div className="w-6 h-6 bg-white rounded-full shadow-md ml-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-5 mt-5">
        <h2 className="text-[14px] text-muted-foreground mb-3">오늘의 실적 / Today's Performance</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Sales Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[16px] p-5 shadow-md border-2 border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Wallet className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-[11px] text-green-700">Today's Sales</span>
            </div>
            <p className="text-[28px] text-green-900 mb-1">2.5M</p>
            <p className="text-[11px] text-green-600">VND • +15% vs yesterday</p>
          </div>

          {/* Active Orders Card */}
          <div className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-[16px] p-5 shadow-md border-2 border-primary/30 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] text-primary">Active Orders</span>
            </div>
            <p className="text-[28px] text-primary mb-1">3</p>
            <p className="text-[11px] text-orange-600">주문 처리 중</p>
            {/* Pulsing notification dot */}
            <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Navigation Grid - Main Features */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-3">빠른 메뉴 / Quick Access</h2>
        <div className="grid grid-cols-2 gap-3">
          
          {/* Order Management - With Badge */}
          <button 
            onClick={() => navigate("activeorders")}
            className="bg-white rounded-[16px] p-5 shadow-md border border-border hover:shadow-lg transition-all active:scale-95 relative"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
              <ShoppingBag className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-[14px] mb-1">주문 관리</h3>
            <p className="text-[11px] text-muted-foreground">Order Mgmt</p>
            {/* Badge - New Orders */}
            <div className="absolute top-3 right-3 bg-red-500 text-white text-[11px] px-2 py-0.5 rounded-full shadow-md">
              1 New
            </div>
          </button>

          {/* Menu Control */}
          <button 
            onClick={() => navigate("menu")}
            className="bg-white rounded-[16px] p-5 shadow-md border border-border hover:shadow-lg transition-all active:scale-95"
          >
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-3 mx-auto">
              <MenuIcon className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-[14px] mb-1">메뉴 관리</h3>
            <p className="text-[11px] text-muted-foreground">Menu Control</p>
            <div className="mt-2 text-[10px] text-orange-600 flex items-center justify-center gap-1">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
              <span>품절 설정</span>
            </div>
          </button>

          {/* Biz Wallet */}
          <button 
            onClick={() => navigate("wallet")}
            className="bg-white rounded-[16px] p-5 shadow-md border border-border hover:shadow-lg transition-all active:scale-95"
          >
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-3 mx-auto">
              <Wallet className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-[14px] mb-1">비즈 머니</h3>
            <p className="text-[11px] text-muted-foreground">Biz Wallet</p>
            <div className="mt-2 text-[10px] text-green-600">
              💰 출금 가능
            </div>
          </button>

          {/* Franchise Admin - Dark/Special Card */}
          <button 
            onClick={() => navigate("franchise")}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[16px] p-5 shadow-lg border-2 border-gray-700 hover:shadow-xl transition-all active:scale-95 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg relative z-10">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[14px] mb-1 text-white">프랜차이즈</h3>
            <p className="text-[11px] text-gray-400">Franchise Admin</p>
            <div className="mt-2 bg-primary/20 text-primary text-[9px] px-2 py-1 rounded-full inline-block">
              MASTER ACCOUNT
            </div>
          </button>

          {/* Premium Insights - With Pro Badge */}
          <button 
            onClick={() => navigate("insights")}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[16px] p-5 shadow-md border-2 border-purple-200 hover:shadow-lg transition-all active:scale-95 col-span-2 relative"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-[15px] mb-1">프리미엄 인사이트</h3>
                <p className="text-[11px] text-muted-foreground mb-2">Premium Insights & Analytics</p>
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] px-2 py-1 rounded-full">PRO</span>
                  <span className="text-[10px] text-purple-600">AI 분석 리포트</span>
                </div>
              </div>
            </div>
            {/* Sparkle decoration */}
            <div className="absolute top-3 right-3 text-[20px]">✨</div>
          </button>
        </div>
      </div>

      {/* Quick Alerts Section */}
      <div className="px-5 mt-5">
        <h2 className="text-[14px] text-muted-foreground mb-3">알림 / Notifications</h2>
        <div className="space-y-2">
          {/* Alert 1 */}
          <div className="bg-orange-50 rounded-[12px] p-4 border border-orange-200 flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Bell className="w-4 h-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-[12px] text-orange-900 mb-1">신규 주문 1건 대기중</p>
              <p className="text-[10px] text-orange-700">New order waiting for confirmation</p>
            </div>
            <span className="text-[10px] text-orange-600">방금</span>
          </div>

          {/* Alert 2 */}
          <div className="bg-blue-50 rounded-[12px] p-4 border border-blue-200 flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-[12px] text-blue-900 mb-1">떡볶이 재고 부족 알림</p>
              <p className="text-[10px] text-blue-700">Tteokbokki stock running low</p>
            </div>
            <span className="text-[10px] text-blue-600">1시간 전</span>
          </div>
        </div>
      </div>

      {/* Performance Quick View */}
      <div className="mx-5 mt-5 bg-white rounded-[16px] p-5 shadow-sm border border-border">
        <h3 className="text-[14px] mb-4">이번 주 요약 / This Week Summary</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-[11px] text-muted-foreground mb-1">총 주문</p>
            <p className="text-[20px] text-primary">47</p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground mb-1">평균 평점</p>
            <p className="text-[20px] text-yellow-600">4.8 ⭐</p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground mb-1">매출</p>
            <p className="text-[20px] text-green-600">12M</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}