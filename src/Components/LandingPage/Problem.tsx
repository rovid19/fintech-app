import { Mail, Clock, Shield, FileX, Bell } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Mail,
      title: "Slanje računa kroz više kanala",
      description:
        "Bez centralnog sustava računi se šalju na različite načine, što stvara kaos i gubitak kontrole.",
      highlight: "Još uvijek šaljete račune kroz više aplikacija?",
    },
    {
      icon: Clock,
      title: "Nema uvida u realnom vremenu",
      description:
        "Ako čekate knjigovođu da obradi račune, gubite sate bez jasnog pregleda poslovanja.",
      highlight: "Morate čekati knjigovođu za pregled poslovanja?",
    },
    {
      icon: Shield,
      title: "Strah od propisa i kazni",
      description:
        "Fiskalizacija 2.0 od 1.1.2026. donosi nova pravila i kazne za neusklađene poduzetnike.",
      highlight: "Jeste li spremni za Fiskalizaciju 2.0?",
    },
    {
      icon: FileX,
      title: "Nepregledna arhiva",
      description:
        "Bez digitalne arhive teško je pratiti što je plaćeno, a što čeka naplatu.",
      highlight: "Nemate centralnu arhivu svih računa?",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-brand-secondary/15 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-brand-dark/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/15 ring-1 ring-brand-secondary/30 px-4 py-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-brand-secondary"></div>
            <span className="text-sm text-brand-secondary/90">
              Glavni problemi poduzetnika
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
            Prepoznajete li se u ovim{" "}
            <span className="bg-gradient-to-r from-brand-accent via-brand-secondary/80 to-slate-50 bg-clip-text text-transparent">
              svakodnevnim izazovima?
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400/90 max-w-2xl mx-auto">
            Većina poduzetnika gubi dragocjeno vrijeme i živce na
            administrativnim zadacima koje tehnologija može riješiti u nekoliko
            klikova.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="group relative">
              {/* Card glow effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-brand-secondary/10 via-brand-accent/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-6 sm:p-8 hover:ring-slate-600/60 transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 ring-1 ring-brand-secondary/30 flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 tracking-tight">
                    {problem.title}
                  </h3>
                </div>

                {/* Highlight Question */}
                <div className="mb-4 p-4 rounded-xl bg-brand-secondary/10 ring-1 ring-brand-secondary/20">
                  <p className="text-brand-secondary/90 font-medium text-base">
                    "{problem.highlight}"
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {problem.description}
                </p>

                {/* Bottom indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-secondary/60"></div>
                  <span>Problem #{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 ring-1 ring-slate-700/60 px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse"></div>
            <span className="text-sm text-slate-400">
              Dolje pronađite kako riješiti sve ove probleme odjednom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
