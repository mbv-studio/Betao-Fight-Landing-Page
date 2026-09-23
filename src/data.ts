/* Dados centralizados da landing page da Betão Fight. */

const WHATSAPP_NUMBER = "5579991399024";

const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = buildWhatsAppLink(
  "Olá! Vim pelo site da Betão Fight e gostaria de saber mais sobre os treinos."
);

export const TRIAL_WHATSAPP_LINK = buildWhatsAppLink(
  "Olá! Vim pelo site da Betão Fight e quero agendar uma aula experimental."
);

export const PERSONAL_WHATSAPP_LINK = buildWhatsAppLink(
  "Olá! Vim pelo site da Betão Fight e quero saber mais sobre o Personal Fight."
);

export const productWhatsAppLink = (productName: string) =>
  buildWhatsAppLink(
    `Olá! Vim pelo site da Betão Fight e quero conhecer os modelos disponíveis de ${productName}.`
  );

export const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/place/Centro+de+lutas+Bet%C3%A3o+fight/@-10.9636226,-37.0703973";

export const INSTAGRAM_LINK = "https://www.instagram.com/betaofight_official/";

export const HERO = {
  eyebrow: "Centro de Lutas Betão Fight · Aracaju",
  title: "Treine seu corpo. Fortaleça sua mente.",
  description: "Boxe, MMA e Kickboxing para iniciantes e atletas.",
  ctaPrimary: "Agendar aula experimental",
  ctaSecondary: "Ver horários",
} as const;

export interface Modality {
  name: string;
  description: string;
}

export const MODALITIES: Modality[] = [
  { name: "Boxe", description: "Técnica, defesa, agilidade e condicionamento." },
  { name: "MMA", description: "Treino completo com diferentes bases de luta." },
  { name: "Kickboxing", description: "Combina golpes de braços e pernas com intensidade." },
];

export interface Plan {
  name: string;
  price: string;
  detail: string;
  featured?: boolean;
}

export const PLANS: Plan[] = [
  { name: "3x por semana", price: "R$ 200", detail: "Plano mensal" },
  { name: "Livre", price: "R$ 250", detail: "Plano mensal", featured: true },
  { name: "2 modalidades", price: "R$ 300", detail: "Plano mensal" },
  { name: "Trimestral", price: "R$ 550", detail: "3 meses" },
  { name: "Semestral", price: "R$ 1.000", detail: "6 meses" },
  { name: "Diária", price: "R$ 40", detail: "Treino avulso" },
];

export const PLAN_PAYMENT_NOTE = "Pix/à vista. Pagamento no cartão possui acréscimo.";

export interface ScheduleSlot {
  time: string;
  modality: string;
}

export interface ScheduleGroup {
  days: string;
  shortLabel: string;
  slots: ScheduleSlot[];
}

export const SCHEDULE: ScheduleGroup[] = [
  {
    days: "Segunda · Quarta · Sexta",
    shortLabel: "SEG · QUA · SEX",
    slots: [
      { time: "08:00", modality: "Betão · Turmas mistas" },
      { time: "11:00", modality: "Personalizado" },
      { time: "12:00", modality: "Betão · Turmas mistas" },
      { time: "14:00", modality: "Personalizado" },
      { time: "15:00", modality: "Muay Thai · Júlia" },
      { time: "16:00", modality: "Betão · Turmas mistas" },
      { time: "17:00", modality: "Kickboxing · Entony" },
      { time: "18:00", modality: "Jiu-Jítsu · Cleonancio" },
      { time: "19:00", modality: "Betão · Turmas mistas" },
      { time: "20:00", modality: "Betão · Turmas mistas" },
      { time: "21:00", modality: "Betão · Turmas mistas" },
    ],
  },
  {
    days: "Terça · Quinta",
    shortLabel: "TER · QUI",
    slots: [
      { time: "08:00", modality: "Muay Thai · Júlia" },
      { time: "11:00", modality: "Personalizado" },
      { time: "15:00", modality: "Betão · Turmas mistas" },
      { time: "16:00", modality: "MMA" },
      { time: "18:00", modality: "Kickboxing · Entony" },
      { time: "19:00", modality: "Betão · Turmas mistas" },
      { time: "20:30", modality: "Boxe · Andreis" },
    ],
  },
  {
    days: "Sábado",
    shortLabel: "SÁBADO",
    slots: [
      { time: "08:00", modality: "Betão · Turmas mistas" },
      { time: "09:00", modality: "Treino físico" },
      { time: "10:00", modality: "Sparring" },
    ],
  },
];

