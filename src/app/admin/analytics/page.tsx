'use client'

import { useState } from 'react'
import { TrendingUp, Users, Calendar, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const metrics = [
  { label: 'Active Users', value: '1,247', change: '+12%', trend: 'up', period: 'vs last month' },
  { label: 'New Signups', value: '89', change: '+23%', trend: 'up', period: 'vs last month' },
  { label: 'Booking Rate', value: '78%', change: '+5%', trend: 'up', period: 'vs last month' },
  { label: 'Churn Rate', value: '2.1%', change: '-0.5%', trend: 'down', period: 'vs last month' },
]

const topPages = [
  { page: '/', views: 12450, bounceRate: '32%', avgTime: '2m 34s' },
  { page: '/auth/signup', views: 4820, bounceRate: '45%', avgTime: '1m 12s' },
  { page: '/pricing', views: 3240, bounceRate: '38%', avgTime: '1m 48s' },
  { page: '/about', views: 2180, bounceRate: '42%', avgTime: '2m 15s' },
  { page: '/features', views: 1950, bounceRate: '35%', avgTime: '1m 56s' },
]

const conversionFunnel = [
  { stage: 'Page Visit', count: 12450, percentage: 100 },
  { stage: 'Sign Up Started', count: 4820, percentage: 38.7 },
  { stage: 'Email Verified', count: 4215, percentage: 33.9 },
  { stage: 'First Booking', count: 2890, percentage: 23.2 },
  { stage: 'Repeat Booking', count: 1650, percentage: 13.2 },
]

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('30d')

  return (
    <AdminLayout title="Analytics">
      {/* Period Selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-1">
          {[
            { value: '7d', label: '7 Days' },
            { value: '30d', label: '30 Days' },
            { value: '90d', label: '90 Days' },
            { value: '365d', label: 'Year' },
          ].map((p) => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                period === p.value
                  ? 'bg-primary text-white'
                  : 'text-zinc-600 dark:text-dark-on-surface-variant hover:bg-zinc-100 dark:hover:bg-dark-surface-container'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">{metric.label}</span>
              {metric.trend === 'up' ? (
                <ArrowUpRight className="w-5 h-5 text-green-600" />
              ) : (
                <ArrowDownRight className="w-5 h-5 text-red-600" />
              )}
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">{metric.value}</p>
            <div className={`flex items-center gap-1 mt-1 text-sm ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className="w-4 h-4" />
              {metric.change} {metric.period}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-100 dark:border-dark-outline-variant">
            <h3 className="font-semibold text-zinc-900 dark:text-dark-on-surface">Top Pages</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 dark:bg-dark-surface-container">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase">Page</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase">Views</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase">Bounce</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase">Avg Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
                {topPages.map((page, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
                    <td className="px-4 py-3 font-mono text-sm text-zinc-900 dark:text-dark-on-surface">{page.page}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-dark-on-surface-variant">{page.views.toLocaleString()}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-dark-on-surface-variant">{page.bounceRate}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-dark-on-surface-variant">{page.avgTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-100 dark:border-dark-outline-variant">
            <h3 className="font-semibold text-zinc-900 dark:text-dark-on-surface">Conversion Funnel</h3>
          </div>
          <div className="p-5">
            {conversionFunnel.map((stage, idx) => (
              <div key={stage.stage} className="mb-4 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-zinc-700 dark:text-dark-on-surface">{stage.stage}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">{stage.count.toLocaleString()}</span>
                    <span className="text-xs text-zinc-400 dark:text-dark-on-surface-variant w-12 text-right">{stage.percentage}%</span>
                  </div>
                </div>
                <div className="h-3 bg-zinc-100 dark:bg-dark-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      idx === 0 ? 'bg-blue-500' :
                      idx === 1 ? 'bg-blue-400' :
                      idx === 2 ? 'bg-blue-300' :
                      idx === 3 ? 'bg-primary' : 'bg-green-500'
                    }`}
                    style={{ width: `${stage.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Growth Chart Placeholder */}
      <div className="mt-6 bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-5">
        <h3 className="font-semibold text-zinc-900 dark:text-dark-on-surface mb-4">User Growth</h3>
        <div className="h-48 flex items-end justify-between gap-2">
          {[40, 55, 45, 65, 70, 85, 80, 90, 95, 100].map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-primary rounded-t transition-all hover:bg-red-700"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-zinc-500 dark:text-dark-on-surface-variant">
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>
    </AdminLayout>
  )
}
