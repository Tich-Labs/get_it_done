'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, Download, Calendar, DollarSign, CreditCard, Smartphone } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const revenueData = [
  { month: 'Jan', revenue: 425000, bookings: 45 },
  { month: 'Feb', revenue: 580000, bookings: 62 },
  { month: 'Mar', revenue: 847000, bookings: 89 },
]

const topConsultants = [
  { name: 'Mike Kimani', revenue: 'KES 245,000', bookings: 28, plan: 'Enterprise' },
  { name: 'Wanjiku Kamau', revenue: 'KES 198,000', bookings: 24, plan: 'Pro' },
  { name: 'Grace Atieno', revenue: 'KES 156,000', bookings: 18, plan: 'Pro' },
  { name: 'John Otieno', revenue: 'KES 89,000', bookings: 12, plan: 'Starter' },
]

export default function RevenuePage() {
  const [period, setPeriod] = useState('month')

  return (
    <AdminLayout title="Revenue">
      {/* Period Selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-1">
          {['week', 'month', 'quarter', 'year'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                period === p
                  ? 'bg-primary text-white'
                  : 'text-zinc-600 dark:text-dark-on-surface-variant hover:bg-zinc-100 dark:hover:bg-dark-surface-container'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-surface border border-zinc-200 dark:border-dark-outline-variant rounded-lg text-sm font-medium text-zinc-700 dark:text-dark-on-surface hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Total Revenue</span>
            <DollarSign className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">KES 1.85M</p>
          <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            +23% from last month
          </div>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Platform Fees</span>
            <CreditCard className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">KES 92.5K</p>
          <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            +18% from last month
          </div>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Payouts</span>
            <Smartphone className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">KES 1.76M</p>
          <div className="flex items-center gap-1 mt-1 text-zinc-500 text-sm">
            Pending: KES 124K
          </div>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Avg. Transaction</span>
            <Calendar className="w-5 h-5 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">KES 9,517</p>
          <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            +5% from last month
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
          <h3 className="font-semibold text-zinc-900 dark:text-dark-on-surface mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {revenueData.map((data, idx) => (
              <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-primary rounded-t-lg transition-all hover:bg-red-700"
                  style={{ height: `${(data.revenue / 900000) * 100}%` }}
                />
                <span className="text-sm font-medium text-zinc-600 dark:text-dark-on-surface-variant">{data.month}</span>
                <span className="text-xs text-zinc-400">KES {(data.revenue / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Consultants */}
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-100 dark:border-dark-outline-variant">
            <h3 className="font-semibold text-zinc-900 dark:text-dark-on-surface">Top Consultants</h3>
          </div>
          <div className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
            {topConsultants.map((consultant, idx) => (
              <div key={consultant.name} className="px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-zinc-100 dark:bg-dark-surface-container rounded-full flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-dark-on-surface-variant">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-dark-on-surface">{consultant.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-dark-on-surface-variant">{consultant.bookings} bookings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-zinc-900 dark:text-dark-on-surface">{consultant.revenue}</p>
                  <p className="text-xs text-zinc-500 dark:text-dark-on-surface-variant">{consultant.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payout Requests */}
      <div className="mt-6 bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
        <div className="px-5 py-4 border-b border-zinc-100 dark:border-dark-outline-variant">
          <h3 className="font-semibold text-zinc-900 dark:text-dark-on-surface">Pending Payout Requests</h3>
        </div>
        <div className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
          <div className="px-5 py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-zinc-900 dark:text-dark-on-surface">Mike Kimani</p>
              <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Requested Mar 23, 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-900 dark:text-dark-on-surface">KES 45,000</span>
              <button className="px-3 py-1 bg-primary text-white text-sm rounded-lg hover:bg-red-700">Approve</button>
              <button className="px-3 py-1 bg-zinc-100 dark:bg-dark-surface-container text-zinc-600 dark:text-dark-on-surface-variant text-sm rounded-lg hover:bg-zinc-200">Reject</button>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-zinc-900 dark:text-dark-on-surface">Wanjiku Kamau</p>
              <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Requested Mar 22, 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-900 dark:text-dark-on-surface">KES 32,500</span>
              <button className="px-3 py-1 bg-primary text-white text-sm rounded-lg hover:bg-red-700">Approve</button>
              <button className="px-3 py-1 bg-zinc-100 dark:bg-dark-surface-container text-zinc-600 dark:text-dark-on-surface-variant text-sm rounded-lg hover:bg-zinc-200">Reject</button>
            </div>
          </div>
          <div className="px-5 py-3 flex items-center justify-between">
            <div>
              <p className="font-medium text-zinc-900 dark:text-dark-on-surface">Grace Atieno</p>
              <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Requested Mar 21, 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-900 dark:text-dark-on-surface">KES 28,000</span>
              <button className="px-3 py-1 bg-primary text-white text-sm rounded-lg hover:bg-red-700">Approve</button>
              <button className="px-3 py-1 bg-zinc-100 dark:bg-dark-surface-container text-zinc-600 dark:text-dark-on-surface-variant text-sm rounded-lg hover:bg-zinc-200">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
