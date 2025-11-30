import { ChevronLeft, Home, Settings } from "lucide-react";
import { useNavigation } from "../App";

export function GlobalNavBar() {
  const { navigate, goBack } = useNavigation();

  const handleHomeClick = () => {
    // 홈 화면으로 이동
    navigate("home");
  };

  const handleSettingsClick = () => {
    // 마이페이지로 이동
    navigate("mypage");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-[430px] mx-auto px-4 pb-4 pointer-events-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-border/50 px-6 py-3 flex items-center justify-between">
          {/* 뒤로가기 */}
          <button
            onClick={goBack}
            className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all active:scale-95"
            aria-label="뒤로가기"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>

          {/* 홈으로 가기 */}
          <button
            onClick={handleHomeClick}
            className="w-11 h-11 bg-primary/90 rounded-full flex items-center justify-center shadow-md hover:bg-primary transition-all active:scale-95"
            aria-label="홈으로"
          >
            <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>

          {/* 설정 (마이페이지) */}
          <button
            onClick={handleSettingsClick}
            className="w-11 h-11 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-all active:scale-95"
            aria-label="설정"
          >
            <Settings className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
