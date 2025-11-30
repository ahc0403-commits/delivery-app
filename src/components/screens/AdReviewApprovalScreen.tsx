import { ChevronLeft, CheckCircle, XCircle, Eye, Calendar, DollarSign, MessageSquare, AlertTriangle, Image as ImageIcon, Wallet } from "lucide-react";
import { useNavigation } from "../../App";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const adRequests = [
  {
    id: 1,
    store: "Kim's Kitchen",
    storeKo: "김's 키친",
    productType: "Main Home Banner",
    productTypeKo: "메인 홈 배너",
    duration: "1 week",
    price: 1000000,
    submittedDate: "Nov 28, 2025",
    walletBalance: 8500000,
    status: "pending",
    estimatedViews: "50,000+ views/week",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=400&fit=crop",
  },
  {
    id: 2,
    store: "Seoul Chicken",
    storeKo: "서울 치킨",
    productType: "Category Top Rank",
    productTypeKo: "카테고리 상위 노출",
    duration: "2 weeks",
    price: 900000,
    submittedDate: "Nov 27, 2025",
    walletBalance: 2100000,
    status: "pending",
    estimatedViews: "30,000+ views",
    imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&h=400&fit=crop",
  },
  {
    id: 3,
    store: "Hanok Bibimbap",
    storeKo: "한옥 비빔밥",
    productType: "Restaurant Feed Featured",
    productTypeKo: "레스토랑 피드 추천",
    duration: "1 week",
    price: 300000,
    submittedDate: "Nov 26, 2025",
    walletBalance: 450000,
    status: "pending",
    estimatedViews: "8,000+ views/week",
    imageUrl: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=1200&h=400&fit=crop",
  },
];

