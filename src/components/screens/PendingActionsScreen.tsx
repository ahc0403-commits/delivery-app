import { ChevronLeft, AlertCircle, CheckCircle, XCircle, Clock, DollarSign, Shield, FileText, ChevronRight } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function PendingActionsScreen() {
  const { goBack, navigate, showToast } = useNavigation();
  const [pendingItems, setPendingItems] = useState([
    {
      id: "PA-001",
      type: "withdrawal",
      title: "출금 승인 요청",
      titleEn: "Withdrawal Request",
      store: "신당 떡볶이",
      storeEn: "Sindang Tteokbokki",
      amount: "₫5,000,000",
      timestamp: "5 mins ago",
      priority: "high",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "PA-002",
      type: "withdrawal",
      title: "출금 승인 요청",
      titleEn: "Withdrawal Request",
      store: "K-Chicken House",
      storeEn: "K-Chicken House",
      amount: "₫3,200,000",
      timestamp: "12 mins ago",
      priority: "high",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "PA-003",
      type: "withdrawal",
      title: "출금 승인 요청",
      titleEn: "Withdrawal Request",
      store: "Seoul Kitchen",
      storeEn: "Seoul Kitchen",
      amount: "₫2,800,000",
      timestamp: "25 mins ago",
      priority: "medium",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "PA-004",
      type: "dispute",
      title: "분쟁 해결 필요",
      titleEn: "Dispute Resolution",
      store: "Order #1247",
      storeEn: "Customer vs BiBimBap House",
      amount: "₫156,000",
      timestamp: "1 hour ago",
      priority: "high",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "PA-005",
      type: "dispute",
      title: "분쟁 해결 필요",
      titleEn: "Dispute Resolution",
      store: "Order #1239",
      storeEn: "Customer vs K-BBQ Premium",
      amount: "₫285,000",
      timestamp: "2 hours ago",
      priority: "medium",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
  ]);

  const handleApprove = (id: string, type: string) => {
    setPendingItems(pendingItems.filter(item => item.id !== id));
    showToast(`${type === 'withdrawal' ? '출금이' : '분쟁이'} 승인되었습니다!`, "success");
  };

  const handleReject = (id: string, type: string) => {
    setPendingItems(pendingItems.filter(item => item.id !== id));
    showToast(`${type === 'withdrawal' ? '출금이' : '분쟁이'} 거절되었습니다.`, "error");
  };

  const handleViewDetails = (type: string) => {
    if (type === 'withdrawal') {
      navigate('adminfinance');
    } else if (type === 'dispute') {
      navigate('admindispute');
    }
  };

  const stats = [
    { label: "긴급", labelEn: "Urgent", count: 3, color: "text-red-600", bg: "bg-red-50" },
    { label: "보통", labelEn: "Normal", count: 2, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "처리 완료", labelEn: "Resolved", count: 28, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center border border-white/30 relative">
              <AlertCircle className="w-7 h-7" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center text-[11px]" style={{ fontWeight: 700 }}>
                {pendingItems.length}
              </div>
            </div>
            <div>
              <h1 className="text-[26px] mb-1">Pending Actions</h1>
              <p className="text-[13px] text-white/90">승인 대기 항목</p>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4 border border-white/20 flex items-center gap-3">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse flex-shrink-0"></div>
            <div className="flex-1">
              <p className="text-[13px] mb-0.5">긴급 처리 필요 / Urgent Action Required</p>
              <p className="text-[11px] text-white/70">{pendingItems.filter(i => i.priority === 'high').length} high priority items</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-5 py-5 grid grid-cols-3 gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.bg} rounded-[12px] p-4 text-center border border-border`}>
              <p className={`text-[24px] ${stat.color} mb-1`}>{stat.count}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}<br/>{stat.labelEn}</p>
            </div>
          ))}
        </div>

        {/* Pending Items List */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>대기 중인 항목 / Pending Items ({pendingItems.length})</span>
          </h2>
          
          {pendingItems.length === 0 ? (
            <div className="bg-white rounded-[16px] p-8 text-center shadow-sm border border-border">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-[16px] mb-2">모든 항목 처리 완료!</h3>
              <p className="text-[13px] text-muted-foreground">
                All pending actions have been resolved.<br/>
                Great job! 🎉
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[16px] p-4 shadow-sm border-2 border-border hover:shadow-md transition-shadow"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-[12px] flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[15px]">{item.title}</h3>
                        {item.priority === 'high' && (
                          <div className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[9px]">
                            긴급
                          </div>
                        )}
                      </div>
                      <p className="text-[12px] text-muted-foreground mb-1">{item.titleEn}</p>
                      <p className="text-[11px] text-muted-foreground">{item.timestamp}</p>
                    </div>
                    <button
                      onClick={() => handleViewDetails(item.type)}
                      className="p-2 hover:bg-accent rounded-full transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="bg-accent rounded-[12px] p-3 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] text-muted-foreground">Store / Order</span>
                      <span className="text-[13px]">{item.store}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-muted-foreground">Amount</span>
                      <span className="text-[16px] text-primary" style={{ fontWeight: 600 }}>
                        {item.amount}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleReject(item.id, item.type)}
                      className="bg-accent hover:bg-red-50 text-red-600 rounded-[12px] py-2.5 text-[13px] transition-colors flex items-center justify-center gap-2 border border-red-200"
                    >
                      <XCircle className="w-4 h-4" />
                      <span>거절 / Reject</span>
                    </button>
                    <button
                      onClick={() => handleApprove(item.id, item.type)}
                      className="bg-primary hover:bg-primary/90 text-white rounded-[12px] py-2.5 text-[13px] transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>승인 / Approve</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Access */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <span>빠른 접근 / Quick Access</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('adminfinance')}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[16px] p-4 border-2 border-blue-200 hover:shadow-md transition-all active:scale-95"
            >
              <DollarSign className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-[13px] mb-1">자금 승인</p>
              <p className="text-[11px] text-muted-foreground">Financial Approvals</p>
            </button>
            <button
              onClick={() => navigate('admindispute')}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-[16px] p-4 border-2 border-orange-200 hover:shadow-md transition-all active:scale-95"
            >
              <Shield className="w-6 h-6 text-orange-600 mb-2" />
              <p className="text-[13px] mb-1">분쟁 센터</p>
              <p className="text-[11px] text-muted-foreground">Dispute Center</p>
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mx-5 mb-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-[16px] p-4 border-2 border-purple-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] text-purple-900 mb-1" style={{ fontWeight: 600 }}>
                ⏰ 처리 시간 목표 / Response Time Target
              </h3>
              <p className="text-[12px] text-purple-700 leading-relaxed">
                긴급 항목: <span style={{ fontWeight: 600 }}>15분 이내</span> 처리<br/>
                일반 항목: <span style={{ fontWeight: 600 }}>1시간 이내</span> 처리
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
