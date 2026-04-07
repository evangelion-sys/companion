import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Wind, Play, Pause, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BreathingTool({ lang }: { lang: Language }) {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Rest');
  const [timer, setTimer] = useState(0);

  const phases = {
    Inhale: { duration: 4, label: lang === 'ar' ? 'شهيق' : 'Inhale', color: 'bg-emerald-500' },
    Hold: { duration: 4, label: lang === 'ar' ? 'حبس' : 'Hold', color: 'bg-gold-500' },
    Exhale: { duration: 4, label: lang === 'ar' ? 'زفير' : 'Exhale', color: 'bg-emerald-700' },
    Rest: { duration: 4, label: lang === 'ar' ? 'راحة' : 'Rest', color: 'bg-emerald-900' },
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          const currentPhaseDuration = phases[phase].duration;
          if (prev >= currentPhaseDuration - 1) {
            // Transition to next phase
            if (phase === 'Inhale') setPhase('Hold');
            else if (phase === 'Hold') setPhase('Exhale');
            else if (phase === 'Exhale') setPhase('Rest');
            else setPhase('Inhale');
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, phase]);

  const toggleBreathing = () => {
    if (!isActive) {
      setPhase('Inhale');
      setTimer(0);
    }
    setIsActive(!isActive);
  };

  const resetBreathing = () => {
    setIsActive(false);
    setPhase('Rest');
    setTimer(0);
  };

  return (
    <div className="p-6 bg-emerald-950/50 rounded-[2.5rem] border border-gold-500/20 backdrop-blur-md shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gold-500/10 rounded-xl text-gold-500">
            <Wind size={20} />
          </div>
          <h3 className="text-lg font-kufic text-gold-500">{lang === 'ar' ? 'تمرين التنفس (نفس)' : 'Breathing Exercise (Nafas)'}</h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={toggleBreathing}
            className="p-2 rounded-full bg-gold-500 text-emerald-950 active:scale-90 transition-transform"
          >
            {isActive ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button 
            onClick={resetBreathing}
            className="p-2 rounded-full bg-emerald-900 text-gold-500 active:scale-90 transition-transform"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center py-10">
        {/* Animated Circle */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div
            animate={{
              scale: phase === 'Inhale' ? 1.5 : phase === 'Exhale' ? 1 : phase === 'Hold' ? 1.5 : 1,
              opacity: isActive ? 1 : 0.3,
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className={cn(
              "absolute inset-0 rounded-full blur-2xl opacity-20 transition-colors duration-1000",
              phases[phase].color
            )}
          />
          <motion.div
            animate={{
              scale: phase === 'Inhale' ? 1.4 : phase === 'Exhale' ? 1 : phase === 'Hold' ? 1.4 : 1,
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className={cn(
              "w-32 h-32 rounded-full border-2 border-gold-500/30 flex items-center justify-center relative z-10 transition-colors duration-1000",
              isActive ? "bg-emerald-900/40" : "bg-emerald-900/20"
            )}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <p className="text-gold-500 font-kufic text-xl mb-1">{phases[phase].label}</p>
                <p className="text-gold-500/50 font-mono text-xs">{isActive ? `${timer + 1}s` : '--'}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <p className="mt-10 text-xs text-center text-cream-50/60 font-serif italic max-w-[200px]">
          {lang === 'ar' 
            ? 'اتبع الإيقاع لتهدئة الروح وتصفية الذهن.' 
            : 'Follow the rhythm to calm the soul and clear the mind.'}
        </p>
      </div>
    </div>
  );
}
