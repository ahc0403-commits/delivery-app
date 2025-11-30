import { CheckCircle, Download, Share2, Sparkles } from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

// Confetti particle component
const ConfettiParticle = ({ delay, x }: { delay: number; x: number }) => (
  <motion.div
    initial={{ y: -20, x: x, opacity: 1, rotate: 0 }}
    animate={{ 
      y: 400, 
      x: x + (Math.random() - 0.5) * 100, 
      opacity: 0, 
      rotate: 360 * (Math.random() > 0.5 ? 1 : -1) 
    }}
    transition={{ duration: 2 + Math.random(), delay, ease: "easeOut" }}
    className="absolute top-0 w-3 h-3 rounded-sm"
    style={{ 
      backgroundColor: ['#00704A', '#FF4E50', '#FEE500', '#00B14F', '#F37021'][Math.floor(Math.random() * 5)],
      left: `${x}%`
    }}
  />
);

export function ReceiptScreen() {
  const { navigate } = useNavigation();
  const [showReceipt, setShowReceipt] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti and show receipt with delay
    setShowConfetti(true);
    const timer = setTimeout(() => {
      setShowReceipt(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleConfirm = () => {
    navigate("home");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-primary/5 via-white to-primary/10 flex flex-col overflow-hidden relative">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
          {Array.from({ length: 30 }).map((_, i) => (
            <ConfettiParticle key={i} delay={i * 0.05} x={Math.random() * 100} />
          ))}
        </div>
      )}

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm px-5 py-4 border-b border-border/50 relative z-10"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-[18px]" style={{ fontWeight: 700 }}>영수증</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-accent rounded-full transition-all">
              <Share2 className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-all">
              <Download className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-32 relative z-10">
        {/* Success Animation */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="pt-8 pb-4 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-[#00553D] rounded-full flex items-center justify-center mx-auto shadow-xl shadow-primary/30"
            >
              <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-yellow-800" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-[28px] mt-4 mb-1" style={{ fontWeight: 700 }}>짠! 🎉</h2>
            <p className="text-[15px] text-muted-foreground">주문이 완료되었어요!</p>
          </motion.div>
        </motion.div>

        {/* Receipt Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: showReceipt ? 1 : 0, y: showReceipt ? 0 : 50, scale: showReceipt ? 1 : 0.9 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          className="mx-5 mb-6"
        >
          <div className="bg-white rounded-[20px] shadow-2xl overflow-hidden border border-border/50">
            {/* Receipt Header */}
            <div className="bg-gradient-to-br from-primary to-[#004D32] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-[22px]" style={{ fontWeight: 700 }}>Deliberry Nara</h3>
                  <p className="text-[12px] text-white/70">배달나라</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-white/60">주문번호</p>
                  <p className="text-[14px] tracking-wider" style={{ fontWeight: 600 }}>#DN-{new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}{String(new Date().getDate()).padStart(2, '0')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-[20px]">🍜</span>
                </div>
                <div>
                  <p className="text-[14px]" style={{ fontWeight: 600 }}>신당 떡볶이</p>
                  <p className="text-[11px] text-white/70">Sindang Tteokbokki</p>
                </div>
              </div>
            </div>

            {/* Receipt Tear Effect */}
            <div className="h-4 bg-white relative">
              <div className="absolute inset-x-0 top-0 flex justify-between px-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary/10 rounded-full -mt-1"></div>
                ))}
              </div>
            </div>

            {/* Order Details */}
            <div className="p-6">
              {/* Date & Time */}
              <div className="flex justify-between text-[13px] mb-4 pb-4 border-b border-dashed border-border">
                <span className="text-muted-foreground">결제일시</span>
                <span style={{ fontWeight: 500 }}>{new Date().toLocaleString('ko-KR')}</span>
              </div>

              {/* Order Items */}
              <div className="space-y-3 mb-4 pb-4 border-b border-dashed border-border">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[14px]" style={{ fontWeight: 500 }}>오리지널 떡볶이</p>
                    <p className="text-[11px] text-muted-foreground">x2</p>
                  </div>
                  <p className="text-[14px]" style={{ fontWeight: 500 }}>170,000₫</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-[14px]" style={{ fontWeight: 500 }}>치즈 떡볶이</p>
                    <p className="text-[11px] text-muted-foreground">x1</p>
                  </div>
                  <p className="text-[14px]" style={{ fontWeight: 500 }}>95,000₫</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-4 pb-4 border-b border-dashed border-border">
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted-foreground">소계</span>
                  <span>265,000₫</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-muted-foreground">배달비</span>
                  <span className="text-primary" style={{ fontWeight: 500 }}>무료 🎉</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px]" style={{ fontWeight: 600 }}>총 결제금액</span>
                <span className="text-[24px] text-primary" style={{ fontWeight: 700 }}>265,000₫</span>
              </div>

              {/* Payment Method */}
              <div className="bg-accent rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-[18px]">💳</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px]" style={{ fontWeight: 500 }}>신용카드 결제</p>
                    <p className="text-[11px] text-muted-foreground">•••• •••• •••• 1234</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Receipt Footer */}
            <div className="bg-accent/50 p-4 text-center">
              <p className="text-[11px] text-muted-foreground mb-1">승인번호: 87654321</p>
              <p className="text-[10px] text-muted-foreground">
                Deliberry Nara Vietnam Co., Ltd • Tax ID: 0123456789
              </p>
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showReceipt ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="mx-5 mb-6"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-[14px] text-primary" style={{ fontWeight: 500 }}>
              🙏 이용해 주셔서 감사합니다!
            </p>
            <p className="text-[12px] text-muted-foreground mt-1">
              영수증은 마이페이지에서 다시 확인하실 수 있어요
            </p>
          </div>
        </motion.div>
      </div>

      {/* Fixed Bottom Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/50 z-40 px-5 py-4 pb-8"
      >
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handleConfirm}
            className="w-full py-4 bg-primary text-white rounded-[14px] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
          >
            <span className="text-[17px]" style={{ fontWeight: 600 }}>
              확인 ✓
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
