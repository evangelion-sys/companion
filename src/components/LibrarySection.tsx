import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { Library, Film, Book, Search, Loader2, Sparkles, Star, Play, Info, ExternalLink, Crown } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

export default function LibrarySection({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'books' | 'films'>('books');

  const getRecommendations = async (type: 'books' | 'films') => {
    setIsLoading(true);
    try {
      const result = await geminiService.getLibraryRecommendations(type, dna);
      setRecommendations(result);
      setDna({
        ...dna,
        mysticismLevel: Math.min(100, dna.mysticismLevel + 1),
        recentThemes: [...new Set([...dna.recentThemes, `Library: ${type}`])]
      });
    } catch (error) {
      console.error("Library Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecommendations(activeTab);
  }, [activeTab]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6"
        >
          <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto border border-gold-500/20 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
            <Library size={48} className="text-gold-500" />
          </div>
        </motion.div>
        <h1 className="text-5xl font-serif italic text-gold-500 mb-4">Alchemical Library & Cinema</h1>
        <p className="text-gold-500/40 font-mono uppercase tracking-[0.4em] text-xs">
          {lang === 'ar' ? 'مكتبة الخيمياء والسينما المقدسة' : 'The Library of Alchemy & Sacred Cinema'}
        </p>
      </header>

      <div className="flex justify-center gap-8 mb-16">
        <button
          onClick={() => setActiveTab('books')}
          className={cn(
            "flex items-center gap-4 px-10 py-5 rounded-2xl font-serif text-xl transition-all border",
            activeTab === 'books' 
              ? "bg-gold-500 text-emerald-950 border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
              : "bg-white/5 text-gold-500/40 border-gold-500/10 hover:bg-gold-500/10"
          )}
        >
          <Book size={24} />
          {lang === 'ar' ? 'المخطوطات' : 'Manuscripts'}
        </button>
        <button
          onClick={() => setActiveTab('films')}
          className={cn(
            "flex items-center gap-4 px-10 py-5 rounded-2xl font-serif text-xl transition-all border",
            activeTab === 'films' 
              ? "bg-gold-500 text-emerald-950 border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
              : "bg-white/5 text-gold-500/40 border-gold-500/10 hover:bg-gold-500/10"
          )}
        >
          <Film size={24} />
          {lang === 'ar' ? 'السينما' : 'Cinema'}
        </button>
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
            <Loader2 size={48} className="text-gold-500 animate-spin mx-auto mb-6" />
            <p className="text-gold-500/60 font-serif italic text-xl animate-pulse">
              {lang === 'ar' ? 'المعماري يبحث في السجلات...' : 'The Architect is searching the archives...'}
            </p>
          </motion.div>
        ) : recommendations ? (
          <motion.div
            key="recommendations"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="luxury-card p-12 bg-blood-950/20 border-gold-500/20 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 opacity-5">
              <Library size={200} className="text-gold-500" />
            </div>
            <div className="markdown-body relative z-10">
              <ReactMarkdown>{recommendations}</ReactMarkdown>
            </div>
            <div className="mt-12 pt-8 border-t border-gold-500/10 text-center">
              <p className="text-gold-500/30 font-mono text-[10px] uppercase tracking-widest">
                Curated for Selma's Sovereign DNA
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 border-2 border-dashed border-gold-500/10 rounded-3xl"
          >
            <Star size={48} className="text-gold-500/20 mx-auto mb-6" />
            <p className="text-gold-500/40 font-serif italic text-xl">
              {lang === 'ar' ? 'اختر فئة لاستكشاف الحكمة...' : 'Select a category to explore wisdom...'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
