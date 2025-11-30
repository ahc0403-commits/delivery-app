# 🍓 Deli-berry Data Strategy & Analytics Architecture

## Executive Summary

This document outlines the comprehensive data collection, event tracking, and analytics architecture for the Deli-berry food delivery super app. The goal is to capture all valuable user, store, rider, and payment events to power B2B data monetization through the Super Admin analytics layer.

---

## 📊 Part 1: Current State Analysis

### 1.1 App Structure Overview

The application consists of **3 distinct apps** within one codebase:

| App | Screens | Target User |
|-----|---------|-------------|
| **Customer App** | 23 screens | End consumers |
| **Store Owner App** | 14 screens | Restaurant owners/merchants |
| **Super Admin App** | 10 screens | Platform operators |

> **Note:** Rider App does not exist yet - this is a critical gap for logistics data.

---

### 1.2 Current Screen Inventory & Data Mapping

#### 👤 CUSTOMER APP (23 Screens)

| Screen ID | Screen Name | Current Actions | Data Points Capturable | Currently Missing |
|-----------|-------------|-----------------|------------------------|-------------------|
| `splash` | Splash/Login | Social login (Kakao, Google, Apple) | ✅ Login method, device type | ❌ Session start time, referral source, UTM params |
| `authpermission` | Auth Permission | Consent toggle | ✅ Permission grants | ❌ Timestamp, consent version |
| `phoneverify` | Phone Verification | Phone input, OTP | ✅ Phone number | ❌ Verification success/fail rate |
| `welcome` | Welcome | Onboarding complete | ✅ User created | ❌ Onboarding completion time |
| `home` | Home | Category click, banner tap | ⚠️ Partial | ❌ Banner impressions, dwell time, scroll depth |
| `feed` | Restaurant Feed | Store list view, store click | ⚠️ Partial | ❌ Impressions, scroll position, sponsored vs organic clicks |
| `search` | Search | Query input, filter, result click | ⚠️ Query saved locally | ❌ Null searches, filter usage, CTR per result |
| `koreanfood` | Korean Food Category | Category browse | ❌ None | ❌ Category view time, filter patterns |
| `store` | Store Detail | Menu view, add to cart, chat | ⚠️ Add to cart works | ❌ Menu item impressions, dwell time per section |
| `chat` | Chat | Message send | ❌ None | ❌ Chat initiation, message count, response time |
| `group` | Group Order | Share link | ❌ None | ❌ Group creation, participant joins |
| `cart` | Cart | Quantity change, checkout | ✅ Cart state in context | ❌ Cart abandonment, time in cart |
| `payment` | Payment | Method selection, pay | ⚠️ Method selected | ❌ Payment method preference, failure reasons |
| `cardtype` | Card Type Selection | Card type choice | ❌ None | ❌ International vs local card ratio |
| `vietnam-card-registration` | Vietnam Card | Card input | ✅ localStorage | ❌ Drop-off point in form |
| `international-card-registration` | International Card | Card input | ✅ localStorage | ❌ Card brand distribution |
| `orderconfirm` | Order Confirmation | View confirmation | ❌ None | ❌ Order ID, confirmation view time |
| `status` | Order Status | Track order | ❌ None | ❌ Status check frequency |
| `map` | Delivery Map | Track driver | ❌ None | ❌ Map interaction, ETA accuracy |
| `review` | Write Review | Star rating, tags, text | ✅ Tags collected | ❌ Review completion rate, sentiment |
| `receipt` | Receipt | View receipt | ❌ None | ❌ Receipt download |
| `mypage` | My Page | Profile access | ❌ None | ❌ Section clicks |
| `orderhistory` | Order History | Reorder, view receipt | ❌ None | ❌ Reorder rate, time since last order |
| `pointshistory` | Points History | View points | ❌ None | ❌ Points engagement |
| `coupons` | Coupons | Apply coupon | ❌ None | ❌ Coupon usage rate, source |
| `support` | Customer Support | Contact | ❌ None | ❌ Issue category, resolution time |
| `dispute` | Dispute Resolution | File complaint | ❌ None | ❌ Dispute type, outcome |

