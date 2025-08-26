import {
  FileText,
  Archive,
  TrendingUp,
  Shield,
  Zap,
  Bell,
  CheckCircle,
} from "lucide-react";

const Rješenje = () => {
  const solutions = [
    {
      icon: FileText,
      title: "Jedan alat za e-račune",
      description:
        "Jednostavno izdavanje i zaprimanje e-računa kroz jednu platformu – bez skakanja između više aplikacija.",
      benefit: "Uštedite vrijeme i smanjite greške",
    },
    {
      icon: Archive,
      title: "Zakonska digitalna arhiva",
      description:
        "Svi vaši e-računi automatski se čuvaju najmanje 11 godina, uz mogućnost pretrage i izvoza.",
      benefit: "Uvijek usklađeno i dostupno",
    },
    {
      icon: TrendingUp,
      title: "Real-time pregled poslovanja",
      description:
        "Odmah vidite prihode, rashode i otvorene račune – bez čekanja na knjigovođu.",
      benefit: "Donosite brže i sigurnije odluke",
    },
    {
      icon: Bell,
      title: "Pametne notifikacije",
      description:
        "Podsjetnici za PDV, doprinose i kašnjenja uplata – sve na vrijeme.",
      benefit: "Nikad ne propuštate rokove",
    },
    {
      icon: CheckCircle,
      title: "Usklađeno s Fiskalizacijom 2.0",
      description:
        "Naša platforma je spremna za nova pravila od 1.1.2026. – svi e-računi šalju se preko ovlaštenog posrednika.",
      benefit: "Bez brige oko zakonskih promjena",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-brand-accent/8 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-brand-accent/30 px-4 py-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
            <span className="text-sm text-brand-accent/90">Naše rješenje</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
            Sve što trebate za{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-secondary to-slate-50 bg-clip-text text-transparent">
              uspješno poslovanje
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400/90 max-w-2xl mx-auto">
            Jedna platforma koja rješava sve probleme s kojima se suočavate - od
            izdavanja e-računa do potpune kontrole nad poslovanjem.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              {/* Card glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-brand-secondary/10 via-brand-accent/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-6 sm:p-8 hover:ring-slate-600/60 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 ring-1 ring-brand-secondary/30 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 tracking-tight">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-4 flex-grow">
                  {solution.description}
                </p>

                {/* Benefit highlight */}
                <div className="p-3 rounded-lg bg-brand-accent/10 ring-1 ring-brand-accent/20 mb-4">
                  <p className="text-brand-accent/90 font-medium text-sm">
                    ✨ {solution.benefit}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-accent/60"></div>
                  <span>Benefit #{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/60 ring-1 ring-slate-700/60 px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse"></div>
            <span className="text-sm text-slate-400">
              Spremni za transformaciju vašeg poslovanja?
            </span>
            <div className="h-2 w-2 rounded-full bg-brand-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rješenje;
