import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Rocket, Briefcase, Award, Globe, ArrowRight, MapPin, Users, Calendar, ShieldCheck, Zap, Sparkles, Target, Lightbulb, Mic, Star, X, Info, TrendingUp, MoveRight, Megaphone, Play, Layers } from 'lucide-react'

const programmesData = [
  {
    id: 1,
    title: "AWIEF Growth Accelerator (Nigeria) with AGF & FSDH",
    stage: "Growth & Scale",
    status: "Open",
    color: "bg-brand",
    desc: "A 12-month accelerator targeting women-owned SMEs in Nigeria to make them credit and investment-ready.",
    details: "Partnered with African Guarantee Fund (AGF) and FSDH Merchant Bank Limited. Focuses on post-revenue, highly innovative businesses operating for 3+ years. Provides tailored business development, mentorship, and increased creditworthiness."
  },
  {
    id: 2,
    title: "Growth Accelerator for South Africa with Nedbank",
    stage: "Growth & Scale",
    status: "Ongoing",
    color: "bg-accent",
    desc: "A flagship enterprise development programme enhancing the investment readiness of South African female founders.",
    details: "For the 2024 cohort, AWIEF and Nedbank are supporting Exempt Micro Enterprises (EMEs) or Qualifying Small Enterprises (QSEs) operating in agribusiness, agro-processing, and green energy."
  },
  {
    id: 3,
    title: "Victoria's Secret Growth Accelerator in Nigeria",
    stage: "Growth & Scale",
    status: "Closed",
    color: "bg-charcoal",
    desc: "A seven-month, high-impact, investment readiness programme for innovative female-led businesses.",
    details: "Launched as part of Victoria's Secret 'The Tour Impact Fund'. Priority is given to technology-based businesses in agriculture, health, and renewable energy."
  },
  {
    id: 4,
    title: "Academy for Women Entrepreneurs (AWE LESA)",
    stage: "Idea & Launch",
    status: "Closed",
    color: "bg-brand-light",
    desc: "Empowering 100 young women entrepreneurs across Lesotho, Eswatini, and South Africa.",
    details: "Supported by the U.S. Mission and Arizona State University. Focuses on early-stage entrepreneurs (1-3 years) using the 100 Million Learners online curriculum."
  }
];

