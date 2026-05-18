import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '가게 소개', path: '/about' },
    { name: '메뉴 소개', path: '/menu' },
    { name: '예약하기', path: '/reservation' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center group">
            <span className="text-2xl font-serif font-bold text-brand-gold tracking-widest group-hover:scale-110 transition-transform">璨 亨 閣</span>
            <span className="text-[8px] tracking-[0.4em] text-brand-gold/60 -mt-1 font-bold">CHAN HYEONG GAK</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm tracking-widest hover:text-brand-gold transition-colors font-medium",
                  location.pathname === link.path ? "text-brand-gold font-bold" : "text-brand-gray"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/reservation"
              className="px-6 py-2 border border-brand-gold text-brand-gold text-xs tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all font-bold"
            >
              RESERVATION
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl tracking-[0.2em] font-serif hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/reservation"
              onClick={() => setIsMenuOpen(false)}
              className="px-10 py-3 border border-brand-gold text-brand-gold tracking-widest"
            >
              실시간 예약하기
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-brand-gold/10 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-brand-gold tracking-widest">璨 亨 閣</span>
              <span className="text-xs tracking-[0.3em] text-brand-gold/60 font-bold uppercase mt-1">CHAN HYEONG GAK</span>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed">
              정통 중화요리의 깊은 맛과 격조 높은 분위기가 공존하는 공간입니다. 
              최고의 식재료와 정성으로 품격 있는 미식 경험을 선사합니다.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-brand-gold cursor-pointer hover:text-white transition-colors" />
              <Facebook className="w-5 h-5 text-brand-gold cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-brand-gold text-sm font-bold tracking-widest uppercase border-b border-brand-gold/20 pb-2 inline-block">Location & Info</h3>
            <div className="space-y-4">
              <div className="flex items-start text-sm text-brand-gray">
                <MapPin className="w-4 h-4 mr-3 text-brand-gold mt-1 shrink-0" />
                <span>경기도 안성시 신건지동17<br/>(주차 가능)</span>
              </div>
              <div className="flex items-center text-sm text-brand-gray">
                <Phone className="w-4 h-4 mr-3 text-brand-gold shrink-0" />
                <span>010-8734-4869</span>
              </div>
              <div className="flex items-start text-sm text-brand-gray">
                <Clock className="w-4 h-4 mr-3 text-brand-gold mt-1 shrink-0" />
                <div>
                  <p>Daily Open: 11:30 - 22:00</p>
                  <p>Break Time: 15:00 - 17:00</p>
                  <p>Last Order: 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-brand-gold text-sm font-bold tracking-widest uppercase border-b border-brand-gold/20 pb-2 inline-block">Map</h3>
            <div className="aspect-video bg-zinc-900 border border-brand-gold/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
               {/* Map Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center flex-col p-4 text-center">
                 <MapPin className="w-8 h-8 text-brand-gold mb-2" />
                 <p className="text-[10px] text-brand-gray mb-1">GOOGLE MAP API INTEGRATION</p>
                 <p className="text-xs text-brand-gold font-bold">경기도 안성시 신건지동17</p>
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                 className="w-full h-full object-cover opacity-20" 
                 alt="map" 
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-brand-gold/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-brand-gray tracking-widest uppercase">
            © 2026 CHAN HYEONG GAK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] text-brand-gray tracking-widest uppercase">
            <Link to="/admin" className="hover:text-brand-gold transition-colors">Admin Login</Link>
            <span className="cursor-pointer hover:text-brand-gold transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand-gold transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Reservation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-brand-gold flex divide-x divide-black/10">
        <a href="tel:010-8734-4869" className="flex-1 flex items-center justify-center p-4 text-brand-black space-x-2">
          <Phone size={18} />
          <span className="font-bold tracking-widest text-xs">전화 문의</span>
        </a>
        <Link to="/reservation" className="flex-1 flex items-center justify-center p-4 bg-white text-brand-black space-x-2">
          <Clock size={18} />
          <span className="font-bold tracking-widest text-xs">실시간 예약</span>
        </Link>
      </div>
    </div>
  );
}
