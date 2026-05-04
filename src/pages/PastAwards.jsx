import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Award, ArrowRight, Search, X } from 'lucide-react'

const awardsData = [
  { year: "2025", category: "Lifetime Achievement", name: "Stella Nkomo", company: "Pan-African Holdings", img: "photo-1573496359142-b8d87734a5a2" },
  { year: "2025", category: "Tech Entrepreneur", name: "Aisha Pandor", company: "SweepSouth", img: "photo-1531123897727-8f129e1688ce" },
  { year: "2025", category: "Agri Entrepreneur", name: "Ndidi Nwuneli", company: "LEAP Africa", img: "photo-1589156191108-c7ea6f28f97b" },
  { year: "2024", category: "Social Entrepreneur", name: "Lilian Makoi", company: "Jamii Africa", img: "photo-1531384441138-2736e62e0919" },
]

export default function PastAwards() {
  const [filter, setFilter] = useState('All')

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar />

      {/* Editorial Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
          Hall
        </div>
        <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 relative z-10">Celebrating Excellence</p>
        <h1 className="text-5xl md:text-[8rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
          Of <span className="text-brand">Fame</span>
        </h1>
        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
          A tribute to the visionaries who have redefined the economic landscape for women across the African continent.
        </p>
      </header>

      {/* Archive Portal */}
      <section className="section-spacing px-6 md:px-12 bg-white rounded-t-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid gap-16">
            {/* Sidebar Filters */}
            <div className="col-span-12 lg:col-span-3">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-8 italic">The Years</h3>
                  <div className="space-y-4">
                    {['All', '2025', '2024', '2023', '2022'].map(y => (
                      <button key={y} onClick={() => setFilter(y)} className={`block text-2xl font-black uppercase font-heading transition-editorial hover:text-brand ${filter === y ? 'text-brand' : 'text-charcoal/20'}`}>
                        {y}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 bg-cream rounded-[32px] border border-charcoal/5">
                   <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-charcoal/40 mb-6">Quick Search</h3>
                   <div className="flex items-center gap-4 border-b border-charcoal/10 pb-4">
                     <Search size={16} className="text-charcoal/20"/>
                     <input type="text" placeholder="Winner Name..." className="bg-transparent focus:outline-none text-sm font-medium w-full"/>
                   </div>
                </div>
              </div>
            </div>

            {/* Winner Portrait Grid */}
            <div className="col-span-12 lg:col-span-9">
              <div className="grid md:grid-cols-2 gap-12">
                {awardsData.map((winner, i) => (
                  <div key={i} className={`group cursor-pointer ${i % 2 === 1 ? 'md:mt-24' : ''}`}>
                    <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl mb-8">
                      <img src={`https://images.unsplash.com/${winner.img}?w=800&q=80`} alt={winner.name} className="w-full h-full object-cover transition-editorial duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-8 right-8">
                         <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                           {winner.year}
                         </div>
                      </div>
                      <div className="absolute bottom-12 left-12 right-12">
                         <p className="text-brand font-black tracking-widest text-[10px] uppercase mb-2">
                           {winner.category}
                         </p>
                         <h3 className="text-3xl md:text-4xl font-black text-white uppercase font-heading">
                           {winner.name}
                         </h3>
                         <p className="text-white/60 text-sm font-medium mt-2">
                           {winner.company}
                         </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-24 text-center">
                 <button className="bg-charcoal text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-brand transition-editorial shadow-2xl">
                   VIEW FULL ARCHIVE
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Typography Marquee */}
      <section className="py-24 bg-charcoal overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center">
              <span className="text-[6rem] md:text-[10rem] font-black text-white/5 uppercase tracking-tighter px-12">Excellence</span>
              <span className="text-[6rem] md:text-[10rem] font-black text-brand uppercase tracking-tighter px-12 italic">Impact</span>
              <span className="text-[6rem] md:text-[10rem] font-black text-white/5 uppercase tracking-tighter px-12">Resilience</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
