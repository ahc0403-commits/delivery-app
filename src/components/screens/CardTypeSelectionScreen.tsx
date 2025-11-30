import { ChevronLeft, ChevronRight, CreditCard, Globe, Sparkles } from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function CardTypeSelectionScreen() {
  const { goBack, navigate } = useNavigation();

  const cardOptions = [
    {
      id: "vietnam",
      title: "베트남 카드",
      subtitle: "Vietnamese Card",
      description: "Visa, Mastercard, JCB 국내 발급 카드",
      icon: "🇻🇳",
      gradient: "from-primary to-[#00563A]",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200 hover:border-primary",
      route: "vietnam-card-registration",
      recommended: true,
    },
    {
      id: "international",
      title: "해외 카드",
      subtitle: "International Card",
      description: "해외에서 발급받은 Visa, Mastercard, Amex",
      icon: "🌍",
      gradient: "from-blue-600 to-indigo-700",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200 hover:border-blue-500",
      route: "international-card-registration",
      recommended: false,
    },
  ];

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header - Toss Style */}
      <div className="px-5 py-4 flex items-center bg-white sticky top-0 z-10">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-all active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 pt-2 pb-8">
        {/* Title - Toss Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-[26px] leading-tight mb-3" style={{ fontWeight: 700 }}>
            어떤 카드를<br />등록할까요?
          </h1>
          <p className="text-[15px] text-muted-foreground">
            결제에 사용할 카드 종류를 선택해주세요
          </p>
        </motion.div>

        {/* Card Type Options */}
        <div className="space-y-4">
          {cardOptions.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              onClick={() => navigate(option.route)}
              className={`w-full p-5 bg-gradient-to-br ${option.bgGradient} border-2 ${option.borderColor} rounded-[20px] hover:shadow-lg transition-all active:scale-[0.98] relative overflow-hidden`}
            >
              {/* Recommended Badge */}
              {option.recommended && (
                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-[11px] flex items-center gap-1" style={{ fontWeight: 600 }}>
                  <Sparkles className="w-3 h-3" />
                  추천
                </div>
              )}

              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-[16px] flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-[28px]">{option.icon}</span>
                </div>

                {/* Text */}
                <div className="flex-1 text-left">
                  <h3 className="text-[18px] mb-0.5" style={{ fontWeight: 700 }}>
                    {option.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground mb-1">
                    {option.subtitle}
                  </p>
                  <p className="text-[12px] text-muted-foreground/80">
                    {option.description}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-6 h-6 text-muted-foreground flex-shrink-0" strokeWidth={2} />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Scan Card Option */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 py-4 flex items-center justify-center gap-2 text-primary hover:bg-primary/5 rounded-[12px] transition-all"
        >
          <CreditCard className="w-5 h-5" strokeWidth={2} />
          <span className="text-[15px]" style={{ fontWeight: 600 }}>
            카드 스캔으로 등록하기
          </span>
        </motion.button>

        {/* Security Info - Toss Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-auto pt-8"
        >
          <div className="bg-accent/50 rounded-[16px] p-5">
            <div className="flex items-start gap-3">
              <div className="text-[24px]">🔒</div>
              <div className="flex-1">
                <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>
                  안전한 카드 정보 보호
                </p>
                <p className="text-[12px] text-muted-foreground leading-relaxed">
                  카드 정보는 국제 보안 표준(PCI-DSS)에 따라 암호화되어 안전하게 보호됩니다. 딜리버리나라는 카드 정보를 직접 저장하지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
