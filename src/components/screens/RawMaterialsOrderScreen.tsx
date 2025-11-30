import { ChevronLeft, Plus, Minus, ShoppingCart, Package, AlertTriangle, TrendingDown, Check } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const categories = [
  { id: "all", label: "전체 / All", icon: "📦" },
  { id: "vegetables", label: "야채 / Vegetables", icon: "🥬" },
  { id: "meat", label: "육류 / Meat", icon: "🥩" },
  { id: "sauce", label: "소스 / Sauce", icon: "🧂" },
  { id: "packaging", label: "포장 / Packaging", icon: "📦" },
  { id: "frozen", label: "냉동 / Frozen", icon: "❄️" },
];

const rawMaterials = [
  {
    id: 1,
    name: "고추장 (10kg)",
    nameVi: "Gochujang Paste (10kg)",
    category: "sauce",
    currentStock: 2,
    minStock: 5,
    unitPrice: 450000,
    unit: "box",
    supplier: "CJ제일제당",
    deliveryDays: 2,
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400",
  },
  {
    id: 2,
    name: "떡볶이 떡 (5kg)",
    nameVi: "Tteokbokki Rice Cake (5kg)",
    category: "frozen",
    currentStock: 8,
    minStock: 10,
    unitPrice: 120000,
    unit: "bag",
    supplier: "풀무원",
    deliveryDays: 1,
    image: "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?w=400",
  },
  {
    id: 3,
    name: "배추 (10kg)",
    nameVi: "Napa Cabbage (10kg)",
    category: "vegetables",
    currentStock: 15,
    minStock: 10,
    unitPrice: 85000,
    unit: "box",
    supplier: "농협",
    deliveryDays: 1,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400",
  },
  {
    id: 4,
    name: "닭가슴살 (10kg)",
    nameVi: "Chicken Breast (10kg)",
    category: "meat",
    currentStock: 3,
    minStock: 8,
    unitPrice: 280000,
    unit: "box",
    supplier: "하림",
    deliveryDays: 1,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400",
  },
  {
    id: 5,
    name: "일회용 용기 (500개)",
    nameVi: "Disposable Container (500pcs)",
    category: "packaging",
    currentStock: 1,
    minStock: 3,
    unitPrice: 195000,
    unit: "box",
    supplier: "크린랩",
    deliveryDays: 2,
    image: "https://images.unsplash.com/photo-1625740888640-5d0c0c0e0c0e?w=400",
  },
  {
    id: 6,
    name: "참기름 (1.8L)",
    nameVi: "Sesame Oil (1.8L)",
    category: "sauce",
    currentStock: 12,
    minStock: 6,
    unitPrice: 65000,
    unit: "bottle",
    supplier: "오뚜기",
    deliveryDays: 2,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
  },
  {
    id: 7,
    name: "김 (100장)",
    nameVi: "Seaweed (100 sheets)",
    category: "frozen",
    currentStock: 20,
    minStock: 15,
    unitPrice: 45000,
    unit: "pack",
    supplier: "동원F&B",
    deliveryDays: 1,
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400",
  },
  {
    id: 8,
    name: "양파 (20kg)",
    nameVi: "Onion (20kg)",
    category: "vegetables",
    currentStock: 1,
    minStock: 5,
    unitPrice: 48000,
    unit: "box",
    supplier: "농협",
    deliveryDays: 1,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784ed4?w=400",
  },
];

