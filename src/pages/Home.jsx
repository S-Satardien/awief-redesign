import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Play, Globe, Sparkles, Calendar, FileText, Users, BookOpen, Quote } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="home" />
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="editorial-grid max-w-[1600px] mx-auto px-6 md:px-12 w-full h-full">
          {/* Left Text Column */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center relative z-20 py-12 md:py-24">
            <div className="space-y-2 mb-8">
              <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                Est. 2015 — Pan-African Impact
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase font-heading text-charcoal/10 absolute -left-12 -top-12 md:-left-24 md:-top-24 select-none pointer-events-none">
                AWIEF
              </h1>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tighter uppercase font-heading mb-8">
              Shaping <br/>
              <span className="text-brand">Future</span> <br/>
              Economies
            </h2>
            
            <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-lg mb-12">
              We are a pan-African organization dedicated to accelerating women's economic empowerment through innovation, leadership, and entrepreneurship.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="/purchase-conference-tickets" className="bg-brand text-white px-10 py-5 rounded-full font-black tracking-widest text-xs hover:bg-brand-dark transition-editorial shadow-2xl shadow-brand/20">
                ATTEND THE SUMMIT
              </a>
              <button className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-editorial">
                  <Play size={20} fill="currentColor" />
                </div>
                <span className="font-black tracking-widest text-[11px] uppercase">Watch Story</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="relative h-[500px] md:h-full lg:h-[85vh] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&q=80" 
                alt="Empowerment" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-editorial duration-[2000ms] scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent"></div>
            </div>
            
            {/* Overlapping Info Card */}
            <div className="absolute -bottom-12 -left-6 md:-left-12 glass-card p-8 rounded-[32px] max-w-sm hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-black text-xs tracking-widest uppercase">UN ECOSOC</h4>
                  <p className="text-[10px] text-charcoal/50 font-bold">CONSULTATIVE STATUS</p>
                </div>
              </div>
              <p className="text-xs text-charcoal/70 leading-relaxed font-medium">
                Accredited since 2023, representing the highest level of UN recognition for civil society organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetrical Action Section */}
      <section className="section-spacing px-6 md:px-12 bg-white mt-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-4">Our Ecosystem</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-[0.9] tracking-tighter">
                Accelerating <br/> Impact at <span className="text-brand">Scale</span>
              </h2>
            </div>
            <p className="text-charcoal/50 font-bold text-sm max-w-sm md:text-right">
              Join a movement that spans 48 African nations, providing direct access to mentorship, capital, and markets.
            </p>
          </div>            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Calendar, title: "Summits", label: "Attend", desc: "Connect with global leaders and influencers at our flagship events and summits.", bg: "bg-brand/5" },
              { icon: FileText, title: "Programmes", label: "Apply", desc: "Access mentorship, training, and resources through our tailored accelerator and development programs.", bg: "bg-accent/5" },
              { icon: Users, title: "Partnerships", label: "Partner", desc: "Collaborate with forward-thinking organizations to drive real systemic change.", bg: "bg-charcoal/5" },
              { icon: BookOpen, title: "Resources", label: "Learn", desc: "Access our exclusive database of reports, training, and research on women's empowerment.", bg: "bg-brand-light/5" },
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[32px] ${item.bg} group hover:bg-brand transition-editorial h-auto flex flex-col justify-between cursor-pointer border border-transparent hover:shadow-2xl`}>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand shadow-sm group-hover:scale-110 transition-editorial mb-8">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <p className="text-[10px] font-black tracking-widest uppercase mb-2 group-hover:text-white/70">{item.label}</p>
                  <h3 className="text-3xl font-black uppercase font-heading group-hover:text-white mb-4">{item.title}</h3>
                  <p className="text-charcoal/50 text-sm font-medium leading-relaxed group-hover:text-white/70 transition-editorial">{item.desc}</p>
                </div>
                <div className="mt-8 text-brand font-black tracking-widest text-[10px] uppercase group-hover:text-white transition-editorial flex items-center gap-2">
                   Explore <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Editorial Section */}
      <section className="section-spacing relative">
        <div className="editorial-grid max-w-[1400px] mx-auto px-6 md:px-12 items-center">
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="relative z-10 rounded-[40px] overflow-hidden aspect-video shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1000&q=80" alt="Networking" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-12 mt-12 lg:mt-0">
            <h2 className="text-4xl md:text-5xl font-black uppercase font-heading mb-8 leading-[1]">
              The Partnership <br/> <span className="text-accent">Opportunity</span>
            </h2>
            <p className="text-lg text-charcoal/60 leading-relaxed mb-8 font-medium">
              Join Africa's most influential network. We provide a bridge between grassroots innovation and global investment, creating measurable economic change for women across the continent.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "150+ Strategic Partners Across 50 Nations",
                "Flagship UN-side Events Branding",
                "Measurable Economic Impact Outcomes"
              ].map((txt, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-charcoal/80">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {txt}
                </li>
              ))}
            </ul>
            <a href="/get-involved" className="inline-flex items-center gap-4 text-accent font-black tracking-widest text-xs uppercase group">
              Explore Tiers <ArrowRight size={16} className="group-hover:translate-x-2 transition-editorial" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section — Large Typography */}
      <section className="section-spacing bg-charcoal text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Quote size={60} className="mx-auto mb-12 text-brand opacity-50" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-12 italic">
            "AWIEF gave me the tools, the network, and the courage to scale beyond borders. We are stronger together."
          </h2>
          <div className="flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop" alt="Sarah" className="w-24 h-24 rounded-full border-4 border-brand mb-6 object-cover" />
            <h4 className="text-xl font-black uppercase font-heading">Sarah Adebayo</h4>
            <p className="text-brand font-bold text-xs tracking-widest uppercase mt-1">CEO, InnovateAfrica</p>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="section-spacing px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
               <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Perspective</p>
               <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.85] tracking-tighter">
                 Latest <span className="text-brand">Insights</span>
               </h2>
            </div>
            <a href="/news" className="text-xs font-black uppercase tracking-widest border-b-2 border-brand pb-2 hover:text-brand transition-editorial">View All Press</a>
          </div>

          <div className="editorial-grid">
             {[
               { t: "AWIEF & Victoria's Secret Launch Nigeria Accelerator", c: "Partnerships", i: "photo-1573164713988-8665fc963095" },
               { t: "Building the Green Economy in South Africa", c: "Impact", i: "photo-1557804506-669a67965ba0" },
               { t: "The Future of Digital Trade for Women SMEs", c: "Advocacy", i: "photo-1573497019940-1c28c88b4f3e" }
             ].map((news, idx) => (
               <a href="/news" key={idx} className="col-span-12 lg:col-span-4 group cursor-pointer">
                  <div className="aspect-[16/9] rounded-[32px] overflow-hidden mb-8 shadow-xl">
                     <img src={`https://images.unsplash.com/${news.i}?w=600&q=80`} alt={news.t} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-700" />
                  </div>
                  <p className="text-brand font-black tracking-widest text-[9px] uppercase mb-4">{news.c}</p>
                  <h4 className="text-2xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial">{news.t}</h4>
               </a>
             ))}
          </div>
        </div>
      </section>

      {/* Final Editorial Call to Action */}
      <section className="section-spacing px-6 md:px-12 text-center relative overflow-hidden bg-cream">
        <div className="absolute inset-0 text-[20rem] font-black text-brand/5 flex items-center justify-center uppercase pointer-events-none -z-10 tracking-tighter">
          IMPACT
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase font-heading mb-12 leading-[0.85] tracking-tighter">
            Join the <br/> <span className="text-brand">Movement</span>
          </h2>
          <p className="text-xl text-charcoal/60 mb-12 font-medium max-w-xl mx-auto leading-relaxed">
            Nurture your ambitions. Partner, learn, or invest with us to uplift the next generation of visionary African women.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/get-involved" className="bg-charcoal text-white px-12 py-5 rounded-full font-black tracking-widest text-xs hover:bg-brand transition-editorial shadow-2xl">
              GET INVOLVED
            </a>
            <a href="/about" className="border-2 border-charcoal text-charcoal px-12 py-5 rounded-full font-black tracking-widest text-xs hover:bg-charcoal hover:text-white transition-editorial">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
