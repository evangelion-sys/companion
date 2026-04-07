import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA, Rune, OrthodoxTeaching } from '../types';
import { Shield, Book, Sparkles, Scroll, History, Zap, Map, Palette } from 'lucide-react';
import { cn } from '../lib/utils';

const RUNES: Rune[] = [
  {
    symbol: 'ᚠ',
    name: 'Fehu',
    meaning: 'Wealth, Abundance, Success.',
    psychologicalState: 'Creative flow and material realization.',
    phonetics: 'F',
    hiddenHistory: 'Originally represented cattle, the primary form of mobile wealth in ancient Norse society.',
    manifestationRitual: 'Visualize the rune in gold light while focusing on the flow of energy from your hands to your projects.'
  },
  {
    symbol: 'ᚢ',
    name: 'Uruz',
    meaning: 'Strength, Vitality, Primal Power.',
    psychologicalState: 'Raw energy and physical health.',
    phonetics: 'U',
    hiddenHistory: 'The Aurochs, the extinct wild ox of Europe, symbolizing untamed strength.',
    manifestationRitual: 'Stand firmly on the earth, breathe deeply into your belly, and chant the sound "OOO-ROOZ".'
  },
  {
    symbol: 'ᚦ',
    name: 'Thurisaz',
    meaning: 'Thor, Giant, Thorn, Protection.',
    psychologicalState: 'Breaking through resistance and reactive defense.',
    phonetics: 'TH',
    hiddenHistory: 'Represents the hammer of Thor and the giants of chaos.',
    manifestationRitual: 'Draw the rune in the air to create a boundary of protection around your space.'
  }
];

const ORTHODOX_TEACHINGS: OrthodoxTeaching[] = [
  {
    title: 'Hesychasm (The Prayer of the Heart)',
    content: 'A mystical tradition of prayer in the Eastern Orthodox Church, involving the repetition of the Jesus Prayer ("Lord Jesus Christ, Son of God, have mercy on me, a sinner") in rhythm with the breath.',
    source: 'The Philokalia',
    theologyOfBeauty: 'Beauty is seen as a divine attribute, a reflection of the Uncreated Light of Tabor.'
  },
  {
    title: 'The Theology of Icons',
    content: 'Icons are not mere paintings but "windows into heaven." They are written in prayer and serve as a point of contact between the earthly and the divine.',
    source: 'St. John of Damascus',
    theologyOfBeauty: 'The iconographer seeks to capture the transfigured state of the saint, using light and color to convey spiritual reality.'
  }
];

export default function AncientPaths({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [activeTab, setActiveTab] = useState<'runes' | 'orthodox'>('runes');

  const handleRuneClick = (rune: Rune) => {
    setDna({
      ...dna,
      runicAlignment: [...new Set([...dna.runicAlignment, rune.name])],
      mysticismLevel: Math.min(100, dna.mysticismLevel + 0.5),
      xp: dna.xp + 10,
      recentThemes: [...new Set([...dna.recentThemes, `Rune: ${rune.name}`])]
    });
  };

  const handleTeachingClick = (teaching: OrthodoxTeaching) => {
    setDna({
      ...dna,
      mysticismLevel: Math.min(100, dna.mysticismLevel + 1),
      xp: dna.xp + 15,
      recentThemes: [...new Set([...dna.recentThemes, `Orthodox: ${teaching.title}`])]
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-kufic text-gold-500 mb-4">المسارات القديمة</h1>
        <p className="text-xs font-mono uppercase tracking-[0.4em] text-gold-500/60">
          {lang === 'ar' ? 'الحكمة الأرثوذكسية والرموز الرونية' : 'Ancient Paths & Global Mysticism'}
        </p>
      </header>

      <div className="flex justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveTab('runes')}
          className={cn(
            "px-8 py-4 rounded-3xl font-bold text-sm transition-all flex items-center gap-3",
            activeTab === 'runes' ? "bg-gold-500 text-emerald-950 shadow-xl" : "bg-white/5 text-gold-500/60 border border-gold-500/10"
          )}
        >
          <Zap size={18} /> {lang === 'ar' ? 'الموسوعة الرونية' : 'Runic Encyclopedia'}
        </button>
        <button
          onClick={() => setActiveTab('orthodox')}
          className={cn(
            "px-8 py-4 rounded-3xl font-bold text-sm transition-all flex items-center gap-3",
            activeTab === 'orthodox' ? "bg-gold-500 text-emerald-950 shadow-xl" : "bg-white/5 text-gold-500/60 border border-gold-500/10"
          )}
        >
          <Shield size={18} /> {lang === 'ar' ? 'التصوف الأرثوذكسي' : 'Orthodox Mysticism'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'runes' ? (
          <motion.div
            key="runes"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-1 gap-12"
          >
            {RUNES.map((rune) => (
              <div 
                key={rune.name} 
                onClick={() => handleRuneClick(rune)}
                className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-gold-500/20 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-gold-500/40 transition-all"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-[12rem] font-mono text-gold-500">{rune.symbol}</span>
                </div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center md:text-left">
                    <span className="text-8xl font-mono text-gold-500 mb-4 block">{rune.symbol}</span>
                    <h3 className="text-3xl font-bold text-cream-50 mb-2">{rune.name}</h3>
                    <p className="text-gold-500/60 font-mono uppercase tracking-widest text-xs">Phonetics: {rune.phonetics}</p>
                  </div>

                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-3 flex items-center gap-2">
                        <History size={12} /> {lang === 'ar' ? 'التاريخ الخفي' : 'Hidden History'}
                      </h4>
                      <p className="text-cream-50/80 leading-relaxed font-serif">{rune.hiddenHistory}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-3 flex items-center gap-2">
                        <Sparkles size={12} /> {lang === 'ar' ? 'طقس التجلي' : 'Manifestation Ritual'}
                      </h4>
                      <p className="text-gold-200/90 leading-relaxed italic font-serif text-lg">{rune.manifestationRitual}</p>
                    </div>

                    <div className="pt-6 border-t border-gold-500/10">
                      <p className="text-xs text-gold-500/40 uppercase tracking-widest">Meaning: {rune.meaning}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="orthodox"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 gap-12"
          >
            {ORTHODOX_TEACHINGS.map((teaching) => (
              <div 
                key={teaching.title} 
                onClick={() => handleTeachingClick(teaching)}
                className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-gold-500/20 shadow-2xl relative overflow-hidden cursor-pointer hover:border-gold-500/40 transition-all"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Shield size={140} className="text-gold-500" />
                </div>

                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="text-3xl font-kufic text-gold-500 mb-6">{teaching.title}</h3>
                    <div className="p-8 bg-emerald-900/40 rounded-[2.5rem] border border-gold-500/10">
                      <p className="text-cream-50 text-xl leading-relaxed font-serif italic">{teaching.content}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-3 flex items-center gap-2">
                      <Palette size={12} /> {lang === 'ar' ? 'لاهوت الجمال' : 'Theology of Beauty'}
                    </h4>
                    <p className="text-gold-200/80 leading-relaxed font-serif">{teaching.theologyOfBeauty}</p>
                  </div>

                  <div className="pt-6 border-t border-gold-500/10 flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-500/40">Source: {teaching.source}</span>
                    <Map size={20} className="text-gold-500/20" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