#### 🏪 STORE OWNER APP (14 Screens)

| Screen ID | Screen Name | Current Actions | Data Points Capturable | Currently Missing |
|-----------|-------------|-----------------|------------------------|-------------------|
| `ownerhome` | Owner Home | Status toggle, quick stats | ✅ Open/closed status | ❌ Session duration, daily active time |
| `storehours` | Store Hours | Set schedule | ✅ Hours in localStorage | ❌ Schedule change frequency |
| `todaysales` | Today's Sales | View revenue | ❌ Static data | ❌ Real sales data, hourly breakdown |
| `neworder` | New Order | Accept/reject | ✅ Reject reason collected | ❌ Accept time, prep time estimation |
| `activeorders` | Active Orders | Manage orders | ❌ None | ❌ Order completion time, status transitions |
| `menu` | Menu Management | Edit menu | ❌ None | ❌ Price changes, item availability |
| `wallet` | Biz Wallet | View balance | ❌ None | ❌ Cash flow patterns |
| `withdrawalrequest` | Withdrawal | Request withdrawal | ❌ None | ❌ Withdrawal frequency, amounts |
| `rawmaterials` | Raw Materials | Order supplies | ❌ None | ❌ Ingredient ordering patterns |
| `report` | Performance Report | View analytics | ❌ None | ❌ Report view frequency |
| `marketing` | Marketing Center | Create ads | ❌ None | ❌ Ad creation, spend |
| `insights` | Premium Insights | View premium data | ❌ None | ❌ Feature usage |
| `franchise` | Franchise Master | Multi-store manage | ❌ None | ❌ Franchise operations |

#### 🛡️ SUPER ADMIN APP (10 Screens)

| Screen ID | Screen Name | Purpose | Current Data Display | Needed Enhancements |
|-----------|-------------|---------|---------------------|---------------------|
| `admindash` | Data Command Center | Overview | Static counts | Real-time aggregates |
| `userprofiles` | User Profiles Database | User analytics | Mock data | Real user segments |
| `menudatabase` | Menu Database | Menu analytics | Mock data | Price/popularity tracking |
| `searchintelligence` | Search Intelligence | Search trends | Mock data | Real query analysis |
| `pendingactions` | Pending Actions | Approvals | Mock data | Real pending items |
| `adminfinance` | Financial Approvals | Finance | Mock data | Real transactions |
| `withdrawalapproval` | Withdrawal Approval | Payouts | Mock data | Real payout queue |
| `admindispute` | Dispute Center | Disputes | Mock data | Real dispute cases |
| `adminfranchise` | Franchise Control | Franchise | Mock data | Real franchise data |
| `adminanalytics` | Global Analytics | Master BI | Mock data | Real dashboards |

---

### 1.3 Critical Gaps Identified

#### 🔴 HIGH PRIORITY GAPS

1. **No Event Tracking Infrastructure**
   - No analytics.track() or similar calls anywhere
   - No event logging to backend
   - No session tracking

2. **No Rider App**
   - Cannot capture delivery logistics data
   - No rider performance metrics
   - No route/ETA data

3. **Cart Abandonment Not Tracked**
   - Cart context exists but no abandonment events
   - No re-engagement triggers

4. **Search Data Lost**
   - Queries not persisted to backend
   - No null-search detection
   - No search-to-order attribution

5. **Payment Failures Not Captured**
   - Only success paths handled
   - No failure reason categorization

---

## 📐 Part 2: Event Schema & Data Model

### 2.1 Core Event Schema

All events follow this base structure:

```typescript
interface BaseEvent {
  event_id: string;          // UUID
  event_name: string;        // e.g., "search_query"
  event_category: string;    // "consumer" | "store" | "rider" | "payment"
  timestamp: string;         // ISO 8601
  session_id: string;        // Session UUID
  user_id?: string;          // Null for anonymous
  device_info: {
    platform: "ios" | "android" | "web";
    os_version: string;
    app_version: string;
    device_model: string;
  };
  geo: {
    country: string;
    city: string;
    district?: string;
    lat?: number;
    lng?: number;
  };
  properties: Record<string, any>;  // Event-specific data
}
```

