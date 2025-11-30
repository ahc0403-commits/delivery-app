import { useState } from "react";
import { 
  Shield, Crown, ChevronRight, Database, DollarSign, Building2, 
  Settings, BarChart3, Users, Store, TrendingUp, Search, FileText, 
  Wallet, AlertTriangle, Ban, Megaphone, CreditCard, GitBranch,
  Activity, Bell, LogOut, Moon, Sun
} from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

interface CategoryItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  labelEn: string;
  desc: string;
  badge?: string | number;
  badgeColor?: string;
}

interface Category {
  id: string;
  title: string;
  titleEn: string;
  icon: React.ReactNode;
  color: string;
  items: CategoryItem[];
}

const adminCategories: Category[] = [
  {
    id: "data",
    title: "데이터 자산",
    titleEn: "Data Assets",
    icon: <Database className="w-6 h-6" />,
    color: "from-purple-600 to-indigo-600",
    items: [
      { id: "admindash", icon: <Activity className="w-5 h-5" />, label: "데이터 커맨드 센터", labelEn: "Data Command Center", desc: "실시간 데이터 현황" },
      { id: "userprofiles", icon: <Users className="w-5 h-5" />, label: "유저 프로필 DB", labelEn: "User Profiles", desc: "8,234명 수집", badge: "8.2K" },
      { id: "menudatabase", icon: <Store className="w-5 h-5" />, label: "메뉴 데이터베이스", labelEn: "Menu Database", desc: "540개 SKU 추적" },
      { id: "searchintelligence", icon: <Search className="w-5 h-5" />, label: "검색 인텔리전스", labelEn: "Search Intelligence", desc: "125K+ 검색어 수집", badge: "💰" },
    ]
  },
  {
    id: "finance",
    title: "재무 관리",
    titleEn: "Financial Management",
    icon: <DollarSign className="w-6 h-6" />,
    color: "from-green-600 to-emerald-600",
    items: [
      { id: "adminfinance", icon: <Wallet className="w-5 h-5" />, label: "자금 승인", labelEn: "Financial Approvals", desc: "출금 및 정산 승인", badge: 3, badgeColor: "bg-red-500" },
      { id: "withdrawalapproval", icon: <CreditCard className="w-5 h-5" />, label: "출금 요청 관리", labelEn: "Withdrawal Requests", desc: "대기중 ₫15M" },
    ]
  },
  {
    id: "partners",
    title: "파트너 관리",
    titleEn: "Partner Management",
    icon: <Building2 className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-600",
    items: [
      { id: "adminfranchise", icon: <GitBranch className="w-5 h-5" />, label: "파트너 통합 관리", labelEn: "Partner Control", desc: "프랜차이즈 & 단위 영업점" },
      { id: "franchisesubscription", icon: <Crown className="w-5 h-5" />, label: "프랜차이즈 구독", labelEn: "Franchise Subscription", desc: "구독 플랜 관리" },
      { id: "admindiscipline", icon: <Ban className="w-5 h-5" />, label: "스토어 징계", labelEn: "Store Discipline", desc: "2개 경고 대기", badge: 2, badgeColor: "bg-orange-500" },
    ]
  },
  {
    id: "operations",
    title: "운영 관리",
    titleEn: "Operations",
    icon: <Settings className="w-6 h-6" />,
    color: "from-orange-600 to-red-600",
    items: [
      { id: "pendingactions", icon: <AlertTriangle className="w-5 h-5" />, label: "대기 작업", labelEn: "Pending Actions", desc: "승인 필요", badge: 5, badgeColor: "bg-red-500" },
      { id: "admindispute", icon: <FileText className="w-5 h-5" />, label: "분쟁 센터", labelEn: "Dispute Center", desc: "2건 진행중", badge: 2, badgeColor: "bg-orange-500" },
      { id: "adminadreview", icon: <Megaphone className="w-5 h-5" />, label: "광고 승인", labelEn: "Ad Review", desc: "3건 대기", badge: 3, badgeColor: "bg-green-500" },
    ]
  },
  {
    id: "analytics",
    title: "분석 & 인사이트",
    titleEn: "Analytics & Insights",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-cyan-600 to-blue-600",
    items: [
      { id: "adminanalytics", icon: <TrendingUp className="w-5 h-5" />, label: "글로벌 애널리틱스", labelEn: "Global Analytics", desc: "시장 인사이트 & B2B 데이터", badge: "$$$" },
    ]
  },
];

