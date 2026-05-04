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

      {/* Kinetic Hero Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto relative">
        <div className="absolute top-0 left-0 text-[30rem] font-black text-brand/5 leading-none select-none pointer-events-none -ml-24 -mt-24 rotate-12">
           DO
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 text-brand font-black tracking-[0.4em] uppercase text-xs mb-10">
              <span className="w-12 h-1 bg-brand"></span>
              Execution Strategy
            </div>
            <h1 className="text-7xl md:text-[11rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
              Impact <br/> <span className="text-brand italic serif">Architecture</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
             <p className="text-2xl text-charcoal/40 font-medium leading-tight italic text-right lg:text-left">
               We don't just advocate; we build the pipelines that carry African women from idea to global market.
             </p>
          </div>
        </div>
      </header>

      {/* Futuristic Programme Stack - NEW KINETIC DESIGN */}
      <section className="py-32 px-6 md:px-12" id="programmes">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-24 border-b border-charcoal/10 pb-12">
             <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter">Current <span className="text-brand">Pipelines</span></h2>
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/20">
                   <Layers size={20} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 max-w-[100px] leading-tight">Click cards to expand depth</p>
             </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
             <div className="lg:col-span-7 space-y-4">
                {programmesData.map((p, i) => (
                  <div 
                    key={p.id} 
                    onMouseEnter={() => setHoveredProg(p)}
                    onClick={() => setSelectedProg(p)}
                    className="group relative bg-white rounded-[40px] p-8 md:p-12 border border-charcoal/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-editorial cursor-pointer flex flex-col md:flex-row items-center gap-10 overflow-hidden"
                  >
                     <div className={`w-24 h-24 rounded-[30px] ${p.color} flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-editorial shadow-xl`}>
                        <span className="text-4xl font-black font-heading">0{i+1}</span>
                     </div>
                     <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-4">
                           <span className="text-brand font-black tracking-widest text-[10px] uppercase">{p.stage}</span>
                           <span className={`w-2 h-2 rounded-full ${p.status === 'Open' ? 'bg-green-500 animate-pulse' : 'bg-charcoal/20'}`}></span>
                        </div>
                        <h3 className="text-3xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial">{p.title}</h3>
                     </div>
                     <div className="w-16 h-16 rounded-full border border-charcoal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-editorial group-hover:bg-brand group-hover:border-brand group-hover:text-white">
                        <ArrowRight size={24} />
                     </div>
                  </div>
                ))}
             </div>
             
             <div className="lg:col-span-5 hidden lg:block sticky top-32 h-fit">
                <div className="aspect-[4/5] rounded-[60px] bg-charcoal overflow-hidden relative shadow-2xl group">
                   {hoveredProg ? (
                     <div className="h-full flex flex-col animate-in fade-in slide-in-from-bottom-12 duration-700">
                        <div className={`h-1/2 ${hoveredProg.color} p-16 flex items-end relative overflow-hidden`}>
                           <div className="absolute top-0 right-0 p-12 text-white/10 text-[20rem] font-black leading-none select-none">
                              {hoveredProg.id}
                           </div>
                           <div className="relative z-10">
                              <p className="text-white/60 font-black tracking-widest text-xs uppercase mb-4">Status: {hoveredProg.status}</p>
                              <h4 className="text-4xl font-black uppercase font-heading text-white leading-tight">{hoveredProg.title}</h4>
                           </div>
                        </div>
                        <div className="h-1/2 p-16 flex flex-col justify-between bg-white">
                           <p className="text-xl text-charcoal/40 italic font-medium leading-relaxed border-l-4 border-brand pl-8">
                             "{hoveredProg.desc}"
                           </p>
                           <div className="flex items-center justify-between mt-8">
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand">Deep Insight</span>
                              <div className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center group-hover:scale-125 transition-editorial">
                                 <Info size={20} />
                              </div>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center p-16">
                        <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-12 animate-pulse">
                           <Rocket size={48} />
                        </div>
                        <h4 className="text-3xl font-black uppercase font-heading text-white mb-6">Discovery <br/> <span className="text-brand">Engine</span></h4>
                        <p className="text-white/40 text-lg font-medium leading-relaxed italic">Hover over a pipeline to reveal its technical specifications and impact trajectory.</p>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Immersive Summit Experience - NEW PARALLAX DESIGN */}
      <section className="py-48 px-6 md:px-12 bg-charcoal text-white relative overflow-hidden" id="conference">
         <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none select-none text-[30rem] font-black rotate-12">2026</div>
         
         <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-24 items-center mb-48">
               <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 text-brand font-black tracking-[0.4em] uppercase text-xs mb-12">
                    <span className="w-12 h-1 bg-brand"></span>
                    Flagship Event
                  </div>
                  <h2 className="text-6xl md:text-[10rem] font-black uppercase font-heading leading-[0.75] tracking-tighter mb-12">
                    Beyond <br/> <span className="text-brand serif italic">Access</span>
                  </h2>
                  <p className="text-3xl text-white/40 font-medium leading-tight italic max-w-2xl border-l-8 border-brand pl-12 mb-16">
                    Economic Empowerment in a Digital Era. The nexus of policy, capital, and innovation.
                  </p>
                  <div className="flex flex-wrap gap-8">
                     <a href="/purchase-conference-tickets" className="bg-brand text-white px-16 py-8 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-brand transition-editorial shadow-2xl">
                        REGISTER NOW
                     </a>
                     <div className="flex items-center gap-6">
                        <div className="text-right">
                           <p className="text-[10px] font-black text-brand uppercase tracking-widest">October 8 - 9</p>
                           <p className="text-sm font-black uppercase font-heading">Cape Town, South Africa</p>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-editorial cursor-pointer">
                           <Play size={24} fill="currentColor"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-[0_0_100px_rgba(127,61,89,0.3)] rotate-3 hover:rotate-0 transition-editorial duration-1000 relative group">
                     <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1000&q=80" alt="Summit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                     <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
                     <div className="absolute bottom-12 left-12 right-12">
                        <p className="text-[10px] font-black tracking-widest uppercase text-brand mb-4">Live Momentum</p>
                        <h4 className="text-3xl font-black uppercase font-heading">1,500 Delegates</h4>
                        <div className="w-12 h-1 bg-brand mt-4 group-hover:w-full transition-editorial"></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Immersive Expectations Grid - NEW DESIGN */}
            <div className="grid lg:grid-cols-3 gap-16 relative">
               <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
               <div className="absolute top-0 left-1/3 w-px h-full bg-white/5 -z-10"></div>
               <div className="absolute top-0 left-2/3 w-px h-full bg-white/5 -z-10"></div>

               <div className="group">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-10 group-hover:bg-brand group-hover:text-white transition-editorial shadow-2xl">
                     <Mic size={32} />
                  </div>
                  <h4 className="text-2xl font-black uppercase font-heading mb-6 tracking-tighter">Global <br/> <span className="text-brand">Keynotes</span></h4>
                  <p className="text-lg text-white/40 font-medium leading-relaxed italic pr-12">Hear from policymakers and industry titans shaping the future of African female entrepreneurship.</p>
               </div>

               <div className="group">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-10 group-hover:bg-brand group-hover:text-white transition-editorial shadow-2xl">
                     <Briefcase size={32} />
                  </div>
                  <h4 className="text-2xl font-black uppercase font-heading mb-6 tracking-tighter">Funding <br/> <span className="text-brand">Masterclasses</span></h4>
                  <p className="text-lg text-white/40 font-medium leading-relaxed italic pr-12">Hands-on, actionable sessions focusing on digital transformation and Series A investment readiness.</p>
               </div>

               <div className="group">
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand mb-10 group-hover:bg-brand group-hover:text-white transition-editorial shadow-2xl">
                     <Award size={32} />
                  </div>
                  <h4 className="text-2xl font-black uppercase font-heading mb-6 tracking-tighter">Awards <br/> <span className="text-brand">Gala</span></h4>
                  <p className="text-lg text-white/40 font-medium leading-relaxed italic pr-12">Celebrate the pioneers and trailblazers at the continent's most prestigious annual honours night.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Awards Hub - Refined Style */}
      <section className="py-32 px-6 md:px-12 bg-white" id="awards">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
               <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl group">
                  <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80" alt="Awards" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-editorial"></div>
               </div>
            </div>
            <div className="lg:col-span-7">
               <div className="flex items-center gap-4 text-brand font-black tracking-[0.4em] uppercase text-xs mb-12">
                 <span className="w-12 h-1 bg-brand"></span>
                 Hall of Excellence
               </div>
               <h2 className="text-5xl md:text-8xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
                 The <span className="text-brand">Laureates</span>
               </h2>
               <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {["Tech Innovation", "Agri-Business", "Creative Arts", "Social Impact"].map((cat, i) => (
                    <div key={i} className="p-10 bg-cream rounded-[40px] border border-charcoal/5 hover:border-brand transition-editorial group flex items-center justify-between">
                       <h4 className="text-xl font-black uppercase font-heading">{cat}</h4>
                       <Zap size={20} className="text-brand opacity-0 group-hover:opacity-100 transition-editorial" />
                    </div>
                  ))}
               </div>
               <a href="/past-awards" className="inline-flex items-center gap-6 text-brand font-black tracking-widest text-xs uppercase group">
                  EXPLORE ARCHIVE <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center group-hover:scale-125 transition-editorial"><ArrowRight size={20}/></div>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Modal - Refined */}
      {selectedProg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setSelectedProg(null)}></div>
          <div className="bg-white rounded-[60px] max-w-2xl w-full relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/10">
            <button onClick={() => setSelectedProg(null)} className="absolute top-10 right-10 w-16 h-16 bg-cream rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20">
              <X size={32} />
            </button>
            <div className="p-16 md:p-24">
               <div className={`w-16 h-1 bg-brand mb-12`}></div>
               <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-6">{selectedProg.stage}</p>
               <h3 className="text-4xl md:text-5xl font-black uppercase font-heading leading-tight mb-10">{selectedProg.title}</h3>
               <p className="text-2xl text-charcoal/40 italic font-medium leading-relaxed mb-12">
                  "{selectedProg.desc}"
               </p>
               <p className="text-lg text-charcoal/70 leading-relaxed font-medium mb-16">
                  {selectedProg.details}
               </p>
               <div className="flex gap-6">
                  <button className="flex-grow bg-brand text-white py-8 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-2xl">
                    APPLY NOW
                  </button>
                  <div className="w-24 h-24 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/20">
                     <Sparkles size={32} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
