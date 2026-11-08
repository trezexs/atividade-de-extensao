// ============================================================================
//  ACERVO E CONTEÚDO — COLEÇÃO "IA NA PRÁTICA" (EDIÇÃO 2026)
//  Projeto de Extensão Universitária · Sistemas de Informação · Autor: Leandro
//  Conhecimento • Aplicação • Responsabilidade
// ============================================================================

export type EbookChapter = {
  number: string;
  title: string;
  items: string[];
};

export type EbookGlossaryItem = {
  term: string;
  definition: string;
};

export type Ebook = {
  id: number;
  number: string;
  volume: string;
  title: string;
  shortSummary: string;
  focus: string;
  audience: string;
  readingTime: string;
  pages: string;
  edition: string;
  coverGradient: string;
  coverUrl: string;
  pdfUrl: string;
  pdfFileName: string;
  topics: string[];
  chapters: EbookChapter[];
  caseStudy: string;
  practicalTip: string;
  glossary: EbookGlossaryItem[];
  category: string;
};

export const ebooksData: Ebook[] = [
  {
    id: 1,
    number: "01",
    volume: "Volume 1",
    title:
      "Inteligência Artificial e Transformação Social: Caminhos para uma Sociedade mais Inclusiva",
    shortSummary:
      "Direitos humanos, acessibilidade, redução de desigualdades, serviços públicos e governança ética para iniciativas inclusivas com IA.",
    focus: "Inclusão digital, redução de desigualdades, serviços públicos e direitos",
    audience: "Estudantes, educadores, gestores públicos, organizações sociais e cidadãos",
    readingTime: "35 min de leitura",
    pages: "34 páginas",
    edition: "Edição 2026",
    coverGradient:
      "radial-gradient(circle at 30% 25%, #262626 0%, #111111 55%, #070707 100%)",
    coverUrl: "/capas/capa-volume-01.jpg",
    pdfUrl: "/ebooks/volume-01-inclusao.pdf",
    pdfFileName: "IA_na_Pratica_Vol_01_Transformacao_Social.pdf",
    topics: [
      "Fundamentos da IA e da transformação social: dados, infraestrutura e direitos humanos",
      "Inclusão, acesso e redução de desigualdades: tecnologias assistivas e mitigação de vieses",
      "IA em serviços públicos e políticas sociais: saúde, educação, cidades e controle democrático",
      "Ética, governança e proteção de pessoas: privacidade, supervisão humana e sustentabilidade",
      "Implementação de iniciativas inclusivas: diagnóstico participativo e parcerias comunitárias",
    ],
    chapters: [
      {
        number: "01",
        title: "Fundamentos da IA e da transformação social",
        items: [
          "Compreendendo a inteligência artificial além do entusiasmo tecnológico",
          "Dados, algoritmos e infraestrutura: a base material da inovação",
          "Transformação social, direitos humanos e desenvolvimento sustentável",
          "Como identificar problemas sociais que podem ser apoiados por IA",
        ],
      },
      {
        number: "02",
        title: "Inclusão, acesso e redução de desigualdades",
        items: [
          "Desigualdade digital: conectividade, dispositivos e letramento",
          "Acessibilidade e tecnologias assistivas baseadas em IA",
          "Viés algorítmico, discriminação e representação de grupos",
          "Participação social no desenho de soluções tecnológicas",
        ],
      },
      {
        number: "03",
        title: "IA em serviços públicos e políticas sociais",
        items: [
          "Saúde pública, prevenção e apoio à tomada de decisão",
          "Educação, assistência social e proteção de direitos",
          "Cidades inteligentes, mobilidade e serviços urbanos",
          "Transparência, explicabilidade e controle democrático",
        ],
      },
      {
        number: "04",
        title: "Ética, governança e proteção de pessoas",
        items: [
          "Privacidade, proteção de dados e consentimento",
          "Responsabilização, supervisão humana e direito de contestação",
          "Desinformação, manipulação e integridade informacional",
          "Impactos ambientais e sustentabilidade da infraestrutura",
        ],
      },
      {
        number: "05",
        title: "Implementação de iniciativas inclusivas",
        items: [
          "Diagnóstico participativo e priorização de necessidades",
          "Desenvolvimento, testes e avaliação de impacto social",
          "Parcerias entre universidade, governo, empresas e comunidade",
          "Escala responsável, continuidade e prestação de contas",
        ],
      },
    ],
    caseStudy:
      "Uma prefeitura identifica que moradores de bairros periféricos têm dificuldade para acessar informações sobre serviços, horários e documentação. Em vez de começar pela compra de uma plataforma, a equipe realiza oficinas com moradores, mapeia dúvidas recorrentes e testa um assistente virtual multilíngue indicando fontes oficiais, encaminhando casos complexos a atendentes humanos e garantindo que nenhuma elegibilidade a benefícios seja decidida de forma automatizada.",
    practicalTip:
      "Em 90 dias, mapeie uma necessidade social junto às pessoas afetadas, teste uma solução simples em tarefa de baixo risco com minimização de dados pessoais e mantenha sempre canais de supervisão humana e direito de contestação.",
    glossary: [
      {
        term: "Acessibilidade",
        definition:
          "Condição de uso autônomo e seguro por pessoas com diferentes capacidades e necessidades.",
      },
      {
        term: "Viés algorítmico",
        definition:
          "Distorção sistemática nos dados ou modelos que pode produzir resultados desiguais ou discriminatórios.",
      },
      {
        term: "Inclusão digital",
        definition:
          "Condições efetivas de conectividade, acesso a dispositivos, competência crítica e participação no ambiente digital.",
      },
      {
        term: "Supervisão humana",
        definition:
          "Participação efetiva de pessoas na revisão, validação e controle de decisões apoiadas por sistemas automatizados.",
      },
    ],
    category: "Inclusão",
  },
  {
    id: 2,
    number: "02",
    volume: "Volume 2",
    title:
      "Inteligência Artificial na Educação: Novas Possibilidades para o Aprendizado",
    shortSummary:
      "Fundamentos pedagógicos, planejamento de ensino, inclusão escolar, integridade acadêmica e implementação responsável da IA.",
    focus: "Planejamento pedagógico, personalização do ensino e integridade acadêmica",
    audience: "Estudantes, professores da educação básica, universitários e gestores escolares",
    readingTime: "35 min de leitura",
    pages: "34 páginas",
    edition: "Edição 2026",
    coverGradient:
      "radial-gradient(circle at 70% 30%, #242424 0%, #101010 58%, #070707 100%)",
    coverUrl: "/capas/capa-volume-02.jpg",
    pdfUrl: "/ebooks/volume-02-educacao.pdf",
    pdfFileName: "IA_na_Pratica_Vol_02_Educacao.pdf",
    topics: [
      "Fundamentos da IA na educação: IA generativa, sistemas adaptativos e alfabetização crítica",
      "Planejamento de aulas, sequências didáticas, tutoria inteligente e avaliação formativa",
      "Inclusão, acessibilidade, adaptação de ritmos e proteção de dados escolares",
      "Ética, autoria, integridade acadêmica, verificação de alucinações e vieses",
      "Implementação pedagógica responsável: formação docente e governança escolar",
    ],
    chapters: [
      {
        number: "01",
        title: "Fundamentos da IA na educação",
        items: [
          "O que a IA faz e o que ela não substitui no processo educativo",
          "IA generativa, sistemas adaptativos e análise de aprendizagem",
          "Alfabetização em IA e pensamento crítico",
          "Princípios pedagógicos antes da escolha de ferramentas",
        ],
      },
      {
        number: "02",
        title: "Planejamento, ensino e aprendizagem",
        items: [
          "Planejamento de aulas, sequências didáticas e materiais",
          "Personalização de trilhas e feedback formativo",
          "Tutoria inteligente e apoio ao estudo autônomo",
          "Avaliação da aprendizagem em tempos de IA generativa",
        ],
      },
      {
        number: "03",
        title: "Inclusão, acessibilidade e equidade",
        items: [
          "Recursos de acessibilidade para estudantes com diferentes necessidades",
          "Adaptação de linguagem, formatos e ritmos de aprendizagem",
          "Desigualdade de acesso e estratégias de mitigação",
          "Proteção de crianças, adolescentes e dados escolares",
        ],
      },
      {
        number: "04",
        title: "Ética, autoria e integridade acadêmica",
        items: [
          "Autoria, plágio, transparência e declaração de uso",
          "Alucinações, erros e verificação de informações",
          "Privacidade, segurança e seleção de plataformas",
          "Vieses culturais, linguísticos e representacionais",
        ],
      },
      {
        number: "05",
        title: "Implementação pedagógica responsável",
        items: [
          "Diagnóstico institucional e formação docente",
          "Desenho de atividades com objetivos observáveis",
          "Experimentação, avaliação e melhoria contínua",
          "Política escolar de uso, comunicação e governança",
        ],
      },
    ],
    caseStudy:
      "Em uma escola de ensino médio, professores usaram IA como apoio para produzir variações de perguntas de compreensão e explicações em diferentes níveis de complexidade. As respostas geradas foram revisadas pelos docentes antes do uso em sala, e os estudantes aprenderam a comparar as explicações da ferramenta com o material didático e a registrar onde encontraram imprecisões.",
    practicalTip:
      "Use a IA como parceira de estudo socrático: peça perguntas progressivas sobre o tema estudado, responda com suas próprias palavras e confira sempre as informações em livros e fontes acadêmicas confiáveis.",
    glossary: [
      {
        term: "Alfabetização em IA",
        definition:
          "Conjunto de conhecimentos, habilidades e atitudes para compreender como sistemas de IA funcionam, avaliar seus limites e utilizá-los com responsabilidade.",
      },
      {
        term: "Avaliação formativa",
        definition:
          "Acompanhamento contínuo da aprendizagem com devolutivas construtivas que orientam o desenvolvimento do estudante ao longo do processo.",
      },
      {
        term: "Integridade acadêmica",
        definition:
          "Compromisso com a honestidade intelectual, autoria própria, transparência sobre o uso de ferramentas e respeito às fontes.",
      },
      {
        term: "Personalização",
        definition:
          "Adaptação de exemplos, formatos e ritmos de estudo às necessidades específicas de cada estudante sob orientação pedagógica.",
      },
    ],
    category: "Educação",
  },
  {
    id: 3,
    number: "03",
    volume: "Volume 3",
    title:
      "Inteligência Artificial e Empreendedorismo: Inovação e Oportunidades para Pequenos Negócios",
    shortSummary:
      "Mapeamento de processos, marketing, relacionamento com clientes, operação, finanças, LGPD e plano de adoção para pequenos negócios.",
    focus: "Produtividade comercial, marketing, atendimento, gestão e ROI para pequenos negócios",
    audience: "Microempreendedores individuais (MEIs), autônomos, comerciantes e gestores locais",
    readingTime: "35 min de leitura",
    pages: "34 páginas",
    edition: "Edição 2026",
    coverGradient:
      "radial-gradient(circle at 45% 65%, #252525 0%, #111111 58%, #070707 100%)",
    coverUrl: "/capas/capa-volume-03.jpg",
    pdfUrl: "/ebooks/volume-03-empreendedorismo.pdf",
    pdfFileName: "IA_na_Pratica_Vol_03_Empreendedorismo.pdf",
    topics: [
      "Entendendo a oportunidade: mapeamento de processos, gargalos e proposta de valor",
      "Marketing, pesquisa de mercado, presença digital, atendimento e CRM",
      "Operação, automação administrativa, organização financeira, estoque e indicadores",
      "Riscos, custos diretos e indiretos, ROI, privacidade (LGPD) e supervisão humana",
      "Plano de adoção para pequenos negócios: desenho de piloto, metas e capacitação",
    ],
    chapters: [
      {
        number: "01",
        title: "Entendendo a oportunidade",
        items: [
          "IA como ferramenta de produtividade, não como promessa mágica",
          "Mapeamento de processos e identificação de gargalos",
          "Modelos de negócio, proposta de valor e experiência do cliente",
          "Critérios para escolher ferramentas e fornecedores",
        ],
      },
      {
        number: "02",
        title: "Marketing, vendas e relacionamento",
        items: [
          "Pesquisa de mercado e inteligência competitiva",
          "Conteúdo, comunicação e presença digital",
          "Atendimento, CRM e relacionamento com clientes",
          "Previsão de demanda, recomendação e personalização",
        ],
      },
      {
        number: "03",
        title: "Operação, finanças e gestão",
        items: [
          "Automação administrativa e redução de retrabalho",
          "Organização financeira e apoio à análise gerencial",
          "Estoque, compras, logística e previsão",
          "Indicadores, dados e decisões orientadas por evidências",
        ],
      },
      {
        number: "04",
        title: "Riscos, custos e responsabilidade",
        items: [
          "Custos diretos, indiretos e retorno sobre investimento (ROI)",
          "Privacidade, LGPD e proteção de dados de clientes",
          "Erros, dependência tecnológica e revisão humana",
          "Propriedade intelectual, contratos e segurança",
        ],
      },
      {
        number: "05",
        title: "Plano de adoção para pequenos negócios",
        items: [
          "Começar pequeno: seleção de um problema prioritário",
          "Desenho de piloto, metas e indicadores",
          "Capacitação da equipe e mudança de processos",
          "Escala, documentação e avaliação periódica",
        ],
      },
    ],
    caseStudy:
      "Uma pequena loja de produtos naturais enfrentava demora para responder dúvidas recorrentes sobre horário, entrega e formas de pagamento. A equipe organizou uma base simples com perguntas frequentes, políticas de troca e tabela de produtos e passou a usar um assistente para sugerir respostas, mantendo confirmação humana obrigatória para preços, estoque e restrições alimentares durante um piloto de quatro semanas.",
    practicalTip:
      "Antes de assinar qualquer ferramenta paga, escolha um único gargalo operacional (como respostas repetitivas no atendimento), rode um piloto de 4 semanas com revisão humana e meça o tempo economizado.",
    glossary: [
      {
        term: "ROI (Retorno sobre Investimento)",
        definition:
          "Relação entre o benefício financeiro ou operacional obtido e o custo total investido na solução.",
      },
      {
        term: "CRM",
        definition:
          "Gestão do Relacionamento com o Cliente: organização do histórico de contatos, preferências e pós-venda.",
      },
      {
        term: "MVP / Piloto",
        definition:
          "Versão inicial enxuta de um processo ou solução aplicada em escopo controlado para validar resultados reais antes de escalar.",
      },
      {
        term: "CAC",
        definition:
          "Custo de Aquisição de Clientes: soma dos esforços de marketing e vendas dividida pelo número de novos clientes conquistados.",
      },
    ],
    category: "Pequenos Negócios",
  },
  {
    id: 4,
    number: "04",
    volume: "Volume 4",
    title:
      "Inteligência Artificial e Segurança Digital: Proteção, Ética e Responsabilidade",
    shortSummary:
      "Cibersegurança, prevenção a engenharia social e deepfakes, proteção de dados (LGPD), governança e programa prático de segurança.",
    focus: "Prevenção a fraudes, deepfakes, proteção de dados (LGPD) e arquitetura segura",
    audience: "Cidadãos, famílias, profissionais de tecnologia, estudantes e pequenas organizações",
    readingTime: "35 min de leitura",
    pages: "34 páginas",
    edition: "Edição 2026",
    coverGradient:
      "radial-gradient(circle at 60% 35%, #232323 0%, #101010 58%, #070707 100%)",
    coverUrl: "/capas/capa-volume-04.jpg",
    pdfUrl: "/ebooks/volume-04-seguranca-digital.pdf",
    pdfFileName: "IA_na_Pratica_Vol_04_Seguranca_Digital.pdf",
    topics: [
      "Panorama da IA e da segurança digital: ativos, ameaças, vulnerabilidades e defesa",
      "Ameaças contemporâneas: phishing personalizado, deepfakes e clonagem de voz",
      "Proteção de dados (LGPD), controle de acesso, segurança de prompts e monitoramento",
      "Ética, governança, transparência, supervisão humana e gestão de fornecedores",
      "Programa prático de segurança com IA: inventário, políticas de uso e resposta a incidentes",
    ],
    chapters: [
      {
        number: "01",
        title: "Panorama da IA e da segurança digital",
        items: [
          "Conceitos essenciais de IA, cibersegurança e risco",
          "Como a IA fortalece a defesa de sistemas",
          "Como agentes maliciosos podem explorar IA",
          "Ativos, ameaças, vulnerabilidades e impacto",
        ],
      },
      {
        number: "02",
        title: "Ameaças contemporâneas e engenharia social",
        items: [
          "Phishing, fraude e mensagens altamente personalizadas",
          "Deepfakes, clonagem de voz e falsificação de identidade",
          "Automação de ataques e descoberta de vulnerabilidades",
          "Desinformação, extorsão e manipulação digital",
        ],
      },
      {
        number: "03",
        title: "Proteção de dados e arquitetura segura",
        items: [
          "LGPD, finalidade, minimização e ciclo de vida dos dados",
          "Controle de acesso, autenticação e gestão de segredos",
          "Segurança de modelos, prompts e integrações",
          "Logs, monitoramento, resposta a incidentes e continuidade",
        ],
      },
      {
        number: "04",
        title: "Ética, governança e responsabilidade",
        items: [
          "Transparência, explicabilidade e prestação de contas",
          "Viés, discriminação e impactos sobre direitos",
          "Supervisão humana e limites para automação",
          "Gestão de fornecedores e avaliação de terceiros",
        ],
      },
      {
        number: "05",
        title: "Programa prático de segurança com IA",
        items: [
          "Inventário de sistemas e classificação de riscos",
          "Políticas de uso seguro de ferramentas generativas",
          "Testes, simulações e capacitação de usuários",
          "Auditoria, melhoria contínua e resposta coordenada",
        ],
      },
    ],
    caseStudy:
      "Uma empresa recebeu uma ligação urgente que imitava a voz de um diretor solicitando uma transferência imediata para um fornecedor. A funcionária do setor financeiro estranhou o pedido fora do fluxo padrão e seguiu a regra interna de confirmação por canal independente, descobrindo que se tratava de tentativa de fraude por clonagem de voz e evitando o prejuízo.",
    practicalTip:
      "Adote verificação em duas etapas em todas as contas, nunca insira dados pessoais ou sigilosos em ferramentas públicas de IA e exija confirmação por canal independente para qualquer pedido financeiro urgente.",
    glossary: [
      {
        term: "Deepfake",
        definition:
          "Mídia sintética de áudio, imagem ou vídeo gerada por IA para imitar a aparência ou a voz de uma pessoa.",
      },
      {
        term: "Engenharia social",
        definition:
          "Manipulação psicológica baseada em urgência, autoridade ou medo para induzir vítimas a revelar dados ou realizar pagamentos.",
      },
      {
        term: "LGPD",
        definition:
          "Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), que regula o tratamento ético e seguro de dados pessoais no Brasil.",
      },
      {
        term: "Prompt injection",
        definition:
          "Técnica maliciosa que insere instruções ocultas ou manipuladas para contornar regras de segurança de um modelo de IA.",
      },
    ],
    category: "Segurança Digital",
  },
  {
    id: 5,
    number: "05",
    volume: "Volume 5",
    title:
      "Inteligência Artificial e o Futuro do Trabalho: Competências para uma Nova Era",
    shortSummary:
      "Transformação das ocupações, competências humanas e digitais, redesenho de processos, direitos no trabalho e requalificação contínua.",
    focus: "Complementaridade humano-IA, competências do futuro e transição profissional justa",
    audience: "Trabalhadores, estudantes, gestores de equipes e profissionais em transição de carreira",
    readingTime: "35 min de leitura",
    pages: "34 páginas",
    edition: "Edição 2026",
    coverGradient:
      "radial-gradient(circle at 35% 55%, #262626 0%, #111111 58%, #070707 100%)",
    coverUrl: "/capas/capa-volume-05.jpg",
    pdfUrl: "/ebooks/volume-05-futuro-do-trabalho.pdf",
    pdfFileName: "IA_na_Pratica_Vol_05_Futuro_do_Trabalho.pdf",
    topics: [
      "Transformações no mundo do trabalho: automação de tarefas e complementaridade humana",
      "Competências para a nova era: alfabetização em IA, pensamento crítico e colaboração",
      "IA nas organizações e profissões: redesenho de funções, recrutamento e produtividade",
      "Direitos, ética e proteção no trabalho: privacidade, transparência e saúde ocupacional",
      "Preparação individual e organizacional: diagnóstico de competências e requalificação",
    ],
    chapters: [
      {
        number: "01",
        title: "Transformações no mundo do trabalho",
        items: [
          "Automação de tarefas e transformação de ocupações",
          "IA generativa e novas formas de produzir conhecimento",
          "Complementaridade entre pessoas e sistemas inteligentes",
          "Desigualdades, transições e qualidade do trabalho",
        ],
      },
      {
        number: "02",
        title: "Competências para a nova era",
        items: [
          "Alfabetização digital e compreensão de IA",
          "Pensamento crítico, criatividade e resolução de problemas",
          "Comunicação, colaboração e inteligência socioemocional",
          "Aprendizagem contínua e adaptabilidade",
        ],
      },
      {
        number: "03",
        title: "IA nas organizações e nas profissões",
        items: [
          "Reconfiguração de processos e desenho de funções",
          "Recrutamento, avaliação e gestão de pessoas",
          "Produtividade, qualidade e autonomia profissional",
          "Trabalho remoto, plataformas e novas formas de coordenação",
        ],
      },
      {
        number: "04",
        title: "Direitos, ética e proteção no trabalho",
        items: [
          "Monitoramento algorítmico e privacidade do trabalhador",
          "Discriminação automatizada em seleção e promoção",
          "Transparência, participação e negociação",
          "Saúde, segurança e bem-estar em ambientes automatizados",
        ],
      },
      {
        number: "05",
        title: "Preparação individual e organizacional",
        items: [
          "Diagnóstico de competências e plano de desenvolvimento",
          "Requalificação, mobilidade e aprendizagem no fluxo do trabalho",
          "Liderança responsável e participação das equipes",
          "Indicadores para uma transição justa e sustentável",
        ],
      },
    ],
    caseStudy:
      "Em uma empresa de serviços, a equipe de atendimento temia que a introdução de IA reduzisse postos de trabalho. A liderança envolveu os próprios trabalhadores no redesenho do processo: a ferramenta ficou responsável por resumir solicitações e preparar rascunhos iniciais, enquanto o tempo liberado foi direcionado para casos complexos, prevenção de problemas recorrentes e melhoria da qualidade do serviço.",
    practicalTip:
      "Mapeie as atividades da sua rotina em três grupos — tarefas repetitivas que a IA pode acelerar, tarefas analíticas de revisão conjunta e decisões humanas insubstituíveis — e concentre seu aprendizado nas duas últimas.",
    glossary: [
      {
        term: "IA aumentativa",
        definition:
          "Uso da Inteligência Artificial para ampliar a capacidade analítica e criativa humana, mantendo a decisão final com o profissional.",
      },
      {
        term: "Requalificação (Reskilling)",
        definition:
          "Desenvolvimento de novas competências para atuar em funções transformadas pela tecnologia.",
      },
      {
        term: "Transição justa",
        definition:
          "Processo de mudança tecnológica conduzido com transparência, capacitação, proteção de direitos e distribuição equilibrada de ganhos.",
      },
      {
        term: "Complementaridade",
        definition:
          "Arranjo produtivo em que sistemas digitais processam volume e velocidade enquanto pessoas aportam contexto, ética e empatia.",
      },
    ],
    category: "Trabalho",
  },
  {
    id: 6,
    number: "06",
    volume: "Volume 6",
    title:
      "Inteligência Artificial e Desenvolvimento Comunitário: Soluções Tecnológicas para Desafios Locais",
    shortSummary:
      "Diagnóstico territorial participativo, saúde, cultura, agricultura familiar, co-criação, soberania de dados e impacto coletivo.",
    focus: "Inovação social comunitária, co-criação territorial e soberania de dados locais",
    audience: "Lideranças comunitárias, associações de moradores, coletivos, ONGs e extensionistas",
    readingTime: "35 min de leitura",
    pages: "34 páginas",
    edition: "Edição 2026",
    coverGradient:
      "radial-gradient(circle at 55% 40%, #242424 0%, #101010 58%, #070707 100%)",
    coverUrl: "/capas/capa-volume-06.jpg",
    pdfUrl: "/ebooks/volume-06-desenvolvimento-comunitario.pdf",
    pdfFileName: "IA_na_Pratica_Vol_06_Desenvolvimento_Comunitario.pdf",
    topics: [
      "Território, comunidade e tecnologia: diagnóstico participativo e soberania de dados",
      "Aplicações para desafios locais: saúde preventiva, cultura, agricultura familiar e clima",
      "Participação e desenho de soluções: co-criação, linguagem simples e governança",
      "Ética, riscos e sustentabilidade: privacidade comunitária e autonomia tecnológica",
      "Da ideia ao impacto coletivo: teoria de mudança, prototipagem, parcerias e continuidade",
    ],
    chapters: [
      {
        number: "01",
        title: "Território, comunidade e tecnologia",
        items: [
          "Desenvolvimento comunitário e inovação orientada por necessidades",
          "Mapeamento territorial, escuta e diagnóstico participativo",
          "Dados comunitários: qualidade, representatividade e soberania",
          "Infraestrutura, conectividade e capacidades locais",
        ],
      },
      {
        number: "02",
        title: "Aplicações para desafios locais",
        items: [
          "Saúde comunitária e informação preventiva",
          "Educação, cultura e preservação de memória local",
          "Agricultura familiar, comércio e economia solidária",
          "Mobilidade, meio ambiente e gestão de riscos",
        ],
      },
      {
        number: "03",
        title: "Participação e desenho de soluções",
        items: [
          "Co-criação com moradores e organizações locais",
          "Serviços digitais acessíveis e linguagem simples",
          "Conhecimento tradicional, diversidade e contexto cultural",
          "Governança de dados e consentimento comunitário",
        ],
      },
      {
        number: "04",
        title: "Ética, riscos e sustentabilidade",
        items: [
          "Privacidade em comunidades pequenas e dados sensíveis",
          "Vieses territoriais e invisibilidade estatística",
          "Dependência de plataformas e custos de manutenção",
          "Impactos ambientais e responsabilidade tecnológica",
        ],
      },
      {
        number: "05",
        title: "Da ideia ao impacto coletivo",
        items: [
          "Seleção de desafios e teoria de mudança",
          "Prototipagem, pilotos e avaliação comunitária",
          "Parcerias, financiamento e capacitação local",
          "Continuidade, replicação e autonomia do território",
        ],
      },
    ],
    caseStudy:
      "Uma associação de pequenos produtores rurais precisava organizar informações sobre previsão de chuva, pragas recorrentes e calendário de feiras locais. Em parceria com estudantes e técnicos, o grupo co-criou uma solução simples que combinava dados meteorológicos públicos, mensagens curtas em linguagem acessível para celulares com baixa conectividade e revisão por agentes locais.",
    practicalTip:
      "Comece sempre pela escuta ativa do território: reúna moradores para definir o problema prioritário antes de escolher a tecnologia e garanta que a comunidade saiba operar e manter a solução com autonomia.",
    glossary: [
      {
        term: "Co-criação",
        definition:
          "Desenvolvimento conjunto de soluções com participação ativa dos moradores desde a definição do problema até a avaliação.",
      },
      {
        term: "Soberania de dados comunitários",
        definition:
          "Direito da comunidade de decidir como informações sobre seu território e seus moradores são coletadas, guardadas e utilizadas.",
      },
      {
        term: "Teoria de mudança",
        definition:
          "Encadeamento lógico que conecta um problema real do território às ações propostas e aos resultados sociais esperados.",
      },
      {
        term: "Tecnologia apropriada",
        definition:
          "Solução tecnológica compatível com a conectividade, os custos, a cultura e a capacidade local de manutenção.",
      },
    ],
    category: "Comunidade",
  },
];

