import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { Shield, Heart, Sparkles, Moon, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { geminiService } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export default function SelmaStation({ lang, dna }: { lang: Language, dna: SpiritualDNA }) {
  const [stationContent, setStationContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStation = async () => {
      setIsLoading(true);
      try {
        const content = await geminiService.getSelmaStation(dna);
        setStationContent(content);
      } catch (error) {
        console.error("Station Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStation();
  }, [dna]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-emerald-950 flex items-center justify-center text-gold-500 shadow-2xl border border-gold-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-20"></div>
            <Moon size={40} className="relative z-10" />
          </div>
        </motion.div>
        <h1 className="text-5xl font-serif italic text-gold-500 mb-4 tracking-tight">
          {lang === 'ar' ? 'مقام سلمى' : "Selma's Station"}
        </h1>
        <p className="text-xl text-gold-500/60 font-serif max-w-2xl mx-auto">
          {lang === 'ar' 
            ? 'تتبع الروح الخوارزمي وإدخال الجريموير اليومي الفريد.' 
            : 'Algorithmic soul-tracking and daily unique Grimoire entry.'}
        </p>
      </header>

      <div className="space-y-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="text-gold-500 animate-spin mb-6" size={48} />
            <p className="text-gold-500/60 font-serif italic text-xl animate-pulse">
              {lang === 'ar' ? 'المعماري يقرأ روحك...' : 'The Architect is reading your soul...'}
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="luxury-card p-10 md:p-16 bg-white/5 border-gold-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <Sparkles size={120} className="text-gold-500" />
            </div>
            <div className="markdown-body text-lg font-serif text-cream-50/90 leading-relaxed relative z-10">
              <ReactMarkdown>{stationContent}</ReactMarkdown>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
