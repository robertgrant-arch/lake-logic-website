import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Prose from '@/components/Prose';
import BottomCTA from '@/components/BottomCTA';
import { ARTICLES, ARTICLE_BY_SLUG } from '@/lib/content/articles';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = ARTICLE_BY_SLUG[params.slug];
  if (!a) return {};
  return {
    title: a.title,
    description: a.metaDescription,
    alternates: { canonical: `/resources/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.metaDescription,
      type: 'article',
      publishedTime: a.publishedISO,
      url: `/resources/${a.slug}`,
      images: [{ url: a.image, alt: a.imageAlt }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = ARTICLE_BY_SLUG[params.slug];
  if (!a) notFound();

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.metaDescription,
    datePublished: a.publishedISO,
    image: a.image,
    author: { '@type': 'Organization', name: 'Lake Logic' },
    publisher: {
      '@type': 'Organization',
      name: 'Lake Logic',
      logo: { '@type': 'ImageObject', url: 'https://lake-logic-website.vercel.app/og-default.png' },
    },
    mainEntityOfPage: `https://lake-logic-website.vercel.app/resources/${a.slug}`,
  };

  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      {/* Article hero */}
      <section className="relative pt-32 pb-14 bg-navy-700 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={a.image} alt={a.imageAlt} fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-700/75 via-navy-700/75 to-navy-900/95" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/resources" className="hover:text-white">Resources</Link>
            <span className="text-white/30">/</span>
            <span>{a.category}</span>
          </nav>
          <p className="text-water-300 font-semibold text-xs tracking-widest uppercase mb-3">{a.category}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">{a.title}</h1>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <time>{formatDate(a.publishedISO)}</time>
            <span>·</span>
            <span>{a.readMinutes} min read</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Prose>
            <p className="text-lg text-slate-600 leading-relaxed mb-8" style={{ fontStyle: 'italic' }}>
              {a.excerpt}
            </p>
            {a.body()}
          </Prose>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-2">Keep Reading</p>
            <h2 className="font-display text-3xl font-bold text-navy-700">Related articles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="card-lift bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group">
                <div className="relative h-40">
                  <Image src={r.image} alt={r.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="text-water-500 text-xs font-semibold uppercase tracking-widest mb-2">{r.category}</p>
                  <h3 className="font-display text-lg font-bold text-navy-700 leading-snug">{r.title}</h3>
                </div>
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
