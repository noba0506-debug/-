import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/jeongabok_seafood_1779108839378.png" 
            alt="Jeongabok" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-gold text-lg md:text-xl mb-4 tracking-[0.2em] font-medium"
          >
            시대를 초월한 정통의 맛
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            璨 亨 閣
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-brand-gray text-base md:text-lg mb-12 max-w-2xl mx-auto"
          >
            중화요리의 맛있는 상상이 현실이 되는 공간, 찬형각
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              to="/reservation" 
              className="inline-block px-10 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 tracking-widest text-sm uppercase"
            >
              실시간 예약하기
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
