import { ChevronLeft, CreditCard, Lock, Shield, Save, Zap } from "lucide-react";
import { useNavigation } from "../../App";

export function PaymentRegistrationScreen() {
  const { goBack } = useNavigation();
  
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={goBack} className="p-1 hover:bg-accent rounded-full transition-all active:scale-95">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[18px] flex-1">결제 관리 / Manage Payment</h1>
      </div>

      {/* Hero Banner */}
      <div className="mx-5 mt-4 bg-gradient-to-br from-primary to-orange-600 text-white rounded-[16px] p-6 shadow-xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="w-7 h-7 text-yellow-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-[18px] mb-1">1초 결제의 비밀!</h2>
              <p className="text-[12px] text-white/90">One-Time Setup Magic</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-[12px] px-4 py-3 border border-white/30">
            <p className="text-[14px] mb-1">💳 한 번만 등록하면 1초 결제 가능</p>
            <p className="text-[12px] text-white/90">Register once, pay instantly forever!</p>
          </div>
        </div>
      </div>

      {/* 3D Credit Card Illustration */}
      <div className="mx-5 mt-6 relative">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[20px] p-6 shadow-2xl aspect-[1.6/1] relative overflow-hidden">
          {/* Card Chip */}
          <div className="absolute top-6 left-6 w-12 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[6px] opacity-80"></div>
          
          {/* Card Number Placeholder */}
          <div className="absolute bottom-14 left-6 right-6">
            <div className="flex gap-3 text-white/60 text-[16px] tracking-wider">
              <span>••••</span>
              <span>••••</span>
              <span>••••</span>
              <span>4242</span>
            </div>
          </div>

          {/* Card Details */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <p className="text-[10px] text-white/60 mb-1">CARD HOLDER</p>
              <p className="text-[13px] text-white">HYOCHANG</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/60 mb-1">EXPIRES</p>
              <p className="text-[13px] text-white">12/28</p>
            </div>
          </div>

          {/* Security Shield Icon */}
          <div className="absolute top-6 right-6 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30">
            <Shield className="w-5 h-5 text-green-400" />
          </div>

          {/* Card Brand */}
          <div className="absolute bottom-6 right-6">
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <div className="px-5 mt-6">
        <h3 className="text-[14px] mb-3 text-muted-foreground">카드 정보 입력 / Card Information</h3>
        
        <div className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="block text-[13px] mb-2 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>카드 번호 / Card Number</span>
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
              maxLength={19}
            />
          </div>

          {/* Expiry & CVV */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[13px] mb-2">
                만료일 / Expiry
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-[13px] mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>CVV</span>
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
                maxLength={3}
              />
            </div>
          </div>

          {/* Cardholder Name */}
          <div>
            <label className="block text-[13px] mb-2">
              카드 소유자 / Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
              defaultValue="HYOCHANG"
            />
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div className="mx-5 mt-4 bg-green-50 rounded-[12px] p-4 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-[13px] text-green-800 mb-1">🔒 안전하게 보호됩니다</h4>
            <p className="text-[12px] text-green-700 mb-2">Your info is encrypted and stored securely</p>
            <div className="space-y-1 text-[11px] text-green-700">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>256-bit SSL 암호화 / Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>PCI DSS 인증 / Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>카드 정보 비저장 / Tokenized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits List */}
      <div className="mx-5 mt-4 bg-blue-50 rounded-[12px] p-4 border border-blue-200">
        <h4 className="text-[13px] text-blue-800 mb-3">⚡ 등록 후 혜택 / Benefits</h4>
        <div className="space-y-2 text-[12px] text-blue-700">
          <div className="flex items-center gap-2">
            <span>🚀</span>
            <span>1초만에 결제 완료 / Instant checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💰</span>
            <span>첫 결제 5,000₫ 할인 / 5k off first order</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎁</span>
            <span>결제 시마다 포인트 적립 / Earn points</span>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-5 mt-6 sticky bottom-6">
        <button className="w-full bg-primary text-white py-5 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3">
          <Save className="w-6 h-6" />
          <span className="text-[16px]">카드 등록하기 / Save Card & Pay</span>
        </button>
      </div>

      {/* Footer Note */}
      <div className="px-5 mt-3 text-center">
        <p className="text-[11px] text-muted-foreground">
          등록 후 언제든지 삭제 가능 / Can be removed anytime
        </p>
      </div>
    </div>
  );
}
