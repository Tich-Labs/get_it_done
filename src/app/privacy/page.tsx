'use client'

import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar type="auth" />

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black font-headline text-zinc-900 mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 mb-8">Last updated: March 2026</p>

          <div className="prose prose-zinc max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Information We Collect</h2>
              <p className="text-zinc-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a booking, or contact us for support. This includes:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Profile information (photo, bio, services you offer)</li>
                <li>Booking information (dates, times, client details)</li>
                <li>Payment information (processed securely through M-Pesa/Pesapal)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-zinc-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Information Sharing</h2>
              <p className="text-zinc-600 mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Service providers (Pesapal for payment processing)</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Data Security</h2>
              <p className="text-zinc-600">
                We implement appropriate security measures to protect your personal information. 
                Payment data is processed securely through Pesapal and we never store your full 
                payment card details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Your Rights</h2>
              <p className="text-zinc-600">
                You have the right to access, correct, or delete your personal information. 
                Contact us at privacy@getitdone.co.ke to exercise these rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Contact Us</h2>
              <p className="text-zinc-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@getitdone.co.ke" className="text-primary hover:underline">
                  privacy@getitdone.co.ke
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
