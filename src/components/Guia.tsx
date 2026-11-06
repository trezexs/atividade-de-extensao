import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { curiositiesData, promptsData, type PromptExample } from "@/data/ebooks";

function PromptBlock({ prompt }: { prompt: PromptExample }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silencioso
    }
  };

  return (
    <div className="reveal flex flex-col justify-between border-t border-neutral-800 pt-5">
      <div>
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {prompt.category}
        </p>
        <h4 className="mt-2 text-base font-medium text-white">
          {prompt.title}
        </h4>
        <p className="mt-1 text-sm text-neutral-400">{prompt.description}</p>

        <div className="mt-4 rounded-lg border border-neutral-800 bg-neutral-950 p-4">
          <p className="text-sm leading-relaxed text-neutral-300">
            {prompt.prompt}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition-colors hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-white" />
              <span className="text-white">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar comando</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Guia() {
  return (
    <section id="guia" className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Bloco 1: Desmistificando a IA */}
        <div className="reveal grid grid-cols-1 gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Guia de Leitura
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
              Desmistificando a IA
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Conceitos essenciais, mitos e cuidados de segurança digital
              explicados de forma direta, sem jargões técnicos, para uso no dia
              a dia.
            </p>
          </div>

          <div className="divide-y divide-neutral-800">
            {curiositiesData.map((c) => (
              <div key={c.id} className="py-5 first:pt-0 last:pb-0">
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {c.label}
                </p>
                <h3 className="mt-1.5 text-base font-medium text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco 2: Exemplos Práticos */}
        <div className="reveal mt-16 grid grid-cols-1 gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              Exemplos Práticos
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
              Comandos para experimentar
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Copie qualquer um dos modelos ao lado, substitua os trechos entre
              colchetes <span className="text-white">[como este]</span> com os
              seus dados e utilize na ferramenta de sua preferência.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {promptsData.map((p) => (
              <PromptBlock key={p.id} prompt={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
