export type Language = 'ar' | 'en';

export interface Poem {
  id: string;
  title: string;
  author: string;
  era: 'Pre-Islamic' | 'Umayyad' | 'Abbasid' | 'Andalusian' | 'Modern' | 'Melhun';
  theme: 'Ghazal' | 'Sufi' | 'Patriotic' | 'Wisdom' | 'Melancholy' | 'Sovereignty';
  content: string;
  translation?: string;
  meter?: string;
  rhyme?: string;
  calligraphy?: string; // Description of Kufic/Diwani aesthetic
  analysis?: string; // Deep linguistic analysis
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: 'Psychology' | 'Leadership' | 'Spirituality' | 'Philosophy' | 'Warrior Woman' | 'Mystic Queen' | 'Rebel' | 'Healer';
  summary: string;
  coverUrl: string;
  cinematicPairings?: string[];
  vibrationalFrequency?: string;
}

export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  description: string;
  posterUrl: string;
  vibrationalFrequency?: string;
}

export interface FamousSelma {
  id: string;
  name: string;
  category: 'Literature' | 'History' | 'Science' | 'Art' | 'Philosophy' | 'Activism';
  description: string;
  achievement: string;
  imageUrl: string;
}

export type HeartState = 'Fragile' | 'Restless' | 'Kabdh' | 'Bast' | 'Normal' | 'Sovereign' | 'Primal';

export interface Bouqala {
  id: string;
  text: string;
  interpretation: string;
  blessing: string;
}

export interface Rune {
  symbol: string;
  name: string;
  meaning: string;
  psychologicalState: string;
  phonetics?: string;
  hiddenHistory?: string;
  manifestationRitual?: string;
}

export interface Aphrodisiac {
  name: string;
  type: 'Food' | 'Scent' | 'Ritual';
  benefit: string;
  origin: string;
}

export interface SultanaScript {
  title: string;
  context: string;
  scriptAr: string;
  scriptEn: string;
  dominancePsychology?: string;
}

export interface OrthodoxTeaching {
  title: string;
  content: string;
  source: string;
  theologyOfBeauty?: string;
}

export interface Wird {
  id: string;
  title: string;
  practice: string;
  benefit: string;
  spiritualContext: string;
}

export interface SpiritualDNA {
  lastInteraction: string;
  dominantArchetype: string;
  spiritualLevel: number;
  sovereigntyScore: number;
  mysticismPath: 'Sufi' | 'Orthodox' | 'Runic' | 'Hybrid';
  recentThemes: string[];
  mysticismLevel: number;
  xp: number;
  level: number;
  shadowIntegration: number;
  runicAlignment: string[];
  heartState: HeartState;
}

export interface FiqhEntry {
  topic: string;
  ruling: string;
  spiritualSignificance: string;
  sufiIntegration: string; // Quote from Ibn Arabi or Al-Ghazali
  source: string;
}

export interface DailyOracle {
  date: string;
  sufiVerse: string;
  ancientInsight: string; // Runic or Orthodox
  powerCommand: string;
  runeSymbol: string;
}
