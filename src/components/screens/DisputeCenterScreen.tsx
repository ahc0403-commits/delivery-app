import { ChevronLeft, Shield, AlertTriangle, MessageCircle, Image as ImageIcon, DollarSign, Store, User } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

export function DisputeCenterScreen() {
  const { goBack } = useNavigation();
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-1 text-white hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">분쟁 조정 / Dispute Mgmt</h1>
            <p className="text-white/80 text-[12px]">Admin Resolution Center</p>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Context Banner */}
      <div className="mx-5 mt-5 bg-gradient-to-r from-red-50 to-orange-50 rounded-[16px] p-4 border-2 border-red-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-[13px] text-red-900 mb-1">Admin Responsibility Required</h3>
            <p className="text-[11px] text-red-700 leading-relaxed">
              본사 책임 분쟁 • Platform must decide who bears the cost
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 pb-32">
        {/* Dispute Case Card */}
        <div className="bg-white rounded-[20px] shadow-xl border-2 border-red-200 overflow-hidden mb-5">
          {/* Case Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-5 py-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-white text-[18px] mb-1">Order #999</h2>
                <p className="text-white/80 text-[12px]">Delivery Failure Case</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                <span className="text-white text-[11px]">🔴 URGENT</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-[12px] px-4 py-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white text-[11px]">Filed 2 hours ago • Pending Admin Decision</span>
            </div>
          </div>

          {/* Issue Description */}
          <div className="px-5 py-4 border-b-2 border-dashed border-border">
            <h3 className="text-[14px] mb-3 flex items-center gap-2">
              <span className="text-[18px]">📋</span>
              <span>Issue Description / 문제 설명</span>
            </h3>
            <div className="bg-red-50 rounded-[12px] p-4 border border-red-200">
              <p className="text-[13px] text-red-900 mb-2">Food Spilled / Delivery Fail</p>
              <p className="text-[12px] text-red-700 leading-relaxed">
                Customer reports that the food container was damaged during delivery. 
                All items spilled. Driver claims packaging was insufficient from restaurant.
              </p>
              <p className="text-[11px] text-red-600 mt-2">
                고객이 배달 중 음식이 엎질러졌다고 신고. 라이더는 식당 포장 불량 주장.
              </p>
            </div>
          </div>

          {/* Parties Involved */}
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-[13px] text-muted-foreground mb-3">관련 당사자 / Parties Involved</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-blue-50 rounded-[10px] p-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px]">Customer: Hyochang Kim</p>
                  <p className="text-[10px] text-muted-foreground">Order Value: ₫125,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-orange-50 rounded-[10px] p-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Store className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[12px]">Store: Sindang Tteokbokki</p>
                  <p className="text-[10px] text-muted-foreground">Rating: 4.9 ⭐ • Hygiene: A+</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 rounded-[10px] p-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-[18px]">🛵</span>
                </div>
                <div className="flex-1">
                  <p className="text-[12px]">Driver: Nguyen Van A (Grab)</p>
                  <p className="text-[10px] text-muted-foreground">Rating: 4.9 ⭐ • 2,340 trips</p>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Section */}
          <div className="px-5 py-4 border-b border-border">
            <h3 className="text-[14px] mb-3 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-primary" />
              <span>Evidence / 증거 자료</span>
            </h3>
            
            {/* Photo Proof */}
            <div className="mb-4">
              <p className="text-[11px] text-muted-foreground mb-2">📸 Photo Proof from Customer</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-[12px] h-32 flex items-center justify-center border-2 border-red-300">
                  <div className="text-center">
                    <span className="text-[32px]">📦</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Spilled Food</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-[12px] h-32 flex items-center justify-center border-2 border-red-300">
                  <div className="text-center">
                    <span className="text-[32px]">💔</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Damaged Box</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Logs */}
            <div>
              <p className="text-[11px] text-muted-foreground mb-2 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                💬 Chat Logs Excerpt
              </p>
              <div className="bg-accent rounded-[12px] p-3 border border-border space-y-2 text-[11px]">
                <div className="flex gap-2">
                  <span className="text-muted-foreground">[14:30]</span>
                  <span>Customer: "음식이 다 엎질러졌어요..."</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground">[14:32]</span>
                  <span>Driver: "Packaging was not secure from store"</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground">[14:35]</span>
                  <span>Store: "We packaged properly as always"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Decision Section */}
          <div className="px-5 py-5 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h3 className="text-[15px] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Admin Decision / 관리자 결정</span>
            </h3>
            
            <div className="space-y-3">
              {/* Option 1: Platform Expense */}
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-[12px] p-4 shadow-md hover:shadow-lg transition-all active:scale-95 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] mb-1">Refund Customer (Platform Expense)</h4>
                    <p className="text-[11px] text-white/90 leading-relaxed">
                      Admin takes the cost. Full refund ₫125,000.<br/>
                      본사가 비용 부담 • 고객 전액 환불
                    </p>
                  </div>
                </div>
              </button>

              {/* Option 2: Charge Store */}
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-[12px] p-4 shadow-md hover:shadow-lg transition-all active:scale-95 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] mb-1">Charge Store (Store Expense)</h4>
                    <p className="text-[11px] text-white/90 leading-relaxed">
                      Store bears the cost due to packaging issue.<br/>
                      점주가 비용 부담 • 포장 불량 책임
                    </p>
                  </div>
                </div>
              </button>

              {/* Option 3: Reject Claim */}
              <button className="w-full bg-white border-2 border-red-300 text-foreground rounded-[12px] p-4 shadow-md hover:shadow-lg transition-all active:scale-95 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] mb-1 text-red-900">Reject Claim</h4>
                    <p className="text-[11px] text-red-700 leading-relaxed">
                      Insufficient evidence. No refund issued.<br/>
                      증거 불충분 • 환불 거부
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Note */}
            <div className="mt-4 bg-white/70 backdrop-blur-sm rounded-[10px] p-3 border border-blue-200">
              <p className="text-[10px] text-blue-800 leading-relaxed">
                ⚠️ Decision is final and will be recorded in the system. 
                Both parties will be notified immediately.<br/>
                결정은 최종이며 시스템에 기록됩니다. 모든 당사자에게 즉시 알림.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}