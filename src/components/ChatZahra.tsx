import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getChatResponse, ZAHRA_SYSTEM_PROMPT } from '../services/geminiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatZahra({ lang }: { lang: Language }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: lang === 'ar' 
        ? 'أهلاً بك يا لالة، أنا زهرة. واش راكي حابة تعرفي اليوم على بلادنا ولا كاش حاجة في خاطرك؟'
        : 'Welcome, I am Zahra. What would you like to know about our country or anything on your mind today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getChatResponse('gemini-3-flash-preview', ZAHRA_SYSTEM_PROMPT, userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || '' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: lang === 'ar' ? 'عذراً، حدث خطأ ما. حاولي مرة أخرى.' : 'Sorry, something went wrong. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-7.5rem)] bg-emerald-50/20">
      <header className="px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gold-500/10 flex items-center gap-4 sticky top-0 z-10">
        <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-emerald-950 shadow-lg">
          <Sparkles size={20} />
        </div>
        <div>
          <h1 className="text-lg font-kufic text-emerald-900 leading-none">زهرة (Zahra)</h1>
          <p className="text-[10px] text-emerald-600 mt-1">
            {lang === 'ar' ? 'رفيقتك الجزائرية الذكية' : 'Your smart Algerian companion'}
          </p>
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
              msg.role === 'user' ? "bg-emerald-900 text-cream-50" : "bg-gold-500 text-emerald-950"
            )}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div className={cn(
              "p-4 rounded-2xl shadow-sm",
              msg.role === 'user' 
                ? "bg-emerald-900 text-cream-50 rounded-tr-none" 
                : "bg-white text-emerald-950 border border-gold-500/10 rounded-tl-none"
            )}>
              <div className="prose prose-sm max-w-none prose-emerald text-sm leading-relaxed">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex gap-3 ml-auto">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-emerald-950">
              <Loader2 size={14} className="animate-spin" />
            </div>
            <div className="p-4 rounded-2xl bg-white border border-gold-500/10">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-gold-500/10">
        <div className="relative flex items-center bg-emerald-50 rounded-2xl border border-emerald-100">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'ar' ? 'اكتبي رسالتك هنا...' : 'Type your message here...'}
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
