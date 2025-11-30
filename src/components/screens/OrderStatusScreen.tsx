import { ChevronLeft, Check, Clock, Truck, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const orderSteps = [
  {
    id: 1,
    name: "주문완료",
    nameVi: "Placed",
    icon: Check,
    status: "completed",
    time: "14:23",
  },
  {
    id: 2,
    name: "조리중",
    nameVi: "Preparing",
    icon: Clock,
    status: "active",
    time: "14:35",
  },
  {
    id: 3,
    name: "배달중",
    nameVi: "Delivery",
    icon: Truck,
    status: "pending",
    time: "",
  },
  {
    id: 4,
    name: "배달완료",
    nameVi: "Delivered",
    icon: Home,
    status: "pending",
    time: "",
  },
];

const liveUpdates = [
  {
    time: "14:35",
    message: "지금 맛있게 만들고 있어요 🍳",
    messageVi: "Đang chuẩn bị món ăn của bạn",
  },
  {
    time: "14:30",
    message: "매장에서 주문을 확인했어요 ✅",
    messageVi: "Nhà hàng đã xác nhận đơn",
  },
  {
    time: "14:23",
    message: "주문이 들어갔어요!",
    messageVi: "Đơn hàng đã được đặt",
  },
];

export function OrderStatusScreen() {
  const { goBack, navigate } = useNavigation();
  
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button onClick={goBack} className="p-1 hover:bg-accent rounded-full transition-all active:scale-95">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[18px] flex-1">내 떡볶이가 어디쯤 왔을까요? 🚚</h1>
      </div>

      {/* Order Number */}
      <div className="mx-5 mt-4 bg-gradient-to-r from-primary to-[#004D32] text-white rounded-[12px] p-5">
        <p className="text-[12px] text-white/80 mb-1">주문번호</p>
        <h2 className="text-[24px] tracking-wider">#DN-2025-1129</h2>
        <p className="text-[12px] text-white/80 mt-2">신당 떡볶이</p>
      </div>

      {/* Large Cooking Illustration */}
      <div className="mx-5 mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[16px] p-8 flex flex-col items-center justify-center">
        <div className="text-[80px] mb-4 animate-bounce">🍲</div>
        <h3 className="text-[18px] mb-2 text-center">정성껏 만들고 있어요!</h3>
        <p className="text-[14px] text-muted-foreground text-center">곧 맛있게 드실 수 있어요 ☘️</p>
      </div>

      {/* Progress Timeline */}
      <div className="mx-5 mt-8">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
          <div className="absolute left-6 top-0 h-[50%] w-0.5 bg-primary"></div>

          <div className="space-y-6">
            {orderSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative flex items-start gap-4">
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                      step.status === "completed"
                        ? "bg-green-500"
                        : step.status === "active"
                        ? "bg-primary animate-pulse"
                        : "bg-muted"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-[15px] mb-1">{step.name}</h3>
                    <p className="text-[12px] text-muted-foreground mb-1">{step.nameVi}</p>
                    {step.time && (
                      <p className="text-[11px] text-muted-foreground">{step.time}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Live Updates */}
      <div className="mx-5 mt-8">
        <h3 className="text-[16px] mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          실시간 업데이트 / Live Updates
        </h3>
        <div className="bg-white rounded-[12px] shadow-sm divide-y divide-border">
          {liveUpdates.map((update, idx) => (
            <div key={idx} className="p-4 flex gap-3">
              <div className="text-[11px] text-muted-foreground w-12 flex-shrink-0">
                {update.time}
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1">{update.message}</p>
                <p className="text-[12px] text-muted-foreground">{update.messageVi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estimated Time */}
      <div className="mx-5 mt-6 bg-white rounded-[12px] shadow-sm p-4 flex items-center justify-between">
        <div>
          <p className="text-[12px] text-muted-foreground mb-1">예상 배달 시간 / Estimated Delivery</p>
          <p className="text-[20px] text-primary">15:10 - 15:20</p>
        </div>
        <div className="text-[40px]">⏰</div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}