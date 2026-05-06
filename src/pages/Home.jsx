import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Play, Globe, Sparkles, Calendar, FileText, Users, BookOpen, Quote } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="home" />
      
      {/* Hero Section - Exactly from Figma Wireframe Code */}
      <section className="relative bg-berry pt-24 pb-48 px-8 overflow-hidden">
        {/* Background Image on Right */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-berry via-berry/90 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1589707197624-27802d81f462?w=1200&q=80" 
            alt="Empowering African Women" 
            className="w-full h-full object-cover object-top opacity-60 grayscale"
          />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20">
          <div className="max-w-4xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-10 uppercase font-heading">
              Empowering Women <br />
              to Shape the <br />
              <span className="text-gold">
                Global Economy
              </span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0 italic">
              Africa Women Innovation and Entrepreneurship Forum is a non-profit, award-winning pan-African organization dedicated to women's economic empowerment.
            </p>

            {/* UN ECOSOC Consultative Status Badge */}
            <div className="bg-white/5 backdrop-blur-md border border-gold/30 rounded-xl p-5 mb-6 max-w-xl mx-auto md:mx-0 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-gold/60 rounded-full flex items-center justify-center">
                  <Globe className="text-gold" size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-1">UN ECOSOC Consultative Status</h3>
                  <p className="text-white/40 text-xs">Accredited Since 2023 - United Nations Economic and Social Council</p>
                </div>
              </div>
              <div className="border border-gold/50 rounded-md px-3 py-1.5 text-gold text-xs font-bold tracking-wider shrink-0">
                2023
              </div>
            </div>

            <p className="text-white/40 text-xs flex items-center justify-center md:justify-start gap-2 mb-10">
               <span className="flex gap-1">
                 <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><Sparkles size={10}/></div>
                 <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><Globe size={10}/></div>
                 <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center"><Users size={10}/></div>
               </span>
               Highest UN Advisory Accreditation for Civil Society Organizations
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="/purchase-conference-tickets" className="bg-gradient-to-r from-brand-dark to-brand text-white px-8 py-3.5 rounded font-bold hover:opacity-90 transition-opacity flex items-center gap-2 text-sm shadow-lg">
                Register for Conference
                <ArrowRight size={16} />
              </a>
              <button className="border border-white/60 text-white px-8 py-3.5 rounded font-bold hover:bg-white/10 transition-colors flex items-center gap-2 text-sm">
                <Play size={16} className="fill-current" />
                Watch Our Story
              </button>
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
