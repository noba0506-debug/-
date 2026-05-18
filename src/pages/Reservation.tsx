import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save to storage
    const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
    const newReservation = {
      ...formData,
      id: Date.now(),
      status: '대기',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('reservations', JSON.stringify([...existing, newReservation]));
    
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-40 px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-6 bg-brand-gold/10 rounded-full"
        >
          <CheckCircle className="w-16 h-16 text-brand-gold" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">예약이 접수되었습니다</h1>
        <p className="text-brand-gray mb-12 max-w-md">
          담당자가 확인 후 입력하신 연락처로 안내 문자를 발송해 드릴 예정입니다. 찬형각을 선택해 주셔서 감사합니다.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-brand-gold text-sm tracking-[0.3em] font-bold mb-4">RESERVATION</h2>
        <h1 className="text-4xl md:text-5xl font-bold">실시간 예약하기</h1>
        <p className="mt-4 text-brand-gray">특별한 시간을 위한 최고의 자리를 준비해 드립니다.</p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-brand-gold/20 p-8 md:p-12 space-y-8"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Date */}
          <div className="space-y-2">
            <label className="flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">
              <Calendar className="w-4 h-4 mr-2" /> 방문 날짜
            </label>
            <input 
              required
              type="date" 
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full bg-brand-black border border-brand-gold/30 p-4 text-white focus:border-brand-gold outline-none transition-colors"
            />
          </div>

          {/* Time */}
          <div className="space-y-2">
            <label className="flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">
              <Clock className="w-4 h-4 mr-2" /> 방문 시간
            </label>
            <select 
              required
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="w-full bg-brand-black border border-brand-gold/30 p-4 text-white focus:border-brand-gold outline-none transition-colors"
            >
              <option value="">시간 선택</option>
              <option value="12:00">12:00 (Lunch)</option>
              <option value="13:00">13:00 (Lunch)</option>
              <option value="14:00">14:00 (Lunch)</option>
              <option value="18:00">18:00 (Dinner)</option>
              <option value="19:00">19:00 (Dinner)</option>
              <option value="20:00">20:00 (Dinner)</option>
            </select>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">
              <Users className="w-4 h-4 mr-2" /> 인원수
            </label>
            <input 
              required
              type="number" 
              min="1" 
              max="20"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
              className="w-full bg-brand-black border border-brand-gold/30 p-4 text-white focus:border-brand-gold outline-none transition-colors"
            />
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">
              <User className="w-4 h-4 mr-2" /> 예약자 성함
            </label>
            <input 
              required
              placeholder="성함을 입력해주세요"
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-brand-black border border-brand-gold/30 p-4 text-white focus:border-brand-gold outline-none transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">
              <Phone className="w-4 h-4 mr-2" /> 연락처
            </label>
            <input 
              required
              placeholder="010-0000-0000"
              type="tel" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-brand-black border border-brand-gold/30 p-4 text-white focus:border-brand-gold outline-none transition-colors"
            />
          </div>

          {/* Requests */}
          <div className="space-y-2 md:col-span-2">
            <label className="flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase mb-2">
              <MessageSquare className="w-4 h-4 mr-2" /> 요청사항 (룸 선호 등)
            </label>
            <textarea 
              rows={4}
              placeholder="문의사항이나 특별한 요청이 있으시면 입력해주세요"
              value={formData.requests}
              onChange={(e) => setFormData({...formData, requests: e.target.value})}
              className="w-full bg-brand-black border border-brand-gold/30 p-4 text-white focus:border-brand-gold outline-none transition-colors resize-none"
            />
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-5 bg-brand-gold text-brand-black font-extrabold tracking-[0.3em] uppercase hover:bg-white transition-all duration-300"
        >
          예약 신청 완료
        </motion.button>
      </motion.form>

      <div className="mt-12 text-center text-brand-gray text-xs space-y-2">
        <p>* 예약 신청 후 매장에서 확인 전화를 드리며, 통화 완료 시 최종 예약이 확정됩니다.</p>
        <p>* 당일 예약은 매장으로 직접 전화(010-8734-4869) 부탁드립니다.</p>
      </div>
    </div>
  );
}
