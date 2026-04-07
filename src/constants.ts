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
  },
  {
    id: '3',
    text: 'يا طير يا طيار، روح لبلاد الغربة وجيب لي خبار، قله راهي تستنى فيك ليل ونهار.',
    interpretation: 'A metaphor for longing and the return of the beloved, symbolizing the soul\'s yearning for its origin.',
    blessing: 'May your patience be rewarded with the sweetest reunion.'
  },
  {
    id: '4',
    text: 'يا زينة البنات، يا ضاوية كما الشمعات، ربي يكتب لك السعد والبركات.',
    interpretation: 'A blessing for beauty and light, acknowledging the inner radiance that guides the path.',
    blessing: 'May your light never dim and your path be paved with grace.'
  },
  {
    id: '5',
    text: 'باسم الله بديت، وعلى النبي صليت، وبقالتنا اليوم نويت.',
    interpretation: 'The traditional opening of the Bouqala, setting the intention and seeking blessings.',
    blessing: 'May every beginning lead you to a divine conclusion.'
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
  },
  {
    symbol: 'ᚠ',
    name: 'Fehu',
    meaning: 'Wealth, Abundance, Success.',
    psychologicalState: 'The realization of potential and the flow of creative energy.'
  },
  {
    symbol: 'ᚨ',
    name: 'Ansuz',
    meaning: 'Communication, Wisdom, Inspiration.',
    psychologicalState: 'Clarity of thought and the reception of divine messages.'
  },
  {
    symbol: 'ᚱ',
    name: 'Raido',
    meaning: 'Journey, Rhythm, Evolution.',
    psychologicalState: 'The movement of the soul through the cycles of life.'
  }
];

export const ORTHODOX_TEACHINGS: OrthodoxTeaching[] = [
  {
    title: 'Hesychasm (Inner Silence)',
    content: 'The practice of stillness and the Prayer of the Heart, seeking the uncreated light of God.',
    source: 'The Philokalia'
  },
  {
    title: 'The Jesus Prayer',
    content: '"Lord Jesus Christ, Son of God, have mercy on me, a sinner." A continuous prayer for inner peace.',
    source: 'St. Gregory Palamas'
  },
  {
    title: 'Theosis (Divinization)',
    content: 'The process of becoming like God through grace and participation in His divine energies.',
    source: 'St. Athanasius'
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
  },
  {
    id: '3',
    name: 'Selma Baccar',
    category: 'Art',
    description: 'Tunisian film director and politician, a pioneer in Arab female filmmaking.',
    achievement: 'Visionary Director',
    imageUrl: 'https://picsum.photos/seed/baccar/400/600'
  },
  {
    id: '4',
    name: 'Selma Blair',
    category: 'Art',
    description: 'American actress known for her resilience and advocacy for multiple sclerosis awareness.',
    achievement: 'Icon of Resilience',
    imageUrl: 'https://picsum.photos/seed/blair/400/600'
  }
];

export const SELMA_POEMS = [
  "يا سلمى، يا من في اسمكِ سرُّ السلامِ ينجلي،\nأنتِ السكينةُ في القلوبِ، والروحُ فيكِ تنجلي.",
  "سلامٌ على سلمى، سلامٌ مخلدُ،\nباسمكِ يهدأُ الروعُ، والقلبُ يسعدُ.",
  "سلمى هي الفجرُ الضحوكُ بليلنا،\nوهي الأمانُ إذا الزمانُ توعدُ.",
  "في عينِ سلمى بحرُ نورٍ هادئٍ،\nيهدي الغريبَ إلى الطريقِ الأرشدِ."
];

