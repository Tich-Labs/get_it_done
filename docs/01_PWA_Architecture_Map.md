# Get It Done — PWA Architecture Map
## Vercel-Based Zero-Cost MVP Stack

**Date:** March 2026 | **Status:** MVP Ready | **Target Launch:** 2-3 weeks

---

## 1. Executive Overview

Get It Done is a **Progressive Web App (PWA)** built on a modern, cost-effective architecture designed specifically for Kenyan independent service professionals (coaches, consultants, trainers, therapists). The stack prioritizes:

- **Zero-to-minimal hosting costs** (free tier services until revenue)
- **M-Pesa-first payments** (Kenyan market native)
- **Instant global deployment** (Vercel CDN)
- **Scalable-from-day-one** database (Supabase PostgreSQL)
- **Mobile-first UX** (target: feature phones via mobile web)

---

## 2. System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER (Browser/Mobile)                    │
│  React 18 + Tailwind CSS | Progressive Web App | Offline Support       │
│                     [Responsive | Fast | Accessible]                    │
└──────────────────────┬──────────────────────────────────────────────────┘
                       │ HTTPS | REST API + Real-time (WebSockets)
┌──────────────────────▼──────────────────────────────────────────────────┐
│                  EDGE LAYER (Vercel Global CDN)                         │
│           Static Assets | Serverless Functions | Rate Limiting          │
│    [Deploy ↔ Vercel Edge Functions ↔ API Routes ↔ ISR]               │
└──────────────────────┬──────────────────────────────────────────────────┘
                       │ HTTPS | Authenticated Requests
┌──────────────────────▼──────────────────────────────────────────────────┐
│               APPLICATION LAYER (Vercel Serverless)                     │
│  Node.js Lambdas | Session Auth (Supabase) | Business Logic            │
│  ├─ API Routes: `/api/auth/*`, `/api/profiles/*`, `/api/bookings/*`   │
│  ├─ M-Pesa Webhooks: `/api/webhooks/pesapal`                           │
│  ├─ Email/SMS: `/api/notifications/*` (SendGrid + Twilio)              │
│  └─ Integrations: `/api/integrations/*` (WhatsApp, Calendar)           │
└──────────────────────┬──────────────────────────────────────────────────┘
                       │ PostgreSQL Wire Protocol (SSL)
┌──────────────────────▼──────────────────────────────────────────────────┐
│              DATABASE LAYER (Supabase / PostgreSQL)                     │
│  ├─ Auth (Supabase Auth): JWT-based user sessions                      │
│  ├─ Realtime (WebSocket): Booking updates, notifications               │
│  ├─ Storage: User profiles, rate cards, booking history                │
│  └─ Functions: PL/pgSQL triggers, RLS policies                         │
└──────────────────────────────────────────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    [Pesapal]   [Twilio SMS]    [SendGrid]
   M-Pesa SDK    WhatsApp API    Email Notifications
