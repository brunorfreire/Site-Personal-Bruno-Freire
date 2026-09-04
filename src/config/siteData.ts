/**
 * ==============================================================================
 * CENTRAL DE CONFIGURAÇÃO E DADOS - BRUNO FREIRE | PERSONAL TRAINER
 * ==============================================================================
 * Este arquivo centraliza todas as informações do site.
 * Para atualizar textos, links, telefone, serviços, imagens ou redes sociais,
 * altere os valores abaixo.
 * ==============================================================================
 */

import {
  ContentItem,
  DifferentialItem,
  NavigationLink,
  RealLifeBenefit,
  RealLifeConnection,
  ResultItem,
  ServiceItem,
} from '../types';

export const SITE_CONFIG = {
  // Dados do Profissional
  name: 'Bruno Freire',
  profession: 'Personal Trainer',
  tagline: 'Seu corpo preparado para viver mais e melhor.',
  signatureMethod: 'Corpo Preparado 40+',
  sinceYear: 2001,
  cref: 'CREF 014968 G',

  // Regiões de Atendimento Presencial
  primaryLocations: [
    'Copacabana',
    'Botafogo',
    'Ipanema',
    'Leblon',
    'Flamengo',
    'Laranjeiras',
    'Zona Sul do Rio de Janeiro',
  ],
  onlineServiceAvailable: true,

  // Contatos Oficiais (Preservando URLs conforme solicitado, sem Facebook)
  contacts: {
    whatsappNumber: '5521982053338',
    whatsappFormatted: '(21) 98205-3338',
    whatsappGeneralMessage:
      'Olá, Bruno! Vi seu site e gostaria de conhecer melhor o seu trabalho.',
    whatsappDefaultUrl:
      'https://wa.me/5521982053338?text=Ol%C3%A1%2C%20Bruno!%20Vi%20seu%20site%20e%20gostaria%20de%20conhecer%20melhor%20o%20seu%20trabalho.',
    instagramUrl: 'https://instagram.com/melhorforma.oficial',
    instagramHandle: '@melhorforma.oficial',
    youtubeUrl: 'https://youtube.com/channel/UC_ybnQHqw92uvilIT1eWy0Q',
    youtubeChannelName: 'Canal Oficial no YouTube',
  },

  // Credenciais Profissionais
  credentials: [
    {
      title: 'Profissional de Educação Física desde 2001',
      subtitle: 'Mais de duas décadas de prática consistente e ciência aplicada ao movimento.',
    },
    {
      title: 'Pós-graduado em Reabilitação Cardíaca e Populações Especiais',
      subtitle: 'Especialista em treinamento seguro para hipertensos, diabéticos, cardiopatas e pós-bariátricos.',
    },
    {
      title: '13 Anos de Experiência na Bodytech',
      subtitle: 'Atuação técnica em alto nível com acompanhamento individualizado de perfis exigentes.',
    },
    {
      title: 'Experiência em Hospitais da Aeronáutica',
      subtitle: 'Reabilitação hospitalar, supervisão de pacientes pós-cirúrgicos e grupos de risco clínico.',
    },
  ],

  // Links do Menu de Navegação
  navigation: [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'sobre', label: 'Sobre', href: '#sobre' },
    { id: 'metodo', label: 'Método 40+', href: '#metodo' },
    { id: 'servicos', label: 'Serviços', href: '#servicos' },
    { id: 'diferenciais', label: 'Diferenciais', href: '#diferenciais' },
    { id: 'resultados', label: 'Resultados', href: '#resultados' },
    { id: 'conteudos', label: 'Conteúdos', href: '#conteudos' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ] as NavigationLink[],

  // Fotos Reais e Logo Oficial
  images: {
    logo: {
      url: './images/logo-bf.jpg',
      alt: 'Bruno Freire Personal Trainer - Logo Oficial',
    },
    brunoHero: {
      url: './images/bruno-hero.jpg?v=20260904_final',
      alt: 'Bruno Freire - Personal Trainer na Zona Sul do Rio de Janeiro',
    },
    brunoAbout: {
      url: './images/bruno-treino.jpg?v=20260904_sobre',
      alt: 'Bruno Freire orientando aluno durante treino personalizado',
    },
    results: [
      {
        url: './images/resultado-1.jpg',
        alt: 'Resultado real de aluno acompanhado - Força e mobilidade funcional',
      },
      {
        url: './images/resultado-2.jpg',
        alt: 'Resultado real de aluno acompanhado - Autonomia e vitalidade 40+',
      },
      {
        url: './images/resultado-3.jpg',
        alt: 'Resultado real de aluno acompanhado - Condicionamento e corrida',
      },
    ],
  },
};

