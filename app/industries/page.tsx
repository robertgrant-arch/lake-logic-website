import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceCardGrid from '@/components/ServiceCardGrid';
import BottomCTA from '@/components/BottomCTA';
import { INDUSTRIES } from '@/lib/content/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Lake Logic serves HOAs, golf courses, private estates, and municipalities across Kansas City — with programs tailored to each ownership model.',
  alternates: { canonical: '/industries' },
};

export default function IndustriesIndex() {
  const cards = INDUSTRIES.map((i) => ({
    title: i.shortTitle,
    description: i.metaDescription,
    href: `/industries/${i.slug}`,
  }));
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Who We Serve"
        title="Programs Tailored to Ownership"
        subtitle="Every pond has a different owner — and each ownership model brings distinct priorities, budgets, reporting expectations, and compliance requirements. We build programs to fit."
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80"
        imageAlt="HOA pond"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />
      <ServiceCardGrid cards={cards} />
      <BottomCTA />
      <Footer />
    </>
  );
}
