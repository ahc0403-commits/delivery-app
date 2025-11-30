import { MapPin, Bell, Camera, CheckCircle2, Sparkles, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";

export function AppPermissionsScreen() {
  const { navigate, goBack } = useNavigation();
  const [permissions, setPermissions] = useState({
    location: false,
    notification: false,
    camera: false,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions({ ...permissions, [key]: !permissions[key] });
  };

  const handleContinue = () => {
    // Navigate to Customer Home Screen
    navigate("home");
  };

  const allGranted = Object.values(permissions).every(p => p);

  const permissionsList = [
    {
      key: "location" as keyof typeof permissions,
      icon: MapPin,
      iconBg: "from-red-500 to-pink-500",
      title: "위치 정보",
      titleEn: "Location",
      description: "주변 맛집을 찾고 정확한 배달 주소를 설정해요",
      descriptionEn: "Find nearby restaurants and set delivery address",
      emoji: "📍",
      required: true,
    },
    {
      key: "notification" as keyof typeof permissions,
      icon: Bell,
      iconBg: "from-blue-500 to-cyan-500",
      title: "알림",
      titleEn: "Notifications",
      description: "주문 상태와 배달 현황을 실시간으로 알려드려요",
      descriptionEn: "Receive real-time order and delivery updates",
      emoji: "🔔",
      required: true,
    },
    {
      key: "camera" as keyof typeof permissions,
      icon: Camera,
      iconBg: "from-purple-500 to-indigo-500",
      title: "카메라",
      titleEn: "Camera",
      description: "음식 리뷰 사진을 찍어 공유할 수 있어요",
      descriptionEn: "Take and share photos in reviews",
      emoji: "📷",
      required: false,
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-primary via-[#00553D] to-[#004D32] flex flex-col relative overflow-hidden">
      {/* Back Button - Floating */}
      <button 
        onClick={goBack}
        className="absolute top-4 left-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all active:scale-95 z-20"
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </button>

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-6 py-12 relative z-10 overflow-y-auto">
        {/* Header Icon */}
        <div className="flex items-center justify-center mb-6 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
            <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <Sparkles className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-[28px] text-center mb-3 animate-fade-in">
          더 나은 경험을 위해<br />권한을 허용해주세요
        </h1>
        <p className="text-white/70 text-[14px] text-center mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Allow permissions for a better experience
        </p>

        {/* Permissions List */}
        <div className="space-y-4 mb-6">
          {permissionsList.map((perm, index) => {
            const Icon = perm.icon;
            const isGranted = permissions[perm.key];

            return (
              <div
                key={perm.key}
                className="animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div
                  className={`bg-white/10 backdrop-blur-md rounded-[20px] p-5 border-2 transition-all ${
                    isGranted ? "border-white/40 shadow-xl" : "border-white/20 shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${perm.iconBg} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white text-[18px]" style={{ fontWeight: 600 }}>
                          {perm.title}
                        </h3>
                        {perm.required && (
                          <span className="bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-full" style={{ fontWeight: 700 }}>
                            필수
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-[12px] mb-1">
                        {perm.titleEn}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/90 text-[14px] leading-relaxed mb-2">
                    {perm.description}
                  </p>
                  <p className="text-white/60 text-[12px] leading-relaxed mb-4">
                    {perm.descriptionEn}
                  </p>

                  {/* Toggle Button */}
                  <button
                    onClick={() => togglePermission(perm.key)}
                    className={`w-full py-4 rounded-[16px] transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg ${
                      isGranted
                        ? "bg-white text-primary"
                        : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                    }`}
                  >
                    {isGranted && <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />}
                    <span className="text-[15px]" style={{ fontWeight: 700 }}>
                      {isGranted ? "✓ 허용됨 / Allowed" : `${perm.emoji} 허용하기 / Allow`}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-[16px] p-4 border border-white/20 mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-start gap-3">
            <span className="text-[20px] flex-shrink-0">🔒</span>
            <div>
              <p className="text-white/80 text-[12px] leading-relaxed">
                나중에 설정에서 언제든지 변경할 수 있어요<br />
                You can change these settings anytime
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-24 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Bottom Button - Fixed */}
      <div className="px-6 pb-6 pt-4 relative z-10 animate-fade-in mb-20" style={{ animationDelay: '0.7s' }}>
        <button
          onClick={handleContinue}
          className={`w-full py-5 rounded-[20px] transition-all active:scale-95 flex items-center justify-center gap-3 shadow-2xl ${
            allGranted
              ? "bg-white text-primary"
              : "bg-white/90 text-primary hover:bg-white"
          }`}
        >
          <span className="text-[18px]" style={{ fontWeight: 700 }}>
            {allGranted ? "🎉 시작하기 / Start" : "나중에 하기 / Skip"}
          </span>
          <Sparkles className="w-5 h-5" />
        </button>
        {!allGranted && (
          <p className="text-center text-white/60 text-[11px] mt-3">
            필수 권한은 나중에 앱에서 요청될 수 있어요
          </p>
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