/**
 * Dores Reais vs. Conexão com o Dia a Dia
 */
export const PAIN_POINTS: RealLifeConnection[] = [
  {
    pain: 'Falta de energia e cansaço constante',
    solution: 'Estímulos sob medida que recarregam a disposição sem esgotar o seu dia.',
    iconName: 'battery-low',
  },
  {
    pain: 'Perda gradual de força e tônus muscular',
    solution: 'Fortalecimento progressivo e funcional para manter sua autonomia e vigor.',
    iconName: 'zap-off',
  },
  {
    pain: 'Dificuldade para manter a constância',
    solution: 'Planejamento realista e acolhedor que cabe na sua rotina profissional e familiar.',
    iconName: 'calendar-x',
  },
  {
    pain: 'Medo de se machucar ou piorar dores',
    solution: 'Supervisão técnica de quem é especialista em reabilitação desde 2001.',
    iconName: 'shield-alert',
  },
  {
    pain: 'Rigidez articular e perda de mobilidade',
    solution: 'Exercícios específicos de soltura articular e estabilidade para se mover com liberdade.',
    iconName: 'activity',
  },
  {
    pain: 'Frustração com treinos genéricos',
    solution: 'Prescrição individualizada para seu corpo, histórico de saúde e objetivos.',
    iconName: 'help-circle',
  },
];

export const REAL_LIFE_BENEFITS: RealLifeBenefit[] = [
  {
    title: 'Subir escadas sem perder o fôlego',
    description: 'Condicionamento cardiovascular e força de membros inferiores para os desafios do dia a dia.',
    iconName: 'arrow-up-circle',
  },
  {
    title: 'Carregar compras e bagagens com firmeza',
    description: 'Estabilidade no core e nos braços para transportar peso sem sobrecarregar a coluna.',
    iconName: 'shopping-bag',
  },
  {
    title: 'Viajar com disposição e autonomia',
    description: 'Caminhar longas distâncias, subir ladeiras e aproveitar cada passeio com conforto.',
    iconName: 'plane',
  },
  {
    title: 'Levantar do chão com facilidade',
    description: 'Recuperar a flexibilidade e potência para sentar, deitar e levantar sem depender de apoio.',
    iconName: 'footprints',
  },
  {
    title: 'Brincar com filhos ou netos',
    description: 'Agachar, correr e participar ativamente dos momentos em família com segurança total.',
    iconName: 'smile',
  },
  {
    title: 'Preservar a independência ao envelhecer',
    description: 'Construir agora a reserva muscular que garante liberdade e proteção para os próximos anos.',
    iconName: 'award',
  },
];

/**
 * 3 Serviços Principais Reorganizados
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'personal-presencial',
    title: 'Personal Presencial',
    shortDescription:
      'Treinamento individualizado em Copacabana, Botafogo, Ipanema e outros bairros da Zona Sul.',
    highlightBadge: 'Copacabana • Botafogo • Ipanema • Zona Sul',
    benefit:
      'Atendimento exclusivo na academia do seu condomínio, estúdio parceiro ou ar livre, com correção postural minuciosa em tempo real e evolução segura a cada sessão.',
    idealFor:
      'Quem valoriza a presença do treinador ao lado para máxima segurança, motivação e refinamento técnico.',
    whatsappMessage:
      'Olá, Bruno! Gostaria de saber mais sobre as aulas de personal presencial na Zona Sul.',
    iconName: 'dumbbell',
  },
  {
    id: 'acompanhamento-online',
    title: 'Acompanhamento Online',
    shortDescription: 'Planejamento e orientação profissional para treinar onde estiver.',
    highlightBadge: 'Flexibilidade Total • Qualquer Localidade',
    benefit:
      'Periodização personalizada com vídeos demonstrativos de cada exercício, análise periódica da sua execução e suporte direto com Bruno pelo WhatsApp.',
    idealFor:
      'Pessoas com rotina dinâmica, que viajam frequentemente ou residem fora do Rio de Janeiro e não abrem mão de orientação de alto nível.',
    whatsappMessage:
      'Olá, Bruno! Quero entender como funciona o acompanhamento online personalizado.',
    iconName: 'laptop',
  },
  {
    id: 'massoterapia-recuperacao',
    title: 'Massoterapia e Recuperação',
    shortDescription:
      'Liberação miofascial, alongamento e mobilidade para redução de tensões, recuperação e bem-estar, sem promessas de cura.',
    highlightBadge: 'Alívio de Tensões & Recuperação Funcional',
    benefit:
      'Técnicas manuais e de descompressão para soltura de nós musculares, alívio do estresse postural e ganho de amplitude articular, integradas de forma harmônica ao seu plano de treinos.',
    idealFor:
      'Pessoas com rigidez e sobrecarga acumulada na coluna, pescoço ou quadris decorrentes de estresse, trabalho ou intensidade dos treinos.',
    whatsappMessage:
      'Olá, Bruno! Gostaria de agendar uma sessão de massoterapia e recuperação muscular.',
    iconName: 'sparkles',
  },
];

/**
 * Áreas e Objetivos Trabalhados de Forma Integrada
 */
export const INTEGRATED_GOALS = [
  {
    title: 'Emagrecimento com Saúde',
    desc: 'Redução de gordura corporal preservando massa muscular e metabolismo.',
  },
  {
    title: 'Força e Hipertrofia Funcional',
    desc: 'Músculos fortes para sustentação articular e postura firme.',
  },
  {
    title: 'Mobilidade & Coluna sem Dores',
    desc: 'Destrave de articulações e alívio de tensões posturais.',
  },
  {
    title: 'Corrida para Iniciantes',
    desc: 'Transição segura e progressiva da caminhada para a corrida sem impacto prejudicial.',
  },
  {
    title: 'Condicionamento Cardiovascular',
    desc: 'Mais fôlego e vitalidade para o dia a dia e atividades prazerosas.',
  },
  {
    title: 'Saúde Metabólica e Populações Especiais',
    desc: 'Treinos adaptados para hipertensos, diabéticos e pós-reabilitação.',
  },
];

/**
 * 6 Pilares e Diferenciais
 */
export const DIFFERENTIALS_LIST: DifferentialItem[] = [
  {
    id: 'experiencia-2001',
    title: 'Experiência Sólida desde 2001',
    description:
      'Mais de duas décadas de prática diária acompanhando alunos com as mais diversas rotinas e perfis de saúde.',
    iconName: 'calendar-check',
  },
  {
    id: 'atendimento-individualizado',
    title: 'Atendimento 100% Individualizado',
    description:
      'Cada treino é prescrito para a sua anatomia, histórico clínico e limites, sem fichas genéricas de gaveta.',
    iconName: 'user-check',
  },
  {
    id: 'adaptacao-realidade',
    title: 'Adaptação à sua Realidade',
    description:
      'O método se adequa aos seus horários, frequência e disposição, gerando consistência e sustentabilidade.',
    iconName: 'sliders',
  },
  {
    id: 'populacoes-especiais',
    title: 'Especialista em Populações Especiais',
    description:
      'Pós-graduação em reabilitação cardíaca e experiência em hospitais da Aeronáutica com grupos clínicos.',
    iconName: 'shield-plus',
  },
  {
    id: 'acompanhamento-proximo',
    title: 'Acompanhamento Próximo e Humanizado',
    description:
      'Comunicação direta para tirar dúvidas, ajustar cargas e assegurar que você se sinta sempre assistido.',
    iconName: 'heart-handshake',
  },
  {
    id: 'foco-autonomia',
    title: 'Foco em Autonomia e Longevidade',
    description:
      'O objetivo é construir um corpo funcional e forte para você desfrutar de liberdade plena em qualquer fase.',
    iconName: 'trending-up',
  },
];

/**
 * Resultados Reais Acompanhados
 */
