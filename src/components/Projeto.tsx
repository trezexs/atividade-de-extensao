import { odsData } from "@/data/ebooks";

const projectPillars = [
  { value: "06", label: "Guias temáticos abertos" },
  { value: "100%", label: "Acesso gratuito e cidadão" },
  { value: "04", label: "ODS da ONU contemplados" },
];

export default function Projeto() {
  return (
    <section id="projeto" className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Sobre o projeto */}
        <div className="reveal grid grid-cols-1 gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              O Projeto
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
              Tecnologia que inclui, educa e transforma
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-neutral-400">
              A coleção{" "}
              <span className="text-white">
                IA na Prática: Inteligência Artificial aplicada ao cotidiano
              </span>{" "}
              é um Projeto de Extensão Universitária do curso de Sistemas de
              Informação. Nasceu para levar o conhecimento produzido na
              universidade para estudantes, trabalhadores, pequenos comerciantes
              e a comunidade em linguagem direta e acessível.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              Os 6 volumes têm licença aberta, distribuição gratuita e
              alinhamento direto aos Objetivos de Desenvolvimento Sustentável da
              ONU.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-neutral-800 pt-6">
              {projectPillars.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alinhamento com os ODS da ONU */}
        <div className="reveal mt-16 border-t border-neutral-800 pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Impacto Social
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                Alinhamento com os ODS da ONU
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                O projeto contribui diretamente para quatro metas da Agenda 2030
                das Nações Unidas.
              </p>
            </div>

            <ul className="divide-y divide-neutral-800">
              {odsData.map((ods) => (
                <li
                  key={ods.number}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <span className="text-xs font-medium tabular-nums uppercase tracking-wider text-neutral-500">
                    ODS {String(ods.number).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-white">
                      {ods.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                      {ods.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
