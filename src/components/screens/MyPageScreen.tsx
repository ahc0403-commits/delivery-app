import { ChevronRight, User, MapPin, CreditCard, Globe, Bell, Edit, Crown } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

export function MyPageScreen() {
  const { navigate } = useNavigation();

  return (
    <div className="h-screen overflow-y-auto bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <h1 className="text-[20px] mb-1">안녕하세요! 👋</h1>
        <p className="text-[13px] text-muted-foreground">내 정보를 확인해보세요</p>
      </div>

      {/* User Profile Card */}
      <div className="mx-5 mt-4 bg-gradient-to-br from-primary to-[#004D32] text-white rounded-[16px] p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[36px] shadow-md">
            👤
          </div>
          <div className="flex-1">
            <h2 className="text-[22px] mb-1">Hyochang</h2>
            <p className="text-[13px] text-white/90">hyochang@email.com</p>
          </div>
        </div>
        
        {/* Membership Badge */}
        <div className="bg-white/20 backdrop-blur-sm rounded-[12px] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-300" />
            <div>
              <p className="text-[13px] text-white/80 mb-0.5">멤버십 등급 / Membership</p>
              <p className="text-[16px]">Wow Member ⭐</p>
            </div>
          </div>
          <button className="text-[12px] text-white underline">
            Benefits
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 mt-4 grid grid-cols-3 gap-3">
        <button
          onClick={() => navigate("orderhistory")}
          className="bg-white rounded-[12px] p-3 shadow-sm text-center hover:shadow-md transition-all active:scale-95"
        >
          <div className="text-[20px] text-primary mb-1">24</div>
          <div className="text-[11px] text-muted-foreground">주문 / Orders</div>
        </button>
        <button
          onClick={() => navigate("pointshistory")}
          className="bg-white rounded-[12px] p-3 shadow-sm text-center hover:shadow-md transition-all active:scale-95"
        >
          <div className="text-[20px] text-green-600 mb-1">850P</div>
          <div className="text-[11px] text-muted-foreground">포인트 / Points</div>
        </button>
        <button
          onClick={() => navigate("coupons")}
          className="bg-white rounded-[12px] p-3 shadow-sm text-center hover:shadow-md transition-all active:scale-95"
        >
          <div className="text-[20px] text-blue-600 mb-1">3</div>
          <div className="text-[11px] text-muted-foreground">쿠폰 / Coupons</div>
        </button>
      </div>

      {/* Settings Menu List */}
      <div className="px-5 mt-6">
        <h3 className="text-[14px] mb-3 text-muted-foreground">설정하기</h3>
        <div className="bg-white rounded-[16px] shadow-sm divide-y divide-border">
          {/* Edit Profile */}
          <button
            onClick={() => navigate("profileedit")}
            className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <Edit className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] mb-0.5">정보 수정</p>
              <p className="text-[11px] text-muted-foreground">Edit Profile</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Address Book */}
          <button
            onClick={() => navigate("addressmanagement")}
            className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors"
          >
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] mb-0.5">주소 관리</p>
              <p className="text-[11px] text-muted-foreground">Address Book</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-muted-foreground">2 saved</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          {/* Payment Methods */}
          <button
            onClick={() => navigate("paymentmethods")}
            className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors"
          >
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] mb-0.5">결제 수단</p>
              <p className="text-[11px] text-muted-foreground">Payment Methods</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-muted-foreground">1 card</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          {/* Language Settings */}
          <button 
            onClick={() => navigate("apppermissions")}
            className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors"
          >
            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] mb-0.5">언어 설정</p>
              <p className="text-[11px] text-muted-foreground">Language</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] text-muted-foreground">한국어</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </button>

          {/* Notifications */}
          <button 
            onClick={() => navigate("apppermissions")}
            className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors"
          >
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] mb-0.5">알림</p>
              <p className="text-[11px] text-muted-foreground">Notifications</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Additional Options */}
      <div className="px-5 mt-4">
        <h3 className="text-[14px] mb-3 text-muted-foreground">더보기 / More</h3>
        <div className="bg-white rounded-[16px] shadow-sm divide-y divide-border">
          <button 
            onClick={() => navigate("support")}
            className="w-full p-4 flex items-center justify-between hover:bg-accent transition-colors"
          >
            <span className="text-[14px]">고객센터 / Help Center</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button 
            onClick={() => navigate("terms")}
            className="w-full p-4 flex items-center justify-between hover:bg-accent transition-colors"
          >
            <span className="text-[14px]">이용약관 / Terms of Service</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button 
            onClick={() => navigate("privacy")}
            className="w-full p-4 flex items-center justify-between hover:bg-accent transition-colors"
          >
            <span className="text-[14px]">개인정보 처리방침 / Privacy Policy</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-5 mt-6 mb-4">
        <button 
          onClick={() => navigate("splash")}
          className="w-full py-4 bg-white border border-border text-muted-foreground rounded-[12px] hover:bg-accent transition-colors"
        >
          로그아웃 / Logout
        </button>
      </div>

      {/* App Version */}
      <div className="text-center text-[11px] text-muted-foreground">
        Deliberry Nara (배달나라) v1.0.0
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}