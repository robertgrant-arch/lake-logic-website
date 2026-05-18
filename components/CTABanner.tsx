'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || 'GOOGLE_APPS_SCRIPT_URL_PLACEHOLDER';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function CTABanner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    issue: '',
    company: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): Record<string, string> => {
    const errs: Record<string, string> = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedIssue = formData.issue.trim();

    if (!trimmedName) errs.name = 'Name is required.';
    if (!trimmedEmail) errs.email = 'Email is required.';
    else if (!validateEmail(trimmedEmail)) errs.email = 'Please enter a valid email address.';
    if (!trimmedIssue) errs.issue = 'Please describe your pond or lake.';

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.company) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    const payload = {
      source: 'lake-logic-website',
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.location.trim(),
      message: formData.issue.trim(),
      company: formData.company,
    };

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', location: '', issue: '', company: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none transition-colors ${
      errors[field] ? 'border-red-400 focus:border-red-300' : 'border-white/20 focus:border-water-400'
    }`;

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=2070&q=80"
          alt="Calm lake at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/92 via-navy-800/85 to-navy-900/92" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Contact Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Ready for Cleaner, Healthier Water?
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Schedule your free, no-obligation site assessment today. We&apos;ll evaluate your
              waterbody and show you exactly what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:8168101081"
                className="flex items-center gap-2 bg-white text-navy-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (816) 810-1081
              </a>
              <a
                href="mailto:info@lake-logic.com"
                className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@lake-logic.com
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/70 mb-6">We&apos;ll be in touch within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-water-300 hover:text-water-200 text-sm font-semibold transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="text-xl font-bold text-white mb-2">Request a Free Consultation</h3>

                {status === 'error' && (
                  <div className="bg-red-500/15 border border-red-400/30 rounded-lg px-4 py-3">
                    <p className="text-red-200 text-sm">
                      Something went wrong. Please try again or call us at (816) 810-1081.
                    </p>
                  </div>
                )}

                {/* Honeypot */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                  />
                  <input
                    name="location"
                    placeholder="City / Area"
                    value={formData.location}
                    onChange={handleChange}
                    className={inputClass('location')}
                  />
                </div>
                <div>
                  <textarea
                    name="issue"
                    placeholder="Tell us about your pond or lake... *"
                    rows={4}
                    value={formData.issue}
                    onChange={handleChange}
                    className={`${inputClass('issue')} resize-none`}
                  />
                  {errors.issue && <p className="text-red-300 text-xs mt-1">{errors.issue}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-water-500 hover:bg-water-400 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-water-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Request a Callback'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
