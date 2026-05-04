import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Rocket, Briefcase, Award, Globe, ArrowRight, MapPin, Users, Calendar, ShieldCheck, Zap, Sparkles, Target, Lightbulb, Mic, Star, X, Info, TrendingUp, MoveRight, Megaphone } from 'lucide-react'

const programmesData = [
  {
    id: 1,
    title: "AWIEF Growth Accelerator (Nigeria) with AGF & FSDH",
    stage: "Growth & Scale Stage",
    status: "Open",
    desc: "A 12-month accelerator targeting women-owned SMEs in Nigeria to make them credit and investment-ready for AFAWA-backed business loans.",
    details: "Partnered with African Guarantee Fund (AGF) and FSDH Merchant Bank Limited. Focuses on post-revenue, highly innovative businesses operating for 3+ years. Provides tailored business development, mentorship, and increased creditworthiness to access financing."
  },
  {
    id: 2,
    title: "Growth Accelerator for South Africa with Nedbank",
    stage: "Growth & Scale Stage",
    status: "Ongoing",
    desc: "A flagship enterprise development programme enhancing the investment readiness of South African female founders in agriculture and green economy sectors.",
    details: "For the 2024 cohort, AWIEF and Nedbank are supporting Exempt Micro Enterprises (EMEs) or Qualifying Small Enterprises (QSEs) operating in agribusiness, agro-processing, green energy, and climate-smart solutions. Provides growth strategy training, corporate advisory, and mentoring."
  },
  {
    id: 3,
    title: "Victoria's Secret Growth Accelerator in Nigeria",
    stage: "Growth & Scale Stage",
    status: "Closed",
    desc: "A seven-month, high-impact, investment readiness programme for innovative, growth-stage female-led businesses in Nigeria.",
    details: "Launched as part of Victoria's Secret 'The Tour Impact Fund'. Priority is given to technology-based and tech-enabled businesses in catalytic sectors such as agriculture, health, education, creative industry, and renewable energy."
  },
  {
    id: 4,
    title: "Academy for Women Entrepreneurs (AWE LESA)",
    stage: "Idea & Launch Stage",
    status: "Closed",
    desc: "Empowering 100 young women entrepreneurs across Lesotho, Eswatini, and South Africa through accredited global management training.",
    details: "Supported by the U.S. Mission and Arizona State University. Focuses on early-stage entrepreneurs (1-3 years). Combines the Francis and Dionne Najafi 100 Million Learners online curriculum with expert-facilitated in-person business management training at American Spaces."
  },
  {
    id: 5,
    title: "SMEs Investment and Export Readiness Program",
    stage: "Growth & Scale Stage",
    status: "Closed",
    desc: "An 8-week online program increasing the export competitiveness of 100 SMEs across nine Southern African countries.",
    details: "Funded by USAID TradeHub, the program leverages the African Growth and Opportunity Act (AGOA) to drive export trade to the US and South Africa. Priority sectors include Agriculture, Agro-processing, Textiles, and Apparels, featuring training on labelling, branding, and regulatory compliance."
  }
];

