import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Download, Feather, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CalligraphyCanvas({ lang }: { lang: Language }) {
  const [text, setText] = useState('');
  const [style, setStyle] = useState<'kufic' | 'diwani'>('kufic');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-kufic text-emerald-900 mb-4">
          {lang === 'ar' ? 'لوحة الخط العربي' : 'Calligraphy Canvas'}
        </h1>
        <p className="text-xs text-emerald-700 font-serif italic opacity-80">
          {lang === 'ar' ? 'جسدي كلماتك في قالب فني' : 'Visualize your words in an artistic form'}
        </p>
      </header>

      <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-gold-500/10">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setStyle('kufic')}
            className={cn(
              "flex-1 py-2.5 rounded-xl text-xs font-bold transition-all",
              style === 'kufic' ? "bg-emerald-900 text-gold-500 shadow-md" : "bg-emerald-50 text-emerald-900"
            )}
          >
            Kufic
          </button>
          <button
            onClick={() => setStyle('diwani')}
            className={cn(
              "flex-1 py-2.5 rounded-xl text-xs font-bold transition-all",
              style === 'diwani' ? "bg-emerald-900 text-gold-500 shadow-md" : "bg-emerald-50 text-emerald-900"
            )}
          >
            Diwani
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={lang === 'ar' ? 'اكتبي هنا...' : 'Type here...'}
            className="w-full p-4 text-lg rounded-xl border border-emerald-100 focus:border-gold-500 outline-none bg-emerald-50/30"
          />
        </div>

        <div className="aspect-video bg-emerald-950 rounded-[2rem] flex items-center justify-center p-8 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={text + style}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn(
                "text-center text-gold-500 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]",
                style === 'kufic' ? "text-4xl font-kufic" : "text-5xl font-diwani",
                !text && "opacity-30 italic text-xl font-serif"
              )}
            >
              {text || (lang === 'ar' ? 'كلماتك هنا' : 'Your words here')}
            </motion.div>
          </AnimatePresence>

          <button className="absolute bottom-4 right-4 p-3 bg-gold-500 text-emerald-950 rounded-full shadow-lg active:scale-90 transition-transform">
            <Download size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <div className="flex items-center gap-1.5 text-emerald-600 text-[10px] uppercase tracking-widest font-bold">
            <Sparkles size={12} />
            <span>{lang === 'ar' ? 'دقة عالية' : 'High Res'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 text-[10px] uppercase tracking-widest font-bold">
            <Feather size={12} />
            <span>{lang === 'ar' ? 'خط أصيل' : 'Authentic'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
