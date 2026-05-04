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
  const [hoveredProg, setHoveredProg] = useState(null)
  const [selectedProg, setSelectedProg] = useState(null)

  return (
    <div className="min-h-screen font-body text-charcoal bg-[#fcfbf9] overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Hero Section - Refined with Wireframe Wording */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[25rem] font-black text-brand/5 leading-none select-none pointer-events-none uppercase tracking-tighter">
           Do
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 italic">Ecosystem of Growth</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
            What We <span className="text-brand">Do</span>
          </h1>
          <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-medium">
            From early-stage ideation to cross-border scaling, global networking, and policy reform—discover how we actively break down barriers for African women in business.
          </p>
        </div>
      </header>

      {/* Interactive Programmes Section */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[60px]" id="programmes">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 border-b border-charcoal/10 pb-12 gap-8">
             <div className="max-w-2xl">
                <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4 italic">Capacity Building</p>
                <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none">Tailored <span className="text-brand">Programmes</span></h2>
             </div>
             <div className="flex gap-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 max-w-[150px] leading-tight text-right italic">Find the perfect initiative for your current business stage.</p>
             </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
             <div className="lg:col-span-7 space-y-4">
                {programmesData.map((p, i) => (
                  <div 
                    key={p.id} 
                    onMouseEnter={() => setHoveredProg(p)}
                    onClick={() => setSelectedProg(p)}
                    className="group relative bg-cream rounded-[32px] p-8 md:p-10 border border-charcoal/5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-editorial cursor-pointer flex flex-col md:flex-row items-center gap-10 overflow-hidden"
                  >
                     <div className={`w-20 h-20 rounded-2xl ${p.color} flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-editorial shadow-lg`}>
                        <span className="text-3xl font-black font-heading">0{i+1}</span>
                     </div>
                     <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-3">
                           <span className="text-brand font-black tracking-widest text-[9px] uppercase">{p.stage}</span>
                           <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'Open' ? 'bg-green-500 animate-pulse' : 'bg-charcoal/20'}`}></span>
                        </div>
                        <h3 className="text-2xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial">{p.title}</h3>
                     </div>
                     <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-editorial group-hover:bg-brand group-hover:border-brand group-hover:text-white">
                        <ArrowRight size={20} />
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="lg:col-span-5 hidden lg:block sticky top-32 h-fit">
                <div className="aspect-[4/5] rounded-[48px] bg-charcoal overflow-hidden relative shadow-2xl group">
                   {hoveredProg ? (
                     <div className="h-full flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className={`h-1/2 ${hoveredProg.color} p-12 flex items-end relative overflow-hidden`}>
                           <div className="absolute top-0 right-0 p-8 text-white/10 text-[15rem] font-black leading-none select-none">
                              {hoveredProg.id}
                           </div>
                           <div className="relative z-10">
                              <p className="text-white/60 font-black tracking-widest text-[10px] uppercase mb-4 italic">Status: {hoveredProg.status}</p>
                              <h4 className="text-3xl font-black uppercase font-heading text-white leading-tight">{hoveredProg.title}</h4>
                           </div>
                        </div>
                        <div className="h-1/2 p-12 flex flex-col justify-between bg-white">
                           <p className="text-lg text-charcoal/40 italic font-medium leading-relaxed border-l-4 border-brand pl-6">
                             "{hoveredProg.desc}"
                           </p>
                           <div className="flex items-center justify-between mt-8">
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand italic">Deep Insight</span>
                              <div className="w-10 h-10 bg-charcoal text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-editorial">
                                 <Info size={18} />
                              </div>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center p-16">
                        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-10 animate-pulse">
                           <Rocket size={40} />
                        </div>
                        <h4 className="text-3xl font-black uppercase font-heading text-white mb-6 tracking-tighter">Initiative <br/> <span className="text-brand italic">Discovery</span></h4>
                        <p className="text-white/40 text-base font-medium leading-relaxed italic">Hover over a programme to reveal its core objectives and impact scope.</p>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Immersive Summit Experience */}
      <section className="py-40 px-6 md:px-12 bg-charcoal text-white relative overflow-hidden" id="conference">
         <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none select-none text-[30rem] font-black rotate-12">2026</div>
         
         <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-24 items-center mb-40">
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                     <Sparkles size={12} className="text-brand animate-pulse"/>
                     <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Save The Date</span>
                  </div>
                  <h2 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.75] tracking-tighter mb-10">
                    Beyond <br/> <span className="text-brand serif italic">Access</span>
                  </h2>
                  <p className="text-2xl md:text-3xl text-white/40 font-medium leading-tight italic max-w-2xl border-l-8 border-brand pl-12 mb-16">
                    Economic Empowerment in a Digital Era. The nexus of policy, capital, and innovation.
                  </p>
                  <div className="flex flex-wrap gap-8 items-center">
                     <a href="/purchase-conference-tickets" className="bg-brand text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-brand transition-editorial shadow-2xl">
                        REGISTER NOW
                     </a>
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-[10px] font-black text-brand uppercase tracking-widest">October 8 - 9, 2026</p>
                           <p className="text-sm font-black uppercase font-heading tracking-tight">Cape Town, South Africa</p>
                        </div>
                        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-editorial cursor-pointer">
                           <Play size={20} fill="currentColor"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-[0_0_100px_rgba(127,61,89,0.3)] rotate-2 hover:rotate-0 transition-editorial duration-1000 relative group border-4 border-white/5">
                     <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1000&q=80" alt="Summit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                     <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
                     <div className="absolute bottom-10 left-10 right-10">
                        <p className="text-[9px] font-black tracking-widest uppercase text-brand mb-3">Live Momentum</p>
                        <h4 className="text-2xl font-black uppercase font-heading">1,500 Delegates</h4>
                        <div className="w-10 h-1 bg-brand mt-4 group-hover:w-full transition-editorial"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-16 relative">
               <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
               <div className="absolute top-0 left-1/3 w-px h-full bg-white/5 -z-10"></div>
               <div className="absolute top-0 left-2/3 w-px h-full bg-white/5 -z-10"></div>

               <div className="group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-editorial shadow-2xl">
                     <Mic size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase font-heading mb-4 tracking-tighter">Global <span className="text-brand">Keynotes</span></h4>
                  <p className="text-base text-white/40 font-medium leading-relaxed italic pr-8">Hear from policymakers and titans shaping the future of African female entrepreneurship.</p>
               </div>

               <div className="group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-editorial shadow-2xl">
                     <Briefcase size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase font-heading mb-4 tracking-tighter">Funding <span className="text-brand">Masterclasses</span></h4>
                  <p className="text-base text-white/40 font-medium leading-relaxed italic pr-8">Actionable sessions focusing on digital transformation and Series A investment readiness.</p>
               </div>

               <div className="group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-editorial shadow-2xl">
                     <Award size={24} />
                  </div>
                  <h4 className="text-xl font-black uppercase font-heading mb-4 tracking-tighter">Awards <span className="text-brand">Gala</span></h4>
                  <p className="text-base text-white/40 font-medium leading-relaxed italic pr-8">Celebrate pioneers and trailblazers at the continent's most prestigious annual honours night.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Awards Hub */}
      <section className="py-32 px-6 md:px-12 bg-white" id="awards">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
               <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl group">
                  <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80" alt="Awards" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-editorial"></div>
               </div>
            </div>
            <div className="lg:col-span-7">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8 italic">Honouring Excellence</p>
               <h2 className="text-5xl md:text-[6rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-10">
                 AWIEF <span className="text-brand">Awards</span>
               </h2>
               <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {["Tech Entrepreneur", "Agri Entrepreneur", "Creative Industry", "Social Impact"].map((cat, i) => (
                    <div key={i} className="p-8 bg-cream rounded-[32px] border border-charcoal/5 hover:border-brand transition-editorial group flex items-center justify-between">
                       <h4 className="text-base font-black uppercase font-heading">{cat}</h4>
                       <Zap size={16} className="text-brand opacity-0 group-hover:opacity-100 transition-editorial" />
                    </div>
                  ))}
               </div>
               <a href="/past-awards" className="inline-flex items-center gap-6 text-brand font-black tracking-widest text-[9px] uppercase group">
                  EXPLORE ARCHIVE <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center group-hover:scale-110 transition-editorial"><ArrowRight size={16}/></div>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#fdfaf7] rounded-t-[60px]" id="advocacy">
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
          <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setSelectedProg(null)}></div>
          <div className="bg-white rounded-[40px] max-w-xl w-full relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/10">
            <button onClick={() => setSelectedProg(null)} className="absolute top-8 right-8 w-10 h-10 bg-cream rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20">
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