### 2.2 Event Taxonomy

#### Category 1: Consumer Intent & Behavior

```typescript
// SESSION EVENTS
"session_start"         // App open
"session_end"           // App close/background
"screen_view"           // Screen navigation
"screen_dwell"          // Time spent on screen

// SEARCH EVENTS  
"search_query"          // Search submitted
"search_result_view"    // Results displayed
"search_result_click"   // Result tapped
"search_filter_apply"   // Filter used
"search_null_result"    // No results found

// BROWSE EVENTS
"store_list_view"       // Feed/category view
"store_list_scroll"     // Scroll depth
"store_card_impression" // Store card visible
"store_card_click"      // Store card tapped
"banner_impression"     // Home banner visible
"banner_click"          // Banner tapped

// STORE DETAIL EVENTS
"store_view"            // Store page opened
"menu_section_view"     // Menu category viewed
"menu_item_impression"  // Menu item visible
"menu_item_click"       // Menu item tapped
"menu_item_add_cart"    // Added to cart
"store_chat_start"      // Chat initiated

// CART EVENTS
"cart_view"             // Cart opened
"cart_item_add"         // Item added
"cart_item_remove"      // Item removed
"cart_item_quantity"    // Quantity changed
"cart_abandon"          // Left cart without checkout

// CHECKOUT EVENTS
"checkout_start"        // Payment screen opened
"payment_method_select" // Method chosen
"payment_attempt"       // Pay button clicked
"payment_success"       // Payment completed
"payment_failure"       // Payment failed

// ORDER EVENTS
"order_confirmed"       // Order placed
"order_status_view"     // Tracking viewed
"order_status_refresh"  // Manual refresh

// REVIEW EVENTS
"review_prompt_show"    // Review prompt displayed
"review_start"          // Review screen opened
"review_star_select"    // Star rating given
"review_tag_select"     // Tag selected
"review_text_enter"     // Text review started
"review_submit"         // Review submitted
"review_skip"           // Review skipped

// ENGAGEMENT EVENTS
"coupon_view"           // Coupon list viewed
"coupon_apply"          // Coupon applied
"coupon_fail"           // Invalid coupon
"points_view"           // Points viewed
"points_redeem"         // Points used
"reorder_click"         // Reorder tapped
"share_click"           // Share action
```

#### Category 2: Hyper-local Market & Logistics

```typescript
// LOCATION EVENTS
"location_permission"   // Location granted/denied
"location_update"       // User location changed
"address_add"           // New address added
"address_select"        // Address chosen

// DELIVERY EVENTS (Rider App - Future)
"delivery_assigned"     // Rider assigned
"delivery_accepted"     // Rider accepted
"delivery_pickup"       // Picked up from store
"delivery_enroute"      // On the way
"delivery_arrived"      // At destination
"delivery_completed"    // Handed to customer
"delivery_failed"       // Delivery failed

// ETA EVENTS
"eta_calculated"        // ETA shown to user
"eta_update"            // ETA changed
"eta_variance"          // Actual vs estimated
```

#### Category 3: Store & Rider Operations

```typescript
// STORE STATUS EVENTS
"store_open"            // Store went online
"store_close"           // Store went offline
"store_busy_toggle"     // Busy mode changed

// ORDER PROCESSING EVENTS
"order_received"        // Order arrived at store
"order_accepted"        // Store accepted
"order_rejected"        // Store rejected (with reason)
"order_prep_start"      // Cooking started
"order_ready"           // Ready for pickup
"order_handoff"         // Given to rider

// MENU EVENTS
"menu_item_update"      // Price/description changed
"menu_item_stock_out"   // Marked sold out
"menu_item_restock"     // Back in stock
"menu_category_update"  // Category changed

// RIDER PERFORMANCE (Future)
"rider_online"          // Rider went online
"rider_offline"         // Rider went offline
"rider_order_accept"    // Accepted delivery
"rider_order_decline"   // Declined delivery
"rider_order_cancel"    // Cancelled mid-delivery
```

#### Category 4: Payments, Finance & Risk

