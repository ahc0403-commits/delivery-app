import { Clock, CheckCircle, Truck, Timer } from "lucide-react";
import { BottomNavBar } from "../BottomNavBar";

const tabs = ["새주문 / New", "진행중 / In Progress", "완료 / Completed"];

const orders = [
  {
    id: "#DN-1235",
    customer: "응웬 / Nguyen",
    items: "떡볶이, 튀김",
    status: "cooking",
    time: "5분 경과 / 5 mins",
    avatar: "👩‍🦰",
  },
  {
    id: "#DN-1236",
    customer: "박서준 / Park",
    items: "치즈 떡볶이",
    status: "ready",
    time: "준비완료 / Ready",
    avatar: "👨",
  },
  {
    id: "#DN-1237",
    customer: "레 반 / Le Van",
    items: "로제 떡볶이, 튀김",
    status: "delivering",
    time: "배달중 / Delivering",
    avatar: "👨‍🦱",
  },
];

export function ActiveOrdersScreen() {
  return (
    <div className="h-screen overflow-y-auto bg-background">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <h1 className="text-[20px] mb-1">진행중 주문 / Active Orders</h1>
        <p className="text-[13px] text-muted-foreground">실시간 주문 현황 관리</p>
      </div>

      {/* Tabs */}
      <div className="bg-white px-5 py-3 flex gap-2 overflow-x-auto no-scrollbar border-b border-border">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`flex-shrink-0 px-4 py-2 rounded-[12px] text-[13px] transition-colors ${
              idx === 1
                ? "bg-primary text-white shadow-md"
                : "bg-accent text-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Row */}
      <div className="px-5 py-4 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-[12px] p-3 shadow-sm text-center">
          <div className="text-[24px] text-primary mb-1">3</div>
          <div className="text-[11px] text-muted-foreground">진행중 / Active</div>
        </div>
        <div className="bg-white rounded-[12px] p-3 shadow-sm text-center">
          <div className="text-[24px] text-green-600 mb-1">12</div>
          <div className="text-[11px] text-muted-foreground">오늘 완료 / Today</div>
        </div>
        <div className="bg-white rounded-[12px] p-3 shadow-sm text-center">
          <div className="text-[24px] mb-1">18분</div>
          <div className="text-[11px] text-muted-foreground">평균 시간 / Avg</div>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-5 pb-6 space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-[12px] shadow-sm overflow-hidden">
            {/* Order Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[24px]">{order.avatar}</span>
                  <div>
                    <h3 className="text-[15px] mb-1">{order.id}</h3>
                    <p className="text-[12px] text-muted-foreground">{order.customer}</p>
                  </div>
                </div>
                {/* Status Badge */}
                {order.status === "cooking" && (
                  <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                    <Timer className="w-4 h-4" />
                    <span className="text-[12px]">조리중 / Cooking</span>
                  </div>
                )}
                {order.status === "ready" && (
                  <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-[12px]">준비완료 / Ready</span>
                  </div>
                )}
                {order.status === "delivering" && (
                  <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    <span className="text-[12px]">배달중 / Delivering</span>
                  </div>
                )}
              </div>
              <p className="text-[13px] mb-2">{order.items}</p>
              <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{order.time}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-3 bg-accent flex gap-2">
              {order.status === "cooking" && (
                <>
                  <button className="flex-1 py-2 bg-white border border-border rounded-[12px] text-[13px] hover:bg-background transition-colors">
                    📞 고객 전화
                  </button>
                  <button className="flex-1 py-2 bg-primary text-white rounded-[12px] text-[13px] shadow-sm hover:shadow-md transition-shadow">
                    ✅ 준비완료
                  </button>
                </>
              )}
              {order.status === "ready" && (
                <>
                  <button className="flex-1 py-2 bg-white border border-border rounded-[12px] text-[13px] hover:bg-background transition-colors">
                    🛵 배달원 호출
                  </button>
                  <button className="flex-1 py-2 bg-primary text-white rounded-[12px] text-[13px] shadow-sm hover:shadow-md transition-shadow">
                    📦 픽업완료
                  </button>
                </>
              )}
              {order.status === "delivering" && (
                <>
                  <button className="flex-1 py-2 bg-white border border-border rounded-[12px] text-[13px] hover:bg-background transition-colors">
                    📍 위치 추적
                  </button>
                  <button className="flex-1 py-2 bg-white border border-border rounded-[12px] text-[13px] hover:bg-background transition-colors">
                    💬 배달원 채팅
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }\n        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}