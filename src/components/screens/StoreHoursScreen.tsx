import { ChevronLeft, Clock, Calendar, Save, Plus, Trash2, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../../App";
import { motion } from "motion/react";

type DaySchedule = {
  day: string;
  dayKo: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  breakStart?: string;
  breakEnd?: string;
  hasBreak: boolean;
};

type SpecialHour = {
  id: string;
  date: string;
  name: string;
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
};

export function StoreHoursScreen() {
  const { goBack, showToast } = useNavigation();

  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: "Monday", dayKo: "월요일", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
    { day: "Tuesday", dayKo: "화요일", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
    { day: "Wednesday", dayKo: "수요일", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
    { day: "Thursday", dayKo: "목요일", isOpen: true, openTime: "10:00", closeTime: "22:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
    { day: "Friday", dayKo: "금요일", isOpen: true, openTime: "10:00", closeTime: "23:00", hasBreak: true, breakStart: "15:00", breakEnd: "16:30" },
    { day: "Saturday", dayKo: "토요일", isOpen: true, openTime: "11:00", closeTime: "23:00", hasBreak: false },
    { day: "Sunday", dayKo: "일요일", isOpen: false, openTime: "11:00", closeTime: "21:00", hasBreak: false },
  ]);

  const [specialHours, setSpecialHours] = useState<SpecialHour[]>([
    { id: "1", date: "2025-01-01", name: "설날 연휴", isOpen: false },
    { id: "2", date: "2025-02-14", name: "발렌타인데이", isOpen: true, openTime: "09:00", closeTime: "24:00" },
  ]);

  const [showAddSpecial, setShowAddSpecial] = useState(false);

  const toggleDayOpen = (index: number) => {
    const newSchedule = [...schedule];
    newSchedule[index].isOpen = !newSchedule[index].isOpen;
    setSchedule(newSchedule);
  };

  const toggleBreak = (index: number) => {
    const newSchedule = [...schedule];
    newSchedule[index].hasBreak = !newSchedule[index].hasBreak;
    setSchedule(newSchedule);
  };

  const updateTime = (index: number, field: keyof DaySchedule, value: string) => {
    const newSchedule = [...schedule];
    (newSchedule[index] as any)[field] = value;
    setSchedule(newSchedule);
  };

  const deleteSpecialHour = (id: string) => {
    setSpecialHours(specialHours.filter(h => h.id !== id));
    showToast("특별 운영일이 삭제되었습니다", "success");
  };

  const handleSave = () => {
    // In a real app, this would save to backend/localStorage
    localStorage.setItem("storeSchedule", JSON.stringify(schedule));
    localStorage.setItem("specialHours", JSON.stringify(specialHours));
    showToast("운영시간이 저장되었습니다! ✅", "success");
    goBack();
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const dayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1; // Convert to Mon=0, Sun=6
    const currentTime = now.getHours() * 100 + now.getMinutes();
    const todaySchedule = schedule[dayIndex];

    if (!todaySchedule.isOpen) {
      return { isOpen: false, message: "오늘은 휴무일입니다", messageEn: "Closed today" };
    }

    const openTime = parseInt(todaySchedule.openTime.replace(":", ""));
    const closeTime = parseInt(todaySchedule.closeTime.replace(":", ""));

    if (currentTime < openTime) {
      return { isOpen: false, message: `${todaySchedule.openTime} 오픈 예정`, messageEn: `Opens at ${todaySchedule.openTime}` };
    }
    if (currentTime >= closeTime) {
      return { isOpen: false, message: "영업 종료", messageEn: "Closed for today" };
    }

    if (todaySchedule.hasBreak && todaySchedule.breakStart && todaySchedule.breakEnd) {
      const breakStart = parseInt(todaySchedule.breakStart.replace(":", ""));
      const breakEnd = parseInt(todaySchedule.breakEnd.replace(":", ""));
      if (currentTime >= breakStart && currentTime < breakEnd) {
        return { isOpen: false, message: `브레이크타임 (${todaySchedule.breakEnd}까지)`, messageEn: `Break time until ${todaySchedule.breakEnd}` };
      }
    }

    return { isOpen: true, message: `${todaySchedule.closeTime}까지 영업`, messageEn: `Open until ${todaySchedule.closeTime}` };
  };

  const status = getCurrentStatus();

  return (
    <div className="h-screen bg-background overflow-y-auto pb-10">
      {/* Header */}
      <div className="bg-white px-5 py-4 border-b border-border flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <h1 className="text-[18px]" style={{ fontWeight: 700 }}>
            운영시간 설정
          </h1>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-[10px] hover:bg-primary/90 transition-all active:scale-95"
        >
          <Save className="w-4 h-4" />
          <span className="text-[13px]" style={{ fontWeight: 600 }}>저장</span>
        </button>
      </div>

      {/* Current Status Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-5 mt-5"
      >
        <div className={`rounded-xl p-4 border-2 ${status.isOpen ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
              {status.isOpen ? (
                <CheckCircle className="w-6 h-6 text-white" />
              ) : (
                <AlertCircle className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <p className="text-[14px]" style={{ fontWeight: 600 }}>
                현재 상태: {status.isOpen ? "영업중 🟢" : "영업시간 아님 🔴"}
              </p>
              <p className="text-[12px] text-muted-foreground">
                {status.message} / {status.messageEn}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Banner */}
      <div className="mx-5 mt-4 bg-blue-50 rounded-xl p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[13px] text-blue-800" style={{ fontWeight: 600 }}>
              💡 자동 영업 관리
            </p>
            <p className="text-[11px] text-blue-700 mt-1">
              설정한 시간에 따라 자동으로 "영업중/영업시간 아님"이 표시됩니다.
              더 이상 매번 수동으로 켜고 끄지 않아도 됩니다!
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="px-5 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h2 className="text-[16px]" style={{ fontWeight: 600 }}>주간 운영 일정</h2>
          <span className="text-[12px] text-muted-foreground">Weekly Schedule</span>
        </div>

        <div className="space-y-3">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-xl p-4 border ${day.isOpen ? 'border-green-200' : 'border-gray-200'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${day.isOpen ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <span className="text-[14px]" style={{ fontWeight: 600 }}>{day.dayKo.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-[14px]" style={{ fontWeight: 600 }}>{day.dayKo}</p>
                    <p className="text-[11px] text-muted-foreground">{day.day}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleDayOpen(index)}
                  className={`relative w-14 h-7 rounded-full transition-all ${day.isOpen ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${day.isOpen ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {day.isOpen && (
                <div className="space-y-3 pt-3 border-t border-border">
                  {/* Operating Hours */}
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] text-muted-foreground w-16">영업시간</span>
                    <input
                      type="time"
                      value={day.openTime}
                      onChange={(e) => updateTime(index, 'openTime', e.target.value)}
                      className="flex-1 px-3 py-2 bg-accent rounded-lg text-[13px] border-0"
                    />
                    <span className="text-muted-foreground">~</span>
                    <input
                      type="time"
                      value={day.closeTime}
                      onChange={(e) => updateTime(index, 'closeTime', e.target.value)}
                      className="flex-1 px-3 py-2 bg-accent rounded-lg text-[13px] border-0"
                    />
                  </div>

                  {/* Break Time Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-muted-foreground">브레이크타임</span>
                      <span className="text-[10px] text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Break Time</span>
                    </div>
                    <button
                      onClick={() => toggleBreak(index)}
                      className={`relative w-12 h-6 rounded-full transition-all ${day.hasBreak ? 'bg-orange-400' : 'bg-gray-300'}`}
                    >
                      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${day.hasBreak ? 'right-0.5' : 'left-0.5'}`} />
                    </button>
                  </div>

                  {/* Break Hours */}
                  {day.hasBreak && (
                    <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
                      <span className="text-[12px] text-orange-700 w-16">휴식시간</span>
                      <input
                        type="time"
                        value={day.breakStart || "15:00"}
                        onChange={(e) => updateTime(index, 'breakStart', e.target.value)}
                        className="flex-1 px-3 py-2 bg-white rounded-lg text-[13px] border border-orange-200"
                      />
                      <span className="text-orange-400">~</span>
                      <input
                        type="time"
                        value={day.breakEnd || "16:30"}
                        onChange={(e) => updateTime(index, 'breakEnd', e.target.value)}
                        className="flex-1 px-3 py-2 bg-white rounded-lg text-[13px] border border-orange-200"
                      />
                    </div>
                  )}
                </div>
              )}

              {!day.isOpen && (
                <div className="pt-3 border-t border-border">
                  <p className="text-[12px] text-muted-foreground text-center">
                    🌙 휴무일 / Day Off
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Hours / Holidays */}
      <div className="px-5 mt-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-purple-600" />
            <h2 className="text-[16px]" style={{ fontWeight: 600 }}>특별 운영일</h2>
            <span className="text-[12px] text-muted-foreground">Holidays & Special</span>
          </div>
          <button
            onClick={() => setShowAddSpecial(!showAddSpecial)}
            className="flex items-center gap-1 text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-[12px]" style={{ fontWeight: 600 }}>추가</span>
          </button>
        </div>

        {showAddSpecial && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-200"
          >
            <p className="text-[13px] text-purple-800 mb-3" style={{ fontWeight: 600 }}>
              📅 새 특별 운영일 추가
            </p>
            <div className="space-y-3">
              <input
                type="date"
                className="w-full px-4 py-3 bg-white rounded-lg text-[13px] border border-purple-200"
                placeholder="날짜 선택"
              />
              <input
                type="text"
                className="w-full px-4 py-3 bg-white rounded-lg text-[13px] border border-purple-200"
                placeholder="명칭 (예: 설날 연휴)"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowAddSpecial(false);
                    showToast("특별 운영일이 추가되었습니다", "success");
                  }}
                  className="flex-1 py-3 bg-purple-600 text-white rounded-lg text-[13px]"
                  style={{ fontWeight: 600 }}
                >
                  휴무로 추가
                </button>
                <button
                  onClick={() => setShowAddSpecial(false)}
                  className="flex-1 py-3 bg-gray-200 rounded-lg text-[13px]"
                  style={{ fontWeight: 600 }}
                >
                  취소
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-3">
          {specialHours.map((special) => (
            <div
              key={special.id}
              className={`bg-white rounded-xl p-4 border flex items-center justify-between ${special.isOpen ? 'border-green-200' : 'border-red-200'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${special.isOpen ? 'bg-green-100' : 'bg-red-100'}`}>
                  <span className="text-[16px]">{special.isOpen ? '📈' : '🏖️'}</span>
                </div>
                <div>
                  <p className="text-[14px]" style={{ fontWeight: 600 }}>{special.name}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {special.date} • {special.isOpen ? `${special.openTime} ~ ${special.closeTime}` : '휴무'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => deleteSpecialHour(special.id)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}

          {specialHours.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p className="text-[13px]">등록된 특별 운영일이 없습니다</p>
              <p className="text-[11px]">No special hours registered</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



