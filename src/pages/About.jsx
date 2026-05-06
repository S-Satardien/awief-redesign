import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Target, Eye, TrendingUp, Award, Users, Globe, BookOpen, ArrowRight, X, Heart, ChevronDown, HeartHandshake, Sparkles, MoveRight } from 'lucide-react'

const advisoryBoard = [
  { 
    name: "Fatma Samoura", 
    title: "Former FIFA Secretary General", 
    img: "photo-1573496359142-b8d87734a5a2", 
    bio: "Fatma Samoura is a globally respected leader with extensive experience across international development, governance, and sport. She made history as the first woman to serve as Secretary General of FIFA, holding the role from 2016 to 2023. Prior to joining FIFA, Ms Samoura spent 21 years with the United Nations, working across complex humanitarian, socio-economic, political, and security contexts. She served in senior leadership roles in seven countries." 
  },
  { 
    name: "Nicolas Pompigne-Mognard", 
    title: "Chairman, APO Group", 
    img: "photo-1560250097-0b93528c311a", 
    bio: "Nicolas Pompigne-Mognard is the Founder and Chairman of APO Group, the leading pan-African communications consultancy and press release distribution service. He is widely regarded as a trusted advisor and thought leader across Africa's business, policy, and media landscapes. Recognised among the 100 Most Influential Africans in both 2023 and 2024." 
  },
  { 
    name: "Dalia Ibrahim", 
    title: "CEO, Nahdet Misr", 
    img: "photo-1580489944761-15a19d654956", 
    bio: "Dalia Ibrahim is a business leader, angel investor, and leading advocate for education, innovation, and entrepreneurship across the Middle East and Africa. As CEO of Nahdet Misr Publishing House, she leads one of the region's most established learning groups. She is also the Founder and CEO of EdVentures, the first education-focused corporate venture capital firm." 
  },
  { 
    name: "Awa Ndiaye-Seck", 
    title: "President, ADES-USA", 
    img: "photo-1508214751196-bfd1414742e9", 
    bio: "Awa Ndiaye Seck is a seasoned development and governance leader with over 40 years of experience at national, regional, and international levels. Her expertise spans development, policy, governance, conflict prevention, peacebuilding, gender equality, and regional integration. She spent nearly two decades with the United Nations." 
  }
]

const team = [
  { name: "Irene Ochem", title: "Founder & CEO", img: "photo-1531123897727-8f129e1688ce" },
  { name: "Kumbirai Mapiye", title: "Finance & Admin", img: "photo-1544005313-94ddf0286df2" },
  { name: "Ekene Ochem", title: "Project Manager", img: "photo-1531384441138-2736e62e0919" },
  { name: "Akpene Samiama", title: "Programmes Manager", img: "photo-1589156191108-c7ea6f28f97b" },
  { name: "Rebecca Ile", title: "Programmes Associate", img: "photo-1573496359142-b8d87734a5a2" },
  { name: "Riana Andrews", title: "Communications", img: "photo-1534528741775-53994a69daeb" },
  { name: "Lou-Anne Daniels", title: "Events & Engagement", img: "photo-1508214751196-bfd1414742e9" },
  { name: "Dalia Diamond", title: "Social Media", img: "photo-1573497019940-1c28c88b4f3e" },
]

