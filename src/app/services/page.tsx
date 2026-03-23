'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { 
  Plus,
  Edit2,
  Trash2,
  Save,
  Lightbulb,
  Rocket,
  CheckCircle,
  Zap
} from 'lucide-react'

interface Service {
  id: string
  name: string
  description: string
  duration: string
  price: string
  isFeatured: boolean
  icon: string
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'Strategic High-Growth Consulting',
      description: 'Deep dive into market scaling strategies and operational bottlenecks with executive precision.',
      duration: '90',
      price: '45000',
      isFeatured: true,
      icon: 'psychology'
    },
    {
      id: '2',
      name: 'Performance Audit',
      description: 'Analytical review of current systems and workflow efficiency mapping.',
      duration: '60',
      price: '25000',
      isFeatured: false,
      icon: 'monitoring'
    }
  ])

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    duration: '60',
    price: '',
    icon: 'rocket'
  })

  const icons = [
    { name: 'lightbulb', icon: Lightbulb },
    { name: 'rocket', icon: Rocket },
    { name: 'verified', icon: CheckCircle },
    { name: 'speed', icon: Zap }
  ]

  const handleAddService = () => {
    if (newService.name && newService.price) {
      setServices([
        ...services,
        {
          id: Date.now().toString(),
          ...newService,
          isFeatured: false
        }
      ])
      setNewService({ name: '', description: '', duration: '60', price: '', icon: 'rocket' })
    }
  }

  const handleDeleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Service Management */}
          <div className="flex-1 space-y-10">
            <header>
              <h1 className="font-headline text-5xl font-extrabold tracking-tight text-zinc-900 mb-2">
                My Services & Rate Card
              </h1>
              <p className="text-zinc-500 text-lg">Manage your elite offerings and pricing structures.</p>
            </header>

            {/* Bento Grid of Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-lg p-8 relative overflow-hidden group transition-all duration-300 ring-1 ring-primary/10 shadow-lg shadow-primary/5 hover:shadow-lg"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Rocket className="text-3xl" />
                    </div>
                    <div className="flex gap-2">
                      <button className="text-zinc-400 hover:text-primary transition-colors">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteService(service.id)}
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    {service.isFeatured && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-secondary text-white mb-3">
                        Featured
                      </span>
                    )}
                    <h3 className="font-headline text-2xl font-bold mb-2 text-zinc-900">{service.name}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-zinc-100 pt-6 mt-auto">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">Duration</div>
                      <div className="font-headline text-lg font-bold">{service.duration} Minutes</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-1">Rate</div>
                      <div className="font-headline text-2xl font-black text-primary">KES {parseInt(service.price).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Service CTA */}
              <div 
                className="border-2 border-dashed border-zinc-200 rounded-lg p-8 flex flex-col items-center justify-center text-center group hover:border-primary hover:bg-primary/5 cursor-pointer transition-all min-h-[280px]"
                onClick={handleAddService}
              >
                <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="text-3xl text-secondary" />
                </div>
                <h3 className="font-headline font-bold text-lg text-zinc-900">Define New Service</h3>
                <p className="text-zinc-500 text-sm max-w-[200px] mt-2">Expand your reach by adding a new expert module.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-96 space-y-8">
            {/* Add/Edit Service Panel */}
            <section className="bg-white rounded-lg p-8 border border-zinc-200 shadow-sm">
              <h2 className="font-headline text-xl font-bold mb-6 flex items-center gap-2 text-zinc-900">
                <Plus className="text-secondary w-5 h-5" />
                Configure Service
              </h2>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleAddService(); }}>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Service Name</label>
                  <input
                    type="text"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    placeholder="e.g. Executive Mentorship"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-zinc-900 py-3 px-4"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Description</label>
                  <textarea
                    value={newService.description}
                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    placeholder="Define the impact..."
                    rows={3}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-zinc-900 py-3 px-4"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Duration</label>
                    <select
                      value={newService.duration}
                      onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-zinc-900 py-3 px-4"
                    >
                      <option value="30">30 min</option>
                      <option value="60">60 min</option>
                      <option value="90">90 min</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Price (KES)</label>
                    <input
                      type="number"
                      value={newService.price}
                      onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                      placeholder="0.00"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-zinc-900 py-3 px-4"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Icon</label>
                  <div className="grid grid-cols-4 gap-2">
                    {icons.map((ic) => (
                      <button
                        key={ic.name}
                        type="button"
                        onClick={() => setNewService({ ...newService, icon: ic.name })}
                        className={`p-3 rounded-md transition-all ${
                          newService.icon === ic.name 
                            ? 'bg-primary text-white' 
                            : 'bg-zinc-50 hover:bg-primary/10 text-zinc-600 border border-zinc-200'
                        }`}
                      >
                        <ic.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary-gradient text-white font-bold py-4 rounded-full mt-4 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  <Save className="w-5 h-5" />
                  Save Service
                </button>
              </form>
            </section>

            {/* Live Preview Block */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-500">Live Public Preview</h2>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="bg-white p-6 rounded-lg border border-zinc-200 scale-95 origin-top shadow-sm opacity-90">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary p-0.5">
                    <div className="w-full h-full bg-red-100 rounded-full flex items-center justify-center text-primary font-bold">DO</div>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-zinc-900">David Omondi</h4>
                    <p className="text-[10px] text-zinc-500">Expert Consultant</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-zinc-50 rounded-md">
                    <span className="text-xs font-medium text-zinc-700">Strategic Consulting</span>
                    <span className="text-xs font-bold text-secondary">KES 45k</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-zinc-50 rounded-md">
                    <span className="text-xs font-medium text-zinc-700">Performance Audit</span>
                    <span className="text-xs font-bold text-secondary">KES 25k</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <div className="w-full h-8 btn-primary-gradient rounded-full" />
                </div>
              </div>
              <p className="text-center italic text-xs text-zinc-500 font-body">
                Changes reflect immediately on your public URL.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
