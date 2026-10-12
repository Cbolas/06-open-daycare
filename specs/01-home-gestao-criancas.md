# SPEC 01 — Home de gestão de crianças (réplica do mockup feed)

> **Estado:** Implementado
> **Depende de:** nenhuma (primeira spec do projeto)
> **Data:** 2026-10-10
> **Objetivo:** Reimplementar do zero a home (`/`) como réplica visual 1:1 do conteúdo de `references/pantallas/feed.dc.html`, com estilo idêntico e todos os textos em PT-BR, sem autenticação e sem base de dados.

## Por quê

- Os mockups estão embaralhados: `feed.dc.html` contém a tela de gestão de crianças ("Niños"), não um feed de publicações. A referência desta spec é o **conteúdo do arquivo `feed.dc.html`**, não o que o nome sugere.
- A home já foi implementada uma vez nesta sessão; por decisão do usuário, o trabalho atual é descartado e refeito a partir desta spec.

## Escopo

**In:**

- Reescrita de `app/page.tsx` como réplica do conteúdo de `feed.dc.html`: sidebar fixa 248px + área principal rolável (cabeçalho, busca, divisor, grade de 8 crianças), num único arquivo, sem extração de componentes.
- Reescrita de `app/layout.tsx`: Fredoka + Nunito via `next/font/google` (variáveis CSS `--font-fredoka` / `--font-nunito`), `lang="pt-BR"`, metadata (title "OpenDayCare", description em PT).
- Reescrita de `app/globals.css`: paleta do mockup (`--background: #f6ecdf`, `--foreground: #3f362e`), body Nunito, `@theme inline`, `input:focus`, `::placeholder`, scrollbar custom, `.kid:hover`; remoção do dark-mode default.
- Ajuste em `eslint.config.mjs`: adicionar `references/**` ao `globalIgnores`.
- Tradução integral ES→PT-BR de todos os textos da UI, conforme o glossário e a tabela de dados abaixo.

**Out of scope (for future specs):**

- Autenticação e qualquer fluxo de conta — o ícone de sair é decorativo.
- Base de dados e persistência — os dados vivem hardcoded em `app/page.tsx`.
- Telas destino dos links (Nova publicação, Adicionar criança, perfil da criança, Avisos, Minha conta) — todos os `href` ficam como placeholder `"#"`.
- Nomeação de rotas futuras (ex.: `/criancas`) — decidida na spec de cada tela.
- Funcionalidade da busca — o input é decorativo.
- Extração de componentes (sidebar) ou módulo de dados — fica para a spec da próxima tela que os reutilizar.
- Responsividade/mobile e dark mode.

## Modelo de dados

Types e dados em `app/page.tsx` (sem banco):

```ts
type Badge = { label: string; bg: string; color: string };

type Kid = {
  initials: string;    // letra do avatar
  name: string;        // nome completo
  meta: string;        // "3 anos · 2 pais vinculados"
  avatarBg: string;     // hex de fundo do avatar
  avatarColor: string;  // hex do texto do avatar
  badge?: Badge;       // sem badge = chevron
};

const kids: Kid[] = [ /* 8 crianças, tabela abaixo */ ];
```

| # | ini | name | meta | avatarBg | avatarColor | badge |
|---|---|---|---|---|---|---|
| 1 | M | Mateus Fernandes | 3 anos · 2 pais vinculados | #A9D9E8 | #1F7A93 | AMENDOIM (#FBD8CC/#D9684A) |
| 2 | S | Sofia Mendes | 2 anos · 1 pai vinculado | #F4B8CC | #C44A7A | — (chevron) |
| 3 | B | Benjamim Ruiz | 3 anos · 2 pais vinculados | #B9DEC4 | #3E8B62 | — (chevron) |
| 4 | V | Valentina Soto | 2 anos · sem pais vinculados | #F4DC8E | #9A7B1E | VINCULAR (#F9D2DE/#C56486) |
| 5 | T | Tomás Diaz | 3 anos · 1 pai vinculado | #C9B6E8 | #7B5FC0 | LACTOSE (#FBD8CC/#D9684A) |
| 6 | E | Emma Castro | 2 anos · 1 pai vinculado | #F4B8CC | #C44A7A | — (chevron) |
| 7 | L | Lucas Romero | 3 anos · 1 pai vinculado | #A9D9E8 | #1F7A93 | — (chevron) |
| 8 | O | Olivia Vega | 2 anos · 1 pai vinculado | #B9DEC4 | #3E8B62 | — (chevron) |

Glossário fixo de tradução (ES → PT-BR): Nueva publicación→Nova publicação · Niños→Crianças (nav e h1) · Avisos→Avisos · Mi cuenta→Minha conta · Maestra · Soles→Professora · Soles · Cerrar sesión→Encerrar sessão · GESTIÓN→GESTÃO · Agregar niño→Adicionar criança · Buscar niño…→Buscar criança… · 8 niños→8 crianças · 3 años · 2 padres vinculados→3 anos · 2 pais vinculados · 1 padre vinculado→1 pai vinculado · sin padres vinculados→sem pais vinculados · MANÍ→AMENDOIM · LACTOSA→LACTOSE · VINCULAR→VINCULAR · OpenDayCare e Sala Soles mantidos (marca/nome da sala).

