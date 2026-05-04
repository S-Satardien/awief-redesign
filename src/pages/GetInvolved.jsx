import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HeartHandshake, Users, Globe, ArrowRight, Building, CheckCircle2, Handshake, Gift, Briefcase, GraduationCap, ChevronRight } from 'lucide-react'

export default function GetInvolved() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="get-involved" />

      {/* Editorial Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
          Act
        </div>
        <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 relative z-10">Take Action Today</p>
        <h1 className="text-5xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
          Get <span className="text-brand">Involved</span>
        </h1>
        <p className="text-xl text-charcoal/60 max-w-3xl mx-auto font-medium leading-relaxed relative z-10">
          Whether you want to invest in the next generation of female founders, share your expertise, or join a powerful network of peers, there is a place for you in the AWIEF ecosystem.
        </p>
      </header>

      {/* 1. DONORS & PARTNERS / CSI */}
      <section className="section-spacing px-6 md:px-12 bg-white rounded-t-[60px]" id="donor-partner">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center gap-24">
             <div className="col-span-12 lg:col-span-6 relative">
               <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl relative">
                 <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1000&q=80" alt="Sponsorship" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-editorial duration-1000" />
                 <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-editorial"></div>
               </div>
               <div className="absolute -bottom-12 -right-12 glass-card !bg-white/80 p-10 rounded-[32px] max-w-xs z-20 shadow-2xl border border-brand/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                       <Building size={24} />
                    </div>
                    <div className="text-4xl font-black text-charcoal">150+</div>
                  </div>
                  <p className="text-sm font-bold text-charcoal/60 leading-relaxed uppercase tracking-widest">Global partners actively funding our mission.</p>
               </div>
             </div>
             <div className="col-span-12 lg:col-span-6">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-6">
                 <HeartHandshake className="text-brand" size={24} />
               </div>
               <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">Empower Through Investment & CSI</p>
               <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
                 Become a Donor or <br/> <span className="text-brand">Strategic Partner</span>
               </h2>
               <p className="text-xl text-charcoal/60 leading-relaxed font-medium mb-12">
                 When you fund AWIEF, you aren't just making a donation—you are making a high-yield investment in Africa's economic future. Partner with us to co-create tailored enterprise development programmes or align your <strong>CSI (Corporate Social Investment)</strong> goals with our impactful initiatives.
               </p>
               <div className="space-y-6 mb-12">
                  <div className="p-6 bg-cream rounded-3xl flex items-start gap-6 border border-charcoal/5 group hover:border-brand transition-editorial">
                     <div className="mt-1 bg-charcoal rounded-full p-1.5 group-hover:bg-brand transition-editorial"><CheckCircle2 size={16} className="text-brand group-hover:text-white transition-editorial"/></div>
                     <div>
                        <h4 className="font-black uppercase text-sm mb-2">Fund Accelerator Programmes</h4>
                        <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest leading-relaxed">Directly support cohorts of female founders to become investment-ready.</p>
                     </div>
                  </div>
                  <div className="p-6 bg-cream rounded-3xl flex items-start gap-6 border border-charcoal/5 group hover:border-brand transition-editorial">
                     <div className="mt-1 bg-charcoal rounded-full p-1.5 group-hover:bg-brand transition-editorial"><CheckCircle2 size={16} className="text-brand group-hover:text-white transition-editorial"/></div>
                     <div>
                        <h4 className="font-black uppercase text-sm mb-2">Event Sponsorship</h4>
                        <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest leading-relaxed">Elevate your brand at the Annual AWIEF Conference and AWIEF Awards.</p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-wrap gap-6">
                  <button className="bg-charcoal text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand transition-editorial shadow-2xl flex items-center gap-4">
                    Partner With Us <ArrowRight size={18} />
                  </button>
                  <button className="bg-white border-2 border-charcoal text-charcoal px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-white hover:border-brand transition-editorial shadow-2xl">
                    Make a Donation
                  </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. VOLUNTEERS */}
      <section className="section-spacing px-6 md:px-12 bg-charcoal text-white" id="volunteer">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid items-center gap-24">
             <div className="col-span-12 lg:col-span-7">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-6">
                 <Users className="text-brand" size={24} />
               </div>
               <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">Share Your Expertise</p>
               <h2 className="text-4xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
                 Get Involved as a <br/> <span className="text-brand">Volunteer</span>
               </h2>
               <p className="text-white/40 text-xl font-medium leading-relaxed max-w-2xl mb-12">
                 Our community thrives on the shared knowledge of industry experts. If you have experience in business strategy, digital transformation, legal compliance, or finance, your mentorship can alter the trajectory of an early-stage startup.
               </p>
               <div className="space-y-8 mb-12">
                  {[
                    { icon: GraduationCap, title: "Become a Mentor", desc: "Commit to 1-on-1 virtual sessions with founders in our accelerator programmes." },
                    { icon: Briefcase, title: "Technical Advisory", desc: "Provide pro-bono consulting in specific fields like IP law, tax, or UX/UI design." },
                    { icon: Globe, title: "Event Support", desc: "Join our dynamic team on the ground during the Annual Conference and Exhibitions." }
                  ].map((role, i) => (
                    <div key={i} className="flex gap-6 items-start">
                       <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          <role.icon size={24} className="text-brand" />
                       </div>
                       <div>
                          <h5 className="font-black uppercase text-lg mb-2">{role.title}</h5>
                          <p className="text-white/40 font-medium leading-relaxed">{role.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <button className="bg-brand text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-dark transition-editorial shadow-2xl flex items-center gap-4">
                 Apply to Volunteer <ChevronRight size={18} />
               </button>
             </div>
             <div className="col-span-12 lg:col-span-5 relative mt-24 lg:mt-0">
                <div className="relative z-10 rounded-[40px] overflow-hidden aspect-square shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-editorial duration-700">
                  <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1000&q=80" alt="Volunteer" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute -top-12 -left-12 glass-card !bg-white/5 p-10 rounded-[32px] max-w-xs z-20">
                  <p className="text-sm font-black uppercase tracking-widest leading-tight text-white/60">Your expertise is the bridge to their success.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. JOIN COMMUNITY */}
      <section className="section-spacing px-6 md:px-12 bg-white overflow-hidden relative" id="join-community">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-8 mx-auto border border-brand/20">
            <Globe className="text-brand" size={32} />
          </div>
          <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 italic">Your Network is Your Net Worth</p>
          <h2 className="text-4xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
            Join the AWIEF <br/> <span className="text-brand">Community</span>
          </h2>
          <p className="text-xl text-charcoal/60 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            Step into a powerful, pan-African sisterhood of innovators, executives, and founders. By becoming a member, you unlock exclusive access to resources, investor matchmaking, and year-round networking opportunities.
          </p>

          <div className="editorial-grid gap-8 mb-20 text-left">
            {[
              { t: "Exclusive Resources", d: "Gain access to members-only masterclasses, market research, and funding portals." },
              { t: "Global Networking", d: "Connect with peers across 48 countries through our dedicated community app." },
              { t: "Event Discounts", d: "Enjoy VIP pricing and early-bird access to the Annual AWIEF Conference." }
            ].map((item, i) => (
              <div key={i} className="col-span-12 lg:col-span-4 p-10 bg-cream rounded-[40px] border border-charcoal/5 hover:border-brand transition-editorial">
                <h4 className="text-2xl font-black uppercase font-heading mb-4">{item.t}</h4>
                <p className="text-charcoal/50 font-medium leading-relaxed">{item.d}</p>
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
