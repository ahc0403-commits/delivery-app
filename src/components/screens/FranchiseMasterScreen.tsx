import { ChevronLeft, Store, TrendingUp, MapPin, Edit, CheckCircle, AlertCircle, BarChart3, Users, Utensils, Megaphone, Crown, DollarSign, ChevronRight, Settings, FileText, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

export function FranchiseMasterScreen() {
  const { goBack, navigate } = useNavigation();
  
  // Menu categories for franchise master
  const masterMenus = [
    {
      category: "📊 성과 분석 / Performance",
      items: [
        { id: "franchisereport", icon: "📈", label: "통합 리포트", labelEn: "Unified Report", desc: "전체 지점 성과 현황", badge: null },
        { id: "franchisecompare", icon: "⚖️", label: "지점 비교 분석", labelEn: "Compare Analysis", desc: "지점간 매출/주문 비교", badge: "NEW" },
        { id: "report", icon: "📋", label: "상세 성과", labelEn: "Performance Detail", desc: "KPI 및 트렌드 분석", badge: null },
      ]
    },
    {
      category: "🏪 지점 관리 / Branches",
      items: [
        { id: "branchmanagement", icon: "🏢", label: "지점 현황", labelEn: "Branch Status", desc: "50개 지점 실시간 모니터링", badge: "3 Issues" },
        { id: "storehours", icon: "🕐", label: "운영시간 관리", labelEn: "Operating Hours", desc: "전 지점 영업시간 설정", badge: null },
        { id: "menu", icon: "🍽️", label: "메뉴 관리", labelEn: "Menu Management", desc: "통합 메뉴 및 가격 관리", badge: null },
      ]
    },
    {
      category: "💰 마케팅 & 수익 / Marketing",
      items: [
        { id: "marketing", icon: "📣", label: "마케팅 센터", labelEn: "Marketing Center", desc: "프로모션 및 광고 관리", badge: null },
        { id: "insights", icon: "💡", label: "프리미엄 인사이트", labelEn: "Premium Insights", desc: "AI 기반 시장 분석", badge: "PRO" },
        { id: "wallet", icon: "💳", label: "정산 관리", labelEn: "Settlement", desc: "수익 및 정산 현황", badge: null },
      ]
    },
  ];

  return (
    <div className="h-screen overflow-y-auto bg-background pb-24">
      {/* Master Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-5 py-5 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-purple-900" />
          </button>
          <div className="flex-1">
            <h1 className="text-[20px] text-white mb-1">프랜차이즈 마스터 모드</h1>
            <p className="text-[12px] text-purple-100">Franchise Master Mode</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5" />
          </button>
        </div>
        
        {/* Quick Stats Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-[14px] p-4">
          <div className="grid grid-cols-4 gap-3 text-center">
            <div>
              <p className="text-[24px] text-white" style={{ fontWeight: 700 }}>50</p>
              <p className="text-[10px] text-purple-100">전체 지점</p>
            </div>
            <div>
              <p className="text-[24px] text-green-300" style={{ fontWeight: 700 }}>45</p>
              <p className="text-[10px] text-purple-100">영업중</p>
            </div>
            <div>
              <p className="text-[24px] text-yellow-300" style={{ fontWeight: 700 }}>3</p>
              <p className="text-[10px] text-purple-100">이슈</p>
            </div>
            <div>
              <p className="text-[24px] text-red-300" style={{ fontWeight: 700 }}>2</p>
              <p className="text-[10px] text-purple-100">휴업</p>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Summary Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-5 mt-5"
      >
        <button
          onClick={() => navigate("franchisereport")}
          className="w-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-[16px] p-5 shadow-md border-2 border-green-200 hover:shadow-lg transition-all active:scale-[0.98]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-[12px] text-green-700">오늘 전체 매출</p>
                <p className="text-[11px] text-green-600">Today's Total Revenue</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[28px] text-green-800" style={{ fontWeight: 700 }}>₫152M</p>
              <div className="flex items-center gap-1 justify-end text-green-600">
                <TrendingUp className="w-3 h-3" />
                <span className="text-[11px]">+12% vs 어제</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-green-600 text-[11px]">
            <span>👆 상세 리포트 보기</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>
      </motion.div>

      {/* Master Menu Categories */}
      {masterMenus.map((section, sectionIdx) => (
        <motion.div 
          key={section.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIdx * 0.1 }}
          className="px-5 mt-6"
        >
          <h3 className="text-[14px] mb-3 text-muted-foreground">{section.category}</h3>
          <div className="bg-white rounded-[16px] shadow-md border border-border overflow-hidden">
            {section.items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`w-full p-4 flex items-center gap-4 hover:bg-accent transition-all active:scale-[0.99] ${
                  idx !== 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="w-12 h-12 bg-purple-50 rounded-[12px] flex items-center justify-center text-[24px]">
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-[14px]" style={{ fontWeight: 600 }}>{item.label}</p>
                    {item.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[9px] ${
                        item.badge === "NEW" ? "bg-blue-100 text-blue-700" :
                        item.badge === "PRO" ? "bg-yellow-100 text-yellow-700" :
                        item.badge.includes("Issue") ? "bg-red-100 text-red-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">{item.labelEn}</p>
                  <p className="text-[10px] text-purple-600 mt-1">{item.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Bulk Menu Update Section */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] text-muted-foreground">🔧 빠른 일괄 작업 / Quick Bulk Actions</h3>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-[16px] p-5 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Edit className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-[15px]" style={{ fontWeight: 600 }}>일괄 메뉴 업데이트</p>
              <p className="text-[11px] text-purple-700">Bulk Menu Update • 50개 지점 동시 적용</p>
            </div>
          </div>
          
          {/* Quick Price Update Preview */}
          <div className="bg-white rounded-[12px] p-4 mb-4">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY0NDU1MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fried Chicken"
                className="w-14 h-14 rounded-[10px] object-cover"
              />
              <div className="flex-1">
                <p className="text-[14px] mb-1">치킨 / Fried Chicken</p>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-red-500 line-through">80,000₫</span>
                  <span className="text-[13px]">→</span>
                  <span className="text-[14px] text-green-600" style={{ fontWeight: 600 }}>85,000₫</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-white border-2 border-purple-300 rounded-[12px] text-[13px] text-purple-700 hover:bg-purple-50 transition-colors">
              메뉴 선택
            </button>
            <button className="py-3 bg-purple-600 text-white rounded-[12px] text-[13px] shadow-md hover:shadow-lg transition-all active:scale-95">
              일괄 업데이트 적용
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-5 mt-6 mb-6">
        <h3 className="text-[14px] mb-3 text-muted-foreground">🕐 최근 활동 / Recent Activity</h3>
        <div className="bg-white rounded-[16px] shadow-sm border border-border overflow-hidden">
          {[
            { icon: "✅", text: "떡볶이 가격 변경", sub: "50개 지점 적용 완료", time: "2시간 전" },
            { icon: "📊", text: "월간 리포트 생성", sub: "11월 성과 리포트", time: "5시간 전" },
            { icon: "🏪", text: "District 9 지점 이슈", sub: "재고 부족 알림", time: "어제" },
          ].map((activity, idx) => (
            <div key={idx} className={`p-4 flex items-center gap-3 ${idx !== 0 ? "border-t border-border" : ""}`}>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-[18px]">
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-[13px]" style={{ fontWeight: 500 }}>{activity.text}</p>
                <p className="text-[11px] text-muted-foreground">{activity.sub}</p>
              </div>
              <span className="text-[10px] text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}