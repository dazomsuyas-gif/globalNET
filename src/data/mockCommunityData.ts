export const mockUsers = [
  { id: '1', name: 'Kelvin Juma', avatar: '/avatars/kelvin.jpg', username: 'kelvinmsuya', language: 'Swahili', level: 'C2' },
  { id: '2', name: 'Sarah K.', avatar: '/avatars/sarah.jpg', username: 'sarahk', language: 'German', level: 'B2' },
  { id: '3', name: 'Ahmed M.', avatar: '/avatars/ahmed.jpg', username: 'ahmedm', language: 'Arabic', level: 'A2' },
  { id: '4', name: 'Fatuma H.', avatar: '/avatars/fatuma.jpg', username: 'fatuma_h', language: 'Swahili', level: 'C1' },
  { id: '5', name: 'Carlos R.', avatar: '/avatars/carlos.jpg', username: 'carlosr', language: 'Spanish', level: 'B1' },
];

export const mockPosts = [
  { 
    id: '1',
    authorId: '1',
    content: 'Just published new Swahili lesson for A1 learners! Check Language Academy #Swahili #Learning',
    likes: 45,
    comments: 12,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  { 
    id: '2',
    authorId: '2',
    content: 'Looking for German conversation partner. Available evenings UTC+3. DM! #German #LanguageExchange',
    likes: 23,
    comments: 8,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
];

export const mockGroups = [
  { id: 'swahili-practice', name: 'Swahili Conversation Practice', members: 1245, description: 'Daily practice for beginners-advanced.' },
  { id: 'youtube-scripts', name: 'YouTube Script Writers', members: 856, description: 'Script templates and feedback.' },
];

export const mockMessages = [
  { id: '1', from: 'sarahk', to: 'kelvinmsuya', content: 'Hi Kelvin, is the Swahili lesson available?', time: '2024-03-20T10:30' },
];

