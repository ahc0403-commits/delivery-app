import { Shield, CheckCircle, ChevronLeft } from "lucide-react";
import { useNavigation } from "../../App";

export function AuthPermissionScreen() {
  const { navigate, goBack } = useNavigation();

  const handleAllow = () => {
    navigate("phoneverify");
  };

  return (
    <div className="h-screen bg-background flex flex-col pb-20">
      {/* Back Button - Floating */}
      <button
        onClick={goBack}
        className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all active:scale-95 z-20"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[#00553D] px-5 py-6 text-white">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-center text-[24px] mb-2">안전하게 시작할게요 🔒</h1>
        <p className="text-center text-white/90 text-[14px]">
          Let's start safely
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-[20px] mb-3 text-center" style={{ fontWeight: 700 }}>
            이 정보만 있으면<br />바로 주문할 수 있어요!
          </h2>
          <p className="text-[14px] text-muted-foreground text-center mb-8">
            Just a few details to get you started 😊
          </p>

          {/* Permission List */}
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">👤</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>프로필 정보</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    이름이랑 이메일만 알려주세요<br />
                    <span className="text-[12px]">Name, email, profile picture</span>
                  </p>
                </div>
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[24px]">📱</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] mb-2" style={{ fontWeight: 600 }}>전화번호</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    배달 도착하면 알려드릴게요<br />
                    <span className="text-[12px]">For delivery notifications</span>
                  </p>
                </div>
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 rounded-[12px] p-4 border border-blue-200 mb-6">
            <p className="text-[12px] text-blue-900 leading-relaxed text-center">
              🔒 <span style={{ fontWeight: 600 }}>정보는 안전하게 보관돼요</span><br />
              <span className="text-[11px]">걱정하지 마세요. 절대 다른 곳에 공유하지 않아요!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 space-y-3 border-t border-border bg-white mb-20">
        <button
          onClick={handleAllow}
          className="w-full bg-gradient-to-r from-primary to-[#00553D] text-white py-4 rounded-[16px] shadow-lg hover:shadow-xl transition-all active:scale-95"
        >
          <span className="text-[16px]" style={{ fontWeight: 700 }}>
            좋아요, 시작할게요! 👍
          </span>
        </button>
        <button
          onClick={() => navigate("splash")}
          className="w-full bg-white text-muted-foreground py-4 rounded-[16px] border-2 border-border hover:bg-accent transition-all active:scale-95"
        >
          <span className="text-[15px]" style={{ fontWeight: 500 }}>
            나중에 할게요
          </span>
        </button>
      </div>

    </div>
  );
}