import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { Flame, Zap, Shield, Crown, Search, Loader2, Sparkles, Quote, MessageSquare, Scroll, Moon } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

export default function ShadowFire({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [context, setContext] = useState('');
  const [script, setScript] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getScript = async () => {
    if (!context.trim()) return;
    setIsLoading(true);
    try {
      const result = await geminiService.getSultanaScript(context, dna);
      setScript(result);
      setDna({
        ...dna,
        sovereigntyScore: Math.min(100, dna.sovereigntyScore + 5),
        recentThemes: [...new Set([...dna.recentThemes, 'Sovereignty Ritual'])]
      });
    } catch (error) {
      console.error("Sultana Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const rituals = [
    { id: 'command', label: lang === 'ar' ? 'سلطة الكلمة' : 'Authority of the Word', icon: <Crown size={24} />, color: 'text-gold-500' },
    { id: 'shadow', label: lang === 'ar' ? 'استعادة الظل' : 'Shadow Reclamation', icon: <Moon size={24} />, color: 'text-crimson-600' },
    { id: 'fire', label: lang === 'ar' ? 'طقس النار' : 'Ritual of Fire', icon: <Flame size={24} />, color: 'text-orange-500' },
    { id: 'sovereignty', label: lang === 'ar' ? 'مقام السيادة' : 'Station of Sovereignty', icon: <Shield size={24} />, color: 'text-emerald-500' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-6"
        >
          <div className="w-24 h-24 bg-crimson-900/10 rounded-full flex items-center justify-center mx-auto border border-crimson-900/20 shadow-[0_0_50px_rgba(153,27,27,0.2)]">
            <Flame size={48} className="text-crimson-600" />
          </div>
        </motion.div>
        <h1 className="text-5xl font-serif italic text-gold-500 mb-4">Sultana's Lexicon</h1>
        <p className="text-gold-500/40 font-mono uppercase tracking-[0.4em] text-xs">
          {lang === 'ar' ? 'طقوس السيادة والكلمة الآمرة' : 'Rituals of Sovereignty & The Commanding Word'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {rituals.map((ritual) => (
          <button
            key={ritual.id}
            onClick={() => { setContext(ritual.label); getScript(); }}
            disabled={isLoading}
            className="luxury-card p-8 bg-white/5 border-gold-500/10 hover:border-gold-500/30 transition-all group text-center"
          >
            <div className={cn("mb-6 flex justify-center group-hover:scale-110 transition-transform", ritual.color)}>
              {ritual.icon}
            </div>
            <h3 className="text-xl font-serif italic text-gold-500 group-hover:text-gold-400 transition-colors">
              {ritual.label}
            </h3>
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-crimson-900/20 via-black to-crimson-900/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex gap-4 bg-black border border-crimson-900/30 rounded-[3rem] p-3 shadow-2xl">
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && getScript()}
              placeholder={lang === 'ar' ? 'صف الموقف أو السيناريو...' : 'Describe the context or scenario...'}
              className="flex-1 bg-transparent px-8 py-4 text-stone-200 outline-none font-serif text-xl placeholder:text-crimson-900/20"
            />
            <button
              onClick={getScript}
              disabled={isLoading || !context.trim()}
              className="bg-crimson-700 text-white px-10 py-4 rounded-[2rem] font-serif font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50 shadow-2xl"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <Zap size={24} />}
              {lang === 'ar' ? 'استحضار' : 'Invoke'}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-32"
          >
            <Loader2 size={48} className="text-crimson-600 animate-spin mx-auto mb-6" />
            <p className="text-crimson-600/60 font-serif italic text-xl animate-pulse">
              {lang === 'ar' ? 'المعماري يصيغ كلماتكِ...' : 'The Architect is crafting your words...'}
            </p>
          </motion.div>
        ) : script ? (
          <motion.div
            key="script"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="luxury-card p-12 bg-blood-950/20 border-gold-500/20 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 opacity-5">
              <Crown size={200} className="text-gold-500" />
            </div>
            <div className="markdown-body relative z-10">
              <ReactMarkdown>{script}</ReactMarkdown>
            </div>
            <div className="mt-12 pt-8 border-t border-gold-500/10 flex justify-between items-center">
              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(script);
                    alert(lang === 'ar' ? 'تم النسخ إلى سجلاتكِ' : 'Copied to your scrolls');
                  }}
                  className="text-gold-500/60 hover:text-gold-500 transition-colors font-serif italic flex items-center gap-2"
                >
                  <Scroll size={18} /> {lang === 'ar' ? 'نسخ الطقس' : 'Copy Ritual'}
                </button>
              </div>
              <button 
                onClick={() => setScript(null)}
                className="text-gold-500/40 hover:text-gold-500 transition-colors font-serif italic"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 border-2 border-dashed border-crimson-900/10 rounded-3xl"
          >
            <Zap size={48} className="text-crimson-900/20 mx-auto mb-6" />
            <p className="text-crimson-900/40 font-serif italic text-xl">
              {lang === 'ar' ? 'اختاري طقساً لتفعيل سيادتكِ...' : 'Select a ritual to activate your sovereignty...'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
