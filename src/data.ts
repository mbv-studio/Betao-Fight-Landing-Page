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
      { time: "08:00", modality: "Turma Mista" },
      { time: "11:00", modality: "Personalizado" },
      { time: "14:00", modality: "Personalizado" },
      { time: "15:00", modality: "MMA (Prof. Betão)" },
      { time: "16:00", modality: "Turma Mista" },
      { time: "17:00", modality: "Turma Mista (Prof. Entony)" },
      { time: "19:00", modality: "Turma Mista" },
      { time: "20:00", modality: "MMA (Prof. Betão)" },
      { time: "21:00", modality: "Turma Mista" },
    ],
  },
  {
    days: "TER • QUI",
    slots: [
      { time: "11:00", modality: "Personalizado" },
      { time: "15:00", modality: "Turma Mista" },
      { time: "16:00", modality: "MMA (Prof. Betão)" },
      { time: "17:00", modality: "Personalizado" },
      { time: "18:00", modality: "MMA (Prof. Betão)" },
      { time: "19:00", modality: "Turma Mista" },
      { time: "20:00", modality: "Boxe (Prof. Andreis)" },
    ],
  },
  {
    days: "SÁBADO",
    slots: [
      { time: "08:00", modality: "Turma Mista" },
      { time: "10:00", modality: "Turma Mista" },
      { time: "11:00", modality: "Sparing" },
    ],
  },
];

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
