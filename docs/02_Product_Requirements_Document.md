# Get It Done — Product Requirements Document (PRD)
## A Consultant Booking & Payment Platform for Kenya

**Version:** 2.0 (Revised MVP)  
**Last Updated:** March 23, 2026  
**Product Owner:** Naijeria Toweett (Mama Tech Limited)  
**Status:** Ready for Development

---

## 1. Executive Summary

**Get It Done** solves a specific, quantified problem for Kenyan independent service professionals: scheduling chaos and payment friction.

**The Core Problem:**
- Rachel (career coach) loses 3-5 hours/week managing WhatsApp booking requests from clients
- James (branding consultant) spends 2-3 hours/week chasing clients for M-Pesa payments
- Neither has a professional, branded way to share their rate cards
- Both rely on manual tools (Google Forms, Sheets, WhatsApp) that don't scale

**The Solution:**
A single branded link that clients visit to:
1. See the consultant's services and pricing
2. Pick an available time slot
3. Pay via M-Pesa in-app
4. Receive automatic confirmation

**Market Fit:**
- Target: 50-200 independent consultants in Kenya (coaches, trainers, therapists, personal branding consultants)
- Market size: 216% growth in online freelancers in Kenya over 5 years
- M-Pesa penetration: 91% of Kenyans, 47.7M users
- No competing product serves this exact segment with M-Pesa + scheduling + rate cards

**Business Model:**
- Standard: KES 500/month (branded page + calendar + rate card)
- Premium: KES 800/month (+ in-app chat + advanced analytics)

**Key Differentiators:**
1. M-Pesa native (not an afterthought)
2. One link does everything (no app download, no WhatsApp back-and-forth)
3. Built for African freelancers (KES pricing, local payment, offline-friendly)
4. Beautiful, professional branding by default

---

## 2. Product Vision & Goals

### 18-Month Vision
"Get It Done is the operating system for the African independent consultant — where Rachel schedules her weeks without juggling clients, James gets paid instantly, and both can focus on giving great value."

### OKRs (Year 1)

| Objective | Key Result | Owner |
|-----------|-----------|-------|
| **Acquire first cohort** | 70 signed consultants by month 12 | Product |
| **Drive usage** | 80% of users have ≥1 booking/month by month 6 | Growth |
| **Monetize** | 40% of users convert to paid tiers | Sales |
| **Build reputation** | 4.5+ star rating on AppStore/PlayStore equivalents | Support |
| **Reduce support burden** | <5% of bookings need manual intervention | Product |

---

## 3. Target Users & Personas

### Primary Persona: Rachel (The Overwhelmed Coach)

| Attribute | Value |
|-----------|-------|
| **Age** | 45-55 |
| **Profession** | Career Coach / Personal Branding Consultant |
| **Location** | Nairobi, Coastal cities (Kilifi, Mombasa) |
| **Income** | KES 50K-150K/month |
| **Tech Comfort** | Medium (uses WhatsApp, Sheets, comfortable with apps) |
| **Pain Point** | Scheduling chaos, no work/life balance |
| **Goal** | Predictable schedule, time with family |
| **Current Tools** | Google Forms, WhatsApp, Cash transfers, Google Sheets |
| **Willingness to Pay** | KES 500/month if saves 10+ hours/month |

**Day in the Life:**
- 7:00 AM: Wakes up, checks WhatsApp for client requests (5+ messages)
- 8:30 AM: Tries to coordinate times in WhatsApp (30 min back-and-forth)
- 10:00 AM: First client meeting (scheduled yesterday via WhatsApp)
- 12:00 PM: Client payment via M-Pesa (has to request, wait, verify manually)
- 2:00 PM: Another client, different time than expected (someone double-booked)
- 4:00 PM: Realizes she didn't plan time for kids pickup
- 6:00 PM: Sends invoice to another client (manually typed in Sheets)

**With Get It Done:**
- 7:00 AM: Client booked automatically at 10:00 AM (via link)
- 9:00 AM: Client paid automatically (M-Pesa confirmation in app)
- 9:30 AM: Rachel has time for family, then goes to work
- 4:00 PM: Ready to pick up kids (no chaos)

---

### Secondary Persona: James (The Professional Consultant)

