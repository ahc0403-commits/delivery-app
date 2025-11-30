import { Store, MapPin, TrendingUp, AlertCircle, AlertTriangle, Plus, Edit, Eye, Search, ChevronLeft, Phone, X, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const branches = [
  {
    id: 1,
    name: "K-Chicken District 1",
    district: "District 1",
    status: "open",
    salesToday: 12500000,
    rating: 4.9,
    orders: 87,
    issue: null,
  },
  {
    id: 2,
    name: "K-Chicken District 9",
    district: "District 9",
    status: "issue",
    salesToday: 4200000,
    rating: 4.6,
    orders: 28,
    issue: "Stock Low",
  },
  {
    id: 3,
    name: "K-Chicken District 7",
    district: "District 7",
    status: "open",
    salesToday: 15200000,
    rating: 4.9,
    orders: 102,
    issue: null,
  },
  {
    id: 4,
    name: "K-Chicken Binh Thanh",
    district: "Binh Thanh",
    status: "open",
    salesToday: 9800000,
    rating: 4.8,
    orders: 64,
    issue: null,
  },
  {
    id: 5,
    name: "K-Chicken District 3",
    district: "District 3",
    status: "issue",
    salesToday: 3100000,
    rating: 4.3,
    orders: 19,
    issue: "Late Opening",
  },
  {
    id: 6,
    name: "K-Chicken Phu Nhuan",
    district: "Phu Nhuan",
    status: "closed",
    salesToday: 0,
    rating: 4.7,
    orders: 0,
    issue: "Maintenance",
  },
];

export function BranchManagementScreen() {
  const { navigate } = useNavigation();
  
  const openBranches = branches.filter(b => b.status === "open" && !b.issue).length;
  const issueBranches = branches.filter(b => b.status === "issue").length;
  const closedBranches = branches.filter(b => b.status === "closed").length;
  const excellentBranches = branches.filter(b => b.rating >= 4.8 && b.status === "open").length;

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue Theme */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={() => navigate("franchise")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">지점 관리 (50)</h1>
            <p className="text-white/80 text-[12px]">Manage Branches</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-border px-5 py-3 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search branch name or district..."
            className="w-full pl-11 pr-4 py-3 bg-accent rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-[14px]"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-border shadow-sm sticky top-0 z-30">
        <div className="flex gap-2 px-5 py-3 overflow-x-auto no-scrollbar">
          <button className="flex-shrink-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4 py-2.5 rounded-[12px] shadow-md text-[12px] flex items-center gap-2">
            <span>All</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">50</span>
          </button>
          <button className="flex-shrink-0 bg-white border border-border text-foreground px-4 py-2.5 rounded-[12px] text-[12px] hover:bg-green-50 transition-colors flex items-center gap-2">
            <span>Excellent</span>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px]">{excellentBranches}</span>
          </button>
          <button className="flex-shrink-0 bg-white border border-border text-foreground px-4 py-2.5 rounded-[12px] text-[12px] hover:bg-orange-50 transition-colors flex items-center gap-2">
            <span>Warning</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-[10px]">{issueBranches}</span>
          </button>
          <button className="flex-shrink-0 bg-white border border-border text-foreground px-4 py-2.5 rounded-[12px] text-[12px] hover:bg-red-50 transition-colors flex items-center gap-2">
            <span>Closed</span>
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-[10px]">{closedBranches}</span>
          </button>
        </div>
      </div>

      {/* Summary Stats Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 border-b border-border">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <p className="text-[18px] text-green-600">{openBranches}</p>
            <p className="text-[9px] text-muted-foreground">Open</p>
          </div>
          <div>
            <p className="text-[18px] text-orange-600">{issueBranches}</p>
            <p className="text-[9px] text-muted-foreground">Warning</p>
          </div>
          <div>
            <p className="text-[18px] text-red-600">{closedBranches}</p>
            <p className="text-[9px] text-muted-foreground">Closed</p>
          </div>
          <div>
            <p className="text-[18px] text-blue-600">4.78</p>
            <p className="text-[9px] text-muted-foreground">Avg Rating</p>
          </div>
        </div>
      </div>

      {/* Scrollable Branch List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 pb-6">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className={`bg-white rounded-[16px] shadow-md border-2 overflow-hidden transition-all hover:shadow-lg ${
              branch.status === "open" && !branch.issue
                ? "border-green-200"
                : branch.status === "issue"
                ? "border-orange-300"
                : "border-red-200"
            }`}
          >
            {/* Card Header */}
            <div
              className={`px-5 py-3 border-b border-border ${
                branch.status === "open" && !branch.issue
                  ? "bg-gradient-to-r from-green-50 to-emerald-50"
                  : branch.status === "issue"
                  ? "bg-gradient-to-r from-orange-50 to-red-50"
                  : "bg-gradient-to-r from-gray-100 to-gray-50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      branch.status === "open" && !branch.issue
                        ? "bg-green-100"
                        : branch.status === "issue"
                        ? "bg-orange-100"
                        : "bg-gray-200"
                    }`}
                  >
                    <Store
                      className={`w-6 h-6 ${
                        branch.status === "open" && !branch.issue
                          ? "text-green-600"
                          : branch.status === "issue"
                          ? "text-orange-600"
                          : "text-gray-500"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] mb-1">{branch.name}</h3>
                    <p className="text-[11px] text-muted-foreground mb-1.5">{branch.district}</p>
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      {branch.status === "open" && !branch.issue && (
                        <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-[11px]">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          <span>🟢 Open</span>
                        </div>
                      )}
                      {branch.status === "issue" && (
                        <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-[11px]">
                          <AlertTriangle className="w-3 h-3" />
                          <span>🔴 Issue ({branch.issue})</span>
                        </div>
                      )}
                      {branch.status === "closed" && (
                        <div className="inline-flex items-center gap-1.5 bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-[11px]">
                          <X className="w-3 h-3" />
                          <span>⚫ Closed ({branch.issue})</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    <span className="text-yellow-500 text-[14px]">⭐</span>
                    <span className="text-[14px]">{branch.rating}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-5 py-4">
              {/* Sales Today */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-muted-foreground">Sales Today / 오늘 매출</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] text-green-600">+8%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-orange-50 rounded-[12px] p-3 border border-primary/30">
                  <p className="text-[24px] text-primary">
                    ₫{(branch.salesToday / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    VND {branch.salesToday.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-blue-50 rounded-[10px] p-3 text-center border border-blue-200">
                  <p className="text-[20px] text-blue-600">{branch.orders}</p>
                  <p className="text-[10px] text-blue-700">Orders Today</p>
                </div>
                <div className="bg-purple-50 rounded-[10px] p-3 text-center border border-purple-200">
                  <p className="text-[20px] text-purple-600">
                    ₫{branch.salesToday > 0 ? Math.round(branch.salesToday / branch.orders / 1000) : 0}K
                  </p>
                  <p className="text-[10px] text-purple-700">Avg Order</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {branch.status === "open" && !branch.issue && (
                  <>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-[10px] text-[13px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Monitor</span>
                    </button>
                    <button className="bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-[10px] text-[13px] shadow-sm hover:bg-blue-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Contact</span>
                    </button>
                  </>
                )}

                {branch.status === "issue" && (
                  <>
                    <button className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-[10px] text-[13px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Call Owner</span>
                    </button>
                    <button className="bg-white border-2 border-orange-600 text-orange-600 py-3 rounded-[10px] text-[13px] shadow-sm hover:bg-orange-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </>
                )}

                {branch.status === "closed" && (
                  <>
                    <button className="bg-gradient-to-r from-gray-600 to-gray-500 text-white py-3 rounded-[10px] text-[13px] shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Contact</span>
                    </button>
                    <button className="bg-white border-2 border-gray-600 text-gray-600 py-3 rounded-[10px] text-[13px] shadow-sm hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Details</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Issue Alert (if applicable) */}
            {branch.issue && (
              <div className="bg-red-50 border-t-2 border-red-200 px-5 py-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-[12px] text-red-900 mb-1">Action Required</p>
                    <p className="text-[11px] text-red-700">
                      {branch.issue === "Stock Low" && "재고 부족 • Inventory needs immediate restocking"}
                      {branch.issue === "Late Opening" && "늦은 개점 • Store opened 2 hours late today"}
                      {branch.issue === "Maintenance" && "정비 중 • Scheduled maintenance in progress"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Load More */}
        <div className="pt-2 pb-4">
          <button className="w-full bg-accent border-2 border-dashed border-border text-muted-foreground py-4 rounded-[12px] text-[13px] hover:bg-white hover:border-primary hover:text-primary transition-all">
            Load More Branches (44 remaining)
          </button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}