import { Lock, Key, TrendingUp, BarChart3, Map, Store, Zap, Check, Sparkles } from "lucide-react";

export function PremiumDataSubscription() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm border-b border-border">
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 bg-accent rounded-full flex items-center justify-center">
            <span className="text-[18px]">←</span>
          </button>
          <div className="flex-1">
            <h1 className="text-[18px]">Premium Insights / 데이터 구독</h1>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Hero Visual - Locked Premium Content */}
        <div className="px-5 py-6">
          <div className="relative bg-gradient-to-br from-[#00704A] to-[#004D32] rounded-[20px] p-6 overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-24 h-24 border-2 border-white rounded-full"></div>
            </div>

            {/* Blurred Chart Mockup */}
            <div className="relative mb-4 rounded-[16px] overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-4">
              <div className="flex items-end gap-2 justify-between h-32 blur-md">
                <div className="w-full bg-white/40 rounded-t-lg" style={{ height: '60%' }}></div>
                <div className="w-full bg-white/40 rounded-t-lg" style={{ height: '80%' }}></div>
                <div className="w-full bg-white/40 rounded-t-lg" style={{ height: '100%' }}></div>
                <div className="w-full bg-white/40 rounded-t-lg" style={{ height: '70%' }}></div>
                <div className="w-full bg-white/40 rounded-t-lg" style={{ height: '90%' }}></div>
              </div>

              {/* Lock Icon Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative mb-3">
                  {/* Golden Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>
                  </div>
                  
                  {/* Lock Icon */}
                  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-4 shadow-2xl">
                    <Lock className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Golden Key - Floating */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full p-2 shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                    <Key className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                <p className="text-white text-[13px] opacity-90">Unlock Premium Data</p>
              </div>
            </div>

            {/* Persuasive Copy - Toss Tone */}
            <div className="relative text-center">
              <h2 className="text-white text-[20px] mb-2 leading-tight">
                우리 동네 1등 사장님들의<br />비밀 노트 🤫
              </h2>
              <p className="text-white/80 text-[13px] leading-relaxed">
                Secret notes of the #1 shop owners<br />in our neighborhood
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-[16px] p-4 border-2 border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0">
                <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[14px] mb-1.5" style={{ fontWeight: 600 }}>
                  월 300,000 VND으로 '수요 예측 데이터'를 확인해보세요
                </p>
                <p className="text-[12px] text-muted-foreground leading-relaxed">
                  Check demand forecast data for just 300,000 VND/month. Know what to cook, when to run promotions, and how to beat competitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Cards - 3 Tiers */}
        <div className="px-5 space-y-3 mb-6">
          <h3 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>
            요금제 선택 / Choose Your Plan
          </h3>

          {/* Starter - Free */}
          <div className="bg-white rounded-[16px] p-5 border-2 border-border shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Store className="w-4 h-4 text-muted-foreground" strokeWidth={2.5} />
                  <h4 className="text-[16px]" style={{ fontWeight: 600 }}>Starter</h4>
                </div>
                <p className="text-[12px] text-muted-foreground">무료 / Free Forever</p>
              </div>
              <div className="text-right">
                <p className="text-[24px] text-primary" style={{ fontWeight: 700 }}>₫0</p>
                <p className="text-[10px] text-muted-foreground">/month</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[12px] text-muted-foreground">My Store Data Only (내 가게 데이터만)</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[12px] text-muted-foreground">Basic Sales Report (기본 매출 리포트)</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 flex-shrink-0 mt-0.5"></div>
                <p className="text-[12px] text-muted-foreground line-through opacity-50">District Insights (구역 인사이트)</p>
              </div>
            </div>

            <button className="w-full bg-gray-100 text-gray-600 py-3 rounded-[12px] text-[13px]" style={{ fontWeight: 600 }}>
              Current Plan / 현재 요금제
            </button>
          </div>

          {/* Pro - Most Popular */}
          <div className="bg-gradient-to-br from-primary to-[#00553D] rounded-[16px] p-5 border-2 border-primary shadow-lg relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-3 right-3 bg-yellow-400 text-[#00704A] px-3 py-1 rounded-full text-[10px] shadow-md" style={{ fontWeight: 700 }}>
              ⭐ POPULAR
            </div>

            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
                  <h4 className="text-[16px] text-white" style={{ fontWeight: 600 }}>Pro</h4>
                </div>
                <p className="text-[12px] text-white/80">사장님 추천 / Recommended</p>
              </div>
              <div className="text-right">
                <p className="text-[24px] text-white" style={{ fontWeight: 700 }}>₫300k</p>
                <p className="text-[10px] text-white/80">/month</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[12px] text-white/90">Everything in Starter (스타터 모든 기능)</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[12px] text-white/90">District Data (우리 구 데이터)</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[12px] text-white/90">Competitor Trends (경쟁사 트렌드)</p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[12px] text-white/90">Demand Forecast (수요 예측)</p>
              </div>
            </div>

            <button className="w-full bg-white text-primary py-3 rounded-[12px] text-[13px] shadow-md" style={{ fontWeight: 700 }}>
              Start Free Trial / 무료로 시작
            </button>
          </div>

          {/* Master - Premium */}
          <div className="bg-white rounded-[16px] p-5 border-2 border-purple-300 shadow-sm relative overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-30"></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Map className="w-4 h-4 text-purple-600" strokeWidth={2.5} />
                    <h4 className="text-[16px]" style={{ fontWeight: 600 }}>Master</h4>
                  </div>
                  <p className="text-[12px] text-muted-foreground">프리미엄 / For Power Users</p>
                </div>
                <div className="text-right">
                  <p className="text-[24px] text-purple-600" style={{ fontWeight: 700 }}>₫500k</p>
                  <p className="text-[10px] text-muted-foreground">/month</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[12px] text-muted-foreground">Everything in Pro (프로 모든 기능)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[12px] text-muted-foreground">City-Wide Data (도시 전체 데이터)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[12px] text-muted-foreground">Live Heatmap (실시간 히트맵)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-[12px] text-muted-foreground">Unlimited Exports (무제한 내보내기)</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-[12px] text-[13px] shadow-md" style={{ fontWeight: 700 }}>
                Upgrade Now / 지금 업그레이드
              </button>
            </div>
          </div>
        </div>

        {/* FAQ / Trust Signals */}
        <div className="px-5 mb-6">
          <div className="bg-blue-50 rounded-[16px] p-4 border border-blue-200">
            <h4 className="text-[13px] mb-3 flex items-center gap-2" style={{ fontWeight: 600 }}>
              <Zap className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
              7일 무료 체험 / 7-Day Free Trial
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              신용카드 등록 없이 7일간 Pro 기능을 무료로 써보세요. 마음에 안 들면 언제든 취소할 수 있어요. No credit card required—cancel anytime during trial!
            </p>
          </div>
        </div>
      </div>

      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50 p-5">
        <div className="max-w-[430px] mx-auto">
          <button className="w-full bg-gradient-to-r from-primary to-[#00553D] text-white py-4 rounded-[12px] shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <Key className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-[15px]" style={{ fontWeight: 700 }}>
              Start Free 7-Day Trial / 7일 무료로 써보기
            </span>
          </button>
          <p className="text-center text-[10px] text-muted-foreground mt-2">
            Cancel anytime • No payment for 7 days
          </p>
        </div>
      </div>
    </div>
  );
}
