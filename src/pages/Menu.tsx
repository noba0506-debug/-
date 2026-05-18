import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../constants/menu';
import { Search, ChevronRight } from 'lucide-react';

const CATEGORIES = ['전체', '코스 요리', '요리류', '식사류'];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeTab === '전체' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar / Category Selection */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-32 space-y-12">
            <div>
              <h2 className="text-brand-gold text-xs tracking-[0.4em] font-bold mb-8 uppercase">Menu Categories</h2>
              <nav className="flex flex-col gap-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`text-left text-sm tracking-widest transition-all duration-300 flex items-center group ${
                      activeTab === cat 
                        ? 'text-brand-gold font-bold translate-x-2' 
                        : 'text-brand-gray hover:text-white hover:translate-x-1'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-3 transition-all ${
                      activeTab === cat ? 'bg-brand-gold scale-100' : 'bg-transparent scale-0'
                    }`} />
                    {cat}
                  </button>
                ))}
              </nav>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-brand-gold/30 py-2 pl-8 text-sm focus:outline-none focus:border-brand-gold transition-colors text-white placeholder:text-brand-gray/50"
              />
              <Search className="absolute left-0 top-2.5 w-4 h-4 text-brand-gold/50" />
            </div>

            <div className="hidden lg:block pt-12 border-t border-white/5">
              <p className="text-[10px] text-brand-gray leading-loose tracking-widest uppercase">
                모든 요리는 주문 즉시<br/>
                조리를 시작하며, 최고급<br/>
                식재료만을 고집합니다.
              </p>
            </div>
          </div>
        </aside>

        {/* Menu List Area */}
        <main className="flex-1">
          <div className="mb-12 flex justify-between items-end border-b border-brand-gold/10 pb-8">
            <div>
              <p className="text-brand-gold text-[10px] tracking-[0.5em] mb-2 uppercase">Discover Taste</p>
              <h1 className="text-4xl font-bold">{activeTab}</h1>
            </div>
            <p className="text-brand-gray text-[10px] tracking-widest uppercase">Total {filteredItems.length} Selection</p>
          </div>

          <div className="grid gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative"
                >
                  <Link to={`/menu/${item.id}`} className="grid md:grid-cols-12 gap-8 items-center bg-zinc-900/30 p-6 border border-transparent hover:border-brand-gold/20 transition-all duration-500">
                    {/* Image Block */}
                    <div className="md:col-span-4 aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors" />
                    </div>

                    {/* Content Block */}
                    <div className="md:col-span-6 space-y-3">
                      <p className="text-[10px] text-brand-gold tracking-widest uppercase">{item.category}</p>
                      <h3 className="text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">{item.name}</h3>
                      <p className="text-brand-gray text-sm line-clamp-2 italic leading-relaxed">"{item.description}"</p>
                    </div>

                    {/* Price Block */}
                    <div className="md:col-span-2 text-right">
                      <div className="inline-block">
                        <p className="text-brand-gold font-mono text-lg mb-4">₩ {item.price}</p>
                        <div className="flex items-center justify-end text-brand-gold text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 font-bold">
                          VIEW DETAIL <ChevronRight size={12} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredItems.length === 0 && (
              <div className="py-20 text-center border border-dashed border-brand-gold/20">
                <p className="text-brand-gray text-sm tracking-widest">검색 결과가 없습니다.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
