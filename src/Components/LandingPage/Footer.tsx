import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Globe,
  Zap,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-900/80 border-t border-slate-800/60">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 -left-32 w-[300px] h-[300px] bg-brand-secondary/5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 -right-32 w-[250px] h-[250px] bg-brand-accent/5 blur-[60px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center">
                <Shield className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-xl font-bold text-slate-100">Kontira</span>
            </div>

            <p className="text-slate-400 mb-6 max-w-md">
              Jedna platforma za sve vaše e-račun potrebe. Usklađeno s
              Fiskalizacijom 2.0 i EU Peppol standardom.
            </p>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-brand-accent/30 px-3 py-1">
                <Globe className="w-3.5 h-3.5 text-brand-accent" />
                <span className="text-xs text-brand-accent/90">EU Peppol</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/15 ring-1 ring-brand-secondary/30 px-3 py-1">
                <Zap className="w-3.5 h-3.5 text-brand-secondary" />
                <span className="text-xs text-brand-secondary/90">
                  Fiskalizacija 2.0
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Brze veze
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-slate-400 hover:text-brand-accent transition-colors"
                >
                  Funkcionalnosti
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 hover:text-brand-accent transition-colors"
                >
                  Cjenik
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-400 hover:text-brand-accent transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-brand-accent transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-brand-secondary" />
                <span className="text-sm">info@fiskalizacija.hr</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-brand-secondary" />
                <span className="text-sm">+385 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-secondary" />
                <span className="text-sm">Zagreb, Hrvatska</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800/60 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-slate-100 mb-3">
              Ostanite informirani
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Primićete obavijesti o Fiskalizaciji 2.0 i novim
              funkcionalnostima.
            </p>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent"
              />
              <button className="inline-flex items-center gap-2 rounded-lg bg-brand-accent text-slate-900 font-medium px-4 py-2 hover:bg-brand-accent/90 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800/60 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">
              © {currentYear} Fiskalizacija 2.0. Sva prava pridržana.
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a
                href="/privacy"
                className="hover:text-slate-400 transition-colors"
              >
                Privatnost
              </a>
              <a
                href="/terms"
                className="hover:text-slate-400 transition-colors"
              >
                Uvjeti korištenja
              </a>
              <a
                href="/cookies"
                className="hover:text-slate-400 transition-colors"
              >
                Kolačići
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
