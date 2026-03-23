# Get It Done — Technical & Engineering Guide
## Implementation Walkthrough for MVP (React + Next.js + Vercel + Supabase)

**Audience:** Full-stack developers, engineering leads  
**Scope:** Week 1 & 2 features (MVP core)  
**Duration:** 2 weeks (80 hours total)

---

## 1. Development Environment Setup

### Prerequisites
- Node.js 18+ (use `nvm` to manage versions)
- Git + GitHub account
- Vercel account (free tier)
- Supabase account (free tier)
- Pesapal sandbox account (for payment testing)

### Installation

```bash
# 1. Create Next.js project
npx create-next-app@latest get-it-done \
  --typescript \
  --tailwind \
  --eslint \
  --src-dir \
  --app-dir \
  --no-git

cd get-it-done

# 2. Install dependencies
npm install \
  @supabase/supabase-js \
  @supabase/auth-helpers-nextjs \
  react-hook-form \
  zod \
  @hookform/resolvers \
  day.js \
  lucide-react \
  axios

# 3. Install dev dependencies
npm install -D \
  @types/react \
  @types/node \
  typescript \
  tailwindcss \
  postcss \
  autoprefixer

# 4. Initialize Git
git init
git add .
git commit -m "Initial commit: Create Next.js + Tailwind setup"

# 5. Push to GitHub
git remote add origin https://github.com/[username]/get-it-done.git
git branch -M main
git push -u origin main
```

### Project Structure

```
get-it-done/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home / landing
│   │   ├── globals.css           # Global styles
│   │   ├── (auth)/               # Auth routes (group)
│   │   │   ├── layout.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── login/page.tsx
│   │   ├── (app)/                # Protected routes
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── profile/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── [consultant]/         # Dynamic public profile
│   │   │   └── page.tsx
│   │   ├── [consultant]/
│   │   │   └── book/page.tsx     # Booking flow
│   │   ├── api/                  # API routes
│   │   │   ├── auth/
│   │   │   │   ├── register.ts
│   │   │   │   ├── login.ts
│   │   │   │   └── logout.ts
│   │   │   ├── profiles/
│   │   │   │   ├── [id].ts       # GET profile
│   │   │   │   └── update.ts     # PUT profile
│   │   │   ├── bookings/
│   │   │   │   ├── create.ts
│   │   │   │   ├── available.ts
│   │   │   │   └── [id].ts
│   │   │   └── webhooks/
│   │   │       └── pesapal.ts    # Payment webhook
│   │   ├── booking-success/page.tsx
│   │   └── error.tsx             # Error boundary
│   ├── components/               # Reusable React components
│   │   ├── ConsultantProfile.tsx
│   │   ├── ServiceList.tsx
│   │   ├── DatePicker.tsx
│   │   ├── BookingFlow.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Loading.tsx
│   │   └── Navbar.tsx
│   ├── lib/                      # Utilities & helpers
│   │   ├── supabase.ts           # Supabase client
│   │   ├── auth.ts               # Auth helpers
│   │   ├── api.ts                # API client
│   │   ├── pesapal.ts            # Pesapal integration
│   │   ├── notifications.ts      # SendGrid + Twilio
│   │   ├── types.ts              # TypeScript types
│   │   ├── validation.ts         # Form validation (Zod schemas)
│   │   └── db-queries.ts         # Direct DB queries
│   ├── middleware.ts             # Next.js middleware
│   └── env.example               # Example env variables
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
├── .env.local.example            # Example env file
├── .gitignore
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 2. Database Setup (Supabase)

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) → Sign up (free tier)
2. Create new project: "get-it-done-dev"
3. Region: Singapore (or closest to Kenya)
4. Copy credentials:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Step 2: Create Database Schema

Run this SQL in Supabase Studio → SQL Editor:

```sql
-- Create consultants table
CREATE TABLE consultants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  bio TEXT,
  profile_photo_url TEXT,
  phone TEXT,
  location TEXT,
  timezone TEXT DEFAULT 'Africa/Nairobi',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create services table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID NOT NULL REFERENCES consultants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price_kes DECIMAL(10, 2) NOT NULL,
  duration_minutes INT NOT NULL DEFAULT 60,
  icon_type TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create availability table
