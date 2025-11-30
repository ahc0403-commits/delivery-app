import { ChevronLeft, Users, Plus, Check, Clock, MessageCircle, Lock, Share2, Copy, Crown, UserPlus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { toast } from "sonner";
import { motion } from "motion/react";

const participants = [
  {
    id: 1,
    name: "김민지",
    nameVi: "Kim Minji (You)",
    avatar: "👩",
    isHost: true,
    itemsList: ["치즈 떡볶이 x1", "김치찌개 x1"],
    amount: "95,000₫",
    locked: true,
  },
  {
    id: 2,
    name: "응웬 티 란",
    nameVi: "Nguyen Thi Lan",
    avatar: "👩‍🦰",
    isHost: false,
    itemsList: ["오리지널 떡볶이 x1", "튀김 세트 x1"],
    amount: "75,000₫",
    locked: true,
  },
  {
    id: 3,
    name: "박서준",
    nameVi: "Park Seo Jun",
    avatar: "👨",
    isHost: false,
    itemsList: [],
    amount: "0₫",
    waiting: true,
    locked: false,
  },
];

export function GroupOrderScreen() {
  const { goBack, navigate } = useNavigation();
  const [lockOrder, setLockOrder] = useState(true);
  const [copied, setCopied] = useState(false);
  
  const inviteLink = "deli-berry.app/group/ABC123";
  
  const handleCopyLink = () => {
    setCopied(true);
    toast.success("초대 링크가 복사되었습니다!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmOrder = () => {
    toast.success("공동주문이 확정되었습니다!");
    navigate("cart");
  };
  
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-primary/5 to-background pb-24">
      {/* Header */}
      <div className="bg-white px-5 py-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button onClick={goBack} className="p-2 hover:bg-accent rounded-full transition-all active:scale-95">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-[18px]">공동주문</h1>
          <p className="text-[11px] text-muted-foreground">Group Order • 신당 떡볶이</p>
        </div>
        <button 
          onClick={handleCopyLink}
          className="p-2 hover:bg-accent rounded-full"
        >
          <Share2 className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Status Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-5 mt-4 bg-gradient-to-r from-primary to-orange-500 text-white rounded-[16px] p-5 shadow-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[16px]" style={{ fontWeight: 600 }}>3명 참여중</p>
              <p className="text-[11px] text-white/80">2명 주문 완료 • 1명 대기</p>
            </div>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-[14px]" style={{ fontWeight: 600 }}>12:45</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white/20 rounded-full h-2 mb-2">
          <div className="bg-white rounded-full h-2 w-[66%] transition-all" />
        </div>
        <p className="text-[11px] text-white/80 text-center">2/3 참여자 주문 완료</p>
      </motion.div>

      {/* Invite Link Card */}
      <div className="mx-5 mt-4 bg-white rounded-[16px] p-4 shadow-md border border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-[13px]" style={{ fontWeight: 500 }}>친구 초대 링크</p>
            <p className="text-[11px] text-muted-foreground">{inviteLink}</p>
          </div>
          <button 
            onClick={handleCopyLink}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all active:scale-95 ${
              copied 
                ? "bg-green-500 text-white" 
                : "bg-primary text-white"
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span className="text-[12px]">{copied ? "복사됨" : "복사"}</span>
          </button>
        </div>
      </div>

      {/* Participants List */}
      <div className="px-5 mt-6">
        <h2 className="text-[14px] text-muted-foreground mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" />
          참여자 목록 / Participants
        </h2>
        <div className="space-y-3">
          {participants.map((participant, idx) => (
            <motion.div
              key={participant.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-[16px] p-4 shadow-md border-2 ${
                participant.isHost ? "border-primary/30" : 
                participant.waiting ? "border-gray-200 opacity-70" : "border-green-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-[24px] relative">
                  {participant.avatar}
                  {participant.isHost && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Crown className="w-3 h-3 text-yellow-800" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[15px]" style={{ fontWeight: 600 }}>{participant.name}</span>
                    {participant.isHost && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-[10px]">
                        방장
                      </span>
                    )}
                    {participant.locked && !participant.waiting && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        완료
                      </span>
                    )}
                    {participant.waiting && (
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-[10px] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        대기중
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {participant.nameVi}
                  </p>
                </div>
                <div className="text-right">
                  {participant.waiting ? (
                    <div className="text-[12px] text-muted-foreground">--</div>
                  ) : (
                    <div className="text-[16px] text-primary" style={{ fontWeight: 700 }}>{participant.amount}</div>
                  )}
                </div>
              </div>
              
              {/* Item List */}
              {!participant.waiting && participant.itemsList.length > 0 && (
                <div className="bg-accent rounded-xl p-3 space-y-1.5">
                  {participant.itemsList.map((item, itemIdx) => (
                    <div key={itemIdx} className="text-[12px] text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Waiting State */}
              {participant.waiting && (
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-[12px] text-muted-foreground">메뉴 선택 대기 중...</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Waiting to select menu</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add More Friends Button */}
      <div className="px-5 mt-4">
        <button className="w-full py-3 border-2 border-dashed border-primary/50 text-primary rounded-[16px] hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
          <UserPlus className="w-4 h-4" />
          <span className="text-[13px]">+ 친구 더 초대하기</span>
        </button>
      </div>

      {/* Order Summary - Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-border shadow-2xl z-50">
        <div className="max-w-[430px] mx-auto p-5">
          {/* Summary */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[12px] text-muted-foreground">공동주문 합계</p>
              <div className="flex items-baseline gap-2">
                <p className="text-[24px] text-primary" style={{ fontWeight: 700 }}>170,000₫</p>
                <p className="text-[12px] text-green-600 line-through">190,000₫</p>
              </div>
              <p className="text-[11px] text-green-600">🎉 배달비 무료! (20,000₫ 절약)</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-1">
                <ShoppingCart className="w-3 h-3" />
                <span>4개 메뉴</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>2/3 확정</span>
              </div>
            </div>
          </div>
          
          {/* Confirm Button */}
          <button 
            onClick={handleConfirmOrder}
            className="w-full bg-gradient-to-r from-primary to-orange-500 text-white py-4 rounded-[16px] shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            <span className="text-[16px]" style={{ fontWeight: 600 }}>공동주문 확정하기</span>
          </button>
          <p className="text-center text-[10px] text-muted-foreground mt-2">
            모든 참여자 주문 완료 후 결제가 진행됩니다
          </p>
        </div>
      </div>
    </div>
  );
}