| Attribute | Value |
|-----------|-------|
| **Age** | 28-35 |
| **Profession** | Personal Branding / Marketing Consultant |
| **Location** | Nairobi CBD |
| **Income** | KES 100K-300K/month |
| **Tech Comfort** | High (understands SaaS, uses productivity tools) |
| **Pain Point** | Payment delays, lack of pricing transparency, no professionalism |
| **Goal** | Scaling business, hiring assistant, recurring revenue |
| **Current Tools** | LinkedIn, Gmail, Pesapal, WhatsApp |
| **Willingness to Pay** | KES 800/month for Premium (+ analytics, chat, API) |

**Day in the Life:**
- 9:00 AM: 3 inquiries via LinkedIn, different rates each asked
- 10:00 AM: Repeats rate explanation 3x (no consistency)
- 12:00 PM: Sends invoice, client hasn't paid yet (5 days pending)
- 3:00 PM: Has to call client to confirm payment
- 6:00 PM: Frustrated, thinks about hiring someone just for admin

**With Get It Done:**
- 9:00 AM: Shares Get It Done link (KES 5,000/session visible to all)
- 10:00 AM: Client books online, pays immediately
- 10:15 AM: James sees confirmed booking + payment in dashboard
- 12:00 PM: Can focus on actual consulting, not admin
- 6:00 PM: Realizes he can finally hire that assistant (he's making more predictable $)

---

## 4. Core Features (MVP Release)

### Feature 1: Consultant Profile
**User:** Consultant  
**Importance:** CRITICAL (foundation)

**Acceptance Criteria:**
- [ ] Consultant can sign up with email + password
- [ ] Consultant can edit profile: name, bio, profile photo, phone, location
- [ ] Profile is published on a public URL: `getitdone.co.ke/[consultant-slug]`
- [ ] Profile is beautiful, mobile-responsive
- [ ] Profile includes consultant's name, photo, services list, availability status
- [ ] Consultant can upload a profile photo (max 5MB)
- [ ] Profile has a "Book Now" CTA button

**UI/UX Notes:**
- Use Tailwind "card" pattern with rounded corners
- Photo should be in a circular frame
- Bio text should be 2-3 sentences, not a wall of text
- "Book Now" button should be prominent, hot pink (#E83856 or similar)

**Data Model:**
```
Consultants table:
- id (UUID)
- email (TEXT, unique)
- name (TEXT)
- bio (TEXT)
- profile_photo_url (TEXT)
- phone (TEXT, optional)
- location (TEXT, e.g., "Nairobi, Kenya")
- slug (TEXT, unique, auto-generated from name)
- created_at, updated_at
```

---

### Feature 2: Services & Rate Card
**User:** Consultant  
**Importance:** CRITICAL

**Acceptance Criteria:**
- [ ] Consultant can add multiple services
- [ ] Each service has: name, description, duration (30/60/90 min), price in KES
- [ ] Consultant can edit/delete services
- [ ] Rate card displays on public profile in a grid or list
- [ ] Each service shows: icon, name, duration, price (in KES)
- [ ] Prices are clearly visible (not hidden behind a click)
- [ ] Consultant can set one service as "featured" (appears first)

**UI/UX Notes:**
- Use Lucide icons to represent service types (e.g., Briefcase for consulting, Zap for quick calls)
- Price should be large, bold, in KES (no $)
- Show duration next to price (e.g., "1 hour")
- "Add Service" button always visible on consultant dashboard

**Data Model:**
```
Services table:
- id (UUID)
- consultant_id (UUID, FK → consultants)
- name (TEXT)
- description (TEXT)
- price_kes (DECIMAL)
- duration_minutes (INT)
- icon_type (TEXT, optional - for UI)
- is_featured (BOOLEAN)
- created_at, updated_at
```

---

### Feature 3: Availability & Calendar
**User:** Consultant  
**Importance:** CRITICAL

**Acceptance Criteria:**
- [ ] Consultant can set weekly availability (e.g., "Monday 9AM-5PM, Wednesday off")
- [ ] Availability UI shows days of week + time slots
- [ ] Consultant can set multiple time blocks per day (e.g., 9AM-12PM, 2PM-5PM)
- [ ] Consultant can mark specific dates as unavailable (e.g., holidays)
- [ ] Client can only book available slots
- [ ] Time slots are formatted in local time (East Africa Time, UTC+3)
- [ ] Availability updates are instant (no page reload needed)

**UI/UX Notes:**
- Use a grid layout: Mon-Sun across top, time slots vertically
- Toggle available/unavailable with simple checkboxes
- Show current time in consultant's timezone
- Show a live preview: "Your next available slot: Friday 2:00 PM"

**Data Model:**
```
Availability table:
- id (UUID)
- consultant_id (UUID, FK → consultants)
- day_of_week (INT, 0=Monday, 6=Sunday)
- start_time (TIME)
- end_time (TIME)
- created_at

UnavailableDates table:
- id (UUID)
- consultant_id (UUID, FK → consultants)
- date (DATE)
- reason (TEXT, optional)
- created_at
```

---

### Feature 4: Public Booking Page
**User:** Client  
**Importance:** CRITICAL

**Acceptance Criteria:**
- [ ] Public booking page is clean, mobile-first
- [ ] Shows consultant profile + services
- [ ] Client can select a service
- [ ] Date/time picker shows only available slots
- [ ] Calendar widget prevents selecting past dates or unavailable times
- [ ] Time picker defaults to consultant's timezone
- [ ] Client can enter: name, email, phone
- [ ] Client can add optional notes (e.g., "I'm interested in SEO strategy")
- [ ] "Review Booking" button shows summary
- [ ] No login required for clients (frictionless)

**UI/UX Notes:**
- Design a calendar that's thumb-friendly (40px min touch targets)
- Show a visual preview: "You're booking: [Service] on [Date] at [Time]"
- Price should be confirmed before payment
- Use a progress indicator: Step 1 (Service) → Step 2 (Date/Time) → Step 3 (Details) → Step 4 (Review)
- "Confirm & Pay" button in hot pink

**Data Model:**
```
Bookings table:
- id (UUID)
- consultant_id (UUID, FK)
- client_name (TEXT)
- client_email (TEXT)
- client_phone (TEXT)
- service_id (UUID, FK)
- booking_date (DATE)
- booking_time (TIME)
- notes (TEXT, optional)
- status (TEXT: 'pending', 'confirmed', 'cancelled')
- created_at
- Constraint: UNIQUE(consultant_id, booking_date, booking_time)
```

---

### Feature 5: Payment via Pesapal
**User:** Client → Payment Gateway → Consultant  
**Importance:** CRITICAL

**Acceptance Criteria:**
- [ ] Booking review page shows: Service name, date, time, price (KES)
- [ ] "Confirm & Pay" redirects to Pesapal hosted checkout
- [ ] Client enters M-Pesa phone number, completes transaction
- [ ] After payment, client redirected back to success page
- [ ] Consultant receives booking confirmation (payment verified)
- [ ] Consultant sees booking in their dashboard with "PAID" status
- [ ] Booking marked as "confirmed" only after payment verified

**Payment Flow (MVP):**
1. Client clicks "Confirm & Pay"
2. Server creates booking (status: 'pending_payment')
3. Server creates Pesapal payment link
4. Client redirected to Pesapal
5. Client pays via M-Pesa
6. Pesapal redirects client to success page
7. Pesapal sends webhook to server
8. Server verifies signature, updates booking status to 'confirmed'
9. Sends notifications

**Implementation Note:**
- MVP uses Pesapal hosted link (no custom M-Pesa integration)
- Pesapal handles KYC, security, transaction fees
- Cost: 2.5-3% per transaction

**Data Model:**
```
Payments table:
- id (UUID)
- booking_id (UUID, FK → bookings)
- amount_kes (DECIMAL)
- pesapal_order_id (TEXT, unique)
- status (TEXT: 'pending', 'completed', 'failed')
- created_at
- confirmed_at
- webhook_data (JSONB, Pesapal response)
```

---

### Feature 6: Notifications
**User:** Consultant + Client  
**Importance:** HIGH

**Acceptance Criteria (MVP v1):**
- [ ] Client receives email after booking: "Your booking confirmed: [Service] on [Date] at [Time]"
- [ ] Consultant receives email: "New booking from [Client]: [Service] at [Time] on [Date]"
- [ ] Both emails include booking reference number
- [ ] Emails are sent within 30 seconds of payment confirmation
- [ ] Email template is professional, branded

**Acceptance Criteria (MVP v1.1, Nice-to-Have):**
- [ ] Client receives WhatsApp reminder 24 hours before booking
- [ ] Client receives WhatsApp reminder 1 hour before booking
- [ ] Consultant receives WhatsApp notification when new booking arrives

**Channels:**
- Email: SendGrid (free tier: 100/day)
- WhatsApp: Twilio (optional, pay-per-SMS)
- In-app: Supabase Realtime (free)

**Templates:**
```
Email (Client):
Subject: Your [Service] with [Consultant] confirmed ✓
Dear [Client Name],
Your booking is confirmed!

Date: [Date in readable format]
Time: [Time] East Africa Time
Service: [Service Name]
Duration: [Duration]
Cost: KES [Amount]
Consultant: [Consultant Name]
Location: [If applicable, or "Online"]

Reference: #BOOKING-[ID]

See you soon!
— Get It Done

Email (Consultant):
Subject: New booking from [Client Name] — [Service] on [Date]
Hi [Consultant Name],
You have a new booking!

From: [Client Name] ([Email], [Phone])
Service: [Service Name]
Date: [Date]
Time: [Time]
Duration: [Duration]
Cost: KES [Amount] ✓ PAID

Reference: #BOOKING-[ID]
Message: [Client notes, if any]

Thank you!
— Get It Done
```

---

### Feature 7: Consultant Dashboard (Simple)
**User:** Consultant  
**Importance:** HIGH (MVP v1.1)

**Acceptance Criteria:**
- [ ] Private dashboard (requires login)
- [ ] Shows list of all bookings (upcoming first)
- [ ] Each booking shows: client name, service, date/time, status, amount
- [ ] Shows today's bookings in a highlighted section
- [ ] "View Details" link on each booking → shows client contact + notes
- [ ] Shows booking stats: "You have 3 bookings this week"
- [ ] Profile edit link (goes to profile page)
- [ ] Settings link (timezone, notification preferences)

**UI/UX Notes:**
- Keep dashboard simple for MVP (no complex analytics)
- Show status badges: "PENDING", "CONFIRMED", "COMPLETED"
- Use a simple table or card layout
- "New Booking" notification badge if unread bookings exist

---

## 5. Out of Scope (MVP)

These features are **NOT included in the first release** but are roadmap items:

- ❌ In-app client messaging (Feature comes in Premium tier, v1.1)
- ❌ Advanced analytics (monthly revenue, client retention, etc.)
- ❌ Integrations (Google Calendar, Outlook, Slack)
- ❌ Referral links / affiliate program
- ❌ Invoice generation (clients can screenshot booking)
- ❌ Group sessions / team consultants
- ❌ Recurring bookings
- ❌ Direct M-Pesa integration (Pesapal redirect is MVP)
- ❌ Mobile app (web works on all phones, MVP is web-only)

---

## 6. User Journeys

### Journey 1: Consultant Onboarding (Rachel)

```
1. Rachel visits getitdone.co.ke
   ↓
2. Clicks "Sign Up as Consultant"
   ↓
3. Enters email (rachel@example.com), password, name ("Rachel")
   ↓
4. Clicks "Create Account" → Email verification sent
   ↓
5. Rachel clicks link in email → Redirected to profile setup
   ↓
6. Fills in: Bio, photo, phone, location
   ↓
7. Clicks "Next: Add Services"
   ↓
8. Rachel adds:
   - Service 1: "Career Coaching Session" — 1 hour — KES 3,000
   - Service 2: "Personal Branding Audit" — 2 hours — KES 5,000
   ↓
9. Clicks "Next: Set Availability"
   ↓
10. Sets availability: Mon-Fri 9AM-5PM (lunch 12-1PM)
    Off on Saturdays/Sundays
   ↓
11. Clicks "Publish Profile"
    → Profile goes live at: getitdone.co.ke/rachel
   ↓
12. Rachel sees link, shares on WhatsApp: "Book me here: getitdone.co.ke/rachel"
   ↓
✓ DONE — Rachel's booking page is live
```

**Friction Points to Minimize:**
- Email verification (make it 1-click)
- Photo upload (offer fallback avatar)
- Availability setup (pre-fill standard hours)

---

### Journey 2: Client Booking & Payment (John)

```
1. John receives WhatsApp link: getitdone.co.ke/rachel
   ↓
2. Opens link → Sees Rachel's profile (name, photo, services, rates)
   ↓
3. Sees services:
   - "Career Coaching Session" — 1 hour — KES 3,000
   - "Personal Branding Audit" — 2 hours — KES 5,000
   ↓
4. Clicks "Book a Session"
   ↓
5. Selects "Career Coaching Session" → Price: KES 3,000 shows clearly
   ↓
6. Clicks "Next: Choose Date"
   ↓
7. Calendar shows:
   - Available times: Mon 2PM, 3PM, 4PM | Tue 10AM, 11AM, 2PM, 3PM, 4PM | Wed off | Thu... | Fri...
   - John clicks "Tuesday 2PM"
   ↓
8. Clicks "Next: Your Details"
   ↓
9. Fills in:
   - Name: "John Kimani"
   - Email: "john@example.com"
   - Phone: "+254712345678"
   - Notes (optional): "I want to discuss career change options"
   ↓
10. Clicks "Review Booking"
    → Summary shows:
      Service: Career Coaching Session
      Date: Tuesday, March 25, 2026
      Time: 2:00 PM
      Duration: 1 hour
      Price: KES 3,000
   ↓
11. Clicks "Confirm & Pay"
    → Redirected to Pesapal
   ↓
12. Pesapal page:
    - Amount: KES 3,000
    - John enters M-Pesa phone: +254712345678
    - Clicks "Pay with M-Pesa"
   ↓
13. M-Pesa prompt appears on John's phone → Enters M-Pesa PIN
   ↓
14. Payment confirmed → Redirected back to getitdone.co.ke/booking-success
   ↓
15. Success page shows:
    "✓ Your booking is confirmed!
    Date: Tuesday, March 25 at 2:00 PM
    Consultant: Rachel
    Reference: #BOOKING-ABC123
    An email has been sent to john@example.com"
   ↓
16. Email arrives: "Your booking with Rachel is confirmed"
    Rachel also receives: "New booking from John"
   ↓
✓ DONE — John has a confirmed, paid booking
```

**Critical UX Points:**
- Make price VERY clear before payment
- Show what client is paying for (service name, date, time)
- Provide easy-to-find booking reference
- Confirmation should feel celebratory ("✓ confirmed!", not boring)

---

## 7. Design System & Branding

### Color Palette
```
Primary (Hot Pink): #E83856
Secondary (Navy): #1E2761
Accent (Mint): #00D99F
Neutral (Charcoal): #36454F
Background (Off-White): #F5F5F5
Success (Green): #10B981
Error (Red): #EF4444
Warning (Yellow): #FBBF24
```

### Typography
- **Headers:** Trebuchet MS, 28-44px, bold
- **Body:** Calibri, 14-16px, regular
- **Buttons:** 16px, bold, rounded corners (8px)

### Components
- **Button (Primary):** Hot pink (#E83856), white text, hover: darker pink
- **Button (Secondary):** Navy (#1E2761), white text
- **Input Field:** Light gray border, 8px padding, rounded 4px
- **Card:** White background, light shadow, rounded corners (8px)
- **Status Badge:** "CONFIRMED" → green pill, "PENDING" → gray pill

### Logo
- Simple, bold wordmark: "Get It Done"
- Red gear icon (visual metaphor for "done")
- Should work at sizes: 16px (favicon), 48px (header), 200px (landing)

---

## 8. Success Metrics & KPIs

### North Star Metric
**Bookings per Consultant per Month**
- Target: 5-10 bookings/month/consultant (at scale)
- MVP target: 2+ bookings in first week of launch

### Key Metrics (Dashboard)

| Metric | Target (Month 3) | Target (Month 12) |
|--------|------------------|------------------|
| **Consultants Signed Up** | 10 | 70 |
| **% Active Consultants** | 70% | 50% |
| **Total Bookings** | 50 | 840 |
| **Conversion Rate (Free → Paid)** | 20% | 40% |
| **Avg Booking Value** | KES 3,500 | KES 4,000 |
| **Payment Success Rate** | 95% | 98% |
| **Email Open Rate** | 30% | 35% |
| **Customer Satisfaction** | 4.2/5 | 4.5/5 |

---

## 9. Acceptance Criteria Summary

### For MVP Release (Week 3)

**Feature Complete Checklist:**
- [x] Consultant sign-up & profile
- [x] Services management (add/edit/delete)
- [x] Availability calendar setup
- [x] Public booking page (no login needed)
- [x] Date/time picker (prevents conflicts)
- [x] Client details form
- [x] Pesapal payment integration
- [x] Booking confirmation email
- [x] Consultant dashboard (simple list view)
- [x] Responsive design (mobile-first)

**Quality Checklist:**
- [x] Load time < 2 seconds (Lighthouse score 90+)
- [x] Mobile responsive (works on 320px screens)
- [x] No critical security issues (OWASP top 10 reviewed)
- [x] 99.5% uptime SLA (monitored via Vercel)
- [x] All forms have validation + error messages
- [x] Accessibility: WCAG AA compliant (headings, contrast, alt text)
- [x] No console errors
- [x] Works offline (service worker caching)

**Testing:**
- [ ] Manual testing: Full user journey (sign-up → book → pay)
- [ ] Load testing: 10 concurrent users, no errors
- [ ] Payment testing: 5 test transactions via Pesapal sandbox
- [ ] Email testing: Verify templates render correctly
- [ ] Mobile testing: iPhone 12, Samsung Galaxy A10
- [ ] Accessibility testing: Screen reader (NVDA/JAWS), keyboard nav

---

## 10. Pricing Strategy

### Tier 1: Standard — KES 500/month

**Included:**
- Branded public profile (getitdone.co.ke/[name])
- Unlimited services (rate card)
- Availability calendar
- Booking management (up to 1,000 bookings/month)
- Email notifications
- Basic dashboard (list of bookings)

**Ideal For:** Rachel (coaches, trainers, starting consultants)

**Conversion Path:**
- 30-day free trial (no credit card required)
- After 7 days: gentle email → "You've had 2 bookings! Here's what's free..."
- After 30 days: "Your trial ends in 3 days" (soft upsell)

---

### Tier 2: Premium — KES 800/month (Future)

**Included (Standard +):**
- In-app client messaging (chat)
- Advanced analytics (monthly revenue, client retention, churn)
- Booking reminders (email + SMS/WhatsApp)
- Custom domain (e.g., rachel.co.ke instead of getitdone.co.ke/rachel)
- API access (for integrations)
- Priority email support

**Ideal For:** James (scaling consultants, agency focus)

**Launch:** After 500 Standard users (Q3 2026)

---

### Tier 3: Enterprise (Future)

**For:** Booking platforms, corporate teams

**Availability:** Q4 2026+ (custom pricing)

---

## 11. Communication Plan

### Stakeholder Updates
- **Weekly:** Product team (Slack #get-it-done)
- **Bi-weekly:** Founders (email + 30-min sync)
- **Monthly:** Advisory board (meeting + slide deck)

### Launch Communication
- **Week 1:** Soft launch to 20 beta users (friends + advisors)
- **Week 2:** Case study: "Rachel got 5 bookings in week 1"
- **Week 3:** Public launch (Twitter, LinkedIn, WhatsApp groups, Facebook)

---

## 12. Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Pesapal payment fails | Consultant loses booking | Retry logic + manual override (support tickets) |
| High churn (consultants leave) | Revenue decline | Weekly outreach, ask for feedback, iterate |
| Booking conflicts (double-booking) | Consultant frustration | Database constraint prevents overbooking |
| Email deliverability | Clients don't get confirmation | Use SendGrid (high reputation), monitor bounce rate |
| Security breach | Customer data leaks | RLS policies, HTTPS, secure webhooks, regular audits |
| Scaling issues (1000+ users) | Downtime | Monitor database connections, upgrade Supabase if needed |

---

## 13. Appendix: Glossary

| Term | Definition |
|------|-----------|
| **Consultant** | Independent professional (coach, trainer, consultant) who sells their time |
| **Client** | Person who books and pays for a consultant's time |
| **Booking** | A confirmed appointment between a consultant and a client |
| **Service** | A specific offering (e.g., "1-hour coaching session") with a fixed price |
| **Rate Card** | Public list of services and prices |
| **Availability** | Times when a consultant is willing to take bookings |
| **Pesapal** | M-Pesa payment gateway; handles transactions, KYC |
| **KES** | Kenyan Shilling (currency) |
| **M-Pesa** | Mobile money service from Safaricom (91% of Kenyans use it) |
| **RLS** | Row-Level Security (database-level access control) |

---

**Document version:** 2.0  
**Last reviewed:** March 23, 2026  
**Next review:** After first 20 consultant sign-ups
