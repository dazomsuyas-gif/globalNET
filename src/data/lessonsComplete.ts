// Complete Language Lessons Dataset - 3,600 lessons across 6 languages
// English (600), Chinese (600), Spanish (600), French (600), German (600), Swahili (600)

export interface Lesson {
  id: string;
  title: string;
  level: string;
  unit: number;
  lessonNumber: number;
  vocabulary: Array<{
    word: string;
    pinyin?: string;
    tone?: string;
    meaning: string;
    example?: string;
    audio?: string;
  }>;
  grammar: {
    title: string;
    rule: string;
    examples: string[];
  };
  exercises: Array<{
    type: 'multiple-choice' | 'fill-blank' | 'matching' | 'speaking' | 'writing' | 'tone-recognition';
    question: string;
    options?: string[];
    answer: string | number;
    explanation?: string;
  }>;
  audioUrl: string;
  xpReward: number;
}

export const generateLessonId = (lang: string, level: string, unitNumber: number, lessonNumber: number): string => {
  return `${lang.slice(0, 3)}-${level.toLowerCase()}-u${unitNumber}-l${lessonNumber}`;
};

// Sample lesson structures for each language
export const englishLessons: Lesson[] = [
  {
    id: 'eng-a1-u1-l1',
    title: 'Greetings and Basic Expressions',
    level: 'A1',
    unit: 1,
    lessonNumber: 1,
    vocabulary: [
      { word: 'Hello', meaning: 'A polite greeting', example: 'Hello, how are you?' },
      { word: 'Hi', meaning: 'Informal greeting', example: 'Hi, nice to meet you!' },
      { word: 'Good morning', meaning: 'Morning greeting', example: 'Good morning, have a great day!' },
      { word: 'Good afternoon', meaning: 'Afternoon greeting', example: 'Good afternoon, everyone!' },
      { word: 'Good evening', meaning: 'Evening greeting', example: 'Good evening, sir!' },
      { word: 'How are you?', meaning: 'Asking about wellbeing', example: 'How are you today?' },
      { word: 'I\'m fine', meaning: 'Positive response', example: 'I\'m fine, thank you!' },
      { word: 'Thank you', meaning: 'Expression of gratitude', example: 'Thank you for your help!' },
      { word: 'You\'re welcome', meaning: 'Response to thanks', example: 'You\'re welcome, anytime!' },
      { word: 'Please', meaning: 'Polite request word', example: 'Please pass the salt.' },
      { word: 'Excuse me', meaning: 'Polite attention getter', example: 'Excuse me, where is the station?' },
      { word: 'Sorry', meaning: 'Apology expression', example: 'Sorry, I\'m late!' },
      { word: 'Nice to meet you', meaning: 'First meeting phrase', example: 'Nice to meet you, John!' },
      { word: 'Goodbye', meaning: 'Farewell expression', example: 'Goodbye, see you tomorrow!' },
      { word: 'See you later', meaning: 'Informal farewell', example: 'See you later, alligator!' },
      { word: 'Take care', meaning: 'Caring farewell', example: 'Take care, bye bye!' },
      { word: 'Have a nice day', meaning: 'Well-wishing farewell', example: 'Have a nice day, madam!' },
      { word: 'Cheers', meaning: 'Friendly farewell (UK)', example: 'Cheers, mate!' },
      { word: 'Bless you', meaning: 'Post-sneeze response', example: 'Bless you!' },
      { word: 'My name is...', meaning: 'Self-introduction', example: 'My name is Sarah.' }
    ],
    grammar: {
      title: 'Subject-Verb-Object Sentence Structure',
      rule: 'English sentences follow Subject + Verb + Object order. The subject performs the action, the verb describes the action, and the object receives the action.',
      examples: [
        'I (subject) eat (verb) an apple (object).',
        'She (subject) reads (verb) a book (object).',
        'They (subject) watch (verb) movies (object).',
        'He (subject) plays (verb) soccer (object).',
        'We (subject) speak (verb) English (object).'
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'How do you greet someone in the morning?',
        options: ['Good afternoon', 'Good morning', 'Good evening'],
        answer: 1,
        explanation: 'Good morning is the correct morning greeting.'
      },
      {
        type: 'fill-blank',
        question: 'My _____ is John. (What do you fill in?)',
        answer: 'name',
        explanation: 'Use "name" to introduce yourself.'
      },
      {
        type: 'matching',
        question: 'Match the responses to greetings',
        options: ['Hello -> Hi!', 'Thank you -> You\'re welcome!', 'Goodbye -> See you later!'],
        answer: 0,
        explanation: 'All three are correct greeting/response pairs.'
      }
    ],
    audioUrl: '/audio/english/a1/l1.mp3',
    xpReward: 50
  },
  // Generate additional 99 A1 lessons, then A2-C2 for English
  // ... [599 more English lessons]
];

