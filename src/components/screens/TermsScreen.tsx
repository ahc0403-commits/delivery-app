import { ChevronLeft, FileText, Shield, Scale, AlertCircle } from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function TermsScreen() {
  const { goBack } = useNavigation();

  const sections = [
    {
      title: "제1조 (목적)",
      titleEn: "Article 1 (Purpose)",
      content: "이 약관은 배달나라(Deliberry Nara)가 제공하는 음식 배달 중개 서비스의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.",
      contentEn: "These Terms govern the conditions and procedures for using the food delivery intermediary services provided by Deliberry Nara."
    },
    {
      title: "제2조 (서비스의 제공)",
      titleEn: "Article 2 (Provision of Services)",
      content: "회사는 다음과 같은 서비스를 제공합니다:\n• 음식점 정보 제공 및 검색\n• 음식 주문 중개\n• 배달 추적 서비스\n• 결제 처리 서비스\n• 고객 리뷰 및 평점 서비스",
      contentEn: "The Company provides the following services:\n• Restaurant information and search\n• Food order intermediation\n• Delivery tracking\n• Payment processing\n• Customer reviews and ratings"
    },
    {
      title: "제3조 (회원가입 및 이용계약)",
      titleEn: "Article 3 (Membership & Agreement)",
      content: "회원가입은 이용자가 약관에 동의하고 회사가 정한 양식에 따라 회원정보를 기입하여 회원가입 신청을 한 후 회사가 이를 승낙함으로써 체결됩니다.",
      contentEn: "Membership is established when the user agrees to the terms, fills out the membership form, applies for registration, and the Company approves the application."
    },
    {
      title: "제4조 (회원의 의무)",
      titleEn: "Article 4 (Member Obligations)",
      content: "회원은 다음 행위를 하여서는 안 됩니다:\n• 타인의 정보 도용\n• 회사가 게시한 정보의 변경\n• 회사가 금지한 정보의 송신 또는 게시\n• 기타 불법적이거나 부당한 행위",
      contentEn: "Members shall not engage in:\n• Misuse of others' information\n• Alteration of company-posted information\n• Transmission of prohibited content\n• Other illegal or improper conduct"
    },
    {
      title: "제5조 (주문 및 결제)",
      titleEn: "Article 5 (Orders & Payment)",
      content: "이용자는 서비스를 통해 음식을 주문하고 회사가 제공하는 결제 수단을 통해 결제할 수 있습니다. 결제 완료 후에는 환불 규정에 따라 처리됩니다.",
      contentEn: "Users can order food through the service and pay using payment methods provided by the Company. After payment completion, refunds are processed according to the refund policy."
    },
    {
      title: "제6조 (환불 정책)",
      titleEn: "Article 6 (Refund Policy)",
      content: "• 음식 조리 전 취소: 전액 환불\n• 음식 조리 중 취소: 부분 환불 (상황에 따라)\n• 배달 시작 후: 환불 불가\n• 음식 품질 문제: 전액 환불 또는 재배달",
      contentEn: "• Before cooking: Full refund\n• During cooking: Partial refund (case by case)\n• After delivery starts: No refund\n• Quality issues: Full refund or redelivery"
    },
    {
      title: "제7조 (책임의 제한)",
      titleEn: "Article 7 (Limitation of Liability)",
      content: "회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.",
      contentEn: "The Company is not liable for service interruptions due to force majeure events such as natural disasters, wars, or telecommunications service interruptions."
    },
    {
      title: "제8조 (분쟁해결)",
      titleEn: "Article 8 (Dispute Resolution)",
      content: "이 약관에 관한 분쟁은 베트남 법률에 따라 해결되며, 관할 법원은 호치민시 법원으로 합니다.",
      contentEn: "Disputes regarding these Terms shall be resolved under Vietnamese law, with jurisdiction in Ho Chi Minh City courts."
    }
  ];

  return (
    <div className="h-screen bg-background overflow-y-auto pb-10">
      {/* Header */}
      <div className="bg-white px-5 py-4 border-b border-border flex items-center gap-3 sticky top-0 z-10 shadow-sm">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[18px] flex-1" style={{ fontWeight: 700 }}>
          이용약관
        </h1>
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-6 pb-4"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
            <Scale className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="text-[22px]" style={{ fontWeight: 700 }}>이용약관</h2>
            <p className="text-[13px] text-muted-foreground">Terms of Service</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p className="text-[12px] text-blue-800 leading-relaxed">
            📋 본 약관은 2025년 1월 1일부터 시행됩니다.<br/>
            These Terms are effective from January 1, 2025.
          </p>
        </div>
      </motion.div>

      {/* Terms Sections */}
      <div className="px-6 space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl p-5 border border-border"
          >
            <h3 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>
              {section.title}
            </h3>
            <p className="text-[12px] text-primary mb-3">{section.titleEn}</p>
            <p className="text-[13px] text-foreground leading-relaxed whitespace-pre-line mb-2">
              {section.content}
            </p>
            <p className="text-[11px] text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.contentEn}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 mt-6 mb-8">
        <div className="bg-accent rounded-xl p-4 text-center">
          <p className="text-[11px] text-muted-foreground">
            © 2025 Deliberry Nara Vietnam Co., Ltd.<br/>
            배달나라 베트남 유한회사<br/>
            문의: support@deliberrynara.vn
          </p>
        </div>
      </div>
    </div>
  );
}



