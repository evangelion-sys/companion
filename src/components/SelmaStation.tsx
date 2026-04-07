import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { SELMA_POEMS, DAILY_WIRDS } from '../constants';
import { Shield, Heart, Sparkles, Moon } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SelmaStation({ lang, dna }: { lang: Language, dna: SpiritualDNA }) {
  const [greeting, setGreeting] = useState('');
  const [wird, setWird] = useState(DAILY_WIRDS[0]);

  useEffect(() => {
    const randomPoem = SELMA_POEMS[Math.floor(Math.random() * SELMA_POEMS.length)];
    setGreeting(randomPoem);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-4"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-900 flex items-center justify-center text-gold-500 shadow-xl border border-gold-500/20">
            <Moon size={28} />
          </div>
        </motion.div>
        <h1 className="text-3xl font-kufic text-emerald-900 mb-4">مقام سلمى</h1>
        <div className="bg-white p-6 rounded-[2rem] shadow-md border border-gold-500/10 mb-6">
          <p className="text-lg font-serif italic text-emerald-800 leading-relaxed whitespace-pre-wrap">
            {greeting}
          </p>
        </div>
      </header>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-950 text-cream-50 p-8 rounded-[2.5rem] shadow-xl border border-gold-500/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-gold-500" size={24} />
            <h2 className="text-xl font-kufic text-gold-500">{lang === 'ar' ? 'ورد اليوم' : 'Daily Wird'}</h2>
          </div>
          <h3 className="text-base font-bold mb-2">{wird.title}</h3>
          <p className="text-sm mb-4 leading-relaxed opacity-80">{wird.practice}</p>
          <div className="bg-emerald-900/40 p-4 rounded-xl border-r-4 border-gold-500 italic text-[10px] leading-relaxed">
            {wird.spiritualContext}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-[2.5rem] shadow-md border border-gold-500/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-emerald-900" size={24} />
            <h2 className="text-xl font-kufic text-emerald-900">{lang === 'ar' ? 'نمو الروح' : 'Soul Growth'}</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-emerald-50 pb-3">
              <span className="text-emerald-700 text-xs">{lang === 'ar' ? 'مستوى السكينة' : 'Tranquility Level'}</span>
              <span className="text-gold-600 font-bold text-sm">85%</span>
            </div>
            <div className="flex justify-between items-center border-b border-emerald-50 pb-3">
              <span className="text-emerald-700 text-xs">{lang === 'ar' ? 'أيام الالتزام' : 'Commitment Days'}</span>
              <span className="text-gold-600 font-bold text-sm">12</span>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl text-[11px] text-emerald-800 italic leading-relaxed">
              {lang === 'ar' 
                ? "«أنتِ تتقدمين بخطى ثابتة نحو السلام الداخلي يا سلمى»"
                : "«You are moving with steady steps towards inner peace, Selma»"}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
