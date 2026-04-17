import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import BottomCTA from '@/components/BottomCTA';
import { SERVICES, SERVICE_BY_SLUG } from '@/lib/content/services';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const svc = SERVICE_BY_SLUG[params.slug];
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.metaDescription,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} | Lake Logic`,
      description: svc.metaDescription,
      type: 'article',
      url: `/services/${svc.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = SERVICE_BY_SLUG[params.slug];
  if (!svc) notFound();

  // JSON-LD Service schema
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    serviceType: svc.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Lake Logic',
      telephone: '+1-816-810-1081',
      email: 'info@lake-logic.com',
      areaServed: ['Kansas City Metro', 'Johnson County, KS', 'Jackson County, MO'],
    },
    description: svc.metaDescription,
    areaServed: 'Kansas City Metropolitan Area',
  };

  const related = SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero
        eyebrow={svc.eyebrow}
        title={svc.hero.title}
        subtitle={svc.hero.subtitle}
        image={svc.hero.image}
        imageAlt={svc.hero.imageAlt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: svc.shortTitle }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Prose>{svc.body()}</Prose>
        </div>
      </section>

      <section className="py-16 bg-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-2">Related Services</p>
            <h2 className="font-display text-3xl font-bold text-navy-700">Explore more Lake Logic services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="card-lift bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <p className="text-water-500 text-xs font-semibold uppercase tracking-widest mb-2">{r.eyebrow}</p>
                <h3 className="font-display font-bold text-xl text-navy-700 mb-2">{r.shortTitle}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.metaDescription}</p>
                <span className="inline-flex items-center gap-2 text-water-600 text-sm font-semibold mt-4">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
      <Footer />
    </>
  );
}
