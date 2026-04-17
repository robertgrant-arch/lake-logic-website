'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const servicesLinks = [
  { label: 'Pond & Lake Management', href: '/services/pond-lake-management' },
  { label: 'Algae & Aquatic Weed Control', href: '/services/algae-weed-control' },
  { label: 'Fountains & Aeration', href: '/services/fountains-aeration' },
  { label: 'Fisheries Management & Stocking', href: '/services/fisheries-management' },
  { label: 'Shoreline & Dredging', href: '/services/shoreline-dredging' },
  { label: 'Stormwater & Commercial', href: '/services/stormwater-commercial' },
];

const industriesLinks = [
  { label: 'HOA & Community Ponds', href: '/industries/hoa' },
  { label: 'Golf Course Ponds', href: '/industries/golf-course' },
  { label: 'Private Estate Lakes', href: '/industries/private-estate' },
  { label: 'Municipal & Stormwater', href: '/industries/municipal' },
];

const mainLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | 'services' | 'industries'>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileLink = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-700/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.18)]'
          : 'bg-navy-700/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-bold text-white tracking-tight">
              <span className="text-water-400">Lake</span> Logic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1">
                Services
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                    {servicesLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-5 py-2.5 text-sm text-navy-700 hover:bg-slate-light hover:text-water-600 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('industries')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-1">
                Industries
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'industries' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                    {industriesLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-5 py-2.5 text-sm text-navy-700 hover:bg-slate-light hover:text-water-600 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8168101081"
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (816) 810-1081
            </a>
            <Link
              href="/#contact"
              className="bg-water-500 hover:bg-water-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-water-500/25 hover:shadow-water-400/30"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        } bg-navy-700/98 backdrop-blur-lg`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          <div className="py-2 border-b border-white/10">
            <div className="text-water-400 text-xs font-semibold uppercase tracking-wider mb-2">Services</div>
            {servicesLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={handleMobileLink} className="block py-2 text-white/80 hover:text-white text-sm">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="py-2 border-b border-white/10">
            <div className="text-water-400 text-xs font-semibold uppercase tracking-wider mb-2">Industries</div>
            {industriesLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={handleMobileLink} className="block py-2 text-white/80 hover:text-white text-sm">
                {l.label}
              </Link>
            ))}
          </div>
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleMobileLink}
              className="text-white/80 hover:text-white py-3 text-base font-medium border-b border-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-4 flex flex-col gap-3">
          <a href="tel:8168101081" className="text-white/90 hover:text-white text-center py-2 font-medium">
            (816) 810-1081
          </a>
          <Link
            href="/#contact"
            onClick={handleMobileLink}
            className="bg-water-500 hover:bg-water-400 text-white text-center font-semibold py-3 rounded-full transition-all shadow-lg"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
