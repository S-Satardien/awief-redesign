import React from 'react'
import { Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-400 py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand/10 px-3 py-1 rounded-lg text-brand text-sm font-bold border border-brand/20">AWIEF</div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A pan-African women's economic empowerment organization promoting and supporting female entrepreneurship.
            </p>
            <div className="flex gap-4">
              {['f', 't', 'in', 'ig'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-xs border border-white/10">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Initiatives</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/what-we-do#programmes" className="hover:text-brand transition-colors">Growth Accelerator</a></li>
              <li><a href="/what-we-do#programmes" className="hover:text-brand transition-colors">Enterprise Development</a></li>
              <li><a href="/what-we-do#awards" className="hover:text-brand transition-colors">AWIEF Awards</a></li>
              <li><a href="/what-we-do#programmes" className="hover:text-brand transition-colors">Digital Skills Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Globe size={14} className="text-brand"/> info@awieforum.org</li>
              <li className="flex items-center gap-2"><Globe size={14} className="text-brand"/> +27 21 020 6022</li>
              <li><a href="/contact-us" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="/contact-us" className="hover:text-brand transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Newsletter</h4>
            <p className="text-sm mb-4">Join our community for updates.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm text-white focus:outline-none focus:border-brand placeholder:text-gray-500" />
              <button className="bg-brand text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-brand-dark transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 African Women Innovation and Entrepreneurship Forum. Built with care.</p>
          <div className="flex gap-6">
            <a href="/contact-us" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/contact-us" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
