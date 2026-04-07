import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA, DailyOracle } from '../types';
import { Link } from 'react-router-dom';
import { 
  Feather, 
  BookOpen, 
  MessageCircle, 
  Compass, 
  Sparkles, 
  Loader2, 
  Flame, 
  Zap, 
  Scroll, 
  Shield, 
  Crown 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { geminiService } from '../services/geminiService';

export default function Home({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [oracle, setOracle] = useState<DailyOracle | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getOracle = async () => {
    setIsLoading(true);
    try {
      const newOracle = await geminiService.generateDailyOracle(dna);
      setOracle(newOracle);
      // Update DNA with a new theme
      setDna({
        ...dna,
        recentThemes: [...new Set([...dna.recentThemes, 'Oracle Interaction'])],
        spiritualLevel: dna.spiritualLevel + 0.1
      });
    } catch (error) {
      console.error("Oracle Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOracle();
  }, [lang]);

  const features = [
    {
      title: lang === 'ar' ? 'ديوان الأنيس' : 'The Eternal Diwan',
      desc: lang === 'ar' ? 'أرشيف غير محدود من الشعر والخط العربي' : '10,000+ years of verse and calligraphic alchemy',
      icon: Feather,
      path: '/diwan',
      color: 'bg-emerald-900'
    },
    {
      title: lang === 'ar' ? 'فقه الباطن' : 'Fiqh al-Batin',
      desc: lang === 'ar' ? 'فقه المرأة برؤية صوفية عميقة' : 'The Metaphysics of the Soul and Divine Sovereignty',
      icon: BookOpen,
      path: '/fiqh',
      color: 'bg-emerald-800'
    },
    {
      title: lang === 'ar' ? 'طقوس النار والسيادة' : 'Rituals of Fire & Sovereignty',
      desc: lang === 'ar' ? 'طقوس التمكين والسيادة' : 'Shadow Work, Tactical Lust, and the Sultana\'s Power',
      icon: Flame,
      path: '/shadow',
      color: 'bg-blood-950'
    },
    {
      title: lang === 'ar' ? 'المسارات القديمة' : 'The Ancient Paths',
      desc: lang === 'ar' ? 'الحكمة الأرثوذكسية والرموز الرونية' : 'Elder Futhark, Orthodox Mysticism, and Cross-Cultural Alchemy',
      icon: Shield,
      path: '/paths',
      color: 'bg-emerald-700'
    },
    {
      title: lang === 'ar' ? 'المكتبة والسينما' : 'Alchemical Library & Cinema',
      desc: lang === 'ar' ? 'تقييمات الكتب والسينما العلاجية' : '2,000+ Curations of Psychology, Power, and Cinematic Therapy',
      icon: Scroll,
      path: '/library',
      color: 'bg-emerald-950'
    }
  ];

  return (
    <div className="relative bg-emerald-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/0 via-emerald-950/50 to-emerald-950"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6 max-w-2xl"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border border-gold-500/20 rounded-full animate-pulse" />
              </div>
              <Crown size={80} className="text-gold-500 opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles size={32} className="text-gold-500" />
              </div>
            </motion.div>
          </div>

          <h1 className="text-8xl font-serif text-gold-500 mb-4 drop-shadow-[0_0_40px_rgba(212,175,55,0.3)] italic">
            {lang === 'ar' ? 'الأنيس' : 'Al-Anis'}
          </h1>
          <p className="text-sm font-mono uppercase tracking-[0.5em] text-gold-500/60 mb-12">
            {lang === 'ar' ? 'مقام السلطانة سلمى' : 'The Sanctuary of Sultana Selma'}
          </p>

          <AnimatePresence mode="wait">
            {oracle ? (
              <motion.div
                key={oracle.date}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="space-y-8"
              >
                {/* Daily Oracle Card - High Luxury */}
                <div className="luxury-card p-10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="text-8xl font-mono text-gold-500">{oracle.runeSymbol}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="space-y-3">
                      <span className="diwani-header">
                        <Scroll size={12} className="inline mr-2" /> {lang === 'ar' ? 'القلب' : 'The Heart'}
                      </span>
                      <p className="text-base font-serif italic leading-relaxed text-gold-200/90">{oracle.sufiVerse}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <span className="kufic-header">
                        <Shield size={12} className="inline mr-2" /> {lang === 'ar' ? 'التاريخ' : 'The History'}
                      </span>
                      <p className="text-sm opacity-80 leading-relaxed font-light">{oracle.ancientInsight}</p>
                    </div>

                    <div className="space-y-3 border-l border-gold-500/10 pl-6">
                      <span className="diwani-header text-crimson-900">
                        <Flame size={12} className="inline mr-2" /> {lang === 'ar' ? 'الجسد' : 'The Body'}
                      </span>
                      <p className="text-sm font-bold text-gold-500 uppercase tracking-widest leading-snug">{oracle.powerCommand}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-48 flex items-center justify-center">
                <Loader2 className="text-gold-500 animate-spin" size={40} />
              </div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <button 
              onClick={getOracle}
              disabled={isLoading}
              className="group relative px-8 py-3 bg-gold-500/10 border border-gold-500/30 text-gold-500 text-xs uppercase tracking-[0.3em] font-bold overflow-hidden transition-all hover:bg-gold-500 hover:text-emerald-950"
            >
              <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                {lang === 'ar' ? 'استحضار الحكمة' : 'Invoke the Architect'}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={f.path}
                className={cn(
                  "group block p-8 rounded-[3rem] transition-all active:scale-[0.98] border border-gold-500/10 shadow-2xl relative overflow-hidden",
                  f.color,
                  "text-cream-50"
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="flex items-center gap-6 relative z-10">
                  <div className="p-4 bg-gold-500/10 rounded-[1.5rem] text-gold-500 group-hover:bg-gold-500 group-hover:text-emerald-950 transition-colors duration-500">
                    <f.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-kufic text-gold-500 mb-1">{f.title}</h3>
                    <p className="opacity-60 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-emerald-950 text-cream-50 py-24 px-8 text-center relative overflow-hidden border-t border-gold-500/10">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <blockquote className="text-3xl font-serif italic leading-relaxed relative z-10 text-gold-200">
            {lang === 'ar'
              ? "«يا بني، اجعل نفسك ميزاناً فيما بينك وبين غيرك»"
              : "«O my son, make yourself a scale between you and others»"}
            <footer className="mt-8 text-lg font-sans not-italic text-gold-500 uppercase tracking-widest">— الإمام الغزالي</footer>
          </blockquote>
        </motion.div>
      </section>
    </div>
  );
}
