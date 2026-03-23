'use client'

import Link from 'next/link'
import { 
  Calendar,
  CreditCard,
  Smartphone,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
} from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function LandingPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Clients book time slots that work for everyone. No more WhatsApp back-and-forth.'
    },
    {
      icon: CreditCard,
      title: 'Instant M-Pesa Payments',
      description: 'Get paid before the session starts. No chasing payments after.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Beautiful on any phone. Your clients don\'t need an app or account.'
    },
    {
      icon: Clock,
      title: 'Automatic Reminders',
      description: 'SMS and email reminders reduce no-shows by up to 60%.'
    },
    {
      icon: Users,
      title: 'Professional Branding',
      description: 'A beautiful profile that shows you mean business.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'See your booking trends, revenue, and popular services.'
    }
  ]

  const testimonials = [
    {
      name: 'Rachel Wanjiku',
      role: 'Career Coach, Kilifi',
      quote: 'I finally have time for my kids on Friday afternoons. Get It Done changed how I run my business.',
      avatar: 'RW'
    },
    {
      name: 'James Ochieng',
      role: 'Brand Consultant, Nairobi',
      quote: 'Zero payment delays since I started using Get It Done. My clients pay before they arrive.',
      avatar: 'JO'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      <NavBar type="public" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-4 h-4" />
            Built for Kenyan Consultants
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-headline text-zinc-900 dark:text-dark-on-bg leading-tight mb-6">
            Stop Managing Bookings.<br />
            <span className="text-primary">Start Getting Paid.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-dark-on-surface-variant max-w-2xl mx-auto mb-10">
            One link for your clients to book and pay. No more WhatsApp chaos. No more chasing M-Pesa. Just appointments that convert to revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/auth/signup" 
              className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/demo" 
              className="w-full sm:w-auto bg-white dark:bg-dark-surface text-zinc-700 dark:text-dark-on-bg px-10 py-4 rounded-full font-bold text-lg border border-zinc-200 dark:border-dark-outline hover:border-zinc-300 transition-all"
            >
              See Demo
            </Link>
          </div>

          <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">
            30-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Hero Image/Preview */}
        <div className="max-w-5xl mx-auto mt-16 px-4">
          <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-2xl border border-zinc-200 dark:border-dark-outline overflow-hidden">
            <div className="bg-zinc-100 dark:bg-dark-surface-high px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white dark:bg-dark-surface rounded-lg px-4 py-1.5 text-sm text-zinc-400 ml-4">
                getitdone.co.ke/rachel
              </div>
            </div>
            <div className="p-8 bg-zinc-50 dark:bg-dark-surface-high">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-white">
                  RW
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-bg">Rachel Wanjiku</h3>
                  <p className="text-zinc-500 dark:text-dark-on-surface-variant">Career Coach • Nairobi</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-dark-surface p-6 rounded-xl border border-zinc-200 dark:border-dark-outline hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-zinc-500 dark:text-dark-on-surface-variant">60 min</span>
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-full font-bold">POPULAR</span>
                  </div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-dark-on-bg mb-2">Career Coaching Session</h4>
                  <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant mb-4">Deep dive into your career goals and create an action plan</p>
                  <span className="font-bold text-xl text-primary">KES 5,000</span>
                </div>
                <div className="bg-white dark:bg-dark-surface p-6 rounded-xl border border-zinc-200 dark:border-dark-outline hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-zinc-500 dark:text-dark-on-surface-variant">30 min</span>
                  </div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-dark-on-bg mb-2">Quick Strategy Call</h4>
                  <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant mb-4">Focused problem-solving for urgent challenges</p>
                  <span className="font-bold text-xl text-zinc-900 dark:text-dark-on-bg">KES 2,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-zinc-900 dark:text-dark-on-bg mb-4">
              Everything You Need to Get It Done
            </h2>
            <p className="text-xl text-zinc-600 dark:text-dark-on-surface-variant max-w-2xl mx-auto">
              A complete booking and payment system built specifically for Kenyan consultants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-zinc-200 dark:border-dark-outline hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-dark-on-bg mb-3">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-dark-on-surface-variant">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-zinc-50 dark:bg-dark-surface-high">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-zinc-900 dark:text-dark-on-bg mb-4">
              Up and Running in 5 Minutes
            </h2>
            <p className="text-xl text-zinc-600 dark:text-dark-on-surface-variant">
              No technical skills needed. Just sign up and share your link.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-dark-on-bg mb-3">Create Your Profile</h3>
              <p className="text-zinc-600 dark:text-dark-on-surface-variant">Sign up, add your photo, bio, and services. Set your prices in KES.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-dark-on-bg mb-3">Share Your Link</h3>
              <p className="text-zinc-600 dark:text-dark-on-surface-variant">Send your unique booking link via WhatsApp, email, or social media.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-dark-on-bg mb-3">Get Booked & Paid</h3>
              <p className="text-zinc-600 dark:text-dark-on-surface-variant">Clients book and pay instantly. You get notified. Show up and deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-zinc-900 dark:text-dark-on-bg mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zinc-600 dark:text-dark-on-surface-variant">
              Price in KES. Built for Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-white dark:bg-dark-surface rounded-2xl border-2 border-zinc-200 dark:border-dark-outline p-8 hover:border-zinc-300 transition-colors flex flex-col h-full text-center">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-bg mb-2">Free</h3>
                <p className="text-zinc-500 dark:text-dark-on-surface-variant mb-6">For consultants getting started.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-zinc-900 dark:text-dark-on-bg">KES 0</span>
                  <span className="text-zinc-500 dark:text-dark-on-surface-variant">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  {['Branded booking page', '2 services', 'M-Pesa payments', 'Email notifications', 'Basic dashboard', '10 bookings/month'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-600 dark:text-dark-on-surface-variant">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href="/auth/signup" 
                className="block text-center bg-zinc-100 dark:bg-dark-surface-high text-zinc-900 dark:text-dark-on-bg px-6 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors mt-auto"
              >
                Get Started Free
              </Link>
            </div>

            {/* Standard */}
            <div className="bg-white dark:bg-dark-surface rounded-2xl border-2 border-primary p-8 flex flex-col h-full text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-bg mb-2">Standard</h3>
                <p className="text-zinc-500 dark:text-dark-on-surface-variant mb-6">For growing consultants.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-zinc-900 dark:text-dark-on-bg">KES 500</span>
                  <span className="text-zinc-500 dark:text-dark-on-surface-variant">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  {['Everything in Free', 'Unlimited services', 'Unlimited bookings', 'Calendar management', 'Booking reminders', 'Priority support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-600 dark:text-dark-on-surface-variant">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href="/auth/signup" 
                className="block text-center bg-primary text-white px-6 py-4 rounded-full font-bold hover:bg-red-700 transition-colors mt-auto"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white dark:bg-dark-surface rounded-2xl border-2 border-zinc-200 dark:border-dark-outline p-8 hover:border-zinc-300 transition-colors flex flex-col h-full text-center">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-bg mb-2">Premium</h3>
                <p className="text-zinc-500 dark:text-dark-on-surface-variant mb-6">For established consultants ready to scale.</p>
                <div className="mb-8">
                  <span className="text-4xl font-black text-zinc-900 dark:text-dark-on-bg">KES 800</span>
                  <span className="text-zinc-500 dark:text-dark-on-surface-variant">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  {['Everything in Standard', 'WhatsApp reminders', 'SMS notifications', 'Advanced analytics', 'Custom booking rules', 'Custom domain'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-600 dark:text-dark-on-surface-variant">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href="/auth/signup" 
                className="block text-center bg-zinc-100 dark:bg-dark-surface-high text-zinc-900 dark:text-dark-on-bg px-6 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors mt-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-zinc-50 dark:bg-dark-surface-high">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-zinc-900 dark:text-dark-on-bg mb-4">
              Trusted by Kenyan Consultants
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-dark-surface p-8 rounded-2xl border border-zinc-200 dark:border-dark-outline">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-zinc-700 dark:text-dark-on-surface-variant text-lg mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 dark:text-dark-on-bg">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
            Ready to Stop the Chaos?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join 70+ Kenyan consultants who have reclaimed their time and got paid on time.
          </p>
          <Link 
            href="/auth/signup" 
            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-red-200 text-sm">
            30-day free trial. No credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
