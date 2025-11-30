import { ChevronLeft, ChevronRight, Package, Star, MessageSquare, ShoppingBag, XCircle, Clock, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

type Order = {
  id: string;
  storeName: string;
  storeNameVi: string;
  date: string;
  status: "completed" | "cancelled" | "processing";
  items: string[];
  itemCount: number;
  total: number;
  image: string;
};

export function OrderHistoryScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "cancelled">("all");

  const orders: Order[] = [
    {
      id: "ORD-2025-001",
      storeName: "신당 떡볶이",
      storeNameVi: "Sindang Tteokbokki",
      date: "2025-11-29 18:30",
      status: "completed",
      items: ["오리지널 떡볶이", "치즈 떡볶이", "김말이"],
      itemCount: 3,
      total: 455000,
      image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ORD-2025-002",
      storeName: "Korean Fried Chicken",
      storeNameVi: "Korean Fried Chicken",
      date: "2025-11-28 20:15",
      status: "completed",
      items: ["양념치킨", "콜라"],
      itemCount: 2,
      total: 195000,
      image: "https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDE4Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ORD-2025-003",
      storeName: "베트남 쌀국수",
      storeNameVi: "Vietnamese Pho",
      date: "2025-11-27 12:00",
      status: "cancelled",
      items: ["소고기 쌀국수", "월남쌈"],
      itemCount: 2,
      total: 180000,
      image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "ORD-2025-004",
      storeName: "일본 라멘",
      storeNameVi: "Japanese Ramen",
      date: "2025-11-26 19:45",
      status: "completed",
      items: ["돈코츠 라멘", "교자"],
      itemCount: 2,
      total: 250000,
      image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const filteredOrders = orders.filter(order => {
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return {
          text: "배달완료",
          textVi: "Completed",
          color: "bg-green-50 text-green-700",
          icon: Star,
        };
      case "cancelled":
        return {
          text: "취소됨",
          textVi: "Cancelled",
          color: "bg-red-50 text-red-700",
          icon: XCircle,
        };
      case "processing":
        return {
          text: "배달중",
          textVi: "Processing",
          color: "bg-blue-50 text-blue-700",
          icon: Clock,
        };
      default:
        return {
          text: "주문완료",
          textVi: "Ordered",
          color: "bg-gray-50 text-gray-700",
          icon: Package,
        };
    }
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
          주문 내역
        </h1>
        <div className="w-10 h-10" />
      </div>

      {/* Tabs */}
      <div className="bg-white px-5 py-4 border-b border-border sticky top-[72px] z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "all"
                ? "bg-primary text-white shadow-md"
                : "bg-accent text-muted-foreground hover:bg-accent/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            전체 ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "completed"
                ? "bg-primary text-white shadow-md"
                : "bg-accent text-muted-foreground hover:bg-accent/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            완료 ({orders.filter(o => o.status === "completed").length})
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`flex-1 py-2.5 rounded-[10px] text-[13px] transition-all ${
              activeTab === "cancelled"
                ? "bg-primary text-white shadow-md"
                : "bg-accent text-muted-foreground hover:bg-accent/70"
            }`}
            style={{ fontWeight: 600 }}
          >
            취소 ({orders.filter(o => o.status === "cancelled").length})
          </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-5 pt-4 space-y-3">
        {filteredOrders.map((order, index) => {
          const statusBadge = getStatusBadge(order.status);
          const StatusIcon = statusBadge.icon;

          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[16px] p-4 border border-border hover:shadow-md transition-all"
            >
              {/* Order Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[15px]" style={{ fontWeight: 600 }}>
                      {order.storeName}
                    </h3>
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] ${statusBadge.color}`} style={{ fontWeight: 600 }}>
                      <StatusIcon className="w-3 h-3" strokeWidth={2.5} />
                      {statusBadge.text}
                    </div>
                  </div>
                  <p className="text-[12px] text-muted-foreground mb-1">
                    {order.storeNameVi}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {order.date} • {order.id}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
                <ImageWithFallback
                  src={order.image}
                  alt={order.storeName}
                  className="w-16 h-16 rounded-[10px] object-cover"
                />
                <div className="flex-1">
                  <p className="text-[13px] mb-1" style={{ fontWeight: 500 }}>
                    {order.items[0]}
                    {order.itemCount > 1 && (
                      <span className="text-muted-foreground">
                        {" "}외 {order.itemCount - 1}개
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    총 {order.itemCount}개 메뉴
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[16px] text-primary" style={{ fontWeight: 700 }}>
                    {order.total.toLocaleString()}₫
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate("receipt")}
                  className="flex-1 py-2.5 bg-accent rounded-[10px] text-[13px] hover:bg-accent/70 transition-colors active:scale-95 flex items-center justify-center gap-1"
                  style={{ fontWeight: 600 }}
                >
                  영수증 보기
                  <ChevronRight className="w-4 h-4" strokeWidth={2} />
                </button>
                {order.status === "completed" && (
                  <button
                    onClick={() => {
                      showToast("재주문이 장바구니에 담겼습니다! 🛒", "success");
                      navigate("cart");
                    }}
                    className="flex-1 py-2.5 bg-primary text-white rounded-[10px] text-[13px] hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-1"
                    style={{ fontWeight: 600 }}
                  >
                    <RotateCcw className="w-4 h-4" strokeWidth={2} />
                    재주문
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4">
            <Package className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="text-[18px] mb-2" style={{ fontWeight: 600 }}>
            주문 내역이 없습니다
          </h3>
          <p className="text-[13px] text-muted-foreground text-center mb-6">
            맛있는 음식을 주문해보세요!<br />
            No orders found
          </p>
          <button
            onClick={() => navigate("feed")}
            className="px-6 py-3 bg-primary text-white rounded-[12px] shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            <span className="text-[14px]" style={{ fontWeight: 600 }}>
              음식 주문하기 🍽️
            </span>
          </button>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}