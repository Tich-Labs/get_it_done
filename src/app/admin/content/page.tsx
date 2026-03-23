'use client'

import { useState } from 'react'
import { Plus, Edit2, Trash2, Eye, Globe, FileText, Bell, Mail } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const pages = [
  { id: 1, title: 'Homepage', slug: '/', status: 'Published', lastUpdated: 'Mar 20, 2026' },
  { id: 2, title: 'About Us', slug: '/about', status: 'Published', lastUpdated: 'Mar 18, 2026' },
  { id: 3, title: 'Contact', slug: '/contact', status: 'Published', lastUpdated: 'Mar 15, 2026' },
  { id: 4, title: 'Blog', slug: '/blog', status: 'Published', lastUpdated: 'Mar 10, 2026' },
  { id: 5, title: 'Privacy Policy', slug: '/privacy', status: 'Published', lastUpdated: 'Mar 1, 2026' },
  { id: 6, title: 'Terms of Service', slug: '/terms', status: 'Published', lastUpdated: 'Mar 1, 2026' },
]

const blogPosts = [
  { id: 1, title: 'How M-Pesa Changed the Game for Kenyan Consultants', status: 'Published', date: 'Mar 15, 2026', views: 1245 },
  { id: 2, title: 'Why WhatsApp Scheduling is Killing Your Productivity', status: 'Published', date: 'Mar 10, 2026', views: 892 },
  { id: 3, title: 'How to Price Your Consulting Services in Kenya', status: 'Draft', date: 'Mar 5, 2026', views: 0 },
]

const announcements = [
  { id: 1, title: 'New M-Pesa Integration Live', sent: 'Mar 20, 2026', recipients: 'All Users' },
  { id: 2, title: 'Enterprise Plan Launch', sent: 'Mar 15, 2026', recipients: 'Pro Users' },
]

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState('pages')

  return (
    <AdminLayout title="Content Management">
      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-1 w-fit">
        <button
          onClick={() => setActiveTab('pages')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'pages'
              ? 'bg-primary text-white'
              : 'text-zinc-600 dark:text-dark-on-surface-variant hover:bg-zinc-100 dark:hover:bg-dark-surface-container'
          }`}
        >
          <Globe className="w-4 h-4" />
          Pages
        </button>
        <button
          onClick={() => setActiveTab('blog')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'blog'
              ? 'bg-primary text-white'
              : 'text-zinc-600 dark:text-dark-on-surface-variant hover:bg-zinc-100 dark:hover:bg-dark-surface-container'
          }`}
        >
          <FileText className="w-4 h-4" />
          Blog Posts
        </button>
        <button
          onClick={() => setActiveTab('announcements')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'announcements'
              ? 'bg-primary text-white'
              : 'text-zinc-600 dark:text-dark-on-surface-variant hover:bg-zinc-100 dark:hover:bg-dark-surface-container'
          }`}
        >
          <Bell className="w-4 h-4" />
          Announcements
        </button>
      </div>

      {/* Pages Tab */}
      {activeTab === 'pages' && (
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 dark:bg-dark-surface-container">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Slug</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Last Updated</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
                {pages.map((page) => (
                  <tr key={page.id} className="hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
                    <td className="px-4 py-4 font-medium text-zinc-900 dark:text-dark-on-surface">{page.title}</td>
                    <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant font-mono text-sm">{page.slug}</td>
                    <td className="px-4 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                        {page.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant text-sm">{page.lastUpdated}</td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-zinc-400 hover:text-primary" title="Preview">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-zinc-400 hover:text-primary" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Blog Tab */}
      {activeTab === 'blog' && (
        <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
          <div className="flex justify-end px-4 py-3 border-b border-zinc-100 dark:border-dark-outline-variant">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700">
              <Plus className="w-4 h-4" />
              New Post
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 dark:bg-dark-surface-container">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Views</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
                {blogPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
                    <td className="px-4 py-4 font-medium text-zinc-900 dark:text-dark-on-surface">{post.title}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        post.status === 'Published'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant text-sm">{post.date}</td>
                    <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant">{post.views.toLocaleString()}</td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-zinc-400 hover:text-primary" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-zinc-400 hover:text-red-600" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Announcements Tab */}
      {activeTab === 'announcements' && (
        <div>
          <div className="flex justify-end mb-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700">
              <Mail className="w-4 h-4" />
              Send Announcement
            </button>
          </div>
          <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-50 dark:bg-dark-surface-container">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Sent Date</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Recipients</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500 dark:text-dark-on-surface-variant uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-dark-outline-variant">
                  {announcements.map((announcement) => (
                    <tr key={announcement.id} className="hover:bg-zinc-50 dark:hover:bg-dark-surface-container">
                      <td className="px-4 py-4 font-medium text-zinc-900 dark:text-dark-on-surface">{announcement.title}</td>
                      <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant text-sm">{announcement.sent}</td>
                      <td className="px-4 py-4 text-zinc-500 dark:text-dark-on-surface-variant">{announcement.recipients}</td>
                      <td className="px-4 py-4 text-right">
                        <button className="p-2 text-zinc-400 hover:text-primary" title="View">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
