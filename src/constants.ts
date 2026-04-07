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
  },
  { symbol: 'ᚲ', name: 'Kenaz', meaning: 'Torch, Knowledge, Passion.', psychologicalState: 'Illumination of the mind and creative awakening.', phonetics: 'K', hiddenHistory: 'The controlled fire of the artisan and the seeker.', manifestationRitual: 'Light a candle and focus on a specific creative goal.' },
  { symbol: 'ᚷ', name: 'Gebo', meaning: 'Gift, Partnership, Exchange.', psychologicalState: 'Balance in relationships and the flow of giving and receiving.', phonetics: 'G', hiddenHistory: 'The sacred pact between humans and the divine.', manifestationRitual: 'Offer a small gift to nature or a loved one without expectation.' },
  { symbol: 'ᚹ', name: 'Wunjo', meaning: 'Joy, Harmony, Fellowship.', psychologicalState: 'Emotional well-being and alignment with one\'s true will.', phonetics: 'W', hiddenHistory: 'The realization of desires and the peace of the clan.', manifestationRitual: 'Meditate on a moment of pure happiness to attract more.' },
  { symbol: 'ᚺ', name: 'Hagalaz', meaning: 'Hail, Disruption, Radical Change.', psychologicalState: 'Embracing chaos as a catalyst for necessary transformation.', phonetics: 'H', hiddenHistory: 'The destructive forces of nature that clear the path for new growth.', manifestationRitual: 'Write down what you need to release and safely burn the paper.' },
  { symbol: 'ᚾ', name: 'Nauthiz', meaning: 'Need, Friction, Resistance.', psychologicalState: 'Finding strength through adversity and recognizing true necessities.', phonetics: 'N', hiddenHistory: 'The fire kindled by friction in times of desperate need.', manifestationRitual: 'Fasting or abstaining from a habit to build willpower.' },
  { symbol: 'ᛁ', name: 'Isa', meaning: 'Ice, Stillness, Concentration.', psychologicalState: 'Patience, turning inward, and psychological preservation.', phonetics: 'I', hiddenHistory: 'The primordial ice of Niflheim, holding potential energy.', manifestationRitual: 'Sit in complete stillness for 10 minutes, observing your breath.' },
  { symbol: 'ᛃ', name: 'Jera', meaning: 'Year, Harvest, Cycles.', psychologicalState: 'Patience for the natural unfolding of events and reaping rewards.', phonetics: 'J/Y', hiddenHistory: 'The agricultural cycle and the cosmic wheel of time.', manifestationRitual: 'Plant a seed and care for it as a symbol of your goals.' },
  { symbol: 'ᛇ', name: 'Eihwaz', meaning: 'Yew Tree, Axis Mundi, Transformation.', psychologicalState: 'Facing mortality and the transition between states of being.', phonetics: 'Ei', hiddenHistory: 'Yggdrasil, the world tree connecting the realms of the living and the dead.', manifestationRitual: 'Meditate on your connection to your ancestors and the earth.' },
  { symbol: 'ᛈ', name: 'Perthro', meaning: 'Dice Cup, Fate, Mystery.', psychologicalState: 'Embracing the unknown and the hidden aspects of the self.', phonetics: 'P', hiddenHistory: 'The Norns weaving the web of Wyrd (fate) and the element of chance.', manifestationRitual: 'Draw a single rune or tarot card to reveal hidden influences.' },
  { symbol: 'ᛊ', name: 'Sowilo', meaning: 'Sun, Success, Life Force.', psychologicalState: 'Clarity, confidence, and the realization of one\'s true purpose.', phonetics: 'S', hiddenHistory: 'The guiding light of the sun chariot and the victory of light over darkness.', manifestationRitual: 'Spend time in sunlight, visualizing it filling you with energy.' },
  { symbol: 'ᛏ', name: 'Tiwaz', meaning: 'Tyr, Justice, Sacrifice.', psychologicalState: 'Courage, honor, and the willingness to sacrifice for a greater good.', phonetics: 'T', hiddenHistory: 'The god Tyr sacrificing his hand to bind the wolf Fenrir.', manifestationRitual: 'Make a difficult but necessary decision with unwavering resolve.' },
  { symbol: 'ᛒ', name: 'Berkano', meaning: 'Birch, Birth, Renewal.', psychologicalState: 'Nurturing new beginnings and emotional healing.', phonetics: 'B', hiddenHistory: 'The Earth Mother and the regenerative power of nature.', manifestationRitual: 'Start a new project or habit that nurtures your well-being.' },
  { symbol: 'ᛖ', name: 'Ehwaz', meaning: 'Horse, Trust, Teamwork.', psychologicalState: 'Harmony between the conscious and subconscious minds.', phonetics: 'E', hiddenHistory: 'The sacred bond between rider and horse, representing mutual progress.', manifestationRitual: 'Collaborate with someone on a shared goal, focusing on trust.' },
  { symbol: 'ᛗ', name: 'Mannaz', meaning: 'Mankind, Self, Interdependence.', psychologicalState: 'Self-awareness and understanding one\'s place within the collective.', phonetics: 'M', hiddenHistory: 'The divine spark within humanity and the web of social connections.', manifestationRitual: 'Perform an act of service for your community.' },
  { symbol: 'ᛚ', name: 'Laguz', meaning: 'Water, Intuition, Flow.', psychologicalState: 'Connecting with the subconscious and emotional depths.', phonetics: 'L', hiddenHistory: 'The primordial waters of creation and the realm of dreams.', manifestationRitual: 'Take a ritual bath with sea salt to cleanse your energy.' },
  { symbol: 'ᛜ', name: 'Ingwaz', meaning: 'Ing, Seed, Gestation.', psychologicalState: 'Internal growth, storing energy, and preparing for a breakthrough.', phonetics: 'Ng', hiddenHistory: 'The god Ing and the potential energy contained within a seed.', manifestationRitual: 'Spend time alone in reflection to incubate a new idea.' },
  { symbol: 'ᛞ', name: 'Dagaz', meaning: 'Day, Dawn, Awakening.', psychologicalState: 'A sudden realization, clarity, and the integration of opposites.', phonetics: 'D', hiddenHistory: 'The mystical moment of twilight and the balance of light and dark.', manifestationRitual: 'Wake up before dawn and watch the sunrise, setting intentions.' },
  { symbol: 'ᛟ', name: 'Othala', meaning: 'Estate, Heritage, Ancestry.', psychologicalState: 'Connection to roots, spiritual inheritance, and a sense of belonging.', phonetics: 'O', hiddenHistory: 'The ancestral home and the spiritual power passed down through generations.', manifestationRitual: 'Create an altar honoring your ancestors or cultural heritage.' },
  { symbol: 'ᚪ', name: 'Ac', meaning: 'Oak, Strength, Endurance.', psychologicalState: 'Steadfastness and the ability to weather storms.', phonetics: 'A', hiddenHistory: 'The sacred oak tree, a symbol of enduring power and resilience.', manifestationRitual: 'Lean against a large tree and absorb its grounding energy.' },
  { symbol: 'ᚩ', name: 'Os', meaning: 'God, Mouth, Divine Speech.', psychologicalState: 'Inspiration and the power of articulate expression.', phonetics: 'O', hiddenHistory: 'The breath of life and the creative power of the spoken word.', manifestationRitual: 'Chant or sing to clear your throat chakra and express your truth.' },
  { symbol: 'ᚣ', name: 'Yr', meaning: 'Bow, Focus, Skill.', psychologicalState: 'Concentration and the precise application of effort.', phonetics: 'Y', hiddenHistory: 'The archer\'s skill and the tension required to launch an arrow.', manifestationRitual: 'Focus intensely on a single task without any distractions.' },
  { symbol: 'ᛡ', name: 'Ior', meaning: 'Serpent, Boundaries, Dual Nature.', psychologicalState: 'Navigating complex situations and understanding boundaries.', phonetics: 'Io', hiddenHistory: 'The Midgard Serpent, representing the boundaries of the known world.', manifestationRitual: 'Draw a physical or energetic boundary to protect your space.' },
  { symbol: 'ᛠ', name: 'Ear', meaning: 'Grave, Endings, Transformation.', psychologicalState: 'Acceptance of mortality and the necessity of endings for new beginnings.', phonetics: 'Ea', hiddenHistory: 'The inevitable return to the earth and the cycle of life and death.', manifestationRitual: 'Bury something that represents a habit you want to end.' },
  { symbol: 'ᛢ', name: 'Cweorth', meaning: 'Fire Twirl, Ritual Fire, Purification.', psychologicalState: 'Intense purification and the burning away of impurities.', phonetics: 'Cw', hiddenHistory: 'The sacred fire used in rituals and cremations.', manifestationRitual: 'Safely burn herbs like sage or cedar to cleanse your environment.' },
  { symbol: 'ᛣ', name: 'Calc', meaning: 'Chalice, Offering, Emptiness.', psychologicalState: 'Receptivity and the willingness to be filled with divine inspiration.', phonetics: 'K', hiddenHistory: 'The ritual cup used for offerings and the concept of the holy grail.', manifestationRitual: 'Pour a libation of water or wine onto the earth as an offering.' },
  { symbol: 'ᛥ', name: 'Stan', meaning: 'Stone, Foundation, Obstacle.', psychologicalState: 'Grounding, stability, and overcoming blockages.', phonetics: 'St', hiddenHistory: 'The standing stones used for ancient rituals and marking sacred sites.', manifestationRitual: 'Hold a stone while meditating to ground your energy.' },
  { symbol: 'ᛤ', name: 'Gar', meaning: 'Spear, Center, Mystery.', psychologicalState: 'Focusing on the core truth and the central axis of one\'s being.', phonetics: 'G', hiddenHistory: 'Odin\'s spear Gungnir, representing the world tree and the center of the cosmos.', manifestationRitual: 'Visualize a spear of light aligning your chakras from crown to root.' },
  { symbol: 'ᛯ', name: 'Wolfsangel', meaning: 'Wolf Hook, Defense, Capture.', psychologicalState: 'Protecting oneself from predatory forces and setting traps for negativity.', phonetics: 'W', hiddenHistory: 'An ancient symbol used to ward off wolves and evil spirits.', manifestationRitual: 'Visualize a hook catching and neutralizing negative thoughts.' },
  { symbol: 'ᛰ', name: 'Ziu', meaning: 'Sky God, Justice, Order.', psychologicalState: 'Aligning with cosmic law and seeking truth.', phonetics: 'Z', hiddenHistory: 'An older Germanic name for Tyr, representing the original sky father.', manifestationRitual: 'Look up at the sky and ask for guidance in a matter of justice.' },
  { symbol: 'ᛱ', name: 'Erda', meaning: 'Earth Mother, Nurturing, Grounding.', psychologicalState: 'Connecting with the physical body and the natural world.', phonetics: 'E', hiddenHistory: 'The personification of the earth and the source of all life.', manifestationRitual: 'Walk barefoot on the earth to connect with its grounding energy.' },
  { symbol: 'ᛲ', name: 'Ulf', meaning: 'Wolf, Wildness, Instinct.', psychologicalState: 'Embracing one\'s primal nature and intuition.', phonetics: 'U', hiddenHistory: 'The wolf as a symbol of both destruction and fierce loyalty.', manifestationRitual: 'Spend time in a wild, untamed natural environment.' },
  { symbol: 'ᛳ', name: 'Sol', meaning: 'Sun, Energy, Radiance.', psychologicalState: 'Expressing oneself fully and shining one\'s light.', phonetics: 'S', hiddenHistory: 'A variant of Sowilo, emphasizing the life-giving power of the sun.', manifestationRitual: 'Create a piece of art that expresses your inner radiance.' },
  { symbol: 'ᛴ', name: 'Tyr', meaning: 'Warrior, Courage, Action.', psychologicalState: 'Taking decisive action and fighting for what is right.', phonetics: 'T', hiddenHistory: 'A variant of Tiwaz, focusing on the martial aspect of the god.', manifestationRitual: 'Engage in a physical activity that challenges your limits.' },
  { symbol: 'ᛵ', name: 'Bjarkan', meaning: 'Birch Twig, Healing, Growth.', psychologicalState: 'Facilitating healing and nurturing new ideas.', phonetics: 'B', hiddenHistory: 'A variant of Berkano, emphasizing the medicinal properties of the birch.', manifestationRitual: 'Drink a healing herbal tea while focusing on recovery.' },
  { symbol: 'ᛶ', name: 'Madr', meaning: 'Human, Society, Connection.', psychologicalState: 'Understanding social dynamics and one\'s role in the community.', phonetics: 'M', hiddenHistory: 'A variant of Mannaz, focusing on the social aspect of humanity.', manifestationRitual: 'Engage in a meaningful conversation with a stranger.' },
  { symbol: 'ᛷ', name: 'Logr', meaning: 'Water, Emotion, Cleansing.', psychologicalState: 'Allowing emotions to flow and releasing stagnant energy.', phonetics: 'L', hiddenHistory: 'A variant of Laguz, emphasizing the purifying nature of water.', manifestationRitual: 'Cry intentionally to release pent-up emotions.' },
  { symbol: 'ᛸ', name: 'Yr (Younger)', meaning: 'Yew, Death, Transition.', psychologicalState: 'Facing the end of a cycle and preparing for rebirth.', phonetics: 'Y', hiddenHistory: 'A Younger Futhark rune associated with the yew tree and mortality.', manifestationRitual: 'Write a letter to your past self, acknowledging how you have changed.' },
  { symbol: '᛹', name: 'Kaun', meaning: 'Ulcer, Disease, Transformation through Pain.', psychologicalState: 'Learning from suffering and healing deep wounds.', phonetics: 'K', hiddenHistory: 'A Younger Futhark rune representing the painful process of healing.', manifestationRitual: 'Acknowledge a painful memory and actively work to reframe it.' },
  { symbol: '᛺', name: 'Hagall', meaning: 'Hail, Destruction, Clearing.', psychologicalState: 'Allowing old structures to collapse to make way for the new.', phonetics: 'H', hiddenHistory: 'A Younger Futhark variant of Hagalaz, focusing on sudden change.', manifestationRitual: 'Declutter a space in your home to symbolize clearing mental clutter.' },
  { symbol: '᛻', name: 'Naudr', meaning: 'Need, Constraint, Endurance.', psychologicalState: 'Finding resilience in difficult circumstances.', phonetics: 'N', hiddenHistory: 'A Younger Futhark variant of Nauthiz, emphasizing the necessity of hardship.', manifestationRitual: 'Practice gratitude for the challenges that have made you stronger.' },
  { symbol: '᛼', name: 'Iss', meaning: 'Ice, Stagnation, Focus.', psychologicalState: 'Using periods of inactivity for deep reflection.', phonetics: 'I', hiddenHistory: 'A Younger Futhark variant of Isa, focusing on the stillness of winter.', manifestationRitual: 'Take a cold shower to practice mental focus and physical resilience.' },
  { symbol: '᛽', name: 'Ar', meaning: 'Year, Plenty, Reward.', psychologicalState: 'Enjoying the fruits of one\'s labor and celebrating success.', phonetics: 'A', hiddenHistory: 'A Younger Futhark variant of Jera, emphasizing the harvest.', manifestationRitual: 'Host a small celebration to acknowledge a recent achievement.' },
  { symbol: '᛾', name: 'Reið', meaning: 'Ride, Journey, Progress.', psychologicalState: 'Moving forward with purpose and direction.', phonetics: 'R', hiddenHistory: 'A Younger Futhark variant of Raido, focusing on the act of traveling.', manifestationRitual: 'Take a journey to a place you have never been before.' },
  { symbol: '᛿', name: 'Týr', meaning: 'God, Victory, Honor.', psychologicalState: 'Acting with integrity and striving for excellence.', phonetics: 'T', hiddenHistory: 'A Younger Futhark variant of Tiwaz, emphasizing the divine aspect of victory.', manifestationRitual: 'Commit to a personal code of honor and act accordingly.' },
  { symbol: 'ᜀ', name: 'Áss', meaning: 'God, Breath, Inspiration.', psychologicalState: 'Connecting with divine inspiration and higher consciousness.', phonetics: 'A', hiddenHistory: 'A variant of Ansuz, focusing on the breath of the gods.', manifestationRitual: 'Practice deep breathing exercises to clear the mind.' },
  { symbol: 'ᜁ', name: 'Óss', meaning: 'Mouth, Speech, Creation.', psychologicalState: 'Using the power of words to manifest reality.', phonetics: 'O', hiddenHistory: 'A variant of Os, emphasizing the creative power of sound.', manifestationRitual: 'Speak your goals aloud with conviction and clarity.' },
  { symbol: 'ᜂ', name: 'Kálkr', meaning: 'Chalice, Receptivity, Holy Grail.', psychologicalState: 'Opening oneself to receive divine grace.', phonetics: 'K', hiddenHistory: 'A variant of Calc, focusing on the sacred vessel.', manifestationRitual: 'Meditate with open hands, visualizing receiving divine energy.' },
  { symbol: 'ᜃ', name: 'Stán', meaning: 'Stone, Foundation, Permanence.', psychologicalState: 'Building a solid foundation for future endeavors.', phonetics: 'St', hiddenHistory: 'A variant of Stan, emphasizing the enduring nature of stone.', manifestationRitual: 'Create a physical representation of your goals using stones.' },
  { symbol: 'ᜄ', name: 'Gár', meaning: 'Spear, Focus, Penetration.', psychologicalState: 'Piercing through illusions to find the core truth.', phonetics: 'G', hiddenHistory: 'A variant of Gar, focusing on the sharp point of the spear.', manifestationRitual: 'Write down a complex problem and identify its single root cause.' }
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
    source: 'St. Athanasius',
    theologyOfBeauty: 'The transfiguration of the human person into a vessel of divine light.'
  },
  {
    title: 'Philokalia (Love of the Beautiful)',
    content: 'A collection of texts written between the 4th and 15th centuries by spiritual masters of the Eastern Orthodox Church.',
    source: 'St. Nikodemos of the Holy Mountain',
    theologyOfBeauty: 'True beauty is found in the purification of the intellect and the heart.'
  },
  {
    title: 'Icon Veneration',
    content: 'The theological justification for the veneration of holy icons as windows to the divine.',
    source: 'St. John of Damascus',
    theologyOfBeauty: 'Matter is not evil; it can be sanctified to reveal the uncreated beauty of God.'
  },
  {
    title: 'The Divine Liturgy',
    content: 'The primary worship service of the Orthodox Church, seen as a participation in the heavenly banquet.',
    source: 'St. John Chrysostom',
    theologyOfBeauty: 'The liturgy is the highest expression of beauty, uniting heaven and earth in worship.'
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
  },
  {
    id: '5',
    title: 'The Kybalion',
    author: 'The Three Initiates',
    category: 'Philosophy',
    summary: 'A study of the Hermetic Philosophy of ancient Egypt and Greece, exploring the core principles of the universe and divine laws.',
    coverUrl: 'https://picsum.photos/seed/kybalion/400/600'
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
