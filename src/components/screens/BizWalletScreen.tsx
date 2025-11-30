import { ChevronLeft, Plus, Minus, ArrowUpRight, ArrowDownLeft, ArrowDown, CreditCard, Building, Clock, TrendingUp, TrendingDown, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { useState } from "react";
import { BottomNavBar } from "../BottomNavBar";

const transactions = [
  {
    id: 1,
    type: "credit",
    title: "주문 수익 / Order Revenue",
    orderId: "#1234",
    amount: 160000,
    date: "Today, 14:30",
  },
  {
    id: 2,
    type: "credit",
    title: "주문 수익 / Order Revenue",
    orderId: "#1233",
    amount: 95000,
    date: "Today, 13:15",
  },
  {
    id: 3,
    type: "debit",
    title: "플랫폼 수수료 / Platform Fee",
    orderId: "#1232",
    amount: -32000,
    date: "Today, 12:45",
  },
  {
    id: 4,
    type: "credit",
    title: "주문 수익 / Order Revenue",
    orderId: "#1231",
    amount: 220000,
    date: "Today, 11:20",
  },
  {
    id: 5,
    type: "debit",
    title: "환불 / Refund",
    orderId: "#1230",
    amount: -85000,
    date: "Yesterday, 19:30",
  },
];

export function BizWalletScreen() {
  const { showToast, navigate, hasBankAccount } = useNavigation();
  
  const handleTopUp = () => {
    if (!hasBankAccount) {
      showToast("먼저 은행 계좌를 등록해주세요! 💳", "error");
      setTimeout(() => navigate("bankaccountregistration"), 500);
    } else {
      showToast("충전 페이지로 이동합니다! 💰", "success");
    }
  };
  
  const handleWithdraw = () => {
    if (!hasBankAccount) {
      showToast("먼저 은행 계좌를 등록해주세요! 💳", "error");
      setTimeout(() => navigate("bankaccountregistration"), 500);
    } else {
      navigate("withdrawalrequest");
    }
  };
  
  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate("ownerhome")}
            className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-[18px] mb-0.5">비즈 머니</h1>
            <p className="text-[11px] text-muted-foreground">Biz Money Wallet • 사업자 지갑</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Wallet Balance Card */}
      <div className="mx-5 mt-4 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-[16px] p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <CreditCard className="w-5 h-5" />
          <span className="text-[13px] text-white/80">지갑 잔액 / Wallet Balance</span>
        </div>
        <div className="mb-4">
          <div className="text-[36px] mb-1">-200,000₫</div>
          <div className="flex items-center gap-2 text-[12px] text-white/80">
            <Minus className="w-4 h-4" />
            <span>마이너스 잔고 / Negative Balance</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] bg-white/20 px-3 py-2 rounded-[12px]">
          <span>⚠️</span>
          <span>충전이 필요합니다 / Top-up required</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-5 mt-4 grid grid-cols-2 gap-3">
        <button 
          onClick={handleTopUp}
          className="bg-primary text-white py-5 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center gap-2"
        >
          <Plus className="w-6 h-6" />
          <span className="text-[14px]">충전하기 / Top Up</span>
        </button>
        <button 
          onClick={handleWithdraw}
          className="bg-green-600 text-white py-5 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center gap-2"
        >
          <ArrowDown className="w-6 h-6" />
          <span className="text-[14px]">출금하기 / Withdraw</span>
        </button>
      </div>

      {/* Linked Bank Account */}
      <div className="mx-5 mt-4 bg-white rounded-[12px] shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <Building className="w-5 h-5 text-primary" />
          <h3 className="text-[14px]">연결된 은행 / Linked Bank Account</h3>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-[12px] p-4 border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-[10px]">
              VCB
            </div>
            <div className="flex-1">
              <p className="text-[14px] mb-1">Vietcombank</p>
              <p className="text-[12px] text-muted-foreground">계좌번호 / Account: •••• 8765</p>
            </div>
            <button className="text-[12px] text-primary hover:underline">
              변경 / Change
            </button>
          </div>
          <div className="pt-3 border-t border-green-200 mt-2">
            <p className="text-[11px] text-green-700">
              ✓ 출금은 1-2 영업일 소요 / Withdrawal takes 1-2 business days
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 mt-6 grid grid-cols-2 gap-3">
        <div className="bg-white rounded-[12px] p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-[12px] text-muted-foreground">수익 / Income</span>
          </div>
          <div className="text-[20px] text-green-600">+475,000₫</div>
          <div className="text-[10px] text-muted-foreground">오늘 / Today</div>
        </div>
        <div className="bg-white rounded-[12px] p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <TrendingDown className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-[12px] text-muted-foreground">지출 / Expense</span>
          </div>
          <div className="text-[20px] text-red-600">-117,000₫</div>
          <div className="text-[10px] text-muted-foreground">오늘 / Today</div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-5 mt-6">
        <h2 className="text-[16px] mb-3">거래 내역 / Recent Transactions</h2>
        <div className="bg-white rounded-[12px] shadow-sm divide-y divide-border">
          {transactions.map((tx) => (
            <div key={tx.id} className="p-4 flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === "credit" ? "bg-green-50" : "bg-red-50"
                }`}
              >
                {tx.type === "credit" ? (
                  <ArrowDownLeft className="w-5 h-5 text-green-600" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-red-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] mb-1 truncate">{tx.title}</h3>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span>{tx.orderId}</span>
                  <span>•</span>
                  <span>{tx.date}</span>
                </div>
              </div>
              <div
                className={`text-[15px] ${
                  tx.type === "credit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.amount > 0 ? "+" : ""}
                {tx.amount.toLocaleString()}₫
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}