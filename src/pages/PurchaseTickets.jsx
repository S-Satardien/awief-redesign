import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Sparkles, Ticket, Calendar, MapPin, CheckCircle2, Star, ShieldCheck, CreditCard, ArrowRight, Network, Briefcase, Award, ArrowUpRight, X, ShoppingCart, ShoppingBag, ChevronRight, Zap } from 'lucide-react'

export default function PurchaseTickets() {
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const tickets = [
    { 
      name: "Virtual Pass", 
      price: "$50", 
      features: ["Live stream access to all main stage keynotes", "Access to official AWIEF networking app", "On-demand recordings for 30 days post-event"],
      popular: false,
      color: "bg-cream text-charcoal border-charcoal/5"
    },
    { 
      name: "General Delegate", 
      price: "$150", 
      features: ["Access to all keynotes, masterclasses, and workshops", "Entrance to the AWIEF Exhibition Hall", "Catered networking lunches and coffee breaks", "B2B matchmaking and investor pitch sessions"],
      popular: true,
      color: "bg-charcoal text-white border-brand/30"
    },
    { 
      name: "VIP Delegate", 
      price: "$250", 
      features: ["Everything in General Delegate", "Ticket to AWIEF Awards Gala Dinner", "Exclusive access to VIP & Speakers Lounge", "Priority seating at all sessions"],
      popular: false,
      color: "bg-cream text-charcoal border-charcoal/5"
    }
  ]

  const handleSelect = (ticket) => {
    setSelectedTicket(ticket)
    setShowCart(true)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Editorial Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
          Seat
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/5 backdrop-blur mb-8 relative z-10">
          <Ticket size={14} className="text-brand"/>
          <span className="text-brand text-[11px] font-black tracking-[0.2em] uppercase">Official Registration</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
          Secure Your <br/> <span className="text-brand">AWIEF 2026</span> Pass
        </h1>
        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto font-medium leading-relaxed relative z-10 mb-12">
          Join 1,500+ female founders, global investors, and policymakers in Cape Town. Choose the pass that fits your journey.
        </p>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="pb-32 px-6 md:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-stretch gap-8">
            {tickets.map((pkg, i) => (
              <div key={i} className={`col-span-12 lg:col-span-4 p-12 rounded-[40px] border ${pkg.color} flex flex-col hover:border-brand transition-editorial relative group ${pkg.popular ? 'lg:-translate-y-6 shadow-[0_50px_100px_-20px_rgba(127,61,89,0.3)]' : 'shadow-xl'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-brand text-white px-8 py-3 font-black text-[10px] tracking-widest uppercase rounded-bl-3xl">
                    Most Popular
                  </div>
                )}
                <div className="mb-8 mt-4">
                  <h3 className="text-2xl font-black uppercase font-heading mb-2">{pkg.name}</h3>
                </div>
                <div className="mb-12">
                  <span className="text-6xl font-black">{pkg.price}</span>
                  <span className="opacity-40 font-black tracking-widest text-xs uppercase ml-4">USD</span>
                </div>
                <ul className="space-y-6 mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 size={18} className="text-brand shrink-0" />
                      <span className="text-sm font-medium opacity-70 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleSelect(pkg)}
                  className={`w-full py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-editorial shadow-2xl ${pkg.popular ? 'bg-brand text-white hover:bg-brand-dark' : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'}`}
                >
                  SELECT {pkg.name.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CartFlow Popup - NEW INTERACTIVE SYSTEM */}
      {showCart && selectedTicket && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center md:p-6 overflow-hidden">
           <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-md animate-in fade-in duration-500" onClick={() => setShowCart(false)}></div>
           
           <div className="bg-white w-full max-w-4xl md:rounded-[48px] rounded-t-[48px] relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in slide-in-from-bottom-24 duration-700">
              <div className="grid md:grid-cols-12">
                 {/* Left: Summary Visual */}
                 <div className="md:col-span-5 bg-charcoal p-12 md:p-16 text-white relative">
                    <div className="absolute top-0 left-0 p-12 text-white/5 text-[15rem] font-black leading-none select-none pointer-events-none">
                       {selectedTicket.name[0]}
                    </div>
                    <button onClick={() => setShowCart(false)} className="md:hidden absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                       <X size={20} />
                    </button>
                    
                    <div className="relative z-10">
                       <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-8 shadow-xl">
                          <ShoppingBag size={32} />
                       </div>
                       <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4 italic">Selection Summary</p>
                       <h3 className="text-3xl md:text-4xl font-black uppercase font-heading leading-tight mb-8">Ready to <br/> <span className="text-brand">Secure</span> Your Seat?</h3>
                       
                       <div className="space-y-6 pt-8 border-t border-white/10">
                          <div className="flex justify-between items-center">
                             <span className="text-sm font-medium opacity-40">Pass Type</span>
                             <span className="text-sm font-black uppercase">{selectedTicket.name}</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-sm font-medium opacity-40">Total Amount</span>
                             <span className="text-3xl font-black text-brand">{selectedTicket.price}</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right: Checkout Next Steps */}
                 <div className="md:col-span-7 p-12 md:p-16 bg-white relative">
                    <button onClick={() => setShowCart(false)} className="hidden md:flex absolute top-10 right-10 w-12 h-12 rounded-full bg-cream items-center justify-center hover:bg-brand hover:text-white transition-editorial">
                       <X size={24} />
                    </button>

                    <div className="max-w-md">
                       <h4 className="text-2xl font-black uppercase font-heading mb-10 flex items-center gap-3">
                          <Zap size={24} className="text-brand" /> Checkout Flow
                       </h4>
                       
                       <div className="space-y-8 mb-12">
                          {[
                            { t: "Personal Details", d: "Brief registration for your badge and networking app.", s: "completed" },
                            { t: "Payment Options", d: "Securely pay via Card, EFT, or Bank Transfer.", s: "active" },
                            { t: "Final Confirmation", d: "Your digital pass will be sent to your email.", s: "pending" }
                          ].map((step, i) => (
                            <div key={i} className="flex gap-6 items-start">
                               <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] font-black ${
                                 step.s === 'completed' ? 'bg-brand border-brand text-white' : 
                                 step.s === 'active' ? 'border-brand text-brand' : 'border-charcoal/10 text-charcoal/20'
                               }`}>
                                 {step.s === 'completed' ? <CheckCircle2 size={14}/> : i+1}
                               </div>
                               <div>
                                  <h5 className={`font-black uppercase text-sm mb-1 ${step.s === 'pending' ? 'text-charcoal/20' : 'text-charcoal'}`}>{step.t}</h5>
                                  <p className="text-xs font-medium text-charcoal/40 leading-relaxed">{step.d}</p>
                               </div>
                            </div>
                          ))}
                       </div>

                       <div className="flex flex-col gap-4">
                          <button className="w-full bg-brand text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-charcoal transition-editorial shadow-2xl flex items-center justify-center gap-4">
                             PROCEED TO SECURE PAYMENT <ChevronRight size={18} />
                          </button>
                          <div className="flex items-center justify-center gap-6 opacity-40">
                             <ShieldCheck size={20} />
                             <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Encrypted Checkout</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Legacy Archive Teaser */}
      <section className="section-spacing bg-brand text-white text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
               Discover Our <span className="text-white/40">Legacy</span>
            </h2>
            <p className="text-xl font-medium leading-relaxed mb-12">
               Curious about what happens at an AWIEF summit? Browse our archive to explore speaker line-ups, programmes, and galleries from our milestone events dating back to 2017.
            </p>
            <a href="/past-conferences" className="inline-flex items-center gap-4 bg-white text-brand px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-editorial shadow-2xl">
               Explore Past Conferences <ArrowUpRight size={20} />
            </a>
         </div>
      </section>

      <Footer />
    </div>
  )
}
