import { ChevronLeft, Shield, MessageCircle, Phone, Headset, ChevronRight, Clock, CheckCircle } from "lucide-react";
import { useNavigation } from "../../App";

export function CustomerSupportScreen() {
  const { goBack } = useNavigation();

  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-1 hover:bg-accent rounded-full transition-all active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[20px] flex-1">무엇을 도와드릴까요? 💚</h1>
        </div>
        <p className="text-[13px] text-muted-foreground ml-9">궁금한 게 있으면 언제든 물어보세요</p>
      </div>

      {/* Responsibility Notice Banner */}
      <div className="mx-5 mt-4 bg-green-50 rounded-[16px] p-5 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-[14px] text-green-900 mb-2">💚 저희가 책임질게요</h3>
            <p className="text-[13px] text-green-800 leading-relaxed">
              앱 오류나 매장과의 문제가 생기면 본사에서 직접 해결해드려요.
            </p>
            <p className="text-[12px] text-green-700 mt-2 leading-relaxed">
              Chúng tôi chịu trách nhiệm về lỗi hệ thống và tranh chấp với cửa hàng.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-3">어떻게 연락드릴까요?</h2>
        
        {/* Card 1 - Real-time Chat */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[16px] p-5 shadow-md border border-green-200 mb-4">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <div className="relative">
                <MessageCircle className="w-7 h-7 text-green-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] mb-1">지금 바로 채팅할게요</h3>
              <p className="text-[13px] text-muted-foreground mb-2">가장 빠른 방법이에요</p>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 border border-green-300 inline-flex">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[11px] text-green-700">상담원 대기중</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-[12px] px-4 py-3 mb-4 border border-green-200/50">
            <div className="flex items-center gap-2 text-[12px] text-green-800">
              <Clock className="w-4 h-4" />
              <span>보통 1분 안에 답변해드려요</span>
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-4 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <Headset className="w-5 h-5" />
            <span className="text-[15px]">채팅 시작하기</span>
          </button>
        </div>

        {/* Card 2 - Phone Support */}
        <div className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-[16px] p-5 shadow-md border border-primary/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] mb-1">전화 문의</h3>
              <p className="text-[13px] text-muted-foreground mb-3">Call Hotline</p>
              <div className="mb-2">
                <div className="text-[22px] text-primary mb-1 tracking-wide">1900-KOREA</div>
                <div className="text-[14px] text-muted-foreground">(1900-5673)</div>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-[12px] px-4 py-3 mb-4 border border-primary/20">
            <div className="flex items-center gap-2 text-[12px] text-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>운영 시간 / Daily: </span>
              <span className="text-primary">09:00 - 22:00</span>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-[15px]">지금 전화하기 / Call Now</span>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-3">자주 묻는 질문 / Frequently Asked Questions</h2>
        <div className="bg-white rounded-[16px] shadow-sm divide-y divide-border">
          {/* FAQ 1 - Refund Policy */}
          <button className="w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[14px]">💰</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-1">환불 정책 안내</h4>
              <p className="text-[12px] text-muted-foreground">Refund Policy</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
          </button>

          {/* FAQ 2 - Delivery Delay */}
          <button className="w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[14px]">⏰</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-1">배달 지연 보상</h4>
              <p className="text-[12px] text-muted-foreground">Delivery Delay Compensation</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
          </button>

          {/* FAQ 3 - Report Store Issue */}
          <button className="w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[14px]">🚨</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-1">점주 신고하기</h4>
              <p className="text-[12px] text-muted-foreground">Report Store Issue</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
          </button>

          {/* FAQ 4 - Order Issues */}
          <button className="w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[14px]">📦</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-1">주문 오류 해결</h4>
              <p className="text-[12px] text-muted-foreground">Order Issues & Missing Items</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
          </button>

          {/* FAQ 5 - Account & Payment */}
          <button className="w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors text-left">
            <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[14px]">💳</span>
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] mb-1">결제 및 계정 문제</h4>
              <p className="text-[12px] text-muted-foreground">Account & Payment Issues</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
          </button>
        </div>
      </div>

      {/* Support Hours Info */}
      <div className="mx-5 mt-4 bg-accent rounded-[12px] p-4 border border-border">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-[13px] mb-1">빠른 응답 보장 / Quick Response Guaranteed</h4>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              평균 응답 시간 3분 이내, 모든 문의는 24시간 이내 해결<br/>
              Average response: 3 min • All issues resolved within 24h
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="mx-5 mt-4 mb-4">
        <div className="bg-red-50 rounded-[12px] p-4 border border-red-200">
          <div className="flex items-start gap-2">
            <span className="text-[16px]">🚨</span>
            <div className="flex-1">
              <h4 className="text-[13px] text-red-800 mb-1">긴급 상황 / Emergency</h4>
              <p className="text-[12px] text-red-700">
                For urgent safety issues, call immediately:<br/>
                <span className="text-[14px]">Emergency Hotline: 1900-911</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