export const BIO = {
  title: "Experiência de ringue aplicada ao seu treino",
  text: "Betão é ex-lutador de kickboxing e principal professor do Centro de Lutas Betão Fight. Os treinos unem técnica, disciplina e condicionamento para quem está começando e para quem busca evolução competitiva.",
} as const;

export interface GalleryImage {
  src: string;
  alt: string;
  objectPosition: string;
  objectFit?: "cover" | "contain";
}

export const GALLERY: GalleryImage[] = [
  {
    src: "/gallery-1.webp",
    alt: "Turma feminina da Betão Fight após o treino",
    objectPosition: "center 48%",
  },
  {
    src: "/gallery-2.webp",
    alt: "Equipe Betão Fight em evento de luta",
    objectPosition: "center 42%",
    objectFit: "contain",
  },
  {
    src: "/gallery-3.webp",
    alt: "Betão treinando com aluna na academia",
    objectPosition: "center 38%",
  },
];

export const PERSONAL_FIGHT = {
  title: "Personal Fight",
  subtitle: "Treino personalizado na sua casa.",
  text: "Treino individual adaptado ao seu objetivo, com horário combinado e acompanhamento do professor.",
  benefits: ["Condicionamento", "Emagrecimento", "Técnica de luta", "Horário flexível"],
  cta: "Quero conhecer o Personal Fight",
} as const;

export const LOCATION = {
  title: "Treine com a Betão Fight",
  address: "Av. Vereador Manoel Dória da Silva, 320 · Farolândia · Aracaju/SE",
  mapButton: "Abrir no Google Maps",
  whatsappButton: "Falar no WhatsApp",
} as const;

export type ProductIconName = "shirt" | "glove" | "wrap" | "cap" | "shorts";

export interface ProductCategory {
  name: string;
  category: string;
  description: string;
  icon: ProductIconName;
}

export const PRODUCTS: ProductCategory[] = [
  {
    name: "Camisa de treino masculina",
    category: "Vestuário",
    description: "Modelos para treino com conforto e liberdade de movimento.",
    icon: "shirt",
  },
  {
    name: "Camisa de treino feminina",
    category: "Vestuário",
    description: "Peças femininas para treinar com conforto e mobilidade.",
    icon: "shirt",
  },
  {
    name: "Luvas",
    category: "Equipamentos",
    description: "Luvas para Boxe e Kickboxing. Consulte tamanhos e modelos disponíveis.",
    icon: "glove",
  },
  {
    name: "Bandagens",
    category: "Equipamentos",
    description: "Proteção para mãos e punhos durante os treinos.",
    icon: "wrap",
  },
  {
    name: "Bonés",
    category: "Acessórios",
    description: "Bonés para completar o visual da Betão Fight fora do treino.",
    icon: "cap",
  },
  {
    name: "Shorts de Kickboxing",
    category: "Vestuário",
    description: "Modelagem leve e adequada para chutes e movimentação intensa.",
    icon: "shorts",
  },
  {
    name: "Shorts de Boxe",
    category: "Vestuário",
    description: "Shorts com mobilidade e corte pensado para o treino de Boxe.",
    icon: "shorts",
  },
];

export const FOOTER_LINKS = [
  { label: "Instagram", href: INSTAGRAM_LINK },
  { label: "WhatsApp", href: WHATSAPP_LINK },
  { label: "Localização", href: GOOGLE_MAPS_LINK },
] as const;

export const FOOTER_CREDIT = "Desenvolvido pela MBV Studio";
