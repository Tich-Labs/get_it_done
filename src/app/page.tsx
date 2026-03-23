'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Calendar,
  CreditCard,
  Smartphone,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Zap,
  Mail
} from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md border-b border-zinc-100 dark:border-dark-outline-variant/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Get It Done.png" alt="Logo" width={192} height={192} className="w-24 h-24 rounded-md" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium">Features</a>
              <a href="#how-it-works" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium">How It Works</a>
              <a href="#pricing" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium">Pricing</a>
              <a href="#testimonials" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium">Reviews</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {/* <ThemeToggle /> */}
              <Link href="/auth/login" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium">
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-all"
              >
                Get Started Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-surface border-t border-zinc-100 dark:border-dark-outline-variant/50 px-6 py-4 space-y-4">
            <a href="#features" className="block text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium py-2">Features</a>
            <a href="#how-it-works" className="block text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium py-2">How It Works</a>
            <a href="#pricing" className="block text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium py-2">Pricing</a>
            <a href="#testimonials" className="block text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium py-2">Reviews</a>
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <Link href="/auth/login" className="block text-center text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary font-medium py-2">
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="block text-center bg-primary text-white px-6 py-3 rounded-full font-semibold"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-white dark:bg-dark-bg">
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
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">POPULAR</span>
                  </div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-dark-on-bg mb-2">Career Coaching Session</h4>
                  <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant mb-4">90-minute deep dive into your career goals</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">60 min</span>
                    <span className="font-bold text-xl text-primary">KES 5,000</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-dark-surface p-6 rounded-xl border border-zinc-200 dark:border-dark-outline hover:border-primary/30 transition-colors cursor-pointer">
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-dark-on-bg mb-2">Quick Strategy Call</h4>
                  <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant mb-4">30-minute focused problem solving</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">30 min</span>
                    <span className="font-bold text-xl text-zinc-900 dark:text-dark-on-bg">KES 2,500</span>
                  </div>
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

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-dark-surface text-zinc-400 dark:text-dark-on-surface-variant py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/Get It Done.png" alt="Logo" width={32} height={32} className="w-8 h-8 rounded-md mb-4" />
              <p className="text-sm">Booking & payment platform for Kenyan consultants.</p>
            </div>
            <div>
              <h4 className="text-white dark:text-dark-on-bg font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white dark:hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white dark:hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="/demo" className="hover:text-white dark:hover:text-primary transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white dark:text-dark-on-bg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white dark:hover:text-primary transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-white dark:hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/contact" className="hover:text-white dark:hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white dark:text-dark-on-bg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="hover:text-white dark:hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white dark:hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 dark:border-dark-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Get It Done</p>
            <p className="text-sm text-zinc-500 dark:text-dark-on-surface-variant">A product of <span className="font-semibold text-primary">Tich Labs</span> — powered by <span className="font-semibold text-primary">Mama Tech</span></p>
            <a href="mailto:hello@getitdone.co.ke" className="hover:text-white dark:hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
