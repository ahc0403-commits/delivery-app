// ============================================
// UI STRINGS & LABELS
// Centralized text content for internationalization
// ============================================

// ============================================
// COMMON LABELS
// ============================================
export const COMMON = {
  // Navigation
  home: { ko: '홈', en: 'Home', vi: 'Trang chủ' },
  search: { ko: '검색', en: 'Search', vi: 'Tìm kiếm' },
  cart: { ko: '장바구니', en: 'Cart', vi: 'Giỏ hàng' },
  myPage: { ko: '마이', en: 'My', vi: 'Cá nhân' },
  orders: { ko: '주문', en: 'Orders', vi: 'Đơn hàng' },
  
  // Actions
  back: { ko: '뒤로', en: 'Back', vi: 'Quay lại' },
  next: { ko: '다음', en: 'Next', vi: 'Tiếp' },
  confirm: { ko: '확인', en: 'Confirm', vi: 'Xác nhận' },
  cancel: { ko: '취소', en: 'Cancel', vi: 'Hủy' },
  save: { ko: '저장', en: 'Save', vi: 'Lưu' },
  delete: { ko: '삭제', en: 'Delete', vi: 'Xóa' },
  edit: { ko: '수정', en: 'Edit', vi: 'Sửa' },
  
  // Status
  loading: { ko: '로딩중...', en: 'Loading...', vi: 'Đang tải...' },
  error: { ko: '오류가 발생했습니다', en: 'An error occurred', vi: 'Đã xảy ra lỗi' },
  success: { ko: '완료되었습니다', en: 'Success', vi: 'Thành công' },
};

// ============================================
// AUTH SCREENS
// ============================================
export const AUTH = {
  splash: {
    tagline: { ko: 'Korea × Vietnam', en: 'Korea × Vietnam', vi: 'Hàn Quốc × Việt Nam' },
    premium: { ko: 'Premium Delivery', en: 'Premium Delivery', vi: 'Giao hàng cao cấp' },
  },
  login: {
    kakao: { ko: '카카오로 시작하기', en: 'Continue with Kakao', vi: 'Tiếp tục với Kakao' },
    zalo: { ko: 'Zalo로 시작하기', en: 'Continue with Zalo', vi: 'Tiếp tục với Zalo' },
    google: { ko: 'Google로 시작하기', en: 'Continue with Google', vi: 'Tiếp tục với Google' },
    apple: { ko: 'Apple로 시작하기', en: 'Continue with Apple', vi: 'Tiếp tục với Apple' },
  },
  permission: {
    title: { ko: '안전하게 시작할게요 🔒', en: "Let's start safely 🔒", vi: 'Bắt đầu an toàn 🔒' },
    profile: { ko: '프로필 정보', en: 'Profile Info', vi: 'Thông tin hồ sơ' },
    phone: { ko: '전화번호', en: 'Phone Number', vi: 'Số điện thoại' },
    allow: { ko: '좋아요, 시작할게요!', en: "Okay, let's start!", vi: 'Được, bắt đầu thôi!' },
    later: { ko: '나중에 할게요', en: 'Later', vi: 'Để sau' },
  },
  welcome: {
    title: { ko: '환영해요! 🎉', en: 'Welcome! 🎉', vi: 'Chào mừng! 🎉' },
    subtitle: { ko: '우리와 이제부터 맛있는 여정을 함께해요', en: 'Join us on a delicious journey', vi: 'Hãy cùng chúng tôi trải nghiệm ẩm thực' },
  },
};

// ============================================
// HOME SCREEN
// ============================================
export const HOME = {
  searchPlaceholder: { 
    ko: '무엇을 주문할까요?', 
    en: 'What would you like to order?', 
    vi: 'Bạn muốn đặt gì?' 
  },
  trending: { ko: '인기', en: 'Trending', vi: 'Xu hướng' },
  newArrival: { ko: '새로 나왔어요 ✨', en: 'New ✨', vi: 'Mới ✨' },
  todayDiscount: { ko: '오늘만 15% 할인해드려요!', en: '15% off today only!', vi: 'Giảm 15% chỉ hôm nay!' },
  recommendations: { ko: '오늘은 이 메뉴 어때요? 🍽️', en: 'How about this? 🍽️', vi: 'Món này thế nào? 🍽️' },
  seeMore: { ko: '더보기', en: 'See more', vi: 'Xem thêm' },
};

