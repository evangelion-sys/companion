export type Language = 'ar' | 'en';

export interface Poem {
  id: string;
  title: string;
  author: string;
  era: 'Pre-Islamic' | 'Umayyad' | 'Abbasid' | 'Andalusian' | 'Modern';
  theme: 'Ghazal' | 'Sufi' | 'Patriotic' | 'Wisdom';
  content: string;
  translation?: string;
  meter?: string;
  rhyme?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: 'Psychology' | 'Leadership' | 'Spirituality' | 'Philosophy';
  summary: string;
  coverUrl: string;
}

export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  description: string;
  posterUrl: string;
}

export interface FamousSelma {
  id: string;
  name: string;
  category: 'Literature' | 'History' | 'Science' | 'Art';
  description: string;
  achievement: string;
  imageUrl: string;
}

export type HeartState = 'Fragile' | 'Restless' | 'Kabdh' | 'Bast' | 'Normal';

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
}

export interface Aphrodisiac {
  name: string;
  type: 'Food' | 'Scent';
  benefit: string;
  origin: string;
}

export interface SultanaScript {
  title: string;
  context: string;
  scriptAr: string;
  scriptEn: string;
}

export interface OrthodoxTeaching {
  title: string;
  content: string;
  source: string;
}

export interface Wird {
  id: string;
  title: string;
  practice: string;
  benefit: string;
  spiritualContext: string;
}
