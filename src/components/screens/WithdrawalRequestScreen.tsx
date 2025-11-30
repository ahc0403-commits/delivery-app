import { ChevronLeft, DollarSign, Building, CreditCard, User, AlertCircle, CheckCircle, Clock, Sparkles } from "lucide-react";
import { useNavigation } from "../../App";
import { useState } from "react";
import { BottomNavBar } from "../BottomNavBar";

export function WithdrawalRequestScreen() {
  const { goBack, showToast, getBankAccount } = useNavigation();
  const [amount, setAmount] = useState("");
  const bankAccount = getBankAccount();

  const walletBalance = 1250000; // Mock data
  const minWithdrawal = 100000;
  const maxWithdrawal = walletBalance;

  const quickAmounts = [100000, 300000, 500000, 1000000];

  const handleQuickAmount = (value: number) => {
    setAmount(value.toString());
  };

  const handleAllAmount = () => {
    setAmount(walletBalance.toString());
  };

  const handleSubmit = () => {
    const withdrawAmount = parseInt(amount);
    
    if (!amount || withdrawAmount <= 0) {
      showToast("출금 금액을 입력해주세요", "error");
      return;
    }
    
    if (withdrawAmount < minWithdrawal) {
      showToast(`최소 출금 금액은 ₫${minWithdrawal.toLocaleString()}입니다`, "error");
      return;
    }
    
    if (withdrawAmount > maxWithdrawal) {
      showToast("잔액이 부족합니다", "error");
      return;
    }

    showToast("✅ 출금 요청이 완료되었습니다! 1-2일 내 입금 예정입니다.", "success");
    setTimeout(() => goBack(), 1500);
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
        {/* Header */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="mb-4">
            <h1 className="text-[28px] mb-2">출금 요청</h1>
            <p className="text-[14px] text-white/90">Withdrawal Request</p>
          </div>

          {/* Available Balance */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-white/80 mb-1">출금 가능 금액 / Available</p>
                <p className="text-[32px]">₫{(walletBalance / 1000).toFixed(0)}K</p>
                <p className="text-[11px] text-white/90">VND {walletBalance.toLocaleString()}</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-5 py-6">
          {/* Amount Input */}
          <div className="bg-white rounded-[20px] shadow-xl border-2 border-border p-5 mb-5">
            <h2 className="text-[16px] mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>출금 금액 입력</span>
            </h2>

            {/* Input Field */}
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[24px] text-muted-foreground">
                ₫
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full pl-12 pr-4 py-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-[16px] border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-[32px] text-center font-mono"
              />
              <button
                onClick={handleAllAmount}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-[8px] text-[12px] hover:bg-primary/90 transition-all active:scale-95"
              >
                전액
              </button>
            </div>

            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {quickAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => handleQuickAmount(value)}
                  className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-900 py-4 rounded-[12px] border-2 border-green-200 hover:border-green-300 transition-all active:scale-98"
                >
                  <span className="text-[16px]">₫{(value / 1000).toFixed(0)}K</span>
                </button>
              ))}
            </div>

            {/* Info */}
            <div className="bg-blue-50 rounded-[12px] p-3 border border-blue-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-blue-800 leading-relaxed">
                    최소 출금 금액: <span style={{ fontWeight: 600 }}>₫{minWithdrawal.toLocaleString()}</span><br/>
                    출금 수수료: <span style={{ fontWeight: 600 }}>무료</span> 🎉
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Account Info */}
          {bankAccount && (
            <div className="bg-white rounded-[20px] shadow-xl border-2 border-border overflow-hidden mb-5">
              <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-5 py-4">
                <h3 className="text-[14px] mb-1 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>입금 받을 계좌</span>
                </h3>
                <p className="text-[11px] text-white/70">Withdrawal Account</p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-blue-50 rounded-[12px] p-4 border border-blue-200">
                  <p className="text-[10px] text-blue-700 mb-1">은행명 / Bank</p>
                  <p className="text-[15px] text-blue-900">{bankAccount.bankName}</p>
                </div>

                <div className="bg-purple-50 rounded-[12px] p-4 border border-purple-200">
                  <p className="text-[10px] text-purple-700 mb-1">계좌번호 / Account Number</p>
                  <p className="text-[15px] text-purple-900 font-mono">{bankAccount.accountNumber}</p>
                </div>

                <div className="bg-orange-50 rounded-[12px] p-4 border border-orange-200">
                  <p className="text-[10px] text-orange-700 mb-1">예금주 / Account Holder</p>
                  <p className="text-[15px] text-orange-900">{bankAccount.accountHolder}</p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={() => showToast("계좌 변경은 설정에서 가능합니다", "info")}
                  className="w-full bg-accent text-foreground py-3 rounded-[12px] border border-border hover:bg-accent/70 transition-all active:scale-98"
                >
                  <span className="text-[12px]">다른 계좌로 변경</span>
                </button>
              </div>
            </div>
          )}

          {/* Processing Info */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-[16px] p-4 border-2 border-yellow-200 mb-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <h4 className="text-[13px] text-yellow-900 mb-2" style={{ fontWeight: 600 }}>
                  ⏰ 출금 처리 시간
                </h4>
                <ul className="text-[11px] text-yellow-800 leading-relaxed space-y-1">
                  <li>• 승인 후 <span style={{ fontWeight: 600 }}>1-2 영업일</span> 내 입금</li>
                  <li>• 주말/공휴일은 처리 시간 제외</li>
                  <li>• 입금 완료 시 앱 알림 발송</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gratitude Message */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-[16px] p-4 border-2 border-pink-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h4 className="text-[13px] text-pink-900 mb-1" style={{ fontWeight: 600 }}>
                  💚 항상 감사드립니다
                </h4>
                <p className="text-[11px] text-pink-800 leading-relaxed">
                  파트너님의 노고에 감사드리며,<br/>
                  소중한 수익금을 안전하게 전달해드리겠습니다. 🙏
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-2xl z-50">
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <button
            onClick={handleSubmit}
            disabled={!amount || parseInt(amount) <= 0}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="text-[16px]" style={{ fontWeight: 600 }}>
              출금 요청하기
            </span>
          </button>
          <p className="text-center text-[10px] text-muted-foreground mt-3">
            ⏱ 승인 후 1-2 영업일 내 입금 완료
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
