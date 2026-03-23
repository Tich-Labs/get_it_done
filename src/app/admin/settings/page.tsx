'use client'

import { useState } from 'react'
import { Save, Bell, Shield, Palette, Globe, Key, Database } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <AdminLayout title="Settings">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-2">
            {[
              { id: 'general', label: 'General', icon: Globe },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'appearance', label: 'Appearance', icon: Palette },
              { id: 'api', label: 'API Keys', icon: Key },
              { id: 'database', label: 'Database', icon: Database },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'text-zinc-600 dark:text-dark-on-surface-variant hover:bg-zinc-100 dark:hover:bg-dark-surface-container'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'general' && (
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-dark-on-surface mb-6">General Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-dark-on-surface mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Get It Done"
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-dark-on-surface mb-2">
                    Site URL
                  </label>
                  <input
                    type="text"
                    defaultValue="https://getitdone.co.ke"
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-dark-on-surface mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    defaultValue="hello@getitdone.co.ke"
                    className="w-full px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-dark-on-surface mb-2">
                    Maintenance Mode
                  </label>
                  <div className="flex items-center gap-3">
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-200 dark:bg-dark-surface-container transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                    </button>
                    <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Disabled</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end mt-6 pt-6 border-t border-zinc-100 dark:border-dark-outline-variant">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  {saved ? 'Saved!' : 'Save Changes'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-dark-on-surface mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                {[
                  { label: 'New user registrations', description: 'Get notified when someone signs up' },
                  { label: 'New bookings', description: 'Get notified when a booking is made' },
                  { label: 'Payment received', description: 'Get notified when payment is processed' },
                  { label: 'Payout requests', description: 'Get notified when consultant requests payout' },
                  { label: 'System alerts', description: 'Critical system notifications' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-dark-outline-variant last:border-0">
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-dark-on-surface">{item.label}</p>
                      <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">{item.description}</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-dark-on-surface mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-dark-on-surface mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-zinc-600 dark:text-dark-on-surface-variant mb-2">Current Password</label>
                      <input type="password" className="w-full px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface" />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-600 dark:text-dark-on-surface-variant mb-2">New Password</label>
                      <input type="password" className="w-full px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface" />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-600 dark:text-dark-on-surface-variant mb-2">Confirm New Password</label>
                      <input type="password" className="w-full px-4 py-2 border border-zinc-300 dark:border-dark-outline-variant rounded-lg bg-white dark:bg-dark-surface" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-dark-outline-variant">
                  <h3 className="font-medium text-zinc-900 dark:text-dark-on-surface mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-dark-on-surface-variant">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700">Enable 2FA</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-dark-on-surface mb-6">Appearance Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-dark-on-surface mb-3">Theme</h3>
                  <div className="flex gap-4">
                    {['light', 'dark', 'system'].map((theme) => (
                      <button
                        key={theme}
                        className={`px-6 py-3 rounded-lg border-2 transition-colors ${
                          theme === 'light'
                            ? 'border-primary bg-white'
                            : 'border-zinc-200 dark:border-dark-outline-variant bg-white dark:bg-dark-surface'
                        }`}
                      >
                        <span className="text-sm font-medium text-zinc-900 dark:text-dark-on-surface capitalize">{theme}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-dark-on-surface mb-3">Primary Color</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-red-600 ring-2 ring-offset-2 ring-primary" />
                    <button className="w-10 h-10 rounded-full bg-blue-600" />
                    <button className="w-10 h-10 rounded-full bg-green-600" />
                    <button className="w-10 h-10 rounded-full bg-purple-600" />
                    <button className="w-10 h-10 rounded-full bg-zinc-900" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-dark-on-surface mb-6">API Keys</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-zinc-50 dark:bg-dark-surface-container rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-zinc-900 dark:text-dark-on-surface">Production API Key</span>
                    <span className="text-xs text-green-600 font-medium">Active</span>
                  </div>
                  <code className="text-sm text-zinc-500 dark:text-dark-on-surface-variant font-mono">
                    gid_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </code>
                </div>

                <div className="p-4 bg-zinc-50 dark:bg-dark-surface-container rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-zinc-900 dark:text-dark-on-surface">Test API Key</span>
                    <span className="text-xs text-amber-600 font-medium">Test Mode</span>
                  </div>
                  <code className="text-sm text-zinc-500 dark:text-dark-on-surface-variant font-mono">
                    gid_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </code>
                </div>
              </div>

              <button className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-700">
                Generate New Key
              </button>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="bg-white dark:bg-dark-surface rounded-lg border border-zinc-200 dark:border-dark-outline-variant p-6">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-dark-on-surface mb-6">Database Management</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-dark-outline-variant rounded-lg">
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-dark-on-surface">Database Status</p>
                    <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">Connected to Supabase</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full">Healthy</span>
                </div>

                <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-dark-outline-variant rounded-lg">
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-dark-on-surface">Last Backup</p>
                    <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">March 24, 2026 at 2:00 AM</p>
                  </div>
                  <button className="px-4 py-2 bg-zinc-100 dark:bg-dark-surface-container text-zinc-700 dark:text-dark-on-surface rounded-lg hover:bg-zinc-200">
                    Backup Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