```typescript
// PAYMENT EVENTS
"payment_card_add"      // Card registered
"payment_card_remove"   // Card deleted
"payment_card_default"  // Default card changed
"payment_process"       // Payment initiated
"payment_complete"      // Payment successful
"payment_fail"          // Payment failed (with reason)
"payment_refund"        // Refund issued

// WALLET EVENTS (Store)
"wallet_balance_view"   // Balance checked
"withdrawal_request"    // Withdrawal initiated
"withdrawal_approve"    // Admin approved
"withdrawal_complete"   // Money transferred
"withdrawal_reject"     // Withdrawal denied

// RISK EVENTS
"fraud_flag"            // Suspicious activity
"dispute_open"          // Dispute filed
"dispute_resolve"       // Dispute closed
"account_suspend"       // Account suspended
"account_restore"       // Account restored
```

---

### 2.3 Database Schema

#### Core Tables

```sql
-- USERS
CREATE TABLE users (
  id UUID PRIMARY KEY,
  phone VARCHAR(20) UNIQUE,
  email VARCHAR(255),
  name VARCHAR(100),
  role ENUM('customer', 'owner', 'rider', 'admin'),
  created_at TIMESTAMP,
  last_active_at TIMESTAMP,
  -- Segmentation fields
  total_orders INT DEFAULT 0,
  total_spend DECIMAL(12,2) DEFAULT 0,
  avg_order_value DECIMAL(10,2),
  preferred_payment_method VARCHAR(50),
  primary_region VARCHAR(100),
  is_vip BOOLEAN DEFAULT FALSE
);

-- STORES
CREATE TABLE stores (
  id UUID PRIMARY KEY,
  owner_id UUID REFERENCES users(id),
  name VARCHAR(200),
  category VARCHAR(100),
  address TEXT,
  district VARCHAR(100),
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  rating DECIMAL(2,1),
  total_reviews INT DEFAULT 0,
  total_orders INT DEFAULT 0,
  avg_prep_time_mins INT,
  rejection_rate DECIMAL(4,2),
  created_at TIMESTAMP
);

-- MENU ITEMS
CREATE TABLE menu_items (
  id UUID PRIMARY KEY,
  store_id UUID REFERENCES stores(id),
  name VARCHAR(200),
  category VARCHAR(100),
  price DECIMAL(10,2),
  is_available BOOLEAN DEFAULT TRUE,
  total_orders INT DEFAULT 0,
  avg_rating DECIMAL(2,1),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- ORDERS
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  store_id UUID REFERENCES stores(id),
  rider_id UUID REFERENCES users(id),
  status ENUM('pending', 'accepted', 'preparing', 'ready', 'picked_up', 'delivering', 'delivered', 'cancelled'),
  subtotal DECIMAL(10,2),
  delivery_fee DECIMAL(10,2),
  discount DECIMAL(10,2),
  total DECIMAL(10,2),
  payment_method VARCHAR(50),
  payment_status ENUM('pending', 'paid', 'refunded', 'failed'),
  delivery_address TEXT,
  delivery_lat DECIMAL(10, 8),
  delivery_lng DECIMAL(11, 8),
  placed_at TIMESTAMP,
  accepted_at TIMESTAMP,
  ready_at TIMESTAMP,
  picked_up_at TIMESTAMP,
  delivered_at TIMESTAMP,
  estimated_delivery_time TIMESTAMP,
  actual_delivery_time TIMESTAMP,
  cancellation_reason VARCHAR(200),
  created_at TIMESTAMP
);

-- ORDER ITEMS
CREATE TABLE order_items (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  menu_item_id UUID REFERENCES menu_items(id),
  quantity INT,
  unit_price DECIMAL(10,2),
  options JSONB
);

-- REVIEWS
CREATE TABLE reviews (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  user_id UUID REFERENCES users(id),
  store_id UUID REFERENCES stores(id),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  tags TEXT[], -- Array of tag IDs
  text TEXT,
  created_at TIMESTAMP
);

-- SEARCH EVENTS (Analytics)
CREATE TABLE search_events (
  id UUID PRIMARY KEY,
  session_id UUID,
  user_id UUID,
  query VARCHAR(500),
  filters JSONB,
  result_count INT,
  clicked_store_id UUID,
  clicked_position INT,
  is_null_search BOOLEAN DEFAULT FALSE,
  district VARCHAR(100),
  created_at TIMESTAMP
);

-- PAYMENTS
CREATE TABLE payments (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  user_id UUID REFERENCES users(id),
  amount DECIMAL(10,2),
  method VARCHAR(50),
  status ENUM('pending', 'success', 'failed', 'refunded'),
  failure_reason VARCHAR(200),
  card_brand VARCHAR(50),
  card_last4 VARCHAR(4),
  transaction_id VARCHAR(100),
  created_at TIMESTAMP
);

-- STORE PAYOUTS
CREATE TABLE store_payouts (
  id UUID PRIMARY KEY,
  store_id UUID REFERENCES stores(id),
  amount DECIMAL(12,2),
  status ENUM('pending', 'approved', 'processing', 'completed', 'rejected'),
  bank_name VARCHAR(100),
  account_number VARCHAR(50),
  requested_at TIMESTAMP,
  approved_at TIMESTAMP,
  completed_at TIMESTAMP,
  admin_id UUID REFERENCES users(id)
);

-- DISPUTES
CREATE TABLE disputes (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  user_id UUID REFERENCES users(id),
  store_id UUID REFERENCES stores(id),
  type ENUM('missing_item', 'wrong_item', 'quality', 'late_delivery', 'never_delivered', 'other'),
  description TEXT,
  status ENUM('open', 'investigating', 'resolved_user_favor', 'resolved_store_favor', 'closed'),
  resolution TEXT,
  refund_amount DECIMAL(10,2),
  created_at TIMESTAMP,
  resolved_at TIMESTAMP,
  admin_id UUID REFERENCES users(id)
);

-- RAW EVENTS (Event Sourcing)
CREATE TABLE raw_events (
  id UUID PRIMARY KEY,
  event_name VARCHAR(100),
  event_category VARCHAR(50),
  session_id UUID,
  user_id UUID,
  properties JSONB,
  device_info JSONB,
  geo JSONB,
  created_at TIMESTAMP
);

-- Create indexes for common queries
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_store ON orders(store_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at);
CREATE INDEX idx_search_query ON search_events(query);
CREATE INDEX idx_search_district ON search_events(district);
CREATE INDEX idx_raw_events_name ON raw_events(event_name);
CREATE INDEX idx_raw_events_session ON raw_events(session_id);
```

