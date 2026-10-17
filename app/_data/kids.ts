export type Badge = {
  label: string;
  bg: string;
  color: string;
};

export type ParentSummary = {
  count: number;
  label: string;
};

export type LinkedParent = {
  initials: string;
  name: string;
  relationship: string;
  status: "Ativa" | "Pendente";
  detail: string;
  avatarBg: string;
};

export type Kid = {
  id: string;
  initials: string;
  name: string;
  age: string;
  room: "Soles";
  avatarBg: string;
  avatarColor: string;
  badge?: Badge;
  alert?: string;
  birthDate?: string;
  joinedAt?: string;
  parentSummary: ParentSummary;
  linkedParents?: LinkedParent[];
};

export const kids: Kid[] = [
  {
    id: "mateus-fernandes",
    initials: "M",
    name: "Mateus Fernandes",
    age: "3 anos",
    room: "Soles",
    avatarBg: "#A9D9E8",
    avatarColor: "#1F7A93",
    badge: { label: "AMENDOIM", bg: "#FBD8CC", color: "#D9684A" },
    alert: "Alergia a amendoim. Evitar frutos secos. Leva inalador na mochila.",
    birthDate: "12 mar 2022",
    joinedAt: "fev 2025",
    parentSummary: { count: 2, label: "2 pais vinculados" },
    linkedParents: [
      {
        initials: "L",
        name: "Lúcia Fernandes",
        relationship: "Mãe",
        status: "Ativa",
        detail: "ativa",
        avatarBg: "#C9B6E8",
      },
      {
        initials: "D",
        name: "Diego Fernandes",
        relationship: "Pai",
        status: "Pendente",
        detail: "convite enviado",
        avatarBg: "#A9C7E8",
      },
    ],
  },
  {
    id: "sofia-mendes",
    initials: "S",
    name: "Sofia Mendes",
    age: "2 anos",
    room: "Soles",
    avatarBg: "#F4B8CC",
    avatarColor: "#C44A7A",
    parentSummary: { count: 1, label: "1 pai vinculado" },
  },
  {
    id: "benjamim-ruiz",
    initials: "B",
    name: "Benjamim Ruiz",
    age: "3 anos",
    room: "Soles",
    avatarBg: "#B9DEC4",
    avatarColor: "#3E8B62",
    parentSummary: { count: 2, label: "2 pais vinculados" },
  },
  {
    id: "valentina-soto",
    initials: "V",
    name: "Valentina Soto",
    age: "2 anos",
    room: "Soles",
    avatarBg: "#F4DC8E",
    avatarColor: "#9A7B1E",
    badge: { label: "VINCULAR", bg: "#F9D2DE", color: "#C56486" },
    parentSummary: { count: 0, label: "sem pais vinculados" },
  },
  {
    id: "tomas-diaz",
    initials: "T",
    name: "Tomás Diaz",
    age: "3 anos",
    room: "Soles",
    avatarBg: "#C9B6E8",
    avatarColor: "#7B5FC0",
    badge: { label: "LACTOSE", bg: "#FBD8CC", color: "#D9684A" },
    alert: "Intolerância à lactose.",
    parentSummary: { count: 1, label: "1 pai vinculado" },
  },
  {
    id: "emma-castro",
    initials: "E",
    name: "Emma Castro",
    age: "2 anos",
    room: "Soles",
    avatarBg: "#F4B8CC",
    avatarColor: "#C44A7A",
    parentSummary: { count: 1, label: "1 pai vinculado" },
  },
  {
    id: "lucas-romero",
    initials: "L",
    name: "Lucas Romero",
    age: "3 anos",
    room: "Soles",
    avatarBg: "#A9D9E8",
    avatarColor: "#1F7A93",
    parentSummary: { count: 1, label: "1 pai vinculado" },
  },
  {
    id: "olivia-vega",
    initials: "O",
    name: "Olivia Vega",
    age: "2 anos",
    room: "Soles",
    avatarBg: "#B9DEC4",
    avatarColor: "#3E8B62",
    parentSummary: { count: 1, label: "1 pai vinculado" },
  },
];
