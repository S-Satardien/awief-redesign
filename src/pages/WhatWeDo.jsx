import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Rocket, Briefcase, Award, Globe, ArrowRight, MapPin, Users, Calendar, ShieldCheck, Zap } from 'lucide-react'

const programmes = [
  { cat: "Accelerator", title: "AWIEF Growth Accelerator", partner: "Victoria's Secret & Co.", country: "Nigeria", desc: "Investment readiness for growth-stage female-led businesses.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" },
  { cat: "Accelerator", title: "Nedbank-AWIEF Accelerator", partner: "Nedbank", country: "South Africa", desc: "Capacity-building for green economy enterprises.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
  { cat: "Enterprise Dev", title: "Enterprise Development", partner: "Multiple Partners", country: "Pan-African", desc: "Training for early-stage female founders.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80" },
  { cat: "Digital Skills", title: "Digital Skills Training", partner: "AWIEF", country: "Pan-African", desc: "E-commerce and data analytics capabilities.", img: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=800&q=80" },
]

export default function WhatWeDo() {
  const [activeProg, setActiveProg] = useState(0)

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Editorial Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">Initiatives & Impact</p>
            <h1 className="text-5xl md:text-[8rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
              The <span className="text-brand">Portfolio</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-24">
            <p className="text-lg text-charcoal/60 font-medium leading-relaxed italic border-l-4 border-brand pl-8">
              Interconnected programmes, prestigious awards, and pan-African advocacy driving systemic change.
            </p>
          </div>
        </div>
      </header>

      {/* Interactive Programmes List */}
      <section className="section-spacing bg-white px-6 md:px-12 rounded-[60px]" id="programmes">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center">
            <div className="col-span-12 lg:col-span-6 space-y-4">
              {programmes.map((p, i) => (
                <div 
                  key={i} 
                  onMouseEnter={() => setActiveProg(i)}
                  className={`group py-10 border-b border-charcoal/5 cursor-pointer transition-editorial ${activeProg === i ? 'pl-8' : ''}`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-4xl font-black font-heading transition-editorial ${activeProg === i ? 'text-brand' : 'text-charcoal/10'}`}>
                      0{i + 1}
                    </span>
                    <div>
                      <p className={`text-[10px] font-black tracking-widest uppercase mb-1 transition-editorial ${activeProg === i ? 'text-accent' : 'text-charcoal/30'}`}>
                        {p.cat}
                      </p>
                      <h3 className={`text-2xl md:text-4xl font-black uppercase font-heading transition-editorial ${activeProg === i ? 'text-charcoal' : 'text-charcoal/40'}`}>
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-12 lg:col-span-6 lg:pl-12 hidden lg:block">
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl transition-editorial animate-in fade-in slide-in-from-right-12 duration-700" key={activeProg}>
                <img src={programmes[activeProg].img} alt="Programme" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12 text-white">
                  <p className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    <MapPin size={16} /> {programmes[activeProg].country}
                  </p>
                  <p className="text-xl font-medium leading-relaxed mb-8">
                    "{programmes[activeProg].desc}"
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-black tracking-widest uppercase opacity-70">
                    <Users size={16} /> Partner: {programmes[activeProg].partner}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Conference Showcase */}
      <section className="section-spacing px-6 md:px-12 bg-charcoal text-white overflow-hidden relative" id="conference">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-brand rounded-full blur-[160px] opacity-20"></div>
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">AWIEF 2026 Summit</p>
              <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
                Beyond <span className="text-brand">Access</span>
              </h2>
              <p className="text-xl text-white/60 font-medium mb-12 max-w-lg leading-relaxed">
                Economic Empowerment in a Digital Era. Africa's foremost event for women's economic empowerment.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Calendar, title: "Oct 8 - 9, 2026", sub: "Save the Date" },
                  { icon: MapPin, title: "Cape Town, ZA", sub: "CTICC Mainstage" },
                  { icon: Globe, title: "1,500+ Delegates", sub: "Global Network" },
                  { icon: ShieldCheck, title: "Secure Funding", sub: "Investor Access" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand transition-editorial">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase font-heading">{item.title}</h4>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="/purchase-conference-tickets" className="inline-block bg-white text-charcoal px-12 py-5 rounded-full font-black tracking-widest text-xs hover:bg-brand hover:text-white transition-editorial shadow-2xl">
                GET YOUR TICKETS
              </a>
            </div>
            <div className="col-span-12 lg:col-span-6 relative mt-24 lg:mt-0">
              <div className="relative z-10 rounded-[40px] overflow-hidden aspect-video shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-editorial duration-700">
                <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1000&q=80" alt="Summit" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-editorial"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWIEF Awards Section */}
      <section className="section-spacing px-6 md:px-12 bg-white" id="awards">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80" alt="Awards" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <Award size={48} className="mb-6 text-brand" />
                  <h3 className="text-4xl font-black uppercase font-heading mb-4">Honouring Excellence</h3>
                  <p className="font-medium opacity-70">Celebrating the ingenuity and achievements of Africa's most outstanding founders.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 lg:pl-24 mb-16 lg:mb-0">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 italic">The Hall of Fame</p>
               <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
                 The <span className="text-brand">Awards</span>
               </h2>
               <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { cat: "Tech Entrepreneur", desc: "Innovative solutions in the digital space." },
                    { cat: "Agri Entrepreneur", desc: "Revolutionizing Africa's agriculture." },
                    { cat: "Creative Industry", desc: "Leading the way in arts & culture." },
                    { cat: "Social Entrepreneur", desc: "Driving impact and systemic change." }
                  ].map((award, i) => (
                    <div key={i} className="p-8 border border-charcoal/5 rounded-[32px] hover:border-brand transition-editorial group">
                       <Zap size={20} className="mb-4 text-brand opacity-40 group-hover:opacity-100 transition-editorial" />
                       <h4 className="text-lg font-black uppercase font-heading mb-2">{award.cat}</h4>
                       <p className="text-xs font-medium text-charcoal/60 leading-relaxed">{award.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Typography Advocacy Section */}
      <section className="section-spacing px-6 md:px-12 bg-cream rounded-t-[60px]" id="advocacy">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">Systemic Reform</p>
            <h2 className="text-4xl md:text-[6rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
              Lobbying <br/> for <span className="text-accent">Equality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "AfCFTA Integration", desc: "Advocating for women-led businesses to benefit from the African Continental Free Trade Area." },
              { title: "Financial Inclusion", desc: "Removing collateral barriers and ensuring access to growth capital for female founders." },
              { title: "Digital Parity", desc: "Closing the digital divide through infrastructure and skills development." },
            ].map((item, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-12 h-1 bg-charcoal/10 mb-8 transition-editorial group-hover:w-full group-hover:bg-brand"></div>
                <h4 className="text-2xl font-black uppercase font-heading mb-6">{item.title}</h4>
                <p className="text-charcoal/60 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
