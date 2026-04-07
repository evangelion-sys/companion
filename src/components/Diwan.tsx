import { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { POEMS } from '../constants';
import { Search, Copy, Check, Languages } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Diwan({ lang }: { lang: Language }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);

  const eras = ['All', 'Pre-Islamic', 'Umayyad', 'Abbasid', 'Andalusian', 'Modern'];

  const filteredPoems = POEMS.filter(p => {
    const matchesSearch = p.title.includes(searchTerm) || p.author.includes(searchTerm);
    const matchesEra = selectedEra === 'All' || p.era === selectedEra;
    return matchesSearch && matchesEra;
  });

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-kufic text-emerald-900 mb-2">
          {lang === 'ar' ? 'ديوان الأنيس' : 'The Companion Diwan'}
        </h1>
        <p className="text-xs text-emerald-700 font-serif italic opacity-80">
          {lang === 'ar' ? 'مختارات من عيون الشعر العربي عبر العصور' : 'Selected masterpieces of Arabic poetry through the ages'}
        </p>
      </header>

      <div className="flex flex-col gap-4 mb-10">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600" size={16} />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'ابحث عن قصيدة أو شاعر...' : 'Search for a poem or poet...'}
            className="w-full pr-10 pl-4 py-3 rounded-xl border border-gold-500/10 focus:border-gold-500 outline-none bg-white shadow-sm text-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {eras.map(era => (
            <button
              key={era}
              onClick={() => setSelectedEra(era)}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold whitespace-nowrap transition-all",
                selectedEra === era 
                  ? "bg-emerald-900 text-gold-500 shadow-md" 
                  : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
              )}
            >
              {era}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {filteredPoems.map((poem) => (
          <motion.article
            key={poem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-6 shadow-lg border border-gold-500/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1 h-full bg-gold-500"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-kufic text-emerald-900 mb-1">{poem.title}</h2>
                <p className="text-[10px] text-gold-600 font-medium">{poem.author} • {poem.era}</p>
              </div>
              <div className="flex gap-1">
                <button 
                  onClick={() => setShowTranslation(!showTranslation)}
                  className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-700 transition-colors"
                >
                  <Languages size={16} />
                </button>
                <button 
                  onClick={() => copyToClipboard(poem.content, poem.id)}
                  className="p-2 rounded-lg hover:bg-emerald-50 text-emerald-700 transition-colors"
                >
                  {copiedId === poem.id ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-emerald-950">
                  {poem.content}
                </pre>
              </div>
              
              {showTranslation && poem.translation && (
                <div className="text-left border-r-2 border-gold-500/20 pr-4">
                  <p className="text-emerald-700 font-sans text-xs leading-relaxed italic opacity-80">
                    {poem.translation}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-50 flex flex-wrap gap-2 text-[9px] text-emerald-600 font-bold uppercase tracking-wider">
              <span className="bg-emerald-50 px-2.5 py-1 rounded-lg">Meter: {poem.meter}</span>
              <span className="bg-emerald-50 px-2.5 py-1 rounded-lg">Rhyme: {poem.rhyme}</span>
              <span className="bg-emerald-50 px-2.5 py-1 rounded-lg">Theme: {poem.theme}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
