import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { BookOpen, Heart, Shield, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

type School = 'Maliki' | 'Shafi\'i' | 'Hanafi';

export default function Fiqh({ lang }: { lang: Language }) {
  const [selectedSchool, setSelectedSchool] = useState<School>('Maliki');

  const sections = [
    {
      title: lang === 'ar' ? 'فقه العبادات' : 'Fiqh of Worship',
      icon: Shield,
      content: {
        'Maliki': lang === 'ar' 
          ? 'التركيز على عمل أهل المدينة واليسر في العبادات، مع استحضار النية القلبية في كل حركة.'
          : 'Focusing on the practice of the people of Medina and ease in worship, with heart intention in every movement.',
        'Shafi\'i': lang === 'ar'
          ? 'الدقة في شروط العبادة وأركانها، مع التركيز على الإخلاص والخشوع كروح للصلاة.'
          : 'Precision in the conditions and pillars of worship, focusing on sincerity and humility as the soul of prayer.',
        'Hanafi': lang === 'ar'
          ? 'التوسع في الرخص الفقهية لتسهيل العبادة، مع التأكيد على المعنى الباطن للذكر.'
          : 'Expansion in jurisprudential licenses to facilitate worship, emphasizing the inner meaning of remembrance.'
      },
      insight: lang === 'ar'
        ? '«الصلاة معراج المؤمن، فاجعليها لحظة لقاء حقيقي»'
        : '«Prayer is the believer\'s ascension, so make it a moment of true meeting»'
    },
    {
      title: lang === 'ar' ? 'فقه الأسرة' : 'Family Fiqh',
      icon: Heart,
      content: {
        'Maliki': lang === 'ar'
          ? 'بناء الأسرة على المودة والرحمة، مع مراعاة العرف الصالح في المعاملات الزوجية.'
          : 'Building the family on affection and mercy, taking into account good custom in marital dealings.',
        'Shafi\'i': lang === 'ar'
          ? 'تحديد الحقوق والواجبات بدقة لضمان العدل، مع تغليب جانب الإحسان في الخلافات.'
          : 'Defining rights and duties precisely to ensure justice, prioritizing benevolence in disputes.',
        'Hanafi': lang === 'ar'
          ? 'التركيز على استقرار البيت المسلم وتيسير سبل المودة بين الزوجين.'
          : 'Focusing on the stability of the Muslim home and facilitating paths of affection between spouses.'
      },
      insight: lang === 'ar'
        ? '«البيت جنة الأرض إذا سكنته السكينة»'
        : '«The home is the paradise of earth if tranquility dwells in it»'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-kufic text-emerald-900 mb-4">الفقه الروحي للمرأة</h1>
        <p className="text-sm font-serif italic text-emerald-700 max-w-3xl mx-auto mb-6 opacity-80 leading-relaxed">
          {lang === 'ar'
            ? 'رؤية تجمع بين دقة الأحكام الفقهية وعمق المعاني الروحية، مستمدة من تراثنا الصوفي العريق.'
            : 'A vision that combines the precision of jurisprudential rulings with the depth of spiritual meanings, derived from our ancient Sufi heritage.'}
        </p>
        
        <div className="flex justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {(['Maliki', 'Shafi\'i', 'Hanafi'] as School[]).map(school => (
            <button
              key={school}
              onClick={() => setSelectedSchool(school)}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold transition-all whitespace-nowrap",
                selectedSchool === school 
                  ? "bg-emerald-900 text-gold-500 shadow-md" 
                  : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
              )}
            >
              {school === 'Maliki' ? (lang === 'ar' ? 'المالكي' : 'Maliki') :
               school === 'Shafi\'i' ? (lang === 'ar' ? 'الشافعي' : 'Shafi\'i') :
               (lang === 'ar' ? 'الحنفي' : 'Hanafi')}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-6 shadow-lg border border-gold-500/10 flex flex-col gap-6 items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-900 flex items-center justify-center text-gold-500 flex-shrink-0">
              <section.icon size={28} />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-kufic text-emerald-900 mb-3">{section.title}</h2>
              <p className="text-sm text-emerald-800 leading-relaxed mb-4">
                {section.content[selectedSchool]}
              </p>
              <div className="bg-cream-50 p-4 rounded-xl border-r-4 border-gold-500 italic font-serif text-base text-emerald-900 leading-relaxed">
                {section.insight}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-serene-gradient rounded-[3rem] text-cream-50 text-center shadow-xl">
        <h3 className="text-xl font-kufic text-gold-500 mb-6">المصادر الروحية</h3>
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-emerald-900/40 p-5 rounded-2xl border border-gold-500/10">
            <h4 className="text-gold-500 font-bold text-sm mb-1">الإمام الغزالي</h4>
            <p className="text-[10px] opacity-70 leading-relaxed">إحياء علوم الدين - التركيز على تزكية النفس وإصلاح القلوب.</p>
          </div>
          <div className="bg-emerald-900/40 p-5 rounded-2xl border border-gold-500/10">
            <h4 className="text-gold-500 font-bold text-sm mb-1">الشيخ الأكبر ابن عربي</h4>
            <p className="text-[10px] opacity-70 leading-relaxed">الفتوحات المكية - استجلاء الأسرار الإلهية في العبادات.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
