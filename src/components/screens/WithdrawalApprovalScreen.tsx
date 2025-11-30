import { ChevronLeft, CheckCircle, XCircle, DollarSign, Building, Heart, Clock, Shield, Sparkles } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function WithdrawalApprovalScreen() {
  const { goBack, showToast } = useNavigation();
  const [note, setNote] = useState("");

  // Mock data - 실제로는 props나 context로 받아올 데이터
  const request = {
    id: 1,
    store: "Sindang Tteokbokki",
    storeKo: "신당 떡볶이",
    amount: 5000000,
    bank: "Vietcombank",
    account: "123***789",
    fullAccount: "1234567890",
    ownerName: "Nguyen Van Minh",
  };

  const handleApprove = () => {
    showToast("출금이 승인되었습니다! 1-2일 내 입금 예정입니다.", "success");
    setTimeout(() => goBack(), 1000);
  };

  const handleReject = () => {
    showToast("출금 요청이 거부되었습니다.", "error");
    setTimeout(() => goBack(), 1000);
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary via-orange-600 to-green-600 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="mb-4">
            <h1 className="text-[28px] mb-2">출금 승인 검토</h1>
            <p className="text-[14px] text-white/90">Withdrawal Approval Review</p>
          </div>

          {/* Gratitude Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4 border border-white/20">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-pink-200 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] text-white mb-1" style={{ fontWeight: 600 }}>
                  💚 파트너님께 감사드립니다
                </p>
                <p className="text-[11px] text-white/80 leading-relaxed">
                  정성껏 준비해주신 음식 덕분에 고객들이 행복합니다.<br/>
                  소중한 수익금을 안전하게 전달해드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-5 py-6">
          {/* Store Info Card */}
          <div className="bg-white rounded-[20px] shadow-xl border-2 border-primary/20 overflow-hidden mb-5">
            <div className="bg-gradient-to-r from-primary/10 to-orange-50 px-5 py-4 border-b-2 border-dashed border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-[32px]">🏪</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-[20px] mb-1">{request.storeKo}</h2>
                  <p className="text-[13px] text-muted-foreground">{request.store}</p>
                  <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-[11px] mt-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>인증된 파트너</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amount - Hero Section */}
            <div className="px-5 py-6 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="text-center mb-4">
                <p className="text-[12px] text-muted-foreground mb-2">출금 요청 금액</p>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Sparkles className="w-6 h-6 text-green-600" />
                  <p className="text-[48px] text-green-600">
                    ₫{(request.amount / 1000000).toFixed(1)}M
                  </p>
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-[14px] text-green-700">
                  VND {request.amount.toLocaleString()}
                </p>
              </div>

              {/* Beautiful Message */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-[16px] p-4 border-2 border-green-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] text-green-900 mb-2" style={{ fontWeight: 600 }}>
                      정성스럽게 전달드립니다 🙏
                    </h3>
                    <p className="text-[12px] text-green-800 leading-relaxed">
                      파트너님의 노고에 진심으로 감사드리며,<br/>
                      소중한 수익금을 <span style={{ fontWeight: 600 }}>안전하게</span> 입금해드리겠습니다.<br/>
                      <span className="text-green-700">⏱ 승인 후 1-2 영업일 내 입금 완료</span>됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="px-5 py-5 border-t-2 border-dashed border-border">
              <h3 className="text-[14px] mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                <span>입금 계좌 정보 / Bank Details</span>
              </h3>

              <div className="space-y-3">
                <div className="bg-blue-50 rounded-[12px] p-4 border border-blue-200">
                  <p className="text-[11px] text-blue-700 mb-1">은행명 / Bank</p>
                  <p className="text-[16px] text-blue-900">{request.bank}</p>
                </div>

                <div className="bg-purple-50 rounded-[12px] p-4 border border-purple-200">
                  <p className="text-[11px] text-purple-700 mb-1">계좌번호 / Account Number</p>
                  <p className="text-[16px] text-purple-900 font-mono">{request.fullAccount}</p>
                </div>

                <div className="bg-orange-50 rounded-[12px] p-4 border border-orange-200">
                  <p className="text-[11px] text-orange-700 mb-1">예금주 / Account Holder</p>
                  <p className="text-[16px] text-orange-900">{request.ownerName}</p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[13px] text-blue-900 mb-1" style={{ fontWeight: 600 }}>
                    🔐 안전한 송금 프로세스
                  </h4>
                  <ul className="text-[11px] text-blue-700 leading-relaxed space-y-1">
                    <li>• 계좌 정보 2차 확인 완료</li>
                    <li>• 은행 송금 시스템 자동 연동</li>
                    <li>• 송금 완료 후 즉시 알림 발송</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Timeline */}
          <div className="bg-white rounded-[20px] shadow-lg border border-border p-5 mb-5">
            <h3 className="text-[15px] mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>처리 일정 / Processing Timeline</span>
            </h3>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-[13px]" style={{ fontWeight: 600 }}>1</span>
                  </div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-orange-400"></div>
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>승인 즉시</p>
                  <p className="text-[11px] text-muted-foreground">은행 송금 시스템에 자동 전달</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[13px]" style={{ fontWeight: 600 }}>2</span>
                  </div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-orange-400 to-green-400"></div>
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>1-2 영업일</p>
                  <p className="text-[11px] text-muted-foreground">은행 처리 시간 (주말/공휴일 제외)</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>입금 완료</p>
                  <p className="text-[11px] text-muted-foreground">앱 알림 + SMS 발송</p>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Note (Optional) */}
          <div className="bg-white rounded-[20px] shadow-lg border border-border p-5 mb-5">
            <h3 className="text-[14px] mb-3">승인 메모 (선택사항)</h3>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="파트너님께 전달할 메시지를 입력해주세요.&#10;예: 항상 맛있는 음식 감사합니다! 🙏"
              className="w-full px-4 py-3 bg-accent rounded-[12px] border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-[13px] resize-none"
              rows={4}
            />
            <p className="text-[10px] text-muted-foreground mt-2">
              💌 따뜻한 메시지는 파트너 만족도를 높입니다
            </p>
          </div>

          {/* Understanding Message */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-[16px] p-4 border-2 border-yellow-200 mb-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <h4 className="text-[13px] text-yellow-900 mb-2" style={{ fontWeight: 600 }}>
                  ⏰ 양해 부탁드립니다
                </h4>
                <p className="text-[11px] text-yellow-800 leading-relaxed">
                  은행 시스템 처리로 인해 <span style={{ fontWeight: 600 }}>1-2 영업일</span>이 소요됩니다.<br/>
                  주말/공휴일은 처리 시간에서 제외되며,<br/>
                  입금 완료 즉시 알림으로 안내드리겠습니다. 🙏<br/>
                  <span className="text-yellow-700">파트너님의 이해와 기다림에 진심으로 감사드립니다.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-2xl z-50">
        <div className="max-w-[430px] mx-auto px-5 py-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Reject Button */}
            <button
              onClick={handleReject}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <XCircle className="w-5 h-5" />
              <span className="text-[14px]">거부</span>
            </button>

            {/* Approve Button */}
            <button
              onClick={handleApprove}
              className="bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-[12px] shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="text-[14px]">승인하기</span>
            </button>
          </div>

          <div className="text-center">
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              💚 승인 후 1-2 영업일 내 입금 완료<br/>
              감사의 마음을 담아 안전하게 전달드립니다
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
