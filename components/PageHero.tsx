import Image from 'next/image';
import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy-700">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-700/80 via-navy-700/70 to-navy-900/90" />
        </div>
      )}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-xs text-white/60 mb-5" aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-white/30">/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-water-300 font-semibold text-xs tracking-widest uppercase mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
