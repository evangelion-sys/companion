import { motion } from 'motion/react';
import { Language } from '../types';
import { Link } from 'react-router-dom';
import { Feather, BookOpen, MessageCircle, Compass } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Home({ lang }: { lang: Language }) {
  const features = [
    {
      title: lang === 'ar' ? 'ديوان الشعر' : 'Poetry Library',
      desc: lang === 'ar' ? 'رحلة عبر عصور الأدب العربي' : 'A journey through Arabic literature eras',
      icon: Feather,
      path: '/diwan',
      color: 'bg-emerald-900'
    },
    {
      title: lang === 'ar' ? 'الفقه الروحي' : 'Spiritual Fiqh',
      desc: lang === 'ar' ? 'فقه المرأة برؤية صوفية عميقة' : 'Women\'s Fiqh with deep Sufi vision',
      icon: BookOpen,
      path: '/fiqh',
      color: 'bg-emerald-800'
    },
    {
      title: lang === 'ar' ? 'زهرة' : 'Zahra',
      desc: lang === 'ar' ? 'رفيقتك الجزائرية الذكية' : 'Your smart Algerian companion',
      icon: MessageCircle,
      path: '/zahra',
      color: 'bg-emerald-700'
    },
    {
      title: lang === 'ar' ? 'القرين الرقمي' : 'Digital Qareen',
      desc: lang === 'ar' ? 'مرآة لنفسك ودعم نفسي متكامل' : 'A mirror to yourself and psychological support',
      icon: Compass,
      path: '/qareen',
      color: 'bg-emerald-600'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-serene-gradient text-cream-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-7xl font-kufic text-gold-500 mb-4 drop-shadow-2xl">الأنيس</h1>
          <p className="text-lg font-serif italic max-w-xs mx-auto leading-relaxed opacity-90">
            {lang === 'ar' 
              ? "«أنيس الروح في خلوتها، ورفيق النفس في رحلتها»"
              : "«The companion of the soul in its solitude, and the friend of the self in its journey»"}
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link 
              to="/zahra" 
              className="bg-gold-500 text-emerald-950 px-10 py-4 rounded-full font-bold shadow-[0_10px_20px_rgba(212,175,55,0.3)] active:scale-95 transition-all inline-block"
            >
              {lang === 'ar' ? 'تحدث مع زهرة' : 'Talk to Zahra'}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-12 bg-emerald-50/30">
        <div className="grid grid-cols-1 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={f.path}
                className={cn(
                  "block p-6 rounded-[2rem] transition-all active:scale-[0.98] border border-gold-500/10 shadow-lg",
                  f.color,
                  "text-cream-50"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gold-500/20 rounded-2xl text-gold-500">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-kufic">{f.title}</h3>
                    <p className="opacity-70 text-xs leading-relaxed mt-1">{f.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-emerald-950 text-cream-50 py-16 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        </div>
        <blockquote className="text-2xl font-serif italic leading-snug relative z-10">
          {lang === 'ar'
            ? "«يا بني، اجعل نفسك ميزاناً فيما بينك وبين غيرك»"
            : "«O my son, make yourself a scale between you and others»"}
          <footer className="mt-6 text-base font-sans not-italic text-gold-500 opacity-80">— الإمام الغزالي</footer>
        </blockquote>
      </section>
    </div>
  );
}
