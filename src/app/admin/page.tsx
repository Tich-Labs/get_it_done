'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Settings,
  BarChart3,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Calendar,
  CheckCircle,
  Clock,
} from 'lucide-react'

const sidebarNav = [
  { href: '/admin', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
  { href: '/admin/revenue', label: 'Revenue', icon: CreditCard },
  { href: '/admin/content', label: 'Content', icon: FileText },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

const stats = [
  { label: 'Total Users', value: '1,247', change: '+12%', icon: Users, color: 'text-blue-600' },
  { label: 'Active Bookings', value: '89', change: '+8%', icon: Calendar, color: 'text-green-600' },
  { label: 'Monthly Revenue', value: 'KES 847K', change: '+23%', icon: TrendingUp, color: 'text-primary' },
  { label: 'Pending Payouts', value: 'KES 124K', change: '', icon: Clock, color: 'text-amber-600' },
]

const recentUsers = [
  { name: 'Wanjiku Kamau', email: 'wanjiku@consultant.co.ke', plan: 'Pro', status: 'Active' },
  { name: 'John Otieno', email: 'john@legaltech.ke', plan: 'Starter', status: 'Active' },
  { name: 'Sarah Mwende', email: 'sarah@coach.co.ke', plan: 'Pro', status: 'Pending' },
  { name: 'Mike Kimani', email: 'mike@design.studio', plan: 'Enterprise', status: 'Active' },
]

const recentBookings = [
  { client: 'Wanjiku Kamau', service: 'Business Consulting', amount: 'KES 15,000', status: 'Completed' },
  { client: 'John Otieno', service: 'Legal Consultation', amount: 'KES 8,000', status: 'Pending' },
  { client: 'Sarah Mwende', service: 'Career Coaching', amount: 'KES 5,000', status: 'Completed' },
]

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-dark-background flex">
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-zinc-900 dark:bg-dark-surface border-r border-zinc-800 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-zinc-800">
            <Image src="/Get It Done.png" alt="Logo" width={36} height={36} className="w-9 h-9" />
            <div>
              <span className="text-white font-bold text-lg">Get It Done</span>
              <span className="block text-xs text-zinc-500">Admin Panel</span>
            </div>
            <button
              className="lg:hidden ml-auto text-zinc-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {sidebarNav.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="px-4 py-4 border-t border-zinc-800">
            <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors w-full">
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white dark:bg-dark-surface border-b border-zinc-200 dark:border-dark-outline-variant px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-2 text-zinc-600 dark:text-dark-on-surface hover:bg-zinc-100 dark:hover:bg-dark-surface-container rounded-lg"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-dark-on-surface">Dashboard Overview</h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-dark-surface-container rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  className="flex items-center gap-3 p-2 hover:bg-zinc-100 dark:hover:bg-dark-surface-container rounded-lg"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <span className="hidden md:block text-sm font-medium text-zinc-700 dark:text-dark-on-surface">Admin</span>
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-surface rounded-lg shadow-lg border border-zinc-200 dark:border-dark-outline-variant py-1">
                    <Link href="/admin/settings" className="block px-4 py-2 text-sm text-zinc-700 dark:text-dark-on-surface hover:bg-zinc-100 dark:hover:bg-dark-surface-container">
                      Settings
                    </Link>
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-zinc-100 dark:hover:bg-dark-surface-container">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">{stat.label}</span>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">{stat.value}</span>
                    {stat.change && (
                      <span className="text-sm font-medium text-green-600 mb-1">{stat.change}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-200 dark:border-dark-outline-variant flex items-center justify-between">
                <h2 className="font-semibold text-zinc-900 dark:text-dark-on-surface">Recent Users</h2>
                <Link href="/admin/users" className="text-sm text-primary hover:underline">View all</Link>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
                {recentUsers.map((user) => (
                  <div key={user.email} className="px-5 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-dark-on-surface">{user.name}</p>
                      <p className="text-xs text-zinc-500 dark:text-dark-on-surface-variant">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-dark-surface-container text-zinc-600 dark:text-dark-on-surface-variant rounded">
                        {user.plan}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        user.status === 'Active'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-200 dark:border-dark-outline-variant flex items-center justify-between">
                <h2 className="font-semibold text-zinc-900 dark:text-dark-on-surface">Recent Bookings</h2>
                <Link href="/admin/bookings" className="text-sm text-primary hover:underline">View all</Link>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
                {recentBookings.map((booking, idx) => (
                  <div key={idx} className="px-5 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-zinc-900 dark:text-dark-on-surface">{booking.client}</p>
                      <p className="text-xs text-zinc-500 dark:text-dark-on-surface-variant">{booking.service}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-zinc-900 dark:text-dark-on-surface">{booking.amount}</p>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                        booking.status === 'Completed'
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-amber-600 dark:text-amber-400'
                      }`}>
                        {booking.status === 'Completed' ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <h2 className="font-semibold text-zinc-900 dark:text-dark-on-surface mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin/users"
                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Add User
              </Link>
              <Link
                href="/admin/content"
                className="px-4 py-2 bg-zinc-100 dark:bg-dark-surface-container text-zinc-700 dark:text-dark-on-surface text-sm font-medium rounded-lg hover:bg-zinc-200 dark:hover:bg-dark-surface-high transition-colors"
              >
                Manage Content
              </Link>
              <Link
                href="/admin/revenue"
                className="px-4 py-2 bg-zinc-100 dark:bg-dark-surface-container text-zinc-700 dark:text-dark-on-surface text-sm font-medium rounded-lg hover:bg-zinc-200 dark:hover:bg-dark-surface-high transition-colors"
              >
                View Reports
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
