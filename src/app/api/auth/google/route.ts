import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function GET() {
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/callback`,
        queryParams: {
          prompt: 'consent',
          access_type: 'offline',
        },
      },
    })

    if (error) {
      return NextResponse.redirect(
        new URL(`/auth/login?error=${encodeURIComponent(error.message)}`, 
        process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
      )
    }

    return NextResponse.redirect(data.url!)
  } catch (error) {
    console.error('Google OAuth error:', error)
    return NextResponse.redirect(
      new URL('/auth/login?error=oauth_error', 
      process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
    )
  }
}