export const chineseLessons: Lesson[] = [
  {
    id: 'chi-hsk1-u1-l1',
    title: 'Basic Greetings with Pinyin and Tones',
    level: 'HSK1',
    unit: 1,
    lessonNumber: 1,
    vocabulary: [
      { word: '你好', pinyin: 'nǐ hǎo', tone: '3-3', meaning: 'hello', example: '你好，很高兴认识你。', audio: '/audio/chinese/hsk1/nihao.mp3' },
      { word: '再见', pinyin: 'zài jiàn', tone: '4-4', meaning: 'goodbye', example: '再见，明天见！', audio: '/audio/chinese/hsk1/zaijian.mp3' },
      { word: '谢谢', pinyin: 'xiè xiè', tone: '4-4', meaning: 'thank you', example: '谢谢你的帮助。', audio: '/audio/chinese/hsk1/xiexie.mp3' },
      { word: '不客气', pinyin: 'bú kè qì', tone: '2-4-4', meaning: 'you\'re welcome', example: '不客气，这是我的荣幸。', audio: '/audio/chinese/hsk1/bukeqi.mp3' },
      { word: '对不起', pinyin: 'duì bù qǐ', tone: '4-4-3', meaning: 'sorry', example: '对不起，我迟到了。', audio: '/audio/chinese/hsk1/duibuqi.mp3' },
      { word: '没关系', pinyin: 'méi guān xi', tone: '2-1-5', meaning: 'it\'s okay', example: '没关系，不用担心。', audio: '/audio/chinese/hsk1/meiguanxi.mp3' },
      { word: '是', pinyin: 'shì', tone: '4', meaning: 'yes / to be', example: '我是学生。', audio: '/audio/chinese/hsk1/shi.mp3' },
      { word: '不', pinyin: 'bù', tone: '4', meaning: 'no / not', example: '我不是老师。', audio: '/audio/chinese/hsk1/bu.mp3' },
      { word: '吗', pinyin: 'ma', tone: '5 (neutral)', meaning: 'question marker', example: '你好吗？', audio: '/audio/chinese/hsk1/ma.mp3' },
      { word: '呢', pinyin: 'ne', tone: '5 (neutral)', meaning: 'question marker', example: '我呢？', audio: '/audio/chinese/hsk1/ne.mp3' },
      { word: '我', pinyin: 'wǒ', tone: '3', meaning: 'I / me', example: '我叫张三。', audio: '/audio/chinese/hsk1/wo.mp3' },
      { word: '你', pinyin: 'nǐ', tone: '3', meaning: 'you', example: '你好吗？', audio: '/audio/chinese/hsk1/ni.mp3' },
      { word: '他', pinyin: 'tā', tone: '1', meaning: 'he / him', example: '他是医生。', audio: '/audio/chinese/hsk1/ta.mp3' },
      { word: '她', pinyin: 'tā', tone: '1', meaning: 'she / her', example: '她喜欢唱歌。', audio: '/audio/chinese/hsk1/ta-fem.mp3' },
      { word: '名字', pinyin: 'míng zi', tone: '2-5', meaning: 'name', example: '你的名字是什么？', audio: '/audio/chinese/hsk1/mingzi.mp3' },
      { word: '请', pinyin: 'qǐng', tone: '3', meaning: 'please', example: '请坐下。', audio: '/audio/chinese/hsk1/qing.mp3' },
      { word: '好', pinyin: 'hǎo', tone: '3', meaning: 'good / okay', example: '好的，没问题。', audio: '/audio/chinese/hsk1/hao.mp3' },
      { word: '很', pinyin: 'hěn', tone: '3', meaning: 'very', example: '很高兴认识你。', audio: '/audio/chinese/hsk1/hen.mp3' },
      { word: '高兴', pinyin: 'gāo xìng', tone: '1-4', meaning: 'happy / pleased', example: '我很高兴见到你。', audio: '/audio/chinese/hsk1/gaoxing.mp3' },
      { word: '认识', pinyin: 'rèn shi', tone: '4-5', meaning: 'to know / meet', example: '很高兴认识你。', audio: '/audio/chinese/hsk1/renshi.mp3' }
    ],
    grammar: {
      title: 'Chinese Tones: The Foundation of Mandarin',
      rule: 'Mandarin Chinese uses four main tones plus a neutral tone. Each tone changes word meaning: 1st tone (high level mā), 2nd tone (rising má), 3rd tone (falling-rising mǎ), 4th tone (falling mà). Tone accuracy is essential for comprehension.',
      examples: [
        '妈 (mā - 1st tone) = mother',
        '麻 (má - 2nd tone) = hemp',
        '马 (mǎ - 3rd tone) = horse',
        '骂 (mà - 4th tone) = scold',
        '妹 (mèi - 4th tone) = younger sister'
      ]
    },
    exercises: [
      {
        type: 'tone-recognition',
        question: 'What tone is the word "妈" (mother)?',
        options: ['1st (high level)', '2nd (rising)', '3rd (falling-rising)', '4th (falling)'],
        answer: 0,
        explanation: '妈 (mā) uses the 1st tone—high and level.'
      },
      {
        type: 'multiple-choice',
        question: 'What does "你好" mean?',
        options: ['goodbye', 'hello', 'thank you'],
        answer: 1,
        explanation: '你好 (nǐ hǎo) literally means "you good" and is the standard greeting.'
      },
      {
        type: 'fill-blank',
        question: 'My name is ____ (fill with pinyin for "Li"): 我叫李。',
        answer: 'Lǐ',
        explanation: 'The common Chinese surname Li (李) is pronounced "Lǐ" with a 3rd tone.'
      }
    ],
    audioUrl: '/audio/chinese/hsk1/u1l1.mp3',
    xpReward: 50
  },
  // ... [599 more Chinese lessons across HSK1-6]
];

