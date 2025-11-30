import { useState } from "react";
import { ChevronLeft, Search, Shield, AlertTriangle, Ban, Clock, FileText, X, CheckCircle } from "lucide-react";
import { useNavigation } from "../../App";

const stores = [
  {
    id: 1,
    name: "Bad Tteokbokki",
    nameKo: "나쁜 떡볶이",
    status: "warning",
    strikes: 2,
    lastViolation: "Hygiene complaint verified",
    lastViolationKo: "위생 불만 확인됨",
    violationDate: "Nov 25, 2025",
    rating: 3.2,
  },
  {
    id: 2,
    name: "Late Night Chicken",
    nameKo: "늦은 밤 치킨",
    status: "suspended",
    strikes: 3,
    lastViolation: "Repeated late deliveries",
    lastViolationKo: "반복적인 배달 지연",
    violationDate: "Nov 20, 2025",
    suspendedUntil: "Dec 3, 2025",
    rating: 3.8,
  },
  {
    id: 3,
    name: "Fake Reviews BBQ",
    nameKo: "가짜 리뷰 BBQ",
    status: "warning",
    strikes: 1,
    lastViolation: "Suspected review manipulation",
    lastViolationKo: "리뷰 조작 의심",
    violationDate: "Nov 28, 2025",
    rating: 4.1,
  },
  {
    id: 4,
    name: "Quality Kitchen",
    nameKo: "품질 주방",
    status: "good",
    strikes: 0,
    lastViolation: null,
    violationDate: null,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Toxic Restaurant",
    nameKo: "독성 레스토랑",
    status: "banned",
    strikes: 5,
    lastViolation: "Food safety violation",
    lastViolationKo: "식품 안전 위반",
    violationDate: "Nov 15, 2025",
    bannedDate: "Nov 16, 2025",
    rating: 2.1,
  },
];

