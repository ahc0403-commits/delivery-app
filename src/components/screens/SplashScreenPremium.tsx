import { MessageCircle, Apple } from "lucide-react";
import { StrawberryLogoLineArt } from "../icons/StrawberryLogoLineArt";

export function SplashScreen() {
  return (
    <div className="h-screen w-full bg-[#00704A] flex flex-col items-center justify-between relative overflow-hidden">
      {/* Subtle Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00704A] via-[#00704A] to-[#004D32] opacity-60"></div>
      
      {/* Main Content - Centered Logo & Typography */}
      <div className="flex-1 flex flex-col items-center justify-center gap-0 relative z-10 px-8">
        
        {/* Premium Line Art Logo with Glow */}
        <div className="relative mb-12 animate-elegant-fade-in">
          {/* Glow Effect Behind Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/10 rounded-full blur-3xl animate-soft-glow"></div>
          </div>
          
          {/* Line Art Strawberry Logo */}
          <div className="relative">
            <StrawberryLogoLineArt size={100} color="#FFFFFF" />
          </div>
        </div>
        
        {/* Premium Typography Section */}
        <div className="text-center animate-elegant-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* English Title - High-Contrast Serif */}
          <h1 
            className="text-white text-[52px] mb-4 tracking-tight leading-none"
            style={{ 
              fontFamily: '"Playfair Display", "Bodoni MT", "Didot", Georgia, serif',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              fontStyle: 'normal'
            }}
          >
            Deliberry
          </h1>
          
          {/* Korean Title - Myeongjo (명조) Style */}
          <p 
            className="text-white/95 text-[20px] mb-8"
            style={{ 
              fontFamily: '"Noto Serif KR", "KoPub Batang", "Nanum Myeongjo", Georgia, serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
              lineHeight: 1.6
            }}
          >
            배달나라
          </p>
          
          {/* Elegant Subtitle - Minimalist */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-[1px] bg-white/30"></div>
            <p 
              className="text-white/70 text-[11px] uppercase tracking-widest"
              style={{ 
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 300,
                letterSpacing: '0.25em'
              }}
            >
              Premium
            </p>
            <div className="w-8 h-[1px] bg-white/30"></div>
          </div>
          
          <p 
            className="text-white/60 text-[12px]"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 300,
              letterSpacing: '0.08em',
              fontStyle: 'italic'
            }}
          >
            Simplicity of Freshness
          </p>
        </div>
      </div>
      
      {/* Minimal Login Buttons - Bottom 20% */}
      <div className="w-full max-w-sm px-8 pb-12 space-y-2 relative z-10 animate-elegant-fade-in" style={{ animationDelay: '0.6s' }}>
        {/* Kakao Login - Outlined Minimal Style */}
        <button className="w-full bg-transparent border border-[#FEE500] text-[#FEE500] py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:bg-[#FEE500]/10 active:scale-[0.98] backdrop-blur-sm">
          <MessageCircle className="w-4 h-4" fill="currentColor" strokeWidth={0} />
          <span 
            className="text-[13px]"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            카카오로 시작하기
          </span>
        </button>
        
        {/* Zalo Login */}
        <button className="w-full bg-transparent border border-[#0068FF] text-[#0068FF] py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:bg-[#0068FF]/10 active:scale-[0.98] backdrop-blur-sm">
          <div className="w-4 h-4 bg-[#0068FF] rounded-full flex items-center justify-center">
            <span className="text-white text-[9px]" style={{ fontWeight: 700 }}>Z</span>
          </div>
          <span 
            className="text-[13px]"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            Zalo로 시작하기
          </span>
        </button>
        
        {/* Google Login */}
        <button className="w-full bg-transparent border border-white/40 text-white py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:bg-white/5 active:scale-[0.98] backdrop-blur-sm">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span 
            className="text-[13px]"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            Google로 시작하기
          </span>
        </button>
        
        {/* Apple Login */}
        <button className="w-full bg-white/10 border border-white/30 text-white py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:bg-white/15 active:scale-[0.98] backdrop-blur-md">
          <Apple className="w-4 h-4" fill="currentColor" strokeWidth={0} />
          <span 
            className="text-[13px]"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              letterSpacing: '0.02em'
            }}
          >
            Apple로 시작하기
          </span>
        </button>
        
        {/* Minimal Footer Text */}
        <p 
          className="text-center text-white/40 text-[9px] pt-6 uppercase"
          style={{ 
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 300,
            letterSpacing: '0.2em'
          }}
        >
          Korea × Vietnam
        </p>
      </div>

      {/* Premium Animations & Effects */}
      <style>{`
        /* Elegant Fade-In Animation */
        @keyframes elegant-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-elegant-fade-in {
          animation: elegant-fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        /* Soft Glow Effect Behind Logo */
        @keyframes soft-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        .animate-soft-glow {
          animation: soft-glow 4s ease-in-out infinite;
        }

        /* Import Premium Serif Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Serif+KR:wght@200;300;400;500&display=swap');
      `}</style>
    </div>
  );
}
