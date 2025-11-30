import { Check, X, DollarSign, Clock, AlertTriangle, ChevronLeft, Building, CheckCircle, XCircle } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const withdrawalRequests = [
  {
    id: 1,
    store: "Sindang Tteokbokki",
    storeKo: "신당 떡볶이",
    amount: 5000000,
    bank: "Vietcombank",
    account: "123***789",
    requestDate: "2h ago",
    status: "pending",
  },
  {
    id: 2,
    store: "Kim's Kitchen",
    storeKo: "김씨네 주방",
    amount: 3200000,
    bank: "Techcombank",
    account: "456***123",
    requestDate: "5h ago",
    status: "pending",
  },
];

export function FinancialApprovalsScreen() {
  const { goBack, navigate } = useNavigation();
  
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Admin Header - Dark Navy/Blue */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={goBack} className="p-1 text-white hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-[20px] mb-1">자금 승인 / Fund Management</h1>
            <p className="text-white/80 text-[12px]">Withdrawal & Deposit Control</p>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-border shadow-sm sticky top-0 z-30">
        <div className="flex gap-0 px-5">
          <button className="flex-1 py-4 text-[13px] border-b-2 border-blue-600 text-blue-600">
            출금 요청 / Withdrawal Requests
          </button>
          <button className="flex-1 py-4 text-[13px] border-b-2 border-transparent text-muted-foreground">
            입금 확인 / Deposit Verification
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* Summary Banner */}
        <div className="mx-5 mt-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[16px] p-5 border-2 border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[11px] text-blue-700 mb-1">Total Pending Amount</p>
              <p className="text-[24px] text-blue-900">₫8.2M</p>
            </div>
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
              <Clock className="w-7 h-7 text-blue-600" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="bg-white/70 backdrop-blur-sm rounded-[10px] px-3 py-2">
              <p className="text-blue-700">Requests</p>
              <p className="text-blue-900">2 pending</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-[10px] px-3 py-2">
              <p className="text-blue-700">Avg. Amount</p>
              <p className="text-blue-900">₫4.1M</p>
            </div>
          </div>
        </div>

        {/* Withdrawal Request List */}
        <div className="px-5 mt-5">
          <h2 className="text-[14px] text-muted-foreground mb-3">대기 중인 요청 / Pending Requests</h2>

          {withdrawalRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-[16px] shadow-lg border-2 border-border mb-4 overflow-hidden"
            >
              {/* Request Header */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 px-5 py-4 border-b border-border">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[20px]">🏪</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] mb-1">{request.storeKo}</h3>
                    <p className="text-[12px] text-muted-foreground mb-2">{request.store}</p>
                    <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Requested {request.requestDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-muted-foreground mb-1">Request ID</p>
                    <p className="text-[13px] text-foreground">#{request.id.toString().padStart(4, '0')}</p>
                  </div>
                </div>
              </div>

              {/* Request Details */}
              <div className="px-5 py-4">
                {/* Amount - Prominent - CLICKABLE */}
                <button
                  onClick={() => navigate("withdrawalapproval")}
                  className="w-full bg-green-50 rounded-[12px] p-4 border-2 border-green-200 mb-4 hover:bg-green-100 hover:border-green-300 transition-all active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[11px] text-green-700 mb-1">출금 요청 금액 / Withdrawal Amount</p>
                      <p className="text-[28px] text-green-900">
                        ₫{(request.amount / 1000000).toFixed(1)}M
                      </p>
                      <p className="text-[11px] text-green-600">VND {request.amount.toLocaleString()}</p>
                      <p className="text-[10px] text-green-700 mt-2">👆 클릭하여 승인 검토하기</p>
                    </div>
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-7 h-7 text-green-600" />
                    </div>
                  </div>
                </button>

                {/* Bank Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] text-muted-foreground mb-1">은행 / Bank</p>
                      <p className="text-[14px] text-foreground">{request.bank}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[18px]">🔢</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] text-muted-foreground mb-1">계좌 번호 / Account Number</p>
                      <p className="text-[14px] text-foreground font-mono">{request.account}</p>
                    </div>
                  </div>
                </div>

                {/* Verification Status */}
                <div className="bg-blue-50 rounded-[12px] p-3 border border-blue-200 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] text-blue-900 mb-1">Verification Notes</p>
                      <p className="text-[10px] text-blue-700 leading-relaxed">
                        • Store balance: ₫{(request.amount * 1.2).toLocaleString()} VND<br/>
                        • Account verified on {new Date().toLocaleDateString()}<br/>
                        • No pending disputes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for additional content */}
        <div className="mx-5 mb-6 bg-accent rounded-[16px] p-6 text-center border border-border">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-muted-foreground" />
          </div>
          <p className="text-[13px] text-muted-foreground mb-1">No more pending requests</p>
          <p className="text-[11px] text-muted-foreground">All caught up! 🎉</p>
        </div>
      </div>

      {/* Sticky Action Buttons at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-2xl z-50">
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Approve Button */}
            <button className="bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-[14px]">Approve Transfer</span>
            </button>

            {/* Reject Button */}
            <button className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
              <XCircle className="w-5 h-5" />
              <span className="text-[14px]">Reject</span>
            </button>
          </div>

          {/* Quick Info */}
          <div className="mt-3 text-center">
            <p className="text-[10px] text-muted-foreground">
              승인 시 즉시 이체 처리 • Immediate transfer upon approval
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}