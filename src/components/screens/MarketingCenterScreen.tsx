import { ChevronLeft, Plus, TrendingUp, Eye, DollarSign, Target, Calendar, Edit, Trash2, Wallet, CheckCircle, Clock, Ticket, Percent, AlertCircle, Image as ImageIcon, X, Home } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const adProducts = [
  {
    id: 1,
    name: "Main Home Banner",
    nameKo: "메인 홈 배너",
    impact: "High Impact",
    description: "Premium placement at the top of customer home screen",
    descriptionKo: "고객 홈 화면 최상단 프리미엄 배치",
    price: 1000000,
    status: "available",
    estimatedViews: "50,000+ views/week",
  },
  {
    id: 2,
    name: "Category Top Rank",
    nameKo: "카테고리 상위 노출",
    impact: "Targeted",
    description: "Top position in selected food category",
    descriptionKo: "선택한 음식 카테고리 최상위 위치",
    price: 500000,
    status: "available",
    estimatedViews: "15,000+ views/week",
  },
  {
    id: 3,
    name: "Restaurant Feed Featured",
    nameKo: "레스토랑 피드 추천",
    impact: "Medium",
    description: "Featured badge in restaurant feed listings",
    descriptionKo: "레스토랑 피드에 추천 배지 표시",
    price: 300000,
    status: "available",
    estimatedViews: "8,000+ views/week",
  },
  {
    id: 4,
    name: "Search Results Boost",
    nameKo: "검색 결과 부스트",
    impact: "Targeted",
    description: "Priority ranking in search results",
    descriptionKo: "검색 결과에서 우선 순위 랭킹",
    price: 400000,
    status: "limited",
    estimatedViews: "12,000+ views/week",
  },
];

const myAds = [
  {
    id: 1,
    productName: "Banner Ad",
    period: "Nov 1-7",
    status: "pending",
    statusText: "Pending Approval",
    statusKo: "승인 대기중",
  },
  {
    id: 2,
    productName: "Category Top Rank",
    period: "Oct 15-31",
    status: "active",
    statusText: "Active",
    statusKo: "진행 중",
  },
  {
    id: 3,
    productName: "Featured Badge",
    period: "Oct 1-14",
    status: "completed",
    statusText: "Completed",
    statusKo: "완료",
  },
];

