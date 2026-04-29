export const lessonsData = {
  english: {
    A1: [
      { id: 'eng-a1-1', title: 'Greetings and Introductions', vocabulary: ['hello', 'goodbye', 'please', 'thank you'], grammar: 'Simple present tense', exercises: [
        { type: 'multiple', question: 'How do you say "hello"?', options: ['hello', 'goodbye', 'please'], answer: 0 },
        // 9 more...
      ], audio: '/audio/eng-a1-1.mp3' }
    ],
    A2: [
      // 100 A2 lessons...
    ]
  },
  chinese: {
    HSK1: [
      { id: 'chi-hsk1-1', title: 'Basic Greetings (你好 nǐ hǎo)', pinyin: 'nǐ hǎo', tone: 3, characters: '你好', vocabulary: ['nǐ', 'hǎo'], exercises: [
        { type: 'tone', question: 'Play mā (mother)', options: ['ma1', 'ma2', 'ma3', 'ma4'], answer: 'ma1' }
      ], audio: '/audio/chi-hsk1-1.mp3' }
    ]
  },
  german: {
    A1: [
      { id: 'ger-a1-1', title: 'Dative Case Introduction', grammar: 'dem Mann, der Frau, dem Kind', exercises: [
        { type: 'fill', question: 'Ich gebe ___ Apfel der Frau.', answer: 'dem' }
      ] }
    ]
  }
  // Full 3,360 lessons structure...
};

