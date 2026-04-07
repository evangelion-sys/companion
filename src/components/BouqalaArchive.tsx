import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { BOUQALAS } from '../constants';
import { Sparkles, MessageCircle, Heart, Shield } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

export default function BouqalaArchive({ lang }: { lang: Language }) {
  const [selectedBouqala, setSelectedBouqala] = useState<typeof BOUQALAS[0] | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const drawBouqala = () => {
    setIsRevealing(true);
    const random = BOUQALAS[Math.floor(Math.random() * BOUQALAS.length)];
    setTimeout(() => {
      setSelectedBouqala(random);
      setIsRevealing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-kufic text-emerald-900 mb-4">
          {lang === 'ar' ? 'بوقالات سلمى' : 'Selma\'s Bouqala'}
        </h1>
        <p className="text-xs text-emerald-700 font-serif italic opacity-80">
          {lang === 'ar' ? 'تراث الجدات وحكمة الأجيال' : 'Grandmothers\' heritage and generations\' wisdom'}
        </p>
      </header>

      <div className="flex flex-col items-center gap-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={drawBouqala}
          disabled={isRevealing}
          className="bg-serene-gradient text-gold-500 px-8 py-3 rounded-full text-sm font-bold shadow-xl border border-gold-500/20 flex items-center gap-2.5"
        >
          {isRevealing ? <Sparkles className="animate-spin" size={18} /> : <Sparkles size={18} />}
          {lang === 'ar' ? 'اعقدي وانوي' : 'Make an Intention'}
        </motion.button>

        <AnimatePresence mode="wait">
          {selectedBouqala && !isRevealing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full bg-white rounded-[2.5rem] p-8 shadow-xl border border-gold-500/10"
            >
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-emerald-50 rounded-2xl text-emerald-900 mb-4">
                  <MessageCircle size={24} />
                </div>
                <p className="text-xl font-serif italic text-emerald-950 leading-relaxed">
                  {selectedBouqala.text}
                </p>
              </div>

              <div className="space-y-8 mt-10 pt-8 border-t border-emerald-50">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <Heart size={16} className="text-gold-500" />
                    <span>{lang === 'ar' ? 'التفسير النفسي' : 'Psychological Interpretation'}</span>
                  </div>
                  <p className="text-emerald-800 text-xs leading-relaxed opacity-90">
                    {selectedBouqala.interpretation}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <Shield size={16} className="text-gold-500" />
                    <span>{lang === 'ar' ? 'بركة صوفية' : 'Sufi Blessing'}</span>
                  </div>
                  <p className="text-emerald-800 text-xs leading-relaxed italic opacity-90">
                    {selectedBouqala.blessing}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
