import { ChevronLeft, Shield, Lock, Eye, Database, Trash2, UserCheck } from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function PrivacyPolicyScreen() {
  const { goBack } = useNavigation();

  const sections = [
    {
      icon: Database,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "수집하는 개인정보",
      titleEn: "Information We Collect",
      items: [
        { ko: "이름, 이메일, 전화번호", en: "Name, email, phone number" },
        { ko: "배달 주소 정보", en: "Delivery address information" },
        { ko: "결제 정보 (카드 마지막 4자리만 저장)", en: "Payment info (only last 4 digits stored)" },
        { ko: "주문 내역 및 리뷰", en: "Order history and reviews" },
        { ko: "위치 정보 (배달 시에만)", en: "Location data (during delivery only)" },
      ]
    },
    {
      icon: Eye,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "개인정보 이용 목적",
      titleEn: "How We Use Your Information",
      items: [
        { ko: "음식 주문 및 배달 서비스 제공", en: "Food ordering and delivery services" },
        { ko: "고객 지원 및 문의 응대", en: "Customer support and inquiries" },
        { ko: "맞춤형 추천 서비스", en: "Personalized recommendations" },
        { ko: "서비스 개선 및 분석", en: "Service improvement and analytics" },
        { ko: "법적 의무 준수", en: "Legal compliance" },
      ]
    },
    {
      icon: UserCheck,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "개인정보 제3자 제공",
      titleEn: "Third-Party Sharing",
      items: [
        { ko: "음식점: 주문 처리를 위한 정보", en: "Restaurants: Order processing info" },
        { ko: "배달 기사: 배달에 필요한 최소 정보", en: "Drivers: Minimum info for delivery" },
        { ko: "결제 대행사: 결제 처리를 위한 정보", en: "Payment processors: Transaction info" },
        { ko: "법적 요청 시 관계 당국", en: "Authorities when legally required" },
      ]
    },
    {
      icon: Lock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "개인정보 보호 조치",
      titleEn: "Security Measures",
      items: [
        { ko: "256비트 SSL 암호화 적용", en: "256-bit SSL encryption" },
        { ko: "PCI-DSS 결제 보안 표준 준수", en: "PCI-DSS payment security compliance" },
        { ko: "접근 권한 통제 및 로그 관리", en: "Access control and log management" },
        { ko: "정기적인 보안 점검 실시", en: "Regular security audits" },
      ]
    },
    {
      icon: Trash2,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "개인정보 보유 및 파기",
      titleEn: "Retention & Deletion",
      items: [
        { ko: "회원 탈퇴 시 즉시 삭제", en: "Deleted immediately upon account closure" },
        { ko: "법적 보관 의무 정보는 기한 후 파기", en: "Legal records destroyed after required period" },
        { ko: "주문 기록: 5년간 보관", en: "Order records: Kept for 5 years" },
        { ko: "결제 기록: 5년간 보관", en: "Payment records: Kept for 5 years" },
      ]
    },
  ];

  const rights = [
    { ko: "개인정보 열람 요청권", en: "Right to access" },
    { ko: "개인정보 정정 요청권", en: "Right to rectification" },
    { ko: "개인정보 삭제 요청권", en: "Right to erasure" },
    { ko: "개인정보 처리 정지 요청권", en: "Right to restrict processing" },
    { ko: "개인정보 이동권", en: "Right to data portability" },
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
          개인정보처리방침
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
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="text-[22px]" style={{ fontWeight: 700 }}>개인정보처리방침</h2>
            <p className="text-[13px] text-muted-foreground">Privacy Policy</p>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-start gap-2">
            <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-[12px] text-green-800 leading-relaxed">
              배달나라는 고객님의 개인정보를 소중히 보호합니다.<br/>
              Deliberry Nara values and protects your privacy.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="px-6 space-y-4">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${section.iconBg} rounded-full flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${section.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-[15px]" style={{ fontWeight: 600 }}>{section.title}</h3>
                  <p className="text-[11px] text-muted-foreground">{section.titleEn}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <p className="text-[13px]">{item.ko}</p>
                      <p className="text-[11px] text-muted-foreground">{item.en}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* User Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 border border-primary/20"
        >
          <h3 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>
            👤 이용자의 권리
          </h3>
          <p className="text-[11px] text-muted-foreground mb-4">Your Rights</p>
          <div className="grid grid-cols-1 gap-2">
            {rights.map((right, idx) => (
              <div key={idx} className="bg-white rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-[12px]">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="text-[13px]" style={{ fontWeight: 500 }}>{right.ko}</p>
                  <p className="text-[10px] text-muted-foreground">{right.en}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-white rounded-xl p-5 border border-border"
        >
          <h3 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>
            📧 개인정보 관련 문의
          </h3>
          <div className="space-y-2 text-[13px]">
            <p><span className="text-muted-foreground">개인정보보호책임자:</span> 홍길동 (Privacy Officer)</p>
            <p><span className="text-muted-foreground">이메일:</span> privacy@deliberrynara.vn</p>
            <p><span className="text-muted-foreground">전화:</span> 1900-KOREA (1900-5673)</p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-6 mt-6 mb-8">
        <div className="bg-accent rounded-xl p-4 text-center">
          <p className="text-[11px] text-muted-foreground">
            시행일: 2025년 1월 1일<br/>
            Effective Date: January 1, 2025<br/>
            © 2025 Deliberry Nara Vietnam Co., Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}



