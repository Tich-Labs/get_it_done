'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { 
  TrendingUp,
  CalendarCheck,
  Star,
  Plus,
  Bell,
  Settings,
  BarChart3,
  Calendar,
  Users,
  ArrowRight,
  Check
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-headline font-extrabold tracking-tight text-zinc-900">
              Welcome back, Alex!
            </h1>
            <p className="text-zinc-500 mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              You have <span className="text-primary font-bold">3 bookings</span> this week
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-zinc-600 hover:text-primary transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <Link href="/profile" className="text-sm font-semibold text-primary underline underline-offset-4 hover:opacity-80">
              Edit Profile
            </Link>
            <Link 
              href="/services"
              className="btn-primary-gradient text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95 hover:bg-primary-dim"
            >
              <Plus className="w-5 h-5" />
              Add New Service
            </Link>
          </div>
        </header>

        {/* Stats Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Monthly Revenue */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <p className="text-zinc-500 text-sm font-semibold mb-2 uppercase tracking-wide">Monthly Revenue (KES)</p>
            <h3 className="text-3xl font-headline font-bold text-zinc-900">452,000</h3>
            <div className="mt-4 flex items-center gap-2 text-primary text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              +12.5% vs last month
            </div>
          </div>

          {/* Total Bookings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <p className="text-zinc-500 text-sm font-semibold mb-2 uppercase tracking-wide">Total Bookings</p>
            <h3 className="text-3xl font-headline font-bold text-zinc-900">128</h3>
            <div className="mt-4 flex items-center gap-2 text-zinc-500 text-xs">
              <CalendarCheck className="w-4 h-4" />
              Active this quarter
            </div>
          </div>

          {/* Client Satisfaction */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <p className="text-zinc-500 text-sm font-semibold mb-2 uppercase tracking-wide">Client Satisfaction</p>
            <h3 className="text-3xl font-headline font-bold text-zinc-900">4.9/5.0</h3>
            <div className="mt-4 flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary" />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Today's Bookings */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xl font-headline font-bold text-zinc-900 flex items-center gap-2">
              Today&apos;s Bookings
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">LIVE</span>
            </h2>

            {/* Booking Card 1 */}
            <div className="glass-panel p-6 rounded-2xl shadow-md border border-zinc-200 relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                    <div className="w-full h-full bg-red-100 flex items-center justify-center text-primary font-bold">SJ</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Sarah Jenkins</h4>
                    <p className="text-xs text-zinc-500">Marketing Strategy</p>
                  </div>
                </div>
                <span className="text-primary font-bold text-xs uppercase tracking-tighter">14:00 EAT</span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase">Confirmed</span>
                <button className="text-xs font-bold text-zinc-600 flex items-center gap-1 hover:text-primary transition-colors">
                  Details <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Booking Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale opacity-70">
                    <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold">DC</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 opacity-70">David Chen</h4>
                    <p className="text-xs text-zinc-500">UX Audit</p>
                  </div>
                </div>
                <span className="text-zinc-400 font-bold text-xs uppercase tracking-tighter">16:30 EAT</span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="bg-zinc-100 text-zinc-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Pending</span>
                <button className="text-xs font-bold text-zinc-400 hover:text-primary transition-colors">
                  Manage
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-headline font-bold text-zinc-900">Recent Activity</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-zinc-50 text-zinc-500 hover:text-primary transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-zinc-50 text-zinc-500 hover:text-primary transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-100">
                    <th className="pb-4 text-xs uppercase tracking-widest text-zinc-500 font-bold">Client</th>
                    <th className="pb-4 text-xs uppercase tracking-widest text-zinc-500 font-bold">Service</th>
                    <th className="pb-4 text-xs uppercase tracking-widest text-zinc-500 font-bold">Schedule</th>
                    <th className="pb-4 text-xs uppercase tracking-widest text-zinc-500 font-bold">Status</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  <tr className="group hover:bg-zinc-50/50 transition-colors">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">MK</div>
                        <span className="text-sm font-semibold text-zinc-900">Marcus Kanyi</span>
                      </div>
                    </td>
                    <td className="py-5 text-sm text-zinc-700">Business Analysis</td>
                    <td className="py-5">
                      <div className="text-sm text-zinc-900">Oct 24, 2024</div>
                      <div className="text-[10px] text-zinc-500">09:00 - 10:00 EAT</div>
                    </td>
                    <td className="py-5">
                      <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-2 py-1 rounded tracking-widest uppercase border border-emerald-100">Paid</span>
                    </td>
                    <td className="py-5 text-right">
                      <Link href="/bookings/marcus-kanyi" className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Details</Link>
                    </td>
                  </tr>
                  <tr className="group hover:bg-zinc-50/50 transition-colors">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">AL</div>
                        <span className="text-sm font-semibold text-zinc-900">Anita Low</span>
                      </div>
                    </td>
                    <td className="py-5 text-sm text-zinc-700">FinOps Consulting</td>
                    <td className="py-5">
                      <div className="text-sm text-zinc-900">Oct 25, 2024</div>
                      <div className="text-[10px] text-zinc-500">11:00 - 12:30 EAT</div>
                    </td>
                    <td className="py-5">
                      <span className="bg-primary/10 text-primary text-[9px] font-black px-2 py-1 rounded tracking-widest uppercase">Confirmed</span>
                    </td>
                    <td className="py-5 text-right">
                      <Link href="/bookings/anita-low" className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Details</Link>
                    </td>
                  </tr>
                  <tr className="group hover:bg-zinc-50/50 transition-colors">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center font-bold text-xs text-red-500">BO</div>
                        <span className="text-sm font-semibold text-zinc-900">Brian Otieno</span>
                      </div>
                    </td>
                    <td className="py-5 text-sm text-zinc-700">Agile Coaching</td>
                    <td className="py-5">
                      <div className="text-sm text-zinc-900">Oct 25, 2024</div>
                      <div className="text-[10px] text-zinc-500">15:00 - 16:00 EAT</div>
                    </td>
                    <td className="py-5">
                      <span className="bg-red-50 text-red-500 text-[9px] font-black px-2 py-1 rounded tracking-widest uppercase border border-red-100">Unpaid</span>
                    </td>
                    <td className="py-5 text-right">
                      <Link href="/bookings/brian-otieno" className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Details</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
