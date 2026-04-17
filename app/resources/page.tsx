import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BottomCTA from '@/components/BottomCTA';
import { ARTICLES } from '@/lib/content/articles';

export const metadata: Metadata = {
  title: 'Resources & Pond Management Articles',
  description:
    'Pond and lake management articles, checklists, and guides for HOA boards, golf course superintendents, estate owners, and municipal staff in the Kansas City metro.',
  alternates: { canonical: '/resources' },
};

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ResourcesIndex() {
  const sorted = [...ARTICLES].sort((a, b) => b.publishedISO.localeCompare(a.publishedISO));
  const [featured, ...rest] = sorted;

  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Resources"
        title="Pond & Lake Management Insights"
        subtitle="Practical guides and science-backed articles for board members, superintendents, and estate owners — plus an on-demand AI assistant trained on our full knowledge base."
        image="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Lake with fountain"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
      />

      <section id="chat" className="py-14 bg-gradient-to-b from-slate-light to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-water-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-navy-700 mb-1">Ask Lake Logic</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our AI assistant is trained on 180,000+ words of peer-reviewed pond and lake management content. Ask it about stocking rates, algae ID, aeration sizing, permitting, or anything else. It cites its sources — and tap the chat bubble in the corner of any page to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href={`/resources/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-lift">
            <div className="relative h-64 md:h-80">
              <Image src={featured.image} alt={featured.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute top-4 left-4 bg-water-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                Featured
              </div>
            </div>
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                <span className="font-semibold text-water-500 uppercase tracking-widest">{featured.category}</span>
                <span>·</span>
                <span>{featured.readMinutes} min read</span>
                <span>·</span>
                <time>{formatDate(featured.publishedISO)}</time>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-700 leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-5">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-water-600 font-semibold">
                Read article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <h2 className="font-display text-3xl font-bold text-navy-700 mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`} className="card-lift bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group">
                <div className="relative h-48">
                  <Image src={a.image} alt={a.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                    <span className="font-semibold text-water-500 uppercase tracking-widest">{a.category}</span>
                    <span>·</span>
                    <span>{a.readMinutes} min</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy-700 leading-tight mb-2">{a.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA title="Have a pond problem that won't wait?" subtitle="Tell us about your waterbody and a Lake Logic biologist will reach out within one business day." />
      <Footer />
    </>
  );
}
