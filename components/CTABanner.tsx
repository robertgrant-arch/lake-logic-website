import Image from 'next/image';

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/92 via-navy-800/85 to-navy-900/92" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">Ready for Cleaner, Healthier Water?</h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">Schedule your free, no-obligation site assessment today. We'll evaluate your waterbody and show you exactly what's possible.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:8168101081" className="flex items-center gap-2 bg-white text-navy-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-slate-100 transition-colors">📞 (816) 810-1081</a>
          <a href="mailto:info@lakelogickc.com" className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">✉️ info@lakelogickc.com</a>
        </div>
      </div>
    </section>
  );
}
