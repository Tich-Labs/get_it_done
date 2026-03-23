'use client'

import { useState } from 'react'
import { Search, Filter, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const bookings = [
  { id: 'BK001', consultant: 'Wanjiku Kamau', client: 'TechCorp Kenya', service: 'Business Strategy Session', date: 'Mar 24, 2026', time: '10:00 AM', amount: 'KES 15,000', status: 'Completed', payment: 'Paid' },
  { id: 'BK002', consultant: 'John Otieno', client: 'StartupHub', service: 'Legal Consultation', date: 'Mar 24, 2026', time: '2:00 PM', amount: 'KES 8,000', status: 'Pending', payment: 'Pending' },
  { id: 'BK003', consultant: 'Sarah Mwende', client: 'Individual', service: 'Career Coaching', date: 'Mar 23, 2026', time: '11:00 AM', amount: 'KES 5,000', status: 'Completed', payment: 'Paid' },
  { id: 'BK004', consultant: 'Mike Kimani', client: 'Design Studio', service: 'UX Review', date: 'Mar 23, 2026', time: '3:00 PM', amount: 'KES 12,000', status: 'Cancelled', payment: 'Refunded' },
  { id: 'BK005', consultant: 'Grace Atieno', client: 'Finance Plus', service: 'Financial Planning', date: 'Mar 22, 2026', time: '9:00 AM', amount: 'KES 20,000', status: 'Completed', payment: 'Paid' },
  { id: 'BK006', consultant: 'David Njoroge', client: 'Tech Startup', service: 'Code Review', date: 'Mar 22, 2026', time: '4:00 PM', amount: 'KES 7,500', status: 'Pending', payment: 'Pending' },
]

export default function BookingsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.consultant.toLowerCase().includes(search.toLowerCase()) ||
      booking.client.toLowerCase().includes(search.toLowerCase()) ||
      booking.id.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = statusFilter === 'all' || booking.status.toLowerCase() === statusFilter
    return matchesSearch && matchesFilter
  })

  return (
    <AdminLayout title="Bookings">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface text-sm"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Completed</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">156</p>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Pending</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">23</p>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-4">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Cancelled</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">8</p>
        </div>
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Total Revenue</span>
          </div>
          <p className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface">KES 1.2M</p>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 dark:bg-dark-surface-container">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Consultant</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Service</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Date & Time</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
                  <td className="px-4 py-4 text-sm font-mono text-zinc-500 dark:text-dark-on-surface-variant">{booking.id}</td>
                  <td className="px-4 py-4 font-medium text-zinc-900 dark:text-dark-on-surface">{booking.consultant}</td>
                  <td className="px-4 py-4 text-zinc-600 dark:text-dark-on-surface-variant">{booking.client}</td>
                  <td className="px-4 py-4 text-zinc-600 dark:text-dark-on-surface-variant text-sm">{booking.service}</td>
                  <td className="px-4 py-4 text-sm">
                    <p className="text-zinc-900 dark:text-dark-on-surface">{booking.date}</p>
                    <p className="text-zinc-500 dark:text-dark-on-surface-variant">{booking.time}</p>
                  </td>
                  <td className="px-4 py-4 font-medium text-zinc-900 dark:text-dark-on-surface">{booking.amount}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${
                      booking.status === 'Completed'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : booking.status === 'Pending'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {booking.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                      {booking.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {booking.status === 'Cancelled' && <XCircle className="w-3 h-3" />}
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      booking.payment === 'Paid'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : booking.payment === 'Pending'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}>
                      {booking.payment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
