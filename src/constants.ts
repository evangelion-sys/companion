import { Poem, Book, Movie, FamousSelma, Wird, Bouqala, Rune, OrthodoxTeaching, Aphrodisiac, SultanaScript } from './types';

export const BOUQALAS: Bouqala[] = [
  {
    id: '1',
    text: 'يا لالة يا مولات القلب الصافي، ربي يعطيك واش راكي تمنيتي ويجعل سعدك عالي ووافي.',
    interpretation: 'This Bouqala speaks of the purity of intention (Niyah) and the promise of fulfillment for those who keep their hearts clean.',
    blessing: 'May Allah grant you the peace of the righteous and the expansion of the soul.'
  },
  {
    id: '2',
    text: 'خرجت في نص الليل، لقيت النجوم تلالي، قلت يا ربي فرج همي ونحي لي واش راه في بالي.',
    interpretation: 'A reflection on seeking light in the darkness of the night, representing the transition from contraction (Kabdh) to expansion (Bast).',
    blessing: 'May your night be a source of revelation and your dawn a source of victory.'
  }
];

export const RUNES: Rune[] = [
  {
    symbol: 'ᚢ',
    name: 'Uruz',
    meaning: 'Strength, Speed, Untamed Power.',
    psychologicalState: 'Resilience and the raw energy needed for transition.'
  },
  {
    symbol: 'ᛉ',
    name: 'Algiz',
    meaning: 'Protection, Shield, Higher Self.',
    psychologicalState: 'Emotional safety and connection to the spiritual guardian.'
  }
];

export const ORTHODOX_TEACHINGS: OrthodoxTeaching[] = [
  {
    title: 'Hesychasm (Inner Silence)',
    content: 'The practice of stillness and the Prayer of the Heart, seeking the uncreated light of God.',
    source: 'The Philokalia'
  }
];

export const FAMOUS_SELMAS: FamousSelma[] = [
  {
    id: '1',
    name: 'Selma Lagerlöf',
    category: 'Literature',
    description: 'The first woman to win the Nobel Prize in Literature (1909).',
    achievement: 'The Woman of Firsts',
    imageUrl: 'https://picsum.photos/seed/lagerlof/400/600'
  },
  {
    id: '2',
    name: 'Selma Mouloudj',
    category: 'Science',
    description: 'Algerian biologist and activist known for her contributions to environmental conservation and social change.',
    achievement: 'Voice of the Earth',
    imageUrl: 'https://picsum.photos/seed/mouloudj/400/600'
  }
];

export const SELMA_POEMS = [
  "يا سلمى، يا من في اسمكِ سرُّ السلامِ ينجلي،\nأنتِ السكينةُ في القلوبِ، والروحُ فيكِ تنجلي.",
  "سلامٌ على سلمى، سلامٌ مخلدُ،\nباسمكِ يهدأُ الروعُ، والقلبُ يسعدُ."
];

export const DAILY_WIRDS: Wird[] = [
  {
    id: '1',
    title: 'مقام السلامة (Station of Safety)',
    practice: 'تكرار "يا سلام" 100 مرة مع استحضار نية حماية القلب من كل ضيق.',
    benefit: 'تحقيق السكينة الباطنة وحماية القلب من الأغيار.',
    spiritualContext: 'مفهوم السلامة في التصوف هو حماية القلب من الأغيار والتركيز على السكينة الباطنة.'
  }
];

export const POEMS: Poem[] = [
  {
    id: '1',
    title: 'قصيدة في العشق الإلهي',
    author: 'رابعة العدوية',
    era: 'Abbasid',
    theme: 'Sufi',
    content: `عرفت الهوى مذ عرفت هواك
وأغلقت قلبي عمن سواك
وكنت أناجيك يا من ترى
خفايا القلوب ولسنا نراك`,
    translation: `I have known love since I known Your love,
And I have closed my heart to all but You.
I was communing with You, O You Who see
The secrets of hearts, while we see You not.`,
    meter: 'Wafir',
    rhyme: 'Kaf'
  }
];

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'إحياء علوم الدين',
    author: 'الإمام الغزالي',
    category: 'Spirituality',
    summary: 'كتاب جامع في الأخلاق والعبادات والمعاملات من منظور روحي عميق.',
    coverUrl: 'https://picsum.photos/seed/ghazali/400/600'
  },
  {
    id: '2',
    title: 'قوة الآن',
    author: 'إيكهارت تول',
    category: 'Psychology',
    summary: 'دليل للتنوير الروحي والعيش في اللحظة الحاضرة.',
    coverUrl: 'https://picsum.photos/seed/now/400/600'
  }
];

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Papicha',
    director: 'Mounia Meddour',
    year: 2019,
    description: 'A story of resilience and strength of Algerian women during the 90s.',
    posterUrl: 'https://picsum.photos/seed/papicha/400/600'
  },
  {
    id: '2',
    title: 'The Breadwinner',
    director: 'Nora Twomey',
    year: 2017,
    description: 'A young girl in Afghanistan disguises herself as a boy to support her family.',
    posterUrl: 'https://picsum.photos/seed/bread/400/600'
  }
];

export const APHRODISIACS: Aphrodisiac[] = [
  { name: 'Oud (عود)', type: 'Scent', benefit: 'Deep grounding and primal arousal', origin: 'Arabian Peninsula' },
  { name: 'Musk (مسك)', type: 'Scent', benefit: 'Animalistic attraction and confidence', origin: 'Central Asia' },
  { name: 'Amber (عنبر)', type: 'Scent', benefit: 'Warmth and sensual depth', origin: 'North Africa' },
  { name: 'Dates & Honey', type: 'Food', benefit: 'Instant energy and blood circulation', origin: 'Algeria' },
  { name: 'Saffron (زعفران)', type: 'Food', benefit: 'Mood enhancement and libido boost', origin: 'Persia' }
];

export const SULTANA_SCRIPTS: SultanaScript[] = [
  {
    title: 'The Command of the Sultana',
    context: 'Asserting dominance and desire',
    scriptAr: 'أنا السلطانة هنا، وأمري هو اللي يمشي. وريني واش تقدر تدير باش ترضيني.',
    scriptEn: 'I am the Sultana here, and my word is law. Show me what you can do to please me.'
  },
  {
    title: 'The Fire of the Desert',
    context: 'Intense, high-friction intimacy',
    scriptAr: 'خلي النار تشعل بينا، ما ترحمنيش. نحب القوة تاعك تكسر الحواجز اللي في قلبي.',
    scriptEn: 'Let the fire burn between us, show no mercy. I want your strength to break the barriers in my heart.'
  }
];

export const LUST_RUNES: Rune[] = [
  { symbol: 'ᚢ', name: 'Uruz', meaning: 'Primal Strength, Lust, Vitality', psychologicalState: 'The untamed force of desire.' },
  { symbol: 'ᚦ', name: 'Thurisaz', meaning: 'The Thorn, Reactive Force, Chaos', psychologicalState: 'The sharp edge of passion and struggle.' }
];
