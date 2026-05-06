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

      {/* Involvement Portal */}
      <section className="section-spacing px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid gap-12">
            {[
              { 
                title: "Become a Donor", 
                desc: "Support our programs directly. Your donation funds training, mentorship, and resources for women entrepreneurs across the continent.",
                icon: HeartHandshake,
                link: "/donate",
                action: "Make a Donation",
                img: "photo-1532629345422-7515f3d16bb6"
              },
              { 
                title: "Partner With Us", 
                desc: "Align your organization with a powerful cause. We offer corporate sponsorships, programmatic partnerships, and bespoke collaborations.",
                icon: Handshake,
                link: "/contact",
                action: "Explore Partnerships",
                img: "photo-1556761175-5973dc0f32d7"
              },
              { 
                title: "Volunteer Expertise", 
                desc: "Share your expertise. We are always looking for mentors, speakers, and industry experts to help guide the next generation of leaders.",
                icon: Users,
                link: "/contact",
                action: "Apply to Volunteer",
                img: "photo-1531482615713-2afd69097998"
              }
            ].map((card, i) => (
              <div key={i} className="col-span-12 lg:col-span-4 group">
                 <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl mb-10 border-4 border-white/10">
                    <img src={`https://images.unsplash.com/${card.img}?w=800&q=80`} alt={card.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-editorial"></div>
                    <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-editorial">
                       <card.icon size={32} />
                    </div>
                 </div>
                 <h3 className="text-3xl font-black uppercase font-heading mb-4 group-hover:text-brand transition-editorial">{card.title}</h3>
                 <p className="text-charcoal/50 text-sm font-medium leading-relaxed mb-10 italic">
                   {card.desc}
                 </p>
                 <a href={card.link} className="inline-flex items-center gap-4 bg-charcoal text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand transition-editorial shadow-xl">
                   {card.action} <ArrowRight size={18} />
                 </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition */}
      <section className="py-32 px-6 md:px-12 bg-charcoal text-white rounded-[60px] relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="editorial-grid items-center gap-20">
            <div className="col-span-12 lg:col-span-6">
               <p className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-8 italic">Strategic Value</p>
               <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-12">
                 Why <span className="text-brand italic serif">AWIEF</span>?
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
