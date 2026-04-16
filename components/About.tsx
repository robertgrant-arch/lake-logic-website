import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <div className="relative reveal-left">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                                          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                                          alt="Beautiful serene lake with green shoreline and clear water"
                            unoptimized
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-water-500/10 border border-water-400/20" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-water-500/15 border border-water-400/25" />
          </div>

          {/* Content column */}
          <div className="reveal-right">
            <div className="section-line mb-5" />
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-700 leading-tight mb-6">
              A New Standard in Pond &amp; Lake Management
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Lake Logic was born from a deep love of the water. What began as decades of hands-on work in fish
                farming and trophy fisheries management evolved into something much larger — a full-spectrum approach
                to waterbody care that serves private estates, HOA communities, golf courses, commercial properties,
                and conservation lands across the Kansas City region.
              </p>
              <p>
                We recognized early on that a healthy waterbody is more than just clear water. It's a balanced
                ecosystem — one where nutrient cycles, aquatic vegetation, fish populations, and shoreline integrity
                all work in harmony. Too often, property owners are sold reactive treatments that address symptoms
                without tackling root causes.
              </p>
              <p>
                We do things differently. Every client engagement begins with a thorough assessment of your
                waterbody's unique biology, hydrology, and goals. From that foundation, we build tailored management
                plans that blend proven science with practical, lasting solutions. No cookie-cutter programs.
                No unnecessary treatments. Just transparent, results-driven stewardship.
              </p>
            </div>

            {/* Values chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Science-Backed Methods',
                'Transparent Reporting',
                'Long-Term Stewardship',
                'Licensed & Insured',
                'Local Expertise',
              ].map((val) => (
                <span
                  key={val}
                  className="inline-flex items-center gap-1.5 bg-slate-light border border-slate-200 text-navy-700 text-sm font-medium px-3.5 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-water-500" />
                  {val}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200"
              >
                Talk to an Expert
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="tel:8168101081" className="text-navy-700 font-semibold text-sm hover:text-water-600 transition-colors">
                (816) 810-1081
              </a>
            </div>
          </div>
        </div>

        {/* Bottom secondary image strip */}
        <div className="mt-20 grid grid-cols-3 gap-4 reveal">
          {[
            {
                            src: 'https://lh3.googleusercontent.com/d/1QWNnknpX71zwPjNEA29-5pZZGmPGGX9v=s800',
                            alt: 'Picturesque summer lake with calm shoreline',
              caption: 'Natural Ecosystem Balance',
            },
            {
                            src: 'https://lh3.googleusercontent.com/d/1x1uLnh5KHmswlq5z_DcsF2ZIaHmMdWYT=s800',
                            alt: 'Fountain in pond at sunset',
              caption: 'Water Clarity Restoration',
            },
            {
                            src: 'https://lh3.googleusercontent.com/d/1V6sKODdicK2VenFjdPLVE4cULAACWwal=s800',
                            alt: 'Cattails by the lake water',
              caption: 'Shoreline Stewardship',
            },
          ].map((img) => (
            <div key={img.alt} className="relative rounded-xl overflow-hidden aspect-video group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                                  unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
