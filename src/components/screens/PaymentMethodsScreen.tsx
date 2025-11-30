import { ChevronLeft, Plus, CreditCard, Trash2, Check, Star, Wallet } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { motion, AnimatePresence } from "motion/react";

type PaymentMethod = {
  id: string;
  type: "card" | "wallet";
  name: string;
  nameVi: string;
  last4?: string;
  expiry?: string;
  cardType?: string;
  color: string;
  isDefault: boolean;
};

export function PaymentMethodsScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "card",
      name: "베트남 신용카드",
      nameVi: "Vietnamese Credit Card",
      last4: "3456",
      expiry: "12/26",
      cardType: "Visa",
      color: "from-primary to-[#004D32]",
      isDefault: true,
    },
    {
      id: "2",
      type: "wallet",
      name: "MoMo 지갑",
      nameVi: "MoMo Wallet",
      color: "from-[#A50064] to-[#8B0054]",
      isDefault: false,
    },
  ]);

  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(method => ({
      ...method,
      isDefault: method.id === id
    })));
    showToast("기본 결제수단으로 설정되었습니다! 💳", "success");
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    showToast("결제수단이 삭제되었습니다", "success");
  };

  return (
    <div className="h-screen bg-background overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
          결제 수단
        </h1>
        <div className="w-10 h-10" />
      </div>

      {/* Title */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-[24px] mb-2" style={{ fontWeight: 700 }}>
          등록된 결제수단
        </h2>
        <p className="text-[13px] text-muted-foreground">
          Manage Payment Methods • Quản lý thanh toán
        </p>
      </div>

      {/* Payment Methods List */}
      <div className="px-6 space-y-3">
        <AnimatePresence mode="popLayout">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {method.type === "card" ? (
                // Credit Card
                <div className="relative">
                  {method.isDefault && (
                    <div className="absolute -top-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-[11px] flex items-center gap-1 shadow-lg z-10" style={{ fontWeight: 600 }}>
                      <Star className="w-3 h-3 fill-white" strokeWidth={2} />
                      기본
                    </div>
                  )}

                  <div className={`bg-gradient-to-br ${method.color} rounded-[16px] p-5 shadow-xl relative overflow-hidden`}>
                    {/* Card Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10">
                      {/* Top: Card Type */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-10 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[4px]"></div>
                        <span className="text-white text-[12px]" style={{ fontWeight: 600 }}>
                          {method.cardType}
                        </span>
                      </div>

                      {/* Card Number */}
                      <div className="text-white text-[20px] tracking-[0.15em] mb-4" style={{ fontFamily: "monospace", fontWeight: 500 }}>
                        ••••  ••••  ••••  {method.last4}
                      </div>

                      {/* Bottom: Name & Expiry */}
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-white/70 text-[10px] mb-1">CARD NAME</p>
                          <p className="text-white text-[13px]" style={{ fontWeight: 500 }}>
                            {method.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/70 text-[10px] mb-1">VALID</p>
                          <p className="text-white text-[13px]" style={{ fontWeight: 500 }}>
                            {method.expiry}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-2 mt-3">
                    {!method.isDefault && (
                      <button
                        onClick={() => handleSetDefault(method.id)}
                        className="flex-1 py-2.5 bg-white border border-border text-primary rounded-[10px] text-[13px] hover:bg-primary/5 transition-colors active:scale-95"
                        style={{ fontWeight: 600 }}
                      >
                        기본으로 설정
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(method.id)}
                      className="py-2.5 px-4 bg-white border border-border text-red-600 rounded-[10px] text-[13px] hover:bg-red-50 transition-colors active:scale-95 flex items-center gap-1"
                      style={{ fontWeight: 600 }}
                    >
                      <Trash2 className="w-4 h-4" strokeWidth={2} />
                      삭제
                    </button>
                  </div>
                </div>
              ) : (
                // Wallet
                <div className="bg-white rounded-[16px] p-4 border-2 border-border hover:border-primary/30 transition-all relative">
                  {method.isDefault && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-[12px] text-[11px] flex items-center gap-1" style={{ fontWeight: 600 }}>
                      <Star className="w-3 h-3 fill-white" strokeWidth={2} />
                      기본
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-3 mt-2">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Wallet className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-[16px] mb-1" style={{ fontWeight: 600 }}>
                        {method.name}
                      </h3>
                      <p className="text-[13px] text-muted-foreground">
                        {method.nameVi}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                          <span className="text-[11px]" style={{ fontWeight: 600 }}>연결됨</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Actions */}
                  <div className="flex items-center gap-2 mt-4">
                    {!method.isDefault && (
                      <button
                        onClick={() => handleSetDefault(method.id)}
                        className="flex-1 py-2.5 bg-accent text-primary rounded-[10px] text-[13px] hover:bg-primary/10 transition-colors active:scale-95"
                        style={{ fontWeight: 600 }}
                      >
                        기본으로 설정
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(method.id)}
                      className="w-10 h-10 bg-red-50 text-red-600 rounded-[10px] hover:bg-red-100 transition-colors active:scale-95 flex items-center justify-center"
                    >
                      <Trash2 className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add New Payment Method */}
      <div className="px-6 mt-6 space-y-3">
        <h3 className="text-[14px] text-muted-foreground" style={{ fontWeight: 600 }}>
          새 결제수단 추가
        </h3>

        <button
          onClick={() => navigate("cardtype")}
          className="w-full py-4 bg-white border-2 border-primary rounded-[16px] text-primary hover:bg-primary/5 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" strokeWidth={2.5} />
          <span className="text-[15px]" style={{ fontWeight: 600 }}>
            카드 추가 • Add Card
          </span>
        </button>

        <button
          onClick={() => showToast("곧 지원 예정입니다!", "info")}
          className="w-full py-4 bg-white border-2 border-dashed border-border rounded-[16px] hover:bg-accent transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Wallet className="w-5 h-5 text-muted-foreground" strokeWidth={2.5} />
          <span className="text-[15px] text-muted-foreground" style={{ fontWeight: 600 }}>
            전자지갑 연결 • Connect Wallet
          </span>
        </button>
      </div>

      {/* Info Box */}
      <div className="px-6 mt-6">
        <div className="bg-accent rounded-[12px] p-4">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            💳 <span style={{ fontWeight: 600 }}>안전한 결제</span><br />
            모든 결제 정보는 PCI-DSS 국제 보안 표준에 따라 암호화되어 보호됩니다.
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}