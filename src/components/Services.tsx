
export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Evaluare bijuterii',
      description: 'Evaluăm bijuterii din aur, diamante și piese de valoare. Îți explicăm pe înțeles ce ai și ce valoare are, transparent, fără termeni complicați.',
      image: '/images/jewelry-evaluation-process.webp',
      tag: 'Expertiză',
    },
    {
      number: '02',
      title: 'Cumpărăm aur și metale prețioase',
      description: 'Cumpărăm cu plata pe loc bijuterii din aur, fragmente, obiecte deteriorate, argint și platină, de la persoane fizice și juridice. Evaluare transparentă, acceptăm și piese deteriorate sau fragmente.',
      image: '/images/gold-buying.webp',
      tag: 'Cumpărare',
    },
    {
      number: '03',
      title: 'Expertiză diamante',
      description: 'Identificăm diamante naturale, HPHT, CVD și moissanite cu echipamente profesionale și specialist instruit. Analiză cu instrumente de gemologie pentru a distinge natural de sintetic.',
      image: '/images/diamond-expertise.webp',
      tag: 'Gemologie',
    },
    {
      number: '04',
      title: 'Reparații și remodelare bijuterii',
      description: 'Maestrul nostru bijutier poate repara piese deteriorate sau transforma bijuterii vechi în modele noi, păstrând materialul și valoarea. Atenție la detalii și execuție de calitate.',
      image: '/images/jewelry-repair.webp',
      tag: 'Atelier',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicii" className="py-20 sm:py-28 lg:py-32 bg-[#1a1612] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #b49650 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-px bg-[#b49650]" />
              <span className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium">
                Ce oferim
              </span>
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Serviciile<br />
              <span className="italic font-normal text-[#d4af6a]">noastre</span>
            </h2>
          </div>
          <p className="font-inter text-white/40 text-sm tracking-[0.15em] uppercase max-w-xs lg:text-right hidden lg:block">
            Fiecare serviciu este realizat cu atenție și profesionalism
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-[#b49650]/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1612] overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-[#1a1612]/20 to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-[#b49650]/90 px-3 py-1">
                  <span className="font-inter text-white text-[10px] tracking-[0.25em] uppercase font-semibold">
                    {service.tag}
                  </span>
                </div>
                {/* Number */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <span className="font-playfair text-5xl sm:text-6xl font-bold text-white/10 leading-none">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 border-t border-[#b49650]/15">
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-snug group-hover:text-[#d4af6a] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-white/55 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 border border-[#b49650]/25 p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div>
            <p className="font-playfair text-xl sm:text-2xl text-white mb-1">
              Pentru programare sau întrebări:
            </p>
            <p className="font-inter text-white/40 text-sm">Suntem disponibili pentru o discuție directă</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto flex-shrink-0">
            <a
              href="tel:0766466102"
              className="group inline-flex items-center justify-center space-x-3 border border-[#b49650] text-[#b49650] px-6 sm:px-7 py-3.5 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#b49650] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line" />
              <span>Sună acum</span>
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center space-x-3 bg-[#b49650] text-white px-6 sm:px-7 py-3.5 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9a7d3e] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <span>Programează o evaluare</span>
              <i className="ri-arrow-right-line" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
