import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lake-logic-website.vercel.app'),
  title: {
    default: 'Lake Logic | Pond & Lake Management — Kansas City',
    template: '%s | Lake Logic',
  },
  description:
    'Professional pond and lake management services in the Kansas City metro. Algae control, fisheries management, aeration, water quality restoration, shoreline erosion, stormwater BMPs, and annual care programs. Call (816) 810-1081.',
  keywords: [
    'pond management Kansas City',
    'lake management Kansas City',
    'algae control',
    'fisheries management',
    'water quality testing',
    'aeration',
    'aquatic weed control',
    'HOA pond maintenance',
    'golf course pond management',
    'stormwater pond management',
    'dredging',
    'shoreline erosion',
    'Johnson County pond management',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Lake Logic | Pond & Lake Management',
    description:
      'Cleaner Water. Healthier Ecosystems. Better Experiences. Science-backed pond and lake management across the Kansas City metro.',
    type: 'website',
    siteName: 'Lake Logic',
    url: 'https://lake-logic-website.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Logic | Pond & Lake Management',
    description:
      'Science-backed pond and lake management across the Kansas City metro.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
