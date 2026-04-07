import { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Send, Heart, User, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getChatResponse, QAREEN_SYSTEM_PROMPT } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatQareen({ lang }: { lang: Language }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: lang === 'ar' 
        ? 'أنا قرينك الرقمي، مرآة لروحك ومساحة آمنة لمشاعرك. كيف تشعرين اليوم؟'
        : 'I am your Digital Qareen, a mirror to your soul and a safe space for your feelings. How are you feeling today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [peaceLevel, setPeaceLevel] = useState(50);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse('gemini-3-flash-preview', QAREEN_SYSTEM_PROMPT, `[Current Peace Level: ${peaceLevel}%] ${userMsg}`);
      setMessages(prev => [...prev, { role: 'assistant', content: response || '' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: lang === 'ar' ? 'أنا هنا معك، لكن يبدو أن هناك عطلاً بسيطاً. حاولي مجدداً.' : 'I am here with you, but there seems to be a small glitch. Try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-7.5rem)] bg-emerald-950/5">
      <header className="px-6 py-4 bg-emerald-950 text-gold-500 flex items-center justify-between sticky top-0 z-10 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-gold-500 border border-gold-500/20">
            <Heart size={20} />
          </div>
          <div>
            <h1 className="text-lg font-kufic leading-none">{lang === 'ar' ? 'القرين الرقمي' : 'Digital Qareen'}</h1>
            <p className="text-[10px] text-gold-400/70 mt-1 italic">
              {lang === 'ar' ? 'مساحة آمنة للنمو النفسي والروحي' : 'A safe space for growth'}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={peaceLevel} 
              onChange={(e) => setPeaceLevel(parseInt(e.target.value))}
              className="w-20 h-1.5 bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-gold-500"
            />
            <span className="text-[10px] font-mono text-gold-500">{peaceLevel}%</span>
          </div>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto px-4 py-6 space-y-4">
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
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm",
              msg.role === 'user' ? "bg-emerald-100 text-emerald-900" : "bg-emerald-900 text-gold-500"
            )}>
              {msg.role === 'user' ? <User size={14} /> : <Sparkles size={14} />}
            </div>
            <div className={cn(
              "p-4 rounded-2xl shadow-sm",
              msg.role === 'user' 
                ? "bg-emerald-50 text-emerald-950 rounded-tr-none border border-emerald-100" 
                : "bg-emerald-900 text-cream-50 rounded-tl-none shadow-lg"
            )}>
              <div className="prose prose-sm max-w-none prose-invert text-sm leading-relaxed">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex gap-3 ml-auto">
            <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-gold-500">
              <Loader2 size={14} className="animate-spin" />
            </div>
            <div className="p-4 rounded-2xl bg-emerald-900 text-cream-50">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-emerald-100">
        <div className="relative flex items-center bg-emerald-50 rounded-2xl border border-emerald-100">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'ar' ? 'بماذا تفكرين؟' : 'What are you thinking about?'}
            className="w-full p-4 pr-14 rounded-2xl outline-none bg-transparent text-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute left-2 p-3 bg-emerald-900 text-gold-500 rounded-xl active:scale-95 transition-transform disabled:opacity-50 shadow-md"
          >
            <Send size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
          </button>
        </div>
      </div>
    </div>
  );
}
