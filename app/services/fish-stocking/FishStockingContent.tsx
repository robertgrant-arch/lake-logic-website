'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BottomCTA from '@/components/BottomCTA';
import ScrollReveal from '@/components/ScrollReveal';
import { STOCKING_SPECIES, STOCKING_PROCESS_STEPS, type StockingSpecies } from '@/lib/content/fish-stocking';

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All Species',
  gamefish: 'Gamefish',
  panfish: 'Panfish & Sportfish',
  forage: 'Forage Species',
  specialty: 'Specialty & Biological Control',
};

const CATEGORY_ORDER = ['all', 'gamefish', 'panfish', 'forage', 'specialty'] as const;

function SpeciesCard({ species }: { species: StockingSpecies }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-lift bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div className="h-1.5 bg-gradient-to-r from-water-500 to-water-300" />

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block self-start text-water-600 text-[0.65rem] font-bold tracking-widest uppercase mb-3">
          {CATEGORY_LABELS[species.category] ?? species.category}
        </span>

        <h3 className="font-display font-bold text-xl text-navy-700 mb-3 leading-tight">
          {species.name}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
          {species.description}
        </p>

        <div className="space-y-2.5 mb-4">
          <MetaRow label="Best For" value={species.bestFor} />
          <MetaRow label="Use Case" value={species.commonUseCase} />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-water-600 text-sm font-semibold hover:text-water-700 transition-colors mt-auto"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Management Note
        </button>

        <div
          className={`overflow-hidden transition-all duration-400 ease-out ${
            open ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-slate-light rounded-lg p-3.5 border-l-[3px] border-water-400">
            <p className="text-slate-600 text-xs leading-relaxed">{species.managementNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-navy-700 text-xs font-semibold tracking-wide uppercase whitespace-nowrap pt-0.5">
        {label}:
      </span>
      <span className="text-slate-500 text-xs leading-relaxed">{value}</span>
    </div>
  );
}

function ProcessStep({ step, index }: { step: (typeof STOCKING_PROCESS_STEPS)[number]; index: number }) {
  return (
    <div className={`reveal delay-${(index % 5) * 100 + 100} flex gap-5`}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-water-500 flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
          {step.number}
        </div>
      </div>
      <div className="pt-1">
        <h3 className="font-display font-bold text-lg text-navy-700 mb-2">{step.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export default function FishStockingContent() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? STOCKING_SPECIES
      : STOCKING_SPECIES.filter((s) => s.category === activeCategory);

  return (
    <>
      <Nav />
      <ScrollReveal />

      <PageHero
        eyebrow="Stocking Species Guide"
        title="Fish Stocking Options"
        subtitle="Strategic species selection built around your waterbody, your goals, and the data. No generic formulas. No one-size-fits-all programs."
        image="https://images.unsplash.com/photo-1516767254076-ea25be49f6d4?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Professional fish stocking in a managed Kansas pond"
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Fisheries & Stocking', href: '/services/fisheries-management' },
          { label: 'Stocking Guide' },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 reveal">
          <div className="section-line mb-6" />
          <p className="text-slate-500 text-lg leading-relaxed mb-5">
            Fish stocking is not a catalog order. Every waterbody has a unique combination of depth, substrate, water chemistry, existing vegetation, forage availability, and fish population dynamics that determines which species belong — and which do not.
          </p>
          <p className="text-slate-500 text-lg leading-relaxed mb-5">
            Lake Logic develops stocking recommendations from site-specific data: water quality testing, habitat assessment, electrofishing surveys, and a clear understanding of the owner's goals. Whether the objective is trophy largemouth bass, a balanced panfish community, forage restoration, aquatic vegetation control, or a complete fishery rebuild, the stocking plan is designed to support that outcome — not fill a pond with fish and hope for the best.
          </p>
          <p className="text-slate-500 text-base leading-relaxed">
            Below are the species we most commonly work with across Kansas and Missouri. Each plays a specific role in a managed fishery. Which species — and how many — belong in your pond depends entirely on what the assessment tells us.
          </p>
        </div>
      </section>

      {/* Species Grid */}
      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal">
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Species Reference
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-700 leading-tight mb-4">
              15 Species. One Guiding Principle.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Every species listed here serves a defined management role. Selection is always based on assessment findings, not preference alone.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
            {CATEGORY_ORDER.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-water-500 text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)]'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-water-300 hover:text-water-600'
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((species) => (
              <SpeciesCard key={species.slug} species={species} />
            ))}
          </div>
        </div>
      </section>

      {/* How Lake Logic Recommends Stocking Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <div className="section-line mx-auto mb-5" />
            <p className="text-water-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-700 leading-tight mb-4">
              How Lake Logic Recommends Stocking Plans
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              We do not stock fish based on acreage alone. Every recommendation follows the same assessment-driven process that guides all Lake Logic services — because stocking the wrong species, in the wrong quantities, at the wrong time is worse than not stocking at all.
            </p>
          </div>

          <div className="space-y-8">
            {STOCKING_PROCESS_STEPS.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>

          <div className="callout mt-14 reveal">
            <div className="callout-title">Assessment First. Always.</div>
            <p className="!mb-0 text-sm leading-relaxed">
              Stocking recommendations are included in every Lake Logic fisheries management plan at no additional consulting fee. The site assessment and water quality analysis that inform the plan are available at no cost. Start with the data — the stocking strategy follows.
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-10 bg-slate-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            This guide is part of Lake Logic&apos;s full-service fisheries management program.
          </p>
          <Link
            href="/services/fisheries-management"
            className="inline-flex items-center gap-2 text-water-600 font-semibold text-sm hover:text-water-700 transition-colors"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Fisheries Management &amp; Stocking
          </Link>
        </div>
      </section>

      <BottomCTA
        title="Ready to Build a Stocking Plan?"
        subtitle="Schedule a free site assessment. We will evaluate your waterbody, review your goals, and deliver a custom stocking recommendation grounded in data."
        primaryLabel="Schedule Free Assessment"
        primaryHref="/#contact"
      />

      <Footer />
    </>
  );
}