export function AdReviewApprovalScreen() {
  const { approveAd, navigate, goBack } = useNavigation();
  
  const handleApprove = () => {
    approveAd();
    // Show success message, then optionally navigate to customer feed to see the result
    setTimeout(() => {
      navigate("feed");
    }, 2000);
  };
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-1 text-white hover:bg-white/10 rounded-full transition-all active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">광고 승인 대기 (3)</h1>
            <p className="text-white/80 text-[12px]">Ad Requests - Review & Approval</p>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 border-b border-border">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-[18px] text-orange-600">3</p>
            <p className="text-[9px] text-muted-foreground">Pending</p>
          </div>
          <div>
            <p className="text-[18px] text-green-600">12</p>
            <p className="text-[9px] text-muted-foreground">Approved Today</p>
          </div>
          <div>
            <p className="text-[18px] text-blue-600">₫2.2M</p>
            <p className="text-[9px] text-muted-foreground">Revenue Today</p>
          </div>
        </div>
      </div>

      {/* Profit Model Info Banner */}
      <div className="mx-5 mt-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-[16px] p-4 border-2 border-green-200 shadow-md">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-[13px] text-green-900 mb-1 flex items-center gap-2">
              <span>💰</span>
              <span>Platform Revenue Model</span>
            </h3>
            <p className="text-[11px] text-green-700 leading-relaxed">
              Advertising is a key revenue stream. Approve quality ads to maximize platform earnings.
              광고 수익은 플랫폼의 핵심 수익원입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Request Cards */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 pb-6">
        {adRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-[20px] shadow-lg border-2 border-orange-200 overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-4 border-b border-border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[18px] mb-1">{request.store}</h3>
                  <p className="text-[13px] text-muted-foreground">{request.storeKo}</p>
                </div>
                <div className="bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-[11px] border border-orange-300">
                  🕐 Pending Review
                </div>
              </div>

              {/* Ad Product Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-3 py-2.5">
                  <p className="text-[11px] text-muted-foreground mb-1">Ad Product</p>
                  <p className="text-[13px] text-foreground">{request.productTypeKo}</p>
                  <p className="text-[11px] text-muted-foreground">{request.productType}</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-[12px] px-3 py-2.5">
                  <p className="text-[11px] text-muted-foreground mb-1">Duration</p>
                  <p className="text-[14px] text-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{request.duration}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground">{request.estimatedViews}</p>
                </div>
              </div>
            </div>

            {/* Image Preview */}
            <div className="px-5 py-4 bg-gray-50 border-b border-border">
              <div className="flex items-center gap-2 mb-2">
                <ImageIcon className="w-4 h-4 text-muted-foreground" />
                <p className="text-[12px] text-muted-foreground">Uploaded Banner Image Preview</p>
              </div>
              <div className="relative rounded-[12px] overflow-hidden border-2 border-border shadow-md">
                <ImageWithFallback
                  src={request.imageUrl}
                  alt={`${request.store} banner ad`}
                  className="w-full h-32 object-cover"
                />
                <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[11px] text-foreground hover:bg-white transition-colors flex items-center gap-1.5 shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Preview</span>
                </button>
              </div>
            </div>

            {/* Payment & Wallet Check */}
            <div className="px-5 py-4 border-b border-border">
              <div className="grid grid-cols-2 gap-3">
                {/* Price */}
                <div className="bg-blue-50 rounded-[12px] p-3 border border-blue-200">
                  <p className="text-[11px] text-blue-700 mb-1">Ad Price</p>
                  <p className="text-[20px] text-blue-900">₫{(request.price / 1000000).toFixed(1)}M</p>
                  <p className="text-[10px] text-blue-600">VND {request.price.toLocaleString()}</p>
                </div>

                {/* Wallet Balance Check */}
                <div className={`rounded-[12px] p-3 border-2 ${
                  request.walletBalance >= request.price
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Wallet className={`w-4 h-4 ${
                      request.walletBalance >= request.price ? "text-green-600" : "text-red-600"
                    }`} />
                    <p className="text-[11px] text-muted-foreground">Wallet Check</p>
                  </div>
                  {request.walletBalance >= request.price ? (
                    <>
                      <p className="text-[13px] text-green-900 mb-1 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" />
                        <span>Balance OK ✓</span>
                      </p>
                      <p className="text-[10px] text-green-600">
                        ₫{(request.walletBalance / 1000000).toFixed(1)}M available
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-[13px] text-red-900 mb-1 flex items-center gap-1.5">
                        <XCircle className="w-4 h-4" />
                        <span>Insufficient</span>
                      </p>
                      <p className="text-[10px] text-red-600">
                        Short: ₫{((request.price - request.walletBalance) / 1000000).toFixed(1)}M
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Submitted: {request.submittedDate}</span>
                <span>Request ID: #{request.id.toString().padStart(4, '0')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-5 py-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-3">
                {/* Approve Button */}
                <button
                  onClick={request.walletBalance >= request.price ? handleApprove : undefined}
                  disabled={request.walletBalance < request.price}
                  className={`py-4 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    request.walletBalance >= request.price
                      ? "bg-gradient-to-r from-green-600 to-green-500 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-[14px]">Approve</p>
                    <p className="text-[10px] opacity-80">Publish Ad</p>
                  </div>
                </button>

                {/* Reject Button */}
                <button className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-[14px]">Reject</p>
                    <p className="text-[10px] opacity-80">Refund Wallet</p>
                  </div>
                </button>
              </div>

              {/* Warning for insufficient balance */}
              {request.walletBalance < request.price && (
                <div className="mt-3 bg-red-50 rounded-[10px] p-3 border border-red-200 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-red-900 mb-1">Cannot Approve - Insufficient Balance</p>
                    <p className="text-[10px] text-red-700">
                      Contact store owner to add funds or reject and refund application fee.
                      점주에게 잔액 충전을 요청하거나 거절하세요.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Empty State (if no requests) */}
        {adRequests.length === 0 && (
          <div className="bg-white rounded-[20px] shadow-md border-2 border-dashed border-border p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-[14px] text-foreground mb-2">No Pending Ad Requests</p>
            <p className="text-[12px] text-muted-foreground">
              모든 광고 요청이 처리되었습니다 • All requests processed
            </p>
          </div>
        )}
      </div>

      {/* Bottom Stats Summary */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-3 border-t-2 border-blue-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-white/70 mb-1">Total Pending Revenue</p>
            <p className="text-[20px] text-white">
              ₫{((adRequests.reduce((sum, req) => sum + req.price, 0)) / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-white/70 mb-1">Avg Approval Time</p>
            <p className="text-[16px] text-white">1.2 hours</p>
          </div>
        </div>
      </div>

    </div>
  );
}