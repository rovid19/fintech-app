import { useState } from "react";
import { X, Mail, Zap, Gift, Clock, CheckCircle } from "lucide-react";

interface EmailCollectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCollector = ({ isOpen, onClose }: EmailCollectorProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    try {
      const formData = new FormData();

      // 👇 ovo je tvoj entry ID
      formData.append("entry.1587821519", email);

      await fetch(
        "https://docs.google.com/forms/d/11LHk8_2SmvHB57-3dBsN_ncswgLXZvzlp_bX7f55VV4/formResponse",
        {
          method: "POST",
          mode: "no-cors", // Google zahtijeva
          body: formData,
        }
      );

      setIsSubmitted(true);
    } catch (err) {
      console.error("Greška pri slanju:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitted) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative rounded-3xl bg-slate-900/95 ring-1 ring-slate-700/60 backdrop-blur-xl p-8 shadow-2xl">
          {/* Close button */}
          {!isSubmitted && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/60 hover:bg-slate-800/80 transition-colors"
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>
          )}

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-brand-accent/30 px-4 py-2 mb-4">
                  <Gift className="w-4 h-4 text-brand-accent" />
                  <span className="text-sm font-medium text-brand-accent/90">
                    Early Bird ponuda
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-100 mb-3">
                  Software je u razvoju!
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Naša platforma će biti spremna uskoro. Ostavite svoj email i
                  osigurajte{" "}
                  <span className="text-brand-accent font-semibold">
                    prvi mjesec besplatno
                  </span>{" "}
                  !
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
                  <span>Prvi pristup novoj platformi</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
                  <span>Prvi mjesec besplatno</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-brand-accent"></div>
                  <span>Obavijest čim bude spremno</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Vaša email adresa
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vas@email.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent text-slate-900 font-semibold px-6 py-3 hover:bg-brand-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                      Slanje...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Osiguraj popust
                    </>
                  )}
                </button>
              </form>

              {/* Bottom note */}
              <p className="text-xs text-slate-500 text-center mt-4">
                Vaš email je siguran. Nećemo ga dijeliti s trećim stranama.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="h-16 w-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-accent" />
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Hvala vam!
              </h3>

              <p className="text-slate-400 mb-6">
                Vaš email je uspješno spremljen. Obavijestićemo vas čim bude
                platforma spremna s{" "}
                <span className="text-brand-accent font-semibold">
                  prvim mjesecom besplatno
                </span>{" "}
                !
              </p>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800/60 hover:bg-slate-800/80 text-slate-300 px-6 py-3 transition-colors"
              >
                Zatvori
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCollector;
