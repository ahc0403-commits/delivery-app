import { useState } from "react";
import { ChevronLeft, Store, Building2, Crown, Shield, Settings, TrendingUp, TrendingDown, AlertTriangle, Ban, Award, Gift, Percent, ChevronRight, Users, Star, DollarSign, Clock, CheckCircle, XCircle, Search, Filter, BarChart3, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

type TabType = "franchises" | "stores" | "permissions";
type EntityStatus = "excellent" | "good" | "warning" | "suspended" | "banned";

interface Partner {
  id: string;
  name: string;
  nameKo: string;
  type: "franchise" | "store";
  status: EntityStatus;
  stores?: number;
  rating: number;
  revenue: string;
  commission: number;
  strikes: number;
  lastActivity: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
}

const partners: Partner[] = [
  { id: "F001", name: "K-Chicken", nameKo: "K-치킨", type: "franchise", status: "excellent", stores: 50, rating: 4.8, revenue: "₫2.5B", commission: 12, strikes: 0, lastActivity: "1h ago", tier: "platinum" },
  { id: "F002", name: "Seoul BBQ", nameKo: "서울 BBQ", type: "franchise", status: "good", stores: 32, rating: 4.5, revenue: "₫1.8B", commission: 14, strikes: 1, lastActivity: "3h ago", tier: "gold" },
  { id: "F003", name: "Busan Express", nameKo: "부산 익스프레스", type: "franchise", status: "warning", stores: 28, rating: 4.1, revenue: "₫1.2B", commission: 15, strikes: 2, lastActivity: "5h ago", tier: "silver" },
  { id: "S001", name: "Kim's Kitchen", nameKo: "김's 키친", type: "store", status: "good", rating: 4.6, revenue: "₫85M", commission: 18, strikes: 0, lastActivity: "30m ago", tier: "gold" },
  { id: "S002", name: "Hanok Bibimbap", nameKo: "한옥 비빔밥", type: "store", status: "excellent", rating: 4.9, revenue: "₫120M", commission: 15, strikes: 0, lastActivity: "1h ago", tier: "platinum" },
  { id: "S003", name: "Bad Tteokbokki", nameKo: "나쁜 떡볶이", type: "store", status: "suspended", rating: 3.2, revenue: "₫25M", commission: 20, strikes: 3, lastActivity: "2d ago", tier: "bronze" },
  { id: "F004", name: "Toxic Restaurant Chain", nameKo: "독성 레스토랑 체인", type: "franchise", status: "banned", stores: 0, rating: 2.1, revenue: "₫0", commission: 0, strikes: 5, lastActivity: "Banned", tier: "bronze" },
];

const tierColors = {
  platinum: { bg: "from-purple-100 to-purple-50", border: "border-purple-300", text: "text-purple-700", icon: "👑" },
  gold: { bg: "from-yellow-100 to-yellow-50", border: "border-yellow-300", text: "text-yellow-700", icon: "🥇" },
  silver: { bg: "from-gray-100 to-gray-50", border: "border-gray-300", text: "text-gray-600", icon: "🥈" },
  bronze: { bg: "from-orange-100 to-orange-50", border: "border-orange-300", text: "text-orange-700", icon: "🥉" },
};

const statusConfig = {
  excellent: { bg: "bg-green-100", text: "text-green-700", label: "Excellent", icon: <Star className="w-3 h-3" /> },
  good: { bg: "bg-blue-100", text: "text-blue-700", label: "Good", icon: <CheckCircle className="w-3 h-3" /> },
  warning: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Warning", icon: <AlertTriangle className="w-3 h-3" /> },
  suspended: { bg: "bg-orange-100", text: "text-orange-700", label: "Suspended", icon: <Clock className="w-3 h-3" /> },
  banned: { bg: "bg-red-100", text: "text-red-700", label: "Banned", icon: <Ban className="w-3 h-3" /> },
};

export function FranchiseControlScreen() {
  const { goBack, navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<TabType>("franchises");
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionType, setActionType] = useState<"reward" | "penalty" | "permission">("reward");
  
  const franchises = partners.filter(p => p.type === "franchise");
  const stores = partners.filter(p => p.type === "store");

  const handleAction = (partner: Partner, type: "reward" | "penalty" | "permission") => {
    setSelectedPartner(partner);
    setActionType(type);
    setShowActionModal(true);
  };

  const stats = {
    totalFranchises: franchises.length,
    totalStores: stores.length + franchises.reduce((sum, f) => sum + (f.stores || 0), 0),
    activePartners: partners.filter(p => p.status !== "banned" && p.status !== "suspended").length,
    warningPartners: partners.filter(p => p.status === "warning").length,
    suspendedPartners: partners.filter(p => p.status === "suspended").length,
  };
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <button 
            onClick={goBack}
            className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-0.5">파트너 통합 관리</h1>
            <p className="text-white/70 text-[11px]">Partner Control Center • Coupang-style Management</p>
          </div>
          <button 
            onClick={() => navigate("adminhome")}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="text-[18px] text-white">{stats.totalFranchises}</p>
            <p className="text-[8px] text-white/70">프랜차이즈</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="text-[18px] text-white">{stats.totalStores}</p>
            <p className="text-[8px] text-white/70">총 매장</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="text-[18px] text-green-300">{stats.activePartners}</p>
            <p className="text-[8px] text-white/70">정상 운영</p>
      </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="text-[18px] text-yellow-300">{stats.warningPartners}</p>
            <p className="text-[8px] text-white/70">경고</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
            <p className="text-[18px] text-red-300">{stats.suspendedPartners}</p>
            <p className="text-[8px] text-white/70">정지</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-border px-5 py-3">
        <div className="flex gap-2">
          {[
            { id: "franchises" as TabType, label: "프랜차이즈", icon: <Building2 className="w-4 h-4" /> },
            { id: "stores" as TabType, label: "단위 영업점", icon: <Store className="w-4 h-4" /> },
            { id: "permissions" as TabType, label: "권한 설정", icon: <Shield className="w-4 h-4" /> },
          ].map(tab => (
              <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all text-[12px] ${
                activeTab === tab.id
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-accent text-muted-foreground hover:bg-accent/80"
              }`}
            >
              {tab.icon}
              {tab.label}
              </button>
            ))}
          </div>
        </div>

      {/* Search & Filter */}
      <div className="bg-white border-b border-border px-5 py-3 flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="파트너 검색..."
            className="w-full pl-10 pr-4 py-2.5 bg-accent rounded-xl border border-border text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          />
        </div>
        <button className="px-4 py-2.5 bg-accent rounded-xl border border-border flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span className="text-[12px]">필터</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 pb-6">
        {/* Franchises Tab */}
        {activeTab === "franchises" && (
          <div className="space-y-3">
            {franchises.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-gradient-to-br ${tierColors[partner.tier].bg} rounded-[16px] border-2 ${tierColors[partner.tier].border} shadow-md overflow-hidden`}
              >
                <div className="p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-[24px]">
                        {tierColors[partner.tier].icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[15px]" style={{ fontWeight: 600 }}>{partner.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] ${statusConfig[partner.status].bg} ${statusConfig[partner.status].text} flex items-center gap-1`}>
                            {statusConfig[partner.status].icon}
                            {statusConfig[partner.status].label}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">{partner.nameKo}</p>
              </div>
              </div>
              <div className="text-right">
                      <p className="text-[10px] text-muted-foreground">매장 수</p>
                      <p className="text-[18px]" style={{ fontWeight: 700 }}>{partner.stores}</p>
              </div>
            </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-[14px]" style={{ fontWeight: 600 }}>{partner.rating}</p>
                      <p className="text-[9px] text-muted-foreground">⭐ 평점</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-[12px]" style={{ fontWeight: 600 }}>{partner.revenue}</p>
                      <p className="text-[9px] text-muted-foreground">💰 매출</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-[14px]" style={{ fontWeight: 600 }}>{partner.commission}%</p>
                      <p className="text-[9px] text-muted-foreground">📊 수수료</p>
                  </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className={`text-[14px] ${partner.strikes > 0 ? "text-red-600" : "text-green-600"}`} style={{ fontWeight: 600 }}>{partner.strikes}</p>
                      <p className="text-[9px] text-muted-foreground">⚠️ 경고</p>
                </div>
                </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleAction(partner, "reward")}
                      disabled={partner.status === "banned"}
                      className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                        partner.status === "banned"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      <Gift className="w-4 h-4" />
                      <span className="text-[11px]">보상</span>
                    </button>
                    <button
                      onClick={() => handleAction(partner, "penalty")}
                      disabled={partner.status === "banned"}
                      className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                        partner.status === "banned"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-red-500 text-white hover:bg-red-600"
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-[11px]">제재</span>
                    </button>
                    <button
                      onClick={() => handleAction(partner, "permission")}
                      className="py-2.5 bg-blue-500 text-white rounded-xl flex items-center justify-center gap-1.5 hover:bg-blue-600 transition-all active:scale-95"
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-[11px]">권한</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
              </div>
        )}

        {/* Stores Tab */}
        {activeTab === "stores" && (
          <div className="space-y-3">
            {stores.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-gradient-to-br ${tierColors[partner.tier].bg} rounded-[16px] border-2 ${tierColors[partner.tier].border} shadow-md overflow-hidden`}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-[24px]">
                        {tierColors[partner.tier].icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[15px]" style={{ fontWeight: 600 }}>{partner.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] ${statusConfig[partner.status].bg} ${statusConfig[partner.status].text} flex items-center gap-1`}>
                            {statusConfig[partner.status].icon}
                            {statusConfig[partner.status].label}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground">{partner.nameKo} • ID: {partner.id}</p>
              </div>
            </div>
          </div>

                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-[14px]" style={{ fontWeight: 600 }}>{partner.rating}</p>
                      <p className="text-[9px] text-muted-foreground">⭐ 평점</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-[12px]" style={{ fontWeight: 600 }}>{partner.revenue}</p>
                      <p className="text-[9px] text-muted-foreground">💰 매출</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className="text-[14px]" style={{ fontWeight: 600 }}>{partner.commission}%</p>
                      <p className="text-[9px] text-muted-foreground">📊 수수료</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-2 text-center">
                      <p className={`text-[14px] ${partner.strikes > 0 ? "text-red-600" : "text-green-600"}`} style={{ fontWeight: 600 }}>{partner.strikes}</p>
                      <p className="text-[9px] text-muted-foreground">⚠️ 경고</p>
                    </div>
          </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleAction(partner, "reward")}
                      disabled={partner.status === "banned"}
                      className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                        partner.status === "banned"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      <Gift className="w-4 h-4" />
                      <span className="text-[11px]">보상</span>
                    </button>
                    <button
                      onClick={() => handleAction(partner, "penalty")}
                      disabled={partner.status === "banned"}
                      className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                        partner.status === "banned"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-red-500 text-white hover:bg-red-600"
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-[11px]">제재</span>
                    </button>
                    <button
                      onClick={() => handleAction(partner, "permission")}
                      className="py-2.5 bg-blue-500 text-white rounded-xl flex items-center justify-center gap-1.5 hover:bg-blue-600 transition-all active:scale-95"
                    >
                      <Settings className="w-4 h-4" />
                      <span className="text-[11px]">권한</span>
                    </button>
              </div>
            </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Permissions Tab */}
        {activeTab === "permissions" && (
          <div className="space-y-4">
            {/* Global Permission Settings */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[16px] border-2 border-blue-200 p-5">
              <h3 className="text-[14px] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                <Shield className="w-5 h-5 text-blue-600" />
                글로벌 권한 설정 / Global Permission Settings
              </h3>

              <div className="space-y-3">
                {[
                  { label: "메뉴 가격 변경", labelEn: "Menu Price Change", franchise: true, store: false },
                  { label: "운영 시간 변경", labelEn: "Operating Hours", franchise: true, store: true },
                  { label: "프로모션 생성", labelEn: "Create Promotions", franchise: true, store: false },
                  { label: "광고 신청", labelEn: "Ad Requests", franchise: true, store: true },
                  { label: "배달비 설정", labelEn: "Delivery Fee", franchise: true, store: false },
                  { label: "매장 휴무 설정", labelEn: "Store Closure", franchise: true, store: true },
                  { label: "직원 관리", labelEn: "Staff Management", franchise: true, store: true },
                  { label: "정산 조회", labelEn: "View Settlements", franchise: true, store: true },
                ].map((perm, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-[13px]">{perm.label}</p>
                      <p className="text-[10px] text-muted-foreground">{perm.labelEn}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <div className={`w-10 h-6 rounded-full flex items-center ${perm.franchise ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"} p-0.5`}>
                          <div className="w-5 h-5 bg-white rounded-full shadow" />
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-1">FC</p>
                      </div>
                      <div className="text-center">
                        <div className={`w-10 h-6 rounded-full flex items-center ${perm.store ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"} p-0.5`}>
                          <div className="w-5 h-5 bg-white rounded-full shadow" />
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-1">개인</p>
                      </div>
                    </div>
              </div>
                ))}
          </div>
        </div>

            {/* Tier-based Commission */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[16px] border-2 border-yellow-200 p-5">
              <h3 className="text-[14px] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                <DollarSign className="w-5 h-5 text-yellow-600" />
                등급별 수수료 정책 / Tier-based Commission
              </h3>

              <div className="space-y-2">
                {[
                  { tier: "Platinum", icon: "👑", commission: "12%", benefits: "프리미엄 노출, 광고비 20% 할인" },
                  { tier: "Gold", icon: "🥇", commission: "15%", benefits: "우선 노출, 광고비 10% 할인" },
                  { tier: "Silver", icon: "🥈", commission: "18%", benefits: "일반 노출" },
                  { tier: "Bronze", icon: "🥉", commission: "20%", benefits: "기본 서비스" },
                ].map((t, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[24px]">{t.icon}</span>
                      <div>
                        <p className="text-[13px]" style={{ fontWeight: 600 }}>{t.tier}</p>
                        <p className="text-[10px] text-muted-foreground">{t.benefits}</p>
                      </div>
              </div>
                    <div className="text-right">
                      <p className="text-[16px]" style={{ fontWeight: 700 }}>{t.commission}</p>
                      <p className="text-[9px] text-muted-foreground">수수료</p>
              </div>
              </div>
                ))}
            </div>
          </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => navigate("admindiscipline")}
                className="bg-red-500 text-white rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-red-600 transition-all active:scale-95"
              >
                <Ban className="w-6 h-6" />
                <span className="text-[12px]">징계 관리</span>
                <span className="text-[10px] opacity-80">Store Discipline</span>
              </button>
              <button 
                onClick={() => navigate("adminadreview")}
                className="bg-blue-500 text-white rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-blue-600 transition-all active:scale-95"
              >
                <BarChart3 className="w-6 h-6" />
                <span className="text-[12px]">광고 승인</span>
                <span className="text-[10px] opacity-80">Ad Approval</span>
              </button>
            </div>
          </div>
        )}
        </div>

      {/* Action Modal */}
      {showActionModal && selectedPartner && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[24px] shadow-2xl max-w-[400px] w-full max-h-[85vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className={`px-6 py-5 rounded-t-[24px] ${
              actionType === "reward" ? "bg-gradient-to-r from-green-600 to-emerald-500" :
              actionType === "penalty" ? "bg-gradient-to-r from-red-600 to-red-500" :
              "bg-gradient-to-r from-blue-600 to-indigo-500"
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white text-[18px]" style={{ fontWeight: 600 }}>
                    {actionType === "reward" && "🎁 보상 지급"}
                    {actionType === "penalty" && "⚠️ 제재 조치"}
                    {actionType === "permission" && "🔐 권한 설정"}
                  </h2>
                  <p className="text-white/80 text-[12px]">{selectedPartner.name}</p>
              </div>
                <button
                  onClick={() => setShowActionModal(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              {actionType === "reward" && (
                <div className="space-y-4">
                  <p className="text-[13px] text-muted-foreground mb-4">
                    우수 파트너에게 지급할 보상을 선택하세요
                  </p>
                  {[
                    { icon: "💰", label: "수수료 할인", desc: "다음 달 수수료 5% 할인", value: "-5%" },
                    { icon: "🎯", label: "프리미엄 노출", desc: "1주일 메인 화면 상위 노출", value: "7일" },
                    { icon: "📣", label: "광고 크레딧", desc: "₫500,000 광고 크레딧 지급", value: "₫500K" },
                    { icon: "⭐", label: "등급 상향", desc: "파트너 등급 한 단계 상향", value: "↑1" },
                    { icon: "🏆", label: "우수 파트너 배지", desc: "3개월 우수 파트너 인증", value: "Badge" },
                  ].map((reward, idx) => (
                    <button key={idx} className="w-full p-4 bg-green-50 rounded-xl border-2 border-green-200 flex items-center gap-4 hover:bg-green-100 transition-all active:scale-[0.98]">
                      <span className="text-[28px]">{reward.icon}</span>
                      <div className="flex-1 text-left">
                        <p className="text-[14px]" style={{ fontWeight: 600 }}>{reward.label}</p>
                        <p className="text-[11px] text-muted-foreground">{reward.desc}</p>
                      </div>
                      <span className="text-[14px] text-green-600" style={{ fontWeight: 700 }}>{reward.value}</span>
                    </button>
                  ))}
                </div>
              )}

              {actionType === "penalty" && (
                <div className="space-y-4">
                  <p className="text-[13px] text-muted-foreground mb-4">
                    위반 파트너에게 적용할 제재를 선택하세요
                  </p>
                  {[
                    { icon: "⚠️", label: "경고", desc: "+1 경고 / Warning Strike", severity: "low" },
                    { icon: "💸", label: "수수료 인상", desc: "다음 달 수수료 +3%", severity: "medium" },
                    { icon: "📉", label: "노출 제한", desc: "검색 순위 하락 (7일)", severity: "medium" },
                    { icon: "⏸️", label: "일시 정지", desc: "3일간 주문 접수 중단", severity: "high" },
                    { icon: "🚫", label: "영구 정지", desc: "플랫폼 영구 퇴출", severity: "critical" },
                  ].map((penalty, idx) => (
                    <button key={idx} className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all active:scale-[0.98] ${
                      penalty.severity === "low" ? "bg-yellow-50 border-yellow-200 hover:bg-yellow-100" :
                      penalty.severity === "medium" ? "bg-orange-50 border-orange-200 hover:bg-orange-100" :
                      penalty.severity === "high" ? "bg-red-50 border-red-200 hover:bg-red-100" :
                      "bg-red-100 border-red-300 hover:bg-red-200"
                    }`}>
                      <span className="text-[28px]">{penalty.icon}</span>
                      <div className="flex-1 text-left">
                        <p className="text-[14px]" style={{ fontWeight: 600 }}>{penalty.label}</p>
                        <p className="text-[11px] text-muted-foreground">{penalty.desc}</p>
              </div>
                    </button>
                  ))}
              </div>
              )}

              {actionType === "permission" && (
                <div className="space-y-4">
                  <p className="text-[13px] text-muted-foreground mb-4">
                    {selectedPartner.name}의 권한을 설정하세요
                  </p>
                  {[
                    { label: "메뉴 관리", desc: "가격 및 메뉴 수정", enabled: true },
                    { label: "프로모션 생성", desc: "할인 이벤트 등록", enabled: selectedPartner.tier === "platinum" || selectedPartner.tier === "gold" },
                    { label: "광고 신청", desc: "유료 광고 신청", enabled: true },
                    { label: "정산 조회", desc: "매출 및 정산 내역", enabled: true },
                    { label: "고객 데이터", desc: "주문 고객 정보 접근", enabled: selectedPartner.tier === "platinum" },
                    { label: "API 접근", desc: "외부 시스템 연동", enabled: selectedPartner.tier === "platinum" },
                  ].map((perm, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-accent rounded-xl">
                      <div>
                        <p className="text-[13px]" style={{ fontWeight: 500 }}>{perm.label}</p>
                        <p className="text-[10px] text-muted-foreground">{perm.desc}</p>
            </div>
                      <div className={`w-12 h-7 rounded-full flex items-center ${perm.enabled ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"} p-1 cursor-pointer`}>
                        <div className="w-5 h-5 bg-white rounded-full shadow" />
          </div>
        </div>
                  ))}
      </div>
              )}

              {/* Apply Button */}
          <button 
                onClick={() => setShowActionModal(false)}
                className={`w-full mt-6 py-4 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  actionType === "reward" ? "bg-green-600 text-white hover:bg-green-700" :
                  actionType === "penalty" ? "bg-red-600 text-white hover:bg-red-700" :
                  "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-[15px]" style={{ fontWeight: 600 }}>적용하기</span>
          </button>
          </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}