export default function About() {
  const [selected, setSelected] = useState(null)
  const [activeTier, setActiveTier] = useState('strategic')

  return (
    <div className="min-h-screen font-body text-charcoal bg-[#fcfbf9] overflow-x-hidden">
      <Navbar activePage="about" />

      {/* Hero Refinement */}
      <header className="pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-5"></div>
        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 mb-8">
              <Sparkles size={12} className="text-brand"/>
              <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase italic">Since 2015 — 12 Years of Impact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-8">
              Transforming <br/> <span className="text-brand italic">The Narrative</span>
            </h1>
            <p className="text-xl text-charcoal/60 max-w-lg font-medium leading-relaxed mb-12">
              AWIEF is the catalyst for Africa's female-led economic revolution. We build the infrastructure for success through dedicated support, networking, and advocacy.
            </p>
            <div className="flex gap-6">
               <div className="flex flex-col">
                  <span className="text-3xl font-black text-brand">48</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-charcoal/40">Countries</span>
               </div>
               <div className="w-px h-10 bg-charcoal/10"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-black text-brand">15k+</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-charcoal/40">Entrepreneurs</span>
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
             <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-editorial duration-1000 max-w-md mx-auto border-8 border-white">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80" alt="Empowerment" className="w-full h-full object-cover scale-110 hover:scale-100 transition-editorial duration-1000 grayscale hover:grayscale-0" />
             </div>
             <div className="absolute -top-8 -right-4 w-44 h-44 bg-charcoal rounded-full flex flex-col items-center justify-center p-6 text-center -rotate-12 shadow-2xl border-4 border-brand z-20">
                <p className="text-brand text-[11px] font-black uppercase tracking-widest leading-tight">Irene Ochem</p>
                <p className="text-white text-[8px] font-bold uppercase mt-1 tracking-widest">Visionary Leader</p>
             </div>
          </div>
        </div>
      </header>

      {/* Kinetic Mission - Proportions Refined */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white rounded-[60px] -mt-12 relative z-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-10">
                Our <span className="text-brand">Core</span> <br/> Intent
              </h2>
              <div className="space-y-12">
                 <div className="group cursor-default">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-0.5 bg-brand transition-editorial group-hover:w-16"></div>
                       <h3 className="text-2xl font-black uppercase font-heading">Mission</h3>
                    </div>
                    <p className="text-lg text-white/40 leading-relaxed font-medium group-hover:text-white transition-editorial">
                      To advance economic rights and security for women through dedicated entrepreneurship support and development across the African continent.
                    </p>
                 </div>
                 <div className="group cursor-default">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-0.5 bg-brand transition-editorial group-hover:w-16"></div>
                       <h3 className="text-2xl font-black uppercase font-heading">Vision</h3>
                    </div>
                    <p className="text-lg text-white/40 leading-relaxed font-medium group-hover:text-white transition-editorial">
                      An inclusive and thriving Africa where women-owned businesses are empowered to create high-impact, sustainable enterprises contributing to GDP.
                    </p>
                 </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden mt-12">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80" alt="Legacy" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-editorial duration-1000" />
               </div>
               <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" alt="Legacy" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-editorial duration-1000" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Spread - Refined Scale */}
      <section className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1200px] mx-auto relative">
           <div className="absolute top-0 left-0 text-[20rem] font-black text-charcoal/5 leading-none select-none pointer-events-none -translate-y-1/2">
             “
           </div>
           <div className="editorial-grid items-center relative z-10">
              <div className="col-span-12 lg:col-span-8">
                 <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-10">
                   "If I can do it, <br/> <span className="text-brand">they can do it!</span>"
                 </h2>
                 <p className="text-2xl font-medium text-charcoal/40 italic leading-tight mb-12 max-w-2xl">
                   Nothing is more exciting than chasing your dreams on your own terms. Yet, the journey isn't easy—especially for females in Africa.
                 </p>
                 <div className="grid md:grid-cols-2 gap-10 text-charcoal/70 font-medium text-base leading-relaxed">
                    <p>Growing up in Nigeria, Irene Ochem understood the imperative of empowering women. Building her career globally, she learned resilience. She knew that one day she would be the leader she wished she had.</p>
                    <p>In 2015, Irene founded AWIEF, building a powerful platform driving inclusive economic transformation and working tirelessly to close the gender gap.</p>
                 </div>
              </div>
              <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-0">
                 <div className="bg-cream p-10 rounded-[40px] shadow-xl relative max-w-sm mx-auto">
                    <div className="w-12 h-12 bg-brand rounded-full absolute -top-6 -left-6 flex items-center justify-center text-white shadow-lg">
                       <MoveRight size={24} />
                    </div>
                    <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-brand mb-4">Founder's Note</h4>
                    <p className="text-base font-black uppercase font-heading leading-tight mb-6">Irene Ochem turned words into deeds, closing the gender gap for 12+ years.</p>
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-inner">
                       <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" alt="Irene Ochem" className="w-full h-full object-cover grayscale" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Advisory Board - Proportion Refinement */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white" id="advisory-board">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-6">Executive Counsel</p>
               <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.9] tracking-tighter">
                 Strategic <br/> <span className="text-brand">Cabinet</span>
               </h2>
            </div>
            <p className="text-white/40 font-medium text-lg max-w-xs border-l-2 border-brand pl-6">
              A prestigious council of globally respected leaders driving inclusive growth.
            </p>
          </div>

          <div className="space-y-2">
             {advisoryBoard.map((m, i) => (
               <div key={i} onClick={() => setSelected(m)} className="group border-b border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-8 cursor-pointer hover:bg-white/5 transition-editorial px-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                     <span className="text-white/20 text-lg font-black font-heading group-hover:text-brand transition-editorial">0{i+1}</span>
                     <div>
                        <h4 className="text-2xl md:text-4xl font-black uppercase font-heading group-hover:translate-x-2 transition-editorial">{m.name}</h4>
                        <p className="text-brand font-bold tracking-[0.2em] uppercase text-[10px] mt-1">{m.title}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-editorial -translate-x-6 group-hover:translate-x-0 hidden md:block border border-brand">
                        <img src={`https://images.unsplash.com/${m.img}?w=300&q=80`} alt={m.name} className="w-full h-full object-cover grayscale" />
                     </div>
                     <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-editorial">
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-editorial" />
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Mosaic Partner Grid - Scaled Down */}
      <section className="py-32 px-6 md:px-12 bg-white" id="our-partners">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter leading-[0.9] mb-10">
               The <span className="text-brand">Ecosystem</span>
             </h2>
             <div className="flex flex-wrap justify-center gap-3">
                {['strategic', 'institutional', 'supporting'].map(t => (
                  <button 
                    key={t} 
                    onClick={() => setActiveTier(t)}
                    className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-editorial border ${activeTier === t ? 'bg-charcoal text-white border-charcoal' : 'bg-transparent text-charcoal/40 border-charcoal/10 hover:border-brand hover:text-brand'}`}
                  >
                    {t}
                  </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
               <div key={n} className="aspect-square bg-cream rounded-3xl flex items-center justify-center group hover:bg-brand transition-editorial shadow-sm hover:shadow-xl hover:-translate-y-2">
                  <span className="text-charcoal/20 font-black tracking-widest text-[8px] uppercase group-hover:text-white transition-editorial">{activeTier}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Team Grid - Refined */}
      <section className="py-24 px-6 md:px-12 bg-charcoal rounded-t-[60px]" id="team">
        <div className="max-w-[1200px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tighter text-white leading-[0.9]">
                Human <br/> <span className="text-brand">Capital</span>
              </h2>
              <p className="text-white/40 text-lg font-medium max-w-[200px] md:text-right leading-tight">Dedicated professionals for impact.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {team.map((m, i) => (
                <div key={i} className="group">
                  <div className="relative mb-6">
                     <div className="aspect-[4/5] rounded-[32px] overflow-hidden grayscale group-hover:grayscale-0 transition-editorial duration-1000 shadow-xl">
                        <img src={`https://images.unsplash.com/${m.img}?w=500&q=80`} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-editorial duration-1000" />
                     </div>
                     <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white rotate-12 opacity-0 group-hover:opacity-100 transition-editorial group-hover:rotate-0">
                        <Users size={18} />
                     </div>
                  </div>
                  <h4 className="text-xl font-black uppercase font-heading text-white">{m.name}</h4>
                  <p className="text-brand font-bold tracking-widest text-[9px] uppercase mt-1">{m.title}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Support Section - Proportions Refined */}
      <section className="py-32 px-6 md:px-12 bg-brand text-white overflow-hidden relative" id="support">
         <div className="absolute top-0 right-0 text-[20rem] font-black text-white/5 leading-none select-none pointer-events-none -mr-24 -mt-24 rotate-12">
           RISE
         </div>
         <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="editorial-grid items-center gap-16">
               <div className="col-span-12 lg:col-span-7">
                  <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-10">
                    Be The <br/> <span className="text-charcoal">Change</span>.
                  </h2>
                  <p className="text-xl font-medium text-white/80 leading-relaxed max-w-xl mb-12 italic">
                    Whether your passion is to build, invest, or advocate, there is a prioritized place for you in our community.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="/get-involved" className="bg-charcoal text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand transition-editorial shadow-xl">Partner with us</a>
                    <a href="/contact-us" className="bg-white/10 backdrop-blur border border-white/20 text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-brand transition-editorial">Contact team</a>
                  </div>
               </div>
               <div className="col-span-12 lg:col-span-5 grid gap-3">
                  {[
                    { icon: HeartHandshake, t: "Donate & Partner", d: "Strategic corporate backing." },
                    { icon: Users, t: "Volunteer", d: "Share time & expertise." },
                    { icon: Globe, t: "Join Community", d: "Access Africa's network." }
                  ].map((card, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white hover:text-brand transition-editorial group flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand/10">
                          <card.icon size={20} />
                       </div>
                       <div>
                          <h4 className="text-lg font-black uppercase font-heading leading-none mb-1">{card.t}</h4>
                          <p className="text-xs opacity-60 font-medium">{card.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Bio Overlay - Balanced Scale */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setSelected(null)}></div>
          <div className="bg-white rounded-[48px] max-w-4xl w-full relative z-10 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 max-h-[85vh]">
            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 w-12 h-12 bg-cream rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20 border border-charcoal/5">
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              <div className="w-full md:w-2/5 min-h-[300px] md:h-auto overflow-hidden">
                <img src={`https://images.unsplash.com/${selected.img}?w=800&q=80`} alt={selected.name} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="w-full md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <div className="w-10 h-0.5 bg-brand mb-8"></div>
                <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-6">Executive Advisory</p>
                <h3 className="text-3xl md:text-4xl font-black uppercase font-heading leading-tight mb-6">{selected.name}</h3>
                <p className="text-charcoal/40 font-black tracking-widest text-[10px] uppercase mb-10 italic">{selected.title}</p>
                <p className="text-lg text-charcoal/70 leading-relaxed font-medium">
                  {selected.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
