import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { cn } from '../lib/utils';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

type TimeOfDay = 'Fajr' | 'Dhuha' | 'Maghrib' | 'Isha';

export default function NafasTimeline({ lang }: { lang: Language }) {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('Dhuha');

  useEffect(() => {
    const updateTime = () => {
      const hour = new Date().getHours();
      if (hour >= 4 && hour < 8) setTimeOfDay('Fajr');
      else if (hour >= 8 && hour < 18) setTimeOfDay('Dhuha');
      else if (hour >= 18 && hour < 20) setTimeOfDay('Maghrib');
      else setTimeOfDay('Isha');
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    Fajr: {
      title: lang === 'ar' ? 'نفس الفجر' : 'Breath of Dawn',
      icon: Sunrise,
      theme: 'theme-fajr',
      calligraphy: 'font-diwani',
      adhkar: lang === 'ar' ? 'أذكار الصباح: "أصبحنا وأصبح الملك لله"' : 'Morning Adhkar: "We have reached the morning..."',
      poem: lang === 'ar' ? 'يا فجرُ أشرق في القلوبِ بنورهِ' : 'O Dawn, shine in the hearts with its light'
    },
    Dhuha: {
      title: lang === 'ar' ? 'نفس الضحى' : 'Breath of Dhuha',
      icon: Sun,
      theme: 'theme-dhuha',
      calligraphy: 'font-sans',
      adhkar: lang === 'ar' ? 'وقت العمل والإنجاز' : 'Time for work and achievement',
      poem: lang === 'ar' ? 'في السعيِ رزقٌ وفي الحركةِ بركة' : 'In striving is sustenance and in movement is blessing'
    },
    Maghrib: {
      title: lang === 'ar' ? 'نفس المغرب' : 'Breath of Maghrib',
      icon: Sunset,
      theme: 'theme-night',
      calligraphy: 'font-kufic',
      adhkar: lang === 'ar' ? 'أذكار المساء: "أمسينا وأمسى الملك لله"' : 'Evening Adhkar: "We have reached the evening..."',
      poem: lang === 'ar' ? 'هدوءُ الليلِ يجمعُ شتاتَ الروح' : 'The silence of the night gathers the soul\'s fragments'
    },
    Isha: {
      title: lang === 'ar' ? 'نفس العشاء' : 'Breath of Isha',
      icon: Moon,
      theme: 'theme-night',
      calligraphy: 'font-kufic',
      adhkar: lang === 'ar' ? 'وقت التأمل والمناجاة' : 'Time for reflection and communion',
      poem: lang === 'ar' ? 'في سكونِ الليلِ أسرارُ المحبين' : 'In the stillness of the night are the secrets of lovers'
    }
  };

  const current = content[timeOfDay];

  return (
    <div className="px-4 py-8">
      <motion.div 
        key={timeOfDay}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "p-6 rounded-[2.5rem] border border-gold-500/10 shadow-2xl transition-all duration-1000",
          current.theme
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 rounded-2xl text-gold-500">
              <current.icon size={24} />
            </div>
            <h2 className="text-xl font-kufic">{current.title}</h2>
          </div>
          <span className="text-[10px] font-mono opacity-50">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>

        <div className="space-y-6">
          <div className="p-5 bg-white/5 rounded-2xl border border-gold-500/10 backdrop-blur-sm">
            <h3 className="stone-and-silk-header text-[10px] opacity-60">{lang === 'ar' ? 'الذكر' : 'Remembrance'}</h3>
            <p className="text-lg font-serif leading-relaxed">{current.adhkar}</p>
          </div>
          
          <div className="p-5 bg-white/5 rounded-2xl border border-gold-500/10 backdrop-blur-sm">
            <h3 className="stone-and-silk-header text-[10px] opacity-60">{lang === 'ar' ? 'القصيدة' : 'Poem'}</h3>
            <p className={cn("text-xl leading-relaxed", current.calligraphy)}>{current.poem}</p>
          </div>
          
          <div className="flex flex-col justify-center items-center text-center p-6 bg-gold-500/5 rounded-[2rem] border border-gold-500/10">
            <p className="text-[10px] opacity-50 mb-4 uppercase tracking-widest">
              {lang === 'ar' ? 'الحالة الكونية الحالية' : 'Current Cosmic State'}
            </p>
            <div className="byzantine-halo p-6">
              <div className="text-2xl font-kufic text-gold-500">{timeOfDay}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
