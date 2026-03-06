
export default function ShowroomAtelier() {
  return (
    <section id="showroom" className="relative overflow-hidden bg-[#1a1612]">
      {/* Full-bleed image */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] lg:h-[85vh] lg:min-h-[600px] overflow-hidden">
        <img
          src="/images/d3beae67ebfd.webp"
          alt="Showroom Casa de Bijuterii Știrbei"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-[#1a1612]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/60 via-transparent to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="px-5 sm:px-8 lg:px-24 pb-10 sm:pb-16 lg:pb-20 max-w-3xl">
            <div className="flex items-center space-x-4 mb-5 sm:mb-6">
              <div className="w-8 h-px bg-[#b49650]" />
              <span className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium">
                Calea Victoriei 21–23
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-4 sm:mb-6">
              Showroom și atelier<br />
              <span className="italic font-normal text-[#d4af6a]">în centrul</span><br />
              Bucureștiului
            </h2>
            <p className="font-inter text-white/65 text-base sm:text-lg leading-relaxed font-light max-w-xl">
              Spațiu real pentru discuții așezate și tranzacții sigure.
              La cerere, consultarea poate fi făcută în mod privat, într-un cadru discret, departe de priviri.
            </p>
          </div>
        </div>

        {/* Right side detail card — desktop only */}
        <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="bg-[#faf8f5]/95 backdrop-blur-sm p-8 w-72 border-t-2 border-[#b49650]">
            <p className="font-inter text-[#b49650] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
              Locație
            </p>
            <div className="space-y-4">
              {[
                { icon: 'ri-map-pin-2-line', text: 'Calea Victoriei 21–23\nCasa de Modă Venus, parter' },
                { icon: 'ri-phone-line', text: '0766 466 102' },
                { icon: 'ri-building-2-line', text: 'Lângă Raiffeisen Bank' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-sm text-[#b49650]`} />
                  </div>
                  <p className="font-inter text-[#3a3228] text-sm leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 w-full flex items-center justify-center space-x-2 bg-[#b49650] text-white py-3 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9a7d3e] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              <span>Programează</span>
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile location card */}
      <div className="lg:hidden bg-[#faf8f5] px-5 sm:px-8 py-8">
        <p className="font-inter text-[#b49650] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
          Locație
        </p>
        <div className="space-y-4 mb-6">
          {[
            { icon: 'ri-map-pin-2-line', text: 'Calea Victoriei 21–23, Casa de Modă Venus, parter' },
            { icon: 'ri-phone-line', text: '0766 466 102' },
            { icon: 'ri-building-2-line', text: 'Lângă Raiffeisen Bank' },
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className={`${item.icon} text-sm text-[#b49650]`} />
              </div>
              <p className="font-inter text-[#3a3228] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center space-x-2 bg-[#b49650] text-white px-6 py-3 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9a7d3e] transition-colors duration-300 cursor-pointer whitespace-nowrap w-full"
        >
          <span>Programează</span>
          <i className="ri-arrow-right-line" />
        </a>
      </div>
    </section>
  );
}