---

### 2.4 Aggregation Tables for Analytics

```sql
-- DAILY STORE METRICS
CREATE TABLE daily_store_metrics (
  id UUID PRIMARY KEY,
  store_id UUID REFERENCES stores(id),
  date DATE,
  total_orders INT,
  total_revenue DECIMAL(12,2),
  avg_order_value DECIMAL(10,2),
  order_acceptance_rate DECIMAL(4,2),
  avg_prep_time_mins INT,
  total_reviews INT,
  avg_rating DECIMAL(2,1),
  unique_customers INT,
  returning_customers INT,
  peak_hour INT,
  UNIQUE(store_id, date)
);

-- HOURLY DEMAND BY DISTRICT
CREATE TABLE hourly_district_demand (
  id UUID PRIMARY KEY,
  district VARCHAR(100),
  date DATE,
  hour INT,
  order_count INT,
  search_count INT,
  avg_delivery_time_mins INT,
  active_stores INT,
  UNIQUE(district, date, hour)
);

-- SEARCH ANALYTICS
CREATE TABLE search_analytics (
  id UUID PRIMARY KEY,
  date DATE,
  query VARCHAR(500),
  search_count INT,
  click_count INT,
  order_count INT,
  null_search_rate DECIMAL(4,2),
  avg_result_position DECIMAL(4,2),
  UNIQUE(date, query)
);

-- USER SEGMENTS
CREATE TABLE user_segments (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  segment ENUM('new', 'casual', 'regular', 'power', 'churned'),
  recency_days INT,
  frequency_30d INT,
  monetary_30d DECIMAL(12,2),
  price_sensitivity ENUM('low', 'medium', 'high'),
  preferred_cuisine VARCHAR(100),
  preferred_time_of_day ENUM('morning', 'lunch', 'afternoon', 'dinner', 'late_night'),
  coupon_dependency DECIMAL(4,2),
  updated_at TIMESTAMP
);
```

