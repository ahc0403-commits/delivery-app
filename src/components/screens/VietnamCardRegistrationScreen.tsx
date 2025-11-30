import { ChevronLeft, CreditCard, Lock, User, Calendar, Check, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function VietnamCardRegistrationScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [isDefault, setIsDefault] = useState(true);
  const [showCvv, setShowCvv] = useState(false);
  const [cardBrand, setCardBrand] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Detect card brand
  useEffect(() => {
    const num = cardNumber.replace(/\s/g, "");
    if (num.startsWith("4")) setCardBrand("visa");
    else if (num.startsWith("5") || num.startsWith("2")) setCardBrand("mastercard");
    else if (num.startsWith("35") || num.startsWith("36")) setCardBrand("jcb");
    else setCardBrand(null);
  }, [cardNumber]);

  // Auto-format card number (XXXX XXXX XXXX XXXX)
  const handleCardNumberChange = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 16);
    const formatted = numbers.match(/.{1,4}/g)?.join(" ") || numbers;
    setCardNumber(formatted);
  };

  // Auto-format expiry (MM/YY)
  const handleExpiryChange = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 4);
    if (numbers.length >= 2) {
      setExpiryDate(numbers.slice(0, 2) + "/" + numbers.slice(2));
    } else {
      setExpiryDate(numbers);
    }
  };

  // CVV (3 digits)
  const handleCvvChange = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 3);
    setCvv(numbers);
  };

  const isFormValid = () => {
    return (
      cardNumber.replace(/\s/g, "").length === 16 &&
      expiryDate.length === 5 &&
      cvv.length === 3 &&
      cardholderName.trim().length > 0
    );
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;

    // Save card (in real app, send to backend)
    localStorage.setItem("has_card", "true");
    localStorage.setItem("card_last4", cardNumber.slice(-4));
    localStorage.setItem("card_brand", cardBrand || "card");
    
    showToast("✅ 카드가 등록되었어요! 이제 결제해주세요.", "success");
    navigate("cart"); // Go back to cart to complete payment
  };

  const getCardBrandLogo = () => {
    switch (cardBrand) {
      case "visa":
        return <span className="text-[14px] font-bold text-blue-600">VISA</span>;
      case "mastercard":
        return <span className="text-[14px] font-bold text-orange-500">MC</span>;
      case "jcb":
        return <span className="text-[14px] font-bold text-red-500">JCB</span>;
      default:
        return <CreditCard className="w-5 h-5 text-white/50" />;
    }
  };

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
          카드 등록
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Card Preview - Toss Style Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 pt-6 pb-4"
        >
          <div className="bg-gradient-to-br from-primary via-[#00704A] to-[#004D32] rounded-[16px] p-5 shadow-xl shadow-primary/20 aspect-[1.7/1] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top Row */}
              <div className="flex items-start justify-between">
                <div className="w-11 h-8 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-[4px] shadow-inner"></div>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-[11px]">🇻🇳</span>
                  {getCardBrandLogo()}
                </div>
              </div>

              {/* Card Number */}
              <div>
                <p className="text-white text-[20px] tracking-[0.2em] mb-1" style={{ fontFamily: "monospace", fontWeight: 500 }}>
                  {cardNumber || "•••• •••• •••• ••••"}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/50 text-[9px] mb-0.5">CARDHOLDER</p>
                  <p className="text-white text-[13px] tracking-wide" style={{ fontWeight: 500 }}>
                    {cardholderName.toUpperCase() || "NAME ON CARD"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/50 text-[9px] mb-0.5">VALID THRU</p>
                  <p className="text-white text-[13px]" style={{ fontWeight: 500 }}>
                    {expiryDate || "MM/YY"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form - Toss Style */}
        <div className="px-6 space-y-5">
          {/* Card Number */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
              카드번호
            </label>
            <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'card' ? 'border-primary' : 'border-transparent'}`}>
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <CreditCard className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <input
                type="text"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={(e) => handleCardNumberChange(e.target.value)}
                onFocus={() => setFocusedField('card')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-[12px] text-[17px] focus:outline-none"
                style={{ fontFamily: "SF Mono, monospace", letterSpacing: "0.1em" }}
              />
              {cardBrand && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {getCardBrandLogo()}
                </div>
              )}
            </div>
          </motion.div>

          {/* Expiry & CVV Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Expiry Date */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
                유효기간
              </label>
              <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'expiry' ? 'border-primary' : 'border-transparent'}`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Calendar className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => handleExpiryChange(e.target.value)}
                  onFocus={() => setFocusedField('expiry')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-4 py-4 bg-transparent rounded-[12px] text-[17px] focus:outline-none"
                  style={{ fontFamily: "SF Mono, monospace" }}
                />
              </div>
            </motion.div>

            {/* CVV */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
                CVV
              </label>
              <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'cvv' ? 'border-primary' : 'border-transparent'}`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <input
                  type={showCvv ? "text" : "password"}
                  inputMode="numeric"
                  placeholder="•••"
                  value={cvv}
                  onChange={(e) => handleCvvChange(e.target.value)}
                  onFocus={() => setFocusedField('cvv')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-12 py-4 bg-transparent rounded-[12px] text-[17px] focus:outline-none"
                  style={{ fontFamily: "SF Mono, monospace" }}
                />
                <button
                  type="button"
                  onClick={() => setShowCvv(!showCvv)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showCvv ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Cardholder Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
              카드 소유자 이름
            </label>
            <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'name' ? 'border-primary' : 'border-transparent'}`}>
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <User className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <input
                type="text"
                placeholder="NGUYEN VAN A"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-[12px] text-[17px] focus:outline-none uppercase tracking-wide"
              />
            </div>
          </motion.div>

          {/* Default Card Toggle - Toss Style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setIsDefault(!isDefault)}
              className="w-full p-4 bg-white rounded-[12px] flex items-center gap-3 active:scale-[0.98] transition-all"
            >
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${isDefault ? "bg-primary border-primary" : "border-gray-300 bg-white"}
              `}>
                {isDefault && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </div>
              <span className="flex-1 text-left text-[15px]" style={{ fontWeight: 500 }}>
                기본 결제 수단으로 설정
              </span>
            </button>
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-muted-foreground pt-2"
          >
            <Lock className="w-4 h-4" strokeWidth={2} />
            <p className="text-[12px]">
              카드 정보는 암호화되어 안전하게 보호됩니다
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fixed Bottom Button - Toss Style */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/50 z-40 px-5 py-4 pb-8">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`
              w-full py-4 rounded-[14px] transition-all
              ${isFormValid()
                ? "bg-primary text-white active:scale-[0.98]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <span className="text-[17px]" style={{ fontWeight: 600 }}>
              카드 등록하기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
