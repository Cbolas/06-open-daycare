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

const navItems = [
  {
    label: "Feed",
    active: false,
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
      </svg>
    ),
  },
  {
    label: "Crianças",
    active: true,
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" />
      </svg>
    ),
  },
  {
    label: "Avisos",
    active: false,
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    label: "Minha conta",
    active: false,
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F6ECDF" }}>
      <aside
        style={{
          width: 248,
          flex: "none",
          background: "#FFFDF9",
          borderRight: "1px solid #ECE0D0",
          display: "flex",
          flexDirection: "column",
          padding: "24px 16px",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            padding: "4px 8px 22px",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: "linear-gradient(155deg,#F8C3A8,#F2937A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
            }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-fredoka)",
                fontWeight: 600,
                fontSize: 17,
                color: "#3F362E",
                lineHeight: 1,
              }}
            >
              OpenDayCare
            </div>
            <div style={{ fontSize: 11.5, color: "#A89A8B", marginTop: 2 }}>
              Sala Soles
            </div>
          </div>
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
            padding: 12,
            borderRadius: 14,
            background: "linear-gradient(180deg,#F4977E,#EE8164)",
            color: "#fff",
            fontWeight: 800,
            fontSize: 14.5,
            boxShadow: "0 8px 18px -8px rgba(238,129,100,.75)",
            marginBottom: 18,
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
          Nova publicação
        </a>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 12px",
                borderRadius: 12,
                background: item.active ? "#FBE3D8" : "transparent",
                color: item.active ? "#D9583C" : "#6E6359",
                fontWeight: item.active ? 800 : 600,
                fontSize: 14.5,
              }}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ borderTop: "1px solid #ECE0D0", paddingTop: 14, marginTop: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "6px 8px" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#F2937A",
                color: "#fff",
                fontFamily: "var(--font-fredoka)",
                fontWeight: 600,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
              }}
            >
              C
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: 14, color: "#3F362E" }}>
                Carol Gimenes
              </div>
              <div style={{ fontSize: 12, color: "#A89A8B" }}>Professora · Soles</div>
            </div>
            <a
              href="#"
              title="Encerrar sessão"
              style={{
                flex: "none",
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "#F6ECDF",
                color: "#94887B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

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
