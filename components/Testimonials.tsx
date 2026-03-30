import Image from 'next/image';

const testimonials = [
  {
    name: 'Robert & Linda Harmon',
    role: 'Private Estate — Leawood, KS',
    stars: 5,
    quote:
      "We've had our 2-acre pond for over 15 years and struggled with algae blooms every summer. After one season with Lake Logic's Premier Pond Program, the water is clearer than it's ever been. The team is knowledgeable, punctual, and genuinely passionate about what they do. We can finally enjoy our pond the way we always hoped.",
    avatar: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=100&q=75',
    highlight: 'Clearest water in 15 years',
  },
  {
    name: 'Tanglewood HOA',
    role: 'Homeowners Association — Overland Park, KS',
    stars: 5,
    quote:
      "Lake Logic manages three community ponds for our 300-home development. They handle everything — aeration, algae treatments, fish stocking, and quarterly reports to our board. Our residents constantly compliment how beautiful the ponds look. We've renewed our contract three years running and couldn't imagine working with anyone else.",
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=75',
    highlight: '3 years, zero complaints',
  },
  {
    name: 'Dave Westfield',
    role: 'Cattle Ranch Owner — Louisburg, MO',
    stars: 5,
    quote:
      "I called Lake Logic because my 10-acre lake was turning into a green mess and the fish population had crashed. Within six months of their EcoRestore program, we had measurable improvement in water clarity and they restocked with largemouth and channel catfish. Last summer was the best fishing we've had in a decade. Incredible ROI.",
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=75',
    highlight: 'Best fishing in a decade',
  },
  {
    name: 'Sunridge Golf & Country Club',
    role: 'Commercial Property — Blue Springs, MO',
    stars: 5,
    quote:
      "The water features on our course are a huge part of the playing experience. Lake Logic installed and now maintains three decorative fountains and manages our four course ponds under an annual program. They handle winterization, spring startup, and any issues that come up — always professionally and without disrupting play. Highly recommended.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=75',
    highlight: 'Serving all 4 course ponds',
  },
  {
    name: 'Jennifer & Mark Caulfield',
    role: 'Residential Property — Shawnee, KS',
    stars: 5,
    quote:
      "We inherited a pond with our new property and had no idea how to manage it. Lake Logic walked us through everything, tested the water, installed a subsurface aeration system, and set us up with an Essential Care Program. The transformation has been remarkable. And their team actually explains what they're doing — we feel educated, not just serviced.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=75',
    highlight: 'From confused to confident',
  },
  {
    name: 'Heartland Conservation District',
    role: 'Conservation Organization — Johnson County, KS',
    stars: 5,
    quote:
      "Lake Logic has been an outstanding partner for our wetland restoration projects. Their expertise in native plant establishment, invasive species removal, and aquatic habitat enhancement is genuinely impressive. They understand the ecological nuances that general contractors simply don't. We trust them completely with our conservation-sensitive properties.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=75',
    highlight: 'Conservation-grade expertise',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="section-line mx-auto mb-5" />
          <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-700 leading-tight mb-5">
            Trusted by Property Owners Across Kansas City
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From private estates and HOA communities to golf courses and conservation lands — see what our clients
            have to say about working with Lake Logic.
          </p>
        </div>

        {/* Review aggregate */}
        <div className="flex items-center justify-center gap-4 mb-12 reveal">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-display font-bold text-2xl text-navy-700">5.0</span>
          <span className="text-slate-400 text-sm">— 40+ verified reviews across Google & Facebook</span>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-lift bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col reveal delay-${(i % 3) * 100 + 100}`}
            >
              {/* Quote mark */}
              <div className="text-water-200 font-display text-6xl leading-none mb-2 select-none">"</div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 bg-water-50 border border-water-100 rounded-full px-3 py-1 mb-4 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-water-500" />
                <span className="text-water-600 text-xs font-semibold">{t.highlight}</span>
              </div>

              {/* Quote text */}
              <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                {t.quote}
              </blockquote>

              {/* Author */}
              <div className="border-t border-slate-100 pt-5 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-slate-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-navy-700 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs truncate">{t.role}</div>
                </div>
                <StarRating count={t.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Google review CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-slate-500 text-sm mb-4">
            Have you worked with us? We'd love to hear about your experience.
          </p>
          <a
            href="https://g.page/r"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-water-300 text-slate-700 hover:text-water-600 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
