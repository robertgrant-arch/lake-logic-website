import Image from 'next/image';

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Licensed & Fully Insured',
    desc: 'All applicators hold state-required aquatic pesticide licenses. We carry full commercial liability and are compliant with all EPA guidelines.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Science-First Approach',
    desc: 'We rely on data — water quality testing, electrofishing surveys, and bathymetric analysis — before recommending any treatment plan.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local Team, Local Knowledge',
    desc: 'We understand Midwest waterbodies — the seasonal cycles, regional species, and unique challenges of Kansas, Missouri, and surrounding states.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Transparent Reporting',
    desc: 'Every visit is documented. You receive detailed service reports, water quality data, and seasonal summaries — so you always know the health of your waterbody.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Responsive & Reliable',
    desc: 'We show up when scheduled, respond promptly to issues, and offer priority emergency service for annual program clients.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Passion for Stewardship',
    desc: 'We treat every waterbody as if it were our own. Long-term ecological health — not just short-term aesthetics — is always our north star.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-navy-700 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=20"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-water-500/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-water-500/5 translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="section-line mx-auto mb-5" />
          <p className="text-water-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Why Lake Logic
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            The Difference Is in the Details
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            We don't just treat water — we manage ecosystems. Here's what sets Lake Logic apart from
            general landscaping contractors and one-size-fits-all pond services.
          </p>
        </div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className={`card-lift group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 reveal delay-${(i % 3) * 100 + 100}`}
            >
              <div className="w-11 h-11 rounded-lg bg-water-500/15 border border-water-400/20 flex items-center justify-center text-water-400 mb-4 group-hover:bg-water-500/25 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2.5 bg-water-500 hover:bg-water-600 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-[0_8px_32px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.45)] transition-all duration-300"
          >
            Start With a Free Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
