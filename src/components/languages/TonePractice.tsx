'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const tones = [
  { name: 'mā (mother)', audio: '/audio/chinese/m1.mp3', pinyin: 'mā' },
  { name: 'má (hemp)', audio: '/audio/chinese/m2.mp3', pinyin: 'má' },
  { name: 'mǎ (horse)', audio: '/audio/chinese/m3.mp3', pinyin: 'mǎ' },
  { name: 'mà (scold)', audio: '/audio/chinese/m4.mp3', pinyin: 'mà' },
];

export default function TonePractice() {
  const [currentTone, setCurrentTone] = useState(0);
  const [userRecording, setUserRecording] = useState(false);
  const [result, setResult] = useState('');

  const playTone = useCallback(() => {
    const audio = new Audio(tones[currentTone].audio);
    audio.play();
  }, [currentTone]);

  const startRecording = async () => {
    setUserRecording(true);
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setResult(tones[currentTone].name === transcript ? 'Correct!' : `Try again, sounded like ${transcript}`);
      setUserRecording(false);
    };
    recognition.start();
  };

  return (
    <motion.div className="glass-card p-8 rounded-3xl">
      <h3 className="text-2xl font-bold text-white mb-6">Chinese Tone Practice</h3>
      <div className="text-center mb-8">
        <button onClick={playTone} className="bg-primaryGold text-navy px-8 py-4 rounded-full font-bold text-xl">
          Play {tones[currentTone].pinyin}
        </button>
        <p className="text-xl mt-4 font-bold">{tones[currentTone].name}</p>
      </div>
      <button onClick={startRecording} disabled={userRecording} className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600">
        {userRecording ? 'Listening...' : 'Record Your Voice'}
      </button>
      {result && (
        <motion.p className={`mt-6 text-xl font-bold p-4 rounded-2xl ${result.includes('Correct') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
          {result}
        </motion.p>
      )}
      <div className="flex gap-2 mt-8">
        {tones.map((_, i) => (
          <button key={i} onClick={() => setCurrentTone(i)} className={`flex-1 py-2 px-4 rounded-xl ${i === currentTone ? 'bg-primaryGold text-navy font-bold' : 'bg-white/5'}`}>
            Tone {i+1}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

