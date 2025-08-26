import { Check, Star, Zap, Shield, Archive, TrendingUp } from "lucide-react";
import { useState } from "react";
import EmailCollector from "./EmailCollector";
const Cjenik = () => {
  const [isEmailCollectorOpen, setIsEmailCollectorOpen] = useState(false);

  const features = [
    {
      icon: Zap,
      text: "Izdavanje i zaprimanje e-računa",
    },
    {
      icon: Archive,
      text: "Digitalna arhiva 10+ godina",
    },
    {
      icon: TrendingUp,
      text: "Real-time pregled financija",
    },
    {
      icon: Shield,
      text: "Sigurnost na razini banke",
    },
    {
      icon: Check,
      text: "Usklađeno s Fiskalizacijom 2.0",
    },
    {
      icon: Check,
      text: "EU Peppol standard",
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden py-20 lg:py-28">
      <EmailCollector
        isOpen={isEmailCollectorOpen}
        onClose={() => setIsEmailCollectorOpen(false)}
      />
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-accent/8 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-brand-accent/30 px-4 py-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
            <span className="text-sm text-brand-accent/90">
              Jednostavan cjenik
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
            Jedna{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-secondary to-slate-50 bg-clip-text text-transparent">
              cijena
            </span>
            , sve funkcionalnosti
          </h2>

          <p className="mt-6 text-lg text-slate-400/90 max-w-2xl mx-auto">
            Bez skrivenih troškova, bez kompliciranih planova. Dobivate sve što
            trebate za uspješno poslovanje.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="group relative">
            {/* Card glow effect */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-brand-accent/20 via-brand-secondary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative rounded-3xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-8 sm:p-12 hover:ring-slate-600/60 transition-all duration-300">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-brand-accent/30 px-4 py-2 mb-4">
                  <Star className="w-4 h-4 text-brand-accent" />
                  <span className="text-sm font-medium text-brand-accent/90">
                    Preporučeno
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-slate-100 mb-2">
                  Pro Plan
                </h3>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-brand-accent">
                    €19,99
                  </span>
                  <span className="text-xl text-slate-400">/mjesečno</span>
                </div>

                <p className="text-slate-400 mt-2">
                  Bez ugovorne obveze • Otkazivanje u bilo kojem trenutku
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <feature.icon className="w-3 h-3 text-brand-accent" />
                    </div>
                    <span className="text-slate-200">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="#start"
                  onClick={() => setIsEmailCollectorOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent text-slate-900 font-medium px-8 py-4 text-lg shadow-[0_0_0_1px_theme(colors.brand.accent/0.45),0_12px_30px_-6px_theme(colors.brand.accent/0.45)] hover:shadow-[0_0_0_2px_theme(colors.brand.accent/0.6),0_16px_40px_-6px_theme(colors.brand.accent/0.6)] hover:scale-[1.02] active:scale-[0.98] transition"
                >
                  Započni odmah
                  <Zap className="w-5 h-5" />
                </a>
              </div>

              {/* Bottom note */}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Besplatno testiranje 7 dana • Bez kreditne kartice
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/60 ring-1 ring-slate-700/60 px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse"></div>
            <span className="text-sm text-slate-400">
              Imate pitanja o cjeniku?
            </span>
            <div className="h-2 w-2 rounded-full bg-brand-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cjenik;
