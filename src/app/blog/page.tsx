'use client'

import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const posts = [
  {
    slug: 'how-m-pesa-changed-payments',
    title: 'How M-Pesa Changed the Game for Kenyan Consultants',
    excerpt: 'M-Pesa has revolutionized how Kenyans transact. Here&apos;s how consultants can leverage it for seamless bookings.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    image: true,
  },
  {
    slug: 'stop-whatsapp-scheduling',
    title: 'Why WhatsApp Scheduling is Killing Your Productivity',
    excerpt: 'Lost hours, missed appointments, forgotten payments. It&apos;s time to professionalize your booking process.',
    date: 'March 10, 2026',
    readTime: '4 min read',
    image: true,
  },
  {
    slug: 'pricing-your-consulting-services',
    title: 'How to Price Your Consulting Services in Kenya',
    excerpt: 'Setting the right price for your expertise is crucial. Here are tips for Kenyan consultants.',
    date: 'March 5, 2026',
    readTime: '6 min read',
    image: true,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-background">
      <NavBar type="auth" />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-zinc-50 dark:bg-dark-surface-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black font-headline text-zinc-900 dark:text-dark-on-background mb-4">Blog</h1>
          <p className="text-xl text-zinc-600 dark:text-dark-on-surface-variant">
            Tips, guides, and insights for Kenyan consultants
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.map((post) => (
            <article key={post.slug} className="mb-8">
              <Link href={`/blog/${post.slug}`} className="block bg-white dark:bg-dark-surface rounded-2xl border border-zinc-200 dark:border-dark-outline-variant overflow-hidden hover:shadow-lg transition-all group">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-zinc-100 dark:bg-dark-surface-container h-48 md:h-auto flex items-center justify-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-black text-primary">GI</span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-dark-on-surface-variant mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-dark-on-surface mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-dark-on-surface-variant">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-primary font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-zinc-50 dark:bg-dark-surface-container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-dark-on-background mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-zinc-600 dark:text-dark-on-surface-variant mb-6">
            Get the latest tips and updates for Kenyan consultants delivered to your inbox.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-zinc-300 dark:border-dark-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white dark:bg-dark-surface"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
