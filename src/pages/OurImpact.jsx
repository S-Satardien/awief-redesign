import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Play, Award, ArrowRight, ArrowUpRight, Globe, Users, Target, Calendar, Video, MoveUpRight } from 'lucide-react'

const stories = [
  { 
    name: "Kedibone Tsiloane", 
    title: "Founder, Ramtsilo Manufacturing", 
    img: "photo-1573497019940-1c28c88b4f3e", 
    desc: "Kedibone is transforming waste plastic into construction bricks, creating sustainable housing solutions." 
  },
  { 
    name: "Aletha Sphere", 
    title: "Early Childhood Advocate", 
    img: "photo-1589156191108-c7ea6f28f97b", 
    desc: "Aletha is revolutionizing early childhood education frameworks for underserved communities." 
  },
  { 
    name: "Michelle Lyle", 
    title: "Learning Experience Designer", 
    img: "photo-1531123897727-8f129e1688ce", 
    desc: "Michelle bridges digital skill gaps through specialized student success Specialization and eLearning." 
  },
]

const news = [
  {
    date: "15 APR",
    title: "New Pan-African Funding Initiative Announced",
    desc: "AWIEF launches a dedicated fund targeting female-led tech innovations in partnership with global investors.",
    img: "photo-1573164713988-8665fc963095"
  },
  {
    date: "22 MAR",
    title: "Policy Shifts: Advocating for Better Trade",
    desc: "A look into AWIEF's latest report presented to the AU on easing trade restrictions for female SMEs.",
    img: "photo-1557804506-669a67965ba0"
  },
  {
    date: "10 FEB",
    title: "Masterclass: Bridging the Digital Divide",
    desc: "Over 500 women completed the Q1 digital skills intensive, equipping them for the e-commerce economy.",
    img: "photo-1516321318423-f06f85e504b3"
  }
]

