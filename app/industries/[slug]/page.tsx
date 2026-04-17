import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Prose from '@/components/Prose';
import BottomCTA from '@/components/BottomCTA';
import { INDUSTRIES, INDUSTRY_BY_SLUG } from '@/lib/content/industries';

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const i = INDUSTRY_BY_SLUG[params.slug];
  if (!i) return {};
  return {
    title: i.title,
    description: i.metaDescription,
    alternates: { canonical: `/industries/${i.slug}` },
    openGraph: {
      title: `${i.title} | Lake Logic`,
      description: i.metaDescription,
      type: 'article',
      url: `/industries/${i.slug}`,
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = INDUSTRY_BY_SLUG[params.slug];
  if (!i) notFound();

  const related = INDUSTRIES.filter((x) => x.slug !== i.slug);

  return (
    <>
      <Nav />
      <PageHero
        eyebrow={i.eyebrow}
        title={i.hero.title}
        subtitle={i.hero.subtitle}
        image={i.hero.image}
        imageAlt={i.hero.imageAlt}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: i.shortTitle }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Prose>{i.body()}</Prose>
        </div>
      </section>

      <section className="py-16 bg-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-2">More Industries</p>
            <h2 className="font-display text-3xl font-bold text-navy-700">Who we serve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/industries/${r.slug}`} className="card-lift bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <p className="text-water-500 text-xs font-semibold uppercase tracking-widest mb-2">{r.eyebrow}</p>
                <h3 className="font-display font-bold text-xl text-navy-700 mb-2">{r.shortTitle}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.metaDescription}</p>
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
