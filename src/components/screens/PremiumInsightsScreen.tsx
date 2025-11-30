import { ChevronDown, TrendingUp, MapPin, Users, Clock, ChevronLeft, Home } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";

const neighborhoodData = [
  { area: "Thao Dien", demand: 850 },
  { area: "Phu My Hung", demand: 720 },
  { area: "An Phu", demand: 680 },
  { area: "Tan Phong", demand: 550 },
  { area: "Binh An", demand: 480 },
];

const districtData = [
  { area: "District 1", demand: 2400 },
  { area: "District 2", demand: 1900 },
  { area: "District 7", demand: 1650 },
  { area: "District 3", demand: 1420 },
  { area: "Binh Thanh", demand: 1280 },
];

const scopes = ["Neighborhood (Dong)", "District (Gu)", "City", "National"];

export function PremiumInsightsScreen() {
  const { navigate, goBack } = useNavigation();
  const selectedScope = "District (Gu)"; // Default to district
  const isLocked = selectedScope === "City" || selectedScope === "National";

  return (
    <div className="h-screen overflow-y-auto bg-background pb-6">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-5 py-5 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-[18px] text-white mb-1">프리미엄 비즈니스 인사이트</h1>
            <p className="text-[11px] text-yellow-100">Premium Business Insights</p>
          </div>
          <button 
            onClick={() => navigate("ownerhome")}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors active:scale-95"
          >
            <Home className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Scope Selector Tabs */}
      <div className="px-5 py-4 bg-white border-b border-border">
        <h3 className="text-[13px] text-muted-foreground mb-3">분석 범위 선택 / Select Scope</h3>
        <div className="grid grid-cols-2 gap-2">
          {scopes.map((scope) => {
            const isSelected = scope === selectedScope;
            const isLockedScope = scope === "City" || scope === "National";
            return (
              <button
                key={scope}
                className={`relative px-3 py-3 rounded-[12px] text-[12px] transition-all ${
                  isSelected
                    ? "bg-primary text-white shadow-md"
                    : isLockedScope
                    ? "bg-accent text-muted-foreground border-2 border-dashed border-muted"
                    : "bg-accent text-foreground hover:bg-accent/80"
                }`}
              >
                {isLockedScope && (
                  <Lock className="w-3 h-3 absolute top-2 right-2 text-muted-foreground" />
                )}
                {scope}
              </button>
            );
          })}
        </div>
      </div>

      {/* Market Demand Chart */}
      <div className="px-5 py-4">
        <div className="bg-white rounded-[16px] shadow-sm p-5 relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px]">시장 수요 분석 / Market Demand</h2>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span>{selectedScope}</span>
            </div>
          </div>

          {/* Chart - Normal View */}
          {!isLocked && (
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={districtData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="area"
                  tick={{ fontSize: 10, fill: "#666" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#666" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="demand" radius={[8, 8, 0, 0]}>
                  {districtData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#F37021" : "#FFB380"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}

          {/* Locked Chart with Blur Overlay */}
          {isLocked && (
            <div className="relative">
              <div className="blur-md opacity-40">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={districtData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="area" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Bar dataKey="demand" fill="#ccc" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Premium Lock Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-[16px] shadow-2xl p-6 max-w-[280px] text-center border-2 border-yellow-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[16px] mb-2">프리미엄 업그레이드</h3>
                  <p className="text-[12px] text-muted-foreground mb-4">
                    Upgrade to Premium to view wider data
                  </p>
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-3 rounded-[12px] shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                    <Crown className="w-5 h-5" />
                    <span className="text-[14px]">Upgrade Now</span>
                  </button>
                  <p className="text-[10px] text-muted-foreground mt-3">
                    시/국가 단위 데이터 접근 가능
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Chart Legend */}
          {!isLocked && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span className="text-muted-foreground">최고 수요 / Highest</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-300 rounded"></div>
                  <span className="text-muted-foreground">평균 수요 / Average</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Insights Cards - Only show when unlocked */}
      {!isLocked && (
        <div className="px-5">
          <h3 className="text-[14px] mb-3 text-muted-foreground">주요 인사이트 / Key Insights</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-[12px] shadow-sm p-4 flex items-start gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-[13px] mb-1">고수요 지역 / High Demand Area</h4>
                <p className="text-[12px] text-muted-foreground">
                  District 1에서 가장 높은 수요 (2,400건/주)
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[12px] shadow-sm p-4 flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-[13px] mb-1">성장 잠재력 / Growth Potential</h4>
                <p className="text-[12px] text-muted-foreground">
                  District 7은 전월 대비 15% 증가
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Premium Features List */}
      <div className="mx-5 mt-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-[16px] p-5 border border-yellow-200">
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-5 h-5 text-yellow-700" />
          <h3 className="text-[14px] text-yellow-800">프리미엄 기능 / Premium Features</h3>
        </div>
        <div className="space-y-2 text-[12px] text-yellow-900">
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>시/국가 단위 시장 데이터 / City & National data</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>경쟁사 분석 / Competitor analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>트렌드 예측 / Trend forecasting</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>맞춤형 리포트 / Custom reports</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-3 rounded-[12px] shadow-md hover:shadow-lg transition-shadow text-[14px]">
          월 99,000₫로 업그레이드 / Upgrade for 99k₫/month
        </button>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar />
    </div>
  );
}