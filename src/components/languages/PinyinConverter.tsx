'use client';

import { useState } from 'react';

export default function PinyinConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Simple pinyin conversion (in a real app, this would use a proper library)
  const convertToPinyin = (text: string) => {
    // This is a simplified example - real implementation would use a proper Chinese library
    const conversions: Record<string, string> = {
      '你好': 'nǐ hǎo',
      '谢谢': 'xiè xiè',
      '再见': 'zài jiàn',
      '对不起': 'duì bù qǐ',
      '请': 'qǐng',
      '我': 'wǒ',
      '你': 'nǐ',
      '他': 'tā',
      '她': 'tā',
      '我们': 'wǒ men',
      '你们': 'nǐ men',
      '他们': 'tā men',
      '她们': 'tā men',
      '是': 'shì',
      '不': 'bù',
      '好': 'hǎo',
      '很': 'hěn',
      '吃': 'chī',
      '喝': 'hē',
      '看': 'kàn',
      '听': 'tīng',
      '说': 'shuō',
      '写': 'xiě',
      '读': 'dú',
      '学习': 'xué xí',
      '工作': 'gōng zuò',
      '学校': 'xué xiào',
      '老师': 'lǎo shī',
      '学生': 'xué sheng',
      '朋友': 'péng yǒu',
      '家庭': 'jiā tíng',
      '中国': 'zhōng guó',
      '北京': 'běi jīng',
      '上海': 'shàng hǎi',
      '广州': 'guǎng zhōu',
      '深圳': 'shēn zhèn'
    };

    let result = text;
    Object.entries(conversions).forEach(([chinese, pinyin]) => {
      result = result.replace(new RegExp(chinese, 'g'), pinyin);
    });

    return result;
  };

  const handleConvert = () => {
    const pinyin = convertToPinyin(input);
    setOutput(pinyin);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="bg-slate-700 rounded-lg p-6 border border-gold/30">
      <h3 className="text-xl font-bold text-white mb-4">Pinyin Converter</h3>
      <p className="text-slate-300 mb-4">
        Enter Chinese characters to convert them to pinyin with tone marks.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Chinese Characters
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Chinese text here..."
            className="w-full bg-slate-600 text-white placeholder-slate-400 p-3 rounded border border-gold/20 focus:border-gold focus:outline-none"
            rows={4}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleConvert}
            className="bg-gold text-navy px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition"
          >
            Convert to Pinyin
          </button>
          <button
            onClick={clearAll}
            className="bg-slate-600 text-white px-6 py-2 rounded hover:bg-slate-500 transition"
          >
            Clear
          </button>
        </div>

        {output && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Pinyin Output
            </label>
            <div className="bg-slate-600 p-3 rounded border border-gold/20">
              <p className="text-gold font-mono text-lg">{output}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-slate-600 rounded">
        <h4 className="text-sm font-semibold text-white mb-2">Tone Marks Guide:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
          <div>ā (1st tone - high)</div>
          <div>á (2nd tone - rising)</div>
          <div>ǎ (3rd tone - falling-rising)</div>
          <div>à (4th tone - falling)</div>
        </div>
      </div>
    </div>
  );
}
