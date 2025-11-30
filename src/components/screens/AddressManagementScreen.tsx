import { ChevronLeft, Plus, MapPin, Home, Briefcase, Star, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { motion, AnimatePresence } from "motion/react";

type Address = {
  id: string;
  label: string;
  labelVi: string;
  icon: any;
  color: string;
  address: string;
  addressVi: string;
  detail: string;
  isDefault: boolean;
};

export function AddressManagementScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      label: "우리집",
      labelVi: "Home",
      icon: Home,
      color: "bg-blue-500",
      address: "서울시 강남구 테헤란로 123",
      addressVi: "123 Nguyen Hue Street, District 1",
      detail: "101동 1001호",
      isDefault: true,
    },
    {
      id: "2",
      label: "회사",
      labelVi: "Office",
      icon: Briefcase,
      color: "bg-orange-500",
      address: "서울시 강남구 역삼동 456",
      addressVi: "456 Le Loi Boulevard, District 3",
      detail: "5층 개발팀",
      isDefault: false,
    },
  ]);

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    showToast("기본 주소로 설정되었습니다! 📍", "success");
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    showToast("주소가 삭제되었습니다", "success");
  };

  return (
    <div className="h-screen bg-background overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
          주소 관리
        </h1>
        <div className="w-10 h-10" />
      </div>

      {/* Title */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-[24px] mb-2" style={{ fontWeight: 700 }}>
          배달받을 주소
        </h2>
        <p className="text-[13px] text-muted-foreground">
          Manage Your Addresses • Quản lý địa chỉ
        </p>
      </div>

      {/* Address List */}
      <div className="px-6 space-y-3">
        <AnimatePresence mode="popLayout">
          {addresses.map((address, index) => {
            const Icon = address.icon;
            return (
              <motion.div
                key={address.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[16px] p-4 border-2 border-border hover:border-primary/30 transition-all relative overflow-hidden"
              >
                {/* Default Badge */}
                {address.isDefault && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-[12px] text-[11px] flex items-center gap-1" style={{ fontWeight: 600 }}>
                    <Star className="w-3 h-3 fill-white" strokeWidth={2} />
                    기본주소
                  </div>
                )}

                <div className="flex items-start gap-4 mb-3 mt-2">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${address.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Address Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[16px]" style={{ fontWeight: 600 }}>
                        {address.label}
                      </h3>
                      <span className="text-[12px] text-muted-foreground">
                        {address.labelVi}
                      </span>
                    </div>
                    <p className="text-[14px] text-foreground mb-1">
                      {address.address}
                    </p>
                    <p className="text-[12px] text-muted-foreground mb-1">
                      {address.addressVi}
                    </p>
                    <p className="text-[13px] text-primary" style={{ fontWeight: 500 }}>
                      {address.detail}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 mt-4">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="flex-1 py-2.5 bg-accent text-primary rounded-[10px] text-[13px] hover:bg-primary/10 transition-colors active:scale-95"
                      style={{ fontWeight: 600 }}
                    >
                      기본주소로 설정
                    </button>
                  )}
                  <button
                    onClick={() => navigate("addressdetail")}
                    className="flex-1 py-2.5 bg-accent rounded-[10px] text-[13px] hover:bg-accent/70 transition-colors active:scale-95 flex items-center justify-center gap-1"
                    style={{ fontWeight: 600 }}
                  >
                    <Edit2 className="w-4 h-4" strokeWidth={2} />
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="w-10 h-10 bg-red-50 text-red-600 rounded-[10px] hover:bg-red-100 transition-colors active:scale-95 flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Add New Address Button */}
      <div className="px-6 mt-4">
        <button
          onClick={() => navigate("addressdetail")}
          className="w-full py-4 bg-white border-2 border-dashed border-primary rounded-[16px] text-primary hover:bg-primary/5 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" strokeWidth={2.5} />
          <span className="text-[15px]" style={{ fontWeight: 600 }}>
            새 주소 추가하기 • Add New Address
          </span>
        </button>
      </div>

      {/* Info Box */}
      <div className="px-6 mt-6">
        <div className="bg-accent rounded-[12px] p-4">
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            📍 <span style={{ fontWeight: 600 }}>정확한 주소를 입력해주세요</span><br />
            배달 기사님이 쉽게 찾을 수 있도록 상세한 주소와 건물명을 입력해주세요.
          </p>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}