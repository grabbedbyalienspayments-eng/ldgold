
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    gdprConsent: false,
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check — dacă este completat, este spam
    if (honeypot) return;
    if (!formData.gdprConsent) { setSubmitStatus('error'); return; }
    // Validare de bază
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus('error');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        body.append(key, key === 'gdprConsent' ? (value ? 'Da' : 'Nu') : String(value));
      });
      const response = await fetch('https://readdy.ai/api/form/d6kcqbagaju8afbceo20', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '', gdprConsent: false });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-transparent border-0 border-b border-[#d4c9b0] pb-3 pt-1 font-inter text-sm text-[#1a1612] placeholder-[#b0a090] focus:outline-none focus:border-[#b49650] transition-colors duration-300';

  return (
    <section id="contact" className="bg-[#faf8f5] relative overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[700px]">

        {/* Left — Dark info panel */}
        <div className="bg-[#1a1612] px-8 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative large text */}
          <div className="absolute right-0 bottom-0 font-playfair text-[14rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
            CBS
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-px bg-[#b49650]" />
              <span className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium">
                Vino la noi
              </span>
            </div>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
              Contact și<br />
              <span className="italic font-normal text-[#d4af6a]">programare</span>
            </h2>
            <p className="font-inter text-white/60 text-base leading-relaxed mb-10 max-w-md">
              Pentru o evaluare sau o întrebare, ne poți contacta telefonic sau prin formular.
            </p>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-12 max-w-xs">
              CBS Bijuterii / Casa de Bijuterii Știrbei
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: 'ri-map-pin-2-line',
                  label: 'Adresă',
                  value: 'Calea Victoriei 21–23, București\nCasa de Modă Venus, parter, lângă Raiffeisen Bank',
                  href: null,
                },
                {
                  icon: 'ri-phone-line',
                  label: 'Telefon',
                  value: '0766 466 102',
                  href: 'tel:0766466102',
                },
                {
                  icon: 'ri-facebook-box-line',
                  label: 'Facebook',
                  value: 'Casa de Bijuterii Știrbei',
                  href: 'https://facebook.com',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <div className="w-10 h-10 border border-[#b49650]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-sm text-[#b49650]`} />
                  </div>
                  <div>
                    <p className="font-inter text-[#b49650] text-[10px] tracking-[0.25em] uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-inter text-white/80 text-sm leading-relaxed hover:text-[#d4af6a] transition-colors cursor-pointer whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter text-white/80 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-inter text-white/35 text-xs leading-relaxed">
              Pentru evaluare sau întrebări, cel mai simplu este să ne suni.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="px-8 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <div className="max-w-md w-full">
            <p className="font-inter text-[#b49650] text-xs tracking-[0.35em] uppercase font-medium mb-8">
              Formular de contact
            </p>

            <form onSubmit={handleSubmit} data-readdy-form id="contact_evaluation">
              {/* Honeypot — ascuns de utilizatori, vizibil pentru boți */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none', tabIndex: -1 } as React.CSSProperties}>
                <label htmlFor="website_url">Nu completa acest câmp</label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#8a7a68] mb-2">
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Numele dvs."
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#8a7a68] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@exemplu.ro"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#8a7a68] mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="07xx xxx xxx"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#8a7a68] mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    placeholder="Descrieți pe scurt ce doriți să evaluați..."
                    className={`${inputClass} resize-none`}
                  />
                  <p className="font-inter text-[10px] text-[#b0a090] mt-1 text-right">
                    {formData.message.length}/500
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      checked={formData.gdprConsent}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <label
                      htmlFor="gdprConsent"
                      className={`w-5 h-5 border flex items-center justify-center cursor-pointer transition-all duration-200 ${
                        formData.gdprConsent
                          ? 'bg-[#b49650] border-[#b49650]'
                          : 'bg-transparent border-[#d4c9b0] hover:border-[#b49650]'
                      }`}
                    >
                      {formData.gdprConsent && (
                        <i className="ri-check-line text-white text-xs" />
                      )}
                    </label>
                  </div>
                  <label htmlFor="gdprConsent" className="font-inter text-xs text-[#5a4f42] leading-relaxed cursor-pointer">
                    Am citit și sunt de acord cu Politica de Confidențialitate. *
                  </label>
                </div>

                {submitStatus === 'success' && (
                  <div className="border border-[#b49650]/40 bg-[#b49650]/5 p-4 flex items-center space-x-3">
                    <i className="ri-check-line text-[#b49650]" />
                    <p className="font-inter text-[#3a2e1e] text-sm">Mesajul a fost trimis. Vă vom contacta în curând.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="border border-red-200 bg-red-50 p-4 flex items-center space-x-3">
                    <i className="ri-error-warning-line text-red-500" />
                    <p className="font-inter text-red-700 text-sm">A apărut o eroare. Vă rugăm să ne contactați telefonic.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.gdprConsent}
                  className={`w-full py-4 font-inter text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 whitespace-nowrap flex items-center justify-center space-x-3 ${
                    isSubmitting || !formData.gdprConsent
                      ? 'bg-[#e8dfc8] text-[#b0a090] cursor-not-allowed'
                      : 'bg-[#1a1612] text-white hover:bg-[#b49650] cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin" />
                      <span>Se trimite...</span>
                    </>
                  ) : (
                    <>
                      <span>Trimite mesajul</span>
                      <i className="ri-arrow-right-line" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
