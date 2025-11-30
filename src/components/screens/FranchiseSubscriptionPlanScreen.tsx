import { ChevronLeft, Check, Zap, Crown, Star } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function FranchiseSubscriptionPlanScreen() {
  const { goBack, showToast } = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "pro" | "enterprise">("pro");

  const handleConfirm = () => {
    showToast(`${selectedPlan === "basic" ? "Basic" : selectedPlan === "pro" ? "Pro" : "Enterprise"} 플랜이 적용되었습니다!`, "success");
    goBack();
  };

  const plans = [
    {
      id: "basic" as const,
      name: "Basic",
      nameKr: "베이직",
      price: "₫2,500,000",
      priceUnit: "/ month",
      color: "from-gray-500 to-gray-600",
      icon: Check,
      features: [
        "일괄 가격 업데이트",
        "영업시간 일괄 변경",
        "배달비 일괄 설정",
        "월 10회 실행 제한",
        "기본 리포트",
      ],
    },
    {
      id: "pro" as const,
      name: "Pro",
      nameKr: "프로",
      price: "₫5,800,000",
      priceUnit: "/ month",
      color: "from-primary to-orange-600",
      icon: Star,
      badge: "인기",
      features: [
        "✨ Basic 모든 기능",
        "무제한 일괄 실행",
        "프로모션 일괄 설정",
        "메뉴 일괄 등록/수정",
        "실시간 데이터 분석",
        "우선 고객 지원",
      ],
    },
    {
      id: "enterprise" as const,
      name: "Enterprise",
      nameKr: "엔터프라이즈",
      price: "₫12,000,000",
      priceUnit: "/ month",
      color: "from-purple-600 to-pink-600",
      icon: Crown,
      badge: "프리미엄",
      features: [
        "🎯 Pro 모든 기능",
        "AI 자동 최적화",
        "맞춤형 데이터 리포트",
        "전담 컨설턴트",
        "API 연동 지원",
        "커스텀 개발 지원",
      ],
    },
  ];

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary via-orange-600 to-red-600 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="mb-4">
            <h1 className="text-[28px] mb-2">구독 플랜 선택</h1>
            <p className="text-[14px] text-white/90">Choose Your Plan</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4 border border-white/20">
            <p className="text-[12px] text-white/90 leading-relaxed">
              일괄 실행 기능을 사용하려면 구독 플랜이 필요합니다.<br/>
              브랜드 규모에 맞는 플랜을 선택해주세요.
            </p>
          </div>
        </div>

        {/* Plans */}
        <div className="px-5 py-6 space-y-4">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full rounded-[20px] p-6 shadow-lg border-2 transition-all ${
                selectedPlan === plan.id
                  ? `bg-gradient-to-br ${plan.color} text-white border-white scale-[1.02]`
                  : "bg-white text-foreground border-border hover:border-primary/50"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${
                      selectedPlan === plan.id ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <plan.icon
                      className={`w-6 h-6 ${
                        selectedPlan === plan.id ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>
                  <div className="text-left">
                    <h3
                      className={`text-[20px] mb-0.5 ${
                        selectedPlan === plan.id ? "text-white" : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-[13px] ${
                        selectedPlan === plan.id ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {plan.nameKr}
                    </p>
                  </div>
                </div>

                {plan.badge && (
                  <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-[11px]">
                    {plan.badge}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-[32px] ${
                      selectedPlan === plan.id ? "text-white" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-[13px] ${
                      selectedPlan === plan.id ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.priceUnit}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div
                className={`rounded-[12px] p-4 ${
                  selectedPlan === plan.id
                    ? "bg-white/10 backdrop-blur-sm border border-white/20"
                    : "bg-accent"
                }`}
              >
                <ul className="space-y-2.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[13px]">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          selectedPlan === plan.id ? "text-white" : "text-primary"
                        }`}
                      />
                      <span
                        className={
                          selectedPlan === plan.id ? "text-white" : "text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selection Indicator */}
              {selectedPlan === plan.id && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white text-[13px]">선택됨 / Selected</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mx-5 mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-[16px] p-4 border-2 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] text-blue-900 mb-1" style={{ fontWeight: 600 }}>
                💡 스마트 팁
              </h3>
              <p className="text-[12px] text-blue-700 leading-relaxed">
                Pro 플랜은 무제한 일괄 실행으로 <span style={{ fontWeight: 600 }}>월 평균 47% 시간 절약</span>을 제공합니다. 
                50개 이상 매장은 Pro 이상 플랜을 추천드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Note */}
        <div className="mx-5 mb-6">
          <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
            <h3 className="text-[14px] mb-3 flex items-center gap-2">
              <span>📊</span>
              <span>플랜 비교 / Plan Comparison</span>
            </h3>
            <div className="space-y-2 text-[12px]">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">일괄 실행 횟수</span>
                <span className="text-primary">Basic: 10회 | Pro/Enterprise: 무제한</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">데이터 분석</span>
                <span className="text-primary">Pro 이상</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">전담 지원</span>
                <span className="text-primary">Enterprise만</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fixed Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-2xl z-50">
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-gradient-to-r from-primary to-orange-600 text-white py-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            <Check className="w-5 h-5" />
            <span className="text-[16px]">
              {plans.find(p => p.id === selectedPlan)?.name} 플랜 확인 / Confirm
            </span>
          </button>
          <p className="text-center text-[11px] text-muted-foreground mt-2">
            언제든지 플랜을 변경하실 수 있습니다
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
