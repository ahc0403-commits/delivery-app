import { ChevronLeft, TrendingUp, Search, DollarSign, MapPin, Download, Database, Zap, Clock, Users, ArrowUpRight, Home } from "lucide-react";
import { useState } from "react";
import { BottomNavBar } from "../BottomNavBar";
import { useNavigation } from "../../App";

export function GlobalAnalyticsScreen() {
  const [activeTab, setActiveTab] = useState("intent");
  const { goBack, navigate } = useNavigation();
  
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Admin Header - Dark Theme */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-5 py-4 shadow-2xl border-b border-cyan-500/30">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-2 bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20 rounded-full transition-colors active:scale-95">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-cyan-100 text-[18px] mb-1 flex items-center gap-2">
              <Database className="w-5 h-5 text-cyan-400" />
              <span>Master Data Intelligence</span>
            </h1>
            <p className="text-cyan-400/80 text-[10px]">The Money Maker • B2B Data Products 💰</p>
          </div>
          <button 
            onClick={() => navigate("adminhome")}
            className="w-10 h-10 bg-cyan-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-cyan-400/50 hover:bg-cyan-500/30 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5 text-cyan-400" />
          </button>
        </div>

        {/* Value Proposition Banner */}
        <div className="mt-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[12px] p-3 border border-cyan-400/30">
          <p className="text-cyan-100 text-[10px] leading-relaxed">
            💎 <strong>This data is worth millions.</strong> We sell insights to restaurants, investors & market researchers. Every search, click, and order is tracked.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-lg sticky top-0 z-30">
        <div className="flex gap-2 px-5 py-3 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("intent")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[10px] border transition-all ${
              activeTab === "intent"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800"
            }`}
          >
            <Search className="w-4 h-4" />
            <span className="text-[11px] whitespace-nowrap">Consumer Intent</span>
          </button>
          <button
            onClick={() => setActiveTab("spending")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[10px] border transition-all ${
              activeTab === "spending"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span className="text-[11px] whitespace-nowrap">Spending Power</span>
          </button>
          <button
            onClick={() => setActiveTab("logistics")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-[10px] border transition-all ${
              activeTab === "logistics"
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/50"
                : "bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-800"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-[11px] whitespace-nowrap">Hyper-Local Logistics</span>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* TAB 1: Consumer Intent */}
        {activeTab === "intent" && (
          <div className="px-5 py-5 space-y-5">
            {/* Top Search Keywords */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[20px] shadow-2xl border border-cyan-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 px-5 py-4 border-b border-cyan-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-cyan-100 text-[15px]">Top Search Keywords</h3>
                      <p className="text-cyan-400/70 text-[10px]">What people are looking for</p>
                    </div>
                  </div>
                  <div className="bg-cyan-500/20 px-3 py-1 rounded-full text-[10px] text-cyan-300 border border-cyan-400/30">
                    💰 High Value
                  </div>
                </div>
              </div>
              
              <div className="p-5 space-y-3">
                {[
                  { keyword: "Rosé Tteokbokki", searches: 3420, trend: "+45%", hot: true },
                  { keyword: "Korean Fried Chicken", searches: 2890, trend: "+32%", hot: true },
                  { keyword: "Kimchi Jjigae", searches: 2340, trend: "+12%", hot: false },
                  { keyword: "Bibimbap", searches: 1890, trend: "+8%", hot: false },
                  { keyword: "Dakgalbi", searches: 1560, trend: "+18%", hot: false },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-[12px] p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-cyan-100 text-[14px]">{item.keyword}</span>
                          {item.hot && (
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] px-2 py-0.5 rounded-full">
                              🔥 HOT
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[11px]">
                          <span className="text-cyan-400">{item.searches.toLocaleString()} searches</span>
                          <span className="text-green-400 flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" />
                            {item.trend}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-400">Rank #{idx + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Failed Searches - Gap Analysis */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[20px] shadow-2xl border border-orange-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 px-5 py-4 border-b border-orange-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-orange-100 text-[15px]">Failed Searches</h3>
                      <p className="text-orange-400/70 text-[10px]">Gap analysis • What customers want but can't find</p>
                    </div>
                  </div>
                  <div className="bg-orange-500/20 px-3 py-1 rounded-full text-[10px] text-orange-300 border border-orange-400/30">
                    💡 Opportunity
                  </div>
                </div>
              </div>
              
              <div className="p-5 space-y-3">
                {[
                  { keyword: "Vegan Korean BBQ", count: 234, potential: "High" },
                  { keyword: "Gluten-free Kimchi Pancake", count: 189, potential: "Medium" },
                  { keyword: "Budae Jjigae Delivery", count: 156, potential: "High" },
                  { keyword: "Late Night Korean Food", count: 142, potential: "Very High" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-[12px] p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-100 text-[13px]">{item.keyword}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        item.potential === "Very High" 
                          ? "bg-red-500/20 text-red-300 border border-red-400/30"
                          : item.potential === "High"
                          ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                      }`}>
                        {item.potential}
                      </span>
                    </div>
                    <p className="text-orange-400/80 text-[11px]">{item.count} failed searches • No results found</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Spending Power */}
        {activeTab === "spending" && (
          <div className="px-5 py-5 space-y-5">
            {/* Average Ticket Size by District */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[20px] shadow-2xl border border-green-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 px-5 py-4 border-b border-green-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-green-100 text-[15px]">Avg Ticket Size by District</h3>
                      <p className="text-green-400/70 text-[10px]">Who spends the most money?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 space-y-3">
                {[
                  { district: "District 7", avg: "₫245,000", premium: "+28%", color: "cyan" },
                  { district: "District 2", avg: "₫218,000", premium: "+20%", color: "blue" },
                  { district: "District 1", avg: "₫195,000", premium: "+8%", color: "green" },
                  { district: "District 3", avg: "₫182,000", premium: "baseline", color: "slate" },
                  { district: "Binh Thanh", avg: "₫165,000", premium: "-9%", color: "orange" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-[12px] p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-${item.color}-500/20 rounded-full flex items-center justify-center text-[12px]`}>
                          #{idx + 1}
                        </div>
                        <div>
                          <p className="text-green-100 text-[14px]">{item.district}</p>
                          <p className="text-green-400/70 text-[11px]">{item.avg} avg order</p>
                        </div>
                      </div>
                      <div className={`text-[12px] px-3 py-1 rounded-full ${
                        item.premium.startsWith("+") 
                          ? "bg-green-500/20 text-green-300 border border-green-400/30"
                          : item.premium === "baseline"
                          ? "bg-slate-500/20 text-slate-300 border border-slate-400/30"
                          : "bg-red-500/20 text-red-300 border border-red-400/30"
                      }`}>
                        {item.premium}
                      </div>
                    </div>
                    {idx === 0 && (
                      <div className="mt-2 bg-cyan-500/10 rounded-md p-2 border border-cyan-400/20">
                        <p className="text-cyan-300 text-[10px]">
                          💰 Premium Market: District 7 customers buy 28% more expensive items
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reorder Rate by Category */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[20px] shadow-2xl border border-purple-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-5 py-4 border-b border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-purple-100 text-[15px]">Reorder Rate by Category</h3>
                      <p className="text-purple-400/70 text-[10px]">Which food creates habits?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 space-y-3">
                {[
                  { category: "Korean Fried Chicken", rate: "68%", frequency: "2.3x/month", addictive: true },
                  { category: "Tteokbokki", rate: "62%", frequency: "2.1x/month", addictive: true },
                  { category: "Korean BBQ", rate: "45%", frequency: "1.5x/month", addictive: false },
                  { category: "Kimchi Jjigae", rate: "38%", frequency: "1.2x/month", addictive: false },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-[12px] p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-purple-100 text-[14px]">{item.category}</span>
                          {item.addictive && (
                            <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-[9px] px-2 py-0.5 rounded-full">
                              🔄 Addictive
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[11px]">
                          <span className="text-purple-400">{item.rate} reorder</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-purple-400/70">{item.frequency}</span>
                        </div>
                      </div>
                      <div className="w-16 h-16">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16" fill="none" stroke="#1e293b" strokeWidth="3" />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="3"
                            strokeDasharray={`${parseInt(item.rate)} 100`}
                            strokeLinecap="round"
                            transform="rotate(-90 18 18)"
                          />
                          <text x="18" y="22" textAnchor="middle" className="text-[10px] fill-purple-300">
                            {item.rate}
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Hyper-Local Logistics */}
        {activeTab === "logistics" && (
          <div className="px-5 py-5 space-y-5">
            {/* Heatmap - Order + Rider Density */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[20px] shadow-2xl border border-red-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 px-5 py-4 border-b border-red-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-red-100 text-[15px]">Order + Rider Density Overlay</h3>
                      <p className="text-red-400/70 text-[10px]">Logistics efficiency heatmap</p>
                    </div>
                  </div>
                  <div className="bg-red-500/20 px-3 py-1 rounded-full text-[10px] text-red-300 border border-red-400/30 flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                </div>
              </div>

              {/* Simplified Heatmap */}
              <div className="relative h-64 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-slate-700"></div>
                    ))}
                  </div>
                </div>

                {/* District 1 - High Demand, Good Coverage */}
                <div className="absolute top-[30%] left-[40%] w-24 h-24 bg-green-500 rounded-full opacity-40 blur-2xl"></div>
                <div className="absolute top-[30%] left-[40%] translate-x-8 translate-y-8">
                  <div className="bg-slate-900/95 backdrop-blur-sm rounded-[12px] px-3 py-2 shadow-lg border border-green-400">
                    <p className="text-[10px] text-green-400">District 1</p>
                    <p className="text-[11px] text-green-300">142 orders • 45 riders</p>
                    <p className="text-[9px] text-green-500">✓ Optimal</p>
                  </div>
                </div>

                {/* District 7 - High Demand, Low Coverage */}
                <div className="absolute bottom-[25%] left-[20%] w-20 h-20 bg-red-500 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-[25%] left-[20%] translate-x-6 translate-y-6">
                  <div className="bg-slate-900/95 backdrop-blur-sm rounded-[12px] px-3 py-2 shadow-lg border border-red-400">
                    <p className="text-[10px] text-red-400">District 7</p>
                    <p className="text-[11px] text-red-300">87 orders • 12 riders</p>
                    <p className="text-[9px] text-red-500">⚠️ Shortage</p>
                  </div>
                </div>

                {/* District 3 - Balanced */}
                <div className="absolute top-[20%] right-[25%] w-18 h-18 bg-yellow-500 rounded-full opacity-40 blur-lg"></div>
                <div className="absolute top-[20%] right-[25%] translate-x-6 translate-y-6">
                  <div className="bg-slate-900/95 backdrop-blur-sm rounded-[12px] px-3 py-2 shadow-lg border border-yellow-400">
                    <p className="text-[10px] text-yellow-400">District 3</p>
                    <p className="text-[11px] text-yellow-300">62 orders • 28 riders</p>
                    <p className="text-[9px] text-yellow-500">◆ Balanced</p>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-3 left-3 bg-slate-900/95 backdrop-blur-sm rounded-[12px] px-4 py-3 shadow-lg border border-cyan-400/30">
                  <p className="text-[10px] text-cyan-300 mb-2">Efficiency Status</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-[9px] text-slate-300">Optimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-[9px] text-slate-300">Balanced</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-[9px] text-slate-300">Shortage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Peak Time Analysis */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-[20px] shadow-2xl border border-blue-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 px-5 py-4 border-b border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-blue-100 text-[15px]">Peak Time Analysis</h3>
                      <p className="text-blue-400/70 text-[10px]">Hourly breakdown for dynamic pricing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                {/* Simple Bar Chart */}
                <div className="flex items-end justify-between h-40 gap-1 mb-4">
                  {[
                    { hour: "6am", value: 15 },
                    { hour: "9am", value: 35 },
                    { hour: "12pm", value: 85 },
                    { hour: "3pm", value: 45 },
                    { hour: "6pm", value: 100 },
                    { hour: "9pm", value: 75 },
                    { hour: "12am", value: 25 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="relative w-full flex flex-col justify-end" style={{ height: "100%" }}>
                        <div
                          className={`w-full rounded-t-md transition-all ${
                            item.value >= 80
                              ? "bg-gradient-to-t from-red-600 to-orange-500"
                              : item.value >= 50
                              ? "bg-gradient-to-t from-yellow-600 to-yellow-500"
                              : "bg-gradient-to-t from-blue-600 to-blue-500"
                          }`}
                          style={{ height: `${item.value}%` }}
                        >
                          {item.value >= 80 && (
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-red-400">
                              🔥
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[9px] text-slate-400">{item.hour}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Recommendation */}
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-[12px] p-4 border border-orange-400/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-orange-100 text-[12px] mb-1">💰 Dynamic Pricing Opportunity</h4>
                      <p className="text-orange-300/80 text-[10px] leading-relaxed">
                        12pm & 6pm show 3x demand surge. Recommend +15% surge pricing during peak hours to maximize revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Action - Export Data Package */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t-2 border-cyan-500/30 shadow-2xl z-50">
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <button className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white py-4 rounded-[12px] shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3">
            <Download className="w-5 h-5" />
            <span className="text-[14px]">Export Data Package (CSV / API) 💰</span>
          </button>
          <div className="mt-2 text-center">
            <p className="text-cyan-400/70 text-[10px]">
              💎 Sell this data to restaurants, investors & market researchers
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}