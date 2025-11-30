import { Bell, Coffee, Clock, CheckCircle2, Sparkles } from "lucide-react";

export function RegistrationPendingScreen() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Simple Header */}
      <div className="bg-white px-5 py-4 shadow-sm border-b border-border">
        <div className="text-center">
          <h1 className="text-[18px]">가입 심사 중 / Under Review</h1>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-24">
        
        {/* Animated Coffee Cup Illustration */}
        <div className="relative mb-8">
          {/* Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-amber-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
          </div>

          {/* Coffee Cup SVG - Friendly Mascot Style */}
          <div className="relative animate-float">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cup Body */}
              <path
                d="M40 50C40 50 38 48 40 46C42 44 58 44 80 44C102 44 118 44 120 46C122 48 120 50 120 50L110 110C110 110 108 120 100 120H60C52 120 50 110 50 110L40 50Z"
                fill="#00704A"
                opacity="0.9"
              />
              
              {/* Coffee Inside */}
              <ellipse cx="80" cy="50" rx="38" ry="8" fill="#8B4513" />
              
              {/* Cup Handle */}
              <path
                d="M120 60C120 60 130 60 135 70C140 80 135 90 125 90C125 90 122 90 120 88"
                stroke="#00704A"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
              
              {/* Steam - 3 Curvy Lines */}
              <path
                d="M60 35C60 35 58 25 62 20"
                stroke="#00704A"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
                className="animate-steam-1"
              />
              <path
                d="M80 32C80 32 78 22 82 17"
                stroke="#00704A"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
                className="animate-steam-2"
              />
              <path
                d="M100 35C100 35 98 25 102 20"
                stroke="#00704A"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
                className="animate-steam-3"
              />
              
              {/* Cute Face on Cup */}
              <circle cx="70" cy="75" r="3" fill="white" opacity="0.8" />
              <circle cx="90" cy="75" r="3" fill="white" opacity="0.8" />
              <path
                d="M70 90C70 90 75 95 80 95C85 95 90 90 90 90"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Sparkles Around Cup */}
          <div className="absolute -top-4 -right-4 animate-spin-slow">
            <Sparkles className="w-6 h-6 text-yellow-500" fill="currentColor" />
          </div>
          <div className="absolute -bottom-2 -left-4 animate-spin-slow" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-5 h-5 text-amber-400" fill="currentColor" />
          </div>
        </div>

        {/* Headline - Friendly Toss Tone */}
        <h2 className="text-[24px] text-center mb-3 leading-tight" style={{ fontWeight: 600 }}>
          서류를 꼼꼼히<br />보고 있어요 ☕️
        </h2>
        
        <p className="text-[15px] text-muted-foreground text-center mb-8 leading-relaxed">
          We are carefully reviewing<br />your documents
        </p>

        {/* Info Card */}
        <div className="bg-white rounded-[16px] p-5 shadow-md border border-border w-full mb-6">
          <div className="space-y-4">
            {/* Timeline Item 1 */}
            <div className="flex items-start gap-3">
              <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>Documents Received ✓</p>
                <p className="text-[11px] text-muted-foreground">사업자 등록증이 접수되었어요</p>
              </div>
            </div>

            {/* Timeline Item 2 - In Progress */}
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 flex-shrink-0 animate-pulse">
                <Clock className="w-4 h-4 text-amber-600" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>Admin Review In Progress...</p>
                <p className="text-[11px] text-muted-foreground">관리자가 검토 중이에요 (보통 24시간 소요)</p>
              </div>
            </div>

            {/* Timeline Item 3 - Pending */}
            <div className="flex items-start gap-3 opacity-40">
              <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                <Bell className="w-4 h-4 text-gray-400" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] mb-1" style={{ fontWeight: 600 }}>Notification Sent</p>
                <p className="text-[11px] text-muted-foreground">승인되면 알림으로 알려드려요</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtext - Reassuring */}
        <div className="bg-blue-50 rounded-[16px] p-4 border border-blue-200 w-full mb-6">
          <p className="text-[13px] text-center leading-relaxed" style={{ fontWeight: 500 }}>
            보통 24시간 안에 승인이 완료돼요.<br />
            승인되면 알림으로 알려드릴게요! 📱
          </p>
          <p className="text-[11px] text-muted-foreground text-center mt-2">
            Approval usually takes 24h.<br />We'll notify you when ready!
          </p>
        </div>

        {/* Notification Toggle */}
        <div className="bg-white rounded-[16px] p-4 shadow-sm border border-border w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 rounded-full p-2">
                <Bell className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[13px]" style={{ fontWeight: 600 }}>Get notified via Zalo</p>
                <p className="text-[11px] text-muted-foreground">Zalo로 알림 받기</p>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <button className="relative w-14 h-8 bg-primary rounded-full shadow-inner transition-colors">
              <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Action - Explore Demo */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50 p-5">
        <div className="max-w-[430px] mx-auto">
          <button className="w-full bg-gradient-to-r from-primary to-[#00553D] text-white py-4 rounded-[12px] shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform mb-2">
            <Coffee className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-[15px]" style={{ fontWeight: 700 }}>
              Explore App Demo / 앱 구경하며 기다리기
            </span>
          </button>
          
          <p className="text-center text-[10px] text-muted-foreground">
            You can explore the app features while waiting for approval
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        /* Floating Animation for Coffee Cup */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Steam Animations - Rising Effect */
        @keyframes steam-rise-1 {
          0% {
            opacity: 0.4;
            transform: translateY(0) translateX(0);
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) translateX(5px);
          }
        }
        @keyframes steam-rise-2 {
          0% {
            opacity: 0.4;
            transform: translateY(0) translateX(0);
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateY(-25px) translateX(-3px);
          }
        }
        @keyframes steam-rise-3 {
          0% {
            opacity: 0.4;
            transform: translateY(0) translateX(0);
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) translateX(8px);
          }
        }

        .animate-steam-1 {
          animation: steam-rise-1 2s ease-out infinite;
        }
        .animate-steam-2 {
          animation: steam-rise-2 2.5s ease-out infinite 0.5s;
        }
        .animate-steam-3 {
          animation: steam-rise-3 2.2s ease-out infinite 1s;
        }

        /* Slow Spin for Sparkles */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
