import { useEffect, useRef } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController,
} from "chart.js";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  FileCheck2,
  Globe,
  TrendingUp,
  TrendingDown,
  FileText,
  CheckCircle2,
  QrCode,
  Send,
  Lock,
  Server,
  Scale,
} from "lucide-react";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController
);

const Hero = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const gradientIncome = ctx.createLinearGradient(0, 0, 0, 160);
        gradientIncome.addColorStop(0, "rgba(124, 134, 247, 0.45)"); // brand-secondary
        gradientIncome.addColorStop(1, "rgba(124, 134, 247, 0.05)");

        const gradientExpense = ctx.createLinearGradient(0, 0, 0, 160);
        gradientExpense.addColorStop(0, "rgba(244, 63, 94, 0.35)");
        gradientExpense.addColorStop(1, "rgba(244, 63, 94, 0.05)");

        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            datasets: [
              {
                label: "Prihodi",
                data: [7200, 8900, 10300, 9800, 11600, 12800],
                borderColor: "rgba(124, 134, 247, 0.9)", // brand-secondary
                backgroundColor: gradientIncome,
                fill: true,
                tension: 0.45,
                borderWidth: 2.2,
                pointRadius: 0,
              },
              {
                label: "Rashodi",
                data: [5400, 6100, 6800, 6400, 7200, 7000],
                borderColor: "rgba(251, 113, 133, 0.8)",
                backgroundColor: gradientExpense,
                fill: true,
                tension: 0.45,
                borderWidth: 2.2,
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: "index" },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "rgba(2,6,23,0.9)",
                borderColor: "rgba(51,65,85,0.6)",
                borderWidth: 1,
                padding: 10,
                titleColor: "#e2e8f0",
                bodyColor: "#cbd5e1",
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: "rgba(203,213,225,0.7)", font: { size: 11 } },
              },
              y: {
                grid: { color: "rgba(51,65,85,0.35)" },
                ticks: {
                  color: "rgba(203,213,225,0.7)",
                  font: { size: 11 },
                  callback: (value) => "€ " + value,
                },
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1400&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,theme(colors.brand.secondary/0.25),transparent_60%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
            <span className="text-sm text-slate-400">
              Usklađeno s e‑račun standardom
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/60 ring-1 ring-slate-700/60 px-3 py-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              Sigurnost na razini banke
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/60 ring-1 ring-slate-700/60 px-3 py-1">
              <Zap className="w-3.5 h-3.5 text-brand-secondary" />
              Real‑time uvid
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-slate-100 leading-[1.05]">
              Spremni za{" "}
              <span className="bg-gradient-to-r from-brand-accent via-brand-secondary/80 to-slate-50 bg-clip-text text-transparent">
                Fiskalizaciju 2.0
              </span>
              – 1.1.2026.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400/90">
              Kontira je platfroma koja olakšava izdavanje i zaprimanje
              e‑računa, digitalna arhiva i potpuni uvid u poslovanje – bez
              dodatnih troškova knjigovođe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent text-slate-900 font-medium px-6 py-3 shadow-[0_0_0_1px_theme(colors.brand.accent/0.45),0_12px_30px_-6px_theme(colors.brand.accent/0.45)] hover:shadow-[0_0_0_2px_theme(colors.brand.accent/0.6),0_16px_40px_-6px_theme(colors.brand.accent/0.6)] hover:scale-[1.015] active:scale-[0.99] transition"
              >
                Započni odmah
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
              <div className="inline-flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-brand-accent" />
                e‑Potpis & arhiva 10+ godina
              </div>
              <div className="inline-flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-secondary" />
                EU Peppol podrška
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-brand-secondary/20 via-brand-dark/10 to-brand-accent/10 blur-2xl"></div>

            <div className="relative grid grid-cols-1 gap-6">
              <div className="rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-accent"></span>
                    <h3 className="text-base font-medium text-slate-200 tracking-tight">
                      Prihodi / Rashodi
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-brand-secondary"></span>{" "}
                      Prihodi
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-rose-400"></span>{" "}
                      Rashodi
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-800/50 ring-1 ring-slate-700/60 p-3">
                    <div className="text-xs text-slate-400">Ovaj mjesec</div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-lg font-medium text-slate-100 tracking-tight">
                        € 54.320
                      </span>
                      <span className="text-[11px] text-brand-accent inline-flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        +12%
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-800/50 ring-1 ring-slate-700/60 p-3">
                    <div className="text-xs text-slate-400">Rashodi</div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-lg font-medium text-slate-100 tracking-tight">
                        € 31.980
                      </span>
                      <span className="text-[11px] text-rose-400 inline-flex items-center gap-1">
                        <TrendingDown className="w-3.5 h-3.5" />
                        -4%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-slate-800/40 ring-1 ring-slate-700/60 p-3">
                  <div className="relative h-40">
                    <canvas
                      ref={chartRef}
                      aria-label="Graf prihoda i rashoda"
                      role="img"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900/60 ring-1 ring-slate-700/60 backdrop-blur-xl p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-secondary to-brand-dark flex items-center justify-center ring-1 ring-white/10">
                      <FileText className="w-4 h-4 text-slate-950" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-slate-100 tracking-tight">
                        e‑Račun #INV‑2026‑001
                      </h3>
                      <p className="text-xs text-slate-400">
                        Nova d.o.o. → Alfa j.d.o.o.
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-brand-accent/15 text-brand-accent ring-1 ring-brand-accent/30">
                    Spremno za slanje
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="col-span-3 rounded-lg bg-slate-800/40 ring-1 ring-slate-700/60 p-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Opis</span>
                      <span>Količina</span>
                      <span>Iznos</span>
                    </div>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="grid grid-cols-3 items-center">
                        <span className="text-slate-200">Licenca Pro</span>
                        <span className="text-slate-400">1</span>
                        <span className="text-slate-100">€ 199,00</span>
                      </div>
                      <div className="grid grid-cols-3 items-center">
                        <span className="text-slate-200">Onboarding</span>
                        <span className="text-slate-400">1</span>
                        <span className="text-slate-100">€ 149,00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col justify-between rounded-lg bg-slate-800/40 ring-1 ring-slate-700/60 p-3">
                    <div className="text-xs text-slate-400">Rok plaćanja</div>
                    <div className="text-sm text-slate-100">15.01.2026.</div>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-brand-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      e‑Potpis spreman
                    </div>
                  </div>
                  <div className="rounded-lg bg-slate-800/40 ring-1 ring-slate-700/60 p-3">
                    <div className="text-xs text-slate-400">Ukupno</div>
                    <div className="text-xl font-semibold tracking-tight text-slate-100">
                      € 348,00
                    </div>
                    <div className="mt-2 text-[11px] text-slate-400">
                      PDV uklj.
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                    <QrCode className="w-4 h-4 text-brand-secondary" />
                    PDF / QR
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 ring-1 ring-slate-700/60 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-900/90 transition">
                    <Send className="w-4 h-4 text-brand-accent" />
                    Pošalji
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
