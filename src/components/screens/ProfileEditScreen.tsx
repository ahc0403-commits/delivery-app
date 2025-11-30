import { ChevronLeft, Camera, Check, User, Mail, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

export function ProfileEditScreen() {
  const { goBack, showToast } = useNavigation();
  const [name, setName] = useState("Hyochang");
  const [email, setEmail] = useState("hyochang@email.com");
  const [phone, setPhone] = useState("+84 90 123 4567");
  const [birthday, setBirthday] = useState("1995-03-15");

  const handleSave = () => {
    showToast("프로필이 업데이트되었습니다! ✅", "success");
    goBack();
  };

  return (
    <div className="h-screen bg-background overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
        <button
          onClick={goBack}
          className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
        </button>
        <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
          정보 수정
        </h1>
        <div className="w-10 h-10" />
      </div>

      {/* Profile Photo Section */}
      <div className="bg-white px-6 py-8 border-b border-border">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-[#004D32] rounded-full flex items-center justify-center text-[48px] shadow-lg">
              👤
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-background flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
              <Camera className="w-4 h-4 text-primary" strokeWidth={2.5} />
            </button>
          </div>
          <p className="text-[12px] text-muted-foreground mt-3">
            프로필 사진 변경 • Change Photo
          </p>
        </div>
      </div>

      {/* Edit Form */}
      <div className="px-6 pt-6 space-y-5">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
            이름 • Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <User className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-[12px] text-[15px] focus:border-primary transition-all outline-none"
              placeholder="이름을 입력하세요"
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
            이메일 • Email
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Mail className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-[12px] text-[15px] focus:border-primary transition-all outline-none"
              placeholder="이메일을 입력하세요"
            />
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
            전화번호 • Phone Number
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Phone className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-[12px] text-[15px] focus:border-primary transition-all outline-none"
              placeholder="+84 90 123 4567"
            />
          </div>
        </motion.div>

        {/* Birthday */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-[13px] mb-2 text-muted-foreground" style={{ fontWeight: 500 }}>
            생년월일 • Birthday
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Calendar className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
            </div>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-border rounded-[12px] text-[15px] focus:border-primary transition-all outline-none"
            />
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-accent rounded-[12px] p-4"
        >
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            💡 <span style={{ fontWeight: 600 }}>개인정보 보호</span><br />
            회원님의 정보는 안전하게 보호되며, 배달 및 주문 처리에만 사용됩니다.
          </p>
        </motion.div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-xl z-40 px-5 py-4">
        <div className="max-w-[430px] mx-auto">
          <button
            onClick={handleSave}
            className="w-full py-4 bg-primary text-white rounded-[12px] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
          >
            <span className="text-[16px]" style={{ fontWeight: 700 }}>
              저장하기 • Save Changes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}