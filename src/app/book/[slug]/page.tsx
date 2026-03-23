'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { 
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Shield,
  User,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react'

export default function BookingPage() {
  const params = useParams()
  const slug = params.slug as string
  const consultantName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [clientDetails, setClientDetails] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const services = [
    { 
      id: '1', 
      name: 'Strategy Deep-Dive', 
      duration: '60', 
      price: '12,500',
      selected: true 
    },
    { 
      id: '2', 
      name: 'Rapid Execution Call', 
      duration: '30', 
      price: '7,000',
      selected: false 
    }
  ]

  const selectedService = services.find(s => s.selected) || services[0]

  const currentMonth = new Date()
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const timeSlots = ['09:00', '10:30', '13:00', '14:30', '16:00']

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const canProceed = () => {
    if (step === 2) return selectedDate && selectedTime
    if (step === 3) return clientDetails.name && clientDetails.email && clientDetails.phone
    return true
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-12 max-w-2xl mx-auto">
          {['Service', 'Time', 'Details', 'Review'].map((label, index) => {
            const stepNum = index + 1
            const isComplete = step > stepNum
            const isCurrent = step === stepNum
            return (
              <div key={label} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    isComplete 
                      ? 'bg-primary text-white' 
                      : isCurrent 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                        : 'bg-zinc-200 text-zinc-400'
                  }`}
                >
                  {isComplete ? <CheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                <span className={`text-xs font-bold uppercase tracking-tight ${isCurrent ? 'text-primary' : 'text-zinc-400'}`}>
                  {label}
                </span>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Service Summary */}
            <div className="p-6 bg-white rounded-lg border-l-4 border-primary shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-red-200 flex items-center justify-center text-primary font-bold text-xl">DO</div>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">You&apos;re booking</p>
                  <h2 className="text-2xl font-extrabold font-headline text-zinc-900">{selectedService.name}</h2>
                  <p className="text-primary font-bold">{selectedService.duration} Minutes • KES {selectedService.price}</p>
                </div>
              </div>
            </div>

            {/* Step 2: Date & Time */}
            {step >= 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold font-headline flex items-center gap-2 text-zinc-900">
                      <Calendar className="text-primary w-5 h-5" />
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h3>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-primary/10 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-zinc-600" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-primary/10 transition-colors">
                        <ChevronRight className="w-5 h-5 text-zinc-600" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-4 text-center mb-4">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                      <div key={day} className="text-zinc-400 text-xs font-bold uppercase">{day}</div>
                    ))}
                    {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map((_, i) => (
                      <div key={`empty-${i}`} className="py-3" />
                    ))}
                    {[...Array(daysInMonth)].map((_, i) => {
                      const day = i + 1
                      const isPast = day < new Date().getDate()
                      const isSelected = selectedDate === `${currentMonth.getMonth() + 1}/${day}`
                      return (
                        <button
                          key={day}
                          onClick={() => !isPast && setSelectedDate(`${currentMonth.getMonth() + 1}/${day}`)}
                          disabled={isPast}
                          className={`
                            py-3 font-medium transition-all
                            ${isPast ? 'text-zinc-200 cursor-not-allowed' : isSelected 
                              ? 'bg-primary text-white font-bold' 
                              : 'text-zinc-700 hover:bg-primary/10'
                            }
                          `}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Picker */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200 flex flex-col">
                  <h3 className="text-xl font-bold font-headline flex items-center gap-2 mb-8 text-zinc-900">
                    <Clock className="text-primary w-5 h-5" />
                    Available Slots <span className="text-xs font-normal text-zinc-500">(EAT)</span>
                  </h3>
                  <div className="space-y-3 flex-1">
                    {timeSlots.map((time) => {
                      const isReserved = time === '16:00'
                      const isSelected = selectedTime === time
                      return (
                        <button
                          key={time}
                          onClick={() => !isReserved && setSelectedTime(time)}
                          disabled={isReserved}
                          className={`
                            w-full py-4 px-6 rounded-full border transition-all text-left flex items-center justify-between
                            ${isReserved 
                              ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed opacity-60' 
                              : isSelected 
                                ? 'bg-primary text-white border-primary font-bold shadow-lg' 
                                : 'border-zinc-200 hover:border-primary hover:bg-primary/5 text-zinc-700'
                            }
                          `}
                        >
                          <span className="font-bold">{time}</span>
                          {isReserved && <span className="text-xs italic">Reserved</span>}
                          {isSelected && <CheckCircle className="w-5 h-5" />}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Client Details */}
            {step >= 3 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200">
                <h3 className="text-xl font-bold font-headline mb-6 text-zinc-900">Your Details</h3>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <User className="w-4 h-4" /> Full Name
                    </label>
                    <input
                      type="text"
                      value={clientDetails.name}
                      onChange={(e) => setClientDetails({ ...clientDetails, name: e.target.value })}
                      placeholder="John Kamau"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary px-4 py-3"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <Mail className="w-4 h-4" /> Email Address
                    </label>
                    <input
                      type="email"
                      value={clientDetails.email}
                      onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary px-4 py-3"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      value={clientDetails.phone}
                      onChange={(e) => setClientDetails({ ...clientDetails, phone: e.target.value })}
                      placeholder="+254 712 345 678"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary px-4 py-3"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" /> Notes (Optional)
                    </label>
                    <textarea
                      value={clientDetails.notes}
                      onChange={(e) => setClientDetails({ ...clientDetails, notes: e.target.value })}
                      placeholder="Any specific topics you'd like to discuss..."
                      rows={3}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary px-4 py-3"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="text-zinc-500 hover:text-zinc-900 font-medium flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
              )}
              <div className="ml-auto">
                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`btn-primary-gradient text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all ${
                      canProceed() ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    Next: {step === 1 ? 'Select Time' : step === 2 ? 'Enter Details' : 'Review'} <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button className="btn-primary-gradient text-white px-12 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/30">
                    Confirm & Pay <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-zinc-200 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <h3 className="text-lg font-bold font-headline mb-6 border-b border-zinc-100 pb-4">Booking Summary</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Calendar className="text-zinc-400 w-5 h-5 mt-1" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Service</p>
                      <p className="font-bold text-zinc-900">{selectedService.name}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Calendar className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Date</p>
                      <p className="font-bold text-primary">{selectedDate || 'Select a date'}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-tighter">Time</p>
                      <p className="font-bold text-primary">{selectedTime || 'Select a time'}</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-10 pt-6 border-t border-zinc-100">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-zinc-500 font-medium">Total Investment</span>
                    <span className="text-2xl font-black font-headline text-zinc-900">KES {selectedService.price}</span>
                  </div>
                  {step === 4 && (
                    <button className="w-full btn-primary-gradient text-white py-5 rounded-full font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                      Confirm & Pay
                    </button>
                  )}
                  <p className="text-center mt-4 text-xs text-zinc-500 italic">
                    {step < 4 ? "You won't be charged yet." : "Redirecting to M-Pesa payment..."}
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-6 bg-zinc-50 rounded-lg flex items-center gap-4 text-sm text-zinc-500">
                <Shield className="text-primary w-6 h-6" />
                <p>Secure booking environment with real-time confirmation.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
