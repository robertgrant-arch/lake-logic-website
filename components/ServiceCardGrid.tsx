import Link from 'next/link';

type Card = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export default function ServiceCardGrid({ cards, heading, eyebrow }: { cards: Card[]; heading?: string; eyebrow?: string }) {
  return (
    <section className="py-20 bg-slate-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(heading || eyebrow) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {eyebrow && <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">{eyebrow}</p>}
            {heading && <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-700">{heading}</h2>}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group card-lift bg-white rounded-2xl p-7 border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-water-50 flex items-center justify-center mb-5 group-hover:bg-water-100 transition-colors">
                {c.icon ?? (
                  <svg className="w-6 h-6 text-water-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>
              <h3 className="font-display font-bold text-xl text-navy-700 mb-2 leading-snug">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{c.description}</p>
              <span className="inline-flex items-center gap-2 text-water-600 text-sm font-semibold">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
