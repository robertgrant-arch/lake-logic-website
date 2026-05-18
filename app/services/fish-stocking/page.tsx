import type { Metadata } from 'next';
import FishStockingContent from './FishStockingContent';

export const metadata: Metadata = {
  title: 'Fish Stocking Options & Species Guide | Lake Logic',
  description:
    'Strategic fish stocking for Kansas and Missouri ponds and lakes. Largemouth bass, bluegill, catfish, walleye, crappie, and 10 more species — selected by assessment, not formula.',
  alternates: { canonical: '/services/fish-stocking' },
  openGraph: {
    title: 'Fish Stocking Options & Species Guide | Lake Logic',
    description:
      'Strategic fish stocking for Kansas and Missouri ponds and lakes. 15 species, each recommended based on waterbody assessment and management goals.',
    type: 'article',
    url: '/services/fish-stocking',
  },
};

export default function FishStockingPage() {
  return <FishStockingContent />;
}
