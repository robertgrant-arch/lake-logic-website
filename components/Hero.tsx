import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=85"
          alt="Pristine mountain lake with clear water"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-700/75 via-navy-700/60 to-navy-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 via-transparent to-navy-900/20" />
        {/* Noise texture */}
        <div className="noise-overlay" />
      </div>

      {/* Floating water shimmer at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 60 C240 100 480 20 720 60 C960 100 1200 20 1440 60 L1440 120 L0 120 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
          style={{ animation: 'fadeUp 0.6s ease-out 0.1s both' }}
        >
          <span className="w-2 h-2 rounded-full bg-water-400 animate-pulse" />
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
            Kansas City's Premier Lake Management Experts
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{ animation: 'fadeUp 0.7s ease-out 0.2s both' }}
        >
          Cleaner Water.
          <br />
          <span className="gradient-text">Healthier Ecosystems.</span>
          <br />
          Better Experiences.
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body font-300"
          style={{ animation: 'fadeUp 0.7s ease-out 0.35s both' }}
        >
          Lake Logic delivers science-backed pond and lake management solutions across the Kansas City metro —
          from crystal-clear water quality to thriving fisheries and stunning aeration features.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeUp 0.7s ease-out 0.5s both' }}
        >
          <a
            href="#contact"
            className="btn-primary group flex items-center gap-2.5 bg-water-500 hover:bg-water-600 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-[0_8px_32px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Free Consultation
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="tel:8168101081"
            className="group flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-300"
          >
            <svg className="w-5 h-5 text-water-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (816) 810-1081
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{ animation: 'fadeUp 0.7s ease-out 0.7s both' }}
        >
          <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
          <div className="float-anim w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 bg-white/50 rounded-full" style={{ animation: 'float 1.8s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="absolute bottom-20 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="flex items-center justify-center gap-8"
            style={{ animation: 'fadeUp 0.7s ease-out 0.8s both' }}
          >
            {[
              { icon: '🏆', label: '20+ Years Experience' },
              { icon: '💧', label: 'Water Quality Experts' },
              { icon: '🐟', label: 'Fisheries Certified' },
              { icon: '📍', label: 'Kansas City Based' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/70">
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
