import { ChevronLeft, CreditCard, Wallet, DollarSign, Check, Plus, ChevronRight } from "lucide-react";
import { useNavigation } from "../../App";
import { useCart } from "../../contexts/CartContext";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function PaymentScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const { getTotalPrice } = useCart();
  const [hasCard, setHasCard] = useState(false);
  const [cardLast4, setCardLast4] = useState("");
  const [cardBrand, setCardBrand] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const total = getTotalPrice();

  // Check if user has registered card
  useEffect(() => {
    const registered = localStorage.getItem("has_card");
    const last4 = localStorage.getItem("card_last4");
    const brand = localStorage.getItem("card_brand");
    if (registered === "true" && last4) {
      setHasCard(true);
      setCardLast4(last4);
      setCardBrand(brand || "card");
      setSelectedMethod("card"); // Auto-select registered card
    }
  }, []);

  const getCardBrandDisplay = () => {
    switch (cardBrand) {
      case "visa": return { name: "Visa", color: "text-blue-600" };
      case "mastercard": return { name: "Mastercard", color: "text-orange-500" };
      case "jcb": return { name: "JCB", color: "text-red-500" };
      case "amex": return { name: "Amex", color: "text-blue-800" };
      case "international": return { name: "International", color: "text-indigo-600" };
      default: return { name: "Card", color: "text-primary" };
    }
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      showToast("결제 방법을 선택해주세요", "error");
      return;
    }

    if (selectedMethod === "card") {
      if (hasCard) {
        showToast("결제가 완료되었습니다! 💳", "success");
        navigate("orderconfirm");
      } else {
        navigate("cardtype");
      }
    } else if (selectedMethod === "momo") {
      showToast("MoMo 결제가 완료되었습니다!", "success");
      navigate("orderconfirm");
    } else if (selectedMethod === "zalo") {
      showToast("ZaloPay 결제가 완료되었습니다!", "success");
      navigate("orderconfirm");
    } else if (selectedMethod === "cod") {
      showToast("현금 결제로 주문이 접수되었습니다! 💵", "success");
      navigate("orderconfirm");
    }
  };

  const paymentMethods = [
    {
      id: "momo",
      name: "MoMo",
      nameKo: "모모 페이",
      icon: "💜",
      color: "#A50064",
    },
    {
      id: "zalo",
      name: "ZaloPay",
      nameKo: "잘로페이",
      icon: "💙",
      color: "#0068FF",
    },
    {
      id: "cod",
      name: "Cash",
      nameKo: "현금 결제",
      icon: "💵",
      color: "#22C55E",
    },
  ];

  return (
    <div className="h-screen bg-[#FAFAFA] flex flex-col">
      {/* Header - Toss Style */}
      <div className="px-4 py-3 flex items-center bg-white border-b border-border/50">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-all active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2} />
        </button>
        <h1 className="flex-1 text-center text-[17px] pr-10" style={{ fontWeight: 600 }}>
          결제하기
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-40">
        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-5 bg-white rounded-[16px] p-5"
        >
          <p className="text-[13px] text-muted-foreground mb-1">결제 금액</p>
          <p className="text-[32px] text-foreground" style={{ fontWeight: 700 }}>
            {total > 0 ? total.toLocaleString() : "220,000"}
            <span className="text-[20px] ml-1">₫</span>
          </p>
        </motion.div>

        {/* Registered Card Section */}
        {hasCard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-5 mt-4"
          >
            <p className="text-[13px] text-muted-foreground mb-3 ml-1">등록된 카드</p>
            <button
              onClick={() => setSelectedMethod("card")}
              className={`w-full bg-white rounded-[16px] p-4 flex items-center gap-4 transition-all ${
                selectedMethod === "card" 
                  ? "ring-2 ring-primary shadow-md" 
                  : "hover:shadow-sm"
              }`}
            >
              {/* Card Icon */}
              <div className="w-14 h-10 bg-gradient-to-br from-primary to-[#00563A] rounded-[8px] flex items-center justify-center shadow-md">
                <CreditCard className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>

              {/* Card Info */}
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-[13px] ${getCardBrandDisplay().color}`} style={{ fontWeight: 600 }}>
                    {getCardBrandDisplay().name}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px]" style={{ fontWeight: 600 }}>
                    기본
                  </span>
                </div>
                <p className="text-[16px]" style={{ fontWeight: 500, fontFamily: "monospace" }}>
                  •••• •••• •••• {cardLast4}
                </p>
              </div>

              {/* Selection Indicator */}
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedMethod === "card" 
                  ? "border-primary bg-primary" 
                  : "border-gray-300"
              }`}>
                {selectedMethod === "card" && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </div>
            </button>

            {/* Add New Card */}
            <button
              onClick={() => navigate("cardtype")}
              className="w-full mt-3 py-3 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Plus className="w-4 h-4" strokeWidth={2} />
              <span className="text-[14px]" style={{ fontWeight: 500 }}>
                다른 카드 추가
              </span>
            </button>
          </motion.div>
        )}

        {/* First Time Card Registration */}
        {!hasCard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-5 mt-4"
          >
            <p className="text-[13px] text-muted-foreground mb-3 ml-1">카드 결제</p>
            <button
              onClick={() => {
                setSelectedMethod("card");
                navigate("cardtype");
              }}
              className="w-full bg-white rounded-[16px] p-4 flex items-center gap-4 hover:shadow-sm transition-all"
            >
              {/* Card Icon */}
              <div className="w-14 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-[8px] flex items-center justify-center border-2 border-dashed border-gray-300">
                <Plus className="w-5 h-5 text-gray-400" strokeWidth={2} />
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <p className="text-[15px] mb-0.5" style={{ fontWeight: 600 }}>
                  카드 등록하기
                </p>
                <p className="text-[12px] text-muted-foreground">
                  Visa, Mastercard, JCB, Amex
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </motion.div>
        )}

        {/* Other Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-5 mt-6"
        >
          <p className="text-[13px] text-muted-foreground mb-3 ml-1">다른 결제 수단</p>
          <div className="bg-white rounded-[16px] overflow-hidden">
            {paymentMethods.map((method, index) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full p-4 flex items-center gap-4 transition-all ${
                  index !== 0 ? "border-t border-border/50" : ""
                } ${selectedMethod === method.id ? "bg-accent/30" : ""}`}
              >
                {/* Icon */}
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: method.color + "15" }}
                >
                  <span className="text-[20px]">{method.icon}</span>
                </div>

                {/* Text */}
                <div className="flex-1 text-left">
                  <p className="text-[15px]" style={{ fontWeight: 500 }}>
                    {method.name}
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    {method.nameKo}
                  </p>
                </div>

                {/* Selection Indicator */}
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedMethod === method.id 
                    ? "border-primary bg-primary" 
                    : "border-gray-300"
                }`}>
                  {selectedMethod === method.id && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-5 mt-6 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <span className="text-[16px]">🔒</span>
          <p className="text-[12px]">
            모든 결제는 256비트 SSL로 암호화됩니다
          </p>
        </motion.div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/50 z-40 px-5 py-4 pb-8">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handlePayment}
            disabled={!selectedMethod}
            className={`
              w-full py-4 rounded-[14px] transition-all flex items-center justify-center gap-2
              ${selectedMethod
                ? "bg-primary text-white active:scale-[0.98]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <span className="text-[17px]" style={{ fontWeight: 600 }}>
              {total > 0 ? total.toLocaleString() : "220,000"}₫ 결제하기
            </span>
          </button>
          {selectedMethod === "card" && !hasCard && (
            <p className="text-[11px] text-center text-muted-foreground mt-2">
              카드 등록 후 결제가 진행됩니다
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
