import { useNavigation } from "../../App";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, ChefHat, Clock, MapPin } from "lucide-react";

export function OrderConfirmationScreen() {
  const { navigate } = useNavigation();
  const { clearCart } = useCart();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Clear cart after successful payment
    clearCart();
    
    // Show content with delay for animation
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleViewOrderStatus = () => {
    navigate("status");
  };

  const handleGoHome = () => {
    navigate("home");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-primary/5 via-white to-primary/10 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="relative mb-8"
        >
          {/* Outer Ring Pulse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 bg-primary rounded-full"
          />
          
          {/* Main Circle */}
          <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-6"
        >
          <h1 className="text-[26px] mb-3" style={{ fontWeight: 700 }}>
            결제 완료! 🎉
          </h1>
          <p className="text-[18px] text-primary mb-2" style={{ fontWeight: 600 }}>
            Payment Successful
          </p>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[16px] text-foreground leading-relaxed mb-2">
            잠시만 기다려 주세요.
          </p>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            정성껏 조리하여<br />
            고객님께 빨리 달려갈게요! 🏃‍♂️💨
          </p>
        </motion.div>

        {/* Order Info Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.95 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-sm bg-white rounded-[20px] shadow-lg p-6 mb-8"
        >
          {/* Order Number */}
          <div className="text-center mb-5 pb-5 border-b border-border/50">
            <p className="text-[12px] text-muted-foreground mb-1">주문번호 Order No.</p>
            <p className="text-[20px] tracking-wider text-primary" style={{ fontWeight: 700 }}>
              #DN-{new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}{String(new Date().getDate()).padStart(2, '0')}
            </p>
          </div>

          {/* Status Items */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-[14px]" style={{ fontWeight: 600 }}>주문 접수 완료</p>
                <p className="text-[12px] text-muted-foreground">Order Received</p>
              </div>
              <div className="text-[20px]">✅</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[14px]" style={{ fontWeight: 600 }}>예상 배달 시간</p>
                <p className="text-[12px] text-muted-foreground">약 30-40분</p>
              </div>
              <div className="text-[20px]">⏱️</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-[14px]" style={{ fontWeight: 600 }}>배달 주소</p>
                <p className="text-[12px] text-muted-foreground truncate">123 Nguyen Hue, D1</p>
              </div>
              <div className="text-[20px]">📍</div>
            </div>
          </div>
        </motion.div>

        {/* Cooking Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ delay: 1 }}
          className="text-[48px] mb-2"
        >
          <motion.span
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ display: "inline-block" }}
          >
            🍳
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="px-6 pb-10 space-y-3"
      >
        <button
          onClick={handleViewOrderStatus}
          className="w-full py-4 bg-primary text-white rounded-[14px] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
        >
          <span className="text-[16px]" style={{ fontWeight: 700 }}>
            주문 상태 확인하기 🔍
          </span>
        </button>
        
        <button
          onClick={handleGoHome}
          className="w-full py-4 bg-accent text-foreground rounded-[14px] hover:bg-accent/80 active:scale-[0.98] transition-all"
        >
          <span className="text-[15px]" style={{ fontWeight: 600 }}>
            홈으로 돌아가기
          </span>
        </button>
      </motion.div>
    </div>
  );
}



