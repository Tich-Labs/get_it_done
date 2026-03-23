'use client'

import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar type="auth" />

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black font-headline text-zinc-900 mb-4">Terms of Service</h1>
          <p className="text-zinc-500 mb-8">Last updated: March 2026</p>

          <div className="prose prose-zinc max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-600">
                By accessing and using Get It Done, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Description of Service</h2>
              <p className="text-zinc-600">
                Get It Done provides a booking and payment platform for Kenyan consultants. 
                Our platform allows consultants to create profiles, list services, manage availability, 
                and receive bookings with M-Pesa payment processing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. User Accounts</h2>
              <p className="text-zinc-600 mb-4">To use our services, you must:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Notify us of any unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Consultants Responsibilities</h2>
              <p className="text-zinc-600 mb-4">As a consultant using our platform, you agree to:</p>
              <ul className="list-disc pl-6 text-zinc-600 space-y-2">
                <li>Provide accurate service descriptions and pricing</li>
                <li>Honor all bookings made through the platform</li>
                <li>Maintain appropriate professional qualifications</li>
                <li>Comply with all applicable Kenyan laws and regulations</li>
                <li>Not engage in fraudulent or illegal activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Payment Terms</h2>
              <p className="text-zinc-600">
                Payments are processed through M-Pesa via Pesapal. Transaction fees apply as 
                specified at the time of booking. Refunds are subject to individual consultant 
                policies and our refund policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-zinc-600">
                Get It Done is not responsible for the services provided by consultants. 
                We do not guarantee the quality, safety, or legality of any services. 
                Any disputes should be resolved directly between the consultant and client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Pricing Changes</h2>
              <p className="text-zinc-600">
                We reserve the right to change our pricing at any time. Changes will be 
                communicated via email and will take effect at the start of the next billing cycle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Termination</h2>
              <p className="text-zinc-600">
                We may terminate or suspend your account at any time for violations of these 
                terms or for any other reason at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">9. Contact</h2>
              <p className="text-zinc-600">
                Questions about these Terms? Contact us at{' '}
                <a href="mailto:legal@getitdone.co.ke" className="text-primary hover:underline">
                  legal@getitdone.co.ke
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