// ============================================
// CART & CHECKOUT
// ============================================
export const CART = {
  title: { ko: '장바구니', en: 'Cart', vi: 'Giỏ hàng' },
  empty: { ko: '장바구니가 비었어요', en: 'Your cart is empty', vi: 'Giỏ hàng trống' },
  emptyMessage: { ko: '맛있는 음식을 담아보세요!', en: 'Start adding delicious food!', vi: 'Thêm món ngon vào giỏ!' },
  browseMenu: { ko: '메뉴 둘러보기 🍽️', en: 'Browse Menu 🍽️', vi: 'Xem thực đơn 🍽️' },
  subtotal: { ko: '상품 금액', en: 'Subtotal', vi: 'Tạm tính' },
  deliveryFee: { ko: '배달비', en: 'Delivery', vi: 'Phí giao hàng' },
  freeDelivery: { ko: '무료배달 🎉', en: 'Free Delivery 🎉', vi: 'Miễn phí 🎉' },
  total: { ko: '총 결제금액', en: 'Total', vi: 'Tổng cộng' },
  minOrderWarning: { ko: '최소 주문금액 미달', en: 'Minimum order not met', vi: 'Chưa đạt đơn tối thiểu' },
  checkout: { ko: '결제하기', en: 'Checkout', vi: 'Thanh toán' },
};

// ============================================
// PAYMENT
// ============================================
export const PAYMENT = {
  title: { ko: '어떻게 결제할까요? 💳', en: 'How to pay? 💳', vi: 'Thanh toán bằng? 💳' },
  amount: { ko: '결제하실 금액이에요', en: 'Amount to pay', vi: 'Số tiền thanh toán' },
  selectMethod: { ko: '편한 방법으로 선택해주세요', en: 'Choose your payment method', vi: 'Chọn phương thức' },
  recommended: { ko: '많이 쓰여요 ⭐', en: 'Popular ⭐', vi: 'Phổ biến ⭐' },
  secure: { ko: '보안 결제', en: 'Secure Payment', vi: 'Thanh toán an toàn' },
  secureMessage: { ko: '모든 결제는 256비트 SSL로 암호화됩니다', en: 'All payments are encrypted with 256-bit SSL', vi: 'Mọi giao dịch được mã hóa SSL 256-bit' },
};

// ============================================
// ORDER STATUS
// ============================================
export const ORDER = {
  tracking: { ko: '내 떡볶이가 어디쯤 왔을까요? 🚚', en: 'Where is my order? 🚚', vi: 'Đơn hàng đang ở đâu? 🚚' },
  orderNumber: { ko: '주문번호', en: 'Order No.', vi: 'Mã đơn' },
  preparing: { ko: '정성껏 만들고 있어요!', en: 'Preparing with care!', vi: 'Đang chuẩn bị!' },
  almostReady: { ko: '곧 맛있게 드실 수 있어요 ☘️', en: 'Almost ready ☘️', vi: 'Sắp xong ☘️' },
  liveUpdates: { ko: '실시간 업데이트', en: 'Live Updates', vi: 'Cập nhật trực tiếp' },
  estimatedDelivery: { ko: '예상 배달 시간', en: 'Estimated Delivery', vi: 'Dự kiến giao' },
};

