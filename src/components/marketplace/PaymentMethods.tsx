'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const paymentMethods: PaymentMethod[] = [
  { id: 'mpesa', name: 'M-PESA', icon: '/payments/mpesa.png', description: 'Phone number payment' },
  { id: 'airtel', name: 'Airtel Money', icon: '/payments/airtel.png', description: 'Airtel mobile money' },
  { id: 'halopesa', name: 'HaloPesa', icon: '/payments/halopesa.png', description: 'Halotel money' },
  { id: 'yasmix', name: 'YAS MIX', icon: '/payments/yasmix.png', description: 'YAS Money' },
  { id: 'nmb', name: 'NMB Bank', icon: '/payments/nmb.png', description: 'NMB c2b payment' },
  { id: 'crdb', name: 'CRDB Bank', icon: '/payments/crdb.png', description: 'CRDB mobile banking' },
  { id: 'kcb', name: 'KCB Bank', icon: '/payments/kcb.png', description: 'KCB m-pesa' },
  { id: 'nbc', name: 'NBC Bank', icon: '/payments/nbc.png', description: 'NBC mobile pay' },
  { id: 'visa', name: 'Visa / Mastercard', icon: '/payments/visa-mastercard.png', description: 'International cards' },
  { id: 'paypal', name: 'PayPal', icon: '/payments/paypal.png', description: 'Global payments' },
  { id: 'alipay', name: 'Alipay', icon: '/payments/alipay.png', description: 'Chinese payment' },
  { id: 'crypto', name: 'BTC / ETH / USDT', icon: '/payments/crypto.png', description: 'Cryptocurrency' },
  { id: 'nala', name: 'Nala Money', icon: '/payments/nala.png', description: 'Instant mobile money' },
  { id: 'tigo', name: 'Tigo Pesa', icon: '/payments/tigo.png', description: 'Tigo mobile money' },
  { id: 'azam', name: 'AzamPay', icon: '/payments/azam.png', description: 'Azam TV payment' },
  { id: 'voda', name: 'Vodacom M-PESA', icon: '/payments/vodacom.png', description: 'Vodacom money transfer' }
];

interface PaymentMethodsProps {
  onSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethods({ onSelect }: PaymentMethodsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMethods = paymentMethods.filter(method =>
    method.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="glass-card p-8 rounded-3xl mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">Choose Payment Method</h3>
        <input 
          type="text"
          placeholder="Search M-PESA, Visa, PayPal..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold mb-6"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMethods.map((method) => (
          <motion.button 
            key={method.id}
            className="glass-card p-6 rounded-2xl hover:border-primaryGold/50 hover:shadow-goldGlow transition-all group relative overflow-hidden"
            onClick={() => onSelect(method)}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Image src={method.icon} alt={method.name} width={32} height={32} className="object-contain" />
            </div>
            <div className="font-bold text-white text-center mb-1 group-hover:text-primaryGold">{method.name}</div>
            <div className="text-white/60 text-xs text-center">{method.description}</div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primaryGold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