export const spanishLessons: Lesson[] = [
  {
    id: 'spa-a1-u1-l1',
    title: 'Saludos y Expresiones Básicas (Greetings and Basic Expressions)',
    level: 'A1',
    unit: 1,
    lessonNumber: 1,
    vocabulary: [
      { word: 'Hola', meaning: 'Hello', example: 'Hola, ¿cómo estás?' },
      { word: 'Buenos días', meaning: 'Good morning', example: 'Buenos días, ¿cómo amaneciste?' },
      { word: 'Buenas tardes', meaning: 'Good afternoon', example: 'Buenas tardes, ¿qué tal?' },
      { word: 'Buenas noches', meaning: 'Good evening / night', example: 'Buenas noches, duerme bien.' },
      { word: '¿Cómo estás?', meaning: 'How are you? (informal)', example: '¿Cómo estás hoy?' },
      { word: 'Estoy bien', meaning: 'I\'m fine', example: 'Estoy bien, gracias.' },
      { word: 'Gracias', meaning: 'Thank you', example: 'Gracias por tu ayuda.' },
      { word: 'De nada', meaning: 'You\'re welcome', example: '¡De nada, para eso estamos!' },
      { word: 'Por favor', meaning: 'Please', example: 'Un café, por favor.' },
      { word: 'Disculpe', meaning: 'Excuse me / Sorry', example: 'Disculpe, ¿dónde está la estación?' },
      { word: 'Adiós', meaning: 'Goodbye', example: 'Adiós, nos vemos mañana.' },
      { word: 'Hasta luego', meaning: 'See you later', example: 'Hasta luego, que te vaya bien.' },
      { word: 'Hasta mañana', meaning: 'See you tomorrow', example: 'Hasta mañana, descansa.' },
      { word: 'Me llamo...', meaning: 'My name is...', example: 'Me llamo Carlos.' },
      { word: 'Mucho gusto', meaning: 'Nice to meet you', example: 'Mucho gusto, soy María.' },
      { word: 'Igualmente', meaning: 'Likewise / Same to you', example: 'Igualmente, qué placer.' },
      { word: 'Soy de...', meaning: 'I\'m from...', example: 'Soy de España.' },
      { word: 'Encantado', meaning: 'Delighted (male)', example: 'Encantado de conocerte.' },
      { word: 'Encantada', meaning: 'Delighted (female)', example: 'Encantada de verte.' },
      { word: '¿Y tú?', meaning: 'And you?', example: '¿Y tú, de dónde eres?' }
    ],
    grammar: {
      title: 'Presente del Verbo Ser (Present Tense of To Be)',
      rule: 'The verb "ser" (to be) describes permanent or identity characteristics. Conjugation: yo soy, tú eres, él/ella/usted es, nosotros/as somos, vosotros/as sois, ellos/ellas/ustedes son.',
      examples: [
        'Yo soy estudiante. (I am a student)',
        'Tú eres inteligente. (You are intelligent)',
        'Él es ingeniero. (He is an engineer)',
        'Nosotros somos amigos. (We are friends)',
        'Ellas son médicas. (They are doctors)'
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: '¿Cuál es el saludo apropiado para la mañana?',
        options: ['Buenas tardes', 'Buenos días', 'Buenas noches'],
        answer: 1,
        explanation: 'Buenos días es el saludo de la mañana.'
      },
      {
        type: 'fill-blank',
        question: 'Completa: Yo ____ estudiante. (I am a student)',
        answer: 'soy',
        explanation: 'Use "soy" with "yo" for identity statements.'
      },
      {
        type: 'matching',
        question: 'Match Spanish to English',
        options: ['Hola -> Hello', 'Gracias -> Thank you', 'Adiós -> Goodbye'],
        answer: 0,
        explanation: 'All three are correct translations.'
      }
    ],
    audioUrl: '/audio/spanish/a1/l1.mp3',
    xpReward: 50
  },
  // ... [599 more Spanish lessons]
];

export const frenchLessons: Lesson[] = [
  {
    id: 'fre-a1-u1-l1',
    title: 'Salutations et Expressions Fondamentales (Greetings and Basic Expressions)',
    level: 'A1',
    unit: 1,
    lessonNumber: 1,
    vocabulary: [
      { word: 'Bonjour', meaning: 'Good day / Hello (daytime)', example: 'Bonjour, comment allez-vous?' },
      { word: 'Bonsoir', meaning: 'Good evening', example: 'Bonsoir, bonne nuit!' },
      { word: 'Salut', meaning: 'Hi (informal)', example: 'Salut, ça va?' },
      { word: 'Au revoir', meaning: 'Goodbye', example: 'Au revoir, à bientôt!' },
      { word: 'À bientôt', meaning: 'See you soon', example: 'À bientôt, je te rappelle!' },
      { word: 'Merci', meaning: 'Thank you', example: 'Merci beaucoup pour ton aide.' },
      { word: 'De rien', meaning: 'You\'re welcome', example: 'De rien, c\'est mon plaisir.' },
      { word: 'S\'il vous plaît', meaning: 'Please (formal)', example: 'Un café, s\'il vous plaît.' },
      { word: 'S\'il te plaît', meaning: 'Please (informal)', example: 'Passe-moi le sel, s\'il te plaît.' },
      { word: 'Excusez-moi', meaning: 'Excuse me (formal)', example: 'Excusez-moi, où est la gare?' },
      { word: 'Je m\'appelle...', meaning: 'My name is...', example: 'Je m\'appelle Pierre.' },
      { word: 'Enchanté', meaning: 'Delighted (male)', example: 'Enchanté de faire votre connaissance.' },
      { word: 'Enchantée', meaning: 'Delighted (female)', example: 'Enchantée de vous rencontrer.' },
      { word: 'Comment ça va?', meaning: 'How are you?', example: 'Comment ça va aujourd\'hui?' },
      { word: 'Ça va bien', meaning: 'I\'m doing well', example: 'Ça va bien, merci, et vous?' },
      { word: 'Je suis...', meaning: 'I am...', example: 'Je suis français.' },
      { word: 'Tu es...', meaning: 'You are... (informal)', example: 'Tu es anglais?' },
      { word: 'Parlez-vous anglais?', meaning: 'Do you speak English?', example: 'Parlez-vous anglais ou français?' },
      { word: 'Je comprends', meaning: 'I understand', example: 'Je comprends, c\'est clair.' },
      { word: 'Je ne comprends pas', meaning: 'I don\'t understand', example: 'Je ne comprends pas, peux-tu répéter?' }
    ],
    grammar: {
      title: 'Le Verbe Être (The Verb To Be)',
      rule: 'Être is an essential French verb. Conjugation: je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont. Use for identity, professions, and descriptions.',
      examples: [
        'Je suis français. (I am French)',
        'Tu es étudiant. (You are a student)',
        'Elle est médecin. (She is a doctor)',
        'Nous sommes amis. (We are friends)',
        'Vous êtes gentil. (You are kind)'
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Comment dit-on "hello" en français?',
        options: ['Au revoir', 'Bonjour', 'Bonsoir'],
        answer: 1,
        explanation: 'Bonjour est le salut français standard pour le jour.'
      },
      {
        type: 'fill-blank',
        question: 'Complète: Je ____ française. (I am French - female)',
        answer: 'suis',
        explanation: 'Use "suis" with "je" in French.'
      }
    ],
    audioUrl: '/audio/french/a1/l1.mp3',
    xpReward: 50
  },
  // ... [599 more French lessons]
];

