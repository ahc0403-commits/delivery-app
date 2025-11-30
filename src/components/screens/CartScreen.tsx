import { Minus, Plus, Trash2, ShoppingBag, ChevronLeft, AlertCircle } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import { useNavigation } from "../../App";
import { useCart } from "../../contexts/CartContext";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BottomNavBar } from "../BottomNavBar";
import { motion, AnimatePresence } from "motion/react";
import { analytics, EVENTS } from "../../lib/analytics";

export function CartScreen() {
  const { goBack, navigate } = useNavigation();
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const abandonmentTimer = useRef<NodeJS.Timeout | null>(null);
  const lastItemCount = useRef(items.length);

  // Track screen view
  useEffect(() => {
    analytics.trackScreen("cart", "Cart Screen");
    analytics.track(EVENTS.CART_VIEW, {
      item_count: items.length,
      cart_value: getTotalPrice(),
    });
  }, []);

  // Track cart abandonment (5 min inactivity with items)
  useEffect(() => {
    if (items.length === 0) {
      if (abandonmentTimer.current) {
        clearTimeout(abandonmentTimer.current);
        abandonmentTimer.current = null;
      }
      return;
    }

    // Reset timer on any cart change
    if (abandonmentTimer.current) {
      clearTimeout(abandonmentTimer.current);
    }

    abandonmentTimer.current = setTimeout(() => {
      analytics.track(EVENTS.CART_ABANDON, {
        item_count: items.length,
        cart_value: getTotalPrice(),
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      });
    }, 5 * 60 * 1000); // 5 minutes

    return () => {
      if (abandonmentTimer.current) {
        clearTimeout(abandonmentTimer.current);
      }
    };
  }, [items, getTotalPrice]);

  // Track quantity changes
  const handleQuantityChange = useCallback((id: string, newQuantity: number, item: any) => {
    analytics.track(EVENTS.CART_ITEM_QUANTITY, {
      item_id: id,
      item_name: item.name,
      old_quantity: item.quantity,
      new_quantity: newQuantity,
      cart_value: getTotalPrice(),
    });
    updateQuantity(id, newQuantity);
  }, [updateQuantity, getTotalPrice]);

  // Track item removal
  const handleRemoveItem = useCallback((id: string, item: any) => {
    analytics.trackCartRemove(id, item.name);
    removeItem(id);
  }, [removeItem]);

  // Track checkout start
  const handleCheckout = useCallback(() => {
    analytics.track(EVENTS.CHECKOUT_START, {
      item_count: items.length,
      cart_value: getTotalPrice(),
      store_id: items[0]?.storeId,
      store_name: items[0]?.storeName,
    });
    navigate("payment");
  }, [items, getTotalPrice, navigate]);

  const deliveryFee = 0; // 무료배달
  const minOrder = 50000; // 최소 주문금액
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;
  const meetsMinOrder = subtotal >= minOrder;

  if (items.length === 0) {
    return (
      <div className="h-screen bg-white flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10">
          <button
            onClick={goBack}
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
            장바구니 • Cart
          </h1>
          <div className="w-10 h-10" />
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
          <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <h2 className="text-[22px] mb-2" style={{ fontWeight: 700 }}>
            장바구니가 비었어요
          </h2>
          <p className="text-[14px] text-muted-foreground text-center mb-8">
            맛있는 음식을 담아보세요!<br />
            Your cart is empty. Start adding items!
          </p>
          <button
            onClick={() => navigate("home")}
            className="px-8 py-4 bg-primary text-white rounded-[12px] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
          >
            <span className="text-[15px]" style={{ fontWeight: 600 }}>
              메뉴 둘러보기 🍽️
            </span>
          </button>
        </div>

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </div>
    );
  }

  return (
    <div className="h-screen bg-background overflow-y-auto pb-32">
      {/* Sticky Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
          장바구니 • Cart
        </h1>
        <button
          onClick={clearCart}
          className="text-[13px] text-muted-foreground hover:text-destructive transition-colors"
          style={{ fontWeight: 500 }}
        >
          전체삭제
        </button>
      </div>

      {/* Store Info - Group by Store */}
      <div className="px-5 pt-4 pb-2">
        <div className="bg-white rounded-[16px] p-4 border border-border/50">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>
                {items[0]?.storeName || "가게 이름"}
              </h3>
              <p className="text-[12px] text-muted-foreground">
                {items.length}개 메뉴 • {items.reduce((sum, item) => sum + item.quantity, 0)}개 아이템
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="px-5 py-4">
        <div className="bg-white rounded-[16px] overflow-hidden border border-border/50">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.2 }}
                className={`${index !== 0 ? "border-t border-border/50" : ""}`}
              >
                <div className="p-4 flex gap-4">
                  {/* Item Image */}
                  <div className="flex-shrink-0">
                    {item.image ? (
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-[12px] object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-[12px] bg-accent flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 min-w-0">
                    {/* Name & Delete Button */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-[15px] truncate" style={{ fontWeight: 600 }}>
                        {item.name}
                      </h3>
                      <button
                        onClick={() => handleRemoveItem(item.id, item)}
                        className="flex-shrink-0 w-6 h-6 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Subtitle */}
                    {item.nameVi && (
                      <p className="text-[12px] text-muted-foreground mb-2 truncate">
                        {item.nameVi}
                      </p>
                    )}

                    {/* Price & Quantity Controls */}
                    <div className="flex items-center justify-between gap-3 mt-auto">
                      {/* Price */}
                      <p className="text-[15px] text-primary" style={{ fontWeight: 600 }}>
                        {(item.price * item.quantity).toLocaleString()}₫
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-accent rounded-[10px] p-1">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1, item)}
                          className="w-7 h-7 rounded-[8px] bg-white hover:bg-gray-100 flex items-center justify-center transition-colors active:scale-95"
                        >
                          <Minus className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                        <span className="text-[14px] w-8 text-center" style={{ fontWeight: 600 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1, item)}
                          className="w-7 h-7 rounded-[8px] bg-primary text-white hover:bg-primary/90 flex items-center justify-center transition-colors active:scale-95"
                        >
                          <Plus className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Min Order Warning */}
      {!meetsMinOrder && (
        <div className="px-5 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-50 border border-amber-200 rounded-[12px] p-4 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <p className="text-[13px] text-amber-900 mb-1" style={{ fontWeight: 600 }}>
                최소 주문금액 미달
              </p>
              <p className="text-[12px] text-amber-700">
                {(minOrder - subtotal).toLocaleString()}₫ 더 주문해주세요!
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Price Summary */}
      <div className="px-5 pb-4">
        <div className="bg-white rounded-[16px] p-5 border border-border/50 space-y-3">
          <h3 className="text-[15px] mb-3" style={{ fontWeight: 600 }}>
            결제 상세 • Payment Details
          </h3>

          {/* Subtotal */}
          <div className="flex items-center justify-between text-[14px]">
            <span className="text-muted-foreground">상품 금액</span>
            <span style={{ fontWeight: 500 }}>{subtotal.toLocaleString()}₫</span>
          </div>

          {/* Delivery Fee */}
          <div className="flex items-center justify-between text-[14px]">
            <span className="text-muted-foreground">배달비</span>
            <span className="text-primary" style={{ fontWeight: 600 }}>
              {deliveryFee === 0 ? "무료배달 🎉" : `${deliveryFee.toLocaleString()}₫`}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-[16px]" style={{ fontWeight: 600 }}>
                총 결제금액
              </span>
              <span className="text-[20px] text-primary" style={{ fontWeight: 700 }}>
                {total.toLocaleString()}₫
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Total Amount • Tổng tiền thanh toán
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-border shadow-xl z-40 px-5 py-4">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={() => meetsMinOrder ? handleCheckout() : null}
            disabled={!meetsMinOrder}
            className={`
              w-full py-4 rounded-[12px] flex items-center justify-center gap-2 shadow-lg transition-all
              ${meetsMinOrder
                ? "bg-primary text-white hover:shadow-xl active:scale-[0.98]"
                : "bg-accent text-muted-foreground cursor-not-allowed"
              }
            `}
          >
            <span className="text-[16px]" style={{ fontWeight: 700 }}>
              {meetsMinOrder ? `${total.toLocaleString()}₫ 결제하기` : "최소 주문금액 미달"}
            </span>
          </button>
          {meetsMinOrder && (
            <p className="text-[11px] text-center text-muted-foreground mt-2">
              Order now • Đặt hàng ngay
            </p>
          )}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}
