import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceCardGrid from '@/components/ServiceCardGrid';
import BottomCTA from '@/components/BottomCTA';
import { SERVICES } from '@/lib/content/services';

export const metadata: Metadata = {
  title: 'Pond & Lake Management Services',
  description:
    'Full-spectrum pond and lake services for the Kansas City metro: water quality management, algae and weed control, fountains and aeration, fisheries management, shoreline restoration, and stormwater compliance.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndex() {
  const cards = SERVICES.map((s) => ({
    title: s.shortTitle,
    description: s.metaDescription,
    href: `/services/${s.slug}`,
  }));
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="What We Do"
        title="Full-Spectrum Aquatic Services"
        subtitle="From single-treatment visits to year-round management programs, Lake Logic delivers every service your waterbody needs — handled by licensed biologists and applicators."
        image="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Clear managed lake"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <ServiceCardGrid cards={cards} />
      <BottomCTA />
      <Footer />
    </>
  );
}
