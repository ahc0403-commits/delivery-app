import { Plus, Edit, Trash2, Camera } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";
import { BottomNavBar } from "../BottomNavBar";

const menuItems = [
  {
    id: 1,
    name: "오리지널 떡볶이",
    nameVi: "Original Tteokbokki",
    price: "85,000₫",
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    // 추천 알고리즘용 속성
    spiceLevel: "medium", // love, medium, mild, no
    category: "snacks", // korean, chicken, pizza, chinese, japanese, vietnamese, dessert, snacks
    recommendedTime: ["lunch", "dinner"], // breakfast, lunch, afternoon, dinner, night
    priceRange: "budget", // budget, standard, premium, luxury
  },
  {
    id: 2,
    name: "치즈 떡볶이",
    nameVi: "Cheese Tteokbokki",
    price: "95,000₫",
    image: "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpfGVufDF8fHx8MTc2NDQxMzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    spiceLevel: "mild",
    category: "snacks",
    recommendedTime: ["lunch", "afternoon", "dinner"],
    priceRange: "budget",
  },
  {
    id: 3,
    name: "로제 떡볶이",
    nameVi: "Rosé Tteokbokki",
    price: "105,000₫",
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: false,
    spiceLevel: "no",
    category: "snacks",
    recommendedTime: ["dinner"],
    priceRange: "standard",
  },
  {
    id: 4,
    name: "튀김 세트",
    nameVi: "Fried Set",
    price: "65,000₫",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDU1MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
    spiceLevel: "no",
    category: "snacks",
    recommendedTime: ["afternoon", "dinner", "night"],
    priceRange: "budget",
  },
];

// 매운맛 레벨 표시 컴포넌트
const spiceLevelConfig = {
  love: { label: "아주 매움", emoji: "🌶️🌶️🌶️", color: "text-red-600 bg-red-50" },
  medium: { label: "중간 매움", emoji: "🌶️🌶️", color: "text-orange-600 bg-orange-50" },
  mild: { label: "약간 매움", emoji: "🌶️", color: "text-yellow-600 bg-yellow-50" },
  no: { label: "안매움", emoji: "🥛", color: "text-blue-600 bg-blue-50" },
};

