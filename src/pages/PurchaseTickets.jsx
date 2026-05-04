import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Sparkles, Ticket, Calendar, MapPin, CheckCircle2, Star, ShieldCheck, CreditCard, ArrowRight, Network, Briefcase, Award, ArrowUpRight } from 'lucide-react'

export default function PurchaseTickets() {
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur border border-charcoal/5 px-8 py-4 rounded-full shadow-sm">
            <Calendar className="text-brand" size={20} />
            <span className="text-charcoal text-sm font-black uppercase tracking-widest">November 10 - 11, 2026</span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur border border-charcoal/5 px-8 py-4 rounded-full shadow-sm">
            <MapPin className="text-brand" size={20} />
            <span className="text-charcoal text-sm font-black uppercase tracking-widest">Cape Town, South Africa</span>
          </div>
        </div>
      </header>

      {/* Early Bird Highlight */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-24 relative z-20">
        <div className="bg-brand/5 border border-brand/10 p-10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                <Sparkles size={32} className="animate-pulse" />
             </div>
             <div>
                <h3 className="text-2xl font-black uppercase font-heading mb-1">Early Bird Registration</h3>
                <p className="text-sm font-medium opacity-60 italic">Register now to save $50 on all in-person passes.</p>
             </div>
          </div>
          <div className="text-right hidden md:block">
             <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Offer expires in</p>
             <p className="text-3xl font-black font-heading text-brand">24 DAYS</p>
          </div>
        </div>
      </section>

      {/* Beyond Access Section */}
      <section className="section-spacing px-6 md:px-12 bg-white rounded-t-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center gap-24">
             <div className="col-span-12 lg:col-span-6">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">The Premier Gathering</p>
               <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
                 Beyond Access: <br/> <span className="text-brand">Digital Era</span> Empowerment
               </h2>
               <p className="text-xl text-charcoal/60 leading-relaxed font-medium mb-8">
                 The 2026 Annual AWIEF Conference is Africa's foremost event for women's economic empowerment. This year's theme focuses on moving beyond mere inclusion to ensure female founders are leading the digital transformation.
               </p>
               <p className="text-xl text-charcoal/60 leading-relaxed font-medium mb-12">
                 Dive deep into actionable strategies for scaling your business, securing borderless funding, and leveraging technology to conquer regional and global markets.
               </p>
               <a href="#pricing" className="inline-flex items-center justify-center gap-4 bg-charcoal text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand transition-editorial shadow-2xl">
                 Reserve Your Ticket <ArrowRight size={18} />
               </a>
             </div>
             <div className="col-span-12 lg:col-span-6 grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Network, t: "B2B Matchmaking", d: "Curated networking sessions connecting you directly with investors and partners." },
                  { icon: Briefcase, t: "Masterclasses", d: "Actionable, hands-on workshops focusing on digital scaling and Series A funding." },
                  { icon: Star, t: "The Exhibition", d: "A bustling marketplace showcasing products from 100+ female-owned African SMEs." },
                  { icon: Award, t: "The AWIEF Awards", d: "A prestigious gala dinner celebrating the continent's most outstanding founders." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-cream rounded-[32px] border border-charcoal/5 hover:border-brand transition-editorial">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 text-brand shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-xl font-black uppercase font-heading mb-4">{item.t}</h4>
                    <p className="text-charcoal/50 text-sm font-medium leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Speaker Teaser */}
      <section className="section-spacing bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">World-Class Insights</p>
              <h2 className="text-4xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter">
                Hear from <br/> <span className="text-brand">Visionaries</span>
              </h2>
            </div>
            <button className="text-brand font-black tracking-widest text-xs uppercase flex items-center gap-4 hover:text-white transition-editorial">
              View Full Speaker Lineup <ArrowRight size={20} />
            </button>
          </div>

          <div className="editorial-grid">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 group">
                <div className="aspect-square rounded-[32px] overflow-hidden mb-8 bg-white/5 border border-white/10 group-hover:border-brand transition-editorial">
                   <img src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80`} alt="Speaker" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-700" />
                </div>
                <h4 className="text-2xl font-black uppercase font-heading leading-tight mb-2">To Be Announced</h4>
                <p className="text-brand font-black tracking-widest text-[10px] uppercase">Industry Leader / Policy Expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-spacing px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
               Choose Your <span className="text-brand">Pass</span>
             </h2>
             <p className="text-xl text-charcoal/60 font-medium">Secure your spot at the continent's most influential women's economic forum.</p>
          </div>

          <div className="editorial-grid items-stretch gap-8">
            {[
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
            ].map((pkg, i) => (
              <div key={i} className={`col-span-12 lg:col-span-4 p-12 rounded-[40px] border ${pkg.color} flex flex-col hover:border-brand transition-editorial relative ${pkg.popular ? 'lg:-translate-y-6 shadow-[0_50px_100px_-20px_rgba(127,61,89,0.3)]' : 'shadow-xl'}`}>
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
                  {pkg.popular && <p className="text-brand font-black text-[10px] mt-4 uppercase tracking-widest line-through opacity-50">Regular: $200</p>}
                </div>
                <ul className="space-y-6 mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 size={18} className="text-brand shrink-0" />
                      <span className="text-sm font-medium opacity-70 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-editorial shadow-2xl ${pkg.popular ? 'bg-brand text-white hover:bg-brand-dark' : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'}`}>
                  SELECT {pkg.name.toUpperCase()}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-charcoal/5 flex flex-wrap justify-center gap-12 text-charcoal/40">
             <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                <ShieldCheck size={24} className="text-brand"/> Secure Checkout via Paystack
             </div>
             <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                <CreditCard size={24} className="text-brand"/> All Major Cards Accepted
             </div>
          </div>
        </div>
      </section>

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
