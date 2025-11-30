import { ChevronLeft, MapPin, Navigation } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

export function AddressInputScreen() {
  const { goBack } = useNavigation();
  
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={goBack} className="p-1 hover:bg-accent rounded-full transition-all active:scale-95">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-[18px] flex-1">새 주소 추가 / Add New Address</h1>
      </div>

      {/* Map Preview */}
      <div className="mx-5 mt-4 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-[16px] overflow-hidden relative shadow-md">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #ddd 0px, #ddd 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #ddd 0px, #ddd 1px, transparent 1px, transparent 20px)`
          }}></div>
        </div>
        
        {/* Location Pin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-bounce">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <button className="absolute bottom-3 right-3 bg-white px-4 py-2 rounded-[12px] shadow-md text-[12px] text-primary hover:shadow-lg transition-shadow">
          📍 위치 수정 / Adjust Pin
        </button>

        {/* Address Preview */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-[12px] shadow-md max-w-[200px]">
          <p className="text-[11px] text-muted-foreground mb-1">선택된 위치 / Selected</p>
          <p className="text-[12px] truncate">Thao Dien, District 2</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-5 mt-6">
        <h3 className="text-[14px] mb-3 text-muted-foreground">주소 상세 정보 / Address Details</h3>
        
        <div className="space-y-4">
          {/* Address Name */}
          <div>
            <label className="block text-[13px] mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>주소 이름 / Address Name</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g., Home, Office, Mom's House"
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
                defaultValue="Home"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <button className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-[11px]">
                🏠 Home
              </button>
              <button className="px-3 py-1.5 bg-accent text-foreground rounded-full text-[11px]">
                🏢 Office
              </button>
              <button className="px-3 py-1.5 bg-accent text-foreground rounded-full text-[11px]">
                👨‍👩‍👧 Family
              </button>
            </div>
          </div>

          {/* Building Name */}
          <div>
            <label className="block text-[13px] mb-2 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-primary" />
              <span>건물명 / Building Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g., The Vista, Masteri Thao Dien"
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
              defaultValue="The Vista"
            />
          </div>

          {/* Unit Number */}
          <div>
            <label className="block text-[13px] mb-2 flex items-center gap-2">
              <Hash className="w-4 h-4 text-primary" />
              <span>호수 / Unit Number</span>
            </label>
            <input
              type="text"
              placeholder="e.g., B-1204, Floor 12"
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
              defaultValue="B-1204"
            />
          </div>

          {/* Gate/Door Code */}
          <div>
            <label className="block text-[13px] mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span>출입문 비밀번호 / Gate/Door Code</span>
              <span className="text-[10px] text-red-500">* 배달시 필요</span>
            </label>
            <input
              type="text"
              placeholder="e.g., #1234* or Call me"
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px]"
              defaultValue="#1234*"
            />
            <p className="mt-2 text-[11px] text-muted-foreground flex items-start gap-1">
              <span>💡</span>
              <span>배달원이 건물에 들어가기 위해 필요한 정보를 입력해주세요.<br/>
              Important for delivery access</span>
            </p>
          </div>

          {/* Delivery Instructions */}
          <div>
            <label className="block text-[13px] mb-2">
              배달 메모 / Delivery Note (Optional)
            </label>
            <textarea
              placeholder="e.g., Leave at door, Call when arrived"
              className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:border-primary focus:outline-none transition-colors text-[14px] resize-none"
              rows={3}
              defaultValue="문 앞에 놓아주세요 / Leave at the door"
            />
          </div>
        </div>
      </div>

      {/* Set as Default */}
      <div className="mx-5 mt-4 bg-accent rounded-[12px] p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="w-6 h-6 bg-primary rounded-[8px] flex items-center justify-center">
            <span className="text-white text-[16px]">✓</span>
          </div>
          <div className="flex-1">
            <p className="text-[13px]">기본 배달지로 설정</p>
            <p className="text-[11px] text-muted-foreground">Set as default delivery address</p>
          </div>
        </label>
      </div>

      {/* Save Button */}
      <div className="px-5 mt-6 sticky bottom-6">
        <button className="w-full bg-primary text-white py-5 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3">
          <Save className="w-6 h-6" />
          <span className="text-[16px]">주소 저장하기 / Save Address</span>
        </button>
      </div>
    </div>
  );
}