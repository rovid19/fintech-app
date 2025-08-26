import {
  Shield,
  Globe,
  CheckCircle,
  Award,
  Users,
  Zap,
  Bell,
} from "lucide-react";

const Trust = () => {
  const trustFactors = [
    {
      icon: Globe,
      title: "EU Peppol standard",
      description:
        "U skladu s europskim EN 16931 standardom za e-račune i međunarodno poslovanje.",
      badge: "Usklađeno",
      color: "brand-secondary",
    },
    {
      icon: Shield,
      title: "Integracija s Moj-eRačun",
      description:
        "Pouzdano izdavanje i zaprimanje e-računa kroz ovlaštenog posrednika.",
      badge: "Integrirano",
      color: "brand-accent",
    },
    {
      icon: CheckCircle,
      title: "Fiskalizacija 2.0 ready",
      description:
        "Pripremljeno za nova pravila od 1.1.2026. kroz certificiranog partnera.",
      badge: "Spremno",
      color: "brand-secondary",
    },
    {
      icon: Award,
      title: "EU podatkovni centri",
      description:
        "Podaci se pohranjuju u sigurnim EU podatkovnim centrima, u skladu s GDPR-om.",
      badge: "Sigurnost",
      color: "brand-accent",
    },
    {
      icon: Users,
      title: "Razvijeno za poduzetnike",
      description:
        "Alat dizajniran posebno za potrebe malih poduzetnika u Hrvatskoj.",
      badge: "Praktično",
      color: "brand-secondary",
    },
    {
      icon: Zap,
      title: "Pouzdana dostupnost",
      description:
        "Cloud infrastruktura s visokim performansama i automatskim backup-om.",
      badge: "Stabilno",
      color: "brand-accent",
    },
  ];

  const partners = [
    {
      name: "Moj-eRačun",
      description: "Integracija s vodećim servisom za e-račune u Hrvatskoj",
      logo: "🏦", // Placeholder
      status: "Integrirano",
    },
    {
      name: "ePlati",
      description: "Podrška za povezivanje s platnim sustavima",
      logo: "💳", // Placeholder
      status: "U razvoju",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-brand-dark/15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-brand-secondary/8 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/15 ring-1 ring-brand-secondary/30 px-4 py-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-brand-secondary"></div>
            <span className="text-sm text-brand-secondary/90">
              Pouzdanost i usklađenost
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
            Zašto nam{" "}
            <span className="bg-gradient-to-r from-brand-secondary via-brand-accent to-slate-50 bg-clip-text text-transparent">
              vjerujete?
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400/90 max-w-2xl mx-auto">
            Naša platforma je potpuno usklađena s europskim standardima i
            partneri smo s vodećim hrvatskim e-račun posrednicima.
          </p>
        </div>

        {/* Trust Factors Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((factor, index) => (
            <div key={index} className="group relative">
              {/* Card glow effect */}
              <div
                className={`absolute -inset-4 rounded-2xl bg-gradient-to-tr from-${factor.color}/10 via-${factor.color}/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-6 sm:p-8 hover:ring-slate-600/60 transition-all duration-300 h-full flex flex-col">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 rounded-full bg-${factor.color}/15 ring-1 ring-${factor.color}/30 px-3 py-1 mb-4 self-start`}
                >
                  <span
                    className={`text-xs font-medium text-${factor.color}/90`}
                  >
                    {factor.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br from-${factor.color}/20 to-${factor.color}/20 ring-1 ring-${factor.color}/30 flex items-center justify-center`}
                  >
                    <factor.icon className={`w-6 h-6 text-${factor.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 tracking-tight">
                    {factor.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-100 mb-4">
              Naši pouzdani partneri
            </h3>
            <p className="text-slate-400">
              Integrirani s vodećim hrvatskim e-račun posrednicima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-brand-secondary/10 via-brand-accent/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-8 hover:ring-slate-600/60 transition-all duration-300 text-center">
                  {/* Logo */}
                  <div className="text-4xl mb-4">{partner.logo}</div>

                  {/* Partner Info */}
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-slate-400 mb-4">{partner.description}</p>

                  {/* Status */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-brand-accent/30 px-3 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-accent"></div>
                    <span className="text-sm text-brand-accent/90">
                      {partner.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/60 ring-1 ring-slate-700/60 px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></div>
            <span className="text-sm text-slate-400">
              Spremni za pouzdanu e-račun platformu?
            </span>
            <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
