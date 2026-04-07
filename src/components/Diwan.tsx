import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Poem, SpiritualDNA } from '../types';
import { POEMS } from '../constants';
import { Search, Copy, Check, Languages, Volume2, Loader2, Sparkles, Scroll, Palette, Music } from 'lucide-react';
import { cn } from '../lib/utils';
import { GoogleGenAI, Modality } from "@google/genai";
import { geminiService, getAI } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

export default function Diwan({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [analyzingId, setAnalyzingId] = useState<string | null>(null);
  const [poems, setPoems] = useState<Poem[]>(POEMS);

  const eras = ['All', 'Pre-Islamic', 'Umayyad', 'Abbasid', 'Andalusian', 'Modern', 'Melhun'];

  const filteredPoems = poems.filter(p => {
    const matchesSearch = p.title.includes(searchTerm) || p.author.includes(searchTerm);
    const matchesEra = selectedEra === 'All' || p.era === selectedEra;
    return matchesSearch && matchesEra;
  });

  const analyzePoem = async (poem: Poem) => {
    if (analyzingId) return;
    setAnalyzingId(poem.id);
    try {
      const analysis = await geminiService.getPoetryAnalysis(poem);
      setPoems(prev => prev.map(p => p.id === poem.id ? { ...p, ...analysis } : p));
      
      setDna({
        ...dna,
        mysticismLevel: Math.min(100, dna.mysticismLevel + 0.5),
        xp: dna.xp + 10,
        recentThemes: [...new Set([...dna.recentThemes, 'Poetry Analysis'])]
      });
    } catch (error) {
      console.error("Analysis Error:", error);
    } finally {
      setAnalyzingId(null);
    }
  };

  const copyAsMarkdown = (poem: Poem) => {
    const table = `
| Field | Content |
| :--- | :--- |
| **Title** | ${poem.title} |
| **Author** | ${poem.author} |
| **Era** | ${poem.era} |
| **Content** | ${poem.content.replace(/\n/g, '<br>')} |
| **Translation** | ${poem.translation || 'N/A'} |
| **Meter** | ${poem.meter || 'N/A'} |
| **Calligraphy** | ${poem.calligraphy || 'N/A'} |
    `.trim();
    navigator.clipboard.writeText(table);
    setCopiedId(poem.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const listenToPoem = async (poem: Poem) => {
    if (playingId) return;
    setPlayingId(poem.id);

    try {
      const ai = getAI();
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Read this Arabic poem with deep emotion and proper tajweed-like rhythm: ${poem.content}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const binary = atob(base64Audio);
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const pcmData = new Int16Array(bytes.buffer);
        const floatData = new Float32Array(pcmData.length);
        for (let i = 0; i < pcmData.length; i++) {
          floatData[i] = pcmData[i] / 32768.0;
        }
        
        const audioBuffer = audioContext.createBuffer(1, floatData.length, 24000);
        audioBuffer.getChannelData(0).set(floatData);
        
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.onended = () => setPlayingId(null);
        source.start();
      } else {
        setPlayingId(null);
      }
    } catch (error) {
      console.error("TTS Error:", error);
      setPlayingId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-kufic text-gold-500 mb-4 drop-shadow-lg">ديوان الأنيس</h1>
        <p className="text-sm text-gold-500/60 font-serif italic max-w-md mx-auto">
          {lang === 'ar' ? 'أرشيف غير محدود من الشعر والخط العربي عبر العصور' : 'Unlimited archive of poetry and calligraphy through the ages'}
        </p>
      </header>

      <div className="flex flex-col gap-6 mb-16">
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-500/50" size={20} />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'ابحث عن قصيدة، شاعر، أو موضوع...' : 'Search for a poem, poet, or theme...'}
            className="w-full bg-white/5 border border-gold-500/20 rounded-[2rem] pr-12 pl-6 py-5 text-cream-50 outline-none focus:border-gold-500 transition-all font-serif text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {eras.map(era => (
            <button
              key={era}
              onClick={() => setSelectedEra(era)}
              className={cn(
                "px-6 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                selectedEra === era 
                  ? "bg-gold-500 text-emerald-950 border-gold-500 shadow-lg shadow-gold-500/20" 
                  : "bg-emerald-900/50 text-gold-500/70 border-gold-500/10 hover:bg-emerald-900"
              )}
            >
              {era}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {filteredPoems.map((poem) => (
          <motion.article
            key={poem.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 shadow-2xl border border-gold-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-gold-500/20 group-hover:bg-gold-500 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-kufic text-gold-500 mb-2">{poem.title}</h2>
                <p className="text-xs text-gold-500/60 font-mono uppercase tracking-widest">{poem.author} • {poem.era}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => listenToPoem(poem)}
                  disabled={playingId !== null}
                  className={cn(
                    "p-3 rounded-2xl transition-all active:scale-90",
                    playingId === poem.id ? "bg-gold-500 text-emerald-950" : "bg-white/5 text-gold-500 hover:bg-white/10"
                  )}
                >
                  {playingId === poem.id ? <Loader2 size={20} className="animate-spin" /> : <Volume2 size={20} />}
                </button>
                <button 
                  onClick={() => analyzePoem(poem)}
                  disabled={analyzingId !== null}
                  className={cn(
                    "p-3 rounded-2xl transition-all active:scale-90",
                    analyzingId === poem.id ? "bg-gold-500 text-emerald-950" : "bg-white/5 text-gold-500 hover:bg-white/10"
                  )}
                >
                  {analyzingId === poem.id ? <Loader2 size={20} className="animate-spin" /> : <Sparkles size={20} />}
                </button>
                <button 
                  onClick={() => copyAsMarkdown(poem)}
                  className="p-3 rounded-2xl bg-white/5 text-gold-500 hover:bg-white/10 transition-all active:scale-90"
                >
                  {copiedId === poem.id ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-10">
              <div className="text-center relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                  <Scroll size={200} className="text-gold-500" />
                </div>
                <pre className="whitespace-pre-wrap font-serif text-2xl leading-relaxed text-cream-50 relative z-10">
                  {poem.content}
                </pre>
              </div>
              
              <AnimatePresence>
                {poem.analysis && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-8 pt-8 border-t border-gold-500/10"
                  >
                    <div className="p-6 bg-emerald-950/30 rounded-3xl border border-gold-500/10">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-4 flex items-center gap-2">
                        <Languages size={12} /> {lang === 'ar' ? 'الجسر اللغوي' : 'Linguistic Bridge'}
                      </h4>
                      <div className="markdown-body text-sm font-serif italic text-gold-100/80 leading-relaxed">
                        <ReactMarkdown>{poem.translation || ''}</ReactMarkdown>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-emerald-950/30 rounded-3xl border border-gold-500/10">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-4 flex items-center gap-2">
                        <Palette size={12} /> {lang === 'ar' ? 'التصور الخطي' : 'Calligraphic Rendering'}
                      </h4>
                      <div className="markdown-body text-sm font-serif text-gold-100/80 leading-relaxed">
                        <ReactMarkdown>{poem.calligraphy || ''}</ReactMarkdown>
                      </div>
                    </div>

                    <div className="p-6 bg-emerald-950/30 rounded-3xl border border-gold-500/10">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-4 flex items-center gap-2">
                        <Music size={12} /> {lang === 'ar' ? 'مقام القصيدة' : 'The Maqam Generator'}
                      </h4>
                      <div className="markdown-body text-sm font-serif text-gold-100/80 leading-relaxed">
                        <ReactMarkdown>{poem.meter || ''}</ReactMarkdown>
                      </div>
                    </div>

                    <div className="p-6 bg-emerald-950/30 rounded-3xl border border-gold-500/10">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50 mb-4 flex items-center gap-2">
                        <Scroll size={12} /> {lang === 'ar' ? 'الرنين النفسي' : 'Psychological Resonance'}
                      </h4>
                      <div className="markdown-body text-sm font-serif text-gold-100/80 leading-relaxed">
                        <ReactMarkdown>{poem.analysis || ''}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-500/5 flex flex-wrap gap-3 text-[10px] text-gold-500/60 font-bold uppercase tracking-widest">
              <span className="bg-white/5 px-4 py-2 rounded-xl">Rhyme: {poem.rhyme}</span>
              <span className="bg-white/5 px-4 py-2 rounded-xl">Theme: {poem.theme}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
