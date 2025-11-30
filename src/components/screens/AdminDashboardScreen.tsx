import { TrendingUp, AlertCircle, Wallet, Shield, Users, Store, Settings, DollarSign, FileText, Megaphone, Ban, ChevronRight, Building2, ChevronLeft, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { motion } from "motion/react";

export function AdminDashboardScreen() {
  const { navigate, goBack } = useNavigation();
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-5 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <button 
            onClick={() => navigate("adminhome")}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">Data Command Center</h1>
            <p className="text-white/80 text-[11px]">데이터 종합 상황실 • The Assets</p>
          </div>
          <button 
            onClick={() => navigate("adminhome")}
            className="p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Badge */}
        <div className="bg-white/20 backdrop-blur-md rounded-[12px] px-4 py-2 border border-white/30 inline-flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-[11px]">Admin Mode • System Active</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Data Assets - The Real Value */}
        <div className="px-5 mt-5">
          <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 rounded-[20px] p-5 shadow-2xl mb-4 border-2 border-cyan-400/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center border border-cyan-400/50">
                <span className="text-[20px]">💎</span>
              </div>
              <div>
                <h2 className="text-white text-[14px]">The Data Monopoly</h2>
                <p className="text-cyan-200 text-[10px]">Our Most Valuable Asset</p>
              </div>
            </div>
            <p className="text-cyan-100 text-[11px] leading-relaxed">
              We collect User Behavior, Market Demand, Logistics Efficiency & Menu Trends. This data will be sold as "Premium Insights" to restaurants, investors & market researchers.
            </p>
          </div>

          <h2 className="text-[14px] text-muted-foreground mb-3 flex items-center gap-2">
            <span>📊</span>
            <span>데이터 자산 현황 / Data Assets Overview</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {/* Total User Profiles */}
            <button
              onClick={() => navigate("userprofiles")}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-[16px] p-5 shadow-md border-2 border-purple-300 hover:shadow-lg transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-[10px] text-purple-700">User Profiles</span>
              </div>
              <p className="text-[26px] text-purple-900 mb-1">8,234</p>
              <p className="text-[11px] text-purple-600">Demographics Collected</p>
            </button>

            {/* Menu Item Database */}
            <button
              onClick={() => navigate("menudatabase")}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-[16px] p-5 shadow-md border-2 border-orange-300 hover:shadow-lg transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Store className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-[10px] text-orange-700">Menu Database</span>
              </div>
              <p className="text-[26px] text-orange-900 mb-1">540</p>
              <p className="text-[11px] text-orange-600">SKUs Tracked</p>
            </button>

            {/* Search Queries */}
            <button
              onClick={() => navigate("searchintelligence")}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[16px] p-5 shadow-md border-2 border-cyan-300 col-span-2 hover:shadow-lg transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="text-[10px] text-cyan-700">Search Intelligence</span>
              </div>
              <p className="text-[32px] text-cyan-900 mb-1">125,000+</p>
              <p className="text-[11px] text-cyan-600">Accumulated Search Queries • Consumer Intent Data 💰</p>
            </button>
          </div>

          {/* Pending Actions - Smaller */}
          <button
            onClick={() => navigate("pendingactions")}
            className="w-full bg-gradient-to-br from-red-50 to-orange-50 rounded-[12px] p-4 shadow-md border-2 border-red-200 relative mb-5 hover:shadow-lg transition-all active:scale-95"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="text-[14px] text-red-900">5 Pending Actions</p>
                  <p className="text-[11px] text-red-600">Requires Approval</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>

        {/* Quick Actions Grid */}
        <div className="px-5">
          <h2 className="text-[14px] text-muted-foreground mb-3">빠른 작업 / Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Funds Approval */}
            <button 
              onClick={() => navigate("adminfinance")}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[16px] p-5 shadow-md border-2 border-blue-200 hover:shadow-lg transition-all active:scale-95 relative"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Wallet className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-[14px] mb-1">자금 승인</h3>
              <p className="text-[11px] text-muted-foreground">Funds</p>
              <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                3
              </div>
            </button>

            {/* Dispute Center */}
            <button 
              onClick={() => navigate("admindispute")}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-[16px] p-5 shadow-md border-2 border-orange-200 hover:shadow-lg transition-all active:scale-95 relative"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-[14px] mb-1">분쟁 센터</h3>
              <p className="text-[11px] text-muted-foreground">Disputes</p>
              <div className="absolute top-3 right-3 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                2
              </div>
            </button>

            {/* Franchise Control */}
            <button 
              onClick={() => navigate("adminfranchise")}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[16px] p-5 shadow-md border-2 border-purple-200 hover:shadow-lg transition-all active:scale-95"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Store className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-[14px] mb-1">프랜차이즈</h3>
              <p className="text-[11px] text-muted-foreground">Franchise</p>
            </button>

            {/* Data Lab - THE MONEY MAKER */}
            <button 
              onClick={() => navigate("adminanalytics")}
              className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-[16px] p-5 shadow-md border-2 border-cyan-300 hover:shadow-lg transition-all active:scale-95 relative"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <TrendingUp className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-[14px] mb-1">데이터 연구소</h3>
              <p className="text-[11px] text-muted-foreground">Data Lab 💰</p>
              <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] px-2 py-0.5 rounded-full animate-pulse">
                $$$
              </div>
            </button>

            {/* Ad Review */}
            <button 
              onClick={() => navigate("adminadreview")}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[16px] p-5 shadow-md border-2 border-green-200 hover:shadow-lg transition-all active:scale-95 relative"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Megaphone className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-[14px] mb-1">광고 승인</h3>
              <p className="text-[11px] text-muted-foreground">Ad Review</p>
              <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                3
              </div>
            </button>

            {/* Store Discipline */}
            <button 
              onClick={() => navigate("admindiscipline")}
              className="bg-gradient-to-br from-red-50 to-rose-50 rounded-[16px] p-5 shadow-md border-2 border-red-200 hover:shadow-lg transition-all active:scale-95 relative"
            >
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Ban className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-[14px] mb-1">스토어 징계</h3>
              <p className="text-[11px] text-muted-foreground">Discipline</p>
              <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                2
              </div>
            </button>
          </div>
        </div>

        {/* Partner Management Section */}
        <div className="px-5 mt-6">
          <h2 className="text-[14px] text-muted-foreground mb-3">파트너 관리 / Partner Management</h2>
          <motion.button 
            onClick={() => navigate("adminfranchise")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[16px] p-5 shadow-lg text-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-[16px] mb-1" style={{ fontWeight: 600 }}>파트너 통합 관리</h3>
                  <p className="text-[12px] text-white/80">프랜차이즈 & 단위 영업점 관리</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">🏢 4 프랜차이즈</span>
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-[10px]">🏪 112 매장</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-white/80" />
            </div>
          </motion.button>
        </div>

        {/* Recent Activity Feed */}
        <div className="px-5 mt-6">
          <h2 className="text-[14px] text-muted-foreground mb-3">최근 활동 / Recent Activity</h2>
          <div className="bg-white rounded-[16px] shadow-sm border border-border divide-y divide-border">
            <div className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1">Withdrawal approved for Sindang Tteokbokki</p>
                <p className="text-[11px] text-muted-foreground">₫5,000,000 • 5 mins ago</p>
              </div>
            </div>

            <div className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1">Dispute resolved - Order #999</p>
                <p className="text-[11px] text-muted-foreground">Platform refund • 15 mins ago</p>
              </div>
            </div>

            <div className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1">New store application received</p>
                <p className="text-[11px] text-muted-foreground">K-Bulgogi BBQ • 1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="mx-5 mt-5 mb-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-[16px] p-5 text-white">
          <h3 className="text-[14px] mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>시스템 상태 / System Health</span>
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1"></div>
              <p className="text-[10px] text-white/80">API</p>
              <p className="text-[12px]">99.9%</p>
            </div>
            <div>
              <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1"></div>
              <p className="text-[10px] text-white/80">Database</p>
              <p className="text-[12px]">Optimal</p>
            </div>
            <div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mb-1"></div>
              <p className="text-[10px] text-white/80">Payment</p>
              <p className="text-[12px]">95%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Admin Style */}
      <BottomNavBar />
    </div>
  );
}