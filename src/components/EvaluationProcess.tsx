
export default function EvaluationProcess() {
  const steps = [
    {
      number: '01',
      title: 'Ne arăți obiectul / bijuteria și discutăm ce dorești să afli',
      detail: 'O discuție calmă, fără grabă.',
    },
    {
      number: '02',
      title: 'Facem evaluarea și îți explicăm clar ce ai și ce valoare are',
      detail: 'Transparență completă, explicații pe înțeles.',
    },
    {
      number: '03',
      title: 'Decizi liniștit ce vrei să faci mai departe (fără presiune)',
      detail: 'Decizia îți aparține în totalitate.',
    },
  ];

  return (
    <section id="proces" className="py-20 sm:py-28 lg:py-32 bg-[#faf8f5] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#b49650]/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16 sm:mb-20 lg:mb-24">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-px bg-[#b49650]" />
              <span className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium">
                Procesul evaluării
              </span>
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1612] leading-[1.08]">
              Cum decurge<br />
              <span className="italic font-normal text-[#b49650]">evaluarea</span>
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="font-inter text-[#5a4f42] text-base leading-relaxed font-light border-l-2 border-[#b49650]/30 pl-6 italic">
              „Scopul este o evaluare corectă și o discuție clară."
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="absolute left-[39px] top-12 bottom-12 w-px bg-[#e8dfc8] hidden lg:block" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group grid grid-cols-[64px_1fr] lg:grid-cols-[80px_1fr] gap-6 lg:gap-16 items-start py-8 sm:py-10 border-b border-[#e8dfc8] last:border-0"
              >
                {/* Number circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-[#e8dfc8] group-hover:border-[#b49650] transition-colors duration-300 flex items-center justify-center bg-[#faf8f5] relative z-10">
                    <span className="font-playfair text-xl lg:text-2xl font-bold text-[#b49650]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-3 lg:pt-6">
                  <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl text-[#1a1612] leading-snug mb-2 sm:mb-3 group-hover:text-[#3a2e1e] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[#8a7a68] text-sm tracking-wide">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 sm:mt-16 max-w-2xl">
          <p className="font-inter text-[#5a4f42] text-base leading-relaxed font-light italic border-l-2 border-[#b49650]/30 pl-6">
            Scopul este să pleci cu o înțelegere clară și cu opțiuni, fără presiune să decizi pe loc.
          </p>
        </div>

        {/* CTA strip */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#1a1612] p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div>
            <p className="font-playfair text-xl sm:text-2xl text-white mb-1">
              Gata să programezi o evaluare?
            </p>
            <p className="font-inter text-white/40 text-sm">Fără obligații, fără presiune.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto flex-shrink-0">
            <a
              href="tel:0766466102"
              className="inline-flex items-center justify-center space-x-2 border border-[#b49650]/50 text-[#b49650] px-6 sm:px-7 py-3.5 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:border-[#b49650] hover:bg-[#b49650]/10 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line" />
              <span>0766 466 102</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 bg-[#b49650] text-white px-6 sm:px-7 py-3.5 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9a7d3e] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>Programează evaluare</span>
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