export default function WhatWeDo() {
  const [selectedProg, setSelectedProg] = useState(null)
  const [filter, setFilter] = useState('All')

  const filteredProgrammes = programmesData.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Open') return p.status === 'Open'
    return p.stage.includes(filter)
  })

  return (
    <div className="min-h-screen font-body text-charcoal bg-[#fcfbf9] overflow-x-hidden">
      <Navbar activePage="what-we-do" />

      {/* Editorial Header - Refined Scale */}
      <header className="pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">
              <span className="w-10 h-0.5 bg-brand"></span>
              Initiatives & Impact
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-8">
              The <span className="text-brand">Portfolio</span>
            </h1>
            <p className="text-xl text-charcoal/60 max-w-2xl font-medium leading-relaxed italic border-l-4 border-brand pl-8">
              Interconnected programmes, prestigious awards, and pan-African advocacy driving systemic change.
            </p>
          </div>
        </div>
      </header>

      {/* Interactive Programmes - New System */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-[60px]" id="programmes">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
               <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-none mb-6">Tailored <span className="text-brand">Growth</span></h2>
               <div className="flex flex-wrap gap-3">
                  {['All', 'Open', 'Growth', 'Idea'].map(f => (
                    <button 
                      key={f} 
                      onClick={() => setFilter(f)}
                      className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-editorial border ${filter === f ? 'bg-charcoal text-white border-charcoal' : 'bg-transparent text-charcoal/40 border-charcoal/10 hover:border-brand hover:text-brand'}`}
                    >
                      {f}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProgrammes.map((p, i) => (
              <div 
                key={p.id} 
                onClick={() => setSelectedProg(p)}
                className="group p-10 bg-cream rounded-[40px] border border-charcoal/5 hover:border-brand transition-editorial cursor-pointer relative overflow-hidden flex flex-col justify-between h-full"
              >
                <div className="absolute top-8 right-8">
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     p.status === 'Open' ? 'bg-green-100 text-green-700' : 
                     p.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' : 'bg-charcoal/10 text-charcoal/40'
                   }`}>
                     {p.status}
                   </span>
                </div>
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white transition-editorial">
                         {p.stage.includes('Growth') ? <TrendingUp size={20} /> : <Rocket size={20} />}
                      </div>
                      <p className="text-brand font-black tracking-widest text-[9px] uppercase">{p.stage}</p>
                   </div>
                   <h3 className="text-2xl font-black uppercase font-heading leading-tight mb-6 group-hover:text-brand transition-editorial">{p.title}</h3>
                   <p className="text-charcoal/50 text-base font-medium leading-relaxed mb-8">{p.desc}</p>
                </div>
                <div className="flex items-center gap-3 text-brand font-black tracking-widest text-[10px] uppercase group-hover:gap-5 transition-editorial mt-auto">
                   View Full Details <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Conference Showcase - Fixed Image & Expanded Detail */}
      <section className="py-32 px-6 md:px-12 bg-charcoal text-white overflow-hidden relative" id="conference">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 leading-none select-none pointer-events-none -mr-24 -mt-24 rotate-12">
           SUMMIT
        </div>
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-8">
                 <Sparkles size={12} className="text-brand animate-pulse"/>
                 <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Save The Date</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
                Beyond <br/> <span className="text-brand">Access</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-brand font-black uppercase font-heading mb-10 leading-tight">
                 "Economic Empowerment in a Digital Era"
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Calendar, title: "Oct 8 - 9, 2026", sub: "Global Summit" },
                  { icon: MapPin, title: "Cape Town, ZA", sub: "CTICC Mainstage" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase font-heading">{item.title}</h4>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="/purchase-conference-tickets" className="inline-flex items-center gap-4 bg-white text-charcoal px-12 py-6 rounded-full font-black tracking-widest text-[10px] uppercase hover:bg-brand hover:text-white transition-editorial shadow-2xl">
                SECURE YOUR TICKETS <MoveRight size={20}/>
              </a>
            </div>
            
            <div className="lg:col-span-6 relative mt-16 lg:mt-0">
              <div className="aspect-video rounded-[48px] overflow-hidden shadow-2xl border-8 border-white/5 rotate-2 group relative">
                <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=1000&q=80" alt="Summit" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-editorial"></div>
              </div>
              
              {/* Overlapping Info Card */}
              <div className="absolute -bottom-12 -left-12 glass-card p-10 rounded-[40px] max-w-sm hidden md:block shadow-2xl border border-white/10 z-20">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white">
                       <Users size={20} />
                    </div>
                    <div className="text-3xl font-black font-heading">1,500+</div>
                 </div>
                 <p className="text-xs font-black uppercase tracking-widest opacity-60">Delegates from 50+ Nations converging to co-create the future.</p>
              </div>
            </div>
          </div>

          {/* New Section: What to expect */}
          <div className="grid lg:grid-cols-2 gap-16 mt-32 pt-24 border-t border-white/10">
             <div>
                <h4 className="text-2xl font-black uppercase font-heading mb-10 flex items-center gap-4">
                   <Lightbulb className="text-brand" /> What to expect
                </h4>
                <div className="space-y-4">
                   {[
                     { t: "Global Keynotes", d: "Hear from policymakers, industry titans, and visionary founders shaping the future.", i: Mic },
                     { t: "Masterclasses", d: "Hands-on sessions focusing on digital transformation and funding readiness.", i: Briefcase },
                     { t: "The Exhibition", d: "Discover innovative products from women-owned SMEs across the continent.", i: Star }
                   ].map((item, i) => (
                     <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-editorial">
                        <div className="bg-charcoal rounded-2xl p-3 border border-brand/30"><item.i size={20} className="text-brand"/></div>
                        <div>
                           <h5 className="font-black uppercase text-base mb-1">{item.t}</h5>
                           <p className="text-white/40 text-sm font-medium leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div>
                <h4 className="text-2xl font-black uppercase font-heading mb-10 flex items-center gap-4">
                   <Target className="text-brand" /> Why attend?
                </h4>
                <div className="space-y-4">
                   {[
                     { t: "Unmatched Networking", d: "Connect with investors and partners from 50+ countries.", i: Globe },
                     { t: "Secure Funding", d: "Direct access to VCs and institutional funders specifically backing women.", i: TrendingUp },
                     { t: "Celebrate Excellence", i: Award, d: "Conclude at the prestigious AWIEF Awards Gala honouring pioneers." }
                   ].map((item, i) => (
                     <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl flex items-start gap-6 hover:bg-white/10 transition-editorial">
                        <div className="bg-charcoal rounded-2xl p-3 border border-brand/30"><item.i size={20} className="text-brand"/></div>
                        <div>
                           <h5 className="font-black uppercase text-base mb-1">{item.t}</h5>
                           <p className="text-white/40 text-sm font-medium leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Refined */}
      <section className="py-32 px-6 md:px-12 bg-white" id="awards">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80" alt="Awards" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <Award size={48} className="mb-6 text-white" />
                  <h3 className="text-4xl font-black uppercase font-heading mb-4 leading-tight">Honouring <br/> Excellence</h3>
                  <p className="font-medium opacity-80 italic">Celebrating the achievement of Africa's most outstanding founders.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8 italic">The Hall of Fame</p>
               <h2 className="text-4xl md:text-[6rem] font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
                 The <span className="text-brand">Awards</span>
               </h2>
               <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    { cat: "Tech Entrepreneur", desc: "Innovative solutions in the digital space." },
                    { cat: "Agri Entrepreneur", desc: "Revolutionizing Africa's agriculture." },
                    { cat: "Creative Industry", desc: "Leading the way in arts & culture." },
                    { cat: "Social Entrepreneur", desc: "Driving impact and systemic change." }
                  ].map((award, i) => (
                    <div key={i} className="p-8 bg-cream rounded-[32px] border border-charcoal/5 hover:border-brand transition-editorial group">
                       <Zap size={20} className="mb-4 text-brand opacity-40 group-hover:opacity-100 transition-editorial" />
                       <h4 className="text-lg font-black uppercase font-heading mb-2 leading-none">{award.cat}</h4>
                       <p className="text-xs font-medium text-charcoal/40 leading-relaxed">{award.desc}</p>
                    </div>
                  ))}
               </div>
               <a href="/past-awards" className="inline-flex items-center gap-4 text-brand font-black tracking-widest text-[10px] uppercase group">
                  View Hall of Fame Alumni <ArrowRight size={18} className="group-hover:translate-x-2 transition-editorial" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advocacy Section - Refined */}
      <section className="py-32 px-6 md:px-12 bg-cream rounded-t-[60px]" id="advocacy">
        <div className="max-w-[1200px] mx-auto">
          <div className="editorial-grid items-center gap-20">
             <div className="col-span-12 lg:col-span-7">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-8">
                  <Megaphone size={24} className="text-brand" />
                </div>
                <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-10">
                  Lobbying <br/> for <span className="text-brand">Equality</span>
                </h2>
                <p className="text-xl text-charcoal/60 leading-relaxed font-medium mb-12 italic border-l-4 border-brand pl-8">
                  We dismantle structural barriers working closely with governments, the African Union, and international bodies to champion policies that foster gender equality.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: "AfCFTA Integration", desc: "Participating in cross-border trade without discriminatory tariffs." },
                    { title: "Financial Inclusion", desc: "Removing collateral barriers impacting female founders." },
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="w-10 h-0.5 bg-brand mb-6 transition-editorial group-hover:w-full"></div>
                      <h4 className="text-xl font-black uppercase font-heading mb-4 leading-tight">{item.title}</h4>
                      <p className="text-sm text-charcoal/40 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
             <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="aspect-square bg-charcoal rounded-[40px] overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" alt="Advocacy" className="w-full h-full object-cover grayscale opacity-50" />
                </div>
                <div className="aspect-square bg-brand rounded-[40px] overflow-hidden shadow-xl translate-y-12">
                   <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" alt="Advocacy" className="w-full h-full object-cover grayscale opacity-50" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Programme Modal - New Detail Layout */}
      {selectedProg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setSelectedProg(null)}></div>
          <div className="bg-white rounded-[48px] max-w-2xl w-full relative z-10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
            <button onClick={() => setSelectedProg(null)} className="absolute top-8 right-8 w-12 h-12 bg-cream rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20 border border-charcoal/5">
              <X size={24} />
            </button>
            <div className="p-10 md:p-16">
               <div className="flex items-center gap-4 mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    selectedProg.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-charcoal/10 text-charcoal/40'
                  }`}>
                    {selectedProg.status}
                  </span>
                  <p className="text-brand font-black tracking-widest text-[10px] uppercase italic">{selectedProg.stage}</p>
               </div>
               <h3 className="text-3xl md:text-4xl font-black uppercase font-heading leading-tight mb-8">{selectedProg.title}</h3>
               <p className="text-xl text-charcoal/40 italic font-medium leading-relaxed mb-10 border-l-4 border-brand pl-8">
                  "{selectedProg.desc}"
               </p>
               <div className="h-px bg-charcoal/5 mb-10"></div>
               <p className="text-lg text-charcoal/70 leading-relaxed font-medium mb-12">
                  {selectedProg.details}
               </p>
               {selectedProg.status === 'Open' ? (
                 <button className="w-full bg-brand text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-charcoal transition-editorial shadow-2xl">
                   Apply for this cohort
                 </button>
               ) : (
                 <button disabled className="w-full bg-charcoal/5 text-charcoal/30 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] cursor-not-allowed">
                   Applications Closed
                 </button>
               )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
