import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-brand-gold text-sm tracking-[0.3em] font-bold mb-4">ABOUT US</h2>
        <h1 className="text-4xl md:text-5xl font-bold">오너 셰프의 철학과 깊은 역사</h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/chef.jpg" 
            alt="Chef Chan Hyeong" 
            referrerPolicy="no-referrer"
            className="w-full aspect-[4/5] object-cover border border-brand-gold/20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-brand-gold">격조 높은 미식의 공간</h3>
          <p className="text-brand-gray leading-relaxed">
            찬형각은 수십 년간 정통 중화요리의 길을 걸어온 장인의 손끝에서 탄생합니다. 
            단순한 식사를 넘어 하나의 예술 작품을 선사한다는 일념으로, 
            가장 신선한 식재료와 정통 조리법을 고수하고 있습니다.
          </p>
          <p className="text-brand-gray leading-relaxed">
            어두운 밤을 밝히는 찬란한 빛처럼, 고객님의 특별한 순간을 더욱 빛나게 만드는 
            공간이 되고자 합니다. 프라이빗한 룸부터 탁 트인 홀까지, 
            격조 있는 분위기 속에서 최고의 맛을 경험해 보세요.
          </p>
          <div className="pt-6 border-t border-brand-gold/20">
            <p className="font-serif italic text-brand-gold/80 text-xl">"맛의 깊이는 세월이 말해주고, 멋의 깊이는 공간이 말해줍니다."</p>
            <p className="mt-4 text-sm tracking-widest">— Owner Chef, Chan Hyeong</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="aspect-square overflow-hidden border border-brand-gold/10"
          >
            <img 
              src={`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
              alt={`Gallery ${i}`} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