---

## 🛠️ Part 3: Implementation Plan

### 3.1 Analytics Service Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     DELI-BERRY APP                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Customer    │  │ Store Owner │  │ Rider       │         │
│  │ App         │  │ App         │  │ App (TBD)   │         │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘         │
│         │                │                │                 │
│  ┌──────▼────────────────▼────────────────▼──────┐         │
│  │           Analytics Context                    │         │
│  │    - track(eventName, properties)              │         │
│  │    - identify(userId)                          │         │
│  │    - setUserProperties(props)                  │         │
│  └──────────────────────┬────────────────────────┘         │
└─────────────────────────┼───────────────────────────────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   Event Queue         │
              │   (localStorage)      │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   Batch API Sender    │
              │   POST /api/events    │
              └───────────┬───────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Event       │  │ Event       │  │ Aggregation │         │
│  │ Ingestion   │──│ Processing  │──│ Workers     │         │
│  │ API         │  │ Queue       │  │             │         │
│  └─────────────┘  └─────────────┘  └──────┬──────┘         │
│                                           │                 │
│  ┌────────────────────────────────────────▼──────┐         │
│  │              PostgreSQL / TimescaleDB          │         │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐   │         │
│  │   │raw_events│  │aggregates│  │segments  │   │         │
│  │   └──────────┘  └──────────┘  └──────────┘   │         │
│  └───────────────────────────────────────────────┘         │
│                          │                                  │
│  ┌───────────────────────▼───────────────────────┐         │
│  │           Super Admin Dashboard                │         │
│  │   - Real-time metrics                          │         │
│  │   - Search intelligence                        │         │
│  │   - Store performance                          │         │
│  │   - Financial reports                          │         │
│  │   - B2B data exports                           │         │
│  └────────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Files to Create

```
src/
├── lib/
│   └── analytics/
│       ├── index.ts              # Main analytics export
│       ├── analytics.ts          # Analytics class
│       ├── events.ts             # Event type definitions
│       ├── queue.ts              # Event queue manager
│       └── hooks.ts              # React hooks (useTrack, usePageView)
│
├── contexts/
│   └── AnalyticsContext.tsx      # Analytics provider
│
└── components/
    └── analytics/
        ├── TrackView.tsx         # Auto-track screen views
        ├── TrackClick.tsx        # Track button clicks
        └── TrackImpression.tsx   # Track element visibility
```

### 3.3 Screen Modifications Required

| Priority | Screen | Changes Needed |
|----------|--------|----------------|
| 🔴 HIGH | `SearchScreen` | Add search query tracking, null search detection |
| 🔴 HIGH | `CartScreen` | Add cart abandonment tracking |
| 🔴 HIGH | `PaymentScreen` | Add payment method tracking, failure logging |
| 🔴 HIGH | `NewOrderScreen` | Add order accept/reject with reasons |
| 🟡 MED | `RestaurantFeedScreen` | Add store impression tracking |
| 🟡 MED | `StoreDetailScreen` | Add menu item impressions |
| 🟡 MED | `WriteReviewScreen` | Already has tags - just need to persist |
| 🟡 MED | `OrderStatusScreen` | Add status check frequency |
| 🟢 LOW | `HomeScreen` | Add banner impressions |
| 🟢 LOW | `CouponsScreen` | Add coupon usage tracking |

---

## 📈 Part 4: Super Admin Dashboard Enhancements

### 4.1 Dashboard Widgets Needed

#### Consumer Demand Insights
```typescript
// API: GET /api/admin/analytics/consumer
{
  search_trends: {
    top_queries: Array<{ query: string, count: number, growth: number }>,
    null_searches: Array<{ query: string, count: number }>,
    trending_now: Array<{ query: string, velocity: number }>
  },
  conversion_funnel: {
    search_to_store: number,      // %
    store_to_cart: number,        // %
    cart_to_checkout: number,     // %
    checkout_to_order: number     // %
  },
  price_sensitivity: {
    coupon_only_users: number,    // %
    full_price_users: number,     // %
    avg_discount_used: number
  },
  user_segments: {
    new: number,
    casual: number,
    regular: number,
    power: number,
    churned: number
  }
}
```

