import { ChevronLeft, Phone, MessageCircle, Navigation, X } from "lucide-react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function DeliveryMapScreen() {
  const { navigate } = useNavigation();

  return (
    <div className="h-screen overflow-hidden bg-white relative">
      {/* Grab App Header */}
      <div className="bg-[#00B14F] px-4 py-3 shadow-md relative z-20">
        <div className="flex items-center gap-3">
          {/* Back Button */}
          <button 
            onClick={() => navigate("chat")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
          
          <div className="flex-1">
            <h1 className="text-white text-[18px]" style={{ fontWeight: 700 }}>Grab</h1>
            <p className="text-white/80 text-[11px]">실시간 배달 추적</p>
          </div>
          
          {/* Grab Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#00B14F] text-[16px]" style={{ fontWeight: 800 }}>G</span>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 h-[380px]">
        {/* Simplified Map Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-400"></div>
            ))}
          </div>
        </div>

        {/* Street Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <line x1="0" y1="150" x2="400" y2="150" stroke="#666" strokeWidth="8" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#666" strokeWidth="8" />
          <line x1="0" y1="280" x2="400" y2="280" stroke="#666" strokeWidth="5" />
        </svg>

        {/* Map Elements */}
        <div className="absolute inset-0 p-6">
          {/* Restaurant Pin */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute top-16 left-10"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <span className="text-white text-[20px]">🏪</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
              <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-[11px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                신당 떡볶이
              </div>
            </div>
          </motion.div>

          {/* User Location Pin */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute bottom-20 right-10"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <span className="text-white text-[20px]">🏠</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-blue-500"></div>
              <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg text-[11px] whitespace-nowrap" style={{ fontWeight: 500 }}>
                내 위치
              </div>
            </div>
          </motion.div>

          {/* Driver Position - Animated */}
          <motion.div 
            initial={{ x: -50, y: -30 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              {/* Pulsing Circle */}
              <div className="absolute inset-0 w-16 h-16 -m-2 bg-[#00B14F] rounded-full opacity-30 animate-ping"></div>
              
              {/* Main Icon */}
              <div className="relative w-14 h-14 bg-[#00B14F] rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                <span className="text-white text-[24px]">🛵</span>
              </div>
              
              {/* Direction Arrow */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Navigation className="w-6 h-6 text-[#00B14F] fill-[#00B14F] rotate-45" />
              </div>
            </div>
          </motion.div>

          {/* Route Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 70 100 Q 150 180, 200 200 Q 250 220, 300 300"
              stroke="#00B14F"
              strokeWidth="4"
              strokeDasharray="10,6"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* ETA Floating Badge */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl border-2 border-[#00B14F]"
        >
          <div className="text-center">
            <p className="text-[10px] text-gray-500 mb-0.5">도착 예정</p>
            <p className="text-[24px] text-[#00B14F]" style={{ fontWeight: 700 }}>5분</p>
          </div>
        </motion.div>
      </div>

      {/* Driver Info Bottom Card */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[28px] shadow-2xl"
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>

        <div className="px-5 pb-8">
          {/* Status Badge */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#00B14F]/10 text-[#00B14F] px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B14F] rounded-full animate-pulse"></span>
              <span className="text-[13px]" style={{ fontWeight: 600 }}>배달 중 • On the way</span>
            </div>
          </div>

          {/* Driver Header */}
          <div className="flex items-center gap-4 mb-4">
            {/* Driver Photo */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B14F] to-green-600 rounded-full flex items-center justify-center shadow-lg border-3 border-white">
              <span className="text-[32px]">👨</span>
            </div>
            
            {/* Driver Details */}
            <div className="flex-1">
              <h3 className="text-[17px] mb-1" style={{ fontWeight: 600 }}>Nguyen Van A</h3>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full">
                  <span className="text-yellow-500 text-[12px]">⭐</span>
                  <span className="text-[13px]" style={{ fontWeight: 600 }}>4.9</span>
                </div>
                <span className="text-[12px] text-gray-500">• 2,340 배달</span>
              </div>
            </div>

            {/* Vehicle Badge */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-1">
                <span className="text-[24px]">🏍️</span>
              </div>
              <p className="text-[10px] text-gray-500">59-X1 1234</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[#00B14F] text-white py-4 rounded-[14px] shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" strokeWidth={2} />
              <span className="text-[15px]" style={{ fontWeight: 600 }}>전화하기</span>
            </button>
            <button 
              onClick={() => navigate("chat")}
              className="bg-white border-2 border-[#00B14F] text-[#00B14F] py-4 rounded-[14px] shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              <span className="text-[15px]" style={{ fontWeight: 600 }}>채팅하기</span>
            </button>
          </div>

          {/* Grab Branding */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-2">
            <div className="w-5 h-5 bg-[#00B14F] rounded flex items-center justify-center">
              <span className="text-white text-[10px]" style={{ fontWeight: 800 }}>G</span>
            </div>
            <p className="text-[11px] text-gray-400">
              Powered by Grab • #GRB-2024-1129
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