```

---

## 3. Technology Stack Breakdown

### Frontend Layer
| Component | Technology | Why | Cost |
|-----------|-----------|-----|------|
| **Framework** | React 18 | Ecosystem, performance, component model | Free |
| **Styling** | Tailwind CSS | Utility-first, rapid iteration, mobile-first | Free |
| **State** | React Context + Hooks | Simple for MVP scope, no Redux overhead | Free |
| **Forms** | React Hook Form | Lightweight, validation, M-Pesa form handling | Free |
| **Real-time** | Supabase Realtime (WebSocket) | Live booking updates, consultant notifications | Free tier (1M messages/month) |
| **Offline** | Service Worker (Workbox) | Works without internet, queue bookings locally | Free |
| **Icons** | Lucide React | Beautiful, minimal, consistent | Free |
| **Date/Time** | Day.js | Lightweight date library, timezone handling | Free |

### Edge/Deployment Layer
| Component | Technology | Why | Cost |
|-----------|-----------|-----|------|
| **Host** | Vercel | Native Next.js support, instant deploy, zero config | Free tier (100GB bandwidth/month) |
| **CDN** | Vercel Edge Network | Auto-cached static assets, fast response times | Included in free tier |
| **Functions** | Vercel Serverless | Handle API routes, webhooks, business logic | Free (100GB compute hours/month) |
| **Domain** | .co.ke from Safaricom/ZARA | Local domain, ~KES 1,000/year | ~KES 1,000/year |
| **SSL/TLS** | Let's Encrypt (auto) | HTTPS everywhere, security | Free (via Vercel) |

### Backend Layer
| Component | Technology | Why | Cost |
|-----------|-----------|-----|------|
| **API Framework** | Next.js API Routes | Built-in with Vercel, no separate server | Free |
| **Auth** | Supabase Auth | Pre-built JWT, email verification, OAuth ready | Free (up to 50,000 users) |
| **Session** | JWT (stored in secure HttpOnly cookie) | Stateless, scalable, secure | Free |
| **Environment Config** | Vercel Env Secrets | Store API keys, DB credentials securely | Free |

### Database Layer
| Component | Technology | Why | Cost |
|-----------|-----------|-----|------|
| **Database** | Supabase (PostgreSQL 14) | ACID compliance, complex queries, real-time | Free tier (500MB storage, 2 concurrent connections) |
| **Authentication** | Supabase Auth | User sign-up, email verification, password reset | Free |
| **Real-time** | Supabase Realtime | WebSocket subscriptions for live booking updates | Free (1M messages/month) |
| **Storage** | Supabase Storage | Profile photos, consultant branding (5GB free) | Free tier |
| **Edge Functions** | PostgreSQL Functions | Validation, audit logs, payment confirmation logic | Free |

### Payment Integration
| Component | Technology | Why | Cost |
|-----------|-----------|-----|------|
| **Payment Gateway** | Pesapal | M-Pesa native, handles KYC, transaction fees only | ~2.5-3% per transaction |
| **Webhook Handler** | Vercel Function | Receives payment confirmation from Pesapal | Free |
| **Payment Link** | Pesapal Hosted Link | No custom M-Pesa integration needed for MVP | Free to use |

### Notifications
| Component | Technology | Why | Cost |
|-----------|-----------|-----|------|
| **Email** | SendGrid | Reliable, free tier (100 emails/day) | Free tier (100/day), then $19/month |
| **SMS/WhatsApp** | Twilio | WhatsApp API for confirmations, reminder messages | $0.0075/SMS (pay-as-you-go) |
| **In-App** | Supabase Realtime | Real-time notifications via WebSocket | Free |

---

## 4. MVP Scope (2-Week Timeline)

### Week 1: Core Consultant Page
**Goal:** Build the public-facing consultant profile. Can be deployed and shared immediately.

**Files to Create:**
```
src/
├── pages/
│   ├── [consultant].tsx          # Dynamic public profile route
│   ├── api/auth/register.ts       # Consultant sign-up
│   ├── api/profiles/[id].ts       # Get consultant profile (public)
│   └── api/profiles/update.ts     # Update consultant profile (private)
├── components/
│   ├── ConsultantProfile.tsx      # Display profile, rate card
│   ├── ServiceList.tsx            # Display services with prices
│   └── BookButton.tsx             # "Book Now" CTA
├── lib/
│   ├── supabase.ts                # Supabase client + helpers
│   ├── auth.ts                    # JWT token management
│   └── types.ts                   # TypeScript interfaces
└── styles/
    └── globals.css                # Tailwind + custom theme
```

**Database Schema (Week 1):**
```sql
CREATE TABLE consultants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  bio TEXT,
  profile_photo_url TEXT,
  location TEXT,
  phone TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID REFERENCES consultants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price_kes DECIMAL(10,2),
  duration_minutes INT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID REFERENCES consultants(id) ON DELETE CASCADE,
  day_of_week INT (0-6, Monday=0),
  start_time TIME,
  end_time TIME,
  created_at TIMESTAMP DEFAULT now()
);
```

**Features:**
- [ ] Consultant sign-up (email + password via Supabase Auth)
- [ ] Profile edit page (name, bio, photo, location)
- [ ] Add/edit services with pricing in KES
- [ ] Set availability calendar (days/times available)
- [ ] Public profile page (`getitdone.co.ke/rachel` shows Rachel's profile)
- [ ] Beautiful rate card display
- [ ] Responsive design (mobile-first)

**Deployment:** Push to GitHub → Vercel auto-deploys

---

### Week 2: Booking + Payment
**Goal:** Complete the core loop: book → pay → confirmation.

**Files to Create:**
```
src/
├── pages/
│   ├── [consultant]/book.tsx      # Booking flow
│   ├── api/bookings/create.ts     # Create booking record
│   ├── api/bookings/confirm.ts    # Webhook from Pesapal
│   └── booking-success.tsx        # Confirmation page
├── components/
│   ├── BookingFlow.tsx            # Date/time picker + review
│   ├── DatePicker.tsx             # Calendar widget
│   ├── PaymentSummary.tsx         # Show price, items
│   └── SuccessConfirmation.tsx    # Order confirmed
└── lib/
    ├── pesapal.ts                 # Pesapal API client
    └── notifications.ts           # SendGrid + Twilio calls