#### Hyper-local Demand Map
```typescript
// API: GET /api/admin/analytics/geo
{
  demand_heatmap: Array<{
    district: string,
    lat: number,
    lng: number,
    order_count: number,
    avg_order_value: number,
    peak_hours: number[]
  }>,
  delivery_metrics: {
    avg_delivery_time: number,
    on_time_rate: number,
    problem_areas: Array<{ district: string, issue: string }>
  }
}
```

#### Store Performance
```typescript
// API: GET /api/admin/analytics/stores
{
  rankings: {
    by_revenue: Array<Store>,
    by_orders: Array<Store>,
    by_rating: Array<Store>,
    by_rejection_rate: Array<Store>
  },
  health_indicators: {
    avg_prep_time: number,
    stockout_rate: number,
    dispute_rate: number
  }
}
```

#### Financial Dashboard
```typescript
// API: GET /api/admin/analytics/finance
{
  platform_metrics: {
    gmv_today: number,
    gmv_mtd: number,
    platform_revenue: number,
    pending_payouts: number
  },
  payment_breakdown: {
    card: { count: number, volume: number },
    momo: { count: number, volume: number },
    zalo: { count: number, volume: number },
    cash: { count: number, volume: number }
  },
  risk_flags: Array<{
    type: string,
    entity_type: string,
    entity_id: string,
    severity: string,
    details: string
  }>
}
```

---

## ✅ Part 5: QA Verification Checklist

### Event Firing Verification

```markdown
## Customer App Events

### Authentication
- [ ] `session_start` fires on app open
- [ ] `login_attempt` fires with correct method
- [ ] `login_success` / `login_failure` fires appropriately
- [ ] User ID is set after login

### Search
- [ ] `search_query` fires with query text
- [ ] `search_null_result` fires when 0 results
- [ ] `search_result_click` fires with position

### Store Browsing
- [ ] `store_list_view` fires on feed load
- [ ] `store_card_impression` fires for visible cards
- [ ] `store_card_click` fires with store ID

### Cart & Checkout
- [ ] `cart_item_add` fires with item details
- [ ] `cart_abandon` fires after 5min inactivity
- [ ] `payment_method_select` fires with method
- [ ] `payment_success` / `payment_failure` fires

### Order Flow
- [ ] `order_confirmed` fires with order ID
- [ ] `order_status_view` fires on status check

### Review
- [ ] `review_star_select` fires with rating
- [ ] `review_tag_select` fires with tag IDs
- [ ] `review_submit` fires with all data

## Store Owner App Events

### Order Management
- [ ] `order_received` fires for new order
- [ ] `order_accepted` fires with timing
- [ ] `order_rejected` fires with reason

### Store Status
- [ ] `store_open` / `store_close` fires
- [ ] `menu_item_stock_out` fires

## Super Admin Dashboard

### Data Display
- [ ] Search trends show real data
- [ ] User segments are calculated
- [ ] Store rankings are accurate
- [ ] Financial data is real-time
```

---

## 📋 Summary: Priority Action Items

### Immediate (Week 1)
1. ✅ Create `AnalyticsContext` and tracking infrastructure
2. ✅ Implement core events: session, search, cart, payment
3. ✅ Add event persistence and batch upload

### Short-term (Week 2-3)
4. 🔲 Integrate tracking in all Customer screens
5. 🔲 Integrate tracking in all Store Owner screens
6. 🔲 Build real-time aggregation workers

### Medium-term (Week 4-6)
7. 🔲 Enhance Super Admin with real dashboards
8. 🔲 Build B2B data export APIs
9. 🔲 Create Rider App for delivery tracking

### Long-term (Month 2+)
10. 🔲 ML-based user segmentation
11. 🔲 Predictive demand modeling
12. 🔲 Dynamic pricing engine

---

*Document Version: 1.0*  
*Last Updated: November 30, 2025*  
*Author: Data Strategy Team*



