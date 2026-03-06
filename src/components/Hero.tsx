
import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [titleRef.current, subtitleRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0e0c09]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/images/3150003634f7.webp')`
        }}
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Gold vertical accent line */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#b49650]/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-24 pb-16 sm:pb-20 lg:pb-24 pt-32 sm:pt-36 lg:pt-40">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center space-x-4 mb-6 sm:mb-8">
            <div className="w-8 h-px bg-[#b49650]" />
            <span className="font-inter text-[#b49650] text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase font-medium">
              Calea Victoriei 21–23 · București
            </span>
          </div>

          {/* H1 */}
          <h1
            ref={titleRef}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 sm:mb-8"
          >
            Evaluare<br />
            <span className="italic font-normal text-[#d4af6a]">profesională</span><br />
            pentru bijuterii,<br />
            aur și diamante
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-inter text-white/75 text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 font-light"
          >
            Expertiză și evaluare realizată într-o casă de bijuterii tradițională din centrul Bucureștiului.
            Discreție, explicații clare și consultare directă.
          </p>

          {/* Bullets */}
          <div className="flex flex-col space-y-3 mb-10 sm:mb-12">
            {[
              'Evaluare clară, pe înțeles',
              'Locație reală, consultare directă',
              'Discreție și abordare profesionistă',
            ].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="w-1 h-1 rounded-full bg-[#b49650] flex-shrink-0" />
                <span className="font-inter text-white/70 text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
            <a
              href="#contact"
              className="group inline-flex items-center space-x-3 bg-[#b49650] text-white px-7 sm:px-8 py-4 font-inter text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#9a7d3e] transition-all duration-300 whitespace-nowrap cursor-pointer w-full sm:w-auto justify-center sm:justify-start"
            >
              <span>Programează o evaluare</span>
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:0766466102"
              className="inline-flex items-center space-x-3 text-white/80 hover:text-white font-inter text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-[#b49650] transition-colors duration-300">
                <i className="ri-phone-line text-sm" />
              </div>
              <span>Sună acum</span>
            </a>
          </div>

          {/* Microcopy */}
          <p className="font-inter text-white/40 text-xs tracking-[0.2em] uppercase">
            Evaluare la sediu &nbsp;·&nbsp; Fără presiune
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-16 hidden lg:flex flex-col items-center space-y-3">
        <span className="font-inter text-white/30 text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Derulează
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#b49650]"
            style={{
              height: '40%',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