```

**Database Schema Addition (Week 2):**
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID REFERENCES consultants(id),
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  service_id UUID REFERENCES services(id),
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  payment_status TEXT ('pending', 'confirmed', 'failed'),
  pesapal_reference TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(consultant_id, booking_date, booking_time)
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  amount_kes DECIMAL(10,2),
  pesapal_order_id TEXT UNIQUE,
  status TEXT ('pending', 'completed', 'failed'),
  created_at TIMESTAMP DEFAULT now(),
  confirmed_at TIMESTAMP
);
```

**Features:**
- [ ] Date picker (show only available times)
- [ ] Booking summary (service, time, price)
- [ ] Client details form (name, email, phone)
- [ ] Pesapal payment redirect (hosted link, MVP approach)
- [ ] Webhook receiver for payment confirmation
- [ ] Email confirmation to consultant + client
- [ ] WhatsApp reminder (optional, MVP v1.1)
- [ ] Booking confirmation page
- [ ] Consultant dashboard (see bookings) — simple list view

---

## 5. API Specification (Simplified)

### Authentication
```
POST /api/auth/register
{
  "email": "rachel@example.com",
  "password": "****",
  "name": "Rachel"
}
→ { "session_token": "...", "user_id": "..." }

POST /api/auth/login
{
  "email": "rachel@example.com",
  "password": "****"
}
→ { "session_token": "...", "user_id": "..." }
```

### Profiles
```
GET /api/profiles/[id]
→ { "id": "...", "name": "Rachel", "bio": "...", "services": [...], "availability": [...] }

PUT /api/profiles/update
Header: Authorization: Bearer [token]
{
  "name": "Rachel",
  "bio": "Career Coach",
  "phone": "+254..."
}
→ { "success": true }
```

### Bookings
```
GET /api/bookings/available?consultant_id=[id]&date=[YYYY-MM-DD]
→ { "available_times": ["09:00", "10:00", "14:00"] }

POST /api/bookings/create
{
  "consultant_id": "...",
  "service_id": "...",
  "booking_date": "2026-04-15",
  "booking_time": "10:00",
  "client_name": "John",
  "client_email": "john@example.com",
  "client_phone": "+254712345678"
}
→ { "booking_id": "...", "pesapal_link": "https://..." }

POST /api/webhooks/pesapal
Body: Pesapal webhook payload
→ { "success": true } (private endpoint, only Pesapal IP allowed)
```

---

## 6. Data Flow Diagrams

### Flow 1: Consultant Signs Up
```
Consultant visits getitdone.co.ke
        ↓
Sign-up form (email, password, name)
        ↓
POST /api/auth/register
        ↓
Supabase creates user + consultant record
        ↓
Sends verification email
        ↓
Redirects to profile setup page
        ↓
Consultant adds services + availability
        ↓
Profile published! URL: getitdone.co.ke/rachel
```

### Flow 2: Client Books & Pays
```
Client clicks getitdone.co.ke/rachel (public link)
        ↓
Loads consultant profile + rate card
        ↓
Clicks "Book Session" → /rachel/book
        ↓
Date/time picker (calls GET /api/bookings/available)
        ↓
Selects time slot + enters details
        ↓
Review page shows: Service | Time | Price (KES)
        ↓
Clicks "Pay Now" → POST /api/bookings/create
        ↓
Receives Pesapal payment link
        ↓
Redirects to Pesapal (in-app or browser)
        ↓
Client enters M-Pesa details
        ↓
Pesapal sends webhook to /api/webhooks/pesapal
        ↓
Booking marked as "confirmed"
        ↓
Email sent to consultant: "New booking!"
        ↓
Email sent to client: "Booking confirmed, details: ..."
        ↓
Redirects to success page
```

### Flow 3: Notifications
```
Payment confirmed webhook arrives
        ↓
Verifies Pesapal signature
        ↓
Updates booking status to "confirmed"
        ↓
Calls SendGrid API: Send consultant email
        ↓
Calls SendGrid API: Send client confirmation
        ↓
(Optional) Calls Twilio: Send WhatsApp reminder
        ↓
Logs transaction in payments table
```

---

## 7. Database Schema (Complete)

See [schema.sql](/db/schema.sql) in repository. Key tables:

- **consultants** — Consultant profiles, contact info
- **services** — Services offered with pricing
- **availability** — Weekly availability slots
- **bookings** — Booking records with payment status
- **payments** — Payment transaction log
- **users** — Supabase Auth users (auto-managed)

Row-Level Security (RLS) policies:
- Consultants can only edit their own profile
- Clients can view any public profile
- Payments visible only to consultant who owns the booking

---

## 8. Security Considerations

### Authentication
- JWT tokens issued by Supabase Auth
- Stored in HttpOnly, Secure cookies (not localStorage)
- Auto-refresh 1 hour before expiry
- Logout clears cookie + invalidates token

