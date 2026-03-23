'use client'

import { useState } from 'react'
import { Search, Plus, MoreVertical, Mail, Ban, CheckCircle, XCircle } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const users = [
  { id: 1, name: 'Wanjiku Kamau', email: 'wanjiku@consultant.co.ke', phone: '+254 712 345 678', plan: 'Pro', status: 'Active', joined: 'Mar 15, 2026', bookings: 24 },
  { id: 2, name: 'John Otieno', email: 'john@legaltech.ke', phone: '+254 723 456 789', plan: 'Starter', status: 'Active', joined: 'Mar 10, 2026', bookings: 8 },
  { id: 3, name: 'Sarah Mwende', email: 'sarah@coach.co.ke', phone: '+254 734 567 890', plan: 'Pro', status: 'Pending', joined: 'Mar 8, 2026', bookings: 0 },
  { id: 4, name: 'Mike Kimani', email: 'mike@design.studio', phone: '+254 745 678 901', plan: 'Enterprise', status: 'Active', joined: 'Mar 1, 2026', bookings: 56 },
  { id: 5, name: 'Grace Atieno', email: 'grace@finance.ke', phone: '+254 756 789 012', plan: 'Pro', status: 'Suspended', joined: 'Feb 20, 2026', bookings: 12 },
  { id: 6, name: 'David Njoroge', email: 'david@techhub.co.ke', phone: '+254 767 890 123', plan: 'Starter', status: 'Active', joined: 'Feb 15, 2026', bookings: 3 },
]

export default function UsersPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || user.status.toLowerCase() === filter
    return matchesSearch && matchesFilter
  })

  return (
    <AdminLayout title="Users">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
          />
        </div>
        <div className="flex items-center gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface text-sm"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 dark:bg-dark-surface-container">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">User</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Plan</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Bookings</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Joined</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-dark-on-surface">{user.name}</p>
                      <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      user.plan === 'Enterprise'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                        : user.plan === 'Pro'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-zinc-100 dark:bg-dark-surface-container text-zinc-600 dark:text-dark-on-surface-variant'
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${
                      user.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : user.status === 'Pending'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {user.status === 'Active' && <CheckCircle className="w-3 h-3" />}
                      {user.status === 'Pending' && <XCircle className="w-3 h-3" />}
                      {user.status === 'Suspended' && <Ban className="w-3 h-3" />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-600 dark:text-dark-on-surface-variant">{user.bookings}</td>
                  <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant text-sm">{user.joined}</td>
                  <td className="px-4 py-4 text-right">
                    <button className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-dark-on-surface">
                      <MoreVertical className="w-4 h-4" />
                    </button>
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
