import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  MessageCircle, 
  Heart, 
  Library, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Languages,
  Feather,
  Film,
  Compass,
  Wind,
  History,
  Map,
  Palette,
  Home as HomeIcon,
  Flame,
  Zap,
  Crown,
  LayoutGrid,
  MessageSquare,
  Book,
  User,
} from 'lucide-react';
import { cn } from './lib/utils';
import { Language, SpiritualDNA } from './types';

// Components
import Home from './components/Home';
import Diwan from './components/Diwan';
import Fiqh from './components/Fiqh';
import ChatZahra from './components/ChatZahra';
import ChatQareen from './components/ChatQareen';
import LibrarySection from './components/LibrarySection';
import SelmaStation from './components/SelmaStation';
import NafasTimeline from './components/NafasTimeline';
import BouqalaArchive from './components/BouqalaArchive';
import AncientPaths from './components/AncientPaths';
import CalligraphyCanvas from './components/CalligraphyCanvas';
import ShadowFire from './components/ShadowFire';

const DEFAULT_DNA: SpiritualDNA = {
  lastInteraction: new Date().toISOString(),
  dominantArchetype: 'Sovereign Sultana',
  spiritualLevel: 1,
  sovereigntyScore: 75,
  mysticismPath: 'Hybrid',
  recentThemes: ['Divine Command', 'Inner Sanctum'],
  mysticismLevel: 25,
  xp: 0,
  level: 1,
  shadowIntegration: 30,
  runicAlignment: ['Uruz', 'Thurisaz'],
  heartState: 'Sovereign'
};

