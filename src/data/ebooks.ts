// ============================================================================
//  ACERVO E CONTEÚDO — COLEÇÃO "IA NA PRÁTICA"
//  Projeto de Extensão Unip
// nn colocar nada de imagem via link, ta bugando

export type Ebook = {
  id: number;
  number: string;
  volume: string;
  title: string;
  shortSummary: string;
  focus: string;
  audience: string;
  readingTime: string;
  coverGradient: string;
  coverUrl: string;
  pdfUrl: string;
  topics: string[];
  practicalTip: string;
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
      "Acessibilidade, inclusão digital e cidadania: como a IA pode reduzir barreiras e ampliar direitos.",
    focus: "Acessibilidade, inclusão digital e exercício da cidadania",
    audience: "Cidadãos, lideranças sociais, familiares e agentes comunitários",
    readingTime: "12 min de leitura",
    coverGradient:
      "radial-gradient(circle at 30% 25%, #262626 0%, #111111 55%, #070707 100%)",
    coverUrl: "",
    pdfUrl: "",
    topics: [
      "O que significa inclusão digital na era da Inteligência Artificial",
      "Recursos gratuitos de acessibilidade já disponíveis no celular",
      "Legendas em tempo real, audiodescrição de imagens e leitura de tela",
      "Como assistentes de voz auxiliam pessoas com deficiência ou mobilidade reduzida",
      "Direitos digitais, acesso a serviços públicos e participação cidadã",
    ],
    practicalTip:
      "Use a câmera do celular junto a aplicativos de leitura por voz para ler bulas de remédios, placas ou documentos para idosos e pessoas com baixa visão.",
    category: "Inclusão",
  },
  {
    id: 2,
    number: "02",
    volume: "Volume 2",
    title:
      "Inteligência Artificial na Educação: Novas Possibilidades para o Aprendizado",
    shortSummary:
      "Estudo personalizado, apoio a professores e alunos: a IA como aliada da sala de aula.",
    focus: "Aprendizagem personalizada, rotina de estudos e apoio pedagógico",
    audience: "Estudantes, professores da rede básica e universitários",
    readingTime: "15 min de leitura",
    coverGradient:
      "radial-gradient(circle at 70% 30%, #242424 0%, #101010 58%, #070707 100%)",
    coverUrl: "",
    pdfUrl: "",
    topics: [
      "Como organizar rotinas de estudo e tirar dúvidas passo a passo",
      "Criação de cronogramas de revisão, resumos e simulados personalizados",
      "Apoio ao professor na elaboração de planos de aula e atividades adaptadas",
      "Uso ético e responsável: por que compreender é melhor do que apenas copiar",
      "Verificação de fontes e pensamento crítico diante de respostas automáticas",
    ],
    practicalTip:
      "Ao estudar um tema complexo, peça para a ferramenta fazer perguntas uma de cada vez e corrigir suas respostas explicando onde melhorar.",
    category: "Educação",
  },
  {
    id: 3,
    number: "03",
    volume: "Volume 3",
    title:
      "Inteligência Artificial e Empreendedorismo: Inovação e Oportunidades para Pequenos Negócios",
    shortSummary:
      "Marketing, atendimento, vendas e gestão para MEIs e comércios locais com IA.",
    focus: "Produtividade, divulgação local, vendas e organização para MEIs",
    audience: "Microempreendedores individuais (MEIs), autônomos e comerciantes",
    readingTime: "14 min de leitura",
    coverGradient:
      "radial-gradient(circle at 45% 65%, #252525 0%, #111111 58%, #070707 100%)",
    coverUrl: "",
    pdfUrl: "",
    topics: [
      "Planejamento de calendário de postagens para divulgar o comércio do bairro",
      "Roteiros de atendimento ágil e cordial para WhatsApp Business",
      "Organização de fluxo de caixa, estoque e precificação sem planilhas complexas",
      "Textos claros para promoções, cardápios, catálogos e anúncios locais",
      "Ferramentas acessíveis e gratuitas para profissionalizar o pequeno negócio",
    ],
    practicalTip:
      "Descreva seu público e seu produto e peça 5 mensagens curtas de WhatsApp para reativar clientes que não compram há mais de 30 dias.",
    category: "Pequenos Negócios",
  },
  {
    id: 4,
    number: "04",
    volume: "Volume 4",
    title:
      "Inteligência Artificial e Segurança Digital: Proteção, Ética e Responsabilidade",
    shortSummary:
      "Prevenção a golpes, deepfakes, senhas e proteção de dados (LGPD) de forma prática.",
    focus: "Prevenção a fraudes digitais, reconhecimento de deepfakes e LGPD",
    audience: "Famílias, idosos, jovens e usuários de redes sociais e bancos digitais",
    readingTime: "13 min de leitura",
    coverGradient:
      "radial-gradient(circle at 60% 35%, #232323 0%, #101010 58%, #070707 100%)",
    coverUrl: "",
    pdfUrl: "",
    topics: [
      "Como identificar golpes de clonagem de voz, falsos sorteios e links maliciosos",
      "Deepfakes de vídeo e imagem: sinais visuais e sonoros de manipulação",
      "Boas práticas de senhas fortes e verificação em duas etapas no celular",
      "LGPD descomplicada: quais dados nunca devem ser enviados em chats digitais",
      "Protocolo familiar de segurança para emergências financeiras",
    ],
    practicalTip:
      "Nunca informe CPF, senhas bancárias, códigos recebidos por SMS ou fotos de documentos dentro de ferramentas de conversação.",
    category: "Segurança Digital",
  },
  {
    id: 5,
    number: "05",
    volume: "Volume 5",
    title:
      "Inteligência Artificial e o Futuro do Trabalho: Competências para uma Nova Era",
    shortSummary:
      "Requalificação, IA como copiloto e produtividade para crescer profissionalmente.",
    focus: "Empregabilidade, requalificação profissional e produtividade",
    audience: "Trabalhadores, jovens em busca do primeiro emprego e profissionais em transição",
    readingTime: "14 min de leitura",
    coverGradient:
      "radial-gradient(circle at 35% 55%, #262626 0%, #111111 58%, #070707 100%)",
    coverUrl: "",
    pdfUrl: "",
    topics: [
      "Como utilizar a tecnologia como apoio para economizar horas em tarefas operacionais",
      "Habilidades humanas insubstituíveis: empatia, julgamento ético e criatividade",
      "Elaboração e revisão de currículos e preparação para entrevistas de emprego",
      "Redação profissional de e-mails, relatórios e apresentações de resultados",
      "Trilhas gratuitas de capacitação contínua para novas demandas do mercado",
    ],
    practicalTip:
      "Cole a descrição de uma vaga de emprego e o seu resumo profissional para simular uma entrevista com sugestões práticas para cada resposta.",
    category: "Trabalho",
  },
  {
    id: 6,
    number: "06",
    volume: "Volume 6",
    title:
      "Inteligência Artificial e Desenvolvimento Comunitário: Soluções Tecnológicas para Desafios Locais",
    shortSummary:
      "Ações de bairro, sustentabilidade e redes de apoio potencializadas por IA.",
    focus: "Organização comunitária, sustentabilidade e projetos de impacto local",
    audience: "Associações de moradores, coletivos, ONGs e voluntários",
    readingTime: "12 min de leitura",
    coverGradient:
      "radial-gradient(circle at 55% 40%, #242424 0%, #101010 58%, #070707 100%)",
    coverUrl: "",
    pdfUrl: "",
    topics: [
      "Mapeamento participativo de demandas de infraestrutura e serviços no bairro",
      "Planejamento de mutirões, campanhas solidárias e coleta seletiva",
      "Redação de ofícios, projetos sociais e editais culturais para associações",
      "Comunicação comunitária clara através de murais digitais e grupos locais",
      "Exemplos práticos de tecnologia cidadã aplicada à realidade brasileira",
    ],
    practicalTip:
      "Use modelos de texto para estruturar atas de reunião da associação do bairro e transformar ideias dos moradores em um plano de ação com prazos.",
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
    category: "Pequenos Negócios",
    title: "Para o pequeno empreendedor",
    description: "Crie ideias de postagens e mensagens para atrair clientes do bairro.",
    prompt:
      "Aja como um consultor de marketing para pequenos negócios locais. Tenho um empreendimento de [descreva seu ramo, ex: marmitaria / salão / oficina] no meu bairro. Crie 7 ideias práticas de divulgação para WhatsApp e Instagram, incluindo o texto pronto da mensagem e uma dica simples de foto que eu mesmo possa tirar com o celular.",
  },
  {
    id: 2,
    category: "Educação",
    title: "Para estudantes e educadores",
    description: "Compreenda assuntos complexos com exemplos do cotidiano.",
    prompt:
      "Explique o tema [insira a matéria ou conceito] em linguagem clara e acessível, usando duas analogias do cotidiano brasileiro. Ao final, elabore 4 perguntas práticas de fixação com gabarito comentado para eu testar meu aprendizado.",
  },
  {
    id: 3,
    category: "Trabalho",
    title: "Para currículo e entrevistas",
    description: "Destaque suas experiências profissionais e treine para vagas.",
    prompt:
      "Quero me candidatar à vaga de [nome da função]. Minhas principais experiências são [descreva o que você já fez]. Organize um resumo profissional objetivo para o meu currículo e simule 5 perguntas que o recrutador pode fazer na entrevista, com dicas de como responder com segurança.",
  },
  {
    id: 4,
    category: "Comunidade",
    title: "Para organização financeira e familiar",
    description: "Monte um planejamento mensal simples e realista.",
    prompt:
      "Atue como um educador financeiro popular. Minha renda mensal aproximada é de R$ [valor] e minhas despesas principais são [liste gastos fixos e variáveis]. Monte um quadro simples de organização mensal priorizando contas essenciais, redução de desperdícios e uma meta realista de reserva de emergência.",
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
    label: "Cotidiano",
    title: "A IA já faz parte da sua rotina há anos",
    text: "Corretores ortográficos do teclado, filtros de mensagens indesejadas, cálculo de trânsito no GPS e recomendações de música já utilizam Inteligência Artificial. A grande mudança atual é que agora podemos interagir com ela diretamente em português claro.",
  },
  {
    id: 2,
    label: "Acessibilidade",
    title: "Você não precisa saber programar para usar IA",
    text: "As ferramentas modernas funcionam por meio de conversa natural. Saber explicar o contexto do seu problema com clareza é muito mais importante do que dominar termos técnicos de informática.",
  },
  {
    id: 3,
    label: "Mito vs. Realidade",
    title: "A IA pensa sozinha e sabe tudo sem errar?",
    text: "Mito. Modelos de linguagem reconhecem padrões estatísticos e podem gerar informações imprecisas. Por isso, em temas de saúde, leis e finanças, a conferência humana continua indispensável.",
  },
  {
    id: 4,
    label: "Segurança Digital",
    title: "Como se proteger de golpes com voz ou vídeo falsos",
    text: "Golpistas utilizam ferramentas digitais para imitar a voz de parentes pedindo transferências urgentes via Pix. Combine uma pergunta ou palavra-chave secreta com sua família e sempre ligue de volta no número oficial antes de tomar qualquer decisão.",
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
      "Democratiza o letramento digital e o acesso ao conhecimento sobre Inteligência Artificial por meio de materiais didáticos abertos e gratuitos.",
  },
  {
    number: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    description:
      "Capacita autônomos, microempreendedores e trabalhadores para o uso produtivo e ético da tecnologia no fortalecimento da renda local.",
  },
  {
    number: 10,
    title: "Redução das Desigualdades",
    description:
      "Traduz conceitos avançados de Sistemas de Informação para uma linguagem cidadã, combatendo a exclusão digital em diferentes faixas etárias.",
  },
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    description:
      "Incentiva soluções colaborativas, segurança comunitária e fortalecimento de redes locais de apoio apoiadas pela tecnologia.",
  },
];
