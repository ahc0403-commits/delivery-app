import { Shield, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigation } from "../../App";

export function PhoneVerificationScreen() {
  const { navigate, goBack } = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(180);

  // Auto-navigate when 6 digits entered
  useEffect(() => {
    if (verificationCode.length === 6) {
      // Simulate verification
      setTimeout(() => {
        navigate("welcome");
      }, 500);
    }
  }, [verificationCode, navigate]);

  // Countdown timer
  useEffect(() => {
    if (codeSent && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [codeSent, countdown]);

  const handleSendCode = () => {
    if (!phoneNumber) {
      alert("전화번호를 입력해주세요 / Please enter phone number");
      return;
    }
    setCodeSent(true);
    setCountdown(180);
  };

  return (
    <div className="min-h-screen h-full bg-gradient-to-b from-primary via-[#00553D] to-[#004D32] flex flex-col px-6 relative overflow-hidden pb-24">
      {/* Back Button - Floating */}
      <button 
        onClick={goBack}
        className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95 z-20"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center py-12">
        {/* Shield Icon with Glow */}
        <div className="flex items-center justify-center mb-8 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
            <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-[32px] text-center mb-4 animate-fade-in">
          안전한 서비스 이용을 위해
        </h1>
        <p className="text-white/70 text-[16px] text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          본인 확인이 필요해요<br />
          <span className="text-[14px]">Please verify your phone number</span>
        </p>

        {/* Phone Number Input */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <label className="text-white/90 text-[14px] mb-3 block">
            전화번호 / Phone Number
          </label>
          <div className="flex gap-3">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="010-1234-5678"
              disabled={codeSent}
              className="flex-1 px-5 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 text-[16px] text-white placeholder-white/40 disabled:bg-white/5 disabled:text-white/50 transition-all"
            />
            <button
              onClick={handleSendCode}
              disabled={codeSent}
              className={`px-6 py-4 rounded-[16px] transition-all active:scale-95 whitespace-nowrap shadow-lg ${
                codeSent
                  ? "bg-white/20 text-white/50 cursor-not-allowed"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              <span className="text-[14px]" style={{ fontWeight: 700 }}>
                {codeSent ? "발송됨" : "인증번호"}
              </span>
            </button>
          </div>
          {!codeSent && (
            <p className="text-white/50 text-[12px] mt-3">
              배달 및 주문 알림을 받을 번호예요
            </p>
          )}
        </div>

        {/* Verification Code Input - Only shown after code sent */}
        {codeSent && (
          <div className="mb-6 animate-slide-up">
            <label className="text-white/90 text-[14px] mb-3 block">
              인증번호 6자리 / Verification Code
            </label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="○ ○ ○ ○ ○ ○"
              maxLength={6}
              autoFocus
              className="w-full px-6 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 text-[28px] text-center tracking-[0.3em] text-white placeholder-white/30 transition-all"
              style={{ fontWeight: 700 }}
            />
            <div className="flex items-center justify-between mt-3">
              <button className="text-white/60 text-[12px] hover:text-white/80 transition-colors">
                인증번호 재발송
              </button>
              <p className="text-white/90 text-[13px] bg-white/10 px-3 py-1 rounded-full" style={{ fontWeight: 600 }}>
                {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}
              </p>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-[16px] p-5 border border-white/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-3">
            <span className="text-[24px] flex-shrink-0">💡</span>
            <div>
              <p className="text-white/80 text-[12px] leading-relaxed">
                SMS로 발송된 6자리 인증번호를 입력하면<br />
                자동으로 다음 화면으로 이동합니다<br />
                <span className="text-white mt-2 inline-block" style={{ fontWeight: 600 }}>
                  Demo: 123456
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        {codeSent && (
          <div className="mt-8 flex items-center justify-center gap-2 animate-fade-in">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}