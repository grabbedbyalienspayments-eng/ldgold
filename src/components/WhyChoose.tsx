
export default function WhyChoose() {
  const reasons = [
    {
      icon: 'ri-user-star-line',
      title: 'Evaluări făcute de persoane cu experiență reală',
    },
    {
      icon: 'ri-microscope-line',
      title: 'Echipamente profesionale pentru analiza diamantelor',
    },
    {
      icon: 'ri-eye-line',
      title: 'Transparență și explicații pe înțeles',
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Discuție directă, fără presiune',
    },
    {
      icon: 'ri-map-pin-2-line',
      title: 'Locație centrală, într-un spațiu respectabil',
    },
  ];

  return (
    <section id="de-ce" className="bg-[#faf8f5] relative overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[700px]">
        {/* Left — Image */}
        <div className="relative overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-0">
          <img
            src="/images/why-choose-jewelry.webp"
            alt="Bijuterii de valoare"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#faf8f5]/20" />
          {/* Floating quote */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 bg-[#1a1612]/80 backdrop-blur-sm p-5 sm:p-6 border-l-2 border-[#b49650]">
            <p className="font-playfair text-white text-base sm:text-lg italic leading-relaxed">
              De multe ori, obiectele au și valoare sentimentală&nbsp;— tratăm fiecare caz cu respect și discreție.
            </p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="px-6 sm:px-12 lg:px-16 py-14 sm:py-20 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-8 h-px bg-[#b49650]" />
            <span className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium">
              Autoritate și discreție
            </span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1612] leading-[1.1] mb-6">
            De ce să alegi<br />
            <span className="italic font-normal text-[#b49650]">Casa de Bijuterii</span><br />
            Știrbei
          </h2>

          <p className="font-inter text-[#5a4f42] text-base leading-relaxed mb-8 sm:mb-10 font-light">
            Pentru mulți clienți contează să discute direct cu un specialist care le explică clar ce au și ce opțiuni există.
          </p>

          <div className="space-y-0 mb-8 sm:mb-10">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex items-start space-x-5 py-4 sm:py-5 border-b border-[#e8dfc8] last:border-0 hover:bg-[#f5f0e8] transition-colors duration-200 -mx-4 px-4 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 border border-[#b49650]/30 group-hover:border-[#b49650] group-hover:bg-[#b49650] transition-all duration-300 mt-0.5">
                  <i className={`${reason.icon} text-sm text-[#b49650] group-hover:text-white transition-colors duration-300`} />
                </div>
                <p className="font-inter text-[#3a3228] text-sm sm:text-base leading-relaxed pt-1">
                  {reason.title}
                </p>
              </div>
            ))}
          </div>

          <p className="font-inter text-[#8a7a68] text-sm leading-relaxed italic border-l-2 border-[#b49650]/30 pl-6">
            Mulți dintre clienții noștri vin prin recomandări sau revin în timp.
          </p>
        </div>
      </div>
    </section>
  );
}
