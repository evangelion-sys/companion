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
  Flame
} from 'lucide-react';
import { cn } from './lib/utils';
import { Language } from './types';

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

function Navigation({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [calligraphyStyle, setCalligraphyStyle] = useState<'kufic' | 'diwani'>('kufic');
  const location = useLocation();

  useEffect(() => {
    setCalligraphyStyle(Math.random() > 0.5 ? 'kufic' : 'diwani');
  }, [location.pathname]);

  const mainNavItems = [
    { path: '/', label: lang === 'ar' ? 'الرئيسية' : 'Home', icon: HomeIcon },
    { path: '/zahra', label: lang === 'ar' ? 'زهرة' : 'Zahra', icon: MessageCircle },
    { path: '/shadow', label: lang === 'ar' ? 'الأحمر' : 'Shadow', icon: Flame },
    { path: '/qareen', label: lang === 'ar' ? 'القرين' : 'Qareen', icon: Compass },
  ];

  const moreNavItems = [
    { path: '/nafas', label: lang === 'ar' ? 'نفس سلمى' : 'Selma\'s Breath', icon: Wind },
    { path: '/selma', label: lang === 'ar' ? 'مقام سلمى' : 'Selma Station', icon: Moon },
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
      <nav className="fixed top-0 w-full z-50 bg-emerald-950/95 backdrop-blur-md border-b border-gold-500/20 text-cream-50 h-14 flex items-center px-4 justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-kufic text-gold-500">الأنيس</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <span className={cn(
            "text-base text-gold-400/80",
            calligraphyStyle === 'kufic' ? 'font-kufic' : 'font-diwani'
          )}>
            {lang === 'ar' ? 'سلمى' : 'Selma'}
          </span>
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="p-2 text-gold-500/70 active:scale-95 transition-transform"
          >
            <Languages size={20} />
          </button>
        </div>
      </nav>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 w-full z-50 bg-emerald-950/98 backdrop-blur-xl border-t border-gold-500/20 text-cream-50 h-16 pb-safe">
        <div className="flex items-center justify-around h-full px-2">
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all active:scale-90",
                location.pathname === item.path ? "text-gold-500" : "text-cream-50/60"
              )}
            >
              <item.icon size={22} strokeWidth={location.pathname === item.path ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          ))}
          
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all active:scale-90",
              isMoreOpen ? "text-gold-500" : "text-cream-50/60"
            )}
          >
            {isMoreOpen ? <X size={22} /> : <Menu size={22} />}
            <span className="text-[10px] font-medium">{lang === 'ar' ? 'المزيد' : 'More'}</span>
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

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation lang={lang} setLang={setLang} />
        
        <main className="flex-grow pt-14 pb-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/nafas" element={<NafasTimeline lang={lang} />} />
              <Route path="/selma" element={<SelmaStation lang={lang} />} />
              <Route path="/shadow" element={<ShadowFire lang={lang} />} />
              <Route path="/bouqala" element={<BouqalaArchive lang={lang} />} />
              <Route path="/paths" element={<AncientPaths lang={lang} />} />
              <Route path="/canvas" element={<CalligraphyCanvas lang={lang} />} />
              <Route path="/diwan" element={<Diwan lang={lang} />} />
              <Route path="/fiqh" element={<Fiqh lang={lang} />} />
              <Route path="/zahra" element={<ChatZahra lang={lang} />} />
              <Route path="/qareen" element={<ChatQareen lang={lang} />} />
              <Route path="/library" element={<LibrarySection lang={lang} />} />
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
