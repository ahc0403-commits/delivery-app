import { ChevronLeft, Plus, Minus, Gift, Star, ShoppingBag, Calendar } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";
import { motion } from "motion/react";

type PointHistory = {
  id: string;
  type: "earned" | "used";
  amount: number;
  reason: string;
  reasonVi: string;
  date: string;
  orderId?: string;
};

export function PointsHistoryScreen() {
  const { goBack } = useNavigation();
  const [activeTab, setActiveTab] = useState<"all" | "earned" | "used">("all");

  const currentPoints = 850;

  const pointHistory: PointHistory[] = [
    {
      id: "1",
      type: "earned",
      amount: 45,
      reason: "주문 적립 (신당 떡볶이)",
      reasonVi: "Order reward (Sindang Tteokbokki)",
      date: "2025-11-29 18:30",
      orderId: "ORD-2025-001",
    },
    {
      id: "2",
      type: "used",
      amount: -100,
      reason: "포인트 사용 (Korean Fried Chicken)",
      reasonVi: "Points used (Korean Fried Chicken)",
      date: "2025-11-28 20:15",
      orderId: "ORD-2025-002",
    },
    {
      id: "3",
      type: "earned",
      amount: 25,
      reason: "리뷰 작성 보너스",
      reasonVi: "Review bonus",
      date: "2025-11-28 21:00",
    },
    {
      id: "4",
      type: "earned",
      amount: 200,
      reason: "첫 주문 환영 포인트",
      reasonVi: "Welcome bonus",
      date: "2025-11-25 10:00",
    },
    {
      id: "5",
      type: "earned",
      amount: 50,
      reason: "친구 초대 보너스",
      reasonVi: "Referral bonus",
      date: "2025-11-24 14:30",
    },
    {
      id: "6",
      type: "used",
      amount: -50,
      reason: "포인트 사용 (일본 라멘)",
      reasonVi: "Points used (Japanese Ramen)",
      date: "2025-11-23 19:00",
    },
    {
      id: "7",
      type: "earned",
      amount: 30,
      reason: "주문 적립 (베트남 쌀국수)",
      reasonVi: "Order reward (Vietnamese Pho)",
      date: "2025-11-22 12:00",
    },
  ];

  const filteredHistory = pointHistory.filter(item => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  const totalEarned = pointHistory
    .filter(item => item.type === "earned")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalUsed = Math.abs(
    pointHistory
      .filter(item => item.type === "used")
      .reduce((sum, item) => sum + item.amount, 0)
  );

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
          포인트 내역
        </h1>
        <div className="w-10 h-10" />
      </div>

      {/* Current Points Card */}
      <div className="px-5 pt-5 pb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-[20px] p-6 shadow-xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" strokeWidth={2} />
              <p className="text-white/90 text-[13px]" style={{ fontWeight: 500 }}>
                보유 포인트 • Available Points
              </p>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <h2 className="text-white text-[42px]" style={{ fontWeight: 700 }}>
                {currentPoints.toLocaleString()}
              </h2>
              <span className="text-white/90 text-[20px]" style={{ fontWeight: 600 }}>
                P
              </span>
            </div>
            <p className="text-white/80 text-[12px]">
              1 포인트 = 1₫ • 1 Point = 1₫
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-5 pb-4 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[16px] p-4 border border-border"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
              <Plus className="w-4 h-4 text-green-600" strokeWidth={2.5} />
            </div>
            <p className="text-[12px] text-muted-foreground">적립</p>
          </div>
          <p className="text-[20px] text-green-600" style={{ fontWeight: 700 }}>
            +{totalEarned.toLocaleString()}P
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[16px] p-4 border border-border"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <Minus className="w-4 h-4 text-red-600" strokeWidth={2.5} />
            </div>
            <p className="text-[12px] text-muted-foreground">사용</p>
          </div>
          <p className="text-[20px] text-red-600" style={{ fontWeight: 700 }}>
            -{totalUsed.toLocaleString()}P
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="px-5 pb-4 sticky top-[72px] bg-background z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "all"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground hover:bg-white/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            전체
          </button>
          <button
            onClick={() => setActiveTab("earned")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "earned"
                ? "bg-primary text-white shadow-md"
                : "bg-white text-muted-foreground hover:bg-white/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            적립
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
            사용
          </button>
        </div>
      </div>

      {/* History List */}
      <div className="px-5 space-y-2">
        {filteredHistory.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-[16px] p-4 border border-border"
          >
            <div className="flex items-start justify-between">
              {/* Left: Icon & Info */}
              <div className="flex items-start gap-3 flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.type === "earned" ? "bg-green-50" : "bg-red-50"
                }`}>
                  {item.type === "earned" ? (
                    <Gift className="w-5 h-5 text-green-600" strokeWidth={2} />
                  ) : (
                    <ShoppingBag className="w-5 h-5 text-red-600" strokeWidth={2} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] mb-0.5" style={{ fontWeight: 600 }}>
                    {item.reason}
                  </h3>
                  <p className="text-[12px] text-muted-foreground mb-1">
                    {item.reasonVi}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Calendar className="w-3 h-3" strokeWidth={2} />
                    {item.date}
                  </div>
                  {item.orderId && (
                    <p className="text-[10px] text-muted-foreground mt-1">
                      주문번호: {item.orderId}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Amount */}
              <div className="text-right flex-shrink-0 ml-3">
                <p className={`text-[18px] ${
                  item.type === "earned" ? "text-green-600" : "text-red-600"
                }`} style={{ fontWeight: 700 }}>
                  {item.amount > 0 ? "+" : ""}{item.amount.toLocaleString()}P
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Box */}
      <div className="px-5 mt-4 mb-6">
        <div className="bg-accent rounded-[12px] p-4">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            💡 <span style={{ fontWeight: 600 }}>포인트 적립 안내</span><br />
            • 주문 금액의 1% 자동 적립<br />
            • 리뷰 작성 시 25P 추가 적립<br />
            • 친구 초대 시 50P 보너스<br />
            • 포인트는 1년간 유효합니다
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}