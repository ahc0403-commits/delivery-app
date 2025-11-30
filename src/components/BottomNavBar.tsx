import { ChevronLeft, Home, User } from "lucide-react";
import { useNavigation } from "../App";

export function BottomNavBar() {
  const { navigate, goBack } = useNavigation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-[430px] mx-auto">
        <div className="bg-white/80 backdrop-blur-lg border-t border-border/50 px-6 py-4 shadow-lg">
          <div className="flex items-center justify-around gap-4">
            {/* Back Button */}
            <button
              onClick={goBack}
              className="flex flex-col items-center gap-1 transition-all active:scale-90 hover:opacity-80"
            >
              <div className="w-11 h-11 bg-accent/80 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-6 h-6 text-foreground" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] text-muted-foreground">뒤로</span>
            </button>

            {/* Home Button */}
            <button
              onClick={() => navigate("home")}
              className="flex flex-col items-center gap-1 transition-all active:scale-90 hover:opacity-80"
            >
              <div className="w-11 h-11 bg-primary/90 rounded-full flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] text-primary" style={{ fontWeight: 600 }}>홈</span>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => navigate("mypage")}
              className="flex flex-col items-center gap-1 transition-all active:scale-90 hover:opacity-80"
            >
              <div className="w-11 h-11 bg-accent/80 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-foreground" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] text-muted-foreground">설정</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
