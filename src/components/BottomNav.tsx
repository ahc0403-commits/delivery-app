import { Home, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

export function BottomNav() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: Home, labelKo: "홈", labelVi: "Trang chủ" },
    { id: "search", icon: Search, labelKo: "검색", labelVi: "Tìm kiếm" },
    { id: "orders", icon: ShoppingBag, labelKo: "주문", labelVi: "Đơn hàng" },
    { id: "profile", icon: User, labelKo: "내정보", labelVi: "Cá nhân" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-[12px] transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "fill-primary/10" : ""}`} />
              <span className="text-[10px]">{item.labelKo}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
