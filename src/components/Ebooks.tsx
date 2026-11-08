import { useEffect, useMemo, useState } from "react";
import { Search, X, ArrowUpRight, Download, BookOpen, Clock } from "lucide-react";
import { ebooksData, ebookCategories, type Ebook } from "@/data/ebooks";

function CoverBlock({
  ebook,
  onClick,
}: {
  ebook: Ebook;
  onClick: () => void;
}) {
  const hasPdf = Boolean(ebook.pdfUrl);

  if (ebook.coverUrl) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`Ver detalhes do ${ebook.volume}: ${ebook.title}`}
        className="group relative aspect-[3/4] w-full overflow-hidden rounded-md border border-neutral-800/90 bg-neutral-950 text-left shadow-lg transition-all duration-300 hover:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/40"
      >
        <img
          src={ebook.coverUrl}
          alt={`Capa do ${ebook.volume}: ${ebook.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/75 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
          {ebook.category}
        </span>
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-[11px] font-medium">{ebook.volume}</span>
          <span className="text-[11px] font-medium underline underline-offset-2">Ver detalhes →</span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ver detalhes do ${ebook.volume}: ${ebook.title}`}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-md border border-dashed border-neutral-800 bg-neutral-950 p-5 text-left transition-colors duration-300 hover:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/40"
      style={{ background: ebook.coverGradient }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/90 px-2.5 py-0.5 text-[10px] font-medium text-neutral-400">
          Capa em breve
        </span>

        <span className="text-[11px] font-medium text-neutral-400 transition-colors duration-200 group-hover:text-neutral-200">
          {ebook.category}
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            {ebook.edition} · Guia Temático
          </p>
          <p className="mt-1 text-xs font-medium text-neutral-300 group-hover:text-white">
            {ebook.volume}
          </p>
        </div>

        <span className="text-2xl font-medium tabular-nums tracking-tight text-neutral-400 transition-colors group-hover:text-white">
          {ebook.number}
        </span>
      </div>
    </button>
  );
}

