import { Phone, MessageSquare, Users, Share2, Heart, ChevronLeft, ChevronDown, ChevronUp, Plus, Star, Clock, MapPin, FileText } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNavigation } from "../../App";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { FloatingCartButton } from "../FloatingCartButton";
import { BottomNavBar } from "../BottomNavBar";

const menuCategories = [
  { id: "top", label: "Top Menu" },
  { id: "main", label: "Main" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Drinks" },
];

const menuItems = [
  {
    id: "tteokbokki-original",
    category: "top",
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "오리지널 떡볶이",
    nameVi: "Original Tteokbokki",
    description: "Chewy rice cakes in sweet & spicy sauce",
    price: 85000,
    priceDisplay: "85,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
  {
    id: "tteokbokki-cheese",
    category: "top",
    image: "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpfGVufDF8fHx8MTc2NDQxMzk0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "치즈 떡볶이",
    nameVi: "Cheese Tteokbokki",
    description: "Topped with melted mozzarella cheese",
    price: 95000,
    priceDisplay: "95,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
  {
    id: "tteokbokki-rose",
    category: "main",
    image: "https://images.unsplash.com/photo-1526576935508-6bccc1e07580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dGVva2Jva2tpJTIwc3BpY3l8ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "로제 떡볶이",
    nameVi: "Rosé Tteokbokki",
    description: "Creamy rosé sauce with rice cakes",
    price: 105000,
    priceDisplay: "105,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
  {
    id: "tteokbokki-seafood",
    category: "main",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "해물 떡볶이",
    nameVi: "Seafood Tteokbokki",
    description: "With shrimp, squid & fish cake",
    price: 125000,
    priceDisplay: "125,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
  {
    id: "fried-set",
    category: "sides",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "튀김 세트",
    nameVi: "Fried Set",
    description: "Assorted Korean fried snacks",
    price: 65000,
    priceDisplay: "65,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
  {
    id: "gimbap",
    category: "sides",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "김밥",
    nameVi: "Gimbap Roll",
    description: "Classic Korean seaweed rice roll",
    price: 45000,
    priceDisplay: "45,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
  {
    id: "cola",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBkaXNoZXMlMjB2YXJpZXR5fGVufDF8fHx8MTc2NDQ1NTI0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "콜라",
    nameVi: "Coca-Cola",
    description: "Chilled soft drink",
    price: 15000,
    priceDisplay: "15,000₫",
    storeName: "신당 떡볶이",
    storeId: "store",
  },
];

export function StoreDetailScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [activeTab, setActiveTab] = useState("top");
  const [infoExpanded, setInfoExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem, getTotalItems } = useCart();

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      nameVi: item.nameVi,
      price: item.price,
      image: item.image,
      storeName: item.storeName,
      storeId: item.storeId,
    });
    showToast(`${item.name} 담기 완료! 🛒`, "success");
  };

  return (
    <div className="h-screen overflow-y-auto bg-white pb-24">
      {/* Full-Width Hero Image - 30% Height */}
      <div className="relative h-[35vh] min-h-[280px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1608120073766-c80051eccbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMHR0ZW9rYm9ra2klMjBrb3JlYW4lMjBzdHJlZXQlMjBmb29kfGVufDF8fHx8MTc2NDQ2MzkwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Spicy Tteokbokki"
          className="w-full h-full object-cover"
        />
        
        {/* Back Button - Floating */}
        <button 
          onClick={goBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95 z-10"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {/* Action Buttons - Floating Top Right */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95">
            <Share2 className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95"
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} strokeWidth={2.5} />
          </button>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Main Content Sheet - Sliding Up Over Image */}
      <div className="relative -mt-6 bg-white rounded-t-[24px] shadow-2xl">
        {/* Header Section */}
        <div className="px-6 pt-6 pb-4 border-b border-border/50">
          {/* Store Name with Info Button */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h1 
                className="text-[28px] mb-2 leading-tight"
                style={{ 
                  fontFamily: '"Playfair Display", "Noto Serif KR", Georgia, serif',
                  fontWeight: 600,
                  letterSpacing: '-0.01em'
                }}
              >
                신당 떡볶이
              </h1>
              <p className="text-[14px] text-muted-foreground">Sindang Tteokbokki • 한식 Korean</p>
            </div>
            
            {/* Info Toggle Button - Next to Name */}
            <button
              onClick={() => setInfoExpanded(!infoExpanded)}
              className="flex-shrink-0 w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-all active:scale-95"
            >
              {infoExpanded ? (
                <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
              ) : (
                <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
              )}
            </button>
          </div>

          {/* Rating & Quick Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" strokeWidth={0} />
              <span 
                className="text-[16px] text-yellow-600"
                style={{ fontWeight: 600 }}
              >
                4.9
              </span>
              <span className="text-muted-foreground text-[13px]">(1,234)</span>
            </div>
            <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>25-35분</span>
            </div>
            <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>1.8 km</span>
            </div>
          </div>

          {/* Collapsible Info Panel */}
          {infoExpanded && (
            <div className="bg-green-50 rounded-[12px] p-4 mb-4 space-y-3 border border-green-100 animate-slide-down">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Address / 주소</p>
                  <p className="text-[12px]">123 Sindang-dong, Jung-gu, Seoul</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Hours / 영업시간</p>
                  <p className="text-[12px]">Daily 11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Business / 사업자번호</p>
                  <p className="text-[12px]">123-45-67890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[16px] flex-shrink-0">💰</span>
                <div>
                  <p className="text-[11px] text-muted-foreground mb-0.5">Delivery Fee / 배달비</p>
                  <p className="text-[12px] text-primary" style={{ fontWeight: 600 }}>무료배달 🎉</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Bar - 3 Buttons: 전화하기, 채팅하기, 단체주문 */}
          <div className="grid grid-cols-3 gap-2">
            {/* Call Button */}
            <button className="py-3 border border-border rounded-[12px] flex items-center justify-center gap-2 hover:bg-accent transition-colors active:scale-95">
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[12px]" style={{ fontWeight: 600 }}>전화</span>
            </button>

            {/* Chat Button */}
            <button 
              onClick={() => navigate("chat")}
              className="py-3 border border-border rounded-[12px] flex items-center justify-center gap-2 hover:bg-accent transition-colors active:scale-95"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[12px]" style={{ fontWeight: 600 }}>채팅</span>
            </button>

            {/* Group Order Button */}
            <button 
              onClick={() => navigate("group")}
              className="py-3 bg-primary/10 text-primary border border-primary/20 rounded-[12px] flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors active:scale-95"
            >
              <Users className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-[12px]" style={{ fontWeight: 600 }}>단체</span>
            </button>
          </div>
        </div>

        {/* Sticky Tab Navigation */}
        <div className="sticky top-0 z-20 bg-white border-b border-border/50 shadow-sm">
          <div className="flex items-center px-3 overflow-x-auto scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex-shrink-0 px-5 py-4 text-[13px] relative transition-colors ${
                  activeTab === category.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{ fontWeight: activeTab === category.id ? 600 : 400 }}
              >
                {category.label}
                {/* Green Underline for Active Tab */}
                {activeTab === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu List - Premium List Style (NOT CARDS) */}
        <div className="px-6 py-4">
          <div className="space-y-0 divide-y divide-border/50">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                className="py-4 flex items-center gap-4 hover:bg-accent/30 transition-colors rounded-[8px] px-2 -mx-2"
              >
                {/* Left: Text Info */}
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-[15px] mb-1 truncate"
                    style={{ fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-muted-foreground mb-2 line-clamp-1">
                    {item.description}
                  </p>
                  <p 
                    className="text-primary text-[14px]"
                    style={{ fontWeight: 600 }}
                  >
                    {item.priceDisplay}
                  </p>
                </div>

                {/* Right: Square Thumbnail */}
                <div className="flex-shrink-0 relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-[12px] object-cover"
                  />
                  
                  {/* Circular + Button - Overlaying Image */}
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      <FloatingCartButton />

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      {/* Custom Styles */}
      <style>{`
        /* Hide Scrollbar for Tab Navigation */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Slide Down Animation for Info Panel */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        /* Import Premium Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Noto+Serif+KR:wght@300;400;500;600&display=swap');
      `}</style>
    </div>
  );
}