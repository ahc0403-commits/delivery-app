// ============================================
// EVENT TYPE DEFINITIONS
// All trackable events in the Deli-berry platform
// ============================================

// Base event structure
export interface BaseEvent {
  event_id: string;
  event_name: string;
  event_category: EventCategory;
  timestamp: string;
  session_id: string;
  user_id?: string;
  device_info: DeviceInfo;
  geo?: GeoInfo;
  properties: Record<string, any>;
}

export type EventCategory = 'consumer' | 'store' | 'rider' | 'payment' | 'admin';

export interface DeviceInfo {
  platform: 'ios' | 'android' | 'web';
  os_version: string;
  app_version: string;
  device_model: string;
  screen_width: number;
  screen_height: number;
}

export interface GeoInfo {
  country: string;
  city: string;
  district?: string;
  lat?: number;
  lng?: number;
}

// ============================================
// EVENT NAME CONSTANTS
// ============================================

export const EVENTS = {
  // Session Events
  SESSION_START: 'session_start',
  SESSION_END: 'session_end',
  SCREEN_VIEW: 'screen_view',
  SCREEN_DWELL: 'screen_dwell',

  // Auth Events
  LOGIN_ATTEMPT: 'login_attempt',
  LOGIN_SUCCESS: 'login_success',
  LOGIN_FAILURE: 'login_failure',
  LOGOUT: 'logout',
  SIGNUP_START: 'signup_start',
  SIGNUP_COMPLETE: 'signup_complete',

  // Search Events
  SEARCH_QUERY: 'search_query',
  SEARCH_RESULT_VIEW: 'search_result_view',
  SEARCH_RESULT_CLICK: 'search_result_click',
  SEARCH_FILTER_APPLY: 'search_filter_apply',
  SEARCH_NULL_RESULT: 'search_null_result',

  // Browse Events
  STORE_LIST_VIEW: 'store_list_view',
  STORE_LIST_SCROLL: 'store_list_scroll',
  STORE_CARD_IMPRESSION: 'store_card_impression',
  STORE_CARD_CLICK: 'store_card_click',
  BANNER_IMPRESSION: 'banner_impression',
  BANNER_CLICK: 'banner_click',
  CATEGORY_VIEW: 'category_view',

  // Store Detail Events
  STORE_VIEW: 'store_view',
  MENU_SECTION_VIEW: 'menu_section_view',
  MENU_ITEM_IMPRESSION: 'menu_item_impression',
  MENU_ITEM_CLICK: 'menu_item_click',
  MENU_ITEM_ADD_CART: 'menu_item_add_cart',
  STORE_CHAT_START: 'store_chat_start',

  // Cart Events
  CART_VIEW: 'cart_view',
  CART_ITEM_ADD: 'cart_item_add',
  CART_ITEM_REMOVE: 'cart_item_remove',
  CART_ITEM_QUANTITY: 'cart_item_quantity',
  CART_ABANDON: 'cart_abandon',
  CART_CLEAR: 'cart_clear',

  // Checkout Events
  CHECKOUT_START: 'checkout_start',
  PAYMENT_METHOD_SELECT: 'payment_method_select',
  PAYMENT_ATTEMPT: 'payment_attempt',
  PAYMENT_SUCCESS: 'payment_success',
  PAYMENT_FAILURE: 'payment_failure',

  // Order Events
  ORDER_CONFIRMED: 'order_confirmed',
  ORDER_STATUS_VIEW: 'order_status_view',
  ORDER_STATUS_REFRESH: 'order_status_refresh',
  ORDER_CANCEL_REQUEST: 'order_cancel_request',

  // Delivery Events
  DELIVERY_MAP_VIEW: 'delivery_map_view',
  DELIVERY_ETA_VIEW: 'delivery_eta_view',

  // Review Events
  REVIEW_PROMPT_SHOW: 'review_prompt_show',
  REVIEW_START: 'review_start',
  REVIEW_STAR_SELECT: 'review_star_select',
  REVIEW_TAG_SELECT: 'review_tag_select',
  REVIEW_TEXT_ENTER: 'review_text_enter',
  REVIEW_SUBMIT: 'review_submit',
  REVIEW_SKIP: 'review_skip',

  // Engagement Events
  COUPON_VIEW: 'coupon_view',
  COUPON_APPLY: 'coupon_apply',
  COUPON_FAIL: 'coupon_fail',
  POINTS_VIEW: 'points_view',
  POINTS_REDEEM: 'points_redeem',
  REORDER_CLICK: 'reorder_click',
  SHARE_CLICK: 'share_click',

  // Store Owner Events
  STORE_OPEN: 'store_open',
  STORE_CLOSE: 'store_close',
  STORE_BUSY_TOGGLE: 'store_busy_toggle',
  ORDER_RECEIVED: 'order_received',
  ORDER_ACCEPTED: 'order_accepted',
  ORDER_REJECTED: 'order_rejected',
  ORDER_PREP_START: 'order_prep_start',
  ORDER_READY: 'order_ready',
  ORDER_HANDOFF: 'order_handoff',
  MENU_ITEM_UPDATE: 'menu_item_update',
  MENU_ITEM_STOCK_OUT: 'menu_item_stock_out',
  MENU_ITEM_RESTOCK: 'menu_item_restock',
  WITHDRAWAL_REQUEST: 'withdrawal_request',

  // Admin Events
  ADMIN_LOGIN: 'admin_login',
  ADMIN_ACTION: 'admin_action',
  REPORT_VIEW: 'report_view',
  REPORT_EXPORT: 'report_export',
} as const;

export type EventName = typeof EVENTS[keyof typeof EVENTS];

// ============================================
// EVENT PROPERTY INTERFACES
// ============================================

export interface SearchEventProps {
  query: string;
  filters?: Record<string, any>;
  result_count?: number;
  has_results: boolean;
}

export interface StoreClickEventProps {
  store_id: string;
  store_name: string;
  position: number;
  is_sponsored: boolean;
  source: 'search' | 'feed' | 'category' | 'recommendation';
}

export interface CartEventProps {
  item_id: string;
  item_name: string;
  item_price: number;
  quantity: number;
  store_id: string;
  store_name: string;
}

export interface PaymentEventProps {
  order_id?: string;
  amount: number;
  method: 'card' | 'momo' | 'zalo' | 'cod';
  card_brand?: string;
  failure_reason?: string;
}

export interface OrderEventProps {
  order_id: string;
  store_id: string;
  store_name: string;
  total_amount: number;
  item_count: number;
  payment_method: string;
  delivery_address?: string;
  estimated_delivery_mins?: number;
}

export interface ReviewEventProps {
  order_id: string;
  store_id: string;
  rating?: number;
  tags?: string[];
  has_text: boolean;
}

export interface OrderRejectionEventProps {
  order_id: string;
  reason_id: string;
  reason_label: string;
  custom_reason?: string;
  time_since_order_seconds: number;
}



