import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Send, CheckCircle2, Heart, Scale, ShieldCheck, Globe, Sparkles, MoveRight } from 'lucide-react'

export default function ContactUs() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => setFormStatus('success'), 1500)
  }

  return (
    <div className="min-h-screen font-body text-charcoal bg-[#fcfbf9] overflow-x-hidden">
      <Navbar activePage="contact" />

      {/* Header Scale Refinement */}
      <header className="pt-40 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[20rem] font-black text-brand/5 leading-none select-none pointer-events-none -ml-24 -mt-12 rotate-12">
           TALK
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-8">
                 <span className="w-10 h-0.5 bg-brand"></span>
                 Get In Touch
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase font-heading leading-[0.85] tracking-tighter mb-8">
                 Open <span className="text-brand italic serif">Dialogue</span>
              </h1>
           </div>
           <p className="text-xl md:text-2xl text-charcoal/40 max-w-sm font-medium leading-tight italic text-right">
             Our team is ready to connect and co-create with you.
           </p>
        </div>
      </header>

      {/* Main Section - Proportions Refined */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Form - Refined Scale */}
          <div className="lg:col-span-7 bg-white p-10 md:p-20 rounded-[48px] shadow-2xl border border-charcoal/5 relative overflow-hidden">
             {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-4xl font-black uppercase font-heading mb-3 leading-none">Message Sent</h3>
                <p className="text-charcoal/40 text-lg font-medium max-w-sm mb-10 italic">
                  We'll connect with you shortly.
                </p>
                <button onClick={() => setFormStatus('idle')} className="bg-brand text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-charcoal transition-editorial shadow-xl">
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="mb-10">
                   <h3 className="text-2xl font-black uppercase font-heading mb-3">Send us a Message</h3>
                   <p className="text-charcoal/40 font-medium italic border-l-2 border-brand pl-6 text-sm">
                     We review every inquiry within 24–48 hours.
                   </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="firstName" placeholder="First Name" />
                    <label htmlFor="firstName" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">First Name</label>
                  </div>
                  <div className="group relative">
                    <input required type="text" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="lastName" placeholder="Last Name" />
                    <label htmlFor="lastName" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Last Name</label>
                  </div>
                </div>

                <div className="group relative">
                  <input required type="email" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer" id="email" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Email Address</label>
                </div>

                <div className="group relative">
                  <select required className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium text-charcoal/60 cursor-pointer appearance-none">
                    <option value="" disabled selected>Inquiry Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="conference">Conference & Tickets</option>
                    <option value="partnership">Partnerships & Sponsorships</option>
                    <option value="accelerator">Accelerator Programmes</option>
                    <option value="media">Press & Media</option>
                  </select>
                </div>

                <div className="group relative">
                  <textarea required rows="3" className="w-full bg-transparent border-b border-charcoal/10 py-3 focus:outline-none focus:border-brand transition-editorial text-lg font-medium placeholder-transparent peer resize-none" id="message" placeholder="Your Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-charcoal/30 text-[10px] font-black uppercase tracking-widest transition-editorial peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand">Your Message</label>
                </div>

                <button type="submit" disabled={formStatus === 'submitting'} className="group bg-charcoal text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand transition-editorial shadow-xl disabled:opacity-50 flex items-center gap-4">
                  {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-editorial"/>
                </button>
              </form>
            )}
          </div>

          {/* Islands - Scaled Down */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
             <div className="bg-charcoal p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                   <Globe size={150} className="text-white"/>
                </div>
                <div className="space-y-12 relative z-10">
                   <div className="group">
                      <p className="text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-6">Headquarters</p>
                      <h4 className="text-2xl font-black uppercase font-heading leading-tight mb-3">Cape Town, ZA</h4>
                      <p className="text-white/40 text-lg font-medium leading-relaxed italic border-l-2 border-brand pl-6">
                         16 Bell Crescent, Westlake, Tokai, 7945.
                      </p>
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="group">
                         <p className="text-brand font-black tracking-[0.4em] uppercase text-[9px] mb-4">Direct Line</p>
                         <a href="tel:+27210206022" className="text-lg font-black uppercase font-heading hover:text-brand transition-editorial">+27 21 020 6022</a>
                      </div>
                      <div className="group">
                         <p className="text-brand font-black tracking-[0.4em] uppercase text-[9px] mb-4">Email Lead</p>
                         <a href="mailto:info@awieforum.org" className="text-lg font-black uppercase font-heading hover:text-brand transition-editorial underline">info@awieforum.org</a>
                      </div>
                   </div>
                </div>
                <div className="pt-12 mt-12 border-t border-white/10 flex items-center justify-between relative z-10">
                   <div className="flex gap-6">
                      {['FB', 'TW', 'LI', 'IG'].map(s => (
                        <a key={s} href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-brand transition-editorial">{s}</a>
                      ))}
                   </div>
                </div>
             </div>

             <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl border-4 border-white group relative max-w-sm mx-auto lg:max-w-none">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7725838048685!2d18.432655315217437!3d-34.04968808060645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc42171c6bbcd1%3A0x6a0f443b745fb313!2s16%20Bell%20Cres%2C%20Westlake%20Business%20Park%2C%20Cape%20Town%2C%207945%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1698765432100!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Gratitude - Scale Refinement */}
      <section className="py-32 px-6 md:px-12 bg-cream overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
           <div className="w-24 h-24 rounded-full bg-brand/10 flex items-center justify-center mb-12 mx-auto">
              <Heart className="text-brand fill-current" size={48} />
           </div>
           <h2 className="text-4xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-12">
              Our Deepest <br/> <span className="text-brand serif italic">Gratitude</span>
           </h2>
           <p className="text-2xl font-medium text-charcoal/40 italic leading-tight max-w-3xl mx-auto">
             AWIEF is more than an organization; it is a movement. Thank you for your passion.
           </p>
        </div>
      </section>

      {/* Legal Spread - Proportions Refined */}
      <section className="py-32 px-6 md:px-12 bg-white rounded-t-[60px]">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
             <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-brand font-black tracking-[0.4em] uppercase text-[10px] mb-10">
                   <span className="w-10 h-0.5 bg-brand"></span>
                   Governance
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase font-heading leading-[0.8] tracking-tighter mb-10">
                  Legal <br/> <span className="text-charcoal italic serif">Framework</span>
                </h2>
                <div className="space-y-10">
                   <div className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-full border border-charcoal/5 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial">
                         <Scale size={20} />
                      </div>
                      <div>
                         <h4 className="text-xl font-black uppercase font-heading mb-2">Terms of Use</h4>
                         <p className="text-charcoal/40 text-base font-medium leading-relaxed italic">The rules of our ecosystem.</p>
                      </div>
                   </div>
                   <div className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-full border border-charcoal/5 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-editorial">
                         <ShieldCheck size={20} />
                      </div>
                      <div>
                         <h4 className="text-xl font-black uppercase font-heading mb-2">Privacy Standards</h4>
                         <p className="text-charcoal/40 text-base font-medium leading-relaxed italic">Protecting your data integrity.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="lg:col-span-7 space-y-12">
                <div className="bg-cream p-10 md:p-16 rounded-[48px] shadow-xl border border-charcoal/5 h-[400px] flex flex-col">
                   <div className="overflow-y-auto pr-6 space-y-8 text-base font-medium text-charcoal/60 flex-grow custom-scrollbar">
                      <p><span className="text-charcoal font-black block mb-3 tracking-[0.3em] uppercase text-[9px]">01. Commitment</span> We maintain industry-standard encryption for all user data across our digital hubs.</p>
                      <p><span className="text-charcoal font-black block mb-3 tracking-[0.3em] uppercase text-[9px]">02. Ticketing</span> Event tickets are non-refundable but transferable with 48-hour notice.</p>
                      <p><span className="text-charcoal font-black block mb-3 tracking-[0.3em] uppercase text-[9px]">03. IP Rights</span> All content and visual property displayed is protected under international law.</p>
                      <p><span className="text-charcoal font-black block mb-3 tracking-[0.3em] uppercase text-[9px]">04. Conduct</span> We maintain zero-tolerance for harassment across all platforms.</p>
                   </div>
                </div>
                <div className="flex justify-end">
                   <a href="#" className="inline-flex items-center gap-4 font-black tracking-widest text-[10px] uppercase group">
                      Download full documents <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center group-hover:bg-brand transition-editorial shadow-xl"><MoveRight size={20}/></div>
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
