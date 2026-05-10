import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppBot from '@/components/ui/WhatsAppBot';
import CustomCursor from '@/components/ui/CustomCursor';
import { SessionProvider } from '@/components/providers/SessionProvider';
import ServiceWorkerRegister from '@/components/providers/ServiceWorkerRegister';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'globalNET | Knowledge Without Borders',
  description: 'globalNET is a global knowledge, language, travel, marketplace and entertainment platform built for learners, creators and explorers.',
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="theme-color" content="#C9A84C" />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <ServiceWorkerRegister />
          <CustomCursor />
          <WhatsAppBot />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
