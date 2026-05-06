import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  ChevronRight, ChevronDown, Sparkles, Target, Eye, 
  TrendingUp, Award, Users, Globe, BookOpen, HeartHandshake, Building2, X, ArrowRight
} from 'lucide-react'

export default function About() {
  const [selectedBoardMember, setSelectedBoardMember] = useState(null)
  const [expandedTier, setExpandedTier] = useState('strategic')

  const toggleTier = (tier) => {
    setExpandedTier(expandedTier === tier ? null : tier)
  }

  const advisoryBoardData = [
    {
      name: "Fatma Samoura",
      title: "Former FIFA Secretary General",
      img: "photo-1573496359142-b8d87734a5a2",
      bio: "Fatma Samoura is a globally respected leader with extensive experience across international development, governance, and sport. She made history as the first woman to serve as Secretary General of FIFA, holding the role from 2016 to 2023. Prior to joining FIFA, Ms Samoura spent 21 years with the United Nations, working across complex humanitarian, socio-economic, political, and security contexts. She served in senior leadership roles in seven countries. At FIFA, she played a pivotal role in transforming global football governance."
    },
    {
      name: "Nicolas Pompigne-Mognard",
      title: "Founder and Chairman, APO Group",
      img: "photo-1560250097-0b93528c311a",
      bio: "Nicolas Pompigne-Mognard is the Founder and Chairman of APO Group, the leading pan-African communications consultancy and press release distribution service. He is widely regarded as a trusted advisor and thought leader across Africa's business, policy, and media landscapes. Recognised among the 100 Most Influential Africans in both 2023 and 2024, Nicolas is known for his deep understanding of Africa's media ecosystem and his ability to build trusted relationships with senior business and political leaders globally."
    },
    {
      name: "Dalia Ibrahim",
      title: "CEO, Nahdet Misr Publishing House; Founder & CEO, EdVentures",
      img: "photo-1580489944761-15a19d654956",
      bio: "Dalia Ibrahim is a business leader, angel investor, and leading advocate for education, innovation, and entrepreneurship across the Middle East and Africa. As CEO of Nahdet Misr Publishing House, she leads one of the region's most established learning groups. She is also the Founder and CEO of EdVentures, the first education-focused corporate venture capital firm in the MENA region, which has supported over 95 startups and invested in 28 high-growth EdTech ventures."
    },
    {
      name: "Awa Ndiaye-Seck",
      title: "President, ADES-USA / Former UN Women Special Rep.",
      img: "photo-1508214751196-bfd1414742e9",
      bio: "Awa Ndiaye Seck is a seasoned development and governance leader with over 40 years of experience at national, regional, and international levels. Her expertise spans development, policy, governance, conflict prevention, peacebuilding, gender equality, and regional integration. She spent nearly two decades with the United Nations, serving as Regional Director for Africa at UNDP, UN Women Special Representative to the African Union, and UN Women Representative to the UN Economic Commission for Africa."
    }
  ]

  const team = [
    {name: "Irene Ochem", title: "Founder & CEO", img: "photo-1531123897727-8f129e1688ce"},
    {name: "Kumbirai Mapiye", title: "Finance & Admin Manager", img: "photo-1544005313-94ddf0286df2"},
    {name: "Ekene Ochem", title: "Project Manager", img: "photo-1531384441138-2736e62e0919"},
    {name: "Akpene Samiama", title: "Programmes Manager", img: "photo-1589156191108-c7ea6f28f97b"},
    {name: "Rebecca Ile", title: "Programmes Associate", img: "photo-1573496359142-b8d87734a5a2"},
    {name: "Riana Andrews", title: "Communications & Marketing", img: "photo-1534528741775-53994a69daeb"},
    {name: "Lou-Anne Daniels", title: "Events & Engagement", img: "photo-1508214751196-bfd1414742e9"},
    {name: "Dalia Diamond", title: "Social Media Expert", img: "photo-1573497019940-1c28c88b4f3e"},
  ]

  return (
    <div className="min-h-screen font-body text-charcoal bg-warm overflow-x-hidden">
      <Navbar activePage="about" />

      {/* Hero Section - Synchronized with Home */}
      <section className="relative bg-berry pt-40 pb-48 px-8 overflow-hidden text-center">
        <div className="african-pattern absolute inset-0 opacity-20 scale-150 rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-berry/50 z-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-20">
          <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            Who We Are
            <span className="w-2 h-2 rounded-full bg-gold"></span>
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase font-heading">
            Empowering Women <br />
            <span className="text-gold italic serif normal-case">Transforming Africa</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed mb-0 max-w-2xl mx-auto italic">
            AWIEF is a non-profit organization dedicated to empowering women entrepreneurs across Africa, helping them scale their businesses and reach their absolute full potential.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Editorial Overlay */}
      <section className="px-6 md:px-12 -mt-24 relative z-30 max-w-[1400px] mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-charcoal border border-white/10 p-12 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden group">
            <div className="african-pattern absolute inset-0 opacity-5"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-10 border border-brand/20 group-hover:scale-110 transition-editorial">
                <Target className="text-brand" size={32} />
              </div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase font-heading">Our Mission</h2>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                To advance economic rights and security for women through dedicated entrepreneurship support and development across the African continent.
              </p>
            </div>
          </div>

          <div className="bg-white border border-charcoal/5 p-12 md:p-16 rounded-[48px] shadow-xl relative overflow-hidden group">
            <div className="african-pattern absolute inset-0 opacity-[0.02] brightness-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-10 border border-gold/20 group-hover:scale-110 transition-editorial">
                <Eye className="text-gold" size={32} />
              </div>
              <h2 className="text-4xl font-black text-charcoal mb-6 uppercase font-heading">Our Vision</h2>
              <p className="text-charcoal/60 text-lg leading-relaxed font-medium">
                An inclusive and thriving Africa where women-owned businesses are empowered to create high-impact, sustainable enterprises that directly contribute to increasing Africa's GDP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story - Editorial Spread */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto mb-24">
        <div className="editorial-grid items-center gap-24">
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative z-10 rounded-[64px] overflow-hidden shadow-2xl bg-berry aspect-[4/5] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80" 
                alt="Irene Ochem, Founder & CEO" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-editorial duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-berry to-transparent p-12 pt-32">
                <h3 className="text-white text-3xl font-black uppercase font-heading mb-1">Irene Ochem</h3>
                <p className="text-gold font-black tracking-widest text-xs uppercase italic">Founder & CEO, AWIEF</p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand rounded-full flex items-center justify-center text-white border-4 border-white rotate-12 shadow-2xl hidden md:flex z-20">
               <Sparkles size={48} className="opacity-50" />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Passion & Purpose</p>
            <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-10 leading-[0.9] tracking-tighter uppercase font-heading">
              "If I can do it, <br/> <span className="text-brand">they can do it!</span>"
            </h2>
            <div className="space-y-8 text-charcoal/60 text-xl leading-relaxed font-medium italic border-l-8 border-brand pl-12">
              <p>
                Nothing is more exciting and fun than being an entrepreneur, chasing your dreams on your own terms. Yet, the entrepreneurial journey and building a thriving business isn't easy—especially for females in Africa.
              </p>
              <p className="not-italic text-charcoal/70">
                Growing up as an ambitious young girl in Nigeria, Irene Ochem understood first-hand the imperative of economically empowering women and girls. In 2015, she founded AWIEF, building a powerful platform driving inclusive economic transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keys to Success - Patterned Editorial Section */}
      <section className="bg-berry py-32 px-8 relative overflow-hidden">
        <div className="african-pattern absolute inset-0 opacity-30 scale-150"></div>
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase font-heading tracking-tighter leading-[0.9]">Our Keys to <span className="text-gold italic serif normal-case">Success</span></h2>
            <p className="text-white/60 text-xl leading-relaxed font-medium italic">
              We facilitate, support, and inspire women entrepreneurs by providing knowledge, tools, resources, and valuable connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: TrendingUp, t: "Enterprise Development", d: "Innovative products for enabling ecosystems." },
              { icon: Globe, t: "Annual Conference", d: "World-class networking and pan-African exhibitions." },
              { icon: Award, t: "AWIEF Awards", d: "Recognizing outstanding female achievement." },
              { icon: Users, t: "Online Community", d: "A digital space to rise and fulfill potential." },
              { icon: BookOpen, t: "Policy Advocacy", d: "Cross-cutting advocacy for gender equality." },
            ].map((key, i) => (
              <div key={i} className="glass-panel p-10 rounded-[40px] border border-white/5 hover:border-gold transition-editorial group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-berry transition-editorial border border-gold/20">
                  <key.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-black uppercase font-heading text-sm mb-4 leading-tight">{key.t}</h4>
                <p className="text-white/40 text-[10px] font-black tracking-widest uppercase leading-relaxed">{key.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board - Elevated Profile Grid */}
      <section className="py-32 px-8 bg-warm relative" id="advisory-board">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Strategic Guidance</p>
              <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 uppercase font-heading leading-[0.9] tracking-tighter">Our Advisory <span className="text-brand italic serif normal-case">Board</span></h2>
              <p className="text-charcoal/60 text-xl font-medium italic border-l-4 border-brand pl-8">
                A prestigious council of globally respected leaders driving inclusive growth and transforming the landscape of African business.
              </p>
            </div>
            <div className="hidden lg:block">
               <Sparkles size={64} className="text-gold/20" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryBoardData.map((member, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedBoardMember(member)}
                className="group relative h-[500px] rounded-[48px] overflow-hidden cursor-pointer shadow-xl hover:-translate-y-2 transition-editorial duration-700"
              >
                <img 
                  src={`https://images.unsplash.com/${member.img}?w=800&q=80`} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-berry via-berry/40 to-transparent opacity-80 group-hover:opacity-90 transition-editorial"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h3 className="text-white font-black text-2xl uppercase font-heading mb-2">{member.name}</h3>
                  <p className="text-gold font-black text-[10px] tracking-[0.2em] uppercase leading-tight mb-6">{member.title}</p>
                  <div className="flex items-center gap-3 text-white text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-editorial">
                    View Full Bio <ArrowRight size={14} className="text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid - Editorial Mosaic */}
      <section className="py-24 px-8 max-w-[1400px] mx-auto" id="meet-the-team">
        <div className="text-center mb-24">
          <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Behind the Mission</p>
          <h2 className="text-5xl md:text-7xl font-black text-charcoal mb-6 uppercase font-heading leading-[0.9] tracking-tighter">Human <span className="text-brand">Capital</span></h2>
          <p className="text-charcoal/50 text-lg font-medium italic max-w-xl mx-auto leading-relaxed">
            The dedicated professionals collaborating with partners and inspiring women to maximize their potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden mb-8 shadow-xl border-4 border-transparent group-hover:border-gold/20 transition-editorial duration-700">
                <img 
                  src={`https://images.unsplash.com/${member.img}?w=600&q=80`} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-editorial duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-berry/10 group-hover:bg-transparent transition-editorial"></div>
              </div>
              <h4 className="text-xl font-black uppercase font-heading text-charcoal mb-1">{member.name}</h4>
              <p className="text-brand font-black tracking-widest text-[10px] uppercase italic">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board Bio Overlay */}
      {selectedBoardMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-berry/95 backdrop-blur-xl" onClick={() => setSelectedBoardMember(null)}></div>
          <div className="bg-white rounded-[64px] max-w-5xl w-full relative z-10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]">
            <button 
              onClick={() => setSelectedBoardMember(null)}
              className="absolute top-10 right-10 w-14 h-14 bg-warm rounded-full flex items-center justify-center text-charcoal hover:bg-brand hover:text-white transition-editorial z-20 border border-charcoal/5 shadow-xl"
            >
              <X size={28} />
            </button>
            
            <div className="w-full md:w-2/5 h-[400px] md:h-auto relative bg-berry">
              <img 
                src={`https://images.unsplash.com/${selectedBoardMember.img}?w=800&q=80`} 
                alt={selectedBoardMember.name} 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-berry via-transparent to-transparent"></div>
            </div>
            <div className="w-full md:w-3/5 p-12 md:p-20 flex flex-col justify-center overflow-y-auto">
              <div className="w-12 h-1 bg-brand mb-10"></div>
              <p className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-6">Executive Advisory</p>
              <h3 className="text-4xl md:text-5xl font-black text-charcoal mb-4 uppercase font-heading tracking-tighter leading-tight">{selectedBoardMember.name}</h3>
              <p className="text-gold font-black text-xs tracking-widest uppercase mb-12 italic border-b border-charcoal/5 pb-10">{selectedBoardMember.title}</p>
              <p className="text-charcoal/60 leading-relaxed text-xl font-medium italic">
                {selectedBoardMember.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