export default function WhatWeDo() {
  const filterOptions = ['All', 'Idea & Launch Stage', 'Growth & Scale Stage', 'Open Applications'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProg, setSelectedProg] = useState(null);

  const filteredProgrammes = programmesData.filter(prog => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Open Applications') return prog.status === 'Open';
    return prog.stage === activeFilter;
  });

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Editorial Header - Synchronized Brand Identity */}
      <header className="relative bg-brand pt-56 pb-32 px-6 md:px-12 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/50 to-brand z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-8">
            <Layers size={14} className="text-gold"/>
            <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase">Ecosystem of Growth</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 text-white">
            What We <span className="text-gold italic serif normal-case">Do</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-3xl mx-auto italic">
            From early-stage ideation to cross-border scaling, global networking, and policy reform—discover how we actively break down barriers for African women in business.
          </p>
        </div>
      </header>

      {/* Filterable Programmes Section */}
      <section className="py-32 px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20" id="programmes">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4 italic">Capacity Building</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none">Tailored <span className="text-brand">Programmes</span></h2>
              <p className="text-charcoal/50 text-lg mt-6 font-medium">Empowering women with the tools and networks they need to succeed at every stage.</p>
            </div>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3">
              {filterOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-editorial border ${
                    activeFilter === option 
                    ? 'bg-brand text-white border-brand shadow-xl' 
                    : 'bg-white text-charcoal/40 border-charcoal/10 hover:border-brand hover:text-brand shadow-sm'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProgrammes.map((p, i) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProg(p)}
                className="glass-panel p-10 group hover:border-brand transition-editorial cursor-pointer flex flex-col h-full relative overflow-hidden"
              >
                <div className="african-pattern absolute inset-0 opacity-5"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial shadow-sm">
                      <Zap size={24} />
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      p.status === 'Open' ? 'bg-green-100 text-green-700' :
                      p.status === 'Ongoing' ? 'bg-gold/10 text-gold' :
                      'bg-charcoal/5 text-charcoal/40'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-brand font-black tracking-widest text-[9px] uppercase">{p.stage}</span>
                    <h3 className="text-2xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial mt-2">{p.title}</h3>
                  </div>
                  <p className="text-charcoal/60 text-sm font-medium leading-relaxed mb-10 flex-grow">{p.desc}</p>
                  <div className="flex items-center gap-2 text-brand font-black tracking-widest text-[10px] uppercase group-hover:gap-4 transition-editorial mt-auto">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Summit Experience - High Impact Berry */}
      <section className="py-40 px-6 md:px-12 bg-brand text-white relative overflow-hidden" id="conference">
         <div className="african-pattern absolute inset-0 opacity-30 scale-150 rotate-12 brightness-200"></div>
         <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none select-none text-[30rem] font-black rotate-12 text-white/10">2026</div>
         
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-24 items-center mb-40">
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                     <Sparkles size={12} className="text-brand animate-pulse"/>
                     <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Save The Date</span>
                  </div>
                  <h2 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.75] tracking-tighter mb-10">
                    Beyond <br/> <span className="text-gold serif italic normal-case">Access</span>
                  </h2>
                  <p className="text-2xl md:text-3xl text-white/80 font-medium leading-tight italic max-w-2xl border-l-8 border-gold pl-12 mb-16">
                    Economic Empowerment in a Digital Era. The nexus of policy, capital, and innovation.
                  </p>
                  <div className="flex flex-wrap gap-8 items-center">
                     <a href="/purchase-conference-tickets" className="bg-white text-charcoal px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-editorial shadow-2xl">
                        REGISTER NOW
                     </a>
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-[10px] font-black text-gold uppercase tracking-widest">October 8 - 9, 2026</p>
                           <p className="text-sm font-black uppercase font-heading tracking-tight text-white">Cape Town, South Africa</p>
                        </div>
                        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-white transition-editorial cursor-pointer">
                           <Play size={20} fill="currentColor"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-[0_0_100px_rgba(127,61,89,0.3)] rotate-2 hover:rotate-0 transition-editorial duration-1000 relative group border-4 border-white/5 bg-charcoal">
                     <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1000&q=80" alt="Summit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-80"></div>
                     <div className="absolute bottom-10 left-10 right-10">
                        <p className="text-[9px] font-black tracking-widest uppercase text-gold mb-3">Live Momentum</p>
                        <h4 className="text-2xl font-black uppercase font-heading text-white">1,500 Delegates</h4>
                        <div className="w-10 h-1 bg-gold mt-4 group-hover:w-full transition-editorial"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mt-16 pt-16 border-t border-white/10">
               {/* What to Expect */}
               <div>
                 <h4 className="text-2xl font-black uppercase font-heading mb-8 flex items-center gap-3">
                   <Lightbulb size={24} className="text-brand" /> What to Expect
                 </h4>
                 <div className="space-y-4">
                    {[
                      { icon: Mic, t: "Global Keynotes", d: "Hear from policymakers and titans shaping the future of African female entrepreneurship." },
                      { icon: Briefcase, t: "Masterclasses", d: "Actionable sessions focusing on digital transformation and Series A investment readiness." },
                      { icon: Star, t: "The Exhibition", d: "Discover innovative products and services from women-owned businesses across the continent." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-[32px] flex items-start gap-6 group hover:bg-white/20 transition-editorial backdrop-blur-xl">
                        <div className="mt-1 bg-white/10 rounded-full p-3 border border-gold/30 group-hover:bg-gold transition-editorial"><item.icon size={20} className="text-gold group-hover:text-white"/></div>
                        <div>
                          <h5 className="text-white font-black uppercase text-sm mb-1">{item.t}</h5>
                          <p className="text-white/80 text-xs font-medium leading-relaxed italic">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>

               {/* Why Attend */}
               <div>
                 <h4 className="text-2xl font-black uppercase font-heading mb-8 flex items-center gap-3">
                   <Target size={24} className="text-brand" /> Why Attend?
                 </h4>
                 <div className="space-y-4">
                    {[
                      { icon: Users, t: "Unmatched Networking", d: "Connect directly with over 1,500 delegates from 50+ countries." },
                      { icon: TrendingUp, t: "Secure Funding", d: "Direct access to venture capitalists and angel investors looking to back women." },
                      { icon: Award, t: "Celebrate Excellence", d: "The prestigious AWIEF Awards Gala, honouring the pioneers of African business." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-[32px] flex items-start gap-6 group hover:bg-white/20 transition-editorial backdrop-blur-xl">
                        <div className="mt-1 bg-white/10 rounded-full p-3 border border-gold/30 group-hover:bg-gold transition-editorial"><item.icon size={20} className="text-gold group-hover:text-white"/></div>
                        <div>
                          <h5 className="text-white font-black uppercase text-sm mb-1">{item.t}</h5>
                          <p className="text-white/80 text-xs font-medium leading-relaxed italic">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Awards Hub - Esteemed & High Authority */}
      <section className="py-40 px-6 md:px-12 bg-[#1d0b14] relative overflow-hidden" id="awards">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12 brightness-200"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
               <div className="relative aspect-[3/4] rounded-[64px] overflow-hidden shadow-2xl group border-4 border-white/10">
                  <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80" alt="Awards Ceremony" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                  <div className="absolute inset-0 bg-brand/30 group-hover:bg-transparent transition-editorial"></div>
                  <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20">
                     <div className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-4 italic">The Prize of Pioneers</div>
                     <h4 className="text-3xl font-black text-white uppercase font-heading leading-tight italic">Celebrating <br/> Excellence</h4>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-7">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-10">
                  <Award size={14} className="text-gold"/>
                  <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase">Honouring Industry Leaders</span>
               </div>
               <h2 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12 text-white">
                 AWIEF <span className="text-gold italic serif normal-case">Awards</span>
               </h2>
               <p className="text-white/40 text-2xl font-medium leading-relaxed italic max-w-2xl border-l-8 border-gold pl-12 mb-16">
                 The most prestigious recognition for female entrepreneurs in Africa.
               </p>
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    { cat: "Tech Entrepreneur", icon: Zap },
                    { cat: "Agri Entrepreneur", icon: TrendingUp },
                    { cat: "Creative Industry", icon: Sparkles },
                    { cat: "Social Impact", icon: Target }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white/5 rounded-[40px] border border-white/10 hover:border-gold transition-editorial group flex items-center justify-between backdrop-blur shadow-2xl">
                       <h4 className="text-xl font-black uppercase font-heading text-white group-hover:text-gold transition-editorial">{item.cat}</h4>
                       <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-brand transition-editorial">
                          <item.icon size={20} />
                       </div>
                    </div>
                  ))}
               </div>
               <a href="/past-awards" className="inline-flex items-center gap-8 bg-gold text-[#1d0b14] px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-editorial shadow-2xl">
                  EXPLORE THE ARCHIVE <ArrowRight size={20}/>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Section - Editorial Cream/Berry Split */}
      <section className="py-32 px-6 md:px-12 bg-warm rounded-t-[60px]" id="advocacy">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-8">
               <Megaphone className="text-brand" size={24} />
             </div>
             <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4 italic">Driving Systemic Change</p>
             <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
               Policy Advocacy & <br/> <span className="text-brand">Gender Equality</span>
             </h2>
             <p className="text-lg text-charcoal/60 leading-relaxed font-medium mb-10">
               We cannot empower women economically without simultaneously dismantling the structural barriers that hold them back. AWIEF works closely with governments, the African Union, and international bodies to champion policies that foster gender equality.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
                {[
                  { t: "AfCFTA Integration", d: "Ensuring women-owned SMEs can participate in trade without tariffs." },
                  { t: "Financial Inclusion", d: "Removing collateral barriers specifically impacting female founders." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-black uppercase text-sm mb-2">{item.t}</h4>
                    <p className="text-xs font-medium text-charcoal/40 leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" alt="Advocacy" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl border-4 border-white translate-y-8">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" alt="Advocacy" className="w-full h-full object-cover grayscale" />
             </div>
          </div>
        </div>
      </section>

      {/* Programme Modal - Refined Scale */}
      {selectedProg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#1d0b14]/95 backdrop-blur-xl" onClick={() => setSelectedProg(null)}></div>
          <div className="bg-white rounded-[40px] max-w-xl w-full relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/10">
            <button onClick={() => setSelectedProg(null)} className="absolute top-8 right-8 w-10 h-10 bg-warm rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20">
              <X size={20} />
            </button>
            <div className="p-10 md:p-12">
               <div className="w-12 h-1 bg-brand mb-8"></div>
               <p className="text-brand font-black tracking-[0.3em] uppercase text-[9px] mb-4">{selectedProg.stage}</p>
               <h3 className="text-2xl md:text-3xl font-black uppercase font-heading leading-tight mb-8">{selectedProg.title}</h3>
               <p className="text-xl text-charcoal/40 italic font-medium leading-relaxed mb-8">
                  "{selectedProg.desc}"
               </p>
               <p className="text-base text-charcoal/70 leading-relaxed font-medium mb-12">
                  {selectedProg.details}
               </p>
               <button className="w-full bg-brand text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-2xl">
                 APPLY NOW
               </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
