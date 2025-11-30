import { ChevronLeft, TrendingUp, TrendingDown, ArrowRight, Store, DollarSign, ShoppingCart, Star, Clock, Users, BarChart3, Minus } from "lucide-react";
import { useNavigation } from "../../App";
import { useState } from "react";
import { motion } from "motion/react";

type CompareType = "revenue" | "orders" | "rating" | "growth";

const branchData = [
  { 
    id: 1, 
    name: "K-Chicken District 1", 
    revenue: 450, 
    revenueLastMonth: 420,
    orders: 892, 
    ordersLastMonth: 845,
    rating: 4.9, 
    avgOrderValue: 212,
    prepTime: 12,
    returnRate: 68,
  },
  { 
    id: 2, 
    name: "K-Chicken District 7", 
    revenue: 380, 
    revenueLastMonth: 320,
    orders: 756, 
    ordersLastMonth: 680,
    rating: 4.9, 
    avgOrderValue: 198,
    prepTime: 14,
    returnRate: 62,
  },
  { 
    id: 3, 
    name: "K-Chicken District 3", 
    revenue: 360, 
    revenueLastMonth: 340,
    orders: 712, 
    ordersLastMonth: 698,
    rating: 4.7, 
    avgOrderValue: 185,
    prepTime: 15,
    returnRate: 55,
  },
  { 
    id: 4, 
    name: "K-Chicken Binh Thanh", 
    revenue: 320, 
    revenueLastMonth: 310,
    orders: 645, 
    ordersLastMonth: 612,
    rating: 4.8, 
    avgOrderValue: 178,
    prepTime: 16,
    returnRate: 58,
  },
  { 
    id: 5, 
    name: "K-Chicken Phu Nhuan", 
    revenue: 285, 
    revenueLastMonth: 295,
    orders: 578, 
    ordersLastMonth: 602,
    rating: 4.6, 
    avgOrderValue: 165,
    prepTime: 18,
    returnRate: 48,
  },
  { 
    id: 6, 
    name: "K-Chicken District 9", 
    revenue: 245, 
    revenueLastMonth: 260,
    orders: 498, 
    ordersLastMonth: 520,
    rating: 4.5, 
    avgOrderValue: 155,
    prepTime: 20,
    returnRate: 42,
  },
];

// Calculate averages
const avgRevenue = Math.round(branchData.reduce((sum, b) => sum + b.revenue, 0) / branchData.length);
const avgOrders = Math.round(branchData.reduce((sum, b) => sum + b.orders, 0) / branchData.length);
const avgRating = (branchData.reduce((sum, b) => sum + b.rating, 0) / branchData.length).toFixed(1);
const avgPrepTime = Math.round(branchData.reduce((sum, b) => sum + b.prepTime, 0) / branchData.length);