export const RESULTS_LIST: ResultItem[] = [
  {
    id: 'resultado-1',
    tag: 'Força & Mobilidade Funcional',
    title: 'Alívio de dores lombares e retorno à prática de exercícios',
    focus: 'Fortalecimento de core, reeducação postural e mobilidade de quadril.',
    realEvolution:
      'Evolução na capacidade de carregar peso, levantar do chão sem desconforto e realizar tarefas do cotidiano com segurança.',
    timeframe: 'Acompanhamento supervisionado',
    imageSlot: {
      recommendedFilename: 'resultado-1.jpg',
      description: 'Registro de evolução postural e fortalecimento funcional.',
      aspectRatio: '4/3',
    },
  },
  {
    id: 'resultado-2',
    tag: 'Autonomia & Vitalidade 40+',
    title: 'Ganho de disposição, tônus muscular e saúde metabólica',
    focus: 'Treinamento funcional conjugado com consistência sustentável.',
    realEvolution:
      'Melhora nos indicadores de saúde, mais energia ao longo do dia e recuperação da confiança nos movimentos.',
    timeframe: 'Evolução progressiva',
    imageSlot: {
      recommendedFilename: 'resultado-2.jpg',
      description: 'Registro de evolução física e condicionamento.',
      aspectRatio: '4/3',
    },
  },
  {
    id: 'resultado-3',
    tag: 'Condicionamento & Corrida',
    title: 'Da caminhada aos primeiros 5 km sem dores articulares',
    focus: 'Fortalecimento de estabilizadores de joelho e tornozelo, com periodização de trote.',
    realEvolution:
      'Conquista da primeira prova de corrida na orla da Zona Sul com biomecânica protegida.',
    timeframe: 'Metodologia passo a passo',
    imageSlot: {
      recommendedFilename: 'resultado-3.jpg',
      description: 'Registro de corrida orientada na orla.',
      aspectRatio: '4/3',
    },
  },
];

/**
 * Conteúdos Educativos e Programas (Vídeos / Guias)
 */
export const FEATURED_CONTENTS: ContentItem[] = [
  {
    id: 'conteudo-1',
    category: 'Mobilidade & Coluna',
    title: 'Rotina de Mobilidade Diária para Alívio de Tensões',
    description:
      'Movimentos fundamentais para destravar quadril, coluna torácica e ombros após horas sentado.',
    format: 'Vídeo Prático & Demonstração',
    youtubeQueryUrl: 'https://youtube.com/channel/UC_ybnQHqw92uvilIT1eWy0Q',
  },
  {
    id: 'conteudo-2',
    category: 'Corrida Segura',
    title: 'Transição Segura: Da Caminhada aos Primeiros 5 km',
    description:
      'Como dosar esforço, cadência e impacto articular para iniciar na corrida sem risco de lesão.',
    format: 'Planejamento de Treino',
    youtubeQueryUrl: 'https://youtube.com/channel/UC_ybnQHqw92uvilIT1eWy0Q',
  },
  {
    id: 'conteudo-3',
    category: 'Método 40+',
    title: 'Força Funcional: O Segredo da Autonomia ao Envelhecer',
    description:
      'Padrões essenciais de movimento humano — empurrar, puxar, agachar e carregar — aplicados à vida real.',
    format: 'Análise Biomecânica',
    youtubeQueryUrl: 'https://youtube.com/channel/UC_ybnQHqw92uvilIT1eWy0Q',
  },
  {
    id: 'conteudo-4',
    category: 'Prevenção de Lesões',
    title: 'Como Treinar com Segurança se Você Tem Histórico Clínico',
    description:
      'Orientações para quem convive com limitações articulares, hipertensão ou histórico cardíaco.',
    format: 'Aula Explicativa',
    youtubeQueryUrl: 'https://youtube.com/channel/UC_ybnQHqw92uvilIT1eWy0Q',
  },
];

/**
 * Função Auxiliar: Gera link direto para o WhatsApp a partir do formulário inteligente
 */
export function buildWhatsAppFormUrl(data: {
  name: string;
  objective: string;
  service: string;
  location: string;
  additionalNotes?: string;
}): string {
  const parts = [
    `Olá, Bruno! Meu nome é *${data.name.trim()}*.`,
    `Gostaria de conversar sobre treinamento personalizado.`,
    ``,
    `📌 *Serviço de interesse:* ${data.service}`,
    `🎯 *Meu objetivo:* ${data.objective}`,
    `📍 *Localização:* ${data.location}`,
  ];

  if (data.additionalNotes && data.additionalNotes.trim().length > 0) {
    parts.push(`💬 *Observações:* ${data.additionalNotes.trim()}`);
  }

  parts.push(``);
  parts.push(`Vi seu site e gostaria de saber sobre horários disponíveis e valores.`);

  const fullText = parts.join('\n');
  return `https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

/**
 * Helper para links específicos de WhatsApp
 */
export function buildWhatsAppServiceUrl(customMessage: string): string {
  return `https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
}
