import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { RUNES, ORTHODOX_TEACHINGS } from '../constants';
import { Sparkles, Shield, Moon, Sun, ScrollText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AncientPaths({ lang }: { lang: Language }) {
  const [selectedRune, setSelectedRune] = useState<typeof RUNES[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'Orthodox' | 'Runic'>('Orthodox');

  const drawRune = () => {
    const random = RUNES[Math.floor(Math.random() * RUNES.length)];
    setSelectedRune(random);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-kufic text-emerald-900 mb-4">
          {lang === 'ar' ? 'المسارات القديمة' : 'Ancient Paths'}
        </h1>
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveTab('Orthodox')}
            className={cn(
              "px-4 py-2 rounded-full text-[10px] font-bold transition-all flex items-center gap-1.5",
              activeTab === 'Orthodox' ? "bg-emerald-900 text-gold-500 shadow-md" : "bg-emerald-100 text-emerald-900"
            )}
          >
            <Sun size={14} />
            {lang === 'ar' ? 'التصوف الأرثوذكسي' : 'Orthodox Mysticism'}
          </button>
          <button
            onClick={() => setActiveTab('Runic')}
            className={cn(
              "px-4 py-2 rounded-full text-[10px] font-bold transition-all flex items-center gap-1.5",
              activeTab === 'Runic' ? "bg-emerald-900 text-gold-500 shadow-md" : "bg-emerald-100 text-emerald-900"
            )}
          >
            <Moon size={14} />
            {lang === 'ar' ? 'الحكمة الرونية' : 'Runic Wisdom'}
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {activeTab === 'Orthodox' ? (
          <motion.div
            key="orthodox"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gold-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="byzantine-halo p-3">
                  <ScrollText className="text-gold-500" size={20} />
                </div>
                <h2 className="text-xl font-kufic text-emerald-900">The Philokalia</h2>
              </div>
              <div className="space-y-6">
                {ORTHODOX_TEACHINGS.map((t, i) => (
                  <div key={i} className="border-r-4 border-gold-500 pr-4">
                    <h3 className="text-base font-bold text-emerald-900 mb-1">{t.title}</h3>
                    <p className="text-sm text-emerald-800 leading-relaxed mb-1">{t.content}</p>
                    <span className="text-[10px] text-gold-600 font-mono">— {t.source}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-950 text-cream-50 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl"></div>
              <h2 className="text-xl font-kufic text-gold-500 mb-4">Hesychia & Salama</h2>
              <p className="text-sm leading-relaxed mb-6 opacity-80">
                The bridge between the Sufi "Dhikr" and the Orthodox "Jesus Prayer" lies in the rhythmic meditation that leads to spiritual stillness.
              </p>
              <div className="p-4 bg-emerald-900/50 rounded-xl border border-gold-500/20 italic text-xs">
                "Lord Jesus Christ, Son of God, have mercy on me."
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="runic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-8"
          >
            <button
              onClick={drawRune}
              className="stone-and-silk-header text-sm hover:text-gold-500 transition-colors uppercase tracking-widest"
            >
              {lang === 'ar' ? 'استحضار الهمس القديم' : 'Invoke the Ancient Whisper'}
            </button>

            {selectedRune && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-gold-500/10 text-center w-full"
              >
                <div className="text-7xl font-runic text-emerald-900 mb-6">{selectedRune.symbol}</div>
                <h3 className="text-2xl font-kufic text-gold-500 mb-3">{selectedRune.name}</h3>
                <p className="text-base text-emerald-800 mb-6 leading-relaxed">{selectedRune.meaning}</p>
                <div className="bg-emerald-50 p-5 rounded-xl">
                  <h4 className="stone-and-silk-header text-[10px] mb-2 opacity-60">Psychological Application</h4>
                  <p className="text-sm text-emerald-900 italic leading-relaxed">{selectedRune.psychologicalState}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