function Navigation({ lang, setLang, dna }: { lang: Language, setLang: (l: Language) => void, dna: SpiritualDNA }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [calligraphyStyle, setCalligraphyStyle] = useState<'kufic' | 'diwani'>('kufic');
  const location = useLocation();

  useEffect(() => {
    setCalligraphyStyle(Math.random() > 0.5 ? 'kufic' : 'diwani');
  }, [location.pathname]);

  const mainNavItems = [
    { path: '/', label: lang === 'ar' ? 'الرئيسية' : 'Sanctuary', icon: HomeIcon },
    { path: '/zahra', label: lang === 'ar' ? 'زهرة' : 'Zahra', icon: MessageCircle },
    { path: '/shadow', label: lang === 'ar' ? 'السيادة' : 'Sovereignty', icon: Flame },
    { path: '/qareen', label: lang === 'ar' ? 'القرين' : 'Qareen', icon: Compass },
  ];

  const moreNavItems = [
    { path: '/nafas', label: lang === 'ar' ? 'نفس سلمى' : 'Breath', icon: Wind },
    { path: '/selma', label: lang === 'ar' ? 'مقام سلمى' : 'Station', icon: Moon },
    { path: '/bouqala', label: lang === 'ar' ? 'بوقالات' : 'Bouqala', icon: History },
    { path: '/paths', label: lang === 'ar' ? 'المسارات' : 'Paths', icon: Map },
    { path: '/canvas', label: lang === 'ar' ? 'اللوحة' : 'Canvas', icon: Palette },
    { path: '/diwan', label: lang === 'ar' ? 'الديوان' : 'Diwan', icon: Feather },
    { path: '/fiqh', label: lang === 'ar' ? 'الفقه' : 'Fiqh', icon: BookOpen },
    { path: '/library', label: lang === 'ar' ? 'المكتبة' : 'Library', icon: Library },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 w-full z-50 bg-emerald-950/95 backdrop-blur-md border-b border-gold-500/20 text-cream-50 h-16 flex items-center px-6 justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
            <Crown size={20} className="text-gold-500" />
          </div>
          <span className="text-2xl font-serif italic text-gold-500 tracking-tight">Al-Anis</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className={cn(
              "text-base text-gold-400/90 leading-none",
              calligraphyStyle === 'kufic' ? 'font-kufic' : 'font-diwani'
            )}>
              {lang === 'ar' ? 'سلمى' : 'Sultana Selma'}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-24 h-1 bg-gold-500/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${dna.mysticismLevel}%` }}
                  className="h-full bg-gold-500"
                />
              </div>
              <span className="text-[8px] font-mono text-gold-500/50 uppercase tracking-widest">Mysticism {dna.mysticismLevel}%</span>
            </div>
          </div>
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="p-2 text-gold-500/70 hover:text-gold-500 transition-colors"
          >
            <Languages size={22} />
          </button>
        </div>
      </nav>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 w-full z-50 bg-emerald-950/98 backdrop-blur-xl border-t border-gold-500/20 text-cream-50 h-20 pb-safe">
        <div className="flex items-center justify-around h-full px-4">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 flex-1 h-full transition-all active:scale-90 relative group",
                location.pathname === item.path ? "text-gold-500" : "text-cream-50/40"
              )}
            >
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-gold-500/5 blur-xl rounded-full"
                />
              )}
              <item.icon size={24} strokeWidth={location.pathname === item.path ? 2 : 1.5} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{item.label}</span>
            </Link>
          ))}
          
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 flex-1 h-full transition-all active:scale-90 relative",
              isMoreOpen ? "text-gold-500" : "text-cream-50/40"
            )}
          >
            {isMoreOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{lang === 'ar' ? 'المزيد' : 'More'}</span>
          </button>
        </div>
      </nav>

      {/* More Menu Overlay */}
      <AnimatePresence>
        {isMoreOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[60] bg-emerald-950 rounded-t-[2.5rem] border-t border-gold-500/30 p-6 pb-24 max-h-[80vh] overflow-y-auto"
            >
              <div className="w-12 h-1.5 bg-gold-500/20 rounded-full mx-auto mb-8" />
              <div className="grid grid-cols-3 gap-6">
                {moreNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMoreOpen(false)}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-active:scale-90",
                      location.pathname === item.path ? "bg-gold-500 text-emerald-950 shadow-lg shadow-gold-500/20" : "bg-emerald-900/50 text-gold-500 border border-gold-500/10"
                    )}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-[11px] text-center font-medium text-cream-50/80">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [dna, setDna] = useState<SpiritualDNA>(() => {
    const saved = localStorage.getItem('spiritual_dna');
    return saved ? JSON.parse(saved) : DEFAULT_DNA;
  });

  useEffect(() => {
    localStorage.setItem('spiritual_dna', JSON.stringify(dna));
  }, [dna]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-emerald-950">
        <Navigation lang={lang} setLang={setLang} dna={dna} />
        
        <main className="flex-grow pt-14 pb-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/nafas" element={<NafasTimeline lang={lang} dna={dna} />} />
              <Route path="/selma" element={<SelmaStation lang={lang} dna={dna} />} />
              <Route path="/shadow" element={<ShadowFire lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/bouqala" element={<BouqalaArchive lang={lang} />} />
              <Route path="/paths" element={<AncientPaths lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/canvas" element={<CalligraphyCanvas lang={lang} />} />
              <Route path="/diwan" element={<Diwan lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/fiqh" element={<Fiqh lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/zahra" element={<ChatZahra lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/qareen" element={<ChatQareen lang={lang} dna={dna} setDna={setDna} />} />
              <Route path="/library" element={<LibrarySection lang={lang} dna={dna} setDna={setDna} />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="bg-emerald-950 text-cream-100 py-8 border-t border-gold-500/20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-kufic text-xl text-gold-500 mb-2">الأنيس</p>
            <p className="text-sm opacity-70">
              {lang === 'ar' ? 'رفيقك الروحي والثقافي' : 'Your Spiritual and Cultural Companion'}
            </p>
            <p className="text-[10px] mt-4 opacity-30 font-mono tracking-widest">
              ᛋᛅᛚᛅᛘᛅ • SALAMA • سلامة
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
