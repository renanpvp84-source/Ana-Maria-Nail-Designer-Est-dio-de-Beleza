import { ServiceItem, ReviewItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Ana Maria',
  title: 'Nail Designer Especialista',
  studioName: 'Salão de Beleza Ana Maria',
  instagramHandle: '@anamariaab_unhas',
  instagramUrl: 'https://instagram.com/anamariaab_unhas',
  phoneDisplay: '(99) 98433-5543',
  whatsappRaw: '5599984335543',
  whatsappLink: 'https://wa.me/5599984335543',
  address: 'R. Djalma Dutra, 240, Bacabal - MA, 65700-000',
  city: 'Bacabal - MA',
  plusCode: 'Q6FC+7R Bacabal, Maranhão',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Djalma+Dutra,+240,+Bacabal+-+MA,+65700-000',
  rating: '5,0',
  reviewsCount: 11,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'fibra-de-vidro',
    name: 'Alongamento em Fibra de Vidro',
    tagline: 'A especialidade da profissional com máxima naturalidade e resistência',
    description:
      'Estrutura translúcida e delicada moldada individualmente sobre cada unha. Proporciona curvatura elegante em C, alta durabilidade e acabamento imperceptível que valoriza o formato natural das mãos.',
    image: '/assets/images/service_fibra_vidro_1792768668516.webp',
    srcSet: '/assets/images/service_fibra_vidro-500w.webp 500w, /assets/images/service_fibra_vidro_1792768668516.webp 1200w',
    duration: 'Aprox. 2h30',
    highlights: ['Curvatura fina e natural', 'Resistência superior', 'Acabamento translúcido'],
    recommendedFor: 'Quem busca unhas longas, simétricas e com resistência estrutural para a rotina diária.'
  },
  {
    id: 'esmaltacao-gel',
    name: 'Esmaltação em Gel Alto Padrão',
    tagline: 'Brilho vítreo duradouro e unhas impecáveis por semanas',
    description:
      'Aplicação de géis nobres com secagem instantânea em cabine LED/UV. O resultado é um brilho espelhado que não lasca, não perde o brilho e protege a unha natural contra quebras.',
    image: '/assets/images/service_esmaltacao_gel_1792768669630.webp',
    srcSet: '/assets/images/service_esmaltacao_gel-500w.webp 500w, /assets/images/service_esmaltacao_gel_1792768669630.webp 1200w',
    duration: 'Aprox. 1h15',
    highlights: ['Brilho espelhado duradouro', 'Secagem imediata', 'Zero descascamento'],
    recommendedFor: 'Mulheres dinâmicas que exigem esmalte impecável, sem tempo para retoques semanais.'
  },
  {
    id: 'nail-art-chrome',
    name: 'Nail Art Delicada & Acabamentos Especiais',
    tagline: 'Francesinha sorriso, glazed pearl e detalhes sofisticados',
    description:
      'Criações personalizadas com estética minimalista e refinada: efeito glazed donut perolado, folha de ouro sutil, micro-francesinhas precisas e acabamento chrome em tons champagne e rose gold.',
    image: '/assets/images/service_nail_art_1792768669218.webp',
    srcSet: '/assets/images/service_nail_art-500w.webp 500w, /assets/images/service_nail_art_1792768669218.webp 1200w',
    duration: 'Aprox. 1h45',
    highlights: ['Traços finos e simétricos', 'Tendências internacionais', 'Pigmentos perolados premium'],
    recommendedFor: 'Ocasiões especiais, noivas, formaturas ou para expressar personalidade com elegância.'
  },
  {
    id: 'manutencao-preventiva',
    name: 'Manutenção de Fibra de Vidro',
    tagline: 'Alinhamento da estrutura, reposição do ponto de tensão e nova esmaltação',
    description:
      'Procedimento fundamental realizado a cada 20 a 25 dias para acompanhar o crescimento da unha natural, restabelecer o ápice de sustentação e manter a saúde e beleza da fibra.',
    image: '/assets/images/hero_nail_art_luxury_1792768668218.webp',
    srcSet: '/assets/images/hero_nail_art_luxury-500w.webp 500w, /assets/images/hero_nail_art_luxury_1792768668218.webp 1376w',
    duration: 'Aprox. 2h00',
    highlights: ['Preservação da lâmina natural', 'Reposição do ápice', 'Higienização profilática'],
    recommendedFor: 'Manter a integridade física da unha natural e renovar o visual com segurança.'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    author: 'Era uma vez Bandeira',
    badge: 'Local Guide · 50 avaliações',
    date: 'Avaliação verificada no Google Maps',
    rating: 5,
    text: 'É surpreendente, simples e eficaz, profissional altamente qualificada, está sempre se atualizando. Vale a pena conferir.'
  },
  {
    author: 'Jaqueline carvalho',
    badge: 'Local Guide · 25 avaliações',
    date: 'Avaliação verificada no Google Maps',
    rating: 5,
    text: 'Excelente profissional, atendimento excelente.'
  },
  {
    author: 'dell gomes',
    badge: 'Cliente verificado',
    date: 'Avaliação verificada no Google Maps',
    rating: 5,
    text: 'Excelente profissional....'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'Produtos de Alto Padrão',
    description: 'Fibras importadas ultrafinas e géis de alta estabilidade e durabilidade com certificação.',
  },
  {
    title: 'Biossegurança & Higiene',
    description: 'Protocolos rigorosos de esterilização em autoclave, descartáveis individuais e ambiente asseptizado.',
  },
  {
    title: 'Atualização Constante',
    description: 'Técnicas modernas alinhadas às tendências globais de manicure russa, simetria e saúde ungueal.',
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Qual a durabilidade do alongamento em fibra de vidro?',
    answer:
      'Com manutenções periódicas a cada 20 a 25 dias, o alongamento em fibra de vidro pode durar meses mantendo-se intacto. A fibra se integra perfeitamente à lâmina e oferece resistência contra impactos comuns do dia a dia.'
  },
  {
    question: 'A aplicação da fibra danifica a unha natural?',
    answer:
      'Não. O procedimento profissional correto não desgasta a lâmina ungueal excessivamente. Apenas a oleosidade superficial é retirada com lixa de gramatura fina e produtos preparadores específicos. O que danifica unhas é remoção incorreta por tração em casa.'
  },
  {
    question: 'Qual a diferença entre a esmaltação comum e a esmaltação em gel?',
    answer:
      'A esmaltação em gel seca 100% na cabine UV/LED instantaneamente, o que significa que você sai do estúdio sem risco de borrar ao pegar chaves ou bolsa. O brilho permanece espelhado por até 20 dias sem descascar as pontas.'
  },
  {
    question: 'Como funciona o agendamento de horários?',
    answer:
      'O agendamento é realizado diretamente pelo WhatsApp oficial de Ana Maria. Você pode selecionar o serviço desejado, a data ou período de preferência e verificar os horários livres na agenda.'
  },
  {
    question: 'Ana Maria também ministra cursos para quem quer ingressar na área?',
    answer:
      'Sim! Conforme destacado no perfil oficial (@anamariaab_unhas), Ana Maria oferece capacitação e cursos para profissionais e iniciantes que desejam dominar fibra de vidro e esmaltação em gel de alto padrão.'
  }
];
