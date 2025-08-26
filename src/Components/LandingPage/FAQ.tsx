import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  CheckCircle,
  Users,
  Shield,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Trebam li knjigovođu?",
      answer:
        "Naša platforma omogućuje vam da sami upravljate svakodnevnim poslovanjem i e-računima bez dodatnih troškova. Knjigovođu ćete trebati samo za zakonske prijave i godišnje izvještaje — a čak i to možete svesti na minimum uz naše exporte i pripremljene podatke.",
      icon: Users,
    },
    {
      question: "Je li usklađeno s Poreznom upravom?",
      answer:
        "Da — naša platforma omogućuje izdavanje i zaprimanje e-računa u skladu sa zakonom, a svi računi se šalju kroz ovlaštenog informacijskog posrednika (npr. Moj-eRačun). To znači da su računi u propisanom formatu i automatski dostupni Poreznoj upravi kroz njihov sustav fiskalizacije.",
      icon: Shield,
    },
    {
      question: "Što ako već koristim drugog posrednika?",
      answer:
        "Naša platforma radi kroz ovlaštenog informacijskog posrednika. Ako već koristite drugog, i dalje možete koristiti našu aplikaciju za pregled, izdavanje i zaprimanje računa. Za migraciju postojećih dokumenata najbolje je da ih izvezete iz starog sustava i uvezete kod nas – naš tim će vam pomoći kroz taj proces.",
      icon: CheckCircle,
    },
    {
      question: "Koliko dugo traje implementacija?",
      answer:
        "Implementacija je brza i jednostavna – možete početi koristiti platformu isti dan. Priložit ćemo detaljne video tutorijale koji vas vode kroz sve korake, tako da nema potrebe za dugim obukama.",
      icon: CheckCircle,
    },
    {
      question: "Što ako nešto ne radi kako treba?",
      answer:
        "Imamo 24/7 tehničku podršku i 99.9% uptime garanciju. Ako dođe do problema, naš tim će ga riješiti u roku od nekoliko sati.",
      icon: Shield,
    },
    {
      question: "Mogu li otkazati u bilo kojem trenutku?",
      answer:
        "Da! Nema ugovornih obveza. Možete otkazati uslugu u bilo kojem trenutku bez dodatnih troškova ili komplikacija.",
      icon: CheckCircle,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-brand-secondary/8 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-brand-accent/8 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/15 ring-1 ring-brand-secondary/30 px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-brand-secondary" />
            <span className="text-sm text-brand-secondary/90">
              Često postavljena pitanja
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 leading-tight">
            Imate{" "}
            <span className="bg-gradient-to-r from-brand-secondary via-brand-accent to-slate-50 bg-clip-text text-transparent">
              pitanja?
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400/90 max-w-2xl mx-auto">
            Odgovorili smo na najčešća pitanja koja nas korisnici postavljaju.
            Ako ne pronađete odgovor, slobodno nas kontaktirajte.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              {/* FAQ Card */}
              <div className="relative rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl hover:ring-slate-600/60 transition-all duration-300">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 hover:bg-slate-800/20 transition-colors rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 ring-1 ring-brand-secondary/30 flex items-center justify-center">
                      <faq.icon className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-100 tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="pt-4 border-t border-slate-700/60">
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
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
              Još uvijek imate pitanja?
            </span>
            <div className="h-2 w-2 rounded-full bg-brand-secondary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
