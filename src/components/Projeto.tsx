import { odsData, teamMembers, courseInfo } from "@/data/ebooks";

const projectPillars = [
  { value: "06", label: "Guias temáticos (34 pág. cada)" },
  { value: "30", label: "Capítulos práticos no acervo" },
  { value: "100%", label: "Acesso gratuito e aberto" },
  { value: "04", label: "ODS da ONU contemplados" },
];

const methodologySteps = [
  {
    code: "01",
    title: "Conhecimento",
    text: "Fundamentos claros sobre o que a Inteligência Artificial faz, seus limites técnicos e por que ela não substitui o julgamento humano.",
  },
  {
    code: "02",
    title: "Aplicação",
    text: "Estudos de caso reais, checklists operacionais, roteiros de implementação em etapas e exemplos práticos adaptados à realidade brasileira.",
  },
  {
    code: "03",
    title: "Responsabilidade",
    text: "Diretrizes de ética, proteção de dados pessoais (LGPD), prevenção a fraudes, combate a vieses e supervisão humana em todas as decisões.",
  },
];

export default function Projeto() {
  return (
    <section id="projeto" className="bg-black px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Sobre o projeto */}
        <div className="reveal grid grid-cols-1 gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              O Projeto · Edição 2026
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
              Conhecimento, aplicação e responsabilidade
            </h2>
          </div>

          <div>
            <p className="text-base leading-relaxed text-neutral-400">
              A coleção{" "}
              <span className="text-white">
                IA na Prática: Inteligência Artificial aplicada ao cotidiano
              </span>{" "}
              é um Projeto de Extensão Universitária desenvolvido por alunos do
              curso de{" "}
              <span className="text-white">
                Sistemas de Informação ({courseInfo.classCode})
              </span>{" "}
              da <span className="text-white">{courseInfo.institutionFull}</span>.
              Cada guia temático de 34 páginas foi estruturado em 5 capítulos
              progressivos, combinando base conceitual sólida, ferramentas de
              apoio à decisão, estudos de caso, plano de implementação e
              glossário acessível.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              O objetivo é aproximar o conhecimento acadêmico de estudantes,
              educadores, microempreendedores, trabalhadores e lideranças
              comunitárias, promovendo autonomia tecnológica com ética e
              segurança.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-neutral-800 pt-6 sm:grid-cols-4">
              {projectPillars.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Três eixos editoriais dos e-books */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-neutral-800 pt-8 sm:grid-cols-3">
              {methodologySteps.map((step) => (
                <div key={step.code}>
                  <p className="text-xs tabular-nums text-neutral-500">
                    Eixo {step.code}
                  </p>
                  <h3 className="mt-1.5 text-sm font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
                    {step.text}
                  </p>
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
                Os seis volumes da coleção dialogam diretamente com quatro metas
                da Agenda 2030 das Nações Unidas.
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

        {/* Ficha Técnica e Colaboradores */}
        <div className="reveal mt-16 border-t border-neutral-800 pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Ficha Técnica
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                Equipe e Colaboradores
              </h2>
              <div className="mt-5 space-y-2 text-xs leading-relaxed text-neutral-400">
                <p>
                  <span className="font-medium text-white">Curso:</span>{" "}
                  {courseInfo.name} ({courseInfo.classCode})
                </p>
                <p>
                  <span className="font-medium text-white">Instituição:</span>{" "}
                  {courseInfo.institutionFull}
                </p>
                <p>
                  <span className="font-medium text-white">Modalidade:</span>{" "}
                  Projeto de Extensão Universitária
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                  Integrantes do Projeto ({teamMembers.length} colaboradores)
                </p>
                <span className="text-[11px] text-neutral-500">
                  {courseInfo.classCode} · {courseInfo.institution}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {teamMembers.map((member) => (
                  <div
                    key={member.ra}
                    className="flex items-center justify-between rounded-lg border border-neutral-800/80 bg-neutral-950 px-4 py-3 transition-colors hover:border-neutral-700"
                  >
                    <span className="text-sm font-medium text-white">
                      {member.name}
                    </span>
                    <span className="ml-3 shrink-0 rounded border border-neutral-800 bg-neutral-900 px-2 py-0.5 font-mono text-xs font-medium text-neutral-300">
                      {member.ra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