### Authorization
- Supabase RLS policies enforce database-level security
- Consultant can only modify their own data
- Consultant dashboard shows only their bookings

### Payment Security
- Pesapal handles M-Pesa KYC + PCI compliance
- Server verifies webhook signature before processing
- Payment reference stored (idempotency check)
- No sensitive payment data stored locally

### Data Privacy
- Phone numbers hashed if stored for analytics
- GDPR-compliant data retention (delete bookings after 2 years)
- Consultant can delete their account (cascade delete)

---

## 9. Performance & Scalability

### Frontend Optimization
- Static generation for public profiles (ISR: 60s revalidation)
- Image optimization (Next.js `Image` component)
- CSS purging (Tailwind production build)
- Service Worker caching (offline-first for bookings)

### Backend Optimization
- Database indexes on: consultant_id, booking_date, email
- Connection pooling (Supabase free tier supports 2 concurrent)
- API response caching (60s for availability queries)
- Pesapal webhook retry logic (exponential backoff)

### Scalability
- Vercel auto-scales serverless functions
- Supabase can upgrade to Pro tier (unlimited connections, 8GB storage) at $25/month
- No code changes needed when scaling — just change environment vars

---

## 10. Cost Breakdown (Year 1)

| Service | Free Tier Limits | MVP Usage | Cost |
|---------|------------------|-----------|------|
| **Vercel** | 100GB bandwidth, 100GB compute | ~10GB bandwidth, ~20GB compute | **$0** |
| **Supabase** | 500MB storage, 2 connections, 1M realtime messages | ~100MB, 5 concurrent, 500K messages | **$0** |
| **Pesapal** | N/A (only transaction % fee) | 70 bookings/month = 840/year | ~**KES 3,000** (2.5% avg) |
| **SendGrid** | 100 emails/day (3,000/month) | ~200 emails/month | **$0** |
| **Twilio SMS** | N/A (pay-as-you-go) | Optional WhatsApp: ~20/month | ~**KES 150** |
| **.co.ke Domain** | N/A | 1 domain | **KES 1,000** |
| **Total Year 1** | | 840 bookings × KES 500 avg = KES 420K revenue | **~KES 4,150** (1% of revenue) |

**Year 2+ (If scaled to 500 users):**
- Supabase Pro: $25/month = **$300/year**
- Everything else stays same
- Total: ~**$350/year** at $50K+ annual revenue

---

## 11. Deployment Checklist

### Pre-Launch (Week 3)
- [ ] Configure Pesapal API keys in Vercel secrets
- [ ] Set up SendGrid API key + verified sender email
- [ ] Buy .co.ke domain, point DNS to Vercel
- [ ] Enable HTTPS (auto via Vercel)
- [ ] Configure Supabase backups
- [ ] Set up error logging (Sentry free tier)
- [ ] Load test with 10 concurrent users
- [ ] Manual smoke test: sign up → create service → book → pay

### Production Readiness
- [ ] Incident response runbook
- [ ] Uptime monitoring (Vercel status page)
- [ ] Database backup schedule (daily via Supabase)
- [ ] Customer support email (support@getitdone.co.ke)

---

## 12. Monitoring & Analytics

### Key Metrics
- **Consultants signed up** (daily)
- **Bookings created** (daily)
- **Payment success rate** (%)
- **Page load time** (should be <2s)
- **API error rate** (should be <0.1%)
- **Uptime** (target: 99.5%)

### Tools (Free Tier)
- **Vercel Analytics** — Page views, performance
- **Supabase Studio** — Database stats, connection count
- **Sentry** — Error tracking (free tier: 5K errors/month)
- **Google Analytics** — User behavior (optional)

---

## 13. Migration Plan (From MVP to Scale)

If you reach 1,000+ consultants:

1. **Database:** Migrate Supabase to managed PostgreSQL (RDS/GCP)
2. **Backend:** Migrate from Vercel Serverless to dedicated Node.js server (costs $100-200/month)
3. **Payment:** Set up direct M-Pesa Daraja API integration (removes Pesapal dependency)
4. **Analytics:** Add Mixpanel or Amplitude ($25-100/month)
5. **Support:** Hire customer success team

**No frontend changes needed** — API stays same, just different backend.

---

## 14. Appendix: Quick Start

### Install Dependencies
```bash
npm install react next@latest tailwind react-hook-form
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install day.js lucide-react
```

### Environment Variables (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
PESAPAL_API_KEY=...
PESAPAL_SECRET_KEY=...
SENDGRID_API_KEY=...
```

### Deploy to Vercel
```bash
git push origin main
# Vercel auto-deploys from GitHub
# Check: https://vercel.com/[username]/[project]
```

---

**Architecture reviewed:** March 23, 2026
**Next review:** After first 100 bookings