export function StoreDisciplineScreen() {
  const { goBack } = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<typeof stores[0] | null>(null);
  const [penaltyType, setPenaltyType] = useState<"warning" | "suspend" | "ban">("warning");
  const [penaltyReason, setPenaltyReason] = useState("");

  const handleIssuePenalty = (store: typeof stores[0]) => {
    setSelectedStore(store);
    setPenaltyReason(store.lastViolation || "");
    setModalOpen(true);
  };

  const warningStores = stores.filter(s => s.status === "warning").length;
  const suspendedStores = stores.filter(s => s.status === "suspended").length;
  const bannedStores = stores.filter(s => s.status === "banned").length;
  const goodStores = stores.filter(s => s.status === "good").length;

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">스토어 관리</h1>
            <p className="text-white/80 text-[12px]">Store Discipline & Penalties</p>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-border px-5 py-3 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find Store..."
            className="w-full pl-11 pr-4 py-3 bg-accent rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-[14px]"
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 border-b border-border">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <p className="text-[18px] text-green-600">{goodStores}</p>
            <p className="text-[9px] text-muted-foreground">Good Standing</p>
          </div>
          <div>
            <p className="text-[18px] text-yellow-600">{warningStores}</p>
            <p className="text-[9px] text-muted-foreground">Warning</p>
          </div>
          <div>
            <p className="text-[18px] text-orange-600">{suspendedStores}</p>
            <p className="text-[9px] text-muted-foreground">Suspended</p>
          </div>
          <div>
            <p className="text-[18px] text-red-600">{bannedStores}</p>
            <p className="text-[9px] text-muted-foreground">Banned</p>
          </div>
        </div>
      </div>

      {/* Scrollable Store List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 pb-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className={`bg-white rounded-[20px] shadow-lg border-2 overflow-hidden ${
              store.status === "good"
                ? "border-green-200"
                : store.status === "warning"
                ? "border-yellow-300"
                : store.status === "suspended"
                ? "border-orange-300"
                : "border-red-300"
            }`}
          >
            {/* Card Header */}
            <div
              className={`px-5 py-4 border-b border-border ${
                store.status === "good"
                  ? "bg-gradient-to-r from-green-50 to-emerald-50"
                  : store.status === "warning"
                  ? "bg-gradient-to-r from-yellow-50 to-amber-50"
                  : store.status === "suspended"
                  ? "bg-gradient-to-r from-orange-50 to-red-50"
                  : "bg-gradient-to-r from-red-100 to-red-50"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[18px] mb-1">{store.name}</h3>
                  <p className="text-[13px] text-muted-foreground">{store.nameKo}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[14px]">⭐</span>
                  <span className={`text-[14px] ${
                    store.rating >= 4.5 ? "text-green-700" :
                    store.rating >= 3.5 ? "text-yellow-700" :
                    "text-red-700"
                  }`}>
                    {store.rating}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {store.status === "good" && (
                  <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-[12px] border border-green-300">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>✅ Good Standing</span>
                  </div>
                )}
                {store.status === "warning" && (
                  <div className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-[12px] border border-yellow-400">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>⚠️ Warning ({store.strikes} strikes)</span>
                  </div>
                )}
                {store.status === "suspended" && (
                  <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-[12px] border border-orange-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>🔶 Suspended ({store.strikes} strikes)</span>
                  </div>
                )}
                {store.status === "banned" && (
                  <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 px-3 py-1.5 rounded-full text-[12px] border border-red-400">
                    <Ban className="w-3.5 h-3.5" />
                    <span>🔴 Permanently Banned</span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="px-5 py-4">
              {/* Violation Info */}
              {store.lastViolation && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <p className="text-[11px] text-muted-foreground">Last Violation</p>
                  </div>
                  <div className="bg-red-50 rounded-[12px] p-3 border border-red-200">
                    <p className="text-[13px] text-red-900 mb-1">{store.lastViolationKo}</p>
                    <p className="text-[12px] text-red-700 mb-2">{store.lastViolation}</p>
                    <p className="text-[10px] text-red-600">Date: {store.violationDate}</p>
                  </div>
                </div>
              )}

              {/* Suspension Info */}
              {store.status === "suspended" && store.suspendedUntil && (
                <div className="mb-4 bg-orange-50 rounded-[12px] p-3 border border-orange-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <p className="text-[12px] text-orange-900">Suspended Until</p>
                  </div>
                  <p className="text-[14px] text-orange-700">{store.suspendedUntil}</p>
                  <p className="text-[10px] text-orange-600 mt-1">
                    정지 기간 만료 후 자동 복구
                  </p>
                </div>
              )}

              {/* Ban Info */}
              {store.status === "banned" && store.bannedDate && (
                <div className="mb-4 bg-red-100 rounded-[12px] p-3 border-2 border-red-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Ban className="w-4 h-4 text-red-700" />
                    <p className="text-[12px] text-red-900">Permanently Banned</p>
                  </div>
                  <p className="text-[11px] text-red-700 mb-1">Banned on: {store.bannedDate}</p>
                  <p className="text-[10px] text-red-600">
                    Store removed from platform • 플랫폼에서 영구 제거
                  </p>
                </div>
              )}

              {/* Strike History */}
              {store.strikes > 0 && (
                <div className="mb-4">
                  <p className="text-[11px] text-muted-foreground mb-2">Strike History</p>
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded-full ${
                          i < store.strikes
                            ? store.strikes >= 4
                              ? "bg-red-500"
                              : store.strikes >= 2
                              ? "bg-orange-500"
                              : "bg-yellow-500"
                            : "bg-gray-200"
                        }`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    {store.strikes} of 5 strikes • {5 - store.strikes} remaining before ban
                  </p>
                </div>
              )}

              {/* Good Standing Message */}
              {store.status === "good" && (
                <div className="mb-4 bg-green-50 rounded-[12px] p-3 border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <p className="text-[12px] text-green-900">
                      No violations • Clean record • 위반 사항 없음
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {store.status !== "banned" && (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleIssuePenalty(store)}
                    className={`py-3 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                      store.status === "good"
                        ? "bg-gradient-to-r from-yellow-600 to-yellow-500 text-white"
                        : "bg-gradient-to-r from-red-600 to-red-500 text-white"
                    }`}
                  >
                    <Shield className="w-4 h-4" />
                    <span className="text-[13px]">Issue Penalty</span>
                  </button>
                  <button className="bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-[12px] shadow-sm hover:bg-blue-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-[13px]">View History</span>
                  </button>
                </div>
              )}

              {/* Banned Store Actions */}
              {store.status === "banned" && (
                <button className="w-full bg-gray-300 text-gray-600 py-3 rounded-[12px] flex items-center justify-center gap-2 cursor-not-allowed">
                  <Ban className="w-4 h-4" />
                  <span className="text-[13px]">Permanently Removed</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Penalty Modal */}
      {modalOpen && selectedStore && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5">
          <div className="bg-white rounded-[24px] shadow-2xl max-w-[400px] w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-5 rounded-t-[24px] relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-white text-[20px] mb-1">Apply Penalty</h2>
              <p className="text-white/90 text-[13px]">징계 적용 • Disciplinary Action</p>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              {/* Store Info */}
              <div className="bg-gray-50 rounded-[16px] p-4 border border-border mb-5">
                <p className="text-[11px] text-muted-foreground mb-1">Target Store</p>
                <h3 className="text-[18px] mb-1">{selectedStore.name}</h3>
                <p className="text-[13px] text-muted-foreground">{selectedStore.nameKo}</p>
                <div className="mt-2 pt-2 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">Current Status</span>
                  <span className={`text-[12px] ${
                    selectedStore.status === "good" ? "text-green-600" :
                    selectedStore.status === "warning" ? "text-yellow-600" :
                    "text-orange-600"
                  }`}>
                    {selectedStore.strikes} strikes
                  </span>
                </div>
              </div>

              {/* Penalty Type Selection */}
              <div className="mb-5">
                <label className="text-[13px] mb-3 block">
                  Penalty Type / 징계 유형
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setPenaltyType("warning")}
                    className={`w-full py-4 px-4 rounded-[12px] border-2 transition-all text-left ${
                      penaltyType === "warning"
                        ? "bg-yellow-50 border-yellow-400 shadow-md"
                        : "bg-white border-border hover:border-yellow-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                        <span className="text-[14px]">Issue Warning</span>
                      </div>
                      {penaltyType === "warning" && (
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground pl-6">
                      +1 strike • No service interruption • 경고 추가
                    </p>
                  </button>

                  <button
                    onClick={() => setPenaltyType("suspend")}
                    className={`w-full py-4 px-4 rounded-[12px] border-2 transition-all text-left ${
                      penaltyType === "suspend"
                        ? "bg-orange-50 border-orange-400 shadow-md"
                        : "bg-white border-border hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-[14px]">Suspend 3 Days</span>
                      </div>
                      {penaltyType === "suspend" && (
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground pl-6">
                      +1 strike • Store hidden for 3 days • 3일 정지
                    </p>
                  </button>

                  <button
                    onClick={() => setPenaltyType("ban")}
                    className={`w-full py-4 px-4 rounded-[12px] border-2 transition-all text-left ${
                      penaltyType === "ban"
                        ? "bg-red-50 border-red-400 shadow-md"
                        : "bg-white border-border hover:border-red-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Ban className="w-4 h-4 text-red-600" />
                        <span className="text-[14px]">Permanent Ban</span>
                      </div>
                      {penaltyType === "ban" && (
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground pl-6">
                      Permanent removal • Cannot reapply • 영구 제거
                    </p>
                  </button>
                </div>
              </div>

              {/* Reason Input */}
              <div className="mb-5">
                <label className="text-[13px] mb-2 block">
                  Reason / 사유
                </label>
                <textarea
                  value={penaltyReason}
                  onChange={(e) => setPenaltyReason(e.target.value)}
                  placeholder="Enter penalty reason... (e.g., Hygiene complaint verified)"
                  className="w-full px-4 py-3 bg-accent rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600 text-[13px] min-h-[100px] resize-none"
                />
                <p className="text-[10px] text-muted-foreground mt-1">
                  This reason will be sent to the store owner.
                  이 사유는 점주에게 전달됩니다.
                </p>
              </div>

              {/* Warning Message */}
              <div className="bg-red-50 rounded-[12px] p-3 border border-red-200 mb-5">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-red-900 mb-1">Warning</p>
                    <p className="text-[10px] text-red-700 leading-relaxed">
                      {penaltyType === "warning" && "Store owner will be notified. This action adds 1 strike."}
                      {penaltyType === "suspend" && "Store will be hidden from customers for 3 days. Owner will be notified."}
                      {penaltyType === "ban" && "⚠️ PERMANENT ACTION - Store will be removed from the platform and cannot reapply."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => {
                  setModalOpen(false);
                  // In real app, apply penalty here
                }}
                disabled={!penaltyReason.trim()}
                className={`w-full py-4 rounded-[16px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  penaltyReason.trim()
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Shield className="w-5 h-5" />
                <span className="text-[16px]">Apply Penalty</span>
              </button>
              <p className="text-center text-[11px] text-muted-foreground mt-2">
                징계 적용 • Action will be logged
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