CREATE TABLE availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID NOT NULL REFERENCES consultants(id) ON DELETE CASCADE,
  day_of_week INT NOT NULL, -- 0=Monday, 6=Sunday
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(consultant_id, day_of_week)
);

-- Create unavailable_dates table
CREATE TABLE unavailable_dates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID NOT NULL REFERENCES consultants(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  reason TEXT,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(consultant_id, date)
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultant_id UUID NOT NULL REFERENCES consultants(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled'
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(consultant_id, booking_date, booking_time)
);

-- Create payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  amount_kes DECIMAL(10, 2) NOT NULL,
  pesapal_order_id TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  webhook_data JSONB,
  created_at TIMESTAMP DEFAULT now(),
  confirmed_at TIMESTAMP,
  UNIQUE(booking_id)
);

-- Create indexes
CREATE INDEX idx_consultants_slug ON consultants(slug);
CREATE INDEX idx_services_consultant_id ON services(consultant_id);
CREATE INDEX idx_bookings_consultant_id ON bookings(consultant_id);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_payments_pesapal_order_id ON payments(pesapal_order_id);

-- Enable RLS
ALTER TABLE consultants ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Consultants: read public profiles, write own profile
CREATE POLICY "Public profiles are readable"
  ON consultants FOR SELECT
  USING (true);

CREATE POLICY "Consultants can update own profile"
  ON consultants FOR UPDATE
  USING (auth.uid() = auth_user_id);

-- Services: public read
CREATE POLICY "Services are public"
  ON services FOR SELECT
  USING (true);

-- Bookings: consultants see own, anyone can insert (client bookings)
CREATE POLICY "Consultants can see own bookings"
  ON bookings FOR SELECT
  USING (consultant_id = (SELECT id FROM consultants WHERE auth_user_id = auth.uid()));

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

-- Payments: consultants see own
CREATE POLICY "Consultants can see own payments"
  ON payments FOR SELECT
  USING (
    booking_id IN (
      SELECT id FROM bookings WHERE consultant_id = (
        SELECT id FROM consultants WHERE auth_user_id = auth.uid()
      )
    )
  );
```

### Step 3: Set Up Supabase Auth

In Supabase Studio:
1. Go to Authentication → Settings
2. Site URL: `http://localhost:3000` (dev), `https://getitdone.co.ke` (prod)
3. Redirect URLs: Add `/auth/callback`
4. Enable Email provider (default)

---

## 3. Environment Variables

Create `.env.local` in project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Pesapal (get from dashboard.pesapal.com)
NEXT_PUBLIC_PESAPAL_CLIENT_ID=your_client_id
PESAPAL_API_KEY=your_api_key
PESAPAL_SECRET_KEY=your_secret_key
PESAPAL_CALLBACK_URL=http://localhost:3000/api/webhooks/pesapal (dev)

# SendGrid (for email)
SENDGRID_API_KEY=SG.your_key_here

# Twilio (for SMS, optional MVP v1.1)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+254... (your Twilio number)

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000 (dev)
NODE_ENV=development
```

---

## 4. Key Implementation Files

### 4.1: Supabase Client (`src/lib/supabase.ts`)

```typescript
import { createBrowserClient } from '@supabase/ssr'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Handle error
          }
        },
      },
    }
  )
}

// Browser client (use in components)
export function createBrowserSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

### 4.2: TypeScript Types (`src/lib/types.ts`)

```typescript
export interface Consultant {
  id: string
  auth_user_id: string
  email: string
  name: string
  slug: string
  bio?: string
  profile_photo_url?: string
  phone?: string
  location?: string
  timezone: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  consultant_id: string
  name: string
  description?: string
  price_kes: number
  duration_minutes: number
  icon_type?: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface Availability {
  id: string
  consultant_id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_active: boolean
  created_at: string
}

export interface Booking {
  id: string
  consultant_id: string
  service_id: string
  client_name: string
  client_email: string
  client_phone: string
  booking_date: string
  booking_time: string
  notes?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
  updated_at: string
  service?: Service
}

export interface Payment {
  id: string
  booking_id: string
  amount_kes: number
  pesapal_order_id: string
  status: 'pending' | 'completed' | 'failed'
  webhook_data?: any
  created_at: string
  confirmed_at?: string
}
```