function EbookItem({
  ebook,
  onOpen,
  onReadPdf,
}: {
  ebook: Ebook;
  onOpen: () => void;
  onReadPdf: () => void;
}) {
  const hasPdf = Boolean(ebook.pdfUrl);

  return (
    <article className="reveal flex flex-col justify-between">
      <div>
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

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-400">
          {ebook.shortSummary}
        </p>

        <p className="mt-2.5 text-[11px] text-neutral-500">
          {ebook.volume} · {ebook.pages} · {ebook.edition}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-neutral-900 pt-3.5 text-xs font-medium">
        <button
          type="button"
          onClick={onOpen}
          className="text-white underline-offset-4 transition-colors hover:text-neutral-300 hover:underline"
        >
          Ler sinopse
        </button>

        {hasPdf ? (
          <>
            <button
              type="button"
              onClick={onReadPdf}
              className="inline-flex items-center gap-1 text-neutral-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Ler online</span>
            </button>

            <a
              href={ebook.pdfUrl}
              download={ebook.pdfFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white underline-offset-4 transition-colors hover:text-neutral-300 hover:underline"
            >
              <span>Baixar PDF</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </>
        ) : (
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-300"
          >
            <Clock className="h-3.5 w-3.5" />
            <span>Aguardando anexo</span>
          </button>
        )}
      </div>
    </article>
  );
}

function EbookModal({
  ebook,
  initialTab = "synopsis",
  onClose,
}: {
  ebook: Ebook;
  initialTab?: "synopsis" | "reader";
  onClose: () => void;
}) {
  const hasPdf = Boolean(ebook.pdfUrl);
  const [activeTab, setActiveTab] = useState<"synopsis" | "reader">(
    hasPdf ? initialTab : "synopsis",
  );

  useEffect(() => {
    setActiveTab(hasPdf ? initialTab : "synopsis");
  }, [ebook, hasPdf, initialTab]);

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
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <div
        className={`animate-scale-in relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition-all ${
          activeTab === "reader" ? "max-w-4xl" : "max-w-2xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do modal */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 p-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              {ebook.volume} · {ebook.category} · {ebook.pages} · {ebook.edition}
            </p>
            <h3
              id="modal-ebook-title"
              className="mt-2 text-lg font-medium leading-snug text-white sm:text-xl"
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

        {/* Seletor de visualização (Sinopse completa vs. Leitor de PDF) */}
        {hasPdf && (
          <div className="flex items-center justify-between gap-4 border-b border-neutral-800 bg-black/40 px-6 py-2.5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("synopsis")}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                  activeTab === "synopsis"
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Sumário e Estudo de Caso
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reader")}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                  activeTab === "reader"
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Ler E-book (PDF)</span>
              </button>
            </div>

            <a
              href={ebook.pdfUrl}
              download={ebook.pdfFileName}
              className="hidden items-center gap-1.5 text-xs font-medium text-neutral-300 transition-colors hover:text-white sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Baixar arquivo</span>
            </a>
          </div>
        )}

        {/* Conteúdo do modal */}
        {activeTab === "reader" && hasPdf ? (
          <div className="flex flex-1 flex-col bg-neutral-900">
            <iframe
              src={ebook.pdfUrl}
              title={`Leitor do ${ebook.volume}: ${ebook.title}`}
              className="h-[68vh] w-full border-0"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 bg-neutral-950 px-6 py-4">
              <p className="text-xs text-neutral-400">
                {ebook.volume} · {ebook.pages} · Acesso aberto e gratuito
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={ebook.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-neutral-500"
                >
                  <span>Abrir em nova guia</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={ebook.pdfUrl}
                  download={ebook.pdfFileName}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-neutral-200"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Baixar PDF</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            {/* Foco, público e miniatura da capa */}
            <div className="flex flex-col gap-5 border-b border-neutral-800 pb-5 sm:flex-row sm:items-start">
              {ebook.coverUrl && (
                <div className="aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-md border border-neutral-800 shadow-md sm:w-32">
                  <img
                    src={ebook.coverUrl}
                    alt={`Capa do ${ebook.volume}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
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
            </div>

            {/* Estrutura completa dos 5 capítulos do PDF */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Estrutura da obra (5 capítulos · {ebook.pages})
              </p>
              <div className="mt-3 divide-y divide-neutral-800/70 border-t border-neutral-800">
                {ebook.chapters.map((chapter) => (
                  <div key={chapter.number} className="py-3.5">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-medium tabular-nums text-neutral-500">
                        Cap. {chapter.number}
                      </span>
                      <h4 className="text-sm font-medium text-white">
                        {chapter.title}
                      </h4>
                    </div>
                    <ul className="mt-2 space-y-1 pl-14">
                      {chapter.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs leading-relaxed text-neutral-400"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Estudo de caso do e-book */}
            <div className="border-t border-neutral-800 pt-5">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Estudo de caso do guia
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {ebook.caseStudy}
              </p>
            </div>

            {/* Recomendação prática */}
            <div className="border-t border-neutral-800 pt-5">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Aplicação prática imediata
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                {ebook.practicalTip}
              </p>
            </div>

            {/* Glossário essencial */}
            <div className="border-t border-neutral-800 pt-5">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Conceitos-chave do glossário
              </p>
              <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ebook.glossary.map((g) => (
                  <div
                    key={g.term}
                    className="rounded-lg border border-neutral-800/80 bg-black p-3.5"
                  >
                    <dt className="text-xs font-medium text-white">{g.term}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-neutral-400">
                      {g.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Ações de download / leitura ou espaço reservado */}
            {hasPdf ? (
              <div className="flex flex-col gap-3 border-t border-neutral-800 pt-5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setActiveTab("reader")}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-neutral-500 hover:bg-neutral-800"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Ler PDF aqui no site</span>
                </button>
                <a
                  href={ebook.pdfUrl}
                  download={ebook.pdfFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Baixar PDF Gratuito ({ebook.volume})</span>
                </a>
              </div>
            ) : (
              <div className="rounded-xl border border-neutral-800 bg-black p-4">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-medium text-white">
                      Espaço reservado para o arquivo PDF do {ebook.volume}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                      Assim que o arquivo for enviado, ficará disponível em{" "}
                      <code className="text-neutral-300">
                        /ebooks/volume-01-inclusao.pdf
                      </code>{" "}
                      para leitura online e download gratuito.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-neutral-200"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
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
  const [selected, setSelected] = useState<{
    ebook: Ebook;
    tab: "synopsis" | "reader";
  } | null>(null);

  const availableCount = useMemo(
    () => ebooksData.filter((e) => Boolean(e.pdfUrl)).length,
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ebooksData.filter((e) => {
      const matchesCategory = !category || e.category === category;
      const matchesQuery =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.shortSummary.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.topics.some((t) => t.toLowerCase().includes(q)) ||
        e.chapters.some(
          (c) =>
            c.title.toLowerCase().includes(q) ||
            c.items.some((item) => item.toLowerCase().includes(q)),
        ) ||
        e.glossary.some(
          (g) =>
            g.term.toLowerCase().includes(q) ||
            g.definition.toLowerCase().includes(q),
        );
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="acervo" className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Acervo Digital · Edição 2026
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
              Os 6 guias da coleção
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            <span className="text-white">{availableCount} de 6 volumes</span>{" "}
            com PDF completo disponível para leitura e download
          </p>
        </div>

        {/* Barra de busca e filtros monocromáticos */}
        <div className="reveal mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar tema, capítulo ou conceito..."
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
                onOpen={() => setSelected({ ebook, tab: "synopsis" })}
                onReadPdf={() => setSelected({ ebook, tab: "reader" })}
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
        <EbookModal
          ebook={selected.ebook}
          initialTab={selected.tab}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