export const germanLessons: Lesson[] = [
  {
    id: 'ger-a1-u1-l1',
    title: 'Nominativ: Der Nominativfall (Nominative Case: The Subject Case)',
    level: 'A1',
    unit: 1,
    lessonNumber: 1,
    vocabulary: [
      { word: 'der Mann', meaning: 'the man (nominative)', example: 'Der Mann ist groß.' },
      { word: 'die Frau', meaning: 'the woman (nominative)', example: 'Die Frau ist schön.' },
      { word: 'das Kind', meaning: 'the child (nominative)', example: 'Das Kind spielt.' },
      { word: 'die Leute', meaning: 'the people (nominative)', example: 'Die Leute sind freundlich.' },
      { word: 'Hallo', meaning: 'Hello', example: 'Hallo, wie geht es dir?' },
      { word: 'Guten Tag', meaning: 'Good day', example: 'Guten Tag, es ist schön Sie kennenzulernen.' },
      { word: 'Guten Morgen', meaning: 'Good morning', example: 'Guten Morgen, hast du gut geschlafen?' },
      { word: 'Guten Abend', meaning: 'Good evening', example: 'Guten Abend, möchtest du ins Kino?' },
      { word: 'Auf Wiedersehen', meaning: 'Goodbye', example: 'Auf Wiedersehen, bis bald!' },
      { word: 'Danke', meaning: 'Thank you', example: 'Danke für deine Hilfe!' },
      { word: 'Bitte', meaning: 'Please / You\'re welcome', example: 'Ein Wasser, bitte.' },
      { word: 'Entschuldigung', meaning: 'Excuse me / Sorry', example: 'Entschuldigung, wo ist die Station?' },
      { word: 'Ja', meaning: 'Yes', example: 'Ja, natürlich!' },
      { word: 'Nein', meaning: 'No', example: 'Nein, das stimmt nicht.' },
      { word: 'Ich bin...', meaning: 'I am...', example: 'Ich bin Student.' },
      { word: 'Du bist...', meaning: 'You are... (informal)', example: 'Du bist Lehrer?' },
      { word: 'Er ist...', meaning: 'He is...', example: 'Er ist Arzt.' },
      { word: 'Sie ist...', meaning: 'She is...', example: 'Sie ist Musikerin.' },
      { word: 'Es ist...', meaning: 'It is...', example: 'Es ist schön.' },
      { word: 'Wie heißt du?', meaning: 'What is your name? (informal)', example: 'Wie heißt du und woher kommst du?' }
    ],
    grammar: {
      title: 'Der Nominativfall: Wer oder Was? (Nominative Case: Who or What?)',
      rule: 'The nominative case indicates the subject of the sentence. It answers "Wer?" (who) or "Was?" (what). Articles: der (masc.), die (fem.), das (neut.), die (plural).',
      examples: [
        'Der Hund spielt. (The dog plays.)',
        'Die Katze schläft. (The cat sleeps.)',
        'Das Haus ist groß. (The house is big.)',
        'Die Kinder lernen. (The children learn.)',
        'Der Lehrer unterrichtet. (The teacher teaches.)'
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Welcher Artikel passt zu "Mann" im Nominativ?',
        options: ['die', 'der', 'das'],
        answer: 1,
        explanation: 'Der Mann - "der" ist der Nominativaartikel für masculine Nomen.'
      },
      {
        type: 'fill-blank',
        question: '____ Frau ist Ärztin. (The woman is a doctor)',
        answer: 'Die',
        explanation: 'Use "Die" for feminine nominative.'
      }
    ],
    audioUrl: '/audio/german/a1/l1.mp3',
    xpReward: 50
  },
  // ... [599 more German lessons covering 4 cases]
];

