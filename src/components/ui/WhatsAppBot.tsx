'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const handleMessage = (message: string): string => {
  message = message.toLowerCase();
  
  if (message.includes('chinese tones')) {
    return 'Chinese tones practice: 1st mā (mother-high), 2nd má (hemp-rising), 3rd mǎ (horse-dipping), 4th mà (scold-falling). Try TonePractice component!';
  } else if (message.includes('iphone') || message.includes('phone')) {
    return 'iPhone 15 Pro Max 256GB available in Marketplace for $1199 (3,597,000 TZS). Link: /marketplace';
  } else if (message.includes('game of thrones') || message.includes('tv')) {
    return 'Game of Thrones seasons 1-8 in Entertainment section. $0.17/episode (500 TZS). Full season $13.60!';
  } else if (message.includes('zanzibar') || message.includes('hotel')) {
    return 'Zanzibar hotels: Zanzibar Palace Hotel $120/night, Serena Hotel $250/night. Check /tourism/hotels';
  } else if (message.includes('romance') || message.includes('story')) {
    return 'Recommended: "Love in Zanzibar" Romance story. Read at /stories/love-in-zanzibar';
  } else if (message.includes('order')) {
    return 'What is your order ID? Example: ORD-12345';
  }
  return 'Type "iPhone", "Chinese tones", "Zanzibar hotels", "Game of Thrones", "Romance story" or "order status"';
};

export default function WhatsAppBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', content: 'Hi! How can I help? Language lessons, marketplace, stories?' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const botResponse = handleMessage(input);
    setTimeout(() => setMessages(prev => [...prev, { role: 'bot', content: botResponse }]), 500);
    setInput('');
  };

  return (
    <>
      <motion.div 
        className="fixed bottom-6 right-6 w-80 h-96 glass-card rounded-2xl shadow-2xl shadow-primaryGold/50 z-[9999] flex flex-col"
        initial={false}
        animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">WA</span>
            </div>
            <div>
              <div className="font-bold text-white">globalNET Assistant</div>
              <div className="text-xs text-white/60">Online</div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
            ×
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-primaryGold text-navy' : 'bg-white/10'}`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask anything..."
              className="flex-1 glass-card p-3 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 ring-primaryGold"
            />
            <button onClick={sendMessage} disabled={!input.trim()} className="w-12 h-12 bg-primaryGold rounded-full flex items-center justify-center hover:scale-110">
              →
            </button>
          </div>
        </div>
      </motion.div>
      <motion.button 
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center text-white text-2xl z-[10000] hover:scale-110 cursor-pointer"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        💬
      </motion.button>
    </>
  );
}

