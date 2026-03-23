# Deployment Guide: Vercel, Supabase & Google OAuth

This guide walks you through deploying Get It Done to production with Vercel, setting up Supabase database, and configuring Google OAuth.

---

## 1. Vercel Deployment

### Step 1: Push Code to GitHub

```bash
cd get-it-done
git add .
git commit -m "feat: Get It Done MVP"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"New Project"**
3. Import your GitHub repository: `Tich-Labs/get_it_done`
4. Click **"Deploy"**

### Step 3: Configure Environment Variables

In Vercel project settings, add these environment variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |
| `NEXT_PUBLIC_PESAPAL_CLIENT_ID` | Your Pesapal client ID |
| `PESAPAL_API_KEY` | Your Pesapal API key |
| `PESAPAL_SECRET_KEY` | Your Pesapal secret key |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` |

### Step 4: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add `getitdone.co.ke`
3. Configure DNS records as instructed by Vercel

### Step 5: Redeploy

After adding environment variables, click **"Redeploy"** to apply changes.

---

## 2. Supabase Setup

### Step 1: Create Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Name: `Get It Done`
4. Set a strong database password
5. Choose region: **East Africa (Nairobi)** or closest
6. Click **"Create new project"**

### Step 2: Get API Keys

1. Go to **Settings** → **API**
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### Step 3: Run Database Migrations

1. Go to **SQL Editor** in Supabase dashboard
2. Copy and run the schema from `docs/03_Technical_Engineering_Guide.md`
3. Or run this basic schema:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users/Consultants table
CREATE TABLE consultants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  bio TEXT,
  location TEXT,
  avatar_url TEXT,
  slug TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  consultant_id UUID REFERENCES consultants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL,
  price_kes INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_id UUID REFERENCES services(id),
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'pending',
  pesapal_order_id TEXT,
  amount_kes INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE consultants ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies (basic - consultant can only see their own data)
CREATE POLICY "Consultants can view own profile" ON consultants
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Consultants can update own profile" ON consultants
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Services linked to consultant" ON services
  FOR ALL USING (auth.uid() = consultant_id);
```

### Step 4: Configure Authentication

1. Go to **Authentication** → **Settings**
2. Set Site URL: `https://your-domain.vercel.app`
3. Add Redirect URLs:
   - `https://your-domain.vercel.app/api/auth/callback`
   - `http://localhost:3000` (for local dev)

---

## 3. Google OAuth Setup

### Step 1: Create Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click **"Select a project"** → **"New Project"**
3. Name: `Get It Done`
4. Click **"Create"**

### Step 2: Enable Google+ API

1. Go to **APIs & Services** → **Library**
2. Search for **"Google+"** or **"Identity"**
3. Enable **"Google Identity Toolkit"** or **"Identity Platform"**

### Step 3: Configure OAuth Consent Screen

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **"External"**
3. Fill in:
   - App name: `Get It Done`
   - User support email: Your email
   - Developer contact: Your email
4. Click **"Save and Continue"**

### Step 4: Create OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **"Create Credentials"** → **"OAuth client ID"**
3. Application type: **"Web application"**
4. Name: `Get It Done Web`
5. Authorized redirect URIs:
   ```
   https://your-project.supabase.co/auth/v1/callback
   ```
   (Replace `your-project` with your actual Supabase project ID)
6. Click **"Create"**
7. Copy the **Client ID** and **Client Secret**

### Step 5: Add to Supabase

1. Go to Supabase **Authentication** → **Providers** → **Google**
2. Enable Google provider
3. Paste your **Client ID** and **Client Secret**
4. Click **"Save"**

---

## 4. Pesapal Setup (M-Pesa Payments)

### Step 1: Create Pesapal Account

1. Go to [pesapal.com](https://pesapal.com)
2. Register as a merchant
3. Complete business verification

### Step 2: Get API Credentials

1. Go to Pesapal Merchant Dashboard
2. Navigate to **Settings** → **API**
3. Copy:
   - Consumer Key → `PESAPAL_API_KEY`
   - Consumer Secret → `PESAPAL_SECRET_KEY`

### Step 3: Configure IPN

1. In Pesapal dashboard, go to **Payment** → **IPN Settings**
2. Set callback URL: `https://your-domain.vercel.app/api/webhooks/pesapal`
3. Save

---

## 5. Local Development Setup

### Clone and Install

```bash
git clone https://github.com/Tich-Labs/get_it_done.git
cd get_it_done
npm install
```

### Create .env.local

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
PESAPAL_API_KEY=your-pesapal-key
PESAPAL_SECRET_KEY=your-pesapal-secret
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 6. Troubleshooting

### Google OAuth Not Working
- Verify redirect URI in Google Cloud matches Supabase callback URL
- Check Supabase provider is enabled and has correct credentials

### Supabase Connection Failed
- Verify environment variables are correct
- Check Supabase project is not paused
- Ensure IP allowlist includes Vercel IPs (or disable IP filter)

### Deployment Build Failed
- Check all environment variables are set in Vercel
- Verify Node.js version compatibility
- Check build logs for specific errors

### Payments Not Working
- Verify Pesapal credentials
- Check callback URL is accessible
- Test in Pesapal sandbox first

---

## Support

- **Supabase Docs:** [supabase.com/docs](https://supabase.com/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Google Cloud Console:** [console.cloud.google.com](https://console.cloud.google.com)
- **Pesapal Support:** [pesapal.com/support](https://pesapal.com/support)
