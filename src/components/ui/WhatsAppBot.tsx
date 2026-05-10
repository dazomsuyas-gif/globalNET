'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const handleMessage = (message: string): string => {
  message = message.toLowerCase();

  // Language queries
  if (message.includes('chinese tones') || message.includes('tones')) {
    return 'Chinese has 4 tones: 1st (mā - high level), 2nd (má - rising), 3rd (mǎ - falling-rising), 4th (mà - falling). Practice: 妈 mother, 麻 hemp, 马 horse, 骂 scold. Click here for Tone Practice!';
  }

  if (message.includes('german dative') || message.includes('dative case')) {
    return 'Dative case (Wem? - To whom?) changes articles: der → dem, die → der, das → dem, die (plural) → den. Example: Ich gebe dem Mann (the man) das Buch. Check German Lessons for more!';
  }

  if (message.includes('swahili') || message.includes('speak swahili')) {
    return 'Karibu! Start with greetings: \'Jambo\' (Hello), \'Habari\' (How are you), \'Nzuri\' (Good), \'Asante\' (Thank you), \'Kwaheri\' (Goodbye). Swahili noun classes: M-WA for people (mtu → watu), KI-VI for things (kiti → viti). Full lessons in Language Academy!';
  }

  if (message.includes('hsk 3') || message.includes('hsk3')) {
    return 'HSK 3 requires 600 words. Top 10: 爱 (ài - love), 八 (bā - eight), 爸爸 (bàba - dad), 北京 (Běijīng - Beijing), 杯 (bēi - cup), 本 (běn - measure word for books), 不客气 (bú kè qi - you\'re welcome), 菜 (cài - dish), 茶 (chá - tea), 吃 (chī - eat). Full list in Chinese lessons!';
  }

  // Marketplace queries
  if (message.includes('find iphone') || message.includes('iphone')) {
    return '📱 iPhones in stock: iPhone 14 Pro (2,997,000 TZS / $999), iPhone 15 (3,500,000 TZS / $1,167), iPhone 15 Pro (4,200,000 TZS / $1,400), iPhone 15 Pro Max (4,800,000 TZS / $1,600). Tap to buy!';
  }

  if (message.includes('order status') || message.includes('tracking')) {
    return 'Order #ORD123 is currently SHIPPED. Estimated delivery: 2-3 days. Tracking number: TRK7890123. Need help? Contact seller directly.';
  }

  if (message.includes('sell') || message.includes('become seller')) {
    return 'To become a seller: 1. Login/Register, 2. Go to Dashboard, 3. Click \'Become a Seller\', 4. Submit your ID and business info, 5. Once approved, go to Seller Dashboard → Products → Add New Product. Commission: 5% per sale.';
  }

  // Entertainment queries
  if (message.includes('watch game of thrones') || message.includes('game of thrones')) {
    return 'Game of Thrones: 8 seasons, 73 episodes. Price: 500 TZS ($0.17) per episode or 7,000 TZS ($2.33) per season. Tap to buy season 1 now!';
  }

  if (message.includes('free music') || message.includes('music offer')) {
    return '🎵 FREE MUSIC: Buy 5+ movies OR any full TV season and get \'Best of African Music: Top 50 Hits\' album FREE automatically added to cart! Current movies: Inception, Dark Knight, Interstellar, Avatar, The Lion King...';
  }

  // Tourism queries
  if (message.includes('zanzibar hotels') || message.includes('zanzibar hotel')) {
    return '🏨 Recommended Zanzibar hotels: Park Hyatt ($250/night) - Luxury beachfront, The Residence ($180/night) - Private villas, DoubleTree ($120/night) - Family friendly, Tembo House ($80/night) - Budget Stone Town. Book now with free cancellation!';
  }

  if (message.includes('serengeti safari') || message.includes('serengeti price')) {
    return '🦁 Serengeti Safari packages: 3-day Migration Safari ($450) includes 2 nights lodging, 3 game drives, park fees, meals. 5-day package ($750) adds Olduvai Gorge visit. 7-day luxury ($1,200) includes hot air balloon safari!';
  }

  if (message.includes('tanzania visa') || message.includes('visa')) {
    return '🛂 Tanzania Visa: Most nationalities get visa on arrival ($50 USD). Requirements: Passport valid 6+ months, yellow fever certificate if arriving from endemic country, return ticket. E-visa available at immigration.go.tz 2 weeks before travel.';
  }

  // Stories queries
  if (message.includes('love stories') || message.includes('romance')) {
    return '📖 Romance stories: \'Love in Stone Town\' (9 chapters) - A tourist falls in love with local guide. \'Serengeti Sunset\' (10 chapters) - Love blooms during safari. \'The Zanzibar Wedding\' (8 chapters) - Destination wedding romance. Start reading for free!';
  }

  // Default response
  return 'Hello! I\'m globalNET AI assistant. I can help with language learning, marketplace shopping, entertainment, tourism, and stories. What would you like to know?';
};

export default function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hello! How can I help you today?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    const botResponse = { text: handleMessage(input), isUser: false };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <div className="font-semibold">globalNET AI</div>
                <div className="text-sm opacity-90">Online</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isUser
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  📤
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
