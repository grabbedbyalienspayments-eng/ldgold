import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Servicii', href: '#servicii' },
    { label: 'Showroom', href: '#showroom' },
    { label: 'Evaluare', href: '#proces' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(180,150,80,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="px-5 sm:px-8 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="cursor-pointer flex items-center"
          aria-label="Acasă"
        >
          <img 
            src="/images/eb51edc2e1c5.webp" 
            alt="Casa de Bijuterii Știrbei"
            className={`w-auto object-contain transition-all duration-500 ${
              isScrolled ? 'h-14 sm:h-16' : 'h-20 sm:h-24'
            }`}
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-inter text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 group ${
                isScrolled ? 'text-[#3a3228]' : 'text-white/90'
              } hover:text-[#b49650]`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b49650] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:0766466102"
            className={`font-inter text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
              isScrolled ? 'text-[#3a3228] hover:text-[#b49650]' : 'text-white/80 hover:text-white'
            }`}
          >
            <i className="ri-phone-line mr-2" />
            0766 466 102
          </a>
          <a
            href="#contact"
            className="bg-[#b49650] text-white px-5 lg:px-6 py-2.5 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9a7d3e] transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Programează
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden cursor-pointer transition-colors p-1 ${isScrolled ? 'text-[#1a1612]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meniu"
        >
          <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#faf8f5] border-t border-[#e8dfc8] transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 sm:px-8 py-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-inter text-xs tracking-[0.2em] uppercase text-[#3a3228] hover:text-[#b49650] transition-colors cursor-pointer py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#e8dfc8] flex flex-col space-y-3">
            <a
              href="tel:0766466102"
              className="flex items-center space-x-2 font-inter text-xs tracking-[0.15em] uppercase text-[#b49650] font-semibold cursor-pointer"
            >
              <i className="ri-phone-line" />
              <span>0766 466 102</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center bg-[#b49650] text-white px-6 py-3 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#9a7d3e] transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Programează evaluare
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}