Sidebar estático: usuário "Carol Gimenes", avatar "C", subtítulo "Professora · Soles"; nav com 4 itens — Feed (inativo), **Crianças (ativo: background #FBE3D8, color #D9583C, weight 800)**, Avisos (inativo), Minha conta (inativo).

## Plano de implementação

Baseline: HEAD atual (defaults do create-next-app); alterações não commitadas da home descartadas. Cada passo deixa a app rodando e é commitável isoladamente.

1. `eslint.config.mjs` — adicionar `"references/**"` ao `globalIgnores`. Manual: `npm run lint` verde.
2. `app/layout.tsx` — trocar Geist por Fredoka+Nunito (`subsets: ["latin"]` + `variable`), `lang="pt-BR"`, metadata "OpenDayCare". Manual: dev server renderiza a página default com body em Nunito.
3. `app/globals.css` — paleta, `@theme inline`, regras do mockup (`input:focus`, `::placeholder`, scrollbar, `.kid`). Manual: fundo do body em #F6ECDF.
4. `app/page.tsx` — types + `kids` (tabela acima) + `navItems` + layout completo com estilos inline portados 1:1 do mockup. Manual: home visualmente idêntica ao mockup.

## Critérios de aceitação

- [x] `npx tsc --noEmit` passa sem erros.
- [x] `npm run lint` passa sem erros.
- [x] `npm run build` conclui com `/` como rota estática (○).
- [x] `<html lang="pt-BR">` e `<title>OpenDayCare</title>`.
- [x] Zero erros no console do navegador ao carregar `/`.
- [x] Fredoka e Nunito ativas (`document.fonts.check` true); h1 em Fredoka 30px/600.
- [x] Estilos computados home vs mockup (mockup via HTTP estático, viewport 1440x900) idênticos em: body `rgb(246,236,223)`; sidebar 248px/`rgb(255,253,249)`/sticky; nav ativo `rgb(251,227,216)`/`rgb(217,88,60)`/800; CTA `linear-gradient(rgb(244,151,126),rgb(238,129,100))`; grade 2 colunas de 393px, gap 14; primeiro card 393x82; avatar 48px.
- [x] 8 cards renderizados com nomes, idades e contagens de pais da tabela.
- [x] Badges AMENDOIM, VINCULAR e LACTOSE presentes; demais cards com chevron.
- [x] Nenhum texto em espanhol na UI (glossário aplicado; "OpenDayCare" e "Sala Soles" mantidos como marca).
- [x] Todos os `href` de navegação são exatamente `"#"`.
- [x] O input de busca não tem handler nem filtragem.

## Decisões

- **Sim:** re-implementação do zero — as alterações não commitadas da home são descartadas; a edição pendente de `AGENTS.md` ("Regras de código") não é da feature e permanece.
- **Sim:** monolítico em `app/page.tsx` — extração de sidebar/dados fica para a spec da próxima tela.
- **Sim:** `href="#"` — rotas reais ficam para as specs de cada tela.
- **Sim:** busca decorativa · **Sim:** "pais" (não "responsáveis") · **Sim:** nomes portuguesados.
- **Sim:** `next/font/google` (self-host no build), não o `<link>` CDN do mockup.
- **Sim:** estilos inline portados 1:1 — fidelidade pixel sem depender de classes utilitárias.
- **Sim:** manter `@import "tailwindcss"` — o preflight cobre os resets do mockup; dark-mode default do template é removido.
- **Sim:** `references/**` no ignore do ESLint — `support.js` é tooling dos mockups, não código do projeto.
- **Não:** autenticação, base de dados, rotas novas, busca funcional, responsivo, dark mode.

## Riscos

| Risco | Mitigação |
|---|---|
| Dev server de longa duração serve CSS obsoleto do cache do Turbopack (observado nesta sessão) | Reiniciar o dev server na verificação ou usar build de produção em porta alternativa |
| `next/font/google` exige rede no build (rede verificada acessível) | Fallback: baixar as fontes e usar `next/font/local` |
| Preflight do Tailwind v4 seta `::placeholder` com `color-mix` (mesma especificidade) | Overrides após o `@import` ganham por ordem de cascata; coberto pela comparação computada |

## O que **não** está nesta spec

- Autenticação e contas de usuário.
- Base de dados ou qualquer persistência.
- Telas de destino dos links (Nova publicação, Adicionar criança, perfil da criança, Avisos, Minha conta).
- Nomeação de rotas futuras.
- Busca funcional.
- Extração de componentes/módulos de dados.
- Versão mobile/responsiva e dark mode.

Cada uma, se um dia existir, vai na própria spec dela.
