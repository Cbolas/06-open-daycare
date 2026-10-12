import type { Metadata } from "next";
import Sidebar from "@/app/_components/sidebar";

export const metadata: Metadata = {
  title: "Minha conta — OpenDayCare",
};

export default function MinhaConta() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F6ECDF" }}>
      <Sidebar active="Minha conta" />
      <main style={{ flex: 1, minWidth: 0, height: "100vh", overflowY: "auto" }}>
        <div
          style={{
            maxWidth: 680,
            width: "100%",
            margin: "0 auto",
            padding: "34px 40px 80px",
          }}
        >
          <div style={{ marginBottom: 22 }}>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: ".8px",
                color: "#D9583C",
                marginBottom: 4,
              }}
            >
              AJUSTES
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
              Minha conta
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              background: "#FFFDF9",
              border: "1px solid #ECE0D0",
              borderRadius: 18,
              padding: "20px 22px",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#F2937A",
                color: "#fff",
                fontFamily: "var(--font-fredoka)",
                fontWeight: 600,
                fontSize: 26,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "none",
              }}
            >
              C
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-fredoka)",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#3F362E",
                }}
              >
                Carol Gimenes
              </div>
              <div style={{ fontSize: 14, color: "#94887B" }}>
                caro@opendaycare.com
              </div>
              <div style={{ fontSize: 13, color: "#A89A8B", marginTop: 2 }}>
                Professora · Sala Soles
              </div>
            </div>
            <button
              style={{
                border: "1.5px solid #ECE0D0",
                background: "#fff",
                color: "#6E6359",
                fontWeight: 700,
                fontSize: 14,
                padding: "9px 16px",
                borderRadius: 12,
                cursor: "pointer",
                fontFamily: "inherit",
                flex: "none",
              }}
            >
              Editar
            </button>
          </div>
          <div
            style={{
              background: "#FFFDF9",
              border: "1px solid #ECE0D0",
              borderRadius: 18,
              padding: "18px 22px",
              marginBottom: 18,
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
              NOTIFICAÇÕES
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid #F0E6D8",
              }}
            >
              <span style={{ fontSize: 15, color: "#4A4038" }}>
                Novos comentários de famílias
              </span>
              <span
                style={{
                  width: 42,
                  height: 24,
                  borderRadius: 999,
                  background: "#5FB97E",
                  position: "relative",
                  flex: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#fff",
                    top: 3,
                    right: 3,
                  }}
                />
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
              }}
            >
              <span style={{ fontSize: 15, color: "#4A4038" }}>
                Lembrete de resumo (17:00)
              </span>
              <span
                style={{
                  width: 42,
                  height: 24,
                  borderRadius: 999,
                  background: "#5FB97E",
                  position: "relative",
                  flex: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#fff",
                    top: 3,
                    right: 3,
                  }}
                />
              </span>
            </div>
          </div>
          <div
            style={{
              background: "#FFFDF9",
              border: "1px solid #ECE0D0",
              borderRadius: 18,
              overflow: "hidden",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                borderBottom: "1px solid #F0E6D8",
              }}
            >
              <span style={{ fontSize: 15, color: "#4A4038", fontWeight: 600 }}>
                Alterar senha
              </span>
              <svg
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
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
              }}
            >
              <span style={{ fontSize: 15, color: "#4A4038", fontWeight: 600 }}>
                Ajuda e suporte
              </span>
              <svg
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
            </div>
          </div>
          <a
            href="#"
            style={{
              display: "block",
              textAlign: "center",
              width: "100%",
              padding: 14,
              borderRadius: 14,
              border: "1.5px solid #F2C4B6",
              background: "#FBEAE3",
              color: "#D9583C",
              fontWeight: 800,
              fontSize: 15,
            }}
          >
            Encerrar sessão
          </a>
        </div>
      </main>
    </div>
  );
}