export default function OurImpact() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-[#fcfbf9] overflow-x-hidden">
      <Navbar activePage="our-impact" />

      {/* Header Scale Refinement */}
      <header className="pt-40 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-brand/5 leading-none select-none pointer-events-none -mr-24 -mt-12 rotate-12">
           GOAL
        </div>
        <div className="relative z-10">
           <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">
              <span className="w-10 h-0.5 bg-brand"></span>
              Measuring Success
           </div>
           <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
              The <span className="text-brand italic serif">Human</span> <br/> Dimension
           </h1>
           <p className="text-xl md:text-2xl text-charcoal/40 max-w-2xl font-medium leading-tight italic">
             Success isn't just in the numbers—it's in the glass ceilings shattered and the communities uplifted.
           </p>
        </div>
      </header>

      {/* Giant Kinetic Metrics - Scaled Down */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white rounded-b-[60px]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { num: "1M+", label: "REACHED", desc: "Engaged through conferences and digital networking.", icon: Globe },
              { num: "6k+", label: "TRAINED", desc: "Mentored through intensive scaling programmes.", icon: Target },
              { num: "60+", label: "LAUREATES", desc: "Celebrated on the world stage via AWIEF Awards.", icon: Award },
            ].map((s, i) => (
              <div key={i} className="group relative">
                <div className="text-brand text-[9px] font-black tracking-[0.3em] mb-8 flex items-center gap-3">
                   <span className="text-white/20">0{i+1}</span>
                   {s.label}
                </div>
                <h3 className="text-6xl md:text-8xl font-black font-heading leading-none mb-8 tracking-tighter transition-editorial group-hover:text-brand">
                  {s.num}
                </h3>
                <div className="w-16 h-0.5 bg-brand mb-8 transition-editorial group-hover:w-full"></div>
                <p className="text-white/40 text-lg font-medium leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triptych Stories - Proportions Refined */}
      <section className="py-32 px-6 md:px-12 bg-white relative">
        <div className="max-w-[1300px] mx-auto">
           <div className="editorial-grid items-end mb-24">
              <div className="col-span-12 lg:col-span-8">
                 <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter">
                   Voices of <br/> <span className="text-brand">Transformation</span>
                 </h2>
              </div>
              <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 flex justify-end">
                 <a href="#" className="w-24 h-24 rounded-full border border-charcoal/10 flex flex-col items-center justify-center group hover:bg-brand hover:border-brand transition-editorial">
                    <Play size={24} className="text-charcoal group-hover:text-white fill-current mb-1" />
                    <span className="text-[8px] font-black tracking-widest uppercase group-hover:text-white">Watch all</span>
                 </a>
              </div>
           </div>

           <div className="grid lg:grid-cols-3 gap-8">
              {stories.map((s, i) => (
                <div key={i} className={`group ${i === 1 ? 'lg:mt-16' : ''}`}>
                   <div className="relative aspect-[3/4] rounded-[48px] overflow-hidden shadow-xl bg-charcoal mb-6">
                      <img src={`https://images.unsplash.com/${s.img}?w=600&q=80`} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100 opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                         <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white mb-4">
                            <Video size={16} />
                         </div>
                         <h3 className="text-2xl font-black uppercase font-heading text-white mb-1 leading-none">{s.name}</h3>
                         <p className="text-brand font-bold tracking-[0.2em] uppercase text-[8px]">{s.title}</p>
                      </div>
                   </div>
                   <p className="text-charcoal/40 text-base font-medium leading-relaxed italic border-l-2 border-brand pl-6">
                      "{s.desc}"
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Hall of Excellence - Spread Refinement */}
      <section className="py-32 px-6 md:px-12 bg-charcoal text-white rounded-[60px] relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-5">
                  <div className="relative max-w-sm mx-auto lg:mx-0">
                     <div className="aspect-square rounded-[48px] overflow-hidden border-4 border-white shadow-2xl rotate-2">
                        <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80" alt="Awards" className="w-full h-full object-cover grayscale" />
                     </div>
                     <div className="absolute -bottom-8 -right-8 bg-brand text-white p-8 rounded-full shadow-2xl rotate-12">
                        <Award size={32} />
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-7">
                  <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">Hall of Excellence</p>
                  <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.9] tracking-tighter mb-8">
                    Celebrating <br/> <span className="text-brand serif italic">60+ Winners</span>
                  </h2>
                  <p className="text-xl text-white/40 leading-relaxed font-medium mb-12 max-w-xl italic">
                    The AWIEF Awards spotlight the ingenuity and resilience of women business owners across the continent.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <a href="/past-awards" className="bg-white text-charcoal px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-editorial shadow-xl">Meet the winners</a>
                    <a href="/what-we-do#awards" className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest hover:text-brand transition-editorial">Nominate now <MoveUpRight size={18}/></a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* News Grid - Compact Refinement */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div>
                 <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-6">Stay Informed</p>
                 <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter">
                   Latest <br/> <span className="text-brand">Insights</span>
                 </h2>
              </div>
              <a href="/news" className="text-charcoal font-black text-[10px] uppercase tracking-widest flex items-center gap-3 group">
                 View newsroom <div className="w-10 h-10 rounded-full border border-charcoal/10 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-editorial"><ArrowRight size={16}/></div>
              </a>
           </div>

           <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                 <div className="group cursor-pointer">
                    <div className="aspect-[16/9] rounded-[40px] overflow-hidden bg-charcoal mb-6 shadow-xl relative">
                       <img src={`https://images.unsplash.com/${news[0].img}?w=1000&q=80`} alt={news[0].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100 opacity-80" />
                       <div className="absolute top-6 left-6 bg-brand text-white px-4 py-2 rounded-full font-black text-[8px] tracking-widest uppercase">{news[0].date}</div>
                    </div>
                    <h3 className="text-3xl font-black uppercase font-heading mb-4 group-hover:text-brand transition-editorial">{news[0].title}</h3>
                    <p className="text-charcoal/40 text-lg font-medium leading-relaxed max-w-xl">{news[0].desc}</p>
                 </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
                 {news.slice(1).map((item, i) => (
                   <div key={i} className="group cursor-pointer flex gap-6 items-start">
                      <div className="text-brand text-xl font-black font-heading tracking-tighter border-t-2 border-brand pt-3">{item.date}</div>
                      <div>
                         <h3 className="text-xl font-black uppercase font-heading mb-2 group-hover:text-brand transition-editorial leading-tight">{item.title}</h3>
                         <p className="text-charcoal/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Retrospective - Proportions Refined */}
      <section className="py-24 px-6 md:px-12 bg-cream rounded-t-[60px]">
        <div className="max-w-[1200px] mx-auto text-center mb-24">
           <h2 className="text-4xl md:text-7xl font-black uppercase font-heading tracking-tighter text-charcoal leading-[0.8] mb-8">
             The <span className="text-brand italic serif">2025</span> <br/> Retrospective
           </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             "photo-1540317580384-e5d43867caa6", 
             "photo-1556761175-5973dc0f32d7", 
             "photo-1573164574572-cb89e39749b4", 
             "photo-1551818255-e6e10975bc17"
           ].map((img, i) => (
             <div key={i} className={`aspect-[3/4] rounded-[32px] overflow-hidden shadow-xl relative group ${i % 2 === 1 ? 'translate-y-16' : '-translate-y-16'}`}>
               <img src={`https://images.unsplash.com/${img}?w=500&q=80`} alt="Moment" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-editorial"></div>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