export const ebookCategories: string[] = ebooksData.map((e) => e.category);

export type PromptExample = {
  id: number;
  category: string;
  title: string;
  description: string;
  prompt: string;
};

export const promptsData: PromptExample[] = [
  {
    id: 1,
    category: "Educação · Vol. 02",
    title: "Estudo socrático e plano de aula adaptado",
    description:
      "Apoie o estudo autônomo ou estruture atividades com objetivos pedagógicos claros.",
    prompt:
      "Atue como um tutor pedagógico. Quero estudar o tema [insira o tema ou disciplina]. Primeiro, explique os conceitos centrais em linguagem clara com dois exemplos práticos. Em seguida, faça 3 perguntas progressivas, uma de cada vez, para verificar minha compreensão e indique quais fontes devo consultar para aprofundamento.",
  },
  {
    id: 2,
    category: "Pequenos Negócios · Vol. 03",
    title: "Diagnóstico de gargalos e atendimento comercial",
    description:
      "Organize respostas frequentes e estruture um piloto de produtividade para o seu negócio.",
    prompt:
      "Atue como um consultor de gestão para pequenos negócios. Tenho um empreendimento de [descreva seu ramo, ex: loja local / serviços / alimentação] e meu principal gargalo hoje é [ex: demora no atendimento pelo WhatsApp / organização de estoque]. Sugira um plano piloto de 4 semanas com baixo custo, roteiro de mensagens com revisão humana e 3 indicadores simples para medir o resultado.",
  },
  {
    id: 3,
    category: "Segurança Digital · Vol. 04",
    title: "Checklist de verificação contra fraudes e deepfakes",
    description:
      "Crie protocolos simples de proteção familiar ou organizacional alinhados à LGPD.",
    prompt:
      "Atue como um especialista em segurança digital e proteção de dados (LGPD). Elabore um protocolo prático em linguagem simples para [minha família / minha pequena equipe] com 5 regras de verificação antes de pagamentos urgentes, cuidados para não expor dados sensíveis em ferramentas de IA e sinais de alerta para identificar phishing e clonagem de voz.",
  },
  {
    id: 4,
    category: "Trabalho & Comunidade · Vols. 05 e 06",
    title: "Plano de requalificação ou projeto comunitário",
    description:
      "Estruture um roteiro de desenvolvimento profissional ou uma ação coletiva no seu bairro.",
    prompt:
      "Ajude-me a estruturar um plano prático para [minha transição profissional na área de... / um projeto comunitário no bairro sobre...]. Organize a resposta em: 1) diagnóstico do problema ou das competências necessárias; 2) atividades em que a IA pode apoiar como ferramenta complementar; 3) etapas que exigem decisão e participação humana; e 4) metas para os próximos 30 dias.",
  },
];

