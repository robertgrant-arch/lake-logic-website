import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'pond-lake',
    href: '/services/pond-lake-management',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M4 28c4-8 8-4 12-8s8-4 12 0 4 8 8 0" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 34c4-8 8-4 12-8s8-4 12 0 4 8 8 0" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="14" r="6" fill="#3B82F6" fillOpacity="0.15" stroke="#3B82F6" strokeWidth="2" />
        <path d="M20 10v4l2 2" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Pond & Lake\nManagement',
    tagline: 'Comprehensive waterbody health from the surface to the sediment.',
    image: 'https://lh3.googleusercontent.com/d/1QWNnknpX71zwPjNEA29-5pZZGmPGGX9v=s800',
    imageAlt: 'Healthy clear pond with natural shoreline',
    bullets: [
      'Algae & Aquatic Weed Control',
      'Nutrient Remediation & Load Reduction',
      'Invasive Species Identification & Control',
      'Shoreline Erosion Management',
      'Water Clarification Treatments',
      'Water Quality Testing & Restoration',
      'Bathymetric Lake Mapping',
    ],
    color: 'from-blue-600 to-blue-500',
    accent: '#3B82F6',
  },
  {
    id: 'fisheries',
    href: '/services/fisheries-management',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M8 20c4-6 8-8 14-6 4 1.5 8 6 14 6-6 0-10 4.5-14 6-6 2-10 0-14-6z" stroke="#3B82F6" strokeWidth="2.5" fill="#3B82F6" fillOpacity="0.12" />
        <circle cx="28" cy="20" r="2" fill="#3B82F6" />
        <path d="M34 16l4-4M34 24l4 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 20c-2 0-4-2-4-4s2-4 4-4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Fisheries\nManagement',
    tagline: 'Build trophy-class fisheries with data-driven science and stocking strategy.',
    image: 'https://lh3.googleusercontent.com/d/1uTO4jvn5MFcTvSgnzEhqbZFJU3hFMvNs=s800',
    imageAlt: 'Fishing on a managed lake at sunrise',
    bullets: [
      'Electrofishing Population Surveys',
      'Custom Fishery Management Plans',
      'Automated Fish Feeders & Programs',
      'Strategic Fish Stocking',
      'Habitat Installation & Enhancement',
      'Fish Structure Consultation',
      'Predator/Prey Ratio Balancing',
    ],
    color: 'from-teal-600 to-blue-500',
    accent: '#0D9488',
  },
  {
    id: 'aeration',
    href: '/services/fountains-aeration',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M20 32V20M20 20c0 0-6-6-6-12s12-12 12-12" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 20c0 0 6-6 6-12" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 36c2-2 5-3 8-3s6 1 8 3" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M8 28l3-3M32 28l-3-3" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Fountain & Aeration\nSolutions',
    tagline: 'Elevate your waterbody aesthetically and biologically with premium aeration.',
    image: 'https://lh3.googleusercontent.com/d/1x1uLnh5KHmswlq5z_DcsF2ZIaHmMdWYT=s800',
    imageAlt: 'Beautiful decorative fountain in a lake',
    bullets: [
      'Custom Design & Professional Installation',
      'Ongoing Maintenance Programs',
      'Decorative Display Fountains',
      'Surface Aerators & Circulators',
      'Subsurface Diffused Aeration Systems',
      'Seasonal Winterization & Startup',
      'Lighting Integration',
    ],
    color: 'from-indigo-600 to-blue-500',
    accent: '#4F46E5',
  },
  {
    id: 'annual',
    href: '/services/pond-lake-management',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="6" y="8" width="28" height="26" rx="4" stroke="#3B82F6" strokeWidth="2.5" fill="#3B82F6" fillOpacity="0.08" />
        <path d="M6 16h28" stroke="#3B82F6" strokeWidth="2" />
        <rect x="13" y="5" width="3" height="6" rx="1.5" fill="#3B82F6" />
        <rect x="24" y="5" width="3" height="6" rx="1.5" fill="#3B82F6" />
        <path d="M13 23l3 3 7-7" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Annual Management\nPrograms',
    tagline: 'Year-round peace of mind with structured care programs built for every need.',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Professional managed lake with crystal clear water and natural shoreline',
    bullets: [
      'Essential Care Program — Foundational annual maintenance',
      'Premier Pond Program — Enhanced bi-monthly service',
      'Elite Fishery Master Plan — Full fishery & water management',
      'EcoRestore Program — Ecological restoration focus',
      'Seasonal Inspection & Reporting',
      'Priority Scheduling & Emergency Response',
      'Annual Water Quality Analytics Report',
    ],
    color: 'from-sky-600 to-blue-500',
    accent: '#0284C7',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="section-line mx-auto mb-5" />
          <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-700 leading-tight mb-5">
            Full-Spectrum Aquatic Services
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From single treatment visits to year-round management programs, Lake Logic delivers every service
            your waterbody needs — handled by licensed professionals who care deeply about long-term results.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`card-lift bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 reveal delay-${(i % 4) * 100 + 100}`}
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover" unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              {/* Card content */}
              <div className="p-7">
                <h3 className="font-display font-bold text-2xl text-navy-700 leading-tight mb-2 whitespace-pre-line">
                  {service.label}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.tagline}</p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-water-200 to-transparent mb-5" />

                {/* Bullet list */}
                <ul className="space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.accent, marginTop: '7px' }}
                      />
                      <span className="text-slate-600 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                    style={{ color: service.accent }}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-slate-500 hover:text-navy-700 transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center reveal">
          <p className="text-slate-500 text-sm mb-5">
            Not sure which service you need?{' '}
            <a href="tel:8168101081" className="text-water-600 font-semibold hover:underline">
              Call us at (816) 810-1081
            </a>{' '}
            — we'll assess your waterbody at no charge.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
