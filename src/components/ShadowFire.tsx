import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { APHRODISIACS, SULTANA_SCRIPTS, LUST_RUNES } from '../constants';
import { Flame, Shield, Zap, Send, User, Bot, Loader2, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';
import { getChatResponse, SHADOW_FIRE_SYSTEM_PROMPT } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ShadowFire({ lang }: { lang: Language }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: lang === 'ar' 
        ? 'أهلاً بكِ في المقام الأحمر يا سلطانة. هنا، النار هي اللي تحكم. واش راهي تقولي نفسك اليوم؟'
        : 'Welcome to the Red Station, Sultana. Here, the fire rules. What is your soul telling you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'Rituals' | 'Alchemy' | 'Runes'>('Rituals');

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse('gemini-3-flash-preview', SHADOW_FIRE_SYSTEM_PROMPT, userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || '' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: lang === 'ar' ? 'النار راهي قوية بزاف، حاولي مرة أخرى.' : 'The fire is too strong, try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-4"
        >
          <div className="w-16 h-16 rounded-full bg-red-950 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-red-500/30">
            <Flame size={32} className="animate-pulse" />
          </div>
        </motion.div>
        <h1 className="text-3xl font-kufic text-red-900 mb-2">المقام الأحمر</h1>
        <p className="text-sm font-serif italic text-red-800 opacity-80">
          {lang === 'ar' ? 'طقوس النار والسيادة' : 'Rituals of Fire and Sovereignty'}
        </p>
      </header>

      <div className="space-y-8">
        {/* Knowledge Base Tabs */}
        <div className="space-y-6">
          <div className="flex gap-2 p-1 bg-red-100/50 rounded-2xl">
            {(['Rituals', 'Alchemy', 'Runes'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 py-2 rounded-xl text-[10px] font-bold transition-all",
                  activeTab === tab ? "bg-red-900 text-white shadow-lg" : "text-red-900 hover:bg-red-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'Rituals' && (
              <motion.div
                key="rituals"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {SULTANA_SCRIPTS.map((script, i) => (
                  <div key={i} className="bg-white p-5 rounded-3xl border border-red-500/10 shadow-sm">
                    <h3 className="text-red-900 font-bold text-sm mb-1 flex items-center gap-2">
                      <Zap size={14} className="text-red-500" />
                      {script.title}
                    </h3>
                    <p className="text-[10px] text-red-700 mb-3 italic">{script.context}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-serif bg-red-50 p-3 rounded-xl border-r-4 border-red-500 leading-relaxed">{script.scriptAr}</p>
                      <p className="text-[10px] text-red-800 opacity-60 px-1">{script.scriptEn}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'Alchemy' && (
              <motion.div
                key="alchemy"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 gap-3"
              >
                {APHRODISIACS.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-red-500/10 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                      {item.type === 'Scent' ? <Sparkles size={16} /> : <Flame size={16} />}
                    </div>
                    <div>
                      <h3 className="text-red-900 font-bold text-sm">{item.name}</h3>
                      <p className="text-[10px] text-red-700">{item.benefit}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'Runes' && (
              <motion.div
                key="runes"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 gap-3"
              >
                {LUST_RUNES.map((rune, i) => (
                  <div key={i} className="bg-red-950 text-white p-6 rounded-3xl shadow-xl border border-red-500/20 text-center">
                    <div className="text-4xl font-runic text-red-500 mb-2">{rune.symbol}</div>
                    <h3 className="text-sm font-kufic text-red-400 mb-1">{rune.name}</h3>
                    <p className="text-[10px] opacity-70 leading-tight">{rune.psychologicalState}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chat Interface */}
        <div className="flex flex-col h-[500px] bg-white rounded-[2.5rem] shadow-xl border border-red-500/10 overflow-hidden">
          <div className="p-4 bg-red-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-red-950">
                <Flame size={16} />
              </div>
              <div>
                <h2 className="font-kufic text-sm">{lang === 'ar' ? 'همس السلطانة' : 'Sultana\'s Whisper'}</h2>
                <p className="text-[9px] text-red-400">Sensual Mentor Active</p>
              </div>
            </div>
            <Shield size={16} className="text-red-500 opacity-50" />
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-red-50/20">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "flex gap-3 max-w-[90%]",
                  msg.role === 'user' ? "mr-auto flex-row-reverse" : "ml-auto"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md",
                  msg.role === 'user' ? "bg-red-100 text-red-900" : "bg-red-900 text-red-100"
                )}>
                  {msg.role === 'user' ? <User size={14} /> : <Flame size={14} />}
                </div>
                <div className={cn(
                  "p-4 rounded-2xl shadow-sm text-sm",
                  msg.role === 'user' 
                    ? "bg-red-100 text-red-950 rounded-tr-none" 
                    : "bg-white text-red-950 border border-red-500/10 rounded-tl-none"
                )}>
                  <div className="prose prose-sm max-w-none prose-red leading-relaxed">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex gap-3 ml-auto">
                <div className="w-8 h-8 rounded-full bg-red-900 flex items-center justify-center text-red-100">
                  <Loader2 size={14} className="animate-spin" />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-red-500/10">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-red-50">
            <div className="relative flex items-center bg-red-50 rounded-xl border border-red-100">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'ar' ? 'أطلقي العنان لرغباتك...' : 'Unleash your desires...'}
                className="w-full p-4 pr-12 rounded-xl outline-none bg-transparent text-xs text-red-950"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute left-2 p-2.5 bg-red-900 text-white rounded-lg active:scale-95 transition-transform disabled:opacity-50 shadow-md"
              >
                <Send size={16} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </div>
            <p className="text-[8px] text-center mt-3 text-red-400 uppercase tracking-widest font-mono">
              Safe • Sane • Consensual • Absolute Command
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