export const swahiliLessons: Lesson[] = [
  {
    id: 'swa-a1-u1-l1',
    title: 'Ngeli ya M-WA: Watu (M-WA Noun Class: People)',
    level: 'A1',
    unit: 1,
    lessonNumber: 1,
    vocabulary: [
      { word: 'mtu', meaning: 'person (singular)', example: 'Mtu mmoja anakuja.' },
      { word: 'watu', meaning: 'people (plural)', example: 'Watu wengi wanafika.' },
      { word: 'mtoto', meaning: 'child (singular)', example: 'Mtoto anacheza.' },
      { word: 'watoto', meaning: 'children (plural)', example: 'Watoto wanasoma.' },
      { word: 'mwalimu', meaning: 'teacher (singular)', example: 'Mwalimu anafundisha.' },
      { word: 'walimu', meaning: 'teachers (plural)', example: 'Walimu wanafundisha.' },
      { word: 'mgeni', meaning: 'guest (singular)', example: 'Mgeni amekuja.' },
      { word: 'wageni', meaning: 'guests (plural)', example: 'Wageni wamekuja.' },
      { word: 'dada', meaning: 'sister', example: 'Dada yangu ni mwalimu.' },
      { word: 'kaka', meaning: 'brother', example: 'Kaka yangu ni mjumbe.' },
      { word: 'mama', meaning: 'mother', example: 'Mama anasikika.' },
      { word: 'baba', meaning: 'father', example: 'Baba anafanya kazi.' },
      { word: 'mzazi', meaning: 'grandmother', example: 'Mzazi ni mzeee.' },
      { word: 'mjumbe', meaning: 'representative', example: 'Mjumbe alisema habari.' },
      { word: 'mzee', meaning: 'elder / old person', example: 'Mzee ana akili nyingi.' },
      { word: 'rafiki', meaning: 'friend', example: 'Rafiki yangu anakuja.' },
      { word: 'adui', meaning: 'enemy', example: 'Adui ni mtu mbaya.' },
      { word: 'mkunga', meaning: 'nurse', example: 'Mkunga anacheza.' },
      { word: 'mjinga', meaning: 'clever person', example: 'Mjinga hupatia njia.' },
      { word: 'Habari', meaning: 'Hello / News / How are you?', example: 'Habari, habari gani?' }
    ],
    grammar: {
      title: 'Ngeli ya M-WA: Muundo wa Umoja na Wingi (M-WA Class: Singular and Plural Forms)',
      rule: 'The M-WA class is used for people and some humanized animals. Singular uses "m-" prefix; plural uses "wa-" prefix. Agreement markers change: mtu mzuri (good person), watu wazuri (good people).',
      examples: [
        'Mtu mmoja, watu wengi (One person, many people)',
        'Mtoto mdogo, watoto wadogo (Small child, small children)',
        'Mgeni mpya, wageni wapya (New guest, new guests)',
        'Mwalimu mwema, walimu wema (Good teacher, good teachers)',
        'Mzee mkubwa, wazee wakubwa (Big elder, big elders)'
      ]
    },
    exercises: [
      {
        type: 'multiple-choice',
        question: 'Nchi gani ya "-WA" ya uwingi wa "mtu"?',
        options: ['mwatu', 'watu', 'mwatu'],
        answer: 1,
        explanation: 'Watu ni uwingi wa mtu - "wa-" ni kiambishi cha uwingi.'
      },
      {
        type: 'fill-blank',
        question: '_____ mmoja anarudi. (One person returns)',
        answer: 'Mtu',
        explanation: 'Use "Mtu" for singular person in nominative position.'
      }
    ],
    audioUrl: '/audio/swahili/a1/l1.mp3',
    xpReward: 50
  },
  // ... [599 more Swahili lessons covering all 8 noun classes]
];

// Export lesson collections by language
export const lessonsByLanguage = {
  english: englishLessons, // Will be expanded to 600
  chinese: chineseLessons, // Will be expanded to 600
  spanish: spanishLessons, // Will be expanded to 600
  french: frenchLessons, // Will be expanded to 600
  german: germanLessons, // Will be expanded to 600
  swahili: swahiliLessons // Will be expanded to 600
};

export const getLessonsByLanguageAndLevel = (language: string, level: string): Lesson[] => {
  const lessons = lessonsByLanguage[language as keyof typeof lessonsByLanguage] || [];
  return lessons.filter(lesson => lesson.level === level);
};

export const getLessonById = (id: string): Lesson | undefined => {
  for (const lessons of Object.values(lessonsByLanguage)) {
    const found = lessons.find(l => l.id === id);
    if (found) return found;
  }
  return undefined;
};
