'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsLoading(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark-background">
        <NavBar type="auth" />
        <div className="pt-32 flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-background mb-2">Message Sent!</h1>
            <p className="text-zinc-600 dark:text-dark-on-surface-variant mb-6">
              Thank you for contacting us. We&apos;ll get back to you within 24 hours.
            </p>
            <Link href="/" className="text-primary hover:underline font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-background">
      <NavBar type="auth" />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black font-headline text-zinc-900 dark:text-dark-on-background mb-4">Get in Touch</h1>
            <p className="text-xl text-zinc-600 dark:text-dark-on-surface-variant max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-dark-surface-container p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface mb-1">Email</h3>
                <a href="mailto:hello@getitdone.co.ke" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary">
                  hello@getitdone.co.ke
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-dark-surface-container p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface mb-1">Phone</h3>
                <a href="tel:+254700000000" className="text-zinc-600 dark:text-dark-on-surface-variant hover:text-primary">
                  +254 700 000 000
                </a>
              </div>

              <div className="bg-zinc-50 dark:bg-dark-surface-container p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface mb-1">Location</h3>
                <p className="text-zinc-600 dark:text-dark-on-surface-variant">Nairobi, Kenya</p>
              </div>

              <div className="bg-zinc-50 dark:bg-dark-surface-container p-6 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-dark-on-surface mb-1">Business Hours</h3>
                <p className="text-zinc-600 dark:text-dark-on-surface-variant">Mon - Fri: 9am - 6pm EAT</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-surface rounded-2xl border border-zinc-200 dark:border-dark-outline-variant p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 dark:text-dark-on-surface mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-dark-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white dark:bg-dark-surface-container"
                      placeholder="Jane Wanjiku"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-dark-on-surface mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-dark-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white dark:bg-dark-surface-container"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-semibold text-zinc-700 dark:text-dark-on-surface mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-dark-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white dark:bg-dark-surface-container"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 dark:text-dark-on-surface mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-dark-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none bg-white dark:bg-dark-surface-container"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
