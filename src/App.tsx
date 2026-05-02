/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Zap, 
  Droplets, 
  Wifi, 
  Car, 
  Menu, 
  X, 
  ChevronRight,
  Star as StarIcon,
  Map as MapIcon,
  LayoutGrid
} from 'lucide-react';
import { useState, useEffect } from 'react';

const AMENITIES = [
  { icon: Shield, title: 'Intelligent Power', desc: 'Solar & backup generator systems.' },
  { icon: Zap, title: 'Biometric Security', desc: 'Secure gated community with surveillance.' },
  { icon: Droplets, title: 'Water Purification', desc: 'Filtered and treated supply for all units.' },
  { icon: Wifi, title: 'Fiber Connectivity', desc: 'Complimentary high-speed internet.' },
];

const APARTMENTS = [
  {
    id: 'platinum',
    name: 'Monolite Platinum',
    type: '3 Bed Executive',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    price: 'Contact for Pricing',
  },
  {
    id: 'gold',
    name: 'Monolite Gold',
    type: '2 Bed Luxury',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
    price: 'Contact for Pricing',
  },
  {
    id: 'silver',
    name: 'Monolite Silver',
    type: '1 Bed Studio',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
    price: 'Contact for Pricing',
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-8 pt-8">
      {/* Header */}
      <header className={`flex justify-between items-center transition-all duration-300 z-50 sticky top-0 bg-zinc-950/80 backdrop-blur-sm py-4 border-b border-zinc-900`}>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-600 rounded flex items-center justify-center text-xs">M</div>
            Monolite Consult
          </h1>
          <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Akinogun Alimosho Lagos</span>
        </div>
        
        <nav className="hidden lg:flex gap-8 text-[11px] font-medium uppercase tracking-widest text-zinc-400">
          <a href="#apartments" className="hover:text-white transition-colors">Residences</a>
          <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
          <a href="#location" className="hover:text-white transition-colors">Location</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block px-6 py-2 border border-zinc-700 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors rounded-full font-bold">
            Book a Tour
          </a>
          <button className="lg:hidden p-2 text-zinc-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
          >
            <div className="p-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-medium">
              <a href="#apartments" onClick={() => setIsMenuOpen(false)}>Residences</a>
              <a href="#amenities" onClick={() => setIsMenuOpen(false)}>Amenities</a>
              <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 min-h-[85vh]">
        
        {/* Main Hero Visual Area */}
        <div className="md:col-span-2 md:row-span-2 bento-card relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 p-8 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-amber-500"></span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-500 underline underline-offset-4">Premium Shortlet</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-light leading-[0.9] tracking-tighter">
                Refined Urban <br/><span className="font-semibold italic">Sanctuary</span>
              </h2>
              <p className="text-zinc-400 max-w-sm text-sm line-clamp-3">
                Experience the perfect blend of architectural excellence and home comfort in the heart of Akinogun Alimosho. Designed for modern living.
              </p>
            </motion.div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
            alt="Monolite Exterior" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 grid-pattern pointer-events-none" />
        </div>

        {/* Location Info Card */}
        <div id="location" className="md:col-span-1 md:row-span-1 bg-amber-700 rounded-3xl p-6 flex flex-col justify-between border border-amber-600 transition-transform hover:-translate-y-1">
          <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-80">Prime Location</h3>
            <p className="text-xl leading-tight font-medium">Akinogun, Alimosho <br/>Lagos State</p>
            <div className="mt-4 flex items-center gap-2 text-[10px] uppercase font-bold text-white/60">
              <span className="px-2 py-0.5 border border-white/20 rounded">Security Hub</span>
              <span className="px-2 py-0.5 border border-white/20 rounded">Quiet Area</span>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="md:col-span-1 md:row-span-1 bento-card p-6 flex flex-col justify-center items-center text-center">
           <LayoutGrid className="text-zinc-500 mb-2" size={24} strokeWidth={1} />
           <span className="text-5xl font-bold tracking-tighter">08</span>
           <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-2 font-bold">Luxury Units</span>
           <div className="w-12 h-[1px] bg-zinc-800 mt-4" />
        </div>

        {/* Essential Amenities List */}
        <div id="amenities" className="md:col-span-1 md:row-span-2 bento-card p-6 flex flex-col">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-8 border-b border-zinc-800 pb-2">Premier Features</h3>
          <ul className="space-y-6 flex-grow">
            {AMENITIES.map((item, idx) => (
              <li key={idx} className="flex gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-amber-600/20 transition-colors">
                  <item.icon size={16} className="text-zinc-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <div>
                  <span className="text-[11px] font-bold block mb-0.5 uppercase tracking-wide">{item.title}</span>
                  <span className="text-[10px] text-zinc-500 leading-tight block">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-zinc-800">
             <div className="flex items-center gap-2 text-amber-500">
               <StarIcon size={12} fill="currentColor" />
               <span className="text-[11px] font-bold uppercase tracking-widest">5.0 Guest Rating</span>
             </div>
          </div>
        </div>

        {/* CTA Banner Card */}
        <div id="contact" className="md:col-span-2 md:row-span-1 bg-white text-zinc-950 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-zinc-100 transition-colors cursor-pointer group">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl font-bold leading-none mb-3">Check Availability</h3>
            <p className="text-sm text-zinc-600 font-medium">Ready to move in? Schedule your private viewing today.</p>
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <span className="text-lg font-black tracking-tight">+234 802 456 7890</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">hello@monolite.com</span>
            <div className="mt-4 px-6 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] group-hover:scale-105 transition-transform flex items-center gap-2">
              Send Message <ChevronRight size={12} />
            </div>
          </div>
        </div>

        {/* Review/Highlight Card */}
        <div className="md:col-span-1 md:row-span-1 bento-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-[10px] bg-zinc-800 px-3 py-1 rounded-full text-amber-500 font-bold uppercase tracking-widest border border-amber-500/20">Now Booking</span>
          </div>
          <p className="text-sm font-light italic text-zinc-400 leading-relaxed">
            "Defining the new standard for Alimosho shortlet residence. Absolute tranquility."
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">— B. Williams</span>
        </div>

      </main>

      {/* Apartment Details Section (Secondary Bento Grid) */}
      <section id="apartments" className="mt-12 space-y-4">
        <div className="flex items-center gap-3 mb-4">
           <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-500">Available Units</h3>
           <div className="h-[1px] flex-grow bg-zinc-900"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APARTMENTS.map((apt, idx) => (
            <motion.div 
              key={apt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card group overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={apt.image} 
                  alt={apt.name} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-zinc-900/80 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest border border-zinc-700 text-amber-500">
                  {apt.type}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-1 tracking-tight">{apt.name}</h4>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{apt.price}</span>
                  <button className="text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                    View Details <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-8 items-end opacity-60">
        <div className="space-y-4">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 border border-white/20 rounded flex items-center justify-center text-[10px]">M</div>
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Monolite Consult Limited</span>
           </div>
           <p className="text-[10px] uppercase tracking-widest max-w-sm leading-relaxed">
             &copy; {new Date().getFullYear()} Monolite Consult. Premium Apartment living in Lagos Nigeria. All rights reserved. Registered under the laws of the Federal Republic of Nigeria.
           </p>
        </div>
        <div className="flex md:justify-end gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold flex flex-col md:items-end gap-1">
             <span className="text-zinc-500">Follow us</span>
             <div className="flex gap-4">
               <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
               <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
