import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../constants/menu';
import { ChevronLeft, Clock, Award, Star } from 'lucide-react';
import React, { useEffect } from 'react';

export default function MenuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const menuId = parseInt(id || '0');
  const item = MENU_ITEMS.find(m => m.id === menuId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div className="pt-40 pb-40 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">메뉴를 찾을 수 없습니다.</h1>
        <Link to="/menu" className="text-brand-gold underline">목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate('/menu')}
        className="flex items-center text-brand-gray hover:text-brand-gold transition-colors mb-8 tracking-widest text-xs uppercase"
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Menu
      </button>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="aspect-[4/5] overflow-hidden border border-brand-gold/20">
            <img 
              src={item.image} 
              alt={item.name} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute top-6 left-6 bg-brand-black/90 border border-brand-gold/30 px-4 py-2 text-xs text-brand-gold tracking-widest font-bold">
            {item.category}
          </div>
        </motion.div>

        {/* Right: Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{item.name}</h1>
            <p className="text-2xl text-brand-gold font-mono">₩ {item.price}</p>
          </div>

          <div className="flex gap-6 py-6 border-y border-brand-gold/10">
            <div className="flex items-center text-brand-gray text-xs tracking-widest uppercase">
              <Clock className="w-4 h-4 mr-2 text-brand-gold" /> Preparation: 30-40 min
            </div>
            <div className="flex items-center text-brand-gray text-xs tracking-widest uppercase">
              <Award className="w-4 h-4 mr-2 text-brand-gold" /> Master Chef Choice
            </div>
            <div className="flex items-center text-brand-gray text-xs tracking-widest uppercase">
              <Star className="w-4 h-4 mr-2 text-brand-gold" /> Signature Dish
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-brand-gold text-sm font-bold tracking-widest uppercase">Description</h3>
            <p className="text-brand-gray leading-relaxed text-lg italic">
              "{item.description}"
            </p>
            <p className="text-white/80 leading-loose text-base">
              {item.detail}
            </p>
          </div>

          <div className="pt-8 space-y-4">
            <Link 
              to="/reservation"
              className="block w-full py-4 bg-brand-gold text-brand-black text-center font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors"
            >
              예약하고 방문하기
            </Link>
            <p className="text-center text-[10px] text-brand-gray tracking-widest">
              * 당일 준비된 최고급 식재료만을 사용하여 조리합니다.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Recommended Section (Simplified) */}
      <div className="mt-32">
        <h2 className="text-center text-brand-gold text-sm tracking-[0.4em] font-bold mb-12 uppercase">Recommended Together</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MENU_ITEMS.filter(m => m.id !== item.id).slice(0, 4).map(rec => (
            <Link key={rec.id} to={`/menu/${rec.id}`} className="group space-y-3">
              <div className="aspect-square overflow-hidden border border-brand-gold/10 grayscale group-hover:grayscale-0 transition-all">
                <img 
                  src={rec.image} 
                  alt={rec.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-brand-gray group-hover:text-brand-gold transition-colors">{rec.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
