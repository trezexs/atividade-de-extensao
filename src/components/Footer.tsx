import { useState } from "react";
import { Check, ArrowUp } from "lucide-react";

const quickLinks = [
  { href: "#acervo", label: "Acervo" },
  { href: "#guia", label: "Guia de Leitura" },
  { href: "#projeto", label: "O Projeto" },
  { href: "#avaliar", label: "Avaliar" },
];

export default function Footer() {
  const [copiedLink, setCopiedLink] = useState(false);

  const shareText = encodeURIComponent(
    "Conheça a Coleção IA na Prática: 6 guias gratuitos sobre Inteligência Artificial aplicada ao cotidiano.",
  );
  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // Fallback silencioso
    }
  };

  return (
    <footer className="border-t border-neutral-800 bg-black px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a
              href="#topo"
              className="text-sm font-medium tracking-tight text-white"
            >
              IA na Prática
            </a>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-neutral-500">
              Projeto de Extensão Universitária do curso de Sistemas de
              Informação. Coleção aberta, gratuita e educativa.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-600">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs text-neutral-500 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-600">
              Compartilhe
            </p>
            <p className="mt-4 text-xs leading-relaxed text-neutral-500">
              Leve este material gratuito para a sua comunidade.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-neutral-600"
              >
                Compartilhar no WhatsApp
              </a>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs font-medium text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white"
              >
                {copiedLink ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-white" />
                    <span className="text-white">Copiado</span>
                  </>
                ) : (
                  <span>Copiar link</span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-900 pt-6 text-xs text-neutral-600 sm:flex-row">
          <p>
            Leandro · Sistemas de Informação · Projeto de Extensão Universitária
          </p>
          <a
            href="#topo"
            className="inline-flex items-center gap-1 text-neutral-500 transition-colors hover:text-white"
          >
            <span>Topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
