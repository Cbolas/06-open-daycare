import Sidebar from "@/app/_components/sidebar";

type Badge = {
  label: string;
  bg: string;
  color: string;
};

type Kid = {
  initials: string;
  name: string;
  meta: string;
  avatarBg: string;
  avatarColor: string;
  badge?: Badge;
};

const kids: Kid[] = [
  {
    initials: "M",
    name: "Mateus Fernandes",
    meta: "3 anos · 2 pais vinculados",
    avatarBg: "#A9D9E8",
    avatarColor: "#1F7A93",
    badge: { label: "AMENDOIM", bg: "#FBD8CC", color: "#D9684A" },
  },
  {
    initials: "S",
    name: "Sofia Mendes",
    meta: "2 anos · 1 pai vinculado",
    avatarBg: "#F4B8CC",
    avatarColor: "#C44A7A",
  },
  {
    initials: "B",
    name: "Benjamim Ruiz",
    meta: "3 anos · 2 pais vinculados",
    avatarBg: "#B9DEC4",
    avatarColor: "#3E8B62",
  },
  {
    initials: "V",
    name: "Valentina Soto",
    meta: "2 anos · sem pais vinculados",
    avatarBg: "#F4DC8E",
    avatarColor: "#9A7B1E",
    badge: { label: "VINCULAR", bg: "#F9D2DE", color: "#C56486" },
  },
  {
    initials: "T",
    name: "Tomás Diaz",
    meta: "3 anos · 1 pai vinculado",
    avatarBg: "#C9B6E8",
    avatarColor: "#7B5FC0",
    badge: { label: "LACTOSE", bg: "#FBD8CC", color: "#D9684A" },
  },
  {
    initials: "E",
    name: "Emma Castro",
    meta: "2 anos · 1 pai vinculado",
    avatarBg: "#F4B8CC",
    avatarColor: "#C44A7A",
  },
  {
    initials: "L",
    name: "Lucas Romero",
    meta: "3 anos · 1 pai vinculado",
    avatarBg: "#A9D9E8",
    avatarColor: "#1F7A93",
  },
  {
    initials: "O",
    name: "Olivia Vega",
    meta: "2 anos · 1 pai vinculado",
    avatarBg: "#B9DEC4",
    avatarColor: "#3E8B62",
  },
];

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F6ECDF" }}>
      <Sidebar active="Crianças" />

      <main style={{ flex: 1, minWidth: 0, height: "100vh", overflowY: "auto" }}>
        <div
          style={{
            maxWidth: 880,
            width: "100%",
            margin: "0 auto",
            padding: "34px 40px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 22,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: ".8px",
                  color: "#D9583C",
                  marginBottom: 4,
                }}
              >
                GESTÃO
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-fredoka)",
                  fontWeight: 600,
                  fontSize: 30,
                  margin: 0,
                  color: "#3F362E",
                }}
              >
                Crianças
              </h1>
            </div>
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 18px",
                borderRadius: 14,
                background: "linear-gradient(180deg,#F4977E,#EE8164)",
                color: "#fff",
                fontWeight: 800,
                fontSize: 14.5,
                boxShadow: "0 8px 18px -8px rgba(238,129,100,.7)",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              Adicionar criança
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              background: "#FFFDF9",
              border: "1px solid #ECE0D0",
              borderRadius: 14,
              padding: "12px 16px",
              marginBottom: 22,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B0A290"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              placeholder="Buscar criança…"
              style={{
                flex: 1,
                border: "none",
                background: "none",
                fontSize: 15,
                color: "#3F362E",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: ".8px",
                color: "#3F362E",
              }}
            >
              SALA SOLES
            </span>
            <span style={{ fontSize: 13, color: "#A89A8B" }}>8 crianças</span>
            <span style={{ flex: 1, height: 1, background: "#E7DAC8" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 14,
            }}
          >
            {kids.map((kid) => (
              <a
                key={kid.name}
                className="kid"
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  minWidth: 0,
                  background: "#FFFDF9",
                  border: "1px solid #ECE0D0",
                  borderRadius: 18,
                  padding: 16,
                  boxShadow: "0 4px 14px -12px rgba(120,90,60,.5)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: kid.avatarBg,
                    color: kid.avatarColor,
                    fontFamily: "var(--font-fredoka)",
                    fontWeight: 600,
                    fontSize: 19,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  {kid.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-fredoka)",
                      fontWeight: 600,
                      fontSize: 16,
                      color: "#3F362E",
                    }}
                  >
                    {kid.name}
                  </div>
                  <div style={{ fontSize: 13, color: "#A89A8B" }}>{kid.meta}</div>
                </div>
                {kid.badge ? (
                  <span
                    style={{
                      flex: "none",
                      fontSize: 11,
                      fontWeight: 800,
                      padding: "5px 9px",
                      borderRadius: 999,
                      background: kid.badge.bg,
                      color: kid.badge.color,
                    }}
                  >
                    {kid.badge.label}
                  </span>
                ) : (
                  <svg
                    style={{ flex: "none" }}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CBB89F"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
