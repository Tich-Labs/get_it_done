'use client'

import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Calendar,
  Clock,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  User,
  Mail,
  Phone
} from 'lucide-react'

interface Booking {
  id: string
  client: string
  initials: string
  service: string
  date: string
  time: string
  status: 'paid' | 'confirmed' | 'pending' | 'unpaid'
  amount: string
  email: string
  phone: string
}

export default function BookingsPage() {
  const [filter, setFilter] = useState('all')
  
  const bookings: Booking[] = [
    { id: '1', client: 'Sarah Jenkins', initials: 'SJ', service: 'Strategy Deep-Dive', date: 'Oct 24, 2024', time: '14:00 - 15:00', status: 'confirmed', amount: '12,500', email: 'sarah@example.com', phone: '+254 711 222 333' },
    { id: '2', client: 'Marcus Kanyi', initials: 'MK', service: 'Rapid Execution Call', date: 'Oct 24, 2024', time: '09:00 - 10:00', status: 'paid', amount: '7,000', email: 'marcus@example.com', phone: '+254 722 333 444' },
    { id: '3', client: 'Anita Low', initials: 'AL', service: 'Strategy Deep-Dive', date: 'Oct 25, 2024', time: '11:00 - 12:30', status: 'confirmed', amount: '12,500', email: 'anita@example.com', phone: '+254 733 444 555' },
    { id: '4', client: 'Brian Otieno', initials: 'BO', service: 'Executive Partnership', date: 'Oct 25, 2024', time: '15:00 - 16:00', status: 'unpaid', amount: '45,000', email: 'brian@example.com', phone: '+254 744 555 666' },
    { id: '5', client: 'David Chen', initials: 'DC', service: 'Performance Audit', date: 'Oct 26, 2024', time: '10:00 - 11:00', status: 'pending', amount: '25,000', email: 'david@example.com', phone: '+254 755 666 777' },
  ]

  const statusConfig = {
    paid: { label: 'Paid', color: 'bg-emerald-50 text-emerald-600 border-emerald-100', icon: CheckCircle },
    confirmed: { label: 'Confirmed', color: 'bg-primary/10 text-primary', icon: CheckCircle },
    pending: { label: 'Pending', color: 'bg-amber-50 text-amber-600 border-amber-100', icon: AlertCircle },
    unpaid: { label: 'Unpaid', color: 'bg-red-50 text-red-500 border-red-100', icon: XCircle }
  }

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filter)

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight text-zinc-900">
              Bookings
            </h1>
            <p className="text-zinc-500 mt-1">Manage your appointments and payments.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search bookings..."
                className="pl-12 pr-4 py-3 bg-white border border-zinc-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent w-64"
              />
            </div>
            <button className="p-3 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors">
              <Filter className="w-5 h-5 text-zinc-600" />
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Bookings', value: '128' },
            { label: 'This Week', value: '12' },
            { label: 'Pending Payment', value: '3' },
            { label: 'Total Revenue', value: 'KES 452K' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-zinc-200">
              <p className="text-zinc-500 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-headline font-bold text-zinc-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {['all', 'confirmed', 'pending', 'unpaid'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Client</th>
                  <th className="text-left px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Service</th>
                  <th className="text-left px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Schedule</th>
                  <th className="text-left px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Amount</th>
                  <th className="text-right px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredBookings.map((booking) => {
                  const config = statusConfig[booking.status]
                  const StatusIcon = config.icon
                  return (
                    <tr key={booking.id} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
                            {booking.initials}
                          </div>
                          <div>
                            <p className="font-semibold text-zinc-900">{booking.client}</p>
                            <p className="text-xs text-zinc-500">{booking.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-zinc-700">{booking.service}</td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-zinc-900">{booking.date}</div>
                        <div className="text-xs text-zinc-500">{booking.time} EAT</div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${config.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {config.label}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-bold text-zinc-900">KES {booking.amount}</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <Link 
                          href={`/bookings/${booking.id}`}
                          className="inline-flex items-center gap-1 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          View <ChevronRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