export function MarketingCenterScreen() {
  const { navigate, goBack } = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof adProducts[0] | null>(null);
  const [duration, setDuration] = useState("1week");
  const [discountType, setDiscountType] = useState<"fixed" | "percentage">("fixed");
  const [discountValue, setDiscountValue] = useState("");
  const [minOrder, setMinOrder] = useState("");

  const handleApply = (product: typeof adProducts[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handlePublishCoupon = () => {
    if (!discountValue || !minOrder) {
      alert("모든 필드를 입력해주세요 / Please fill all fields");
      return;
    }
    alert(`쿠폰이 발행되었어요! 🎉\nCoupon published successfully!\n\nType: ${discountType === "fixed" ? "Fixed Amount" : "Percentage"}\nValue: ${discountValue}${discountType === "percentage" ? "%" : "k VND"}\nMin Order: ${minOrder}k VND`);
    setDiscountValue("");
    setMinOrder("");
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header - Orange Theme (Store Owner) */}
      <div className="bg-gradient-to-r from-primary to-orange-600 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[18px] mb-1">광고 관리</h1>
            <p className="text-white/80 text-[11px]">Marketing & Ads</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Wallet Balance Banner */}
        <div className="mx-5 mt-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-[16px] p-5 shadow-md border-2 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-green-600" />
                <span className="text-[12px] text-green-700">Biz Wallet Balance</span>
              </div>
              <p className="text-[28px] text-green-900 mb-1">₫8,500,000</p>
              <p className="text-[11px] text-green-600">충분한 잔액 • Sufficient for all campaigns</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Ad Products List */}
        <div className="px-5 mt-6">
          <h2 className="text-[14px] text-muted-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span>광고 상품 / Ad Products</span>
          </h2>

          <div className="space-y-3">
            {adProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-[20px] shadow-lg border-2 border-border overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Product Header */}
                <div className={`px-5 py-3 border-b border-border ${
                  product.impact === "High Impact"
                    ? "bg-gradient-to-r from-orange-50 to-red-50"
                    : product.impact === "Targeted"
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                    : "bg-gradient-to-r from-purple-50 to-pink-50"
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-[16px] mb-1">{product.nameKo}</h3>
                      <p className="text-[13px] text-muted-foreground">{product.name}</p>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-[11px] ${
                      product.impact === "High Impact"
                        ? "bg-red-100 text-red-700 border border-red-300"
                        : product.impact === "Targeted"
                        ? "bg-blue-100 text-blue-700 border border-blue-300"
                        : "bg-purple-100 text-purple-700 border border-purple-300"
                    }`}>
                      {product.impact}
                    </div>
                  </div>
                </div>

                {/* Product Body */}
                <div className="px-5 py-4">
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-[13px] text-foreground mb-1">{product.descriptionKo}</p>
                    <p className="text-[12px] text-muted-foreground">{product.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-accent rounded-[12px] p-3 border border-border">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="text-[11px] text-muted-foreground">Estimated Reach</span>
                      </div>
                      <p className="text-[14px] text-foreground">{product.estimatedViews}</p>
                    </div>
                    <div className={`rounded-[12px] p-3 border-2 ${
                      product.status === "available"
                        ? "bg-green-50 border-green-200"
                        : "bg-yellow-50 border-yellow-200"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className={`w-4 h-4 ${
                          product.status === "available" ? "text-green-600" : "text-yellow-600"
                        }`} />
                        <span className="text-[11px] text-muted-foreground">Status</span>
                      </div>
                      <p className={`text-[14px] ${
                        product.status === "available" ? "text-green-700" : "text-yellow-700"
                      }`}>
                        {product.status === "available" ? "Available" : "Limited Slots"}
                      </p>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="text-[11px] text-muted-foreground mb-1">Price per week</p>
                      <p className="text-[24px] text-primary">₫{(product.price / 1000000).toFixed(1)}M</p>
                      <p className="text-[10px] text-muted-foreground">VND {product.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => handleApply(product)}
                      className="bg-gradient-to-r from-primary to-orange-600 text-white px-6 py-3 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                    >
                      <span className="text-[14px]">Apply</span>
                      <span className="text-[14px]">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Ads Status */}
        <div className="px-5 mt-6">
          <h2 className="text-[14px] text-muted-foreground mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>내 광고 현황 / My Ads Status</span>
          </h2>

          <div className="space-y-2">
            {myAds.map((ad) => (
              <div
                key={ad.id}
                className={`bg-white rounded-[16px] shadow-md border-2 p-4 ${
                  ad.status === "pending"
                    ? "border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50"
                    : ad.status === "active"
                    ? "border-green-200 bg-gradient-to-r from-green-50 to-emerald-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-[14px]">{ad.productName}</h3>
                      <span className="text-[11px] text-muted-foreground">({ad.period})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {ad.status === "pending" && (
                        <div className="flex items-center gap-1.5 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[11px]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>🟡 {ad.statusText}</span>
                        </div>
                      )}
                      {ad.status === "active" && (
                        <div className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-[11px]">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span>🟢 {ad.statusText}</span>
                        </div>
                      )}
                      {ad.status === "completed" && (
                        <div className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-[11px]">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>⚫ {ad.statusText}</span>
                        </div>
                      )}
                      <span className="text-[11px] text-muted-foreground">• {ad.statusKo}</span>
                    </div>
                  </div>
                  {ad.status === "active" && (
                    <button className="text-[11px] text-blue-600 hover:text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
                      View Stats
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Serve Coupon Creation - NEW DATA COLLECTION */}
        <div className="px-5 mt-6">
          <h2 className="text-[14px] text-muted-foreground mb-3 flex items-center gap-2">
            <Ticket className="w-4 h-4" />
            <span>쿠폰 만들기 / Create Coupon</span>
          </h2>

          <div className="bg-white rounded-[20px] shadow-lg border-2 border-primary/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-5 py-4 border-b border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] mb-1">Self-Serve Coupons</h3>
                  <p className="text-[12px] text-muted-foreground">Create instant promotions</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-5 py-5 space-y-4">
              {/* Discount Type Selection */}
              <div>
                <label className="text-[13px] mb-2 block">
                  할인 타입 / Discount Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDiscountType("fixed")}
                    className={`py-3 px-4 rounded-[12px] border-2 transition-all flex items-center gap-2 justify-center ${
                      discountType === "fixed"
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span className="text-[13px]">Fixed Amount</span>
                  </button>
                  <button
                    onClick={() => setDiscountType("percentage")}
                    className={`py-3 px-4 rounded-[12px] border-2 transition-all flex items-center gap-2 justify-center ${
                      discountType === "percentage"
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    <Percent className="w-4 h-4" />
                    <span className="text-[13px]">Percentage</span>
                  </button>
                </div>
              </div>

              {/* Discount Value */}
              <div>
                <label className="text-[13px] mb-2 block">
                  {discountType === "fixed" ? "할인 금액 / Discount Amount" : "할인율 / Discount Rate"}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={discountValue}
                    onChange={(e) => setDiscountValue(e.target.value)}
                    placeholder={discountType === "fixed" ? "e.g. 5 (5k VND)" : "e.g. 5 (5%)"}
                    className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-[14px]"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">
                    {discountType === "fixed" ? "k VND" : "%"}
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {discountType === "fixed" 
                    ? "Enter amount in thousands (5 = ₫5,000)" 
                    : "Enter percentage (5 = 5% off)"}
                </p>
              </div>

              {/* Minimum Order */}
              <div>
                <label className="text-[13px] mb-2 block">
                  최소 주문 금액 / Minimum Order Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={minOrder}
                    onChange={(e) => setMinOrder(e.target.value)}
                    placeholder="e.g. 100 (100k VND)"
                    className="w-full px-4 py-3 bg-white border-2 border-border rounded-[12px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-[14px]"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">
                    k VND
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Minimum order for coupon eligibility
                </p>
              </div>

              {/* Data Collection Notice */}
              <div className="bg-blue-50 rounded-[12px] p-3 border border-blue-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-blue-900 mb-1">💡 Data Insight</p>
                    <p className="text-[10px] text-blue-700 leading-relaxed">
                      Coupon usage data helps us understand price sensitivity and customer behavior patterns. This data is used to optimize your pricing strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Publish Button */}
              <button
                onClick={handlePublishCoupon}
                disabled={!discountValue || !minOrder}
                className={`w-full py-4 rounded-[12px] shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  discountValue && minOrder
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Ticket className="w-5 h-5" />
                <span className="text-[15px]" style={{ fontWeight: 700 }}>
                  Publish Coupon Now
                </span>
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                쿠폰 즉시 발행 • Instant activation, no approval needed
              </p>
            </div>
          </div>
        </div>

        {/* Marketing Tips */}
        <div className="mx-5 mt-6 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[16px] p-5 border-2 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-[14px] text-blue-900 mb-2">💡 Marketing Tips</h3>
              <ul className="text-[12px] text-blue-800 space-y-1 leading-relaxed">
                <li>• Main Banner ads show 3x higher conversion rates</li>
                <li>• Best performance: Thu-Sun dinner hours</li>
                <li>• 주말 광고가 평일 대비 45% 높은 효과</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5">
          <div className="bg-white rounded-[24px] shadow-2xl max-w-[400px] w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-primary to-orange-600 px-6 py-5 rounded-t-[24px] relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-white text-[20px] mb-1">Apply for Ad Campaign</h2>
              <p className="text-white/90 text-[13px]">광고 신청서</p>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              {/* Selected Product Info */}
              <div className="bg-orange-50 rounded-[16px] p-4 border-2 border-orange-200 mb-5">
                <p className="text-[12px] text-orange-700 mb-1">Selected Product</p>
                <h3 className="text-[18px] text-orange-900 mb-1">{selectedProduct.nameKo}</h3>
                <p className="text-[13px] text-orange-700">{selectedProduct.name}</p>
              </div>

              {/* Upload Image Area */}
              <div className="mb-5">
                <label className="text-[13px] mb-2 block flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  <span>광고 이미지 업로드 / Upload Ad Image</span>
                </label>
                <div className="border-2 border-dashed border-border rounded-[16px] p-8 bg-accent hover:bg-accent/80 transition-colors cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ImageIcon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-[13px] text-foreground mb-1">Click to upload image</p>
                    <p className="text-[11px] text-muted-foreground">PNG, JPG (Max 5MB)</p>
                    <p className="text-[10px] text-muted-foreground mt-1">권장 크기: 1200x400px</p>
                  </div>
                </div>
              </div>

              {/* Duration Selection */}
              <div className="mb-5">
                <label className="text-[13px] mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>기간 선택 / Select Duration</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDuration("1week")}
                    className={`py-4 rounded-[12px] border-2 transition-all ${
                      duration === "1week"
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    <p className="text-[16px] mb-1">1 week</p>
                    <p className={`text-[11px] ${duration === "1week" ? "text-white/80" : "text-muted-foreground"}`}>
                      ₫{(selectedProduct.price / 1000000).toFixed(1)}M
                    </p>
                  </button>
                  <button
                    onClick={() => setDuration("2weeks")}
                    className={`py-4 rounded-[12px] border-2 transition-all relative ${
                      duration === "2weeks"
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[9px] px-2 py-0.5 rounded-full">
                      -10%
                    </div>
                    <p className="text-[16px] mb-1">2 weeks</p>
                    <p className={`text-[11px] ${duration === "2weeks" ? "text-white/80" : "text-muted-foreground"}`}>
                      ₫{((selectedProduct.price * 2 * 0.9) / 1000000).toFixed(1)}M
                    </p>
                  </button>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-green-50 rounded-[16px] p-4 border-2 border-green-200 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wallet className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] text-green-700 mb-2">Payment Method / 결제 방법</p>
                    <p className="text-[14px] text-green-900 mb-1">Deduct from Biz Wallet</p>
                    <p className="text-[11px] text-green-600">
                      Total: ₫{duration === "1week" 
                        ? (selectedProduct.price / 1000000).toFixed(1) 
                        : ((selectedProduct.price * 2 * 0.9) / 1000000).toFixed(1)}M
                    </p>
                    <div className="mt-2 pt-2 border-t border-green-200">
                      <p className="text-[11px] text-green-700">
                        Remaining balance: ₫{duration === "1week"
                          ? ((8500000 - selectedProduct.price) / 1000000).toFixed(1)
                          : ((8500000 - selectedProduct.price * 2 * 0.9) / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-blue-50 rounded-[12px] p-3 border border-blue-200 mb-5">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-blue-900 mb-1">Important Notice</p>
                    <p className="text-[10px] text-blue-700 leading-relaxed">
                      • Admin approval required (1-2 business days)<br/>
                      • Payment charged only after approval<br/>
                      • 승인 후 결제 처리되며 반려 시 환불
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => {
                  setModalOpen(false);
                  // In real app, submit the form here
                }}
                className="w-full bg-gradient-to-r from-primary to-orange-600 text-white py-4 rounded-[16px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-[16px]">Submit for Review</span>
              </button>
              <p className="text-center text-[11px] text-muted-foreground mt-2">
                승인 요청 • Request Admin Approval
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}