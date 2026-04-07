import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, SpiritualDNA } from '../types';
import { Send, Loader2, Zap, User, Bot, Trash2, Flame } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { cn } from '../lib/utils';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export default function ChatQareen({ lang, dna, setDna }: { lang: Language, dna: SpiritualDNA, setDna: (d: SpiritualDNA) => void }) {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('qareen_messages');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('qareen_messages', JSON.stringify(messages));
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
      const response = await geminiService.getZahraResponse(`[SHADOW WORK MODE - PROVOCATIVE, CHALLENGING, ALGERIAN DARIJA MIXED] ${input}`, dna);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      setDna({
        ...dna,
        shadowIntegration: Math.min(100, dna.shadowIntegration + 2),
        recentThemes: [...new Set([...dna.recentThemes, 'Shadow Work'])]
      });
    } catch (error) {
      console.error("Qareen Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm(lang === 'ar' ? 'هل أنت متأكد من مسح المحادثة؟' : 'Are you sure you want to clear the chat?')) {
      setMessages([]);
      localStorage.removeItem('qareen_messages');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] max-w-5xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-crimson-950/20 border border-crimson-900/30 flex items-center justify-center shadow-[0_0_30px_rgba(153,27,27,0.2)]">
            <Flame size={32} className="text-crimson-600" />
          </div>
          <div>
            <h1 className="text-3xl font-serif italic text-crimson-700">The Shadow Architect</h1>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-crimson-900/40">
              {lang === 'ar' ? 'مقام الظل والسيادة' : 'The Station of Shadow & Sovereignty'}
            </p>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-4 rounded-full bg-white/5 text-crimson-900/30 hover:text-crimson-600 hover:bg-crimson-900/10 transition-all border border-crimson-900/10"
        >
          <Trash2 size={20} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto mb-8 pr-4 space-y-10 no-scrollbar">
        <AnimatePresence initial={false}>
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-24 h-24 bg-crimson-900/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-crimson-900/10">
                <Zap size={40} className="text-crimson-900 opacity-20" />
              </div>
              <p className="text-crimson-900/60 font-serif italic text-xl tracking-wide">
                {lang === 'ar' ? 'واجهي ظلكِ يا سلمى... ما الذي تخشين الاعتراف به؟' : 'Face your shadow, Selma... what do you fear to admit?'}
              </p>
            </motion.div>
          )}
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-6",
                msg.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border shadow-2xl",
                msg.role === 'user' ? "bg-emerald-900 border-gold-500/20 text-gold-500" : "bg-blood-950 border-crimson-900/30 text-crimson-600"
              )}>
                {msg.role === 'user' ? <User size={20} /> : <Flame size={20} />}
              </div>
              <div className={cn(
                "luxury-card p-8 text-base leading-relaxed font-serif max-w-[80%]",
                msg.role === 'user' 
                  ? "bg-emerald-900/20 border-gold-500/10 text-stone-200" 
                  : "bg-blood-950/40 border-crimson-900/20 text-crimson-100/90"
              )}>
                <div className="markdown-body">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-blood-950 border border-crimson-900/30 flex items-center justify-center">
                <Loader2 size={20} className="text-crimson-600 animate-spin" />
              </div>
              <div className="luxury-card p-8 bg-blood-950/40 border border-crimson-900/20">
                <div className="flex gap-2">
                  <span className="w-2 h-2 bg-crimson-600/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-crimson-600/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-crimson-600/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-crimson-900/20 via-black to-crimson-900/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={lang === 'ar' ? 'تحدثي مع الظل...' : 'Speak with the Shadow...'}
          className="relative w-full bg-black border border-crimson-900/30 rounded-[3rem] px-10 py-8 text-stone-200 outline-none focus:border-crimson-600 transition-all font-serif text-xl shadow-2xl placeholder:text-crimson-900/20"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-5 bg-crimson-700 text-white rounded-full active:scale-90 disabled:opacity-50 disabled:scale-100 transition-all shadow-2xl hover:shadow-crimson-900/20"
        >
          <Send size={28} />
        </button>
      </div>
    </div>
  );
}
