// ============================================
// MAIN APPLICATION ENTRY
// Restructured with proper architecture
// ============================================

import { useState } from "react";
import { CartProvider } from "./contexts/CartContext";
import { AppProvider, useApp } from "./contexts/AppContext";
import { Toaster } from "sonner@2.0.3";
import { Home, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { AUTH_SCREENS, COLORS } from "./lib/constants";

// ============================================
// SCREEN IMPORTS - CUSTOMER APP
// ============================================
import { SplashScreen } from "./components/screens/SplashScreen";
import { AuthPermissionScreen } from "./components/screens/AuthPermissionScreen";
import { PhoneVerificationScreen } from "./components/screens/PhoneVerificationScreen";
import { WelcomeScreen } from "./components/screens/WelcomeScreen";
import { AppPermissionsScreen } from "./components/screens/AppPermissionsScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { RestaurantFeedScreen } from "./components/screens/RestaurantFeedScreen";
import { SearchScreen } from "./components/screens/SearchScreen";
import { KoreanFoodCategoryScreen } from "./components/screens/KoreanFoodCategoryScreen";
import { StoreDetailScreen } from "./components/screens/StoreDetailScreen";
import { KoreanFriedChickenStoreScreen } from "./components/screens/KoreanFriedChickenStoreScreen";
import { ChatScreen } from "./components/screens/ChatScreen";
import { GroupOrderScreen } from "./components/screens/GroupOrderScreen";
import { CartScreen } from "./components/screens/CartScreen";
import { PaymentScreen } from "./components/screens/PaymentScreen";
import { CardTypeSelectionScreen } from "./components/screens/CardTypeSelectionScreen";
import { VietnamCardRegistrationScreen } from "./components/screens/VietnamCardRegistrationScreen";
import { InternationalCardRegistrationScreen } from "./components/screens/InternationalCardRegistrationScreen";
import { OrderStatusScreen } from "./components/screens/OrderStatusScreen";
import { OrderConfirmationScreen } from "./components/screens/OrderConfirmationScreen";
import { DeliveryMapScreen } from "./components/screens/DeliveryMapScreen";
import { WriteReviewScreen } from "./components/screens/WriteReviewScreen";
import { ReceiptScreen } from "./components/screens/ReceiptScreen";
import { MyPageScreen } from "./components/screens/MyPageScreen";
import { ProfileEditScreen } from "./components/screens/ProfileEditScreen";
import { AddressManagementScreen } from "./components/screens/AddressManagementScreen";
import { PaymentMethodsScreen } from "./components/screens/PaymentMethodsScreen";
import { OrderHistoryScreen } from "./components/screens/OrderHistoryScreen";
import { PointsHistoryScreen } from "./components/screens/PointsHistoryScreen";
import { CouponsScreen } from "./components/screens/CouponsScreen";
import { AddressInputScreen } from "./components/screens/AddressInputScreen";
import { PaymentRegistrationScreen } from "./components/screens/PaymentRegistrationScreen";
import { CustomerSupportScreen } from "./components/screens/CustomerSupportScreen";
import { DisputeResolutionScreen } from "./components/screens/DisputeResolutionScreen";
import { TermsScreen } from "./components/screens/TermsScreen";
import { PrivacyPolicyScreen } from "./components/screens/PrivacyPolicyScreen";
import { AddressDetailScreen } from "./components/screens/AddressDetailScreen";
import { PaymentSetupScreen } from "./components/screens/PaymentSetupScreen";
import { IngredientsScreen } from "./components/screens/IngredientsScreen";

// ============================================
// SCREEN IMPORTS - STORE OWNER APP
// ============================================
import { NewOrderScreen } from "./components/screens/NewOrderScreen";
import { ActiveOrdersScreen } from "./components/screens/ActiveOrdersScreen";
import { MenuManagementScreen } from "./components/screens/MenuManagementScreen";
import { BizWalletScreen } from "./components/screens/BizWalletScreen";
import { BankAccountRegistrationScreen } from "./components/screens/BankAccountRegistrationScreen";
import { WithdrawalRequestScreen } from "./components/screens/WithdrawalRequestScreen";
import { PerformanceReportScreen } from "./components/screens/PerformanceReportScreen";
import { RawMaterialsOrderScreen } from "./components/screens/RawMaterialsOrderScreen";
import { FranchiseMasterScreen } from "./components/screens/FranchiseMasterScreen";
import { PremiumInsightsScreen } from "./components/screens/PremiumInsightsScreen";
import { StoreOwnerHomeScreen } from "./components/screens/StoreOwnerHomeScreen";
import { StoreHoursScreen } from "./components/screens/StoreHoursScreen";
import { OwnerDashboardScreen } from "./components/screens/OwnerDashboardScreen";
import { FranchiseUnifiedReportScreen } from "./components/screens/FranchiseUnifiedReportScreen";
import { FranchiseCompareScreen } from "./components/screens/FranchiseCompareScreen";
import { BranchManagementScreen } from "./components/screens/BranchManagementScreen";
import { MarketingCenterScreen } from "./components/screens/MarketingCenterScreen";
import { TodaySalesScreen } from "./components/screens/TodaySalesScreen";
import { RegistrationPendingScreen } from "./components/screens/RegistrationPendingScreen";
import { PremiumDataSubscription } from "./components/screens/PremiumDataSubscription";

// ============================================
// SCREEN IMPORTS - ADMIN APP
// ============================================
import { SuperAdminHomeScreen } from "./components/screens/SuperAdminHomeScreen";
import { AdminDashboardScreen } from "./components/screens/AdminDashboardScreen";
import { FinancialApprovalsScreen } from "./components/screens/FinancialApprovalsScreen";
import { WithdrawalApprovalScreen } from "./components/screens/WithdrawalApprovalScreen";
import { DisputeCenterScreen } from "./components/screens/DisputeCenterScreen";
import { FranchiseControlScreen } from "./components/screens/FranchiseControlScreen";
import { FranchiseSubscriptionPlanScreen } from "./components/screens/FranchiseSubscriptionPlanScreen";
import { GlobalAnalyticsScreen } from "./components/screens/GlobalAnalyticsScreen";
import { AdReviewApprovalScreen } from "./components/screens/AdReviewApprovalScreen";
import { StoreDisciplineScreen } from "./components/screens/StoreDisciplineScreen";
import { UserProfilesDatabaseScreen } from "./components/screens/UserProfilesDatabaseScreen";
import { MenuDatabaseScreen } from "./components/screens/MenuDatabaseScreen";
import { SearchIntelligenceScreen } from "./components/screens/SearchIntelligenceScreen";
import { PendingActionsScreen } from "./components/screens/PendingActionsScreen";

// ============================================
// SCREEN REGISTRY
// Organized by app section for maintainability
// ============================================
const CUSTOMER_SCREENS = [
  // Onboarding Flow
  { id: "splash", name: "1. Splash", component: SplashScreen },
  { id: "authpermission", name: "1-A. Auth Permission", component: AuthPermissionScreen },
  { id: "phoneverify", name: "1-B. Phone Verification", component: PhoneVerificationScreen },
  { id: "welcome", name: "1-C. Welcome", component: WelcomeScreen },
  { id: "apppermissions", name: "1-D. App Permissions", component: AppPermissionsScreen },
  
  // Discovery & Browse
  { id: "home", name: "2. Home", component: HomeScreen },
  { id: "feed", name: "3. Restaurant Feed", component: RestaurantFeedScreen },
  { id: "search", name: "4. Search", component: SearchScreen },
  { id: "koreanfood", name: "4-A. Korean Food", component: KoreanFoodCategoryScreen },
  { id: "store", name: "5. Store Detail", component: StoreDetailScreen },
  { id: "kfcstore", name: "5-A. KFC Store", component: KoreanFriedChickenStoreScreen },
  
  // Social & Ordering
  { id: "chat", name: "6. Chat", component: ChatScreen },
  { id: "group", name: "7. Group Order", component: GroupOrderScreen },
  { id: "cart", name: "8. Cart", component: CartScreen },
  { id: "payment", name: "9. Payment", component: PaymentScreen },
  { id: "cardtype", name: "9-A. Card Type", component: CardTypeSelectionScreen },
  { id: "vietnam-card-registration", name: "9-B. Vietnam Card", component: VietnamCardRegistrationScreen },
  { id: "vietnamcard", name: "9-B. Vietnam Card", component: VietnamCardRegistrationScreen },
  { id: "international-card-registration", name: "9-C. International Card", component: InternationalCardRegistrationScreen },
  { id: "internationalcard", name: "9-C. International Card", component: InternationalCardRegistrationScreen },
  
  // Post-Order Flow
  { id: "orderconfirm", name: "9-D. Order Confirmation", component: OrderConfirmationScreen },
  { id: "status", name: "10. Order Status", component: OrderStatusScreen },
  { id: "map", name: "11. Delivery Map", component: DeliveryMapScreen },
  { id: "review", name: "12. Write Review", component: WriteReviewScreen },
  { id: "receipt", name: "13. Receipt", component: ReceiptScreen },
  
  // Settings & Support
  { id: "mypage", name: "14. My Page", component: MyPageScreen },
  { id: "profileedit", name: "14-A. Profile Edit", component: ProfileEditScreen },
  { id: "address", name: "15. Address Input", component: AddressInputScreen },
  { id: "addressdetail", name: "16. Address Detail", component: AddressDetailScreen },
  { id: "addressmanagement", name: "16-A. Address Management", component: AddressManagementScreen },
  { id: "paymentreg", name: "17. Payment Registration", component: PaymentRegistrationScreen },
  { id: "paymentsetup", name: "18. Payment Setup", component: PaymentSetupScreen },
  { id: "paymentmethods", name: "18-A. Payment Methods", component: PaymentMethodsScreen },
  { id: "orderhistory", name: "19. Order History", component: OrderHistoryScreen },
  { id: "pointshistory", name: "19-A. Points History", component: PointsHistoryScreen },
  { id: "coupons", name: "19-B. Coupons", component: CouponsScreen },
  { id: "ingredients", name: "19-C. Ingredients (B2B)", component: IngredientsScreen },
  { id: "support", name: "20. Customer Support", component: CustomerSupportScreen },
  { id: "dispute", name: "21. Dispute Resolution", component: DisputeResolutionScreen },
  { id: "terms", name: "22. Terms of Service", component: TermsScreen },
  { id: "privacy", name: "23. Privacy Policy", component: PrivacyPolicyScreen },
];

const OWNER_SCREENS = [
  { id: "ownerhome", name: "21. Owner Home", component: StoreOwnerHomeScreen },
  { id: "storehours", name: "21-B. Store Hours", component: StoreHoursScreen },
  { id: "todaysales", name: "21-A. Today's Sales", component: TodaySalesScreen },
  { id: "ownerregistrationpending", name: "22. Registration Pending", component: RegistrationPendingScreen },
  { id: "neworder", name: "23. New Order", component: NewOrderScreen },
  { id: "activeorders", name: "24. Active Orders", component: ActiveOrdersScreen },
  { id: "menu", name: "25. Menu Management", component: MenuManagementScreen },
  { id: "wallet", name: "26. Biz Wallet", component: BizWalletScreen },
  { id: "bankaccountregistration", name: "26-A. Bank Account", component: BankAccountRegistrationScreen },
  { id: "withdrawalrequest", name: "26-B. Withdrawal", component: WithdrawalRequestScreen },
  { id: "rawmaterials", name: "26.5. Raw Materials", component: RawMaterialsOrderScreen },
  { id: "report", name: "27. Performance Report", component: PerformanceReportScreen },
  { id: "marketing", name: "28. Marketing Center", component: MarketingCenterScreen },
  { id: "insights", name: "29. Premium Insights", component: PremiumInsightsScreen },
  { id: "premiumsubscription", name: "30. Premium Subscription", component: PremiumDataSubscription },
  { id: "ownerdash", name: "31. Owner Dashboard", component: OwnerDashboardScreen },
  { id: "franchise", name: "32. Franchise Master", component: FranchiseMasterScreen },
  { id: "franchisereport", name: "33. Franchise Report", component: FranchiseUnifiedReportScreen },
  { id: "franchisecompare", name: "33-A. Franchise Compare", component: FranchiseCompareScreen },
  { id: "branchmanagement", name: "34. Branch Management", component: BranchManagementScreen },
];

const ADMIN_SCREENS = [
  // ===== 슈퍼 어드민 홈 (카테고리 선택) =====
  { id: "adminhome", name: "🏠 Super Admin Home", component: SuperAdminHomeScreen },
  
  // ===== 데이터 자산 =====
  { id: "admindash", name: "35. Data Command Center", component: AdminDashboardScreen },
  { id: "userprofiles", name: "35-A. User Profiles", component: UserProfilesDatabaseScreen },
  { id: "menudatabase", name: "35-B. Menu Database", component: MenuDatabaseScreen },
  { id: "searchintelligence", name: "35-C. Search Intelligence", component: SearchIntelligenceScreen },
  { id: "pendingactions", name: "35-D. Pending Actions", component: PendingActionsScreen },
  
  // ===== 재무 관리 =====
  { id: "adminfinance", name: "36. Financial Approvals", component: FinancialApprovalsScreen },
  { id: "withdrawalapproval", name: "36-A. Withdrawal Approval", component: WithdrawalApprovalScreen },
  
  // ===== 운영 관리 =====
  { id: "admindispute", name: "37. Dispute Center", component: DisputeCenterScreen },
  
  // ===== 파트너 관리 =====
  { id: "adminfranchise", name: "38. Franchise Control", component: FranchiseControlScreen },
  { id: "franchisesubscription", name: "38-A. Franchise Subscription", component: FranchiseSubscriptionPlanScreen },
  { id: "admindiscipline", name: "41. Store Discipline", component: StoreDisciplineScreen },
  
  // ===== 분석 & 인사이트 =====
  { id: "adminanalytics", name: "39. Global Analytics", component: GlobalAnalyticsScreen },
  { id: "adminadreview", name: "40. Ad Review", component: AdReviewApprovalScreen },
];

const ALL_SCREENS = [...CUSTOMER_SCREENS, ...OWNER_SCREENS, ...ADMIN_SCREENS];

// ============================================
// MAIN APP CONTENT (uses context)
// ============================================
function AppContent() {
  const { currentScreen, navigate, isAuthScreen } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Find current screen component
  const screen = ALL_SCREENS.find((s) => s.id === currentScreen);
  const CurrentComponent = screen?.component || SplashScreen;
  
  // Determine current section
  const getCurrentSection = () => {
    if (CUSTOMER_SCREENS.find((s) => s.id === currentScreen)) return "customer";
    if (OWNER_SCREENS.find((s) => s.id === currentScreen)) return "owner";
    if (ADMIN_SCREENS.find((s) => s.id === currentScreen)) return "admin";
    return "customer";
  };
  
  const section = getCurrentSection();
  const showBottomNav = section === "customer" && !isAuthScreen(currentScreen);
  
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center relative">
      <Toaster position="top-center" richColors />
      
      {/* Mobile Frame */}
      <div className="w-full max-w-[430px] min-h-screen bg-background relative shadow-2xl">
        <CurrentComponent />

        {/* Floating Menu Button - Screen Navigator */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed bottom-24 right-6 z-[100] w-14 h-14 bg-gradient-to-r from-primary to-orange-600 text-white rounded-full shadow-2xl hover:shadow-xl transition-all active:scale-95 flex items-center justify-center border-2 border-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Screen Navigation Menu */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
              onClick={() => setMenuOpen(false)}
            />

            <div className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white z-[95] shadow-2xl overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-primary to-orange-600 px-6 py-5 shadow-lg z-10">
                <h2 className="text-white text-[20px] mb-1">Screen Navigator</h2>
                <p className="text-white/90 text-[12px]">프로토타입 네비게이터</p>
              </div>

              <div className="p-4 space-y-6 pb-24">
                {/* Customer Screens */}
                <ScreenSection
                  title="👤 Customer App"
                  count={CUSTOMER_SCREENS.length}
                  screens={CUSTOMER_SCREENS}
                  currentScreen={currentScreen}
                  onNavigate={(id) => { navigate(id); setMenuOpen(false); }}
                />

                {/* Owner Screens */}
                <ScreenSection
                  title="🏪 Store Owner App"
                  count={OWNER_SCREENS.length}
                  screens={OWNER_SCREENS}
                  currentScreen={currentScreen}
                  onNavigate={(id) => { navigate(id); setMenuOpen(false); }}
                />

                {/* Admin Screens */}
                <ScreenSection
                  title="🛡️ Super Admin App"
                  count={ADMIN_SCREENS.length}
                  screens={ADMIN_SCREENS}
                  currentScreen={currentScreen}
                  onNavigate={(id) => { navigate(id); setMenuOpen(false); }}
                  isAdmin
                />
              </div>
            </div>
          </>
        )}

        {/* Bottom Navigation - Customer App Only */}
        {showBottomNav && (
          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
            <div className="max-w-[430px] mx-auto flex items-center justify-around px-2 py-2">
              <NavButton
                icon={<Home className="w-5 h-5" />}
                label="홈 / Home"
                isActive={currentScreen === "feed" || currentScreen === "home"}
                onClick={() => navigate("feed")}
              />
              <NavButton
                icon={<Search className="w-5 h-5" />}
                label="검색 / Search"
                isActive={currentScreen === "search"}
                onClick={() => navigate("search")}
              />
              <NavButton
                icon={<ShoppingBag className="w-5 h-5" />}
                label="장바구니 / Cart"
                isActive={currentScreen === "cart"}
                onClick={() => navigate("cart")}
                showBadge
              />
              <NavButton
                icon={<User className="w-5 h-5" />}
                label="마이 / My"
                isActive={currentScreen === "mypage"}
                onClick={() => navigate("mypage")}
              />
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================
interface ScreenSectionProps {
  title: string;
  count: number;
  screens: typeof CUSTOMER_SCREENS;
  currentScreen: string;
  onNavigate: (id: string) => void;
  isAdmin?: boolean;
}

function ScreenSection({ title, count, screens, currentScreen, onNavigate, isAdmin }: ScreenSectionProps) {
  return (
    <div>
      <h3 className="text-[13px] text-muted-foreground mb-3 px-2">
        {title} ({count})
      </h3>
      <div className="space-y-1">
        {screens.map((screen) => (
          <button
            key={screen.id}
            onClick={() => onNavigate(screen.id)}
            className={`w-full text-left px-4 py-3 rounded-[12px] text-[13px] transition-all ${
              currentScreen === screen.id
                ? isAdmin
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-primary text-white shadow-md"
                : "bg-accent hover:bg-accent/70 text-foreground"
            }`}
          >
            {screen.name}
          </button>
        ))}
      </div>
    </div>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  showBadge?: boolean;
}

function NavButton({ icon, label, isActive, onClick, showBadge }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-[12px] transition-colors relative ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {icon}
      <span className="text-[10px]">{label}</span>
      {showBadge && (
        <div className="absolute top-1 right-2 w-2 h-2 bg-primary rounded-full" />
      )}
    </button>
  );
}

// ============================================
// ROOT APP COMPONENT
// ============================================
export default function App() {
  return (
    <AppProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AppProvider>
  );
}

// ============================================
// RE-EXPORT NAVIGATION HOOK FOR COMPATIBILITY
// (screens still import from App.tsx)
// ============================================
export { useNavigation } from "./contexts/AppContext";
