'use client'

import Link from 'next/link'
import { Users, Target, Heart, Zap } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const team = [
  {
    name: 'Naijeria Toweett',
    role: 'Founder & CEO',
    bio: 'Serial entrepreneur with a passion for building tools that empower African businesses.',
  },
  {
    name: 'Tich Labs Team',
    role: 'Product & Engineering',
    bio: 'Building world-class products from Nairobi, Kenya.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-background">
      <NavBar type="auth" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-zinc-50 dark:bg-dark-surface-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black font-headline text-zinc-900 dark:text-dark-on-background mb-6">
            About Get It Done
          </h1>
          <p className="text-xl text-zinc-600 dark:text-dark-on-surface-variant max-w-2xl mx-auto">
            We&apos;re building the operating system for Kenyan consultants. 
            One platform to book, get paid, and grow your business.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline text-zinc-900 dark:text-dark-on-background mb-6">Our Mission</h2>
              <p className="text-zinc-600 dark:text-dark-on-surface-variant mb-4">
                In Kenya, millions of consultants, coaches, and professionals lose hours every week 
                to WhatsApp scheduling chaos and payment chasing.
              </p>
              <p className="text-zinc-600 dark:text-dark-on-surface-variant mb-4">
                Get It Done exists to solve this. We give consultants a professional booking and 
                payment platform that works with M-Pesa - the payment method Kenyan clients already use.
              </p>
              <p className="text-zinc-600 dark:text-dark-on-surface-variant">
                No more back-and-forth messages. No more chasing payments. Just appointments 
                that convert to revenue.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-dark-surface-container rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface">Mission</h3>
                  <p className="text-sm text-zinc-600 dark:text-dark-on-surface-variant">Empower Kenyan consultants to grow</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface">Users</h3>
                  <p className="text-sm text-zinc-600 dark:text-dark-on-surface-variant">Built for Kenyan professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface">Payments</h3>
                  <p className="text-sm text-zinc-600 dark:text-dark-on-surface-variant">M-Pesa native integration</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface">Values</h3>
                  <p className="text-sm text-zinc-600 dark:text-dark-on-surface-variant">Simplicity, trust, growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Tich Labs */}
      <section className="py-20 px-6 bg-zinc-50 dark:bg-dark-surface-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-surface rounded-2xl border border-zinc-200 dark:border-dark-outline-variant p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-black text-white">TL</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-surface mb-2">A Product of Tich Labs</h2>
                <p className="text-zinc-600 dark:text-dark-on-surface-variant mb-4">
                  Get It Done is built and powered by <strong>Tich Labs</strong>, a product company 
                  focused on creating tools that help African businesses thrive.
                </p>
                <p className="text-zinc-600 dark:text-dark-on-surface-variant">
                  Tich Labs is part of <strong>Mama Tech</strong>, dedicated to building technology 
                  solutions that solve real problems for Africans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-headline text-zinc-900 dark:text-dark-on-background mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white dark:bg-dark-surface rounded-2xl border border-zinc-200 dark:border-dark-outline-variant p-6">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-dark-surface-container rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-zinc-600 dark:text-dark-on-surface-variant">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-zinc-600 dark:text-dark-on-surface-variant text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold font-headline mb-4">
            Ready to Get It Done?
          </h2>
          <p className="text-red-100 mb-8">
            Join Kenyan consultants who have transformed their booking and payment workflow.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors"
          >
            Start Free Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
