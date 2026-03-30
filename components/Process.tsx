const steps = [
  {
    number: '01',
    title: 'Free Site Assessment',
    description:
      'We start with a no-cost, no-obligation visit to your property. Our specialist conducts a visual inspection of your waterbody, shoreline, and surroundings — asking the right questions about your goals, challenges, and history.',
    details: ['Physical waterbody inspection', 'Goal discovery conversation', 'Preliminary issue identification', 'Photo documentation'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Water Quality Analysis',
    description:
      'We collect water and sediment samples for laboratory analysis. This data tells us your pond\'s true biological story — nutrient loads, dissolved oxygen levels, pH, turbidity, and more — forming the scientific foundation of your management plan.',
    details: ['On-site water sampling', 'Lab nutrient & chemistry analysis', 'Dissolved oxygen profiling', 'Sediment assessment'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Custom Management Plan',
    description:
      'Based on your assessment and analysis, we craft a tailored management plan with clear objectives, recommended treatments, scheduled service visits, and transparent pricing. You\'ll know exactly what we\'re doing and why.',
    details: ['Written management proposal', 'Treatment schedule & calendar', 'Transparent cost breakdown', 'Outcome benchmarks & goals'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ongoing Service & Reporting',
    description:
      'We execute your plan on schedule, document every visit, and report results clearly. As seasons change and conditions evolve, we adapt your program proactively — so your waterbody stays healthy year-round without you having to manage the details.',
    details: ['Scheduled professional treatments', 'Post-visit digital service reports', 'Seasonal water quality tracking', 'Annual performance reviews'],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="section-line mx-auto mb-5" />
          <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-700 leading-tight mb-5">
            Simple, Transparent, Effective
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From first contact to long-term stewardship, our process is built to earn your trust at every step.
            No guesswork. No upsells. Just clear communication and proven results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-water-200 via-water-400 to-water-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className={`relative reveal delay-${i * 100 + 100}`}>
                {/* Step number circle */}
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-water-500 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] mb-4 relative z-10">
                    {step.icon}
                  </div>
                  <span className="font-display font-bold text-water-200 text-5xl absolute top-0 right-4 opacity-40 select-none pointer-events-none hidden lg:block">
                    {step.number}
                  </span>
                </div>

                <div className="lg:mt-0">
                  <div className="text-water-500 text-xs font-bold tracking-widest uppercase mb-1">
                    Step {step.number}
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-700 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{step.description}</p>

                  <ul className="space-y-1.5">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-slate-600 text-xs">
                        <svg className="w-3.5 h-3.5 text-water-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA panel */}
        <div className="mt-16 bg-slate-light rounded-2xl border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 reveal">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy-700 mb-2">
              Ready to get started?
            </h3>
            <p className="text-slate-500 text-base">
              Step 1 is free. Schedule your no-obligation site assessment today and see what's really going on with your water.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="btn-primary bg-water-500 hover:bg-water-600 text-white font-semibold px-7 py-3.5 rounded-xl text-center transition-colors whitespace-nowrap"
            >
              Schedule Assessment
            </a>
            <a
              href="tel:8168101081"
              className="flex items-center justify-center gap-2 border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (816) 810-1081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
