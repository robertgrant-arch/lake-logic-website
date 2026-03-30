'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How do I know if my pond or lake needs professional management?',
    a: 'There are several common warning signs: persistent green, blue-green, or brown algae blooms; murky or foul-smelling water; dying fish or a decline in fishing quality; excessive aquatic weed growth around the shoreline or across the surface; eroding banks; or simply water that looks unhealthy. If you\'re noticing any of these issues — or if you\'ve never had your water tested — it\'s time for a professional assessment. The good news: we offer free site visits so you have nothing to lose.',
  },
  {
    q: 'Are your treatments safe for fish, wildlife, pets, and swimming?',
    a: 'Yes. All treatments we apply are EPA-registered for aquatic use and are selected specifically to minimize any impact on non-target species. We\'ll always provide clear re-entry timelines after any application — typically 24-48 hours for swimming, and usually no waiting period is needed for fish and wildlife. We also document every product used and leave material safety information after each visit. Your safety and the health of your ecosystem are our top priorities.',
  },
  {
    q: 'What does an annual management program typically cost?',
    a: 'Pricing depends on the size of your waterbody, service frequency, and specific treatments included. Our Essential Care Program for a typical residential pond starts around $150-250/month; more comprehensive programs for larger lakes range higher. We believe in complete pricing transparency — you\'ll receive a detailed written proposal before committing to anything. Many clients find that an annual program costs significantly less than reactive emergency treatments, while delivering far better long-term results.',
  },
  {
    q: 'How long before I see results?',
    a: 'Some improvements — like water clarity from a clarification treatment — are visible within days. Algae and weed control applications typically show results within 1-3 weeks. Ecosystem-level improvements (nutrient reduction, sediment restoration, fishery balance) operate on seasonal timescales — you\'ll see meaningful progress through one season, with dramatic improvement typically by year two. We set realistic expectations upfront and share data at every stage so you can see the trajectory.',
  },
  {
    q: 'Do you offer one-time treatments or only annual programs?',
    a: 'We offer both. Many property owners start with a one-time treatment to address an immediate problem — an algae bloom, a weed overgrowth — and then transition to an annual program once they see the value of proactive management. We never pressure annual contracts. That said, we\'re honest: one-time treatments address symptoms, while annual programs address causes. We\'ll explain the difference clearly so you can make the right choice for your situation.',
  },
  {
    q: 'What areas do you service?',
    a: 'Lake Logic is based in the Kansas City metro and serves properties throughout the greater KC area, including Johnson County and Wyandotte County in Kansas, and Jackson, Cass, Clay, and Platte Counties in Missouri. We also travel for larger lake and reservoir projects — contact us to discuss your specific location.',
  },
  {
    q: 'What is electrofishing and why is it important for fishery management?',
    a: 'Electrofishing is a safe, scientific survey technique in which we temporarily stun fish using low-voltage electrical current, allowing us to collect, measure, weigh, and count fish before releasing them unharmed within seconds. This gives us precise data on fish species composition, population density, size structure, and predator/prey ratios — information that\'s impossible to estimate accurately any other way. This data is the foundation of every custom fishery management plan we create.',
  },
  {
    q: 'Can you help with a pond that was built incorrectly or has structural issues?',
    a: 'We can assess water quality and biological management challenges in most situations, and we work with trusted civil engineering and excavation partners for structural pond issues like dam integrity, inlet/outlet design, or significant shoreline failure. During your free site assessment, we\'ll identify both biological and structural concerns and help connect you with the right specialists if the problem is outside our direct scope.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-navy-700 text-base leading-snug pr-2">{q}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-water-300 flex items-center justify-center text-water-500 transition-transform duration-300 ${
            open ? 'rotate-45 bg-water-500 border-water-500 text-white' : ''
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-32 reveal-left">
            <div className="section-line mb-5" />
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-700 leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              We believe informed clients make better decisions. Here are answers to the questions we hear most often.
            </p>
            <div className="bg-slate-light rounded-2xl border border-slate-200 p-6">
              <p className="text-slate-500 text-sm mb-3 font-medium">Have a question not answered here?</p>
              <a
                href="tel:8168101081"
                className="flex items-center gap-2 text-navy-700 font-bold text-lg hover:text-water-600 transition-colors"
              >
                <svg className="w-5 h-5 text-water-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (816) 810-1081
              </a>
              <p className="text-slate-400 text-xs mt-1">Mon–Fri, 7am–6pm CT</p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-block bg-navy-700 hover:bg-navy-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors w-full text-center"
                >
                  Request a Callback
                </a>
              </div>
            </div>
          </div>

          {/* Right column - accordion */}
          <div className="space-y-3 reveal-right">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