export function SuperAdminHomeScreen() {
  const { navigate } = useNavigation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>("data");
  const [darkMode, setDarkMode] = useState(false);

  const totalPending = 3 + 2 + 5 + 2 + 3; // Sum of all badges

  return (
    <div className={`h-screen flex flex-col ${darkMode ? "bg-gray-900" : "bg-slate-100"}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 px-5 py-5 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-white text-[20px]" style={{ fontWeight: 700 }}>Super Admin</h1>
              <p className="text-blue-200 text-[11px]">슈퍼 관리자 컨트롤 패널</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
                {totalPending}
              </span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "총 유저", value: "8.2K", icon: "👥" },
            { label: "활성 매장", value: "112", icon: "🏪" },
            { label: "오늘 주문", value: "1,847", icon: "📦" },
            { label: "대기 작업", value: totalPending.toString(), icon: "⚡" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
              <span className="text-[16px]">{stat.icon}</span>
              <p className="text-white text-[16px] mt-1" style={{ fontWeight: 700 }}>{stat.value}</p>
              <p className="text-blue-200 text-[9px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
        {adminCategories.map((category, categoryIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIdx * 0.1 }}
            className="mb-4"
          >
            {/* Category Header */}
            <button
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
              className={`w-full bg-gradient-to-r ${category.color} rounded-t-[16px] ${
                expandedCategory === category.id ? "" : "rounded-b-[16px]"
              } p-4 flex items-center justify-between shadow-lg transition-all`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <div className="text-left">
                  <h2 className="text-white text-[16px]" style={{ fontWeight: 600 }}>{category.title}</h2>
                  <p className="text-white/70 text-[11px]">{category.titleEn}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {category.items.some(item => item.badge && typeof item.badge === 'number') && (
                  <span className="px-2 py-1 bg-white/20 rounded-full text-white text-[11px]">
                    {category.items.filter(item => typeof item.badge === 'number').reduce((sum, item) => sum + (item.badge as number), 0)} 대기
                  </span>
                )}
                <ChevronRight 
                  className={`w-5 h-5 text-white transition-transform ${
                    expandedCategory === category.id ? "rotate-90" : ""
                  }`}
                />
              </div>
            </button>

            {/* Category Items */}
            {expandedCategory === category.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-b-[16px] shadow-lg overflow-hidden`}
              >
                {category.items.map((item, itemIdx) => (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id)}
                    className={`w-full p-4 flex items-center gap-4 hover:bg-accent transition-all active:scale-[0.99] ${
                      itemIdx !== 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color} text-white`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <p className={`text-[14px] ${darkMode ? "text-white" : "text-foreground"}`} style={{ fontWeight: 600 }}>
                          {item.label}
                        </p>
                        {item.badge && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] text-white ${
                            item.badgeColor || "bg-blue-500"
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground">{item.labelEn}</p>
                      <p className={`text-[10px] mt-0.5 ${darkMode ? "text-blue-300" : "text-blue-600"}`}>{item.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Quick Access Cards */}
        <div className="mt-6">
          <h3 className={`text-[14px] mb-3 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`}>
            ⚡ 빠른 접근 / Quick Access
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("pendingactions")}
              className="bg-gradient-to-br from-red-500 to-orange-500 rounded-[16px] p-4 text-white shadow-lg"
            >
              <AlertTriangle className="w-8 h-8 mb-2" />
              <p className="text-[14px]" style={{ fontWeight: 600 }}>긴급 대기</p>
              <p className="text-[11px] text-white/80">5건 승인 필요</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("adminanalytics")}
              className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[16px] p-4 text-white shadow-lg"
            >
              <TrendingUp className="w-8 h-8 mb-2" />
              <p className="text-[14px]" style={{ fontWeight: 600 }}>데이터 수익</p>
              <p className="text-[11px] text-white/80">B2B 인사이트 💰</p>
            </motion.button>
          </div>
        </div>

        {/* System Status */}
        <div className={`mt-6 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-[16px] p-4 shadow-lg`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`text-[14px] ${darkMode ? "text-white" : "text-foreground"}`} style={{ fontWeight: 600 }}>
              🖥️ 시스템 상태
            </h3>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px]">
              All Systems Operational
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: "API", status: "green", uptime: "99.9%" },
              { name: "DB", status: "green", uptime: "100%" },
              { name: "Payment", status: "yellow", uptime: "98.5%" },
              { name: "CDN", status: "green", uptime: "99.8%" },
            ].map((sys, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${
                  sys.status === "green" ? "bg-green-500" :
                  sys.status === "yellow" ? "bg-yellow-500" : "bg-red-500"
                }`} />
                <p className={`text-[11px] ${darkMode ? "text-white" : "text-foreground"}`}>{sys.name}</p>
                <p className="text-[9px] text-muted-foreground">{sys.uptime}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? "bg-gray-900" : "bg-white"} border-t border-border px-5 py-3 z-50`}>
        <div className="max-w-[430px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate("admindash")}
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center gap-2 mr-2 shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <Activity className="w-5 h-5" />
            <span className="text-[13px]" style={{ fontWeight: 600 }}>대시보드</span>
          </button>
          <button 
            onClick={() => navigate("splash")}
            className={`py-3 px-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"} rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all active:scale-95`}
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}



