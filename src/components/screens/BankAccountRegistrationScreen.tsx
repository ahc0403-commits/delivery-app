import { ChevronLeft, Camera, Upload, CheckCircle, Building, CreditCard, User, Sparkles, ScanLine, Zap } from "lucide-react";
import { useNavigation } from "../../App";
import { useState } from "react";
import { BottomNavBar } from "../BottomNavBar";

export function BankAccountRegistrationScreen() {
  const { goBack, showToast, registerBankAccount } = useNavigation();
  const [scanMethod, setScanMethod] = useState<"camera" | "upload" | "manual" | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [accountData, setAccountData] = useState({
    bankName: "",
    accountNumber: "",
    accountHolder: "",
  });

  const handleScanWithCamera = () => {
    setScanMethod("camera");
    setIsScanning(true);
    
    // 시뮬레이션: 2초 후 OCR 결과
    setTimeout(() => {
      setIsScanning(false);
      setAccountData({
        bankName: "Vietcombank",
        accountNumber: "1234567890",
        accountHolder: "Nguyen Van Minh",
      });
      showToast("✨ 통장 정보가 자동 인식되었습니다!", "success");
    }, 2000);
  };

  const handleScanWithUpload = () => {
    setScanMethod("upload");
    setIsScanning(true);
    
    // 시뮬레이션: 1.5초 후 OCR 결과
    setTimeout(() => {
      setIsScanning(false);
      setAccountData({
        bankName: "Techcombank",
        accountNumber: "9876543210",
        accountHolder: "Tran Thi Mai",
      });
      showToast("✨ 통장 정보가 자동 인식되었습니다!", "success");
    }, 1500);
  };

  const handleManualInput = () => {
    setScanMethod("manual");
  };

  const handleSubmit = () => {
    if (!accountData.bankName || !accountData.accountNumber || !accountData.accountHolder) {
      showToast("모든 정보를 입력해주세요", "error");
      return;
    }
    registerBankAccount(accountData);
    showToast("✅ 계좌가 성공적으로 등록되었습니다!", "success");
    setTimeout(() => goBack(), 1000);
  };

  return (
    <>
      <div className="h-screen overflow-y-auto bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pb-32">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary via-green-600 to-emerald-600 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="mb-4">
            <h1 className="text-[28px] mb-2">은행 계좌 등록</h1>
            <p className="text-[14px] text-white/90">Bank Account Registration</p>
          </div>

          {/* Hero Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-4 border border-white/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-[13px] text-white mb-1" style={{ fontWeight: 600 }}>
                  ⚡️ OCR로 1초 만에 등록!
                </h3>
                <p className="text-[11px] text-white/80 leading-relaxed">
                  통장 사본을 카메라로 찍거나 업로드하면<br/>
                  계좌 정보가 자동으로 입력됩니다. 🎉
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-5 py-6">
          {/* Scan Method Selection - Only show if no method selected */}
          {!scanMethod && (
            <div className="mb-6">
              <h2 className="text-[18px] mb-4 flex items-center gap-2">
                <ScanLine className="w-5 h-5 text-primary" />
                <span>등록 방법 선택</span>
              </h2>

              <div className="space-y-3">
                {/* Camera Scan */}
                <button
                  onClick={handleScanWithCamera}
                  className="w-full bg-gradient-to-r from-primary to-green-600 text-white rounded-[20px] p-6 shadow-xl hover:shadow-2xl transition-all active:scale-98 border-2 border-primary/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[18px] mb-1" style={{ fontWeight: 600 }}>
                        📸 카메라로 촬영
                      </h3>
                      <p className="text-[12px] text-white/90">
                        Camera Scan • 가장 빠른 방법!
                      </p>
                    </div>
                    <Sparkles className="w-6 h-6" />
                  </div>
                </button>

                {/* Upload Image */}
                <button
                  onClick={handleScanWithUpload}
                  className="w-full bg-white rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-all active:scale-98 border-2 border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[18px] mb-1" style={{ fontWeight: 600 }}>
                        📤 사진 업로드
                      </h3>
                      <p className="text-[12px] text-muted-foreground">
                        Upload Image • 갤러리에서 선택
                      </p>
                    </div>
                  </div>
                </button>

                {/* Manual Input */}
                <button
                  onClick={handleManualInput}
                  className="w-full bg-white rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-all active:scale-98 border-2 border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-[18px] mb-1" style={{ fontWeight: 600 }}>
                        ✍️ 직접 입력
                      </h3>
                      <p className="text-[12px] text-muted-foreground">
                        Manual Input • 수동으로 입력하기
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Info Card */}
              <div className="mt-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-[16px] p-4 border-2 border-cyan-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[13px] text-cyan-900 mb-2" style={{ fontWeight: 600 }}>
                      💡 준비물: 통장 사본 1장
                    </h4>
                    <ul className="text-[11px] text-cyan-800 leading-relaxed space-y-1">
                      <li>• 은행명, 계좌번호, 예금주가 보이게 촬영</li>
                      <li>• 흐릿하지 않게 밝은 곳에서 촬영</li>
                      <li>• OCR이 자동으로 정보를 읽어드립니다</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scanning Animation */}
          {isScanning && (
            <div className="mb-6">
              <div className="bg-white rounded-[20px] p-8 shadow-xl border-2 border-primary/30">
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center animate-pulse">
                      <ScanLine className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  </div>
                  <h3 className="text-[20px] mb-2" style={{ fontWeight: 600 }}>
                    🔍 스캔 중...
                  </h3>
                  <p className="text-[13px] text-muted-foreground text-center">
                    AI가 통장 정보를 읽고 있어요<br/>
                    잠시만 기다려주세요! ✨
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Account Information Form - Show after scan or manual input */}
          {scanMethod && !isScanning && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span>계좌 정보 확인</span>
                </h2>
                {scanMethod !== "manual" && (
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[11px] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>OCR 완료</span>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-[20px] shadow-xl border-2 border-border overflow-hidden">
                <div className="p-5 space-y-5">
                  {/* Bank Name */}
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-muted-foreground mb-2">
                      <Building className="w-4 h-4 text-primary" />
                      <span>은행명 / Bank Name</span>
                    </label>
                    <input
                      type="text"
                      value={accountData.bankName}
                      onChange={(e) => setAccountData({ ...accountData, bankName: e.target.value })}
                      placeholder="예: Vietcombank"
                      className="w-full px-4 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-[12px] border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-[15px]"
                    />
                  </div>

                  {/* Account Number */}
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-muted-foreground mb-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>계좌번호 / Account Number</span>
                    </label>
                    <input
                      type="text"
                      value={accountData.accountNumber}
                      onChange={(e) => setAccountData({ ...accountData, accountNumber: e.target.value })}
                      placeholder="예: 1234567890"
                      className="w-full px-4 py-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-[12px] border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-[15px] font-mono"
                    />
                  </div>

                  {/* Account Holder */}
                  <div>
                    <label className="flex items-center gap-2 text-[13px] text-muted-foreground mb-2">
                      <User className="w-4 h-4 text-primary" />
                      <span>예금주 / Account Holder</span>
                    </label>
                    <input
                      type="text"
                      value={accountData.accountHolder}
                      onChange={(e) => setAccountData({ ...accountData, accountHolder: e.target.value })}
                      placeholder="예: Nguyen Van Minh"
                      className="w-full px-4 py-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-[12px] border-2 border-orange-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-[15px]"
                    />
                  </div>
                </div>

                {/* Preview Card */}
                <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-6 border-t-2 border-dashed border-border">
                  <p className="text-[11px] text-white/60 mb-3">미리보기 / Preview</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Building className="w-4 h-4 text-white/60" />
                      <span className="text-[14px]">{accountData.bankName || "은행명"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-4 h-4 text-white/60" />
                      <span className="text-[14px] font-mono">{accountData.accountNumber || "계좌번호"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-white/60" />
                      <span className="text-[14px]">{accountData.accountHolder || "예금주"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Re-scan Button */}
              {scanMethod !== "manual" && (
                <button
                  onClick={() => {
                    setScanMethod(null);
                    setAccountData({ bankName: "", accountNumber: "", accountHolder: "" });
                  }}
                  className="w-full mt-4 bg-white text-foreground py-4 rounded-[12px] shadow-md hover:shadow-lg transition-all active:scale-98 border-2 border-border"
                >
                  <span className="text-[14px]">🔄 다시 스캔하기</span>
                </button>
              )}
            </div>
          )}

          {/* Security Notice */}
          {scanMethod && !isScanning && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-[16px] p-4 border-2 border-green-200 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-[13px] text-green-900 mb-2" style={{ fontWeight: 600 }}>
                    🔐 안전한 계좌 등록
                  </h4>
                  <ul className="text-[11px] text-green-800 leading-relaxed space-y-1">
                    <li>• 계좌 정보는 암호화되어 안전하게 저장됩니다</li>
                    <li>• 출금/충전 시에만 사용되며 제3자에게 공유되지 않습니다</li>
                    <li>• 언제든 MyPage에서 수정/삭제 가능합니다</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Submit Button */}
      {scanMethod && !isScanning && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-2xl z-50">
          <div className="max-w-[430px] mx-auto px-5 py-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-primary to-green-600 text-white py-5 rounded-[12px] shadow-xl hover:shadow-2xl transition-all active:scale-98 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-[16px]" style={{ fontWeight: 600 }}>
                계좌 등록 완료
              </span>
            </button>
            <p className="text-center text-[10px] text-muted-foreground mt-3">
              🔒 암호화되어 안전하게 저장됩니다
            </p>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}