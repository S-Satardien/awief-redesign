import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight, Calendar, X, Search, Mail } from 'lucide-react'

const featured = {
  id: 'featured', category: "Partnerships", date: "April 28, 2026",
  title: "AWIEF and Victoria's Secret & Co. Partner to Launch Growth Accelerator",
  excerpt: "A groundbreaking collaboration to launch a high-impact investment readiness programme for female-led businesses.",
  content: "In a groundbreaking collaboration, AWIEF has joined forces with Victoria's Secret & Co. through The Tour Impact Fund to launch a high-impact investment readiness programme for innovative, growth-stage female-led businesses in Nigeria.\n\nThe AWIEF Growth Accelerator in Nigeria is designed to provide targeted capacity building, mentorship, and access to funding networks for women who are ready to scale their enterprises.",
  img: "photo-1573164713988-8665fc963095"
}

const newsData = [
  { id: 1, category: "Partnerships", date: "March 12, 2026", title: "AWIEF signs strategic cooperation agreement with China's Qingdao", excerpt: "Formalizing a landmark partnership to foster cross-border trade and investment.", img: "photo-1557804506-669a67965ba0" },
  { id: 2, category: "Insights", date: "Feb 22, 2026", title: "What it takes to actually back African women founders.", excerpt: "A deep dive into the tangible steps required for financial backing.", img: "photo-1573497019940-1c28c88b4f3e" },
  { id: 3, category: "Announcements", date: "Jan 15, 2026", title: "AWIEF appoints Advisory Board to drive phase of growth", excerpt: "Global leaders to steer its strategic direction for the next decade.", img: "photo-1531123897727-8f129e1688ce" },
]

export default function News() {
  const [article, setArticle] = useState(null)
  const [filter, setFilter] = useState('All')

  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="news" />

      {/* Editorial Magazine Hero */}
      <header className="pt-56 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="african-pattern absolute inset-0 opacity-10 scale-125"></div>
        <div className="editorial-grid items-center gap-16 relative z-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8">Editorial Feed</p>
            <h1 className="text-6xl md:text-[8rem] font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12">
              News & <br/> <span className="text-brand">Insights</span>
            </h1>
            <div onClick={() => setArticle(featured)} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl mb-10 border-4 border-white/10">
                <img src={`https://images.unsplash.com/${featured.img}?w=1200&q=80`} alt="Featured" className="w-full h-full object-cover transition-editorial duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
                <div className="absolute top-8 left-8 bg-brand text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                   Featured Story
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial">
                {featured.title}
              </h2>
              <p className="text-xl text-charcoal/60 mt-6 font-medium leading-relaxed max-w-2xl italic">
                {featured.excerpt}
              </p>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 lg:pl-12 space-y-12">
            <div className="p-10 glass-panel rounded-[40px] border border-charcoal/5">
               <h3 className="text-xs font-black tracking-[0.3em] uppercase text-brand mb-8 flex items-center gap-4">
                 <Search size={16}/> Filter Perspectives
               </h3>
               <div className="flex flex-wrap gap-3">
                 {['All', 'Partnerships', 'Insights', 'Awards', 'Events'].map(f => (
                   <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-editorial border ${filter === f ? 'bg-brand text-white border-brand' : 'bg-white text-charcoal/40 border-charcoal/10 hover:border-brand hover:text-brand shadow-sm'}`}>
                     {f}
                   </button>
                 ))}
               </div>
            </div>
            
            <div className="p-10 bg-charcoal rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
               <div className="african-pattern absolute inset-0 opacity-10 group-hover:opacity-20 transition-editorial"></div>
               <div className="absolute -right-12 -bottom-12 text-white/5 text-[10rem] font-black select-none rotate-12">
                 @
               </div>
               <div className="relative z-10">
                  <Mail className="text-brand mb-6" size={32} />
                  <h3 className="text-2xl font-black uppercase font-heading mb-4">The Digest</h3>
                  <p className="text-white/40 text-sm font-medium mb-8">Receive weekly intelligence on African female entrepreneurship.</p>
                  <div className="space-y-4">
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand transition-editorial" />
                    <button className="w-full bg-brand text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand transition-editorial shadow-xl">
                      SUBSCRIBE
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Asymmetrical Article Grid */}
      <section className="section-spacing px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-grid">
            {newsData.map((a, i) => (
              <div 
                key={a.id} 
                onClick={() => setArticle(a)}
                className={`col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer ${i % 3 === 1 ? 'lg:mt-24' : ''}`}
              >
                <div className="relative aspect-square rounded-[40px] overflow-hidden mb-8 shadow-xl border-4 border-white/10">
                  <img src={`https://images.unsplash.com/${a.img}?w=800&q=80`} alt={a.title} className="w-full h-full object-cover transition-editorial duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-editorial"></div>
                </div>
                <div className="flex items-center gap-4 text-brand font-black tracking-widest text-[10px] uppercase mb-4">
                  <Calendar size={14}/> {a.date}
                </div>
                <h3 className="text-2xl font-black uppercase font-heading leading-tight group-hover:text-brand transition-editorial">
                  {a.title}
                </h3>
                <p className="text-charcoal/50 mt-4 font-medium leading-relaxed line-clamp-2 italic">
                  {a.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand group-hover:gap-4 transition-editorial">
                   Read Perspective <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Editorial Reader */}
      {article && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-xl" onClick={() => setArticle(null)}></div>
          <div className="bg-white rounded-[40px] max-w-4xl w-full relative z-10 shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in zoom-in duration-500">
            <button onClick={() => setArticle(null)} className="fixed top-8 right-8 w-12 h-12 bg-cream rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-editorial z-20 shadow-lg">
              <X size={24} />
            </button>
            <div className="p-10 md:p-20">
              <div className="flex items-center gap-4 text-brand font-black tracking-widest text-xs uppercase mb-8">
                 {article.category} — {article.date}
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-tight mb-12">
                {article.title}
              </h2>
              <div className="rounded-[32px] overflow-hidden aspect-video mb-12 shadow-2xl">
                <img src={`https://images.unsplash.com/${article.img}?w=1200&q=80`} alt="Article" className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-xl prose-charcoal max-w-none">
                <p className="text-xl text-charcoal/80 leading-relaxed font-medium">
                  {article.content || article.excerpt}
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
