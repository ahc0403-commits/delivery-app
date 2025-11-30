import { Phone, MessageSquare, Check, X, Clock, Crown, Sparkles, MapPin, AlertTriangle } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState, useEffect, useRef } from "react";
import { analytics, EVENTS } from "../../lib/analytics";

export function NewOrderScreen() {
  const { navigate, showToast } = useNavigation();
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const orderReceivedTime = useRef(Date.now());

  // Track screen view and order received
  useEffect(() => {
    analytics.trackScreen("neworder", "New Order Screen");
    analytics.track(EVENTS.ORDER_RECEIVED, {
      order_id: "DN-1234",
      order_value: 160000,
      item_count: 2,
      customer_type: "VIP",
      is_returning_customer: true,
    });
  }, []);

  const rejectionReasons = [
    { id: "soldout", label: "재료 소진", labelEn: "Sold Out", icon: "⚠️", warning: true },
    { id: "busy", label: "주문 폭주", labelEn: "Too Busy", icon: "⚡" },
    { id: "kitchen", label: "주방 사정", labelEn: "Kitchen Issue", icon: "🔧" },
    { id: "closing", label: "영업 종료", labelEn: "Closing Soon", icon: "🕐" },
  ];

  const handleReject = () => {
    setShowRejectModal(true);
  };

  const handleConfirmReject = () => {
    if (!selectedReason && !customReason) {
      showToast("거절 사유를 선택해주세요", "error");
      return;
    }
    
    const reason = rejectionReasons.find(r => r.id === selectedReason);
    const timeSinceOrder = Math.round((Date.now() - orderReceivedTime.current) / 1000);
    
    // Track rejection with detailed analytics
    analytics.trackOrderRejection(
      "DN-1234",
      selectedReason || "custom",
      reason?.label || "Custom Reason",
      customReason || undefined
    );
    
    // Also track with timing data
    analytics.track(EVENTS.ORDER_REJECTED, {
      order_id: "DN-1234",
      reason_id: selectedReason || "custom",
      reason_label: reason?.label || customReason,
      reason_label_en: reason?.labelEn || "Custom",
      custom_reason: customReason || null,
      time_to_decision_seconds: timeSinceOrder,
      order_value: 160000,
    });
    
    showToast("주문이 거절되었습니다 😥", "info");
    setShowRejectModal(false);
    setSelectedReason("");
    setCustomReason("");
    navigate("ownerhome");
  };

  const handleAcceptOrder = () => {
    const timeSinceOrder = Math.round((Date.now() - orderReceivedTime.current) / 1000);
    
    analytics.track(EVENTS.ORDER_ACCEPTED, {
      order_id: "DN-1234",
      time_to_accept_seconds: timeSinceOrder,
      order_value: 160000,
      item_count: 2,
      estimated_prep_time_mins: 15,
    });
    
    showToast("주문을 수락했습니다! 🎉", "success");
    navigate("activeorders");
  };

  return (
    <div className="h-screen overflow-y-auto bg-background p-5 relative">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[24px] mb-2">새 주문 / New Order</h1>
        <p className="text-[13px] text-muted-foreground">주문 알림 / Incoming order notification</p>
      </div>

      {/* Order Card */}
      <div className="bg-white rounded-[16px] shadow-xl overflow-hidden mb-6">
        {/* Order Header */}
        <div className="bg-gradient-to-r from-primary to-[#E85D0D] text-white p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[20px]">주문 #DN-1234</h2>
            <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-[13px]">방금 전 / Just now</span>
            </div>
          </div>
          
          {/* VIP Badge */}
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-1">
              <Crown className="w-4 h-4" />
              <span className="text-[12px]">VIP Customer</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full text-[12px]">
              단골 고객 / Regular
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 border-b border-border">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] mb-1 flex items-center gap-2">
                <span className="text-purple-600">AI 인사이트 / AI Insight</span>
              </h3>
              <p className="text-[14px] mb-1">🌶️ 매운 음식을 좋아합니다</p>
              <p className="text-[12px] text-muted-foreground">Likes spicy food • 이전 주문 12회</p>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="p-5 border-b border-border">
          <h3 className="text-[14px] mb-3 text-muted-foreground">고객 정보 / Customer Info</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[20px]">👤</span>
              <span className="text-[15px]">김민지 / Kim Minji</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-[13px] text-muted-foreground">District 7, 1.2km away</span>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="p-5 border-b border-border">
          <h3 className="text-[14px] mb-3 text-muted-foreground">주문 내역 / Order Items</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>
                <p className="text-[14px] mb-1">치즈 떡볶이 (치즈 추가)</p>
                <p className="text-[12px] text-muted-foreground">Cheese Tteokbokki + Extra cheese</p>
              </div>
              <div className="text-right">
                <p className="text-[14px]">×1</p>
                <p className="text-[13px] text-primary">95,000₫</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-[14px] mb-1">튀김 세트</p>
                <p className="text-[12px] text-muted-foreground">Fried Set</p>
              </div>
              <div className="text-right">
                <p className="text-[14px]">×1</p>
                <p className="text-[13px] text-primary">65,000₫</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="p-5 bg-accent">
          <div className="flex justify-between items-center">
            <span className="text-[16px]">총 금액 / Total</span>
            <span className="text-[22px] text-primary">160,000₫</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="py-5 bg-red-500 text-white rounded-[12px] flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95" onClick={handleReject}>
          <X className="w-7 h-7" />
          <span className="text-[15px]">거절 / Reject</span>
        </button>
        <button 
          onClick={handleAcceptOrder}
          className="py-5 bg-primary text-white rounded-[12px] flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
        >
          <Check className="w-7 h-7" />
          <span className="text-[15px]">수락 / Accept</span>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-2">
        <button className="py-3 bg-white border border-border rounded-[12px] text-[12px] hover:bg-accent transition-colors">
          ⏱️ +10분
        </button>
        <button className="py-3 bg-white border border-border rounded-[12px] text-[12px] hover:bg-accent transition-colors">
          <Phone className="w-4 h-4" />
          고객 전화
        </button>
        <button className="py-3 bg-white border border-border rounded-[12px] text-[12px] hover:bg-accent transition-colors">
          <MessageSquare className="w-4 h-4" />
          메시지
        </button>
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5">
          <div className="bg-white rounded-[24px] shadow-2xl max-w-[400px] w-full overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-5 relative">
              <button
                onClick={() => setShowRejectModal(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-white text-[20px] mb-1">주문을 거절하시나요?</h2>
              <p className="text-white/90 text-[13px]">Reason for Rejection</p>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              {/* Rejection Reasons - Radio Buttons */}
              <div className="space-y-3 mb-5">
                {rejectionReasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() => setSelectedReason(reason.id)}
                    className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                      selectedReason === reason.id
                        ? "border-red-500 bg-red-50 shadow-md"
                        : "border-border bg-white hover:border-red-200 hover:bg-red-50/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Custom Radio Circle */}
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          selectedReason === reason.id
                            ? "border-red-500 bg-red-500"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedReason === reason.id && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>

                      {/* Reason Icon & Text */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[20px]">{reason.icon}</span>
                          <p className="text-[15px]" style={{ fontWeight: 600 }}>
                            {reason.label}
                          </p>
                          {reason.warning && (
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                          )}
                        </div>
                        <p className="text-[12px] text-muted-foreground">{reason.labelEn}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Reason Input */}
              <div className="mb-5">
                <label className="block text-[13px] text-muted-foreground mb-2">
                  ✍️ 기타 사유 직접 입력 / Custom Reason
                </label>
                <textarea
                  value={customReason}
                  onChange={(e) => {
                    setCustomReason(e.target.value);
                    if (e.target.value) setSelectedReason("");
                  }}
                  placeholder="거절 사유를 상세히 입���해주세요... (선택 사항)"
                  className="w-full px-4 py-3 rounded-[12px] border-2 border-border bg-secondary focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none"
                  rows={3}
                />
              </div>

              {/* Warning Message - RED WARNING as requested */}
              <div className="bg-red-50 rounded-[12px] p-4 border-2 border-red-300 mb-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[14px] text-red-600 leading-relaxed" style={{ fontWeight: 700 }}>
                      ⚠️ 반복 거절 시 노출이 줄어듭니다
                    </p>
                    <p className="text-[12px] text-red-500 mt-1" style={{ fontWeight: 500 }}>
                      Repeated rejections may affect store visibility
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <p className="text-[10px] text-red-400">
                        This affects your search ranking
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Collection Notice */}
              <div className="bg-blue-50 rounded-[12px] p-3 border border-blue-200 mb-5">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-blue-900 mb-1">💡 Data Insight</p>
                    <p className="text-[10px] text-blue-700 leading-relaxed">
                      Rejection reasons help us improve inventory management and predict demand patterns. "Sold Out" data is especially valuable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setShowRejectModal(false);
                    setSelectedReason("");
                    setCustomReason("");
                  }}
                  className="py-4 bg-gray-100 text-foreground rounded-[12px] hover:bg-gray-200 transition-all active:scale-95"
                >
                  <span className="text-[14px]" style={{ fontWeight: 600 }}>
                    취소 / Cancel
                  </span>
                </button>
                <button
                  onClick={handleConfirmReject}
                  disabled={!selectedReason && !customReason}
                  className={`py-4 rounded-[12px] transition-all active:scale-95 ${
                    selectedReason || customReason
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <span className="text-[14px]" style={{ fontWeight: 700 }}>
                    Confirm Rejection
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}