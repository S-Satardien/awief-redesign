import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HeartHandshake, Users, Globe, ArrowRight, Building, CheckCircle2, Handshake, Gift, Briefcase, GraduationCap, ChevronRight, Sparkles } from 'lucide-react'

export default function GetInvolved() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="get-involved" />

      {/* Editorial Header */}
      <header className="pt-56 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="african-pattern absolute inset-0 opacity-10 scale-125"></div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
           Join
        </div>
        <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 relative z-10">Make an Impact</p>
        <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
           Be the <br/> <span className="text-brand">Catalyst</span>
        </h1>
        <p className="text-xl text-charcoal/40 max-w-2xl mx-auto font-medium leading-relaxed relative z-10 italic">
          Whether you are looking to donate, partner with us on strategic initiatives, or volunteer your time—your contribution drives Africa's growth.
        </p>
      </header>

      {/* 1. DONOR & CSI PORTAL */}
      <section className="section-spacing px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20" id="donor-partner">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center gap-24">
             <div className="col-span-12 lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                   <HeartHandshake size={14} className="text-brand"/>
                   <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Individual & Corporate Giving</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10">
                   Become a <br/> <span className="text-brand">Donor</span>
                </h2>
                <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-medium mb-12 italic border-l-8 border-brand pl-12">
                   Your contribution directly funds the infrastructure for Africa's female-led economic revolution.
                </p>
                <p className="text-lg text-charcoal/50 font-medium leading-relaxed mb-12 max-w-xl">
                   From sponsoring individual scholarships to funding entire regional accelerator cohorts, we offer transparent, high-impact avenues for philanthropy. Align your CSR and CSI goals with a Pan-African movement that delivers measurable results.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div>
                      <h4 className="text-2xl font-black uppercase font-heading text-brand">100%</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mt-2">Direct Programme Funding</p>
                   </div>
                   <div>
                      <h4 className="text-2xl font-black uppercase font-heading text-brand">Tax</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40 mt-2">Deductible Contributions</p>
                   </div>
                </div>
                <a href="/donate" className="inline-flex items-center gap-6 bg-brand text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-charcoal transition-editorial shadow-2xl">
                   MAKE A DONATION <ArrowRight size={18} />
                </a>
             </div>
             <div className="col-span-12 lg:col-span-6 relative">
                <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl relative group border-4 border-white/20">
                   <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&q=80" alt="Donor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000" />
                   <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-editorial"></div>
                   <div className="absolute top-10 left-10 p-10 glass-panel rounded-[32px] border border-white/20 shadow-2xl max-w-xs animate-float">
                      <Sparkles className="text-brand mb-4" size={32} />
                      <p className="text-sm font-black uppercase tracking-widest leading-tight text-charcoal">"Investing in women is the most powerful catalyst for change."</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC PARTNERSHIPS */}
      <section className="section-spacing px-6 md:px-12 bg-charcoal text-white relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-10 scale-150"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="editorial-grid items-center gap-24">
              <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-[48px] overflow-hidden border-4 border-white/10 rotate-3">
                       <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=600&q=80" alt="Partners" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="aspect-square rounded-[48px] overflow-hidden border-4 border-white/10 -rotate-3 translate-y-12">
                       <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" alt="Collaboration" className="w-full h-full object-cover grayscale" />
                    </div>
                 </div>
                 <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[48px] backdrop-blur-xl">
                    <h4 className="text-gold font-black uppercase font-heading text-xl mb-6">Our Credibility</h4>
                    <ul className="space-y-6">
                       {[
                         "UN ECOSOC Special Consultative Status",
                         "Official Partners of Nedbank & USAID",
                         "Network spanning 54 African Nations"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/60">
                            <CheckCircle2 size={16} className="text-gold" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
              <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur mb-10">
                    <Handshake size={14} className="text-gold"/>
                    <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase">Bespoke Collaborations</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10">
                    Partner <br/> <span className="text-gold">With Us</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-medium mb-12 italic border-l-8 border-gold pl-12">
                    Co-create the future of African enterprise through high-impact programmatic partnerships.
                 </p>
                 <p className="text-lg text-white/30 font-medium leading-relaxed mb-12">
                    We work with forward-thinking organizations, development agencies, and corporate giants to design and implement tailored enterprise development programmes that deliver measurable socio-economic impact.
                 </p>
                 <a href="/contact" className="inline-flex items-center gap-6 bg-gold text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-editorial shadow-2xl">
                    EXPLORE PARTNERSHIPS <ArrowRight size={18} />
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* 3. VOLUNTEER EXPERTISE */}
      <section className="section-spacing px-6 md:px-12 bg-warm relative" id="volunteer">
        <div className="max-w-[1400px] mx-auto">
           <div className="editorial-grid items-center gap-24">
              <div className="col-span-12 lg:col-span-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur mb-10">
                    <Users size={14} className="text-brand"/>
                    <span className="text-brand text-[9px] font-black tracking-[0.3em] uppercase">Human Capital</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-10">
                    Volunteer <br/> <span className="text-brand">Expertise</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-medium mb-12 italic border-l-8 border-brand pl-12">
                    Share your intelligence. Guide the next generation of African business giants.
                 </p>
                 <p className="text-lg text-charcoal/50 font-medium leading-relaxed mb-12">
                    Whether as a mentor for our accelerator programmes, a speaker at our summits, or a technical advisor—your professional expertise is a bridge to success for thousands of early-stage founders.
                 </p>
                 <div className="space-y-6 mb-12">
                    {[
                      { t: "Executive Mentorship", d: "One-on-one sessions with high-potential founders." },
                      { t: "Summit Speakers", d: "Leading panels and masterclasses on global stages." },
                      { t: "Technical Advisory", d: "Pro-bono legal, financial, and strategy consulting." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-center p-6 glass-panel rounded-3xl group hover:border-brand transition-editorial">
                         <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial">
                            <CheckCircle2 size={24} />
                         </div>
                         <div>
                            <h4 className="text-sm font-black uppercase font-heading tracking-widest">{item.t}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <a href="/contact" className="inline-flex items-center gap-6 bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-2xl">
                    APPLY TO VOLUNTEER <ArrowRight size={18} />
                 </a>
              </div>
              <div className="col-span-12 lg:col-span-6">
                 <div className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl group border-4 border-white/40">
                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80" alt="Volunteer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100" />
                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-editorial"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand rounded-full flex flex-col items-center justify-center text-white text-center p-8 rotate-12 shadow-2xl border-4 border-white">
                       <Briefcase size={40} className="mb-4" />
                       <p className="text-[10px] font-black uppercase tracking-widest">Join our Technical Advisory Council</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Strategic Value Proposition (Consolidated with previous section logic but refined) */}
      <section className="py-32 px-6 md:px-12 bg-charcoal text-white rounded-[60px] relative overflow-hidden mt-12">
        <div className="african-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="editorial-grid items-center gap-20">
            <div className="col-span-12 lg:col-span-6">
               <p className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-8 italic">Strategic Advantage</p>
               <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-12">
                 Why Partner <br/> <span className="text-brand italic serif">With AWIEF</span>?
               </h2>
               <div className="space-y-12">
                  {[
                    { t: "Pan-African Reach", d: "Access a network spanning 54 African countries with deep local insights." },
                    { t: "High-Impact Data", d: "We track every dollar and every hour to ensure measurable socio-economic impact." },
                    { t: "Global Credibility", d: "UN ECOSOC status and partnerships with global bodies like USAID and Nedbank." }
                  ].map((item, j) => (
                    <div key={j} className="flex gap-8 items-start group">
                       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:border-brand transition-editorial">
                          <CheckCircle2 size={24} className="text-gold group-hover:text-white" />
                       </div>
                       <div>
                          <h4 className="text-xl font-black uppercase font-heading mb-2 group-hover:text-gold transition-editorial">{item.t}</h4>
                          <p className="text-white/40 text-sm font-medium leading-relaxed italic">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="col-span-12 lg:col-span-6 relative">
               <div className="aspect-square rounded-[60px] overflow-hidden border-8 border-white/5 relative">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80" alt="Team" className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-brand/20"></div>
               </div>
               <div className="absolute -bottom-12 -left-12 bg-gold text-white p-12 rounded-full shadow-2xl rotate-12 hidden lg:block border-4 border-charcoal">
                  <Sparkles size={48} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOIN COMMUNITY */}
      <section className="section-spacing px-6 md:px-12 bg-white overflow-hidden relative rounded-t-[60px] -mt-12 z-30" id="join-community">
        <div className="african-pattern absolute inset-0 opacity-5 scale-125"></div>
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-8 mx-auto border border-brand/20 shadow-lg">
            <Globe className="text-brand" size={32} />
          </div>
          <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 italic">Your Network is Your Net Worth</p>
          <h2 className="text-4xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
            Join the AWIEF <br/> <span className="text-brand">Community</span>
          </h2>
          <p className="text-xl text-charcoal/40 font-medium leading-relaxed max-w-3xl mx-auto mb-16 italic">
            Step into a powerful, pan-African sisterhood of innovators, executives, and founders. Unlock exclusive access to resources, investor matchmaking, and year-round networking.
          </p>

          <div className="editorial-grid gap-8 mb-20 text-left">
            {[
              { t: "Exclusive Resources", d: "Gain access to members-only masterclasses, market research, and funding portals." },
              { t: "Global Networking", d: "Connect with peers across 48 countries through our dedicated community app." },
              { t: "Event Discounts", d: "Enjoy VIP pricing and early-bird access to the Annual AWIEF Conference." }
            ].map((item, i) => (
              <div key={i} className="col-span-12 lg:col-span-4 p-10 glass-panel hover:border-brand transition-editorial">
                <h4 className="text-2xl font-black uppercase font-heading mb-4 group-hover:text-brand transition-editorial">{item.t}</h4>
                <p className="text-charcoal/40 font-medium leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>

          <button className="bg-charcoal text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand transition-editorial shadow-2xl flex items-center gap-4 mx-auto">
            Become a Member Today <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Kinetic Typography Marquee */}
      <section className="py-24 bg-brand overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center">
              <span className="text-[6rem] md:text-[10rem] font-black text-white/20 uppercase tracking-tighter px-12">Empower</span>
              <span className="text-[6rem] md:text-[10rem] font-black text-white uppercase tracking-tighter px-12 italic">Transform</span>
              <span className="text-[6rem] md:text-[10rem] font-black text-white/20 uppercase tracking-tighter px-12">Sustain</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
