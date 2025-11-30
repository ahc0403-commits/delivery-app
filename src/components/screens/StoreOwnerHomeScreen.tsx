import { ChevronRight, Package, Utensils, Wallet, BarChart3, Crown, Bell, CheckCircle, AlertCircle, XCircle, TrendingUp, ShoppingCart, Store, User, ClipboardList, ShoppingBag, Phone, Clock, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

// Default schedule (could be loaded from localStorage/backend)
const DEFAULT_SCHEDULE = [
  { day: "Monday", dayKo: "월", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
  { day: "Tuesday", dayKo: "화", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
  { day: "Wednesday", dayKo: "수", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
  { day: "Thursday", dayKo: "목", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
  { day: "Friday", dayKo: "금", isOpen: true, openTime: "10:00", closeTime: "23:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
  { day: "Saturday", dayKo: "토", isOpen: true, openTime: "11:00", closeTime: "23:00", hasBreak: false },
  { day: "Sunday", dayKo: "일", isOpen: false, openTime: "11:00", closeTime: "21:00", hasBreak: false },
];

export function StoreOwnerHomeScreen() {
  const { navigate, showToast } = useNavigation();
  const [manualOverride, setManualOverride] = useState<boolean | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Calculate auto status based on schedule
  const getAutoStatus = () => {
    const now = currentTime;
    const dayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
    const currentTimeNum = now.getHours() * 100 + now.getMinutes();
    const todaySchedule = DEFAULT_SCHEDULE[dayIndex];

    if (!todaySchedule.isOpen) {
      return { isOpen: false, message: "휴무일", messageEn: "Day Off", nextOpen: "내일 오픈" };
    }

    const openTime = parseInt(todaySchedule.openTime.replace(":", ""));
    const closeTime = parseInt(todaySchedule.closeTime.replace(":", ""));

    if (currentTimeNum < openTime) {
      return { isOpen: false, message: `${todaySchedule.openTime} 오픈`, messageEn: `Opens ${todaySchedule.openTime}`, nextOpen: todaySchedule.openTime };
    }
    if (currentTimeNum >= closeTime) {
      return { isOpen: false, message: "영업 종료", messageEn: "Closed", nextOpen: "내일 오픈" };
    }

    if (todaySchedule.hasBreak && todaySchedule.breakStart && todaySchedule.breakEnd) {
      const breakStart = parseInt(todaySchedule.breakStart.replace(":", ""));
      const breakEnd = parseInt(todaySchedule.breakEnd.replace(":", ""));
      if (currentTimeNum >= breakStart && currentTimeNum < breakEnd) {
        return { isOpen: false, message: `브레이크 (${todaySchedule.breakEnd}까지)`, messageEn: `Break until ${todaySchedule.breakEnd}`, nextOpen: todaySchedule.breakEnd };
      }
    }

    return { isOpen: true, message: `${todaySchedule.closeTime}까지`, messageEn: `Until ${todaySchedule.closeTime}`, nextOpen: null };
  };

  const autoStatus = getAutoStatus();
  const isCurrentlyOpen = manualOverride !== null ? manualOverride : autoStatus.isOpen;

  const handleManualToggle = () => {
    if (manualOverride === null) {
      // First override
      setManualOverride(!autoStatus.isOpen);
      showToast(autoStatus.isOpen ? "임시 휴무 설정됨 ⚠️" : "수동으로 영업 시작! 🟢", "success");
    } else {
      // Return to auto
      setManualOverride(null);
      showToast("자동 영업 관리로 복귀! 🔄", "success");
    }
  };
  
  return (
    <div className="h-screen overflow-y-auto bg-background pb-20">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-[12px] flex items-center justify-center shadow-md">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] text-primary mb-0.5">Deliberry Nara Partner</p>
              <h1 className="text-[18px] mb-0.5">신당 떡볶이</h1>
              <p className="text-[11px] text-muted-foreground">Sindang Tteokbokki</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-accent rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-accent rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Status Toggle - Enhanced with Auto Management */}
        <div className={`rounded-[12px] p-4 ${isCurrentlyOpen ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {/* Status Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCurrentlyOpen ? 'bg-green-500' : 'bg-red-500'}`}>
                {isCurrentlyOpen ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <XCircle className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <span className="text-[15px]" style={{ fontWeight: 600 }}>
                  {isCurrentlyOpen ? "영업중" : "영업시간 아님"}
                </span>
                <p className="text-[11px] text-muted-foreground">
                  {autoStatus.message} / {autoStatus.messageEn}
                </p>
              </div>
            </div>
            <button 
              onClick={handleManualToggle}
              className={`relative w-14 h-7 rounded-full transition-all shadow-md ${isCurrentlyOpen ? 'bg-green-500' : 'bg-red-400'}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${isCurrentlyOpen ? 'right-1' : 'left-1'}`} />
            </button>
          </div>

          {/* Auto/Manual Status */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              {manualOverride !== null ? (
                <>
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-[12px] text-orange-600" style={{ fontWeight: 500 }}>
                    수동 모드 • 자동으로 돌아가려면 다시 탭
                  </span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-[12px] text-blue-600" style={{ fontWeight: 500 }}>
                    자동 관리 중 • 설정된 시간에 따라 자동 전환
                  </span>
                </>
              )}
            </div>
            <button
              onClick={() => navigate("storehours")}
              className="flex items-center gap-1 text-primary hover:bg-primary/10 px-2 py-1 rounded-lg transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="text-[11px]" style={{ fontWeight: 600 }}>시간 설정</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Quick Stats */}
      <div className="px-5 py-4">
        <h2 className="text-[14px] text-muted-foreground mb-3">오늘의 현황 / Today's Overview</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Today's Sales */}
          <button
            onClick={() => navigate("todaysales")}
            className="bg-gradient-to-br from-primary to-[#004D32] text-white rounded-[16px] p-5 shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[12px] text-white/80">오늘 매출 / Sales</span>
            </div>
            <div className="text-[24px] mb-1">2.5M₫</div>
            <div className="text-[11px] text-white/80">+15% vs yesterday</div>
          </button>

          {/* Active Orders */}
          <button
            onClick={() => navigate("activeorders")}
            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-[16px] p-5 shadow-lg hover:shadow-xl transition-all active:scale-95 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[12px] text-white/80">활성 주문 / Active</span>
            </div>
            <div className="text-[40px] leading-none mb-1">3</div>
            <div className="text-[11px] text-white/80">주문 / orders</div>
            <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Main Menu Grid - Navigation Cards */}
      <div className="px-5 pb-4">
        <h2 className="text-[14px] text-muted-foreground mb-3">바로가기 / Quick Actions</h2>
        <div className="space-y-3">
          {/* Card 1 - Order Management */}
          <button 
            onClick={() => navigate("neworder")}
            className="w-full bg-white rounded-[16px] p-4 shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-[12px] flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-[15px] mb-1">주문 관리 / Incoming Orders</h3>
              <p className="text-[12px] text-muted-foreground">실시간 주문 확인 및 처리</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-red-500 text-white px-2.5 py-1 rounded-full text-[11px] shadow-sm">
                1 New
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          {/* Card 2 - Menu Control */}
          <button 
            onClick={() => navigate("menu")}
            className="w-full bg-white rounded-[16px] p-4 shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-orange-50 rounded-[12px] flex items-center justify-center flex-shrink-0">
              <Utensils className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-[15px] mb-1">메뉴 관리 / Manage Menu</h3>
              <p className="text-[12px] text-muted-foreground">가격, 재고, 품절 관리</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Card 3 - Biz Money Wallet */}
          <button 
            onClick={() => navigate("wallet")}
            className="w-full bg-white rounded-[16px] p-4 shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-green-50 rounded-[12px] flex items-center justify-center flex-shrink-0">
              <Wallet className="w-7 h-7 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-[15px] mb-1">비즈 머니 / Wallet & Withdraw</h3>
              <p className="text-[12px] text-muted-foreground">충전, 출금, 거래내역</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[13px] text-green-600">-200k₫</div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          {/* NEW Card 3.5 - Raw Materials Order */}
          <button 
            onClick={() => navigate("rawmaterials")}
            className="w-full bg-gradient-to-r from-purple-50 to-pink-50 rounded-[16px] p-4 shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-4 border border-purple-200"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-[12px] flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="w-7 h-7 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-[15px] mb-1">원재료 주문 / Raw Materials</h3>
              <p className="text-[12px] text-muted-foreground">식자재, 포장재 발주</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[9px] shadow-sm">
                5 Low
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          {/* Card 4 - Premium Insights */}
          <button 
            onClick={() => navigate("ownerdash")}
            className="w-full bg-gradient-to-r from-yellow-50 to-amber-50 rounded-[16px] p-4 shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-4 border border-yellow-200"
          >
            <div className="w-14 h-14 bg-yellow-100 rounded-[12px] flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-7 h-7 text-yellow-700" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-[15px]">비즈니스 인사이트 / Business Data</h3>
                <div className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-[9px] shadow-sm">
                  PRO
                </div>
              </div>
              <p className="text-[12px] text-muted-foreground">시장 분석 및 트렌드</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Card 5 - Franchise Master (Distinctive) */}
          <button 
            onClick={() => navigate("franchise")}
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-[16px] p-4 shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-4"
          >
            <div className="w-14 h-14 bg-yellow-400 rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-md">
              <Crown className="w-7 h-7 text-gray-900" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-[15px] text-white">프랜차이즈 관리자</h3>
              </div>
              <p className="text-[12px] text-gray-300">Franchise Admin (50 branches)</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="mx-5 mb-4 bg-white rounded-[16px] shadow-sm p-4">
        <h3 className="text-[14px] mb-3">이번 주 성과 / This Week</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-[20px] text-primary mb-1">48</div>
            <div className="text-[10px] text-muted-foreground">완료 주문<br/>Orders</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="text-[20px] text-green-600 mb-1">4.8★</div>
            <div className="text-[10px] text-muted-foreground">평균 평점<br/>Rating</div>
          </div>
          <div className="text-center">
            <div className="text-[20px] text-blue-600 mb-1">12m</div>
            <div className="text-[10px] text-muted-foreground">평균 조리<br/>Avg Cook</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
}