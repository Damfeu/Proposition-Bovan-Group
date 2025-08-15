import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bovann Group - Communication & Digital Excellence',
  description: 'Boostez votre présence, développez votre image, atteignez vos objectifs. Services de communication, gestion des réseaux sociaux, développement web et formations professionnelles.',
  keywords: 'communication, digital, réseaux sociaux, développement web, formations, Bovann Group',
  authors: [{ name: 'Bovann Group' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}