import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Lake background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2070&q=80"
          alt="Peaceful lake at dusk"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/95 to-navy-900/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl mb-4">
              <span className="text-water-400">Lake</span> Logic
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">Professional pond and lake management across the Kansas City metro. Cleaner water. Healthier ecosystems. Better experiences.</p>
            <a href="tel:8168101081" className="text-water-400 font-bold text-lg">(816) 810-1081</a>
            <br />
            <a href="mailto:info@lake-logic.com" className="text-water-400/80 text-sm hover:text-water-400 transition-colors">info@lake-logic.com</a>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Services</div>
            <ul className="space-y-2 text-white/50 text-sm">
              {['Pond & Lake Management','Fisheries Management','Fountain & Aeration','Annual Programs'].map(s=><li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wider">Service Areas</div>
            <ul className="space-y-2 text-white/50 text-sm">
              {['Johnson County, KS','Jackson County, MO','Wyandotte County, KS','Cass County, MO','Clay County, MO','Platte County, MO'].map(a=><li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Lake Logic. All rights reserved. Licensed & Insured.</p>
          <p>Serving the Kansas City Metropolitan Area</p>
        </div>
      </div>
    </footer>
  );
}
