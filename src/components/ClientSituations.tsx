export default function ClientSituations() {
  const situations = [
    {
      number: '01',
      icon: 'ri-gift-2-line',
      title: 'Ai moștenit bijuterii și vrei să știi valoarea lor reală',
    },
    {
      number: '02',
      icon: 'ri-exchange-funds-line',
      title: 'Vrei să vinzi aur sau obiecte din metale prețioase',
    },
    {
      number: '03',
      icon: 'ri-search-eye-line',
      title: 'Vrei să verifici dacă un diamant este natural sau sintetic',
    },
    {
      number: '04',
      icon: 'ri-tools-line',
      title: 'Ai o bijuterie deteriorată care trebuie reparată',
    },
    {
      number: '05',
      icon: 'ri-magic-line',
      title: 'Vrei să transformi o bijuterie veche într-un model nou',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#faf8f5] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-playfair text-[20rem] font-bold text-[#b49650]/5 leading-none select-none pointer-events-none hidden xl:block">
        CBS
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12 sm:mb-16 lg:mb-20">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-px bg-[#b49650]" />
              <span className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium">
                Situațiile clienților
              </span>
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1612] leading-[1.1]">
              În ce situații<br />
              <span className="italic font-normal text-[#b49650]">ne caută</span><br />
              clienții
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="font-inter text-[#5a4f42] text-base sm:text-lg leading-relaxed font-light border-l-2 border-[#b49650]/30 pl-6">
              Majoritatea oamenilor ajung la noi într-un moment în care au nevoie de o evaluare corectă
              și de o discuție calmă, cu cineva care înțelege domeniul. Explicăm pe înțeles ce ai și ce valoare are, transparent.
            </p>
          </div>
        </div>

        {/* Situations list */}
        <div className="space-y-0">
          {situations.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 sm:gap-8 lg:gap-12 py-5 sm:py-7 border-b border-[#e8dfc8] hover:bg-[#f5f0e8] transition-all duration-300 px-3 sm:px-4 -mx-3 sm:-mx-4 cursor-default"
            >
              {/* Number */}
              <span className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8dfc8] group-hover:text-[#b49650]/30 transition-colors duration-300 leading-none flex-shrink-0 w-12 sm:w-16 lg:w-24">
                {item.number}
              </span>

              {/* Title */}
              <p className="font-playfair text-base sm:text-xl lg:text-2xl text-[#1a1612] leading-snug group-hover:text-[#3a2e1e] transition-colors duration-300 flex-1 min-w-0">
                {item.title}
              </p>

              {/* Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex-shrink-0">
                <i className={`${item.icon} text-lg sm:text-xl text-[#b49650]`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
