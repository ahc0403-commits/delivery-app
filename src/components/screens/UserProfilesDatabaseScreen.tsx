import { ChevronLeft, Users, MapPin, Calendar, ShoppingBag, TrendingUp, Filter, Download, Search, Clock, DollarSign } from "lucide-react";
import { useNavigation } from "../../App";
import { BottomNavBar } from "../BottomNavBar";
import { useState } from "react";

export function UserProfilesDatabaseScreen() {
  const { goBack } = useNavigation();
  const [activeTab, setActiveTab] = useState<"all" | "premium" | "new">("all");

  const userSegments = [
    { segment: "Premium Members", count: 1243, percentage: 15.1, color: "from-yellow-500 to-orange-500" },
    { segment: "Regular Users", count: 5821, percentage: 70.7, color: "from-blue-500 to-cyan-500" },
    { segment: "New Users (30d)", count: 1170, percentage: 14.2, color: "from-green-500 to-emerald-500" },
  ];

  const demographics = [
    { label: "18-24세", count: 2847, percentage: 34.6 },
    { label: "25-34세", count: 3654, percentage: 44.4 },
    { label: "35-44세", count: 1321, percentage: 16.0 },
    { label: "45세+", count: 412, percentage: 5.0 },
  ];

  const topLocations = [
    { city: "Hanoi", district: "Hoàn Kiếm", users: 1834, orders: 12453 },
    { city: "Hanoi", district: "Đống Đa", users: 1521, orders: 10821 },
    { city: "Hanoi", district: "Cầu Giấy", users: 1287, orders: 9234 },
    { city: "Ho Chi Minh", district: "District 1", users: 1103, orders: 8932 },
    { city: "Ho Chi Minh", district: "District 3", users: 892, orders: 6721 },
  ];

  const userBehavior = [
    { metric: "평균 주문 빈도", value: "2.3회/월", icon: ShoppingBag, color: "text-blue-600" },
    { metric: "평균 주문 금액", value: "₫156,000", icon: DollarSign, color: "text-green-600" },
    { metric: "평균 앱 사용시간", value: "8.4분/세션", icon: Clock, color: "text-purple-600" },
    { metric: "재구매율", value: "68.2%", icon: TrendingUp, color: "text-orange-600" },
  ];

  const recentUsers = [
    { id: "U-8234", name: "Nguyễn Văn A", age: 28, location: "Hoàn Kiếm", orders: 34, spent: "₫5,236,000", joinDate: "2024-01" },
    { id: "U-8233", name: "Trần Thị B", age: 24, location: "Đống Đa", orders: 52, spent: "₫8,124,000", joinDate: "2024-01" },
    { id: "U-8232", name: "Lê Văn C", age: 31, location: "Cầu Giấy", orders: 28, spent: "₫4,362,000", joinDate: "2024-02" },
    { id: "U-8231", name: "Phạm Thị D", age: 26, location: "Hoàn Kiếm", orders: 61, spent: "₫9,847,000", joinDate: "2023-12" },
    { id: "U-8230", name: "Hoàng Văn E", age: 35, location: "District 1", orders: 19, spent: "₫2,956,000", joinDate: "2024-03" },
  ];

  return (
    <>
      <div className="h-screen overflow-y-auto bg-background pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800 text-white px-5 py-6 shadow-xl">
          <button 
            onClick={goBack}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all active:scale-95 mb-4"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center border border-white/30">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-[26px] mb-1">User Profiles</h1>
              <p className="text-[13px] text-white/90">사용자 프로필 데이터베이스</p>
            </div>
          </div>

          {/* Total Count */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[16px] p-5 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] text-white/80 mb-1">Total Profiles Collected</p>
                <p className="text-[40px] leading-none mb-1">8,234</p>
                <p className="text-[11px] text-white/70">+247 this month</p>
              </div>
              <div className="text-right">
                <div className="bg-green-500/20 px-3 py-1.5 rounded-full border border-green-400/30 mb-2">
                  <span className="text-[12px] text-green-300">+3.1%</span>
                </div>
                <p className="text-[10px] text-white/60">vs last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-5 py-4 bg-white border-b border-border flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-accent rounded-[12px] px-4 py-2.5">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users..."
              className="flex-1 bg-transparent text-[13px] outline-none"
            />
          </div>
          <button className="w-10 h-10 bg-accent rounded-[12px] flex items-center justify-center hover:bg-accent/70 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-primary text-white rounded-[12px] flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* User Segments */}
        <div className="px-5 py-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <span>👥</span>
            <span>사용자 세그먼트 / User Segments</span>
          </h2>
          <div className="space-y-3">
            {userSegments.map((seg, idx) => (
              <div key={idx} className="bg-white rounded-[16px] p-4 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-[14px] mb-1">{seg.segment}</h3>
                    <p className="text-[11px] text-muted-foreground">{seg.percentage}% of total</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[24px] bg-gradient-to-r bg-clip-text text-transparent" style={{ 
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {seg.count.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${seg.color} transition-all duration-500`}
                    style={{ width: `${seg.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demographics */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <span>📊</span>
            <span>연령 분포 / Age Demographics</span>
          </h2>
          <div className="bg-white rounded-[16px] p-5 shadow-sm border border-border">
            <div className="space-y-4">
              {demographics.map((demo, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2 text-[13px]">
                    <span className="text-muted-foreground">{demo.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-primary" style={{ fontWeight: 600 }}>
                        {demo.count.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground text-[11px] w-12 text-right">
                        {demo.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-violet-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${demo.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Locations */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>주요 지역 / Top Locations</span>
          </h2>
          <div className="bg-white rounded-[16px] shadow-sm border border-border divide-y divide-border">
            {topLocations.map((loc, idx) => (
              <div key={idx} className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[13px]" style={{ fontWeight: 700 }}>
                    {idx + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] mb-0.5">{loc.district}</p>
                  <p className="text-[11px] text-muted-foreground">{loc.city}</p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] text-primary mb-0.5">
                    {loc.users.toLocaleString()} users
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {loc.orders.toLocaleString()} orders
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Behavior Metrics */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>사용자 행동 분석 / Behavior Metrics</span>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {userBehavior.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-[16px] p-4 shadow-sm border border-border">
                <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                <p className="text-[20px] mb-1">{metric.value}</p>
                <p className="text-[11px] text-muted-foreground">{metric.metric}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="px-5 pb-5">
          <h2 className="text-[15px] mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>최근 사용자 / Recent Users</span>
          </h2>
          <div className="bg-white rounded-[16px] shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-accent">
                  <tr>
                    <th className="px-4 py-3 text-left text-[11px] text-muted-foreground">User ID</th>
                    <th className="px-4 py-3 text-left text-[11px] text-muted-foreground">Name</th>
                    <th className="px-4 py-3 text-right text-[11px] text-muted-foreground">Orders</th>
                    <th className="px-4 py-3 text-right text-[11px] text-muted-foreground">Total Spent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recentUsers.map((user, idx) => (
                    <tr key={idx} className="hover:bg-accent/50 transition-colors">
                      <td className="px-4 py-3 text-[12px] text-muted-foreground">{user.id}</td>
                      <td className="px-4 py-3">
                        <p className="text-[13px]">{user.name}</p>
                        <p className="text-[10px] text-muted-foreground">{user.location}</p>
                      </td>
                      <td className="px-4 py-3 text-right text-[13px]">{user.orders}</td>
                      <td className="px-4 py-3 text-right text-[13px] text-primary">{user.spent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Data Value Card */}
        <div className="mx-5 mb-5 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-[16px] p-5 text-white">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[20px]">💎</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] mb-1" style={{ fontWeight: 600 }}>Data Monetization Value</h3>
              <p className="text-[11px] text-white/80 leading-relaxed">
                이 사용자 프로필 데이터는 타겟 마케팅, 시장 조사 회사, 투자자에게 판매 가능한 고가치 자산입니다.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white/10 rounded-[12px] p-3 border border-white/20">
            <span className="text-[12px] text-white/80">Estimated Value</span>
            <span className="text-[18px]" style={{ fontWeight: 700 }}>$41,170</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />
    </>
  );
}
