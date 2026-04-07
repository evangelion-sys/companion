import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, HeartState } from '../types';
import { BOOKS, MOVIES, FAMOUS_SELMAS } from '../constants';
import { Book, Film, Star, Heart, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LibrarySection({ lang }: { lang: Language }) {
  const [filter, setFilter] = useState<HeartState>('Normal');

  const emotionalFilters: { state: HeartState, label: string, icon: any }[] = [
    { state: 'Normal', label: lang === 'ar' ? 'الكل' : 'All', icon: Sparkles },
    { state: 'Fragile', label: lang === 'ar' ? 'هشاشة' : 'Fragile', icon: Heart },
    { state: 'Restless', label: lang === 'ar' ? 'قلق' : 'Restless', icon: Star },
    { state: 'Kabdh', label: lang === 'ar' ? 'قبض' : 'Contraction', icon: Book },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-kufic text-emerald-900 mb-2">
          {lang === 'ar' ? 'كيمياء المكتبة والسينما' : 'Alchemy of Library & Cinema'}
        </h1>
        <p className="text-xs text-emerald-700 font-serif italic mb-6 opacity-80">
          {lang === 'ar' ? 'مختارات ملهمة لنمو الفكر والروح' : 'Inspiring selections for the growth of mind and soul'}
        </p>

        <div className="flex justify-center flex-wrap gap-2">
          {emotionalFilters.map((f) => (
            <button
              key={f.state}
              onClick={() => setFilter(f.state)}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold transition-all flex items-center gap-1.5",
                filter === f.state ? "bg-emerald-900 text-gold-500 shadow-md" : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
              )}
            >
              <f.icon size={14} />
              {f.label}
            </button>
          ))}
        </div>
      </header>

      {/* Famous Selmas Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 border-b border-gold-500/10 pb-3">
          <Star className="text-gold-500" size={24} />
          <h2 className="text-xl font-kufic text-emerald-900">
            {lang === 'ar' ? 'مقام الإلهام' : 'Hall of Inspiration'}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {FAMOUS_SELMAS.map((selma) => (
            <motion.div
              key={selma.id}
              className="flex bg-white rounded-2xl overflow-hidden shadow-sm border border-gold-500/10"
            >
              <img src={selma.imageUrl} alt={selma.name} className="w-24 object-cover" referrerPolicy="no-referrer" />
              <div className="p-4 flex flex-col justify-center">
                <span className="text-[8px] font-bold text-gold-600 uppercase tracking-wider">{selma.achievement}</span>
                <h3 className="text-sm font-bold text-emerald-900 mt-0.5 mb-1">{selma.name}</h3>
                <p className="text-[10px] text-emerald-700 leading-tight line-clamp-3">{selma.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6 border-b border-gold-500/10 pb-3">
          <Book className="text-gold-500" size={24} />
          <h2 className="text-xl font-kufic text-emerald-900">
            {lang === 'ar' ? 'كتب غيرت مجرى الحياة' : 'Books That Changed Lives'}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {BOOKS.map((book) => (
            <motion.div
              key={book.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold-500/10"
            >
              <img src={book.coverUrl} alt={book.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-5">
                <span className="text-[8px] font-bold text-gold-600 uppercase tracking-wider">{book.category}</span>
                <h3 className="text-base font-bold text-emerald-900 mt-1 mb-2">{book.title}</h3>
                <p className="text-[11px] text-emerald-700 mb-3 line-clamp-3 leading-relaxed">{book.summary}</p>
                <p className="text-[10px] text-emerald-500 italic">— {book.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Movies Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 border-b border-gold-500/10 pb-3">
          <Film className="text-gold-500" size={24} />
          <h2 className="text-xl font-kufic text-emerald-900">
            {lang === 'ar' ? 'العلاج بالسينما' : 'Cinematic Therapy'}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {MOVIES.map((movie) => (
            <motion.div
              key={movie.id}
              className="flex flex-col bg-emerald-950 rounded-[2rem] overflow-hidden shadow-xl text-cream-50"
            >
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-56 object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <Star className="text-gold-500 fill-gold-500" size={12} />
                  <span className="text-gold-500 font-bold text-[10px]">{movie.year}</span>
                </div>
                <h3 className="text-lg font-kufic mb-3">{movie.title}</h3>
                <p className="text-[11px] opacity-70 mb-4 leading-relaxed line-clamp-4">{movie.description}</p>
                <p className="text-[9px] text-gold-500/60">Directed by {movie.director}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