### 4.3: Auth Helpers (`src/lib/auth.ts`)

```typescript
import { createClient } from './supabase'

export async function signUp(email: string, password: string, name: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  })

  if (error) throw error

  // Create consultant record
  if (data.user) {
    const { error: consultantError } = await supabase
      .from('consultants')
      .insert([
        {
          auth_user_id: data.user.id,
          email,
          name,
          slug: name.toLowerCase().replace(/\s+/g, '-'),
        },
      ])

    if (consultantError) throw consultantError
  }

  return data
}

export async function signIn(email: string, password: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  return data
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser() {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()
  return data.user
}

export async function getConsultantBySlug(slug: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('consultants')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}
```

### 4.4: Pesapal Integration (`src/lib/pesapal.ts`)

```typescript
import axios from 'axios'

const PESAPAL_BASE_URL = 'https://api.pesapal.com/api/v3'

export async function getPesapalToken() {
  const response = await axios.post(`${PESAPAL_BASE_URL}/api/auth/request/token`, {
    consumer_key: process.env.NEXT_PUBLIC_PESAPAL_CLIENT_ID,
    consumer_secret: process.env.PESAPAL_API_KEY,
  })

  return response.data.token
}

export async function createPesapalOrder(
  amount: number,
  orderId: string,
  email: string,
  phone: string,
  description: string
) {
  const token = await getPesapalToken()

  const response = await axios.post(
    `${PESAPAL_BASE_URL}/api/transactions/initiate`,
    {
      amount,
      currency: 'KES',
      order_id: orderId,
      description,
      callback_url: process.env.PESAPAL_CALLBACK_URL,
      redirect_mode: 'REDIRECT',
      customer: {
        email,
        phone_number: phone,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

export async function verifyPesapalWebhook(data: any, signature: string) {
  // Verify webhook signature (Pesapal docs)
  // Implementation depends on Pesapal's signature algorithm
  // For MVP: verify against Pesapal API
  
  const token = await getPesapalToken()
  
  const response = await axios.get(
    `${PESAPAL_BASE_URL}/api/transactions/get/${data.order_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}
