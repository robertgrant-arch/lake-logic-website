import Link from 'next/link';

export default function BottomCTA({
  title = 'Get a Free Pond Assessment',
  subtitle = 'Tell us about your waterbody. A Lake Logic biologist will reach out within one business day with a tailored plan.',
  primaryLabel = 'Request Free Estimate',
  primaryHref = '/#contact',
  secondaryLabel = 'Call (816) 810-1081',
  secondaryHref = 'tel:8168101081',
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-navy-700 to-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 30%, #3B82F6 0%, transparent 60%)' }} />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="btn-primary bg-water-500 hover:bg-water-400 text-white font-semibold px-7 py-4 rounded-xl shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all">
            {primaryLabel}
          </Link>
          <a href={secondaryHref} className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl transition-all">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