// ============================================
// MY PAGE
// ============================================
export const MY_PAGE = {
  greeting: { ko: '안녕하세요! 👋', en: 'Hello! 👋', vi: 'Xin chào! 👋' },
  checkInfo: { ko: '내 정보를 확인해보세요', en: 'Check your info', vi: 'Xem thông tin' },
  membership: { ko: '멤버십 등급', en: 'Membership', vi: 'Hạng thành viên' },
  orders: { ko: '주문', en: 'Orders', vi: 'Đơn hàng' },
  points: { ko: '포인트', en: 'Points', vi: 'Điểm' },
  coupons: { ko: '쿠폰', en: 'Coupons', vi: 'Voucher' },
  settings: { ko: '설정하기', en: 'Settings', vi: 'Cài đặt' },
  editProfile: { ko: '정보 수정', en: 'Edit Profile', vi: 'Sửa hồ sơ' },
  addressBook: { ko: '주소 관리', en: 'Address Book', vi: 'Địa chỉ' },
  paymentMethods: { ko: '결제 수단', en: 'Payment Methods', vi: 'Thanh toán' },
  language: { ko: '언어 설정', en: 'Language', vi: 'Ngôn ngữ' },
  notifications: { ko: '알림', en: 'Notifications', vi: 'Thông báo' },
  helpCenter: { ko: '고객센터', en: 'Help Center', vi: 'Trung tâm hỗ trợ' },
  terms: { ko: '이용약관', en: 'Terms of Service', vi: 'Điều khoản' },
  privacy: { ko: '개인정보 처리방침', en: 'Privacy Policy', vi: 'Chính sách' },
  logout: { ko: '로그아웃', en: 'Logout', vi: 'Đăng xuất' },
};

// ============================================
// REVIEW
// ============================================
export const REVIEW = {
  title: { ko: '리뷰 작성', en: 'Write Review', vi: 'Viết đánh giá' },
  question: { ko: '맛은 어떠셨나요?', en: 'How was the food?', vi: 'Món ăn thế nào?' },
  selectRating: { ko: '별점을 선택해주세요', en: 'Tap to rate', vi: 'Chạm để đánh giá' },
  tagsQuestion: { ko: '어떤 점이 좋았나요? (복수선택)', en: 'What did you like? (Multiple)', vi: 'Bạn thích gì? (Chọn nhiều)' },
  additionalComments: { ko: '더 말씀해주실 내용이 있나요? (선택)', en: 'Additional comments (optional)', vi: 'Nhận xét thêm (tùy chọn)' },
  submit: { ko: '리뷰 등록', en: 'Submit Review', vi: 'Gửi đánh giá' },
};

// ============================================
// STORE OWNER
// ============================================
export const OWNER = {
  dashboard: { ko: '매장 관리', en: 'Store Dashboard', vi: 'Quản lý cửa hàng' },
  todaySales: { ko: '오늘 매출', en: "Today's Sales", vi: 'Doanh thu hôm nay' },
  activeOrders: { ko: '활성 주문', en: 'Active Orders', vi: 'Đơn đang xử lý' },
  newOrder: { ko: '신규 주문', en: 'New Order', vi: 'Đơn mới' },
  menuManagement: { ko: '메뉴 관리', en: 'Menu Management', vi: 'Quản lý thực đơn' },
  bizWallet: { ko: '비즈 머니', en: 'Biz Wallet', vi: 'Ví doanh nghiệp' },
  storeOpen: { ko: '매장 영업중', en: 'Store Open', vi: 'Đang mở cửa' },
  storeClosed: { ko: '매장 휴무', en: 'Store Closed', vi: 'Đã đóng cửa' },
};

// ============================================
// ADMIN
// ============================================
export const ADMIN = {
  dashboard: { ko: '데이터 종합 상황실', en: 'Data Command Center', vi: 'Trung tâm dữ liệu' },
  dataAssets: { ko: '데이터 자산 현황', en: 'Data Assets Overview', vi: 'Tổng quan dữ liệu' },
  userProfiles: { ko: '사용자 프로필', en: 'User Profiles', vi: 'Hồ sơ người dùng' },
  menuDatabase: { ko: '메뉴 데이터베이스', en: 'Menu Database', vi: 'CSDL thực đơn' },
  searchIntelligence: { ko: '검색 인텔리전스', en: 'Search Intelligence', vi: 'Phân tích tìm kiếm' },
  pendingActions: { ko: '대기 중인 작업', en: 'Pending Actions', vi: 'Đang chờ xử lý' },
  financialApprovals: { ko: '자금 승인', en: 'Financial Approvals', vi: 'Duyệt tài chính' },
  disputeCenter: { ko: '분쟁 센터', en: 'Dispute Center', vi: 'Trung tâm khiếu nại' },
  systemHealth: { ko: '시스템 상태', en: 'System Health', vi: 'Tình trạng hệ thống' },
};