```

### 4.5: API Route - Sign Up (`src/app/api/auth/register.ts`)

```typescript
import { createClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, name } = body

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = createClient()

    // Sign up user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    })

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      )
    }

    // Create consultant record
    const { data: consultant, error: consultantError } = await supabase
      .from('consultants')
      .insert([
        {
          auth_user_id: authData.user!.id,
          email,
          name,
          slug: name.toLowerCase().replace(/\s+/g, '-'),
        },
      ])
      .select()
      .single()

    if (consultantError) {
      return NextResponse.json(
        { error: consultantError.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        message: 'Consultant created successfully',
        user: authData.user,
        consultant,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### 4.6: API Route - Create Booking (`src/app/api/bookings/create.ts`)

```typescript
import { createClient } from '@/lib/supabase'
import { createPesapalOrder } from '@/lib/pesapal'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      consultant_id,
      service_id,
      client_name,
      client_email,
      client_phone,
      booking_date,
      booking_time,
      notes,
    } = body

    const supabase = createClient()

    // Get service to verify price
    const { data: service } = await supabase
      .from('services')
      .select('*')
      .eq('id', service_id)
      .single()

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      )
    }

    // Create booking
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .insert([
        {
          consultant_id,
          service_id,
          client_name,
          client_email,
          client_phone,
          booking_date,
          booking_time,
          notes,
          status: 'pending',
        },
      ])
      .select()
      .single()

    if (bookingError) {
      return NextResponse.json(
        { error: bookingError.message },
        { status: 400 }
      )
    }

    // Create Pesapal order
    const pesapalResponse = await createPesapalOrder(
      service.price_kes,
      booking.id,
      client_email,
      client_phone,
      `${service.name} with consultant`
    )

    // Store Pesapal order ID
    await supabase
      .from('payments')
      .insert([
        {
          booking_id: booking.id,
          amount_kes: service.price_kes,
          pesapal_order_id: pesapalResponse.order_tracking_id,
          status: 'pending',
        },
      ])

    return NextResponse.json(
      {
        booking_id: booking.id,
        pesapal_link: pesapalResponse.redirect_url,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### 4.7: API Route - Pesapal Webhook (`src/app/api/webhooks/pesapal.ts`)

```typescript
import { createClient } from '@/lib/supabase'
import { verifyPesapalWebhook } from '@/lib/pesapal'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const signature = req.headers.get('pesapal-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    // Verify webhook
    const verified = await verifyPesapalWebhook(body, signature)

    if (verified.status !== 'COMPLETED') {
      // Payment failed or pending
      return NextResponse.json(
        { message: `Payment ${verified.status}` },
        { status: 200 }
      )
    }

    const supabase = createClient()

    // Update payment status
    const { error: paymentError } = await supabase
      .from('payments')
      .update({
        status: 'completed',
        confirmed_at: new Date().toISOString(),
        webhook_data: verified,
      })
      .eq('pesapal_order_id', body.order_tracking_id)

    if (paymentError) {
      console.error('Payment update error:', paymentError)
      return NextResponse.json(
        { error: 'Failed to update payment' },
        { status: 500 }
      )
    }

    // Update booking status
    const { data: booking } = await supabase
      .from('payments')
      .select('booking_id')
      .eq('pesapal_order_id', body.order_tracking_id)
      .single()

    if (booking) {
      await supabase
        .from('bookings')
        .update({ status: 'confirmed' })
        .eq('id', booking.booking_id)

      // TODO: Send confirmation emails to consultant + client
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## 5. Component Development

### 5.1: ConsultantProfile Component (`src/components/ConsultantProfile.tsx`)

```typescript
'use client'

import { Consultant, Service } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

interface ConsultantProfileProps {
  consultant: Consultant
  services: Service[]
}

export default function ConsultantProfile({
  consultant,
  services,
}: ConsultantProfileProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {consultant.profile_photo_url ? (
            <Image
              src={consultant.profile_photo_url}
              alt={consultant.name}
              width={120}
              height={120}
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white text-5xl font-bold">
              {consultant.name.charAt(0)}
            </div>
          )}

          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {consultant.name}
          </h1>

          {consultant.location && (
            <p className="text-lg text-slate-600 mb-4">📍 {consultant.location}</p>
          )}

          {consultant.bio && (
            <p className="text-xl text-slate-700 mb-6 italic">
              "{consultant.bio}"
            </p>
          )}

          <Link
            href={`/${consultant.slug}/book`}
            className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
          >
            Book a Session
          </Link>
        </div>

        {/* Services */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>

                {service.description && (
                  <p className="text-slate-600 mb-4">{service.description}</p>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-sm text-slate-500">
                    {service.duration_minutes} minutes
                  </span>
                  <span className="text-2xl font-bold text-pink-600">
                    KES {service.price_kes.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 p-6 bg-white rounded-lg text-center border-t-4 border-pink-500">
          <p className="text-slate-600 mb-3">Ready to get started?</p>
          <Link
            href={`/${consultant.slug}/book`}
            className="inline-block bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
```

### 5.2: DatePicker Component (simplified)

```typescript
'use client'

import { useState } from 'react'
import dayjs from 'dayjs'

interface DatePickerProps {
  consultantId: string
  onSelectDate: (date: string, time: string) => void
}

export default function DatePicker({
  consultantId,
  onSelectDate,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  const handleDateChange = async (date: string) {
    setSelectedDate(date)

    // Fetch available times
    const response = await fetch(
      `/api/bookings/available?consultant_id=${consultantId}&date=${date}`
    )
    const data = await response.json()
    setAvailableTimes(data.available_times || [])
  }

  const next7Days = Array.from({ length: 7 }, (_, i) =>
    dayjs().add(i + 1, 'day')
  )

  return (
    <div className="space-y-6">
      {/* Date Selection */}
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          Select Date
        </label>
        <div className="grid grid-cols-2 gap-3">
          {next7Days.map((date) => (
            <button
              key={date.format('YYYY-MM-DD')}
              onClick={() => handleDateChange(date.format('YYYY-MM-DD'))}
              className={`p-3 rounded-lg font-semibold transition-colors ${
                selectedDate === date.format('YYYY-MM-DD')
                  ? 'bg-pink-500 text-white'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              <div className="text-sm">{date.format('ddd')}</div>
              <div className="text-lg">{date.format('DD')}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            Select Time
          </label>
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => onSelectDate(selectedDate, time)}
                className="p-3 bg-slate-100 hover:bg-pink-500 text-slate-900 hover:text-white rounded-lg font-semibold transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
```

---

## 6. Development Workflow

### Week 1: Core Infrastructure

- Day 1-2: Setup (auth, database, environment)
- Day 3-5: Consultant profile, services, availability
- Day 6-7: Testing, deployment to Vercel

### Week 2: Booking & Payment

- Day 1-2: Booking flow (date picker, form)
- Day 3-4: Pesapal integration, webhooks
- Day 5-6: Notifications (email), dashboard
- Day 7: Final testing, bug fixes

### Git Workflow

```bash
# Feature branch
git checkout -b feature/profile-management

# Make changes, commit
git add .
git commit -m "Add consultant profile editor"

# Push and create PR
git push origin feature/profile-management

# After review, merge to main
git checkout main
git merge feature/profile-management

# Vercel auto-deploys when main is pushed
git push origin main
```

---

## 7. Testing Checklist

### Unit Tests (Jest + React Testing Library)

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

Example test:

```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/Button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

### Integration Tests

1. **Sign up → Create profile → Add services**
2. **Client books → Payment → Confirmation email**
3. **Webhook from Pesapal → Booking confirmed**

### Manual Testing

- [x] Mobile (iPhone 12, Samsung Galaxy A10)
- [x] Desktop (Chrome, Firefox, Safari)
- [x] Payment flow (Pesapal sandbox)
- [x] Email delivery (check inbox + spam)
- [x] Offline functionality (disable network, try booking)

---

## 8. Performance Optimization

### Image Optimization

Use Next.js `Image` component:

```typescript
<Image
  src="/profile-photo.jpg"
  alt="Consultant"
  width={200}
  height={200}
  priority // For above-the-fold images
  className="rounded-full"
/>
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const BookingFlow = dynamic(() => import('@/components/BookingFlow'), {
  loading: () => <div>Loading...</div>,
})
```

### Database Query Optimization

```typescript
// Instead of N+1 queries:
const bookings = await supabase
  .from('bookings')
  .select('*, service:services(*)')
  .eq('consultant_id', consultantId)
```

---

## 9. Monitoring & Debugging

### Vercel Deployment

```bash
npm install -g vercel
vercel deploy
vercel logs --follow
```

### Sentry Error Tracking (Optional)

```bash
npm install @sentry/nextjs
```

Configure in `next.config.js` and catch errors.

### Supabase Studio

Use Supabase Studio → Inspect queries, RLS policies, real-time activity.

---

## 10. Appendix: Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| CORS errors | Ensure NEXT_PUBLIC_SUPABASE_URL is correct |
| Auth cookie issues | Check same-site cookie settings in Supabase |
| Pesapal sandbox not working | Verify API keys, use correct endpoint URL |
| Slow database queries | Add indexes, check query plans in Supabase |
| Payment webhook not firing | Verify callback URL matches Pesapal settings |
| Build failures | Check TypeScript errors: `npm run build` |

---

**Document Version:** 1.0  
**Last Updated:** March 23, 2026  
**Next Review:** After MVP launch