export function FranchiseCompareScreen() {
  const { navigate } = useNavigation();
  const [compareType, setCompareType] = useState<CompareType>("revenue");
  const [selectedBranches, setSelectedBranches] = useState<number[]>([1, 2]);

  const getGrowth = (current: number, previous: number) => {
    const growth = ((current - previous) / previous * 100).toFixed(1);
    return parseFloat(growth);
  };

  const toggleBranch = (id: number) => {
    if (selectedBranches.includes(id)) {
      if (selectedBranches.length > 1) {
        setSelectedBranches(selectedBranches.filter(b => b !== id));
      }
    } else {
      if (selectedBranches.length < 4) {
        setSelectedBranches([...selectedBranches, id]);
      }
    }
  };

  const selectedData = branchData.filter(b => selectedBranches.includes(b.id));
  const maxRevenue = Math.max(...branchData.map(b => b.revenue));
  const maxOrders = Math.max(...branchData.map(b => b.orders));

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-5 py-4 shadow-2xl border-b border-cyan-500/30">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={() => navigate("franchisereport")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-cyan-100 text-[18px] mb-1 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span>지점 비교 분석</span>
            </h1>
            <p className="text-cyan-400/80 text-[11px]">Branch Comparison Analytics</p>
          </div>
        </div>
      </div>

      {/* Compare Type Tabs */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: "revenue", label: "매출", icon: DollarSign, color: "green" },
            { id: "orders", label: "주문수", icon: ShoppingCart, color: "blue" },
            { id: "rating", label: "평점", icon: Star, color: "yellow" },
            { id: "growth", label: "성장률", icon: TrendingUp, color: "purple" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCompareType(tab.id as CompareType)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[10px] border transition-all ${
                compareType === tab.id
                  ? `bg-${tab.color}-500/20 text-${tab.color}-300 border-${tab.color}-400/50 shadow-lg`
                  : "bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-800"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-[12px]">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Branch Selector */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-cyan-300 text-[13px]">비교할 지점 선택 (최대 4개)</p>
            <p className="text-slate-500 text-[11px]">{selectedBranches.length}/4 선택됨</p>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {branchData.map((branch) => (
              <button
                key={branch.id}
                onClick={() => toggleBranch(branch.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] transition-all ${
                  selectedBranches.includes(branch.id)
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-slate-800 text-slate-400 border border-slate-700 hover:border-cyan-500/50"
                }`}
              >
                {branch.name.replace("K-Chicken ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="px-5 space-y-4">
          {/* Revenue Comparison */}
          {compareType === "revenue" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-[20px] border border-green-500/30 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 px-5 py-4 border-b border-green-500/30">
                <h3 className="text-green-100 text-[15px] flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  월 매출 비교
                </h3>
                <p className="text-green-400/70 text-[11px]">Monthly Revenue Comparison</p>
              </div>
              
              <div className="p-5 space-y-4">
                {/* Average Line */}
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-[12px]">전체 평균 / Average</span>
                    <span className="text-cyan-400 text-[16px]" style={{ fontWeight: 600 }}>₫{avgRevenue}M</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500/50 w-full" />
                  </div>
                </div>

                {/* Branch Bars */}
                {selectedData.map((branch, idx) => {
                  const growth = getGrowth(branch.revenue, branch.revenueLastMonth);
                  const percentage = (branch.revenue / maxRevenue) * 100;
                  const vsAvg = ((branch.revenue - avgRevenue) / avgRevenue * 100).toFixed(0);
                  
                  return (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] ${
                            idx === 0 ? "bg-yellow-500/20 text-yellow-400" :
                            idx === 1 ? "bg-gray-500/20 text-gray-400" :
                            idx === 2 ? "bg-orange-500/20 text-orange-400" :
                            "bg-blue-500/20 text-blue-400"
                          }`}>
                            {idx + 1}
                          </div>
                          <span className="text-slate-200 text-[13px]">{branch.name.replace("K-Chicken ", "")}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 text-[18px]" style={{ fontWeight: 700 }}>₫{branch.revenue}M</p>
                          <div className="flex items-center gap-2 justify-end">
                            {growth >= 0 ? (
                              <span className="text-green-400 text-[11px] flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />+{growth}%
                              </span>
                            ) : (
                              <span className="text-red-400 text-[11px] flex items-center gap-1">
                                <TrendingDown className="w-3 h-3" />{growth}%
                              </span>
                            )}
                            <span className={`text-[10px] ${parseInt(vsAvg) >= 0 ? 'text-cyan-400' : 'text-orange-400'}`}>
                              평균{parseInt(vsAvg) >= 0 ? '+' : ''}{vsAvg}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                        />
                        {/* Average marker */}
                        <div 
                          className="absolute top-0 bottom-0 w-0.5 bg-cyan-400"
                          style={{ left: `${(avgRevenue / maxRevenue) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-[10px] text-slate-500">
                        <span>전월: ₫{branch.revenueLastMonth}M</span>
                        <span>차이: {growth >= 0 ? '+' : ''}₫{branch.revenue - branch.revenueLastMonth}M</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Orders Comparison */}
          {compareType === "orders" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-[20px] border border-blue-500/30 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 px-5 py-4 border-b border-blue-500/30">
                <h3 className="text-blue-100 text-[15px] flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-400" />
                  월 주문수 비교
                </h3>
                <p className="text-blue-400/70 text-[11px]">Monthly Orders Comparison</p>
              </div>
              
              <div className="p-5 space-y-4">
                {/* Average */}
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-[12px]">전체 평균</span>
                    <span className="text-cyan-400 text-[16px]" style={{ fontWeight: 600 }}>{avgOrders}건</span>
                  </div>
                </div>

                {selectedData.map((branch, idx) => {
                  const growth = getGrowth(branch.orders, branch.ordersLastMonth);
                  const percentage = (branch.orders / maxOrders) * 100;
                  
                  return (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-200 text-[13px]">{branch.name.replace("K-Chicken ", "")}</span>
                        <div className="text-right">
                          <p className="text-blue-400 text-[18px]" style={{ fontWeight: 700 }}>{branch.orders}건</p>
                          <span className={`text-[11px] flex items-center gap-1 justify-end ${growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {growth >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {growth >= 0 ? '+' : ''}{growth}%
                          </span>
                        </div>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="bg-slate-800 rounded-lg p-2 text-center">
                          <p className="text-[14px] text-blue-300">₫{branch.avgOrderValue}K</p>
                          <p className="text-[9px] text-slate-500">객단가</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-2 text-center">
                          <p className="text-[14px] text-purple-300">{branch.returnRate}%</p>
                          <p className="text-[9px] text-slate-500">재주문율</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-2 text-center">
                          <p className="text-[14px] text-orange-300">{branch.prepTime}분</p>
                          <p className="text-[9px] text-slate-500">조리시간</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Rating Comparison */}
          {compareType === "rating" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-[20px] border border-yellow-500/30 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 px-5 py-4 border-b border-yellow-500/30">
                <h3 className="text-yellow-100 text-[15px] flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  평점 비교
                </h3>
                <p className="text-yellow-400/70 text-[11px]">Rating Comparison</p>
              </div>
              
              <div className="p-5 space-y-4">
                {/* Average Rating */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl p-4 border border-yellow-500/30 text-center">
                  <p className="text-slate-400 text-[12px] mb-1">프랜차이즈 평균</p>
                  <div className="flex items-center justify-center gap-2">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    <span className="text-yellow-300 text-[32px]" style={{ fontWeight: 700 }}>{avgRating}</span>
                  </div>
                </div>

                {selectedData.sort((a, b) => b.rating - a.rating).map((branch, idx) => {
                  const vsAvg = (branch.rating - parseFloat(avgRating)).toFixed(2);
                  
                  return (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-900/50 rounded-xl p-4 border border-slate-700"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            branch.rating >= 4.8 ? "bg-yellow-500/20" : "bg-slate-700"
                          }`}>
                            {branch.rating >= 4.8 ? "🏆" : `#${idx + 1}`}
                          </div>
                          <span className="text-slate-200 text-[13px]">{branch.name.replace("K-Chicken ", "")}</span>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-300 text-[20px]" style={{ fontWeight: 700 }}>{branch.rating}</span>
                          </div>
                          <span className={`text-[11px] ${parseFloat(vsAvg) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            평균 대비 {parseFloat(vsAvg) >= 0 ? '+' : ''}{vsAvg}
                          </span>
                        </div>
                      </div>
                      {/* Star bar */}
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="flex-1 h-2 rounded-full overflow-hidden bg-slate-700">
                            <div 
                              className="h-full bg-yellow-400"
                              style={{ 
                                width: star <= Math.floor(branch.rating) ? '100%' : 
                                       star === Math.ceil(branch.rating) ? `${(branch.rating % 1) * 100}%` : '0%'
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Growth Comparison */}
          {compareType === "growth" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-[20px] border border-purple-500/30 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-5 py-4 border-b border-purple-500/30">
                <h3 className="text-purple-100 text-[15px] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  전월 대비 성장률
                </h3>
                <p className="text-purple-400/70 text-[11px]">Month-over-Month Growth Rate</p>
              </div>
              
              <div className="p-5 space-y-4">
                {selectedData
                  .map(b => ({ ...b, growth: getGrowth(b.revenue, b.revenueLastMonth) }))
                  .sort((a, b) => b.growth - a.growth)
                  .map((branch, idx) => (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`rounded-xl p-4 border ${
                        branch.growth >= 10 ? "bg-green-500/10 border-green-500/30" :
                        branch.growth >= 0 ? "bg-slate-900/50 border-slate-700" :
                        "bg-red-500/10 border-red-500/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            branch.growth >= 10 ? "bg-green-500/20" :
                            branch.growth >= 0 ? "bg-blue-500/20" :
                            "bg-red-500/20"
                          }`}>
                            {branch.growth >= 10 ? (
                              <TrendingUp className="w-6 h-6 text-green-400" />
                            ) : branch.growth >= 0 ? (
                              <Minus className="w-6 h-6 text-blue-400" />
                            ) : (
                              <TrendingDown className="w-6 h-6 text-red-400" />
                            )}
                          </div>
                          <div>
                            <span className="text-slate-200 text-[13px]">{branch.name.replace("K-Chicken ", "")}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-slate-500 text-[11px]">₫{branch.revenueLastMonth}M</span>
                              <ArrowRight className="w-3 h-3 text-slate-600" />
                              <span className="text-slate-300 text-[11px]">₫{branch.revenue}M</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-4 py-2 rounded-xl text-center ${
                          branch.growth >= 10 ? "bg-green-500/20" :
                          branch.growth >= 0 ? "bg-blue-500/20" :
                          "bg-red-500/20"
                        }`}>
                          <p className={`text-[24px] ${
                            branch.growth >= 10 ? "text-green-400" :
                            branch.growth >= 0 ? "text-blue-400" :
                            "text-red-400"
                          }`} style={{ fontWeight: 700 }}>
                            {branch.growth >= 0 ? '+' : ''}{branch.growth}%
                          </p>
                          <p className="text-[10px] text-slate-500">MoM Growth</p>
                        </div>
                      </div>
                      
                      {/* Detail metrics */}
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="bg-slate-800/50 rounded-lg p-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-slate-500">주문수 변화</span>
                            <span className={`text-[12px] ${getGrowth(branch.orders, branch.ordersLastMonth) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {getGrowth(branch.orders, branch.ordersLastMonth) >= 0 ? '+' : ''}
                              {getGrowth(branch.orders, branch.ordersLastMonth)}%
                            </span>
                          </div>
                        </div>
                        <div className="bg-slate-800/50 rounded-lg p-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-slate-500">매출 차이</span>
                            <span className={`text-[12px] ${branch.revenue - branch.revenueLastMonth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {branch.revenue - branch.revenueLastMonth >= 0 ? '+' : ''}₫{branch.revenue - branch.revenueLastMonth}M
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* Insights Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-[16px] p-5 border border-cyan-500/30"
          >
            <h4 className="text-cyan-300 text-[14px] mb-3 flex items-center gap-2">
              💡 AI 분석 인사이트
            </h4>
            <div className="space-y-2 text-[12px] text-cyan-200/80">
              <p>• District 7 지점이 전월 대비 <strong className="text-green-400">+18.8%</strong> 성장으로 가장 높은 성장률 기록</p>
              <p>• District 1 지점이 매출 1위를 유지하며 안정적인 성과 달성</p>
              <p>• Phu Nhuan 지점은 <strong className="text-red-400">-3.4%</strong> 하락, 마케팅 지원 필요</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}



