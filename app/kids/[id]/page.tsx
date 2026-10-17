import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Sidebar from "@/app/_components/sidebar";
import { kids } from "@/app/_data/kids";

export function generateStaticParams() {
  return kids.map((kid) => ({ id: kid.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/kids/[id]">): Promise<Metadata> {
  const { id } = await params;
  const kid = kids.find((item) => item.id === id);

  return {
    title: kid ? `${kid.name} — OpenDayCare` : "Criança não encontrada — OpenDayCare",
  };
}

export default async function KidProfilePage({ params }: PageProps<"/kids/[id]">) {
  const { id } = await params;
  const kid = kids.find((item) => item.id === id);

  if (!kid) {
    notFound();
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F6ECDF" }}>
      <Sidebar active="Crianças" />

      <main style={{ flex: 1, minWidth: 0, height: "100vh", overflowY: "auto" }}>
        <div
          style={{
            maxWidth: 820,
            width: "100%",
            margin: "0 auto",
            padding: "34px 40px 80px",
          }}
        >
          <a
            href="/criancas"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "#94887B",
              fontWeight: 700,
              fontSize: 14,
              marginBottom: 20,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar para Crianças
          </a>

          <div style={{ display: "flex", gap: 26, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div
              style={{
                flex: 1,
                minWidth: 300,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: "50%",
                    background: kid.avatarBg,
                    color: kid.avatarColor,
                    fontFamily: "var(--font-fredoka)",
                    fontWeight: 600,
                    fontSize: 34,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  {kid.initials}
                </div>
                <div style={{ flex: 1 }}>
                  <h1
                    style={{
                      fontFamily: "var(--font-fredoka)",
                      fontWeight: 600,
                      fontSize: 28,
                      margin: 0,
                      color: "#3F362E",
                    }}
                  >
                    {kid.name}
                  </h1>
                  <p style={{ margin: "3px 0 0", color: "#94887B", fontSize: 15 }}>
                    {kid.age} · Sala {kid.room}
                  </p>
                </div>
                <a
                  href="#"
                  style={{
                    border: "1.5px solid #ECE0D0",
                    background: "#FFFDF9",
                    color: "#6E6359",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "9px 16px",
                    borderRadius: 12,
                  }}
                >
                  Editar
                </a>
              </div>

              {kid.alert && (
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    background: "#FBDAD6",
                    borderRadius: 16,
                    padding: "16px 18px",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: "#F4A8A0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
                      <path d="M12 9v4M12 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#C5413A",
                        fontSize: 15,
                        marginBottom: 2,
                      }}
                    >
                      Alergias e notas
                    </div>
                    <div style={{ color: "#B25249", fontSize: 14.5, lineHeight: 1.5 }}>
                      {kid.alert}
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  background: "#FFFDF9",
                  border: "1px solid #ECE0D0",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {kid.birthDate && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                      borderBottom: "1px solid #F0E6D8",
                    }}
                  >
                    <span style={{ color: "#94887B", fontSize: 14.5 }}>
                      Data de nascimento
                    </span>
                    <span style={{ fontWeight: 800, color: "#3F362E", fontSize: 14.5 }}>
                      {kid.birthDate}
                    </span>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px 18px",
                    borderBottom: kid.joinedAt ? "1px solid #F0E6D8" : undefined,
                  }}
                >
                  <span style={{ color: "#94887B", fontSize: 14.5 }}>Sala</span>
                  <span style={{ fontWeight: 800, color: "#3F362E", fontSize: 14.5 }}>
                    {kid.room}
                  </span>
                </div>
                {kid.joinedAt && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "15px 18px",
                    }}
                  >
                    <span style={{ color: "#94887B", fontSize: 14.5 }}>Ingresso</span>
                    <span style={{ fontWeight: 800, color: "#3F362E", fontSize: 14.5 }}>
                      {kid.joinedAt}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                width: 300,
                flex: "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  width: "100%",
                  padding: 13,
                  borderRadius: 14,
                  background: "#3F362E",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
                Resumo do dia
              </a>

              <div
                style={{
                  background: "#FFFDF9",
                  border: "1px solid #ECE0D0",
                  borderRadius: 16,
                  padding: "16px 18px",
                }}
              >
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 800,
                    letterSpacing: ".8px",
                    color: "#8A7C6D",
                    marginBottom: 14,
                  }}
                >
                  PAIS VINCULADOS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {kid.linkedParents ? (
                    kid.linkedParents.map((parent) => {
                      const isActive = parent.status === "Ativa";

                      return (
                        <div
                          key={parent.name}
                          style={{ display: "flex", alignItems: "center", gap: 12 }}
                        >
                          <div
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: "50%",
                              background: parent.avatarBg,
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
                            {parent.initials}
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 800, fontSize: 14.5, color: "#3F362E" }}>
                              {parent.name}
                            </div>
                            <div style={{ fontSize: 12.5, color: "#A89A8B" }}>
                              {parent.relationship} · {parent.detail}
                            </div>
                          </div>
                          <span
                            style={{
                              flex: "none",
                              fontSize: 10.5,
                              fontWeight: 800,
                              padding: "4px 9px",
                              borderRadius: 999,
                              background: isActive ? "#CFEBD8" : "#F7E7A6",
                              color: isActive ? "#3E9B6C" : "#9A7B1E",
                            }}
                          >
                            {parent.status.toUpperCase()}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <div style={{ fontSize: 14.5, color: "#94887B" }}>
                      {kid.parentSummary.count === 0
                        ? "Sem pais vinculados"
                        : kid.parentSummary.label}
                    </div>
                  )}
                  <a
                    href="#"
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0 0" }}
                  >
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        border: "1.5px dashed #D8CBBA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#B0A290",
                        flex: "none",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                    <span style={{ fontWeight: 800, fontSize: 14.5, color: "#C5503A" }}>
                      Vincular outro pai
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
