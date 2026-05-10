export interface Language {
  slug: string;
  name: string;
  flag: string;
  levels: string[];
  totalLessons: number;
  color: string;
  description: string;
  tutor: string;
  features: string[];
}

export const languages: Language[] = [
  {
    slug: 'english',
    name: 'English',
    flag: '????????',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    totalLessons: 1200,
    color: '#003087',
    description: 'TOEFL/IELTS preparation aligned with CEFR standards',
    tutor: 'Sarah Johnson',
    features: ['Business English', 'Academic Writing', 'Conversation Practice', 'Grammar Mastery']
  },
  {
    slug: 'chinese',
    name: 'Chinese (Mandarin)',
    flag: '????',
    levels: ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'],
    totalLessons: 1200,
    color: '#DE2910',
    description: 'HSK preparation with pinyin, tones, and character recognition',
    tutor: 'Li Wei',
    features: ['Tone Practice', 'Pinyin Converter', 'Character Writing', 'Cultural Context']
  },
  {
    slug: 'spanish',
    name: 'Spanish',
    flag: '????????',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    totalLessons: 1200,
    color: '#AA151B',
    description: 'Latin American and European Spanish variants',
    tutor: 'Maria Garcia',
    features: ['Pronunciation', 'Verb Conjugation', 'Regional Dialects', 'Literature']
  },
  {
    slug: 'french',
    name: 'French',
    flag: '????',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    totalLessons: 1200,
    color: '#002395',
    description: 'DELF/DALF preparation with cultural immersion',
    tutor: 'Pierre Dubois',
    features: ['Pronunciation', 'Grammar', 'Literature', 'Cuisine Culture']
  },
  {
    slug: 'german',
    name: 'German',
    flag: '????',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    totalLessons: 1200,
    color: '#000000',
    description: 'TestDaF preparation with case system mastery',
    tutor: 'Hans Mueller',
    features: ['Case System (Nominativ, Akkusativ, Dativ, Genitiv)', 'Compound Words', 'Regional Dialects', 'Philosophy']
  },
  {
    slug: 'swahili',
    name: 'Swahili',
    flag: '????????',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    totalLessons: 1200,
    color: '#009639',
    description: 'East African lingua franca with noun class system',
    tutor: 'Amina Hassan',
    features: ['Noun Classes (M-WA, KI-VI, N, etc.)', 'Swahili Proverbs', 'East African Culture', 'Business Swahili']
  }
];
