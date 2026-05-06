import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heart, ShieldCheck, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Donate() {
  return (
    <div className="min-h-screen font-body text-charcoal bg-cream overflow-x-hidden">
      <Navbar activePage="about" />

      {/* Header */}
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-brand/5 select-none pointer-events-none uppercase tracking-tighter">
          Give
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/5 backdrop-blur mb-8 relative z-10">
          <Heart size={14} className="text-brand"/>
          <span className="text-brand text-[11px] font-black tracking-[0.2em] uppercase">Support Our Mission</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-12 relative z-10">
          Be The <span className="text-brand">Catalyst</span>
        </h1>
        <p className="text-xl text-charcoal/60 max-w-3xl mx-auto font-medium leading-relaxed relative z-10">
          Your contribution directly funds the infrastructure for Africa's female-led economic revolution. Help us close the gender gap and build a more inclusive future.
        </p>
      </header>

      {/* Donation Tiers */}
      <section className="pb-32 px-6 md:px-12 bg-white rounded-t-[60px] relative z-10">
        <div className="max-w-[1400px] mx-auto pt-24">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: "$25", label: "Monthly Member", desc: "Supports one female entrepreneur's access to our digital community and networking resources." },
              { amount: "$250", label: "Programme Sponsor", desc: "Funds a specialized masterclass session for a cohort of early-stage startups." },
              { amount: "Custom", label: "Strategic Donor", desc: "Large scale impact focused on specific regional or sector-based accelerator programmes." }
            ].map((tier, i) => (
              <div key={i} className="p-12 rounded-[40px] border border-charcoal/5 bg-cream flex flex-col hover:border-brand transition-editorial group shadow-xl">
                <p className="text-brand font-black tracking-[0.3em] uppercase text-[10px] mb-4">{tier.label}</p>
                <div className="mb-8">
                  <span className="text-6xl font-black">{tier.amount}</span>
                  {tier.amount !== 'Custom' && <span className="opacity-40 font-black tracking-widest text-xs uppercase ml-4">USD</span>}
                </div>
                <p className="text-sm font-medium text-charcoal/60 leading-relaxed mb-12 flex-grow">{tier.desc}</p>
                <button className="w-full py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] bg-charcoal text-white hover:bg-brand transition-editorial shadow-2xl">
                  {tier.amount === 'Custom' ? 'CONTACT US' : `DONATE ${tier.amount}`}
                </button>
              </div>
            ))}
          </div>

          {/* Secure Payment Info */}
          <div className="mt-24 max-w-4xl mx-auto p-12 bg-cream rounded-[40px] border border-charcoal/5 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase font-heading mb-4">Secure Contributions</h3>
              <p className="text-sm font-medium text-charcoal/50 leading-relaxed max-w-xl">
                All donations are processed through our secure, encrypted gateway. AWIEF is a registered non-profit organization. Your contribution may be tax-deductible depending on your jurisdiction.
              </p>
            </div>
            <div className="flex gap-4 opacity-30 grayscale shrink-0">
               <CreditCard size={32} />
               <div className="font-black text-xl italic uppercase tracking-tighter">Stripe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white overflow-hidden relative">
        <div className="african-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-black uppercase font-heading leading-tight mb-12 tracking-tighter">Our Impact Guarantee</h2>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { t: "100% Direct Funding", d: "Your contributions go directly towards programme delivery and resources for entrepreneurs." },
                { t: "Full Transparency", d: "Annual impact reports detail exactly how every dollar is utilized for continent-wide growth." },
                { t: "Measurable ROI", d: "We track business growth, jobs created, and capital raised by our alumni cohorts." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <CheckCircle2 size={40} className="text-brand mb-6" />
                  <h4 className="text-xl font-black uppercase font-heading mb-4">{item.t}</h4>
                  <p className="text-sm text-white/40 font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
