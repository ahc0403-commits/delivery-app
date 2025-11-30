import { useState } from "react";
import { X, ChevronRight, Sparkles, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PreferenceOnboardingProps {
  onComplete: (preferences: UserPreferences) => void;
  onSkip: () => void;
}

export interface UserPreferences {
  favoriteCategories: string[];
  spiceLevel: string;
  mealTimes: string[];
  priceRange: string;
  dietaryRestrictions: string[];
}

const steps = [
  {
    id: 1,
    title: "어떤 음식을 좋아하세요?",
    titleVi: "Bạn thích món gì?",
    subtitle: "좋아하는 음식을 모두 골라주세요",
    subtitleVi: "Chọn tất cả món bạn yêu thích",
    type: "multiple",
    options: [
      { id: "korean", icon: "🍱", label: "한식", labelVi: "Korean" },
      { id: "chicken", icon: "🍗", label: "치킨", labelVi: "Chicken" },
      { id: "pizza", icon: "🍕", label: "피자/양식", labelVi: "Pizza/Western" },
      { id: "chinese", icon: "🥡", label: "중식", labelVi: "Chinese" },
      { id: "japanese", icon: "🍣", label: "일식", labelVi: "Japanese" },
      { id: "vietnamese", icon: "🍜", label: "베트남", labelVi: "Vietnamese" },
      { id: "dessert", icon: "🍰", label: "디저트", labelVi: "Dessert" },
      { id: "snacks", icon: "🍿", label: "분식", labelVi: "Street Food" },
    ],
  },
  {
    id: 2,
    title: "매운 음식은 어때요?",
    titleVi: "Bạn thích cay không?",
    subtitle: "매운맛 선호도를 알려주세요",
    subtitleVi: "Mức độ cay bạn thích",
    type: "single",
    options: [
      { id: "love", icon: "🔥", label: "매운맛 최고!", labelVi: "Love spicy!", emoji: "🌶️🌶️🌶️" },
      { id: "medium", icon: "😋", label: "적당히 매운게 좋아요", labelVi: "Medium spicy", emoji: "🌶️🌶️" },
      { id: "mild", icon: "😌", label: "살짝만 매워도 괜찮아요", labelVi: "Mild only", emoji: "🌶️" },
      { id: "no", icon: "🙅", label: "안매운게 좋아요", labelVi: "Not spicy", emoji: "🥛" },
    ],
  },
  {
    id: 3,
    title: "주로 언제 주문하세요?",
    titleVi: "Bạn thường đặt khi nào?",
    subtitle: "자주 주문하는 시간대를 알려주세요",
    subtitleVi: "Thời gian bạn thường đặt",
    type: "multiple",
    options: [
      { id: "breakfast", icon: "🌅", label: "아침 (6-10시)", labelVi: "Breakfast" },
      { id: "lunch", icon: "☀️", label: "점심 (11-14시)", labelVi: "Lunch" },
      { id: "afternoon", icon: "🌤️", label: "오후 (15-17시)", labelVi: "Afternoon" },
      { id: "dinner", icon: "🌆", label: "저녁 (18-21시)", labelVi: "Dinner" },
      { id: "night", icon: "🌙", label: "야식 (22시 이후)", labelVi: "Late night" },
    ],
  },
  {
    id: 4,
    title: "한 끼 예산은 얼마인가요?",
    titleVi: "Ngân sách mỗi bữa?",
    subtitle: "평균 주문 금액을 선택해주세요",
    subtitleVi: "Chọn giá trung bình",
    type: "single",
    options: [
      { id: "budget", icon: "💰", label: "50,000₫ 이하", labelVi: "Under 50K", subtext: "가성비 중심" },
      { id: "standard", icon: "💵", label: "50,000-100,000₫", labelVi: "50-100K", subtext: "적당한 가격" },
      { id: "premium", icon: "💎", label: "100,000-200,000₫", labelVi: "100-200K", subtext: "프리미엄" },
      { id: "luxury", icon: "👑", label: "200,000₫ 이상", labelVi: "Over 200K", subtext: "최고급" },
    ],
  },
];

export function PreferenceOnboarding({ onComplete, onSkip }: PreferenceOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 for intro screen
  const [preferences, setPreferences] = useState<Partial<UserPreferences>>({
    favoriteCategories: [],
    spiceLevel: "",
    mealTimes: [],
    priceRange: "",
    dietaryRestrictions: [],
  });
  const [direction, setDirection] = useState(1);

  const currentStepData = currentStep >= 0 ? steps[currentStep] : null;
  const progress = currentStep >= 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  const handleSelect = (optionId: string) => {
    const step = steps[currentStep];
    
    if (step.type === "single") {
      // Single selection
      if (step.id === 2) {
        setPreferences({ ...preferences, spiceLevel: optionId });
      } else if (step.id === 4) {
        setPreferences({ ...preferences, priceRange: optionId });
      }
    } else {
      // Multiple selection
      if (step.id === 1) {
        const current = preferences.favoriteCategories || [];
        const updated = current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId];
        setPreferences({ ...preferences, favoriteCategories: updated });
      } else if (step.id === 3) {
        const current = preferences.mealTimes || [];
        const updated = current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId];
        setPreferences({ ...preferences, mealTimes: updated });
      }
    }
  };

  const isSelected = (optionId: string): boolean => {
    const step = steps[currentStep];
    if (step.id === 1) return (preferences.favoriteCategories || []).includes(optionId);
    if (step.id === 2) return preferences.spiceLevel === optionId;
    if (step.id === 3) return (preferences.mealTimes || []).includes(optionId);
    if (step.id === 4) return preferences.priceRange === optionId;
    return false;
  };

  const canProceed = (): boolean => {
    const step = steps[currentStep];
    if (step.type === "single") {
      if (step.id === 2) return !!preferences.spiceLevel;
      if (step.id === 4) return !!preferences.priceRange;
    } else {
      if (step.id === 1) return (preferences.favoriteCategories || []).length > 0;
      if (step.id === 3) return (preferences.mealTimes || []).length > 0;
    }
    return false;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    } else {
      // Complete!
      onComplete(preferences as UserPreferences);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="fixed inset-0 z-[200] bg-white">
      {/* Intro Screen */}
      {currentStep === -1 && (
        <div className="h-full flex flex-col items-center justify-between px-6 py-12">
          {/* Skip Button */}
          <div className="w-full flex justify-end">
            <button
              onClick={onSkip}
              className="text-[14px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
            >
              건너뛰기
            </button>
          </div>

          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-[#00563A] rounded-[24px] flex items-center justify-center mb-6 mx-auto shadow-2xl">
                <Sparkles className="w-12 h-12 text-white" fill="white" strokeWidth={0} />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-[28px] mb-4" style={{ fontWeight: 700 }}>
                딱 맞는 맛집을<br />찾아드릴게요!
              </h1>
              <p className="text-[15px] text-muted-foreground mb-2 leading-relaxed">
                Find restaurants just for you!<br/>
                Tìm nhà hàng phù hợp với bạn!
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-[16px] p-5 border border-green-200"
            >
              <p className="text-[13px] text-foreground leading-relaxed mb-3">
                🎯 <span style={{ fontWeight: 600 }}>이번 한 번만 여쭤볼게요!</span>
              </p>
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                간단한 질문 4개로 고객님께 딱 맞는 가게를 추천해드릴게요.
                나중에 개인설정에서 언제든 변경하실 수 있어요!
              </p>
              <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                💡 We'll recommend perfect restaurants based on your preferences.
                You can change these settings anytime.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center mt-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border">
                <span className="text-[14px]">⚡</span>
                <span className="text-[12px]" style={{ fontWeight: 500 }}>30초 완성</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border">
                <span className="text-[14px]">🎁</span>
                <span className="text-[12px]" style={{ fontWeight: 500 }}>맞춤 추천</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border">
                <span className="text-[14px]">🔒</span>
                <span className="text-[12px]" style={{ fontWeight: 500 }}>안전한 데이터</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Button */}
          <div className="w-full space-y-3">
            <button
              onClick={() => {
                setDirection(1);
                setCurrentStep(0);
              }}
              className="w-full py-4 bg-primary text-white rounded-[12px] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
            >
              <span className="text-[16px]" style={{ fontWeight: 700 }}>
                시작하기 · Let's go! 🚀
              </span>
            </button>
            <button
              onClick={onSkip}
              className="w-full py-3 text-[14px] text-muted-foreground hover:text-foreground transition-colors"
            >
              나중에 설정할게요
            </button>
          </div>
        </div>
      )}

      {/* Question Screens */}
      {currentStep >= 0 && (
        <>
          {/* Header */}
          <div className="px-5 pt-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              {/* Back Button - only show after first step */}
              {currentStep > 0 ? (
                <button
                  onClick={handleBack}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                </button>
              ) : (
                <div className="w-10 h-10" />
              )}
              
              {/* Close Button */}
              <button
                onClick={onSkip}
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Step Counter */}
            <div className="flex items-center gap-2 mt-3">
              <Sparkles className="w-5 h-5 text-primary" fill="currentColor" strokeWidth={0} />
              <p className="text-[13px] text-primary" style={{ fontWeight: 600 }}>
                {currentStep + 1}/{steps.length} 단계
              </p>
            </div>
          </div>

          {/* Content - Animated */}
          <div className="px-5 pt-4 pb-32 overflow-y-auto h-[calc(100vh-200px)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Title */}
                <div className="mb-8">
                  <h1 className="text-[26px] mb-2" style={{ fontWeight: 700 }}>
                    {currentStepData?.title}
                  </h1>
                  <p className="text-[14px] text-muted-foreground mb-1">
                    {currentStepData?.titleVi}
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-3">
                    {currentStepData?.subtitle} · {currentStepData?.subtitleVi}
                  </p>
                </div>

                {/* Options Grid */}
                <div className={`grid gap-3 ${
                  currentStepData?.id === 1 ? "grid-cols-2" : "grid-cols-1"
                }`}>
                  {currentStepData?.options.map((option) => {
                    const selected = isSelected(option.id);
                    
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`
                          relative p-4 rounded-[16px] border-2 transition-all active:scale-95
                          ${selected 
                            ? "border-primary bg-primary/5 shadow-md" 
                            : "border-border bg-white hover:border-primary/30 hover:bg-accent/50"
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          {/* Icon/Emoji */}
                          <div className={`
                            flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-[24px]
                            ${selected ? "bg-primary/10" : "bg-accent"}
                          `}>
                            {option.icon}
                          </div>

                          {/* Text */}
                          <div className="flex-1 text-left">
                            <p className={`text-[15px] mb-0.5 ${selected ? "text-primary" : ""}`} style={{ fontWeight: 600 }}>
                              {option.label}
                            </p>
                            <p className="text-[12px] text-muted-foreground">
                              {option.labelVi}
                            </p>
                            {option.subtext && (
                              <p className="text-[11px] text-muted-foreground mt-0.5">
                                {option.subtext}
                              </p>
                            )}
                            {option.emoji && (
                              <p className="text-[12px] mt-1">
                                {option.emoji}
                              </p>
                            )}
                          </div>

                          {/* Checkmark */}
                          {selected && (
                            <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Fixed Actions */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-5 shadow-lg">
            <div className="max-w-[430px] mx-auto space-y-3">
              {/* Helper Text */}
              {currentStepData?.type === "multiple" && (
                <p className="text-[12px] text-center text-muted-foreground">
                  {canProceed() 
                    ? `${currentStepData.id === 1 ? (preferences.favoriteCategories?.length || 0) : (preferences.mealTimes?.length || 0)}개 선택됨 · 여러 개 선택 가능`
                    : "하나 이상 선택해주세요"
                  }
                </p>
              )}

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`
                  w-full py-4 rounded-[12px] flex items-center justify-center gap-2 transition-all
                  ${canProceed()
                    ? "bg-primary text-white shadow-lg hover:shadow-xl active:scale-[0.98]"
                    : "bg-accent text-muted-foreground cursor-not-allowed"
                  }
                `}
              >
                <span className="text-[16px]" style={{ fontWeight: 700 }}>
                  {currentStep === steps.length - 1 ? "완료! 맞춤 추천 받기 🎉" : "다음"}
                </span>
                {currentStep < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                )}
              </button>

              {/* Skip Button */}
              <button
                onClick={onSkip}
                className="w-full py-3 text-[14px] text-muted-foreground hover:text-foreground transition-colors"
              >
                나중에 설정할게요
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}