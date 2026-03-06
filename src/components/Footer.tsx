import { useState } from 'react';

export default function Footer() {
  const [showGDPR, setShowGDPR] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const currentYear = new Date().getFullYear();

  const Modal = ({
    title,
    onClose,
    children,
  }: {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
  }) => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="bg-[#faf8f5] max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center p-8 border-b border-[#e8dfc8]">
          <h2 className="font-playfair text-2xl font-bold text-[#1a1612]">{title}</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-[#e8dfc8] hover:border-[#b49650] hover:text-[#b49650] transition-colors cursor-pointer"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>
        <div className="p-8 space-y-4 font-inter text-[#5a4f42] text-sm leading-relaxed">
          {children}
        </div>
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="bg-[#1a1612] text-white px-8 py-3 font-inter text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#b49650] transition-colors cursor-pointer whitespace-nowrap"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-[#120f0b] relative overflow-hidden">
        {/* Top decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#b49650]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20">
          <div className="grid lg:grid-cols-3 gap-16 mb-16">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-8 flex justify-start">
                <img 
                  src="/images/eb51edc2e1c5.webp" 
                  alt="Casa de Bijuterii Știrbei"
                  className="h-12 w-auto object-contain opacity-80"
                />
              </div>
              <p className="font-inter text-white/40 text-sm leading-relaxed max-w-xs">
                Expertiză și evaluare realizată într-o casă de bijuterii tradițională din centrul Bucureștiului.
              </p>
              <div className="mt-8 flex items-center space-x-3">
                <div className="w-8 h-px bg-[#b49650]/50" />
                <span className="font-inter text-[#b49650]/60 text-[10px] tracking-[0.3em] uppercase">
                  Est. București
                </span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="font-inter text-[#b49650] text-[10px] tracking-[0.35em] uppercase font-semibold mb-6">
                Contact
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-map-pin-line text-[#b49650]/60 text-sm mt-0.5" />
                  <p className="font-inter text-white/50 text-sm leading-relaxed">
                    Calea Victoriei 21–23, București<br />
                    Casa de Modă Venus, parter
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-phone-line text-[#b49650]/60 text-sm" />
                  <a
                    href="tel:0766466102"
                    className="font-inter text-white/50 text-sm hover:text-[#d4af6a] transition-colors cursor-pointer"
                  >
                    0766 466 102
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-facebook-box-line text-[#b49650]/60 text-sm" />
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-white/50 text-sm hover:text-[#d4af6a] transition-colors cursor-pointer"
                  >
                    Casa de Bijuterii Știrbei
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="font-inter text-[#b49650] text-[10px] tracking-[0.35em] uppercase font-semibold mb-6">
                Servicii
              </p>
              <div className="space-y-3">
                {[
                  'Evaluare bijuterii',
                  'Cumpărare aur și metale prețioase',
                  'Expertiză diamante',
                  'Reparații și remodelare',
                ].map((s) => (
                  <a
                    key={s}
                    href="#servicii"
                    className="block font-inter text-white/40 text-sm hover:text-[#d4af6a] transition-colors cursor-pointer"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-inter text-white/25 text-xs">
                © Casa de Bijuterii Știrbei {currentYear}
              </p>
              <p className="font-inter text-white/20 text-xs mt-1">
                Website creat de{' '}
                <a
                  href="https://websiteon.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b49650]/60 hover:text-[#b49650] transition-colors cursor-pointer"
                >
                  WebsiteON
                </a>
              </p>
            </div>

            <div className="flex items-center gap-6">
              {[
                { label: 'Politică de Confidențialitate', action: () => setShowGDPR(true) },
                { label: 'Politică Cookies', action: () => setShowCookies(true) },
                { label: 'Termeni și Condiții', action: () => setShowTerms(true) },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="font-inter text-white/25 text-xs hover:text-[#b49650] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {showGDPR && (
        <Modal title="Politică de Confidențialitate" onClose={() => setShowGDPR(false)}>
          <p>Acest website colectează doar datele trimise voluntar prin formularul de contact.</p>
          <p>Datele sunt utilizate exclusiv pentru a răspunde solicitărilor primite.</p>
          <p>Nu folosim sisteme de tracking, analytics sau marketing automatizat.</p>
          <p>Datele nu sunt vândute sau distribuite către terți.</p>
        </Modal>
      )}

      {showCookies && (
        <Modal title="Politică Cookies" onClose={() => setShowCookies(false)}>
          <p>Acest website utilizează doar cookie-uri strict necesare pentru funcționarea tehnică a site-ului.</p>
          <p>Nu folosim cookie-uri de analiză sau marketing.</p>
        </Modal>
      )}

      {showTerms && (
        <Modal title="Termeni și Condiții" onClose={() => setShowTerms(false)}>
          <p>Informațiile prezentate pe site au caracter informativ.</p>
          <p>Evaluările și discuțiile finale se realizează exclusiv în cadrul întâlnirilor directe în showroom.</p>
          <p>Site-ul nu reprezintă magazin online și nu procesează plăți online.</p>
        </Modal>
      )}
    </>
  );
}