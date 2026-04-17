import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lake Logic',
  image: 'https://lake-logic-website.vercel.app/og-default.png',
  url: 'https://lake-logic-website.vercel.app',
  telephone: '+1-816-810-1081',
  email: 'info@lake-logic.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Overland Park',
    addressRegion: 'KS',
    addressCountry: 'US',
  },
  areaServed: [
    'Kansas City',
    'Overland Park',
    'Olathe',
    'Lenexa',
    'Leawood',
    'Johnson County',
    'Jackson County',
    'Wyandotte County',
    'Cass County',
    'Clay County',
    'Platte County',
  ],
  description:
    'Professional pond and lake management services in the Kansas City metro. Algae control, fisheries, aeration, water quality, shoreline restoration, and stormwater compliance.',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [] as string[],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_LD) }} />
      <Nav />
      <ScrollReveal />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
