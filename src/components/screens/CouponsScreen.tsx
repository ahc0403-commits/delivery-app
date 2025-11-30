import { ChevronLeft, Percent, Clock, Check, Plus, Gift, Tag, Ticket } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { motion } from "motion/react";

type Coupon = {
  id: string;
  title: string;
  titleVi: string;
  discount: string;
  minOrder: number;
  expiryDate: string;
  code: string;
  type: "percent" | "amount" | "delivery";
  color: string;
  isUsed: boolean;
};

export function CouponsScreen() {
  const { goBack, showToast } = useNavigation();
  const [activeTab, setActiveTab] = useState<"available" | "used">("available");
  const [couponCode, setCouponCode] = useState("");

  const coupons: Coupon[] = [
    {
      id: "1",
      title: "첫 주문 50% 할인",
      titleVi: "50% OFF First Order",
      discount: "50%",
      minOrder: 100000,
      expiryDate: "2025-12-31",
      code: "FIRST50",
      type: "percent",
      color: "from-red-500 to-pink-600",
      isUsed: false,
    },
    {
      id: "2",
      title: "배달비 무료",
      titleVi: "Free Delivery",
      discount: "배달비",
      minOrder: 50000,
      expiryDate: "2025-12-15",
      code: "FREEDEL",
      type: "delivery",
      color: "from-blue-500 to-indigo-600",
      isUsed: false,
    },
    {
      id: "3",
      title: "30,000₫ 할인",
      titleVi: "30,000₫ Discount",
      discount: "30,000₫",
      minOrder: 150000,
      expiryDate: "2025-12-20",
      code: "SAVE30K",
      type: "amount",
      color: "from-green-500 to-emerald-600",
      isUsed: false,
    },
    {
      id: "4",
      title: "20% 할인 (사용완료)",
      titleVi: "20% OFF (Used)",
      discount: "20%",
      minOrder: 80000,
      expiryDate: "2025-11-25",
      code: "USED20",
      type: "percent",
      color: "from-gray-400 to-gray-500",
      isUsed: true,
    },
  ];

  const filteredCoupons = coupons.filter(coupon =>
    activeTab === "available" ? !coupon.isUsed : coupon.isUsed
  );

  const handleRegisterCoupon = () => {
    if (!couponCode.trim()) {
      showToast("쿠폰 코드를 입력해주세요", "error");
      return;
    }
    showToast("쿠폰이 등록되었습니다! 🎉", "success");
    setCouponCode("");
  };

  const handleCopyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast("쿠폰 코드가 복사되었습니다! 📋", "success");
  };

  return (
    <div className="h-screen bg-background overflow-y-auto pb-24">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
          쿠폰
        </h1>
        <div className="w-10 h-10" />
      </div>

      {/* Title */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-[24px] mb-2" style={{ fontWeight: 700 }}>
          내 쿠폰함 🎫
        </h2>
        <p className="text-[13px] text-muted-foreground">
          My Coupons • Phiếu giảm giá của tôi
        </p>
      </div>

      {/* Register Coupon */}
      <div className="px-6 pb-4">
        <div className="bg-white rounded-[16px] p-4 border-2 border-dashed border-primary">
          <div className="flex items-center gap-2 mb-3">
            <Plus className="w-5 h-5 text-primary" strokeWidth={2.5} />
            <h3 className="text-[14px] text-primary" style={{ fontWeight: 600 }}>
              쿠폰 코드 등록
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="쿠폰 코드 입력 • Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="flex-1 px-4 py-3 bg-accent border border-border rounded-[10px] text-[14px] outline-none focus:border-primary transition-colors uppercase"
            />
            <button
              onClick={handleRegisterCoupon}
              className="px-5 py-3 bg-primary text-white rounded-[10px] text-[14px] hover:shadow-md transition-all active:scale-95"
              style={{ fontWeight: 600 }}
            >
              등록
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pb-4 sticky top-[72px] bg-background z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("available")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "available"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground hover:bg-white/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            사용 가능 ({coupons.filter(c => !c.isUsed).length})
          </button>
          <button
            onClick={() => setActiveTab("used")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "used"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground hover:bg-white/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            사용 완료 ({coupons.filter(c => c.isUsed).length})
          </button>
        </div>
      </div>

      {/* Coupons List */}
      <div className="px-6 space-y-3">
        {filteredCoupons.map((coupon, index) => (
          <motion.div
            key={coupon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Coupon Card */}
            <div className={`bg-gradient-to-r ${coupon.color} rounded-[16px] p-5 shadow-lg relative overflow-hidden ${
              coupon.isUsed ? "opacity-60" : ""
            }`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
              </div>

              {/* Perforated Edge */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full -ml-2"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full -mr-2"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Top: Discount Badge & Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      {coupon.type === "percent" ? (
                        <Percent className="w-8 h-8 text-white" strokeWidth={2.5} />
                      ) : coupon.type === "delivery" ? (
                        <Gift className="w-8 h-8 text-white" strokeWidth={2.5} />
                      ) : (
                        <Tag className="w-8 h-8 text-white" strokeWidth={2.5} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-white text-[20px] mb-1" style={{ fontWeight: 700 }}>
                        {coupon.discount}
                      </h3>
                      <p className="text-white/90 text-[11px]">
                        {coupon.type === "percent" ? "할인" : coupon.type === "delivery" ? "무료" : "할인"}
                      </p>
                    </div>
                  </div>
                  {coupon.isUsed && (
                    <div className="bg-white/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px]" style={{ fontWeight: 600 }}>
                      사용완료
                    </div>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-white text-[16px] mb-1" style={{ fontWeight: 600 }}>
                  {coupon.title}
                </h4>
                <p className="text-white/80 text-[12px] mb-3">
                  {coupon.titleVi}
                </p>

                {/* Details */}
                <div className="bg-white/20 backdrop-blur-sm rounded-[10px] px-3 py-2 mb-3">
                  <p className="text-white text-[12px]">
                    최소 주문금액: <span style={{ fontWeight: 600 }}>{coupon.minOrder.toLocaleString()}₫</span>
                  </p>
                </div>

                {/* Expiry & Code */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-white/90">
                    <Clock className="w-3 h-3" strokeWidth={2} />
                    <p className="text-[11px]">
                      {coupon.expiryDate}까지
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopyCouponCode(coupon.code)}
                    disabled={coupon.isUsed}
                    className={`px-3 py-1.5 bg-white/90 rounded-[8px] text-[12px] transition-all ${
                      coupon.isUsed
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white active:scale-95"
                    }`}
                    style={{ fontWeight: 600, color: coupon.color.split("-")[1] }}
                  >
                    {coupon.code}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCoupons.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4">
            <Ticket className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="text-[18px] mb-2" style={{ fontWeight: 600 }}>
            {activeTab === "available" ? "사용 가능한 쿠폰이 없습니다" : "사용 내역이 없습니다"}
          </h3>
          <p className="text-[13px] text-muted-foreground text-center">
            쿠폰 코드를 등록해보세요!<br />
            Register a coupon code
          </p>
        </div>
      )}

      {/* Info Box */}
      <div className="px-6 mt-4 mb-6">
        <div className="bg-accent rounded-[12px] p-4">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            🎁 <span style={{ fontWeight: 600 }}>쿠폰 혜택</span><br />
            • 프로모션 쿠폰은 자동으로 등록됩니다<br />
            • 쿠폰은 1회만 사용 가능합니다<br />
            • 쿠폰은 중복 사용할 수 없습니다<br />
            • 유효기간이 지난 쿠폰은 자동 삭제됩니다
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}