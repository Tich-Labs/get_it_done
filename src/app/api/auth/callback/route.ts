import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')

  if (error) {
    return NextResponse.redirect(
      new URL(`/auth/login?error=${encodeURIComponent(error)}`, 
      process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
    )
  }

  if (code) {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    const { data, error: sessionError } = await supabase.auth.exchangeCodeForSession(code)
    
    if (sessionError) {
      return NextResponse.redirect(
        new URL(`/auth/login?error=${encodeURIComponent(sessionError.message)}`, 
        process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
      )
    }

    // Successful login, redirect to dashboard
    return NextResponse.redirect(
      new URL('/dashboard', 
      process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
    )
  }

  return NextResponse.redirect(
    new URL('/auth/login?error=no_code', 
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
  )
}
