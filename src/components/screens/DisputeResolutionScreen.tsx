import { ChevronLeft, Shield, MessageCircle, Phone, Headset, ChevronRight, Clock } from "lucide-react";

export function DisputeResolutionScreen() {
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <button className="p-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[20px] flex-1">문제가 생겼나요? 💚</h1>
        </div>
        <p className="text-[13px] text-muted-foreground ml-9">걱정 마세요, 저희가 해결해드릴게요</p>
      </div>

      {/* Top Banner - Platform Responsibility */}
      <div className="mx-5 mt-5 bg-green-50 rounded-[16px] p-5 border-2 border-green-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
            <Shield className="w-7 h-7 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-[15px] text-green-900 mb-2">저희가 책임질게요 ☘️</h3>
            <p className="text-[13px] text-green-800 leading-relaxed mb-2">
              앱 오류나 매장과의 문제는 본사에서 직접 해결해드려요.
            </p>
            <p className="text-[12px] text-green-700 leading-relaxed">
              Mọi vấn đề sẽ được chúng tôi xử lý trực tiếp.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-3">어떻게 도와드릴까요?</h2>
        
        {/* Card 1 - Live Chat */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[16px] p-6 shadow-lg border-2 border-green-200 mb-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <div className="relative">
                <Headset className="w-8 h-8 text-green-600" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] mb-1">지금 바로 채팅하기</h3>
              <p className="text-[13px] text-muted-foreground mb-3">가장 빠르게 해결돼요</p>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border-2 border-green-300 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[12px] text-green-700">🟢 Agent Online</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-4 py-3 mb-4 border border-green-200">
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-green-800">평균 응답 시간 / Response Time</span>
              <span className="text-green-600">{"< 30 sec"}</span>
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-4 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="text-[15px]">Chat Now / 채팅 시작</span>
          </button>
        </div>

        {/* Card 2 - Hotline */}
        <div className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-[16px] p-6 shadow-lg border-2 border-primary/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-[17px] mb-1">전화 상담</h3>
              <p className="text-[13px] text-muted-foreground mb-3">Customer Hotline</p>
              <div className="mb-2">
                <div className="text-[24px] text-primary mb-1 tracking-wide">1900-5673</div>
                <div className="text-[13px] text-muted-foreground">Korea Delivery Support</div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-4 py-3 mb-4 border border-primary/20">
            <div className="flex items-center gap-2 text-[12px] text-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>운영 시간 / Operating Hours:</span>
              <span className="text-primary">Daily 9AM - 10PM</span>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-[15px]">Call Now / 전화 걸기</span>
          </button>
        </div>
      </div>

      {/* FAQ Section - Bottom List */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-3">자주 묻는 질문 / FAQ</h2>
        <div className="bg-white rounded-[16px] shadow-md divide-y divide-border">
          {/* Refund Policy */}
          <button className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[18px]">💰</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-0.5">환불 정책 / Refund Policy</h4>
              <p className="text-[11px] text-muted-foreground">전액 환불 조건 및 절차 안내</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </button>

          {/* Report Store Issue */}
          <button className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[18px]">🚨</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-0.5">점주 신고 / Report Store Issue</h4>
              <p className="text-[11px] text-muted-foreground">위생/서비스 문제 신고하기</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </button>

          {/* Delivery Delay */}
          <button className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[18px]">⏰</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-0.5">배달 지연 보상 / Delay Compensation</h4>
              <p className="text-[11px] text-muted-foreground">30분 이상 지연시 자동 보상</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </button>

          {/* Wrong Order */}
          <button className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[18px]">📦</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-0.5">잘못된 주문 / Wrong Order</h4>
              <p className="text-[11px] text-muted-foreground">오배송 및 누락 항목 처리</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </button>

          {/* Payment Issues */}
          <button className="w-full p-4 flex items-center gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[18px]">💳</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-0.5">결제 문제 / Payment Issues</h4>
              <p className="text-[11px] text-muted-foreground">중복 결제 및 취소 요청</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </button>
        </div>
      </div>

      {/* Platform Guarantee Badge */}
      <div className="mx-5 mt-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-[16px] p-4 border border-green-300">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-[13px] mb-1">Deliberry Nara 약속해요 ☘️</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              24시간 안에 해결해드려요 • 문제가 있으면 100% 환불해드려요<br/>
              Giải quyết trong 24h • Hoàn tiền 100% nếu có vấn đề
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
