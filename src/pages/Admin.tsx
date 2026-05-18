import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, LogOut, Check, X, Clock as ClockIcon, Calendar as CalendarIcon, Users as UsersIcon, User as UserIcon, Phone as PhoneIcon } from 'lucide-react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [reservations, setReservations] = useState<any[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      const data = JSON.parse(localStorage.getItem('reservations') || '[]');
      setReservations(data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0429') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    const updated = reservations.map(r => r.id === id ? { ...r, status: newStatus } : r);
    setReservations(updated);
    localStorage.setItem('reservations', JSON.stringify(updated));
  };

  const handleDelete = (id: number) => {
    if (confirm('삭제하시겠습니까?')) {
      const updated = reservations.filter(r => r.id !== id);
      setReservations(updated);
      localStorage.setItem('reservations', JSON.stringify(updated));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-40 pb-40 px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900 border border-brand-gold/20 p-8 w-full max-w-md"
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-brand-gold/10 rounded-full">
              <Lock className="w-8 h-8 text-brand-gold" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-8">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-gold uppercase tracking-widest">Administrator Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-brand-black border border-brand-gold/30 p-4 text-center focus:border-brand-gold outline-none"
                placeholder="••••"
              />
              {error && <p className="text-red-500 text-xs text-center">{error}</p>}
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-brand-gold text-brand-black font-bold tracking-widest hover:bg-white transition-colors"
            >
              로그인
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-brand-gold text-sm tracking-[0.3em] font-bold mb-2">ADMIN DASHBOARD</h2>
          <h1 className="text-3xl font-bold">예약 관리 시스템</h1>
        </div>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center text-brand-gray hover:text-white transition-colors text-sm"
        >
          <LogOut className="w-4 h-4 mr-2" /> 로그아웃
        </button>
      </div>

      <div className="grid gap-6">
        {reservations.length === 0 ? (
          <div className="py-20 text-center bg-zinc-900 border border-brand-gold/10 rounded-lg">
            <p className="text-brand-gray">접수된 예약이 없습니다.</p>
          </div>
        ) : (
          reservations.map((res) => (
            <motion.div 
              layout
              key={res.id}
              className="bg-zinc-900 border border-brand-gold/10 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-brand-gold/40 transition-colors"
            >
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 text-brand-gold mr-3 shrink-0" />
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-tighter">DATE</p>
                    <p className="font-medium">{res.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 text-brand-gold mr-3 shrink-0" />
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-tighter">TIME</p>
                    <p className="font-medium">{res.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-4 h-4 text-brand-gold mr-3 shrink-0" />
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-tighter">GUESTS</p>
                    <p className="font-medium">{res.guests}명</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 text-brand-gold mr-3 shrink-0" />
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-tighter">NAME</p>
                    <p className="font-bold text-brand-gold">{res.name}</p>
                  </div>
                </div>
              </div>

              <div className="md:px-6 border-l border-brand-gold/10">
                <div className="flex items-center mb-2">
                  <PhoneIcon className="w-3 h-3 text-brand-gray mr-2" />
                  <p className="text-sm font-mono">{res.phone}</p>
                </div>
                {res.requests && (
                  <p className="text-xs text-brand-gray italic max-w-xs line-clamp-1">"{res.requests}"</p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${
                  res.status === '확정' ? 'bg-green-500/20 text-green-500' : 
                  res.status === '취소' ? 'bg-red-500/20 text-red-500' : 'bg-brand-gold/20 text-brand-gold'
                }`}>
                  {res.status}
                </div>
                <div className="flex gap-1">
                  <button 
                    onClick={() => handleStatusChange(res.id, '확정')}
                    className="p-2 hover:bg-green-500/20 rounded-lg text-green-500 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleStatusChange(res.id, '취소')}
                    className="p-2 hover:bg-red-500/20 rounded-lg text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(res.id)}
                    className="p-2 hover:bg-white/10 rounded-lg text-zinc-500 hover:text-white transition-colors"
                  >
                    <LogOut className="w-4 h-4 rotate-90" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
