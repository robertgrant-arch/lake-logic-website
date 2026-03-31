import Image from 'next/image';

const galleryImages = [
  {
    src: 'https://lh3.googleusercontent.com/d/1uTO4jvn5MFcTvSgnzEhqbZFJU3hFMvNs=s600',
    alt: 'Trophy largemouth bass caught during fisheries management',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1MqwefxoSUqa6fjn-6sb0CHDtzDbKBS_F=s600',
    alt: 'Lake Logic team member with trophy catch',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1ee3jxYGc9DIlPV7_QzHClF_RwGksViiK=s600',
    alt: 'Largemouth bass from managed fishery',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1mxflREx6GnrhV_HhvLgAi3vIgPJhRUwU=s600',
    alt: 'Trophy bass from Lake Logic managed pond',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1flToJB2jFA8nRl5RBpSxCFy60v6WU8v3=s600',
    alt: 'Healthy fish from professionally managed lake',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1t5v99h59vM_J8fG1Xirkckodsa-MGGNm=s600',
    alt: 'Fish stocking and harvest management',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="section-line mx-auto mb-5" />
          <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Results in Action
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-700 leading-tight mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            From trophy-class bass to crystal-clear water, see the results of Lake Logic's science-backed management programs across Kansas City properties.
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">Real testimonials from Lake Logic clients coming soon.</p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-3 text-sm font-medium text-navy-700 hover:bg-slate-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
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
