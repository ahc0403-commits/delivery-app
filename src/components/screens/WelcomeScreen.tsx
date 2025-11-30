import { Sparkles, Heart } from "lucide-react";
import { useEffect } from "react";
import { useNavigation } from "../../App";

export function WelcomeScreen() {
  const { navigate } = useNavigation();

  useEffect(() => {
    // 3초 후 자동으로 Home 화면으로 이동
    const timer = setTimeout(() => {
      navigate("home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-b from-primary via-[#00553D] to-[#004D32] flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Animated Icon */}
        <div className="flex items-center justify-center mb-8 animate-scale-in">
          <div className="relative">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Icon Container */}
            <div className="relative w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl">
              <Sparkles className="w-16 h-16 text-white animate-bounce" strokeWidth={1.5} />
            </div>
            
            {/* Floating Hearts */}
            <div className="absolute -top-4 -right-4 animate-float">
              <Heart className="w-8 h-8 text-white fill-white opacity-80" strokeWidth={0} />
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-6 animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-white text-[36px] leading-tight" style={{ fontWeight: 700 }}>
            환영해요! 🎉
          </h1>
          
          {/* Subtitle - Toss Tone */}
          <p className="text-white text-[18px] leading-relaxed px-4" style={{ fontWeight: 500 }}>
            우리와 이제부터<br />
            맛있는 여정을 함께해요
          </p>

          {/* Korean/Vietnamese */}
          <p className="text-white/70 text-[14px] leading-relaxed">
            Chào mừng bạn!<br />
            Hãy cùng chúng tôi bắt đầu hành trình ẩm thực tuyệt vời
          </p>
        </div>

        {/* Loading Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
          }
          75% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce {
          animation: bounce 0.6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}