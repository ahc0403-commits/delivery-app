import { ChevronLeft, CreditCard, Lock, User, Calendar, Check, Eye, EyeOff, MapPin, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function InternationalCardRegistrationScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [isDefault, setIsDefault] = useState(true);
  const [showCvv, setShowCvv] = useState(false);
  const [cardBrand, setCardBrand] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Detect card brand
  useEffect(() => {
    const num = cardNumber.replace(/\s/g, "");
    if (num.startsWith("4")) setCardBrand("visa");
    else if (num.startsWith("5") || num.startsWith("2")) setCardBrand("mastercard");
    else if (num.startsWith("34") || num.startsWith("37")) setCardBrand("amex");
    else setCardBrand(null);
  }, [cardNumber]);

  // Auto-format card number
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

  // CVV (3-4 digits for Amex)
  const handleCvvChange = (value: string) => {
    const maxLen = cardBrand === "amex" ? 4 : 3;
    const numbers = value.replace(/\D/g, "").slice(0, maxLen);
    setCvv(numbers);
  };

  const isFormValid = () => {
    const minCvv = cardBrand === "amex" ? 4 : 3;
    return (
      cardNumber.replace(/\s/g, "").length === 16 &&
      expiryDate.length === 5 &&
      cvv.length >= minCvv &&
      cardholderName.trim().length > 0 &&
      billingZip.trim().length >= 3
    );
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;

    // Save card
    localStorage.setItem("has_card", "true");
    localStorage.setItem("card_last4", cardNumber.slice(-4));
    localStorage.setItem("card_brand", cardBrand || "international");
    
    showToast("✅ 해외 카드가 등록되었어요! 이제 결제해주세요.", "success");
    navigate("cart"); // Go back to cart to complete payment
  };

  const getCardBrandLogo = () => {
    switch (cardBrand) {
      case "visa":
        return <span className="text-[14px] font-bold text-blue-600">VISA</span>;
      case "mastercard":
        return <span className="text-[14px] font-bold text-orange-500">MC</span>;
      case "amex":
        return <span className="text-[14px] font-bold text-blue-800">AMEX</span>;
      default:
        return <Globe className="w-5 h-5 text-white/50" />;
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
          해외 카드 등록
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Card Preview - Blue International Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 pt-6 pb-4"
        >
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 rounded-[16px] p-5 shadow-xl shadow-blue-500/20 aspect-[1.7/1] relative overflow-hidden">
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
                  <Globe className="w-4 h-4 text-white/70" />
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
              Card Number
            </label>
            <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'card' ? 'border-blue-500' : 'border-transparent'}`}>
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
                Expiry Date
              </label>
              <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'expiry' ? 'border-blue-500' : 'border-transparent'}`}>
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
                CVV/CVC
              </label>
              <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'cvv' ? 'border-blue-500' : 'border-transparent'}`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <input
                  type={showCvv ? "text" : "password"}
                  inputMode="numeric"
                  placeholder={cardBrand === "amex" ? "••••" : "•••"}
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
              Cardholder Name
            </label>
            <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'name' ? 'border-blue-500' : 'border-transparent'}`}>
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <User className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <input
                type="text"
                placeholder="JOHN SMITH"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-[12px] text-[17px] focus:outline-none uppercase tracking-wide"
              />
            </div>
          </motion.div>

          {/* Billing ZIP Code */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
              Billing ZIP/Postal Code
            </label>
            <div className={`relative bg-white rounded-[12px] border-2 transition-all ${focusedField === 'zip' ? 'border-blue-500' : 'border-transparent'}`}>
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <MapPin className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
              <input
                type="text"
                placeholder="10001"
                value={billingZip}
                onChange={(e) => setBillingZip(e.target.value)}
                onFocus={() => setFocusedField('zip')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-[12px] text-[17px] focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 ml-1">
              Enter the billing address ZIP code for your card
            </p>
          </motion.div>

          {/* Default Card Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <button
              onClick={() => setIsDefault(!isDefault)}
              className="w-full p-4 bg-white rounded-[12px] flex items-center gap-3 active:scale-[0.98] transition-all"
            >
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${isDefault ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}
              `}>
                {isDefault && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </div>
              <span className="flex-1 text-left text-[15px]" style={{ fontWeight: 500 }}>
                Set as default payment method
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
              Your card is secured with PCI-DSS encryption
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/50 z-40 px-5 py-4 pb-8">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`
              w-full py-4 rounded-[14px] transition-all
              ${isFormValid()
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white active:scale-[0.98]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            <span className="text-[17px]" style={{ fontWeight: 600 }}>
              Register Card
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
