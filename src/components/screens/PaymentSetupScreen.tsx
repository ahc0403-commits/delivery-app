import { ChevronLeft, CreditCard, Shield, Lock, Zap, CheckCircle } from "lucide-react";

export function PaymentSetupScreen() {
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <button className="p-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[20px] flex-1">결제 수단 관리 / Payment Method</h1>
        </div>
        <p className="text-[13px] text-muted-foreground ml-9">한 번만 등록하세요</p>
      </div>

      {/* Hero Visual - 3D Credit Card */}
      <div className="px-5 mt-5">
        <div className="relative bg-gradient-to-br from-primary via-orange-500 to-red-500 rounded-[20px] p-6 shadow-2xl overflow-hidden h-52">
          {/* Card Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-16 -translate-x-16"></div>
          </div>

          {/* Card Content */}
          <div className="relative z-10">
            {/* Chip */}
            <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md mb-6 shadow-md"></div>

            {/* Card Number */}
            <div className="text-white text-[18px] tracking-widest mb-6 font-mono">
              •••• •••• •••• 1234
            </div>

            {/* Card Holder & Expiry */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/70 text-[10px] mb-1">CARD HOLDER</p>
                <p className="text-white text-[13px]">HYOCHANG KIM</p>
              </div>
              <div>
                <p className="text-white/70 text-[10px] mb-1">EXPIRES</p>
                <p className="text-white text-[13px]">12/28</p>
              </div>
            </div>
          </div>

          {/* Security Shield Badge */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Key Message Banner */}
      <div className="mx-5 mt-5 bg-gradient-to-r from-primary/10 to-orange-50 rounded-[16px] p-5 border-2 border-primary/40 shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-[16px] mb-2">💳 Register once, pay instantly forever!</h3>
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              한 번만 등록하면 1초 결제 가능<br/>
              더 이상 카드 정보를 입력할 필요가 없습니다!
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-4">카드 정보 입력 / Card Information</h2>

        {/* Card Number */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-[13px] mb-2 text-foreground">
            <CreditCard className="w-4 h-4 text-primary" />
            <span>카드 번호 / Card Number</span>
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px] font-mono tracking-wider"
              maxLength={19}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
              <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-sm"></div>
              <div className="w-8 h-6 bg-gradient-to-r from-red-600 to-orange-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Expiry & CVV Row */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Expiry */}
          <div>
            <label className="flex items-center gap-1.5 text-[13px] mb-2 text-foreground">
              <span>유효기간 / Expiry</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px] text-center font-mono"
              maxLength={5}
            />
          </div>

          {/* CVV */}
          <div>
            <label className="flex items-center gap-1.5 text-[13px] mb-2 text-foreground">
              <Lock className="w-3.5 h-3.5 text-primary" />
              <span>CVV</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px] text-center font-mono"
              maxLength={3}
            />
          </div>
        </div>

        {/* Cardholder Name */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-[13px] mb-2 text-foreground">
            <span>카드 소유자 / Cardholder Name</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="HYOCHANG KIM"
            className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px] uppercase"
          />
        </div>

        {/* Security Note */}
        <div className="bg-green-50 rounded-[16px] p-4 border-2 border-green-200 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-[13px] text-green-900 mb-1.5">🔒 Your info is encrypted and stored securely</h4>
              <p className="text-[11px] text-green-700 leading-relaxed">
                모든 결제 정보는 PCI-DSS 표준에 따라 암호화되어 안전하게 보관됩니다.<br/>
                All payment data is encrypted using PCI-DSS standards.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border mb-6">
          <h3 className="text-[14px] mb-3">등록 후 혜택 / Benefits After Registration</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[13px] mb-0.5">원클릭 결제 / One-Click Checkout</p>
                <p className="text-[11px] text-muted-foreground">1초 안에 주문 완료</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[13px] mb-0.5">자동 포인트 적립 / Auto Points</p>
                <p className="text-[11px] text-muted-foreground">매 주문마다 2% 자동 적립</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[13px] mb-0.5">구독 할인 / Subscription Discount</p>
                <p className="text-[11px] text-muted-foreground">정기 배달 10% 할인</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="px-5 pb-6">
        <button className="w-full bg-gradient-to-r from-primary to-orange-500 text-white py-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3">
          <Shield className="w-6 h-6" />
          <span className="text-[16px]">Save Card & Pay / 카드 등록하기</span>
        </button>

        {/* Terms */}
        <div className="mt-4 text-center">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            By registering, you agree to our <a href="#" className="text-primary underline">Terms of Service</a><br/>
            and <a href="#" className="text-primary underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
