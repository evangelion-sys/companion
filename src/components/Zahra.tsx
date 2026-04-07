import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { Send, Loader2, Sparkles, User, Bot, Trash2, Volume2 } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export default function Zahra({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('zahra_messages');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('zahra_messages', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.getZahraResponse(input, dna);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Update DNA based on interaction
      setDna({
        ...dna,
        mysticismLevel: Math.min(100, dna.mysticismLevel + 1),
        recentThemes: [...new Set([...dna.recentThemes, 'Dialogue with Zahra'])]
      });
    } catch (error) {
      console.error("Zahra Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm(lang === 'ar' ? 'هل أنت متأكد من مسح المحادثة؟' : 'Are you sure you want to clear the chat?')) {
      setMessages([]);
      localStorage.removeItem('zahra_messages');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] max-w-4xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/20">
            <Sparkles size={24} className="text-emerald-950" />
          </div>
          <div>
            <h1 className="text-2xl font-kufic text-gold-500">زهرة</h1>
            <p className="text-[10px] font-mono uppercase tracking-widest text-gold-500/50">
              {lang === 'ar' ? 'رفيقتك الروحية' : 'Your Spiritual Companion'}
            </p>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-3 rounded-2xl bg-white/5 text-gold-500/40 hover:text-crimson-500 hover:bg-crimson-500/10 transition-all"
        >
          <Trash2 size={20} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto mb-6 pr-2 space-y-6 no-scrollbar">
        <AnimatePresence initial={false}>
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 opacity-30"
            >
              <div className="w-20 h-20 bg-gold-500/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot size={32} className="text-gold-500" />
              </div>
              <p className="text-gold-500 font-serif italic text-lg">
                {lang === 'ar' ? 'أنا هنا لأجلكِ يا سلمى، ماذا يدور في قلبكِ اليوم؟' : 'I am here for you Selma, what is on your heart today?'}
              </p>
            </motion.div>
          )}
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex gap-4 max-w-[85%]",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg",
                msg.role === 'user' ? "bg-emerald-800 text-gold-500" : "bg-gold-500 text-emerald-950"
              )}>
                {msg.role === 'user' ? <User size={18} /> : <Sparkles size={18} />}
              </div>
              <div className={cn(
                "p-5 rounded-[2rem] text-sm leading-relaxed font-serif shadow-xl border",
                msg.role === 'user' 
                  ? "bg-emerald-900/40 border-gold-500/10 text-cream-50 rounded-tr-none" 
                  : "bg-white/5 border-gold-500/20 text-gold-200 rounded-tl-none"
              )}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 mr-auto"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center animate-pulse">
                <Loader2 size={18} className="text-emerald-950 animate-spin" />
              </div>
              <div className="p-5 rounded-[2rem] rounded-tl-none bg-white/5 border border-gold-500/20">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={lang === 'ar' ? 'تحدثي معي...' : 'Talk to me...'}
          className="w-full bg-white/5 border border-gold-500/20 rounded-[2.5rem] px-8 py-6 text-cream-50 outline-none focus:border-gold-500 transition-all font-serif text-lg shadow-2xl"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-gold-500 text-emerald-950 rounded-3xl active:scale-90 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg"
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
}
