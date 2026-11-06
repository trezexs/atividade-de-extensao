import { useEffect, useMemo, useState } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { ebooksData, ebookCategories, type Ebook } from "@/data/ebooks";

function CoverBlock({
  ebook,
  onClick,
}: {
  ebook: Ebook;
  onClick: () => void;
}) {
  if (ebook.coverUrl) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group relative aspect-[5/4] w-full overflow-hidden rounded-sm border border-neutral-800/80 text-left focus:outline-none focus:ring-1 focus:ring-white/40"
      >
        <img
          src={ebook.coverUrl}
          alt={`Capa do ${ebook.volume}: ${ebook.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver sinopse do ${ebook.volume}: ${ebook.title}`}
      className="group relative aspect-[5/4] w-full overflow-hidden rounded-sm border border-neutral-800/80 text-left transition-colors duration-300 hover:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/40"
      style={{ background: ebook.coverGradient }}
    >
      <span className="absolute top-4 right-4 text-[11px] font-medium text-neutral-500 transition-colors duration-200 group-hover:text-neutral-300">
        {ebook.category}
      </span>

      <span className="absolute bottom-4 left-4 text-xs font-medium tabular-nums tracking-widest text-neutral-400 transition-colors group-hover:text-white">
        {ebook.number}
      </span>
    </button>
  );
}

function EbookItem({
  ebook,
  onOpen,
}: {
  ebook: Ebook;
  onOpen: () => void;
}) {
  const handlePdfAction = () => {
    if (ebook.pdfUrl) {
      window.open(ebook.pdfUrl, "_blank", "noopener,noreferrer");
    } else {
      onOpen();
    }
  };

  return (
    <article className="reveal flex flex-col">
      <CoverBlock ebook={ebook} onClick={onOpen} />

      <h3 className="mt-4 text-base font-medium leading-snug text-white">
        <button
          type="button"
          onClick={onOpen}
          className="text-left transition-colors hover:text-neutral-300"
        >
          {ebook.title}
        </button>
      </h3>

      <p className="mt-2 text-xs text-neutral-500">
        {ebook.volume} · Guia Prático em PDF
      </p>

      <div className="mt-3.5 inline-flex items-center gap-5 text-xs font-medium">
        <button
          type="button"
          onClick={onOpen}
          className="text-white underline-offset-4 transition-colors hover:text-neutral-300 hover:underline"
        >
          Ler sinopse
        </button>
        <button
          type="button"
          onClick={handlePdfAction}
          className="inline-flex items-center gap-1 text-white underline-offset-4 transition-colors hover:text-neutral-300 hover:underline"
        >
          <span>Baixar PDF</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}

function EbookModal({
  ebook,
  onClose,
}: {
  ebook: Ebook;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-ebook-title"
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="animate-scale-in relative flex max-h-[88vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 p-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              {ebook.volume} · {ebook.category} · {ebook.readingTime}
            </p>
            <h3
              id="modal-ebook-title"
              className="mt-2.5 text-lg font-medium leading-snug text-white sm:text-xl"
            >
              {ebook.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-white"
            aria-label="Fechar modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-4 border-b border-neutral-800 pb-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium text-neutral-500">
                Foco do volume
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-200">
                {ebook.focus}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-500">
                Público indicado
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-200">
                {ebook.audience}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Sumário de conteúdos
            </p>
            <ul className="mt-3 divide-y divide-neutral-800/70 border-t border-neutral-800">
              {ebook.topics.map((topic, i) => (
                <li
                  key={topic}
                  className="flex items-baseline gap-3 py-2.5 text-sm leading-relaxed text-neutral-300"
                >
                  <span className="text-xs tabular-nums text-neutral-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-neutral-800 pt-5">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Aplicação prática
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              {ebook.practicalTip}
            </p>
          </div>

          {ebook.pdfUrl ? (
            <a
              href={ebook.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
            >
              <span>Baixar PDF Gratuito ({ebook.volume})</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-800 pt-5 sm:flex-row">
              <p className="text-xs text-neutral-500">
                O arquivo PDF do {ebook.volume} será disponibilizado em breve.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-neutral-200"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type EbooksProps = {
  query: string;
  onQueryChange: (q: string) => void;
  category: string | null;
  onCategoryChange: (c: string | null) => void;
};

export default function Ebooks({
  query,
  onQueryChange,
  category,
  onCategoryChange,
}: EbooksProps) {
  const [selected, setSelected] = useState<Ebook | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ebooksData.filter((e) => {
      const matchesCategory = !category || e.category === category;
      const matchesQuery =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.shortSummary.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.topics.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="acervo" className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <h2 className="text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
            Os 6 guias da coleção
          </h2>
        </div>

        {/* Barra de busca e filtros monocromáticos */}
        <div className="reveal mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar no acervo..."
              aria-label="Buscar no acervo"
              className="w-full rounded-full border border-neutral-800 bg-neutral-950 py-2 pl-10 pr-8 text-xs text-white placeholder:text-neutral-500 transition-colors focus:border-neutral-600 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange("")}
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onCategoryChange(null)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === null
                  ? "bg-white text-black"
                  : "border border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white"
              }`}
            >
              Todos
            </button>
            {ebookCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  onCategoryChange(category === cat ? null : cat)
                }
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  category === cat
                    ? "bg-white text-black"
                    : "border border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid editorial de 3 colunas */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ebook) => (
              <EbookItem
                key={ebook.id}
                ebook={ebook}
                onOpen={() => setSelected(ebook)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 border-t border-neutral-800 pt-10 text-center">
            <p className="text-sm text-neutral-400">
              Nenhum guia encontrado para{" "}
              <span className="text-white">"{query || category}"</span>.
            </p>
            <button
              type="button"
              onClick={() => {
                onQueryChange("");
                onCategoryChange(null);
              }}
              className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-neutral-200"
            >
              Mostrar todos os 6 volumes
            </button>
          </div>
        )}
      </div>

      {selected && (
        <EbookModal ebook={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