export function MenuManagementScreen() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setShowEditModal(true);
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-white px-5 py-4 shadow-sm">
          <h1 className="text-[20px] mb-1">메뉴 관리 / Menu Management</h1>
          <p className="text-[13px] text-muted-foreground">재고 및 메뉴 편집</p>
        </div>

        {/* Info Banner */}
        <div className="mx-5 mt-4 bg-gradient-to-r from-blue-50 to-primary/5 rounded-[12px] p-4 border border-primary/20">
          <p className="text-[12px] text-primary mb-1" style={{ fontWeight: 600 }}>
            💡 고객 맞춤 추천 알고리즘
          </p>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            각 메뉴의 매운 정도, 카테고리, 추천 시간대, 가격대를 설정하면<br />
            고객의 취향에 딱 맞는 메뉴를 자동으로 추천해드립니다!
          </p>
        </div>

        {/* Stats */}
        <div className="px-5 py-4 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[12px] p-4 shadow-sm">
            <div className="text-[24px] text-primary mb-1">12</div>
            <div className="text-[12px] text-muted-foreground">총 메뉴 / Total Items</div>
          </div>
          <div className="bg-white rounded-[12px] p-4 shadow-sm">
            <div className="text-[24px] text-red-500 mb-1">1</div>
            <div className="text-[12px] text-muted-foreground">품절 / Sold Out</div>
          </div>
        </div>

        {/* Menu List */}
        <div className="px-5 space-y-3 pb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[16px]">메뉴 목록 / Menu Items</h2>
            <button className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {menuItems.map((item) => {
            const spiceConfig = spiceLevelConfig[item.spiceLevel as keyof typeof spiceLevelConfig];
            
            return (
              <div
                key={item.id}
                className={`bg-white rounded-[12px] shadow-sm overflow-hidden ${
                  !item.inStock ? "opacity-60" : ""
                }`}
              >
                <div className="flex gap-3 p-3">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-[12px] object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] mb-1 truncate">{item.name}</h3>
                    <p className="text-[12px] text-muted-foreground mb-2 truncate">
                      {item.nameVi}
                    </p>
                    <p className="text-primary text-[14px] mb-2">{item.price}</p>
                    
                    {/* 추천 알고리즘 태그 */}
                    <div className="flex flex-wrap gap-1 mb-1">
                      <span className={`text-[9px] px-2 py-0.5 rounded-full ${spiceConfig.color}`}>
                        {spiceConfig.emoji} {spiceConfig.label}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-600">
                        {item.recommendedTime.length}개 시간대
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-50 text-green-600">
                        {item.priceRange === "budget" ? "가성비" : item.priceRange === "standard" ? "적정가" : item.priceRange === "premium" ? "프리미엄" : "럭셔리"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    {/* Stock Toggle */}
                    <button
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        item.inStock ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-all ${
                          item.inStock ? "right-0.5" : "left-0.5"
                        }`}
                      ></div>
                    </button>
                    <div className="text-[10px] text-center">
                      {item.inStock ? (
                        <span className="text-green-600">재고있음 / In Stock</span>
                      ) : (
                        <span className="text-red-600">품절 / Sold Out</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-border flex">
                  <button 
                    onClick={() => handleEdit(item)}
                    className="flex-1 py-3 flex items-center justify-center gap-2 hover:bg-accent transition-colors border-r border-border"
                  >
                    <Edit className="w-4 h-4 text-primary" />
                    <span className="text-[13px]">편집 / Edit</span>
                  </button>
                  <button className="flex-1 py-3 flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span className="text-[13px]">삭제 / Delete</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Add Button */}
        <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow z-40">
          <Plus className="w-7 h-7" />
        </button>

        {/* Edit Modal */}
        {showEditModal && editingItem && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end">
            <div className="max-w-[430px] w-full mx-auto bg-white rounded-t-[24px] shadow-2xl animate-slide-up">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary to-[#004D32] text-white px-5 py-6 rounded-t-[24px]">
                <h2 className="text-[20px] mb-1">메뉴 정보 편집</h2>
                <p className="text-[13px] text-white/90">Edit Menu Information</p>
              </div>

              {/* Modal Content */}
              <div className="px-5 py-6 max-h-[70vh] overflow-y-auto">
                {/* 메뉴 사진 변경 */}
                <div className="mb-6">
                  <label className="block text-[13px] text-muted-foreground mb-3">
                    📸 메뉴 사진 / Menu Photo
                  </label>
                  <div className="relative bg-secondary rounded-[16px] overflow-hidden">
                    <ImageWithFallback
                      src={editingItem.image}
                      alt={editingItem.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <button className="bg-white text-foreground px-5 py-3 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2">
                        <Camera className="w-5 h-5 text-primary" />
                        <span className="text-[14px]" style={{ fontWeight: 600 }}>
                          사진 변경 / Change Photo
                        </span>
                      </button>
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => {
                          // TODO: Handle image upload
                          const file = e.target.files?.[0];
                          if (file) {
                            console.log("Selected file:", file);
                            // 실제 구현에서는 이미지를 업로드하고 URL을 받아옴
                          }
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2 text-center">
                    사진을 클릭하여 새로운 이미지로 변경하세요
                  </p>
                </div>

                {/* 메뉴 이름 */}
                <div className="mb-6">
                  <label className="block text-[13px] text-muted-foreground mb-2">
                    메뉴 이름 / Menu Name
                  </label>
                  <input
                    type="text"
                    defaultValue={editingItem.name}
                    className="w-full px-4 py-3 bg-secondary rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* 매운 정도 */}
                <div className="mb-6">
                  <label className="block text-[13px] text-muted-foreground mb-3">
                    🌶️ 매운 정도 / Spice Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(spiceLevelConfig).map(([key, config]) => (
                      <button
                        key={key}
                        className={`p-3 rounded-[12px] border-2 transition-all ${
                          editingItem.spiceLevel === key
                            ? "border-primary bg-primary/5"
                            : "border-border bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="text-[18px] mb-1">{config.emoji}</div>
                        <div className="text-[11px]">{config.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 카테고리 */}
                <div className="mb-6">
                  <label className="block text-[13px] text-muted-foreground mb-3">
                    🍱 카테고리 / Category
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "korean", icon: "🍱", label: "한식" },
                      { id: "chicken", icon: "🍗", label: "치킨" },
                      { id: "pizza", icon: "🍕", label: "피자/양식" },
                      { id: "chinese", icon: "🥡", label: "중식" },
                      { id: "japanese", icon: "🍣", label: "일식" },
                      { id: "vietnamese", icon: "🍜", label: "베트남" },
                      { id: "dessert", icon: "🍰", label: "디저트" },
                      { id: "snacks", icon: "🍿", label: "분식" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        className={`p-3 rounded-[12px] border-2 transition-all ${
                          editingItem.category === cat.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="text-[18px] mb-1">{cat.icon}</div>
                        <div className="text-[11px]">{cat.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 추천 시간대 */}
                <div className="mb-6">
                  <label className="block text-[13px] text-muted-foreground mb-3">
                    ⏰ 추천 시간대 / Recommended Time (복수 선택 가능)
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: "breakfast", icon: "🌅", label: "아침 (6-10시)" },
                      { id: "lunch", icon: "☀️", label: "점심 (11-14시)" },
                      { id: "afternoon", icon: "🌤️", label: "오후 (15-17시)" },
                      { id: "dinner", icon: "🌆", label: "저녁 (18-21시)" },
                      { id: "night", icon: "🌙", label: "야식 (22시 이후)" },
                    ].map((time) => (
                      <button
                        key={time.id}
                        className={`w-full p-3 rounded-[12px] border-2 transition-all flex items-center gap-3 ${
                          editingItem.recommendedTime.includes(time.id)
                            ? "border-primary bg-primary/5"
                            : "border-border bg-white hover:border-primary/30"
                        }`}
                      >
                        <span className="text-[20px]">{time.icon}</span>
                        <span className="text-[13px]">{time.label}</span>
                        {editingItem.recommendedTime.includes(time.id) && (
                          <div className="ml-auto w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 가격대 */}
                <div className="mb-6">
                  <label className="block text-[13px] text-muted-foreground mb-3">
                    💰 가격대 / Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "budget", icon: "💰", label: "가성비", sub: "50K 이하" },
                      { id: "standard", icon: "💵", label: "적정가", sub: "50-100K" },
                      { id: "premium", icon: "💎", label: "프리미엄", sub: "100-200K" },
                      { id: "luxury", icon: "👑", label: "럭셔리", sub: "200K 이상" },
                    ].map((price) => (
                      <button
                        key={price.id}
                        className={`p-3 rounded-[12px] border-2 transition-all ${
                          editingItem.priceRange === price.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="text-[18px] mb-1">{price.icon}</div>
                        <div className="text-[11px] mb-0.5">{price.label}</div>
                        <div className="text-[9px] text-muted-foreground">{price.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="px-5 py-4 border-t border-border bg-white space-y-2">
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    // TODO: Save changes
                  }}
                  className="w-full py-3 bg-primary text-white rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span className="text-[15px]" style={{ fontWeight: 600 }}>
                    저장하기 / Save
                  </span>
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="w-full py-3 bg-white text-foreground rounded-[12px] border border-border hover:bg-accent transition-all active:scale-95"
                >
                  <span className="text-[15px]">취소 / Cancel</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </>
  );
}