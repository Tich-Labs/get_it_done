'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  User,
  FileText,
  ClipboardList,
} from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function NavBar() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/services', label: 'Services', icon: FileText },
    { href: '/bookings', label: 'Bookings', icon: ClipboardList },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-xl shadow-sm border-b border-zinc-200/50 dark:border-dark-outline-variant/50">
      <div className="flex justify-between items-center px-6 h-24 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/Get It Done.png" 
            alt="Logo" 
            width={128} 
            height={128}
            className="w-24 h-36"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-2 transition-colors
                  ${active 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary opacity-70'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <Link 
            href="/auth/login"
            className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/auth/signup"
            className="px-4 py-2 bg-primary text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
