import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { Search, Book, Moon, Star, Loader2, Sparkles, Scroll, ShieldCheck, Heart, Crown } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export default function Fiqh({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [query, setQuery] = useState('');
  const [entry, setEntry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const result = await geminiService.getFiqhEntry(query, dna);
      setEntry(result);
      setDna({
        ...dna,
        mysticismLevel: Math.min(100, dna.mysticismLevel + 1.5),
        recentThemes: [...new Set([...dna.recentThemes, 'Fiqh al-Batin'])]
      });
    } catch (error) {
      console.error("Fiqh Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    { id: 'taharah', label: lang === 'ar' ? 'طهارة الروح' : 'Purity of Soul', icon: <Sparkles size={20} /> },
    { id: 'hijab', label: lang === 'ar' ? 'ميتافيزيقا الحجاب' : 'Metaphysics of Hijab', icon: <ShieldCheck size={20} /> },
    { id: 'motherhood', label: lang === 'ar' ? 'مقام الأمومة' : 'Station of Motherhood', icon: <Heart size={20} /> },
    { id: 'sovereignty', label: lang === 'ar' ? 'سيادة المرأة' : 'Female Sovereignty', icon: <Crown size={20} /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6"
        >
          <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto border border-gold-500/20 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <Book size={36} className="text-gold-500" />
          </div>
        </motion.div>
        <h1 className="text-5xl font-serif italic text-gold-500 mb-4">Fiqh al-Batin</h1>
        <p className="text-gold-500/40 font-mono uppercase tracking-[0.4em] text-xs">
          {lang === 'ar' ? 'فقه الباطن: الشريعة كأنوار إلهية' : 'The Jurisprudence of the Hidden: Sharia as Divine Light'}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1 space-y-4">
          <h3 className="text-gold-500/30 font-mono uppercase tracking-widest text-[10px] mb-6 px-4">Sacred Categories</h3>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setQuery(cat.label); }}
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-gold-500/10 text-gold-500/60 hover:bg-gold-500/10 hover:text-gold-500 transition-all group"
            >
              <div className="p-2 rounded-lg bg-gold-500/5 group-hover:bg-gold-500/20 transition-colors">
                {cat.icon}
              </div>
              <span className="font-serif italic text-lg">{cat.label}</span>
            </button>
          ))}
        </aside>

        <main className="lg:col-span-3 space-y-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 via-crimson-900/20 to-gold-500/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex gap-4 bg-emerald-950 border border-gold-500/30 rounded-3xl p-3 shadow-2xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === 'ar' ? 'اسألي عن فقه الروح...' : 'Inquire about the Fiqh of the Soul...'}
                className="flex-1 bg-transparent px-6 py-4 text-stone-200 outline-none font-serif text-xl placeholder:text-gold-500/20"
              />
              <button
                onClick={handleSearch}
                disabled={isLoading || !query.trim()}
                className="bg-gold-500 text-emerald-950 px-8 py-4 rounded-2xl font-serif font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <Search size={24} />}
                {lang === 'ar' ? 'استحضار' : 'Invoke'}
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {entry ? (
              <motion.div
                key="entry"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="luxury-card p-12 bg-blood-950/20 border-gold-500/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Scroll size={120} className="text-gold-500" />
                </div>
                <div className="markdown-body relative z-10">
                  <ReactMarkdown>{entry}</ReactMarkdown>
                </div>
                <div className="mt-12 pt-8 border-t border-gold-500/10 flex justify-between items-center">
                  <p className="text-gold-500/30 font-mono text-[10px] uppercase tracking-widest">
                    Authenticated by the Great Architect
                  </p>
                  <button 
                    onClick={() => setEntry(null)}
                    className="text-gold-500/40 hover:text-gold-500 transition-colors font-serif italic"
                  >
                    {lang === 'ar' ? 'إغلاق السجل' : 'Close Scroll'}
                  </button>
                </div>
              </motion.div>
            ) : !isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 border-2 border-dashed border-gold-500/10 rounded-3xl"
              >
                <Scroll size={48} className="text-gold-500/20 mx-auto mb-6" />
                <p className="text-gold-500/40 font-serif italic text-xl">
                  {lang === 'ar' ? 'السجلات بانتظار سؤالكِ...' : 'The scrolls await your inquiry...'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
