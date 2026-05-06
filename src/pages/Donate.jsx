import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, ShieldCheck, CreditCard, ArrowRight, CheckCircle2, Globe } from 'lucide-react'

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('100')
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="about" />

      {/* Editorial Header */}
      <header className="pt-56 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="african-pattern absolute inset-0 opacity-10 scale-125"></div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
           Gift
        </div>
        <p className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-8 relative z-10">Power the Future</p>
        <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
           Your <span className="text-brand">Contribution</span>
        </h1>
        <p className="text-xl text-charcoal/40 max-w-2xl mx-auto font-medium leading-relaxed relative z-10 italic">
          Directly fund training, mentorship, and resources for women entrepreneurs. 100% of your donation goes to our flagship programmes.
        </p>
      </header>

      {/* Donation Portal */}
      <section className="section-spacing px-6 md:px-12 bg-warm rounded-t-[60px] -mt-12 relative z-20">
        <div className="max-w-[1000px] mx-auto pt-24">
          <div className="glass-panel p-12 md:p-20 rounded-[60px] border border-charcoal/5 relative overflow-hidden">
             <div className="african-pattern absolute inset-0 opacity-5 scale-150"></div>
             <div className="relative z-10">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-5xl font-black uppercase font-heading mb-4">Select Amount</h2>
                   <p className="text-charcoal/40 font-medium uppercase tracking-widest text-[10px]">Tax-deductible contribution (USD)</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                   {['50', '100', '250', '500', '1000', 'Other'].map(amt => (
                     <button
                        key={amt}
                        onClick={() => setSelectedAmount(amt)}
                        className={`py-8 rounded-3xl text-xl font-black transition-editorial border-2 ${
                          selectedAmount === amt 
                          ? 'bg-brand border-brand text-white shadow-2xl scale-105' 
                          : 'bg-white border-charcoal/5 text-charcoal hover:border-brand shadow-sm'
                        }`}
                     >
                        {amt === 'Other' ? amt : `$${amt}`}
                     </button>
                   ))}
                </div>

                <button className="w-full bg-charcoal text-white py-8 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-2xl flex items-center justify-center gap-4 group">
                  CONTINUE TO SECURE CHECKOUT <ArrowRight size={20} className="group-hover:translate-x-2 transition-editorial" />
                </button>

                <div className="mt-12 flex items-center justify-center gap-8 opacity-40">
                   <div className="flex items-center gap-2">
                      <ShieldCheck size={20} className="text-brand" />
                      <span className="text-[10px] font-black uppercase tracking-widest">PCI Compliant</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Globe size={20} className="text-brand" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Global Support</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-32 bg-charcoal text-white text-center px-6 rounded-b-[60px] relative overflow-hidden mt-12">
        <div className="african-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-3xl mx-auto relative z-10">
           <Heart className="text-brand mx-auto mb-10" size={48} />
           <h2 className="text-4xl md:text-6xl font-black uppercase font-heading leading-tight mb-8">
             Your legacy <br/> <span className="text-gold serif italic">starts here.</span>
           </h2>
           <p className="text-xl text-white/40 leading-relaxed font-medium italic">
             "The economic empowerment of women is the single most effective way to lift entire communities out of poverty." — Irene Ochem, Founder.
           </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
