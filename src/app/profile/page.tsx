'use client'

import { useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Save,
  Camera,
  Globe,
  Clock
} from 'lucide-react'

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'David Omondi',
    email: 'david@nexusconsulting.co.ke',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    bio: 'Strategic business architect helping scale-ups navigate the East African market ecosystem. Specializing in operational velocity and high-impact digital transformation frameworks.',
    tagline: 'Consulting Excellence',
    timezone: 'Africa/Nairobi'
  })

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight text-zinc-900 mb-2">
            Profile Settings
          </h1>
          <p className="text-zinc-500 text-lg">Manage your public profile and preferences.</p>
        </header>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                <div className="w-full h-full bg-red-100 flex items-center justify-center text-4xl font-bold text-primary">DO</div>
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dim transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-headline font-bold text-zinc-900">{profile.name}</h2>
              <p className="text-primary italic text-lg mt-1">{profile.tagline}</p>
              <p className="text-zinc-500 mt-2">getitdone.co.ke/david-omondi</p>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <form className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Location
              </label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Professional Tagline</label>
            <input
              type="text"
              value={profile.tagline}
              onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Bio</label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              rows={4}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Public URL
              </label>
              <div className="flex">
                <span className="bg-zinc-100 border border-r-0 border-zinc-200 rounded-l-lg px-4 py-3 text-zinc-500 text-sm">
                  getitdone.co.ke/
                </span>
                <input
                  type="text"
                  defaultValue="david-omondi"
                  className="flex-1 bg-zinc-50 border border-zinc-200 rounded-r-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Timezone
              </label>
              <select
                value={profile.timezone}
                onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="Africa/Nairobi">East Africa Time (EAT, UTC+3)</option>
                <option value="Africa/Lagos">West Africa Time (WAT, UTC+1)</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-100">
            <button
              type="button"
              className="btn-primary-gradient text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}