export const DAILY_WIRDS: Wird[] = [
  {
    id: '1',
    title: 'مقام السلامة (Station of Safety)',
    practice: 'تكرار "يا سلام" 100 مرة مع استحضار نية حماية القلب من كل ضيق.',
    benefit: 'تحقيق السكينة الباطنة وحماية القلب من الأغيار.',
    spiritualContext: 'مفهوم السلامة في التصوف هو حماية القلب من الأغيار والتركيز على السكينة الباطنة.'
  },
  {
    id: '2',
    title: 'مقام النور (Station of Light)',
    practice: 'تكرار "يا نور" 100 مرة مع تخيل النور يملأ الصدر.',
    benefit: 'جلاء البصيرة وتبديد ظلمات النفس.',
    spiritualContext: 'النور هو كشف الحجاب عن الحقائق الإلهية.'
  },
  {
    id: '3',
    title: 'مقام القوة (Station of Strength)',
    practice: 'تكرار "يا قوي" 100 مرة مع استحضار القوة الإلهية في مواجهة الصعاب.',
    benefit: 'تعزيز العزيمة والصلابة النفسية.',
    spiritualContext: 'القوة الحقيقية هي الاستمداد من القوي العزيز.'
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
  },
  {
    id: '2',
    title: 'بانت سعاد',
    author: 'كعب بن زهير',
    era: 'Pre-Islamic',
    theme: 'Sufi',
    content: `بانت سعاد فقلبي اليوم متبول
متيم إثرها لم يفد مكبول
وما سعاد غداة البين إذ رحلوا
إلا أغن غضيض الطرف مكحول`,
    translation: `Su'ad has departed, and my heart today is sick,
Enslaved in her wake, unransomed and shackled.
And Su'ad, on the morning of parting when they left,
Was but a gazelle with a soft voice and kohl-lined eyes.`,
    meter: 'Basit',
    rhyme: 'Lam'
  },
  {
    id: '3',
    title: 'أراك عصي الدمع',
    author: 'أبو فراس الحمداني',
    era: 'Abbasid',
    theme: 'Wisdom',
    content: `أراك عصي الدمع شيمتك الصبر
أما للهوى نهي عليك ولا أمر؟
بلى أنا مشتاق وعندي لوعة
ولكن مثلي لا يذاع له سر`,
    translation: `I see you resistant to tears, your nature is patience;
Does love have no command or prohibition over you?
Yes, I am longing and I have a burning passion,
But one like me does not broadcast his secrets.`,
    meter: 'Tawil',
    rhyme: 'Ra'
  },
  {
    id: '4',
    title: 'جادك الغيث',
    author: 'لسان الدين بن الخطيب',
    era: 'Andalusian',
    theme: 'Ghazal',
    content: `جادك الغيث إذا الغيث همى
يا زمان الوصل بالأندلس
لم يكن وصلك إلا حلما
في الكرى أو خلسة المختلس`,
    translation: `May the rain grant you its bounty when it pours,
O time of union in Andalusia.
Your union was but a dream
In sleep, or a thief's stealthy moment.`,
    meter: 'Muwashah',
    rhyme: 'Sin'
  },
  {
    id: '5',
    title: 'أنا وليلى',
    author: 'حسن المرواني',
    era: 'Modern',
    theme: 'Ghazal',
    content: `ماتت بمحراب عينيك ابتهالاتي
واستسلمت لرياح اليأس راياتي
جفت على بابك الموؤود أخيلتي
ليلى وما أثمرت شيئا نداءاتي`,
    translation: `My supplications died in the sanctuary of your eyes,
And my banners surrendered to the winds of despair.
My imaginations dried up at your buried door,
Layla, and my calls bore no fruit.`,
    meter: 'Kamil',
    rhyme: 'Ta'
  },
  {
    id: '6',
    title: 'زدني بفرط الحب',
    author: 'ابن الفارض',
    era: 'Abbasid',
    theme: 'Sufi',
    content: `زدني بفرط الحب فيك تحيرا
وارحم حشى بلظى هواك تسعرا
وإذا سألتك أن أراك حقيقة
فاسمح ولا تجعل جوابي لن ترى`,
    translation: `Increase my bewilderment in You through excessive love,
And have mercy on a heart burning with the fire of Your passion.
And if I ask You to see You in reality,
Be generous and do not make my answer "You shall not see."`,
    meter: 'Tawil',
    rhyme: 'Ra'
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
  },
  {
    id: '3',
    title: 'الفتوحات المكية',
    author: 'ابن عربي',
    category: 'Spirituality',
    summary: 'من أهم كتب التصوف الإسلامي، يتناول أسرار الشريعة والحقيقة.',
    coverUrl: 'https://picsum.photos/seed/arabi/400/600'
  },
  {
    id: '4',
    title: 'الخيميائي',
    author: 'باولو كويلو',
    category: 'Philosophy',
    summary: 'رواية رمزية عن اكتشاف الذات وتحقيق الأحلام.',
    coverUrl: 'https://picsum.photos/seed/alchemist/400/600'
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
  },
  {
    id: '3',
    title: 'Samsara',
    director: 'Ron Fricke',
    year: 2011,
    description: 'A non-narrative documentary exploring the wonders of the world and the human spirit.',
    posterUrl: 'https://picsum.photos/seed/samsara/400/600'
  },
  {
    id: '4',
    title: 'The Message',
    director: 'Moustapha Akkad',
    year: 1976,
    description: 'An epic historical drama about the life and times of the Prophet Muhammad.',
    posterUrl: 'https://picsum.photos/seed/message/400/600'
  }
];

export const APHRODISIACS: Aphrodisiac[] = [
  { name: 'Oud (عود)', type: 'Scent', benefit: 'Deep grounding and primal arousal', origin: 'Arabian Peninsula' },
  { name: 'Musk (مسك)', type: 'Scent', benefit: 'Animalistic attraction and confidence', origin: 'Central Asia' },
  { name: 'Amber (عنبر)', type: 'Scent', benefit: 'Warmth and sensual depth', origin: 'North Africa' },
  { name: 'Dates & Honey', type: 'Food', benefit: 'Instant energy and blood circulation', origin: 'Algeria' },
  { name: 'Saffron (زعفران)', type: 'Food', benefit: 'Mood enhancement and libido boost', origin: 'Persia' },
  { name: 'Dark Chocolate', type: 'Food', benefit: 'Dopamine release and pleasure enhancement', origin: 'Global' },
  { name: 'Rose Water', type: 'Scent', benefit: 'Heart opening and feminine grace', origin: 'Middle East' }
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
  },
  {
    title: 'The Silent Submission',
    context: 'Psychological power play',
    scriptAr: 'اسكت واسمع دقات قلبي. اليوم أنا اللي نتحكم في كل نفس تتنفسه.',
    scriptEn: 'Be silent and listen to my heartbeat. Today, I control every breath you take.'
  }
];

export const LUST_RUNES: Rune[] = [
  { symbol: 'ᚢ', name: 'Uruz', meaning: 'Primal Strength, Lust, Vitality', psychologicalState: 'The untamed force of desire.' },
  { symbol: 'ᚦ', name: 'Thurisaz', meaning: 'The Thorn, Reactive Force, Chaos', psychologicalState: 'The sharp edge of passion and struggle.' },
  { symbol: 'ᚲ', name: 'Kenaz', meaning: 'The Torch, Knowledge, Passion', psychologicalState: 'The illuminating fire of sexual awakening.' }
];
