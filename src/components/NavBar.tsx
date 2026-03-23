'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  User,
  FileText,
  ClipboardList,
  Home,
  Info,
  Mail,
  BookOpen,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

type NavType = 'public' | 'auth' | 'dashboard'

interface NavBarProps {
  type?: NavType
}

export default function NavBar({ type = 'public' }: NavBarProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  const publicNavLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ]

  const authNavLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const dashboardNavLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/services', label: 'Services', icon: FileText },
    { href: '/bookings', label: 'Bookings', icon: ClipboardList },
  ]

  const renderNavLinks = () => {
    switch (type) {
      case 'public':
        return (
          <>
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {authNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </>
        )
      case 'auth':
        return (
          <>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-primary'
                  : 'text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-primary'
                  : 'text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </>
        )
      case 'dashboard':
        return (
          <>
            {dashboardNavLinks.map((link) => {
              const Icon = link.icon!
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center gap-2 text-sm font-medium transition-colors
                    ${isActive(link.href)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
          </>
        )
    }
  }

  const renderMobileLinks = () => {
    switch (type) {
      case 'public':
        return (
          <>
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-zinc-600 dark:text-dark-on-surface-variant"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {authNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-zinc-600 dark:text-dark-on-surface-variant"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </>
        )
      case 'auth':
        return (
          <>
            <Link href="/about" className="block py-2 text-zinc-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 text-zinc-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </>
        )
      case 'dashboard':
        return (
          <>
            {dashboardNavLinks.map((link) => {
              const Icon = link.icon!
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-zinc-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
          </>
        )
    }
  }

  const renderAuthButtons = () => {
    if (type === 'dashboard') {
      return (
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/" className="text-sm text-zinc-500 hover:text-primary">
            <Home className="w-5 h-5" />
          </Link>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">U</span>
          </div>
        </div>
      )
    }

    return (
      <>
        <ThemeToggle />
        <Link
          href="/auth/login"
          className="text-sm font-medium text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/auth/signup"
          className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors"
        >
          Get Started
        </Link>
      </>
    )
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-zinc-100 dark:border-dark-outline-variant/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Get It Done.png"
                alt="Logo"
                width={128}
                height={128}
                className="w-16 h-16"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {renderNavLinks()}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {renderAuthButtons()}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-zinc-600" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-surface border-t border-zinc-100 dark:border-dark-outline-variant/50 px-6 py-4">
            <div className="flex flex-col space-y-3 mb-4">
              {renderMobileLinks()}
            </div>
            {type !== 'dashboard' && (
              <div className="flex flex-col space-y-3 pt-4 border-t border-zinc-100">
                <Link
                  href="/auth/login"
                  className="text-center py-2 text-zinc-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="text-center py-3 bg-primary text-white font-semibold rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  )
}
