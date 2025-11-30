import { ChevronLeft, MapPin, Home, Building, Hash, Lock } from "lucide-react";

export function AddressDetailScreen() {
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <button className="p-1">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[20px] flex-1">주소 등록 / Add Address</h1>
        </div>
        <p className="text-[13px] text-muted-foreground ml-9">배달 주소를 정확히 입력하세요</p>
      </div>

      {/* Map Preview */}
      <div className="mx-5 mt-5 rounded-[16px] overflow-hidden shadow-lg border-2 border-border">
        <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100">
          {/* Simplified Map Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-6 grid-rows-6 h-full">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-gray-400"></div>
              ))}
            </div>
          </div>

          {/* Location Pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 w-16 h-16 bg-primary rounded-full opacity-30 animate-ping"></div>
              <div className="relative w-16 h-16 bg-primary rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-3 right-3 bg-white rounded-[10px] px-3 py-1.5 shadow-md text-[11px] text-gray-700">
            📍 District 1, HCMC
          </div>

          {/* Edit Location Button */}
          <button className="absolute bottom-3 right-3 bg-white rounded-[10px] px-4 py-2 shadow-lg text-[12px] text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
            지도에서 수정 / Edit on Map
          </button>
        </div>
      </div>

      {/* Address Form */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-4">상세 주소 입력 / Address Details</h2>

        {/* Field 1: Address Name */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-[13px] mb-2 text-foreground">
            <Home className="w-4 h-4 text-primary" />
            <span>주소 이름 / Address Name</span>
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="예: 집, 회사 / e.g., Home, Office"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px]"
              defaultValue="Home"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1.5 ml-1">빠른 선택을 위한 별칭</p>
        </div>

        {/* Field 2: Building Name */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-[13px] mb-2 text-foreground">
            <Building className="w-4 h-4 text-primary" />
            <span>건물명 / Building Name</span>
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="예: The Vista / e.g., Vinhomes Central Park"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px]"
              defaultValue="The Vista"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1.5 ml-1">아파트, 빌딩 이름을 정확히 입력</p>
        </div>

        {/* Field 3: Unit Number */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-[13px] mb-2 text-foreground">
            <Hash className="w-4 h-4 text-primary" />
            <span>호수 / Unit Number</span>
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="예: B-1204 / e.g., Tower A, Floor 12, Unit 04"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[14px]"
              defaultValue="B-1204"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1.5 ml-1">동, 층, 호수 모두 포함</p>
        </div>

        {/* Field 4: Gate/Door Code - HIGHLIGHTED */}
        <div className="mb-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-[16px] p-4 border-2 border-primary/40 shadow-md">
          <label className="flex items-center gap-2 text-[13px] mb-3 text-foreground">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <span>출입문 비밀번호 / Gate/Door Code</span>
            <span className="text-red-500">*</span>
            <span className="ml-auto bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">중요 / Important</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="예: #1234* / e.g., *5678#"
              className="w-full px-4 py-4 bg-white rounded-[12px] border-2 border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-[14px]"
            />
          </div>
          <div className="mt-3 bg-white/70 backdrop-blur-sm rounded-[10px] p-3 border border-primary/30">
            <div className="flex items-start gap-2">
              <span className="text-[14px]">🔑</span>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                <strong className="text-primary">Vietnam Delivery Tip:</strong> Most buildings require gate codes for access. This is crucial for successful delivery!<br/>
                <strong className="text-primary">베트남 배달 팁:</strong> 대부분 건물에서 출입 코드가 필요합니다. 정확히 입력해주세요!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Notes (Optional) */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-[13px] mb-2 text-foreground">
            <span>추가 메모 / Additional Notes</span>
            <span className="text-muted-foreground text-[11px]">(Optional)</span>
          </label>
          <textarea
            placeholder="예: 엘리베이터 고장시 연락주세요 / e.g., Call if elevator is broken"
            className="w-full px-4 py-3 bg-white rounded-[12px] border-2 border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[13px] h-20 resize-none"
          />
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="px-5 pb-6">
        <button className="w-full bg-primary text-white py-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3">
          <MapPin className="w-6 h-6" />
          <span className="text-[16px]">주소 저장 / Save Address</span>
        </button>

        {/* Helper Text */}
        <div className="mt-4 bg-blue-50 rounded-[12px] p-3 border border-blue-200">
          <div className="flex items-start gap-2">
            <span className="text-[14px]">💡</span>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              정확한 주소 입력으로 배달 시간을 단축할 수 있습니다!<br/>
              Accurate address saves delivery time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