export function RawMaterialsOrderScreen() {
  const { navigate, goBack, showToast } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const filteredMaterials = selectedCategory === "all" 
    ? rawMaterials 
    : rawMaterials.filter(m => m.category === selectedCategory);

  const lowStockCount = rawMaterials.filter(m => m.currentStock < m.minStock).length;

  const addToCart = (id: number) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id]--;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const material = rawMaterials.find(m => m.id === parseInt(id));
    return sum + (material?.unitPrice || 0) * qty;
  }, 0);

  const handleCheckout = () => {
    showToast("주문이 완료되었습니다! Order placed successfully! 📦", "success");
    setCart({});
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={goBack} className="p-1 text-white hover:bg-white/20 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">원재료 주문 / Raw Materials</h1>
            <p className="text-white/80 text-[12px]">식자재 및 포장재 발주</p>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Package className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Alert Banner - Low Stock */}
        {lowStockCount > 0 && (
          <div className="bg-red-500/90 backdrop-blur-sm rounded-[12px] p-3 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
            <div className="flex-1">
              <p className="text-white text-[13px]">
                재고 부족 {lowStockCount}개 품목 / {lowStockCount} items low stock
              </p>
            </div>
            <TrendingDown className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Category Filter - Horizontal Scroll */}
      <div className="bg-white border-b border-border shadow-sm sticky top-0 z-20">
        <div className="flex gap-2 px-5 py-3 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-[12px] text-[12px] transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "bg-white border border-border text-foreground hover:bg-purple-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{cat.icon}</span>
                <span>{cat.label.split(" / ")[0]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Summary Bar */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-3 border-b border-border">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-[18px] text-purple-600">{filteredMaterials.length}</p>
            <p className="text-[9px] text-muted-foreground">품목 / Items</p>
          </div>
          <div>
            <p className="text-[18px] text-red-600">{lowStockCount}</p>
            <p className="text-[9px] text-muted-foreground">부족 / Low</p>
          </div>
          <div>
            <p className="text-[18px] text-green-600">{cartCount}</p>
            <p className="text-[9px] text-muted-foreground">장바구니 / Cart</p>
          </div>
        </div>
      </div>

      {/* Scrollable Materials List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 pb-32">
        {filteredMaterials.map(material => {
          const isLowStock = material.currentStock < material.minStock;
          const cartQuantity = cart[material.id] || 0;

          return (
            <div
              key={material.id}
              className={`bg-white rounded-[16px] shadow-md overflow-hidden transition-all hover:shadow-lg ${
                isLowStock ? "border-2 border-red-300" : "border border-border"
              }`}
            >
              <div className="flex gap-4 p-4">
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-[12px] overflow-hidden flex-shrink-0">
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-[15px] mb-1">{material.name}</h3>
                      <p className="text-[11px] text-muted-foreground mb-1">{material.nameVi}</p>
                      <p className="text-[10px] text-muted-foreground">공급사: {material.supplier}</p>
                    </div>
                    {isLowStock && (
                      <div className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-[9px] flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>재고부족</span>
                      </div>
                    )}
                  </div>

                  {/* Stock Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground">현재:</span>
                      <span className={`text-[13px] ${isLowStock ? "text-red-600" : "text-primary"}`}>
                        {material.currentStock} {material.unit}
                      </span>
                    </div>
                    <div className="h-3 w-px bg-border"></div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground">최소:</span>
                      <span className="text-[13px]">{material.minStock} {material.unit}</span>
                    </div>
                  </div>

                  {/* Price and Delivery */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[18px] text-primary">₫{(material.unitPrice / 1000).toFixed(0)}K</p>
                      <p className="text-[10px] text-muted-foreground">
                        배송: {material.deliveryDays}일 / {material.deliveryDays}d
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    {cartQuantity === 0 ? (
                      <button
                        onClick={() => addToCart(material.id)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-[10px] text-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        <span>담기</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-purple-50 rounded-[10px] p-1 border border-purple-200">
                        <button
                          onClick={() => removeFromCart(material.id)}
                          className="w-7 h-7 bg-white rounded-[8px] flex items-center justify-center shadow-sm hover:bg-purple-100 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-purple-600" />
                        </button>
                        <span className="text-[14px] w-8 text-center">{cartQuantity}</span>
                        <button
                          onClick={() => addToCart(material.id)}
                          className="w-7 h-7 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[8px] flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Low Stock Recommendation */}
              {isLowStock && (
                <div className="bg-red-50 border-t border-red-200 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-red-600" />
                    <span className="text-[11px] text-red-700">
                      권장 주문량: {material.minStock - material.currentStock + 5} {material.unit}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      const recommended = material.minStock - material.currentStock + 5;
                      setCart(prev => ({
                        ...prev,
                        [material.id]: recommended
                      }));
                      showToast("권장 수량이 추가되었습니다!", "success");
                    }}
                    className="text-[11px] text-red-600 hover:text-red-700 underline"
                  >
                    빠른주문
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-24 left-0 right-0 px-5 z-30">
          <div className="max-w-[430px] mx-auto">
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-[16px] shadow-2xl hover:shadow-3xl transition-all active:scale-95 flex items-center justify-between px-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[14px]">주문하기 / Place Order</p>
                  <p className="text-[11px] text-white/80">{cartCount}개 품목</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[20px]">₫{(cartTotal / 1000000).toFixed(1)}M</p>
                <p className="text-[10px] text-white/80">VND {cartTotal.toLocaleString()}</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
