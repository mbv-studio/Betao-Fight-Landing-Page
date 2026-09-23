/* ── Betão Fight – Dados da Landing Page ── */

const WHATSAPP_NUMBER = "5579991399024";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Betão Fight e gostaria de saber mais sobre os treinos e fazer um agendamento."
);

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/place/Centro+de+lutas+Bet%C3%A3o+fight/@-10.9636226,-37.0703973";

export const INSTAGRAM_LINK = "https://www.instagram.com/betaofight_official/";

/* ── Hero ── */
export const HERO = {
  title: "Centro de Lutas Betão Fight",
  tags: ["Boxe", "MMA", "Kickboxing"],
  description: "Treinos para iniciantes e atletas em Aracaju.",
  ctaPrimary: "Agendar treino no WhatsApp",
  ctaSecondary: "Ver horários",
} as const;

/* ── Bio ── */
export const BIO = {
  title: "Conheça o Betão",
  text: "Betão é ex-lutador de kickboxing e principal professor do Centro de Lutas Betão Fight. Com experiência dentro e fora dos ringues, transmite aos alunos técnica, disciplina, condicionamento e mentalidade de luta. Hoje, utiliza sua experiência para preparar desde quem está começando até alunos que buscam evolução técnica e competitiva.",
  image: "/betao.jpg",
} as const;

/* ── Galeria – Centro de Treinamento ── */
export interface GalleryImage {
  src: string;
  alt: string;
}

export const GALLERY = {
  title: "Nosso Centro de Treinamento",
  subtitle:
    "Estrutura completa para você treinar com segurança e intensidade. Sacos de pancada, ringue oficial, área de musculação funcional e um ambiente que respira luta.",
  cta: "Quero conhecer de perto",
  images: [
    {
      src: "/gallery-1.png",
      alt: "Turma feminina da Betão Fight posando em grupo após o treino",
    },
    {
      src: "/gallery-2.png",
      alt: "Equipe Betão Fight comemorando conquista em evento de luta",
    },
    {
      src: "/gallery-3.png",
      alt: "Betão treinando com aluna no manopla na academia",
    },
  ] as GalleryImage[],
} as const;

/* ── Modalidades ── */
export interface Modality {
  name: string;
  description: string;
}

export const MODALITIES: Modality[] = [
  { name: "Boxe", description: "Técnica, agilidade e força nos punhos." },
  { name: "MMA", description: "A combinação completa das artes marciais." },
  {
    name: "Kickboxing",
    description: "Golpes dinâmicos de braços e pernas.",
  },
];

/* ── Horários ── */
export interface ScheduleSlot {
  time: string;
  modality: string;
}

export interface ScheduleGroup {
  days: string;
  slots: ScheduleSlot[];
}

export const SCHEDULE: ScheduleGroup[] = [
  {
    days: "SEG • QUA • SEX",
    slots: [
      { time: "08:00", modality: "Betão · Turmas Mistas" },
      { time: "11:00", modality: "Personalizado" },
      { time: "12:00", modality: "Betão · Turmas Mistas" },
      { time: "14:00", modality: "Personalizado" },
      { time: "15:00", modality: "Muay Thai · Júlia" },
      { time: "16:00", modality: "Betão · Turmas Mistas" },
      { time: "17:00", modality: "Kickboxing · Entony" },
      { time: "18:00", modality: "Jiu-Jítsu · Cleonancio" },
      { time: "19:00", modality: "Betão · Turmas Mistas" },
      { time: "20:00", modality: "Betão · Turmas Mistas" },
      { time: "21:00", modality: "Betão · Turmas Mistas" },
    ],
  },
  {
    days: "TER • QUI",
    slots: [
      { time: "08:00", modality: "Muay Thai · Júlia" },
      { time: "11:00", modality: "Personalizado" },
      { time: "15:00", modality: "Betão · Turmas Mistas" },
      { time: "16:00", modality: "MMA" },
      { time: "18:00", modality: "Kickboxing · Entony" },
      { time: "19:00", modality: "Betão · Turmas Mistas" },
      { time: "20:30", modality: "Boxe · Andreis" },
    ],
  },
  {
    days: "SÁBADO",
    slots: [
      { time: "08:00", modality: "Betão · Turmas Mistas" },
      { time: "09:00", modality: "Treino Físico" },
      { time: "10:00", modality: "Sparring" },
    ],
  },
];

/* ── Personal Fight – Atendimento a Domicílio ── */
export interface PersonalBenefit {
  icon: string;
  title: string;
  desc: string;
}

export const PERSONAL_FIGHT = {
  badge: "NOVO",
  title: "Personal Fight",
  subtitle: "Treino personalizado na sua casa",
  description:
    "O Betão vai até você. Treinos sob medida, adaptados ao seu objetivo — seja emagrecer, ganhar massa muscular, melhorar o condicionamento ou simplesmente aprender a lutar. Sem desculpas, sem deslocamento.",
  benefits: [
    {
      icon: "🔥",
      title: "Emagrecimento",
      desc: "Treinos intensos para queima de gordura com técnicas de luta.",
    },
    {
      icon: "💪",
      title: "Ganho de massa",
      desc: "Exercícios funcionais combinados com artes marciais.",
    },
    {
      icon: "🕐",
      title: "Horário flexível",
      desc: "Você escolhe o melhor dia e horário para treinar.",
    },
    {
      icon: "🏠",
      title: "Na sua casa",
      desc: "Sem deslocamento. O treino vai até onde você estiver.",
    },
  ] as PersonalBenefit[],
  cta: "Agendar meu Personal Fight",
} as const;

/* ── CTA Secundário ── */
export const CTA = {
  title: "Quer treinar na Betão?",
  text: "Agende seu treino ou fale diretamente com o professor.",
  button: "Chamar no WhatsApp",
} as const;

/* ── Localização ── */
export const LOCATION = {
  title: "Onde estamos",
  address: "Av. Vereador Manoel Dória da Silva, 320 – Farolândia, Aracaju – SE, 49000-000",
  mapButton: "Abrir no Google Maps",
  whatsappButton: "Falar no WhatsApp",
} as const;

/* ── Footer ── */
export const FOOTER_LINKS = [
  { label: "Instagram", href: INSTAGRAM_LINK },
  { label: "WhatsApp", href: WHATSAPP_LINK },
  { label: "Localização", href: GOOGLE_MAPS_LINK },
] as const;

export const FOOTER_CREDIT = "Desenvolvido pela MBV Studio";
