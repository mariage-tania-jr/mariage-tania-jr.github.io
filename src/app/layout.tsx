// src/app/layout.tsx
import './globals.css';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import React from 'react';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata = {
  title: 'Tatiana & Jean-Romain Wedding',
  description: 'Wedding celebration of Tatiana and Jean-Romain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className={cormorant.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
