import { ShoppingCart, ChevronRight } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useNavigation } from "../App";
import { motion, AnimatePresence } from "motion/react";

export function FloatingCartButton() {
  const { getTotalItems, getTotalPrice } = useCart();
  const { navigate } = useNavigation();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={() => navigate("cart")}
        className="fixed bottom-24 left-5 right-5 z-50"
      >
        {/* Main Cart Banner - 배달의민족 스타일 */}
        <div className="bg-primary text-white rounded-[16px] shadow-2xl overflow-hidden active:scale-[0.98] transition-transform">
          {/* Gradient Overlay for Premium Feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#00563A] opacity-90" />
          
          <div className="relative px-5 py-4 flex items-center justify-between">
            {/* Left: Cart Icon + Count */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6" strokeWidth={2.5} />
                </div>
                {/* Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF4E50] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[11px]" style={{ fontWeight: 700 }}>
                    {totalItems}
                  </span>
                </div>
              </div>

              <div className="text-left">
                <p className="text-[13px] text-white/90 mb-0.5">
                  장바구니 • Cart
                </p>
                <p className="text-[16px]" style={{ fontWeight: 700 }}>
                  {totalItems}개 담김
                </p>
              </div>
            </div>

            {/* Right: Price + Arrow */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[11px] text-white/80 mb-0.5">
                  Total
                </p>
                <p className="text-[18px]" style={{ fontWeight: 700 }}>
                  {totalPrice.toLocaleString()}₫
                </p>
              </div>
              
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Bottom shine effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Pulse Animation Ring */}
        <motion.div
          className="absolute inset-0 rounded-[16px] border-2 border-primary"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>
    </AnimatePresence>
  );
}
