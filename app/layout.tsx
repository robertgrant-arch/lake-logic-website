import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

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
  title: 'Lake Logic | Pond & Lake Management — Kansas City',
  description:
    'Professional pond and lake management services in the Kansas City area. Algae control, fisheries management, aeration, water quality restoration, and annual care programs. Call (816) 810-1081.',
  keywords:
    'pond management Kansas City, lake management, algae control, fisheries management, water quality, aeration, aquatic weed control, Kansas City pond care',
  openGraph: {
    title: 'Lake Logic | Pond & Lake Management',
    description:
      'Cleaner Water. Healthier Ecosystems. Better Experiences. Professional pond and lake management in Kansas City.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
