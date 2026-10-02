import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Instagram, WhatsApp, Pinterest } from "./Icons";
import { BRAND, NAV_LINKS } from "../data/content";

const currentYear = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t border-charcoal/10" aria-label="Site Footer">
      <div className="section-container py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="inline-block group"
              >
                <span className="font-serif text-3xl sm:text-4xl text-charcoal font-light tracking-widest uppercase group-hover:text-gold-dark transition-colors">
                  {BRAND.name}
                </span>
              </a>
              <p className="text-[10px] tracking-luxury uppercase text-gold font-medium mt-1">
                Fine Art Wedding Photography & Cinematography
              </p>
            </div>

            <p className="text-charcoal-muted text-sm leading-relaxed max-w-sm font-light">
              Preserving timeless love stories with documentary discretion, cinematic light, and quiet reverence worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                aria-label="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                aria-label="Pinterest Inspiration"
              >
                <Pinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-charcoal font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs uppercase tracking-widest text-charcoal-muted hover:text-gold transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Locations & Inquiries (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-charcoal font-medium">
              Studio & Destinations
            </h4>
            <div className="space-y-3 text-xs text-charcoal-muted font-light leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span>New York Studio: Fifth Avenue, NY 10022</span>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span>Paris Atelier: Place Vendôme, 75001 Paris</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">
                  {BRAND.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <a href={`tel:${BRAND.phone.replace(/\D/g, "")}`} className="hover:text-gold transition-colors">
                  {BRAND.phone}
                </a>
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-charcoal hover:text-gold transition-colors"
              >
                <span>Back To Summit</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Fine Print */}
        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-muted tracking-widest uppercase">
          <p>
            © {currentYear} {BRAND.name}. All Rights Reserved.
          </p>
          <p className="text-charcoal-subtle">
            Bespoke Wedding Photography & Cinematography Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}