export type Curiosity = {
  id: number;
  label: string;
  title: string;
  text: string;
};

export const curiositiesData: Curiosity[] = [
  {
    id: 1,
    label: "Conhecimento · Fundamentos",
    title: "O que a Inteligência Artificial faz — e o que ela não substitui",
    text: "Sistemas de IA reconhecem padrões estatísticos em grandes volumes de dados para classificar, prever ou gerar textos, imagens e códigos. No entanto, eles não possuem consciência, ética própria nem responsabilidade jurídica: o julgamento crítico, a empatia e a decisão final permanecem humanos.",
  },
  {
    id: 2,
    label: "Aplicação · Método",
    title: "O problema vem sempre antes da ferramenta",
    text: "Tanto na escola quanto no pequeno negócio ou na associação comunitária, adotar IA com sucesso começa por mapear o processo real, definir um objetivo claro e testar um piloto simples — nunca por escolher uma tecnologia na moda sem saber qual necessidade ela resolve.",
  },
  {
    id: 3,
    label: "Verificação · Pensamento Crítico",
    title: "Alucinações e vieses exigem conferência em fontes confiáveis",
    text: "Modelos generativos podem produzir respostas fluentes e convincentes que contêm dados imprecisos, citações inexistentes ou vieses históricos. Em educação, saúde, finanças, direitos e gestão, toda saída gerada por IA deve passar por revisão humana.",
  },
  {
    id: 4,
    label: "Responsabilidade · Segurança e LGPD",
    title: "Minimização de dados e confirmação por canal independente",
    text: "Nunca insira CPF, senhas, segredos comerciais, dados escolares de menores ou informações sensíveis de moradores em ferramentas públicas de IA. Diante de pedidos urgentes por áudio ou vídeo, confirme sempre por um segundo canal independente.",
  },
];

export type Ods = {
  number: number;
  title: string;
  description: string;
};

export const odsData: Ods[] = [
  {
    number: 4,
    title: "Educação de Qualidade",
    description:
      "Promove a alfabetização crítica em Inteligência Artificial, o apoio pedagógico responsável e a integridade acadêmica por meio de guias didáticos abertos (Volume 2).",
  },
  {
    number: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    description:
      "Fortalece pequenos negócios locais, a complementaridade entre trabalhadores e tecnologia e a requalificação profissional justa (Volumes 3 e 5).",
  },
  {
    number: 10,
    title: "Redução das Desigualdades",
    description:
      "Democratiza o acesso ao conhecimento tecnológico em linguagem clara, promovendo acessibilidade, proteção digital e inclusão cidadã (Volumes 1 e 4).",
  },
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    description:
      "Apoia o diagnóstico participativo, a soberania de dados locais e a co-criação de soluções tecnológicas para desafios reais do território (Volume 6).",
  },
];
