import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { ebookCategories } from "@/data/ebooks";

type HeroProps = {
  onSearch: (query: string) => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string | null;
};

export default function Hero({
  onSearch,
  onSelectCategory,
  activeCategory,
}: HeroProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-black px-6 pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Luzes monocromáticas sutis nas laterais */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-mono-left absolute -left-36 top-16 h-[340px] w-[340px] rounded-full border border-white/[0.06] md:-left-28 md:h-[420px] md:w-[420px]" />
        <div className="hero-mono-right absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full border border-white/[0.06] md:-right-24 md:h-[440px] md:w-[440px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          Extensão Universitária • Sistemas de Informação
        </p>

        <h1
          className="animate-fade-up mt-6 text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl md:text-6xl md:leading-[1.08]"
          style={{ animationDelay: "0.06s" }}
        >
          Inteligência Artificial
          <br />
          aplicada ao cotidiano.
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:text-[17px]"
          style={{ animationDelay: "0.12s" }}
        >
          Uma coleção de 6 guias abertos e gratuitos, desenvolvidos na
          universidade para orientar cidadãos, estudantes e pequenos negócios no
          uso prático, ético e seguro da Inteligência Artificial.
        </p>

        {/* Barra de busca estilo editorial */}
        <div
          className="animate-fade-up mx-auto mt-10 max-w-2xl"
          style={{ animationDelay: "0.18s" }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-950 py-2.5 pl-5 pr-2.5 transition-colors focus-within:border-neutral-600"
          >
            <Search className="h-4 w-4 shrink-0 text-neutral-500" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Qual tema você procura hoje?"
              aria-label="Buscar tema na coleção"
              className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors hover:bg-neutral-200"
            >
              <span>Buscar</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Pílulas de filtro rápido */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {ebookCategories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "border-white bg-white text-black"
                      : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
