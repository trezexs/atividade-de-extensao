import { useState } from "react";
import { Star, Loader2 } from "lucide-react";
import { saveFeedback, type NewFeedback } from "@/lib/firebase";

const profiles = [
  "Estudante",
  "Empreendedor",
  "Morador da Comunidade",
  "Educador",
] as const;

const ratingLabels: Record<number, string> = {
  1: "Precisa melhorar",
  2: "Regular",
  3: "Bom",
  4: "Muito bom",
  5: "Excelente",
};

export default function Avaliar() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [profile, setProfile] = useState<string>("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const activeRating = hover || rating;
  const canSubmit = rating > 0 && profile !== "" && status !== "sending";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("sending");

    const payload: NewFeedback = {
      rating,
      reader_profile: profile,
      comment: comment.trim() || undefined,
    };

    const result = await saveFeedback(payload);
    if (!result.ok) {
      setStatus("error");
      return;
    }

    setStatus("done");
    setRating(0);
    setProfile("");
    setComment("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="avaliar" className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="reveal mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 p-8 text-center md:p-12">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          Validação Acadêmica
        </p>
        <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
          Este material ajudou você?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400">
          Sua participação integra o relatório do Projeto de Extensão em
          Sistemas de Informação e ajuda a aprimorar a coleção.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 text-left">
          {/* Avaliação por estrelas */}
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-neutral-400">
                Sua nota (1 a 5)
              </label>
              {activeRating > 0 && (
                <span className="text-xs text-neutral-300">
                  {ratingLabels[activeRating]}
                </span>
              )}
            </div>
            <div className="mt-2.5 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  className="p-0.5 transition-transform hover:scale-110 focus:outline-none"
                  aria-label={`Avaliar com ${n} de 5 estrelas`}
                >
                  <Star
                    className={`h-7 w-7 transition-colors ${
                      n <= activeRating
                        ? "fill-white text-white"
                        : "fill-neutral-800 text-neutral-700"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Perfil do leitor */}
          <div className="mt-6">
            <label className="text-xs font-medium text-neutral-400">
              Você é:
            </label>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {profiles.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProfile(p)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    profile === p
                      ? "bg-white text-black"
                      : "border border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Comentário */}
          <div className="mt-6">
            <label
              htmlFor="feedback-comment"
              className="text-xs font-medium text-neutral-400"
            >
              Comentário (opcional)
            </label>
            <textarea
              id="feedback-comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              placeholder="Conte o que achou do material..."
              className="mt-2 w-full resize-none rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-colors focus:border-neutral-600 focus:outline-none"
            />
          </div>

          {/* Envio */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : status === "done" ? (
                <span>Obrigado pelo seu feedback.</span>
              ) : (
                <span>Enviar avaliação</span>
              )}
            </button>
          </div>

          {status === "error" && (
            <p className="mt-4 text-center text-xs text-neutral-500">
              Não foi possível enviar agora. Tente novamente em instantes.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
