# SPEC 02 — Minha conta e Ativação de conta (réplica dos mockups perfil-nino e ninos)

> **Estado:** Implementado
> **Depende de:** SPEC 01
> **Data:** 2026-10-12
> **Objetivo:** Implementar as telas "Minha conta" (`/minha-conta`) e "Ativação de conta" (`/ativar-conta`) como réplicas visuais 1:1 do conteúdo de `references/pantallas/perfil-nino.dc.html` e `references/pantallas/ninos.dc.html`, em PT-BR, com a sidebar extraída como componente compartilhado.

## Por quê

- Os mockups seguem embaralhados (SPEC 01): `perfil-nino.dc.html` contém a tela "Mi cuenta" (ajustes da professora) e `ninos.dc.html` contém a tela de ativação de conta do pai. Como na SPEC 01, a referência desta spec é o **conteúdo dos arquivos citados**, não o que os nomes sugerem — confirmado pelo usuário.
- O tema "Mi cuenta" também aparece (com variações) em `detalle-publicacion.dc.html`; a referência aqui é `perfil-nino.dc.html`, o arquivo citado.
- A SPEC 01 deixou explicitamente para esta spec: a extração da sidebar ("fica para a spec da próxima tela que os reutilizar") e a tela "Minha conta" como destino de link.

## Escopo

**In:**

- `app/_components/sidebar.tsx` (novo): sidebar extraída 1:1 de `app/page.tsx` — logo OpenDayCare/Sala Soles, CTA "Nova publicação", nav (Feed, Crianças, Avisos, Minha conta) com item ativo via prop, chip da usuária (Carol Gimenes, "Professora · Soles") e ícone de sair; href de "Minha conta" → `/minha-conta`, de "Crianças" → `/` (alteração pós-implementação solicitada pelo usuário em 2026-10-12), demais `href="#"`.
- Refactor de `app/page.tsx`: remover a sidebar inline e usar o componente — sem mudança visual além do href "Minha conta".
- `app/minha-conta/page.tsx` (novo): réplica 1:1 do conteúdo de `perfil-nino.dc.html` — eyebrow "AJUSTES" + h1 "Minha conta" (coluna 680px), card de perfil (avatar "C", Carol Gimenes, caro@opendaycare.com, "Professora · Sala Soles", botão "Editar"), card "NOTIFICAÇÕES" com 2 linhas e toggles estáticos ligados, card com linhas "Alterar senha" e "Ajuda e suporte", botão "Encerrar sessão".
- `app/ativar-conta/page.tsx` (novo): réplica 1:1 do conteúdo de `ninos.dc.html` — página centrada (fundo próprio #FBF4EC, coluna 440px), badge de logo, h1 "Boas-vindas à OpenDayCare", card de convite (avatar "M", "Mateus · Sala Soles"), inputs "CÓDIGO DE CONVITE" (7K4P9), "EMAIL", "CRIAR SENHA", checkbox de autorização marcado, CTA "Ativar minha conta", rodapé "Já tem conta? Entrar".
- Metadata por rota: "Minha conta — OpenDayCare" e "Ativar conta — OpenDayCare".
- Tradução integral ES→PT-BR conforme o glossário abaixo.

**Out of scope (for future specs):**

- Qualquer funcionalidade: toggles, inputs, checkbox, botões e links são decorativos (sem handlers, sem estado), com valores fixos do mockup.
- Telas de destino ainda inexistentes (Nova publicação, login, feed da família, perfil da criança) — os demais `href` ficam `"#"`.
- Formulário funcional, validação, backend, autenticação e persistência.
- Responsividade/mobile e dark mode.
- Extração de módulo de dados (`kids` continua em `app/page.tsx`).

## Modelo de dados

Nenhuma estrutura nova: as duas telas são estáticas, com valores inline. Os `navItems` saem de `app/page.tsx` para `app/_components/sidebar.tsx`, com a assinatura:

```tsx
// app/_components/sidebar.tsx
type SidebarProps = { active: "Feed" | "Crianças" | "Avisos" | "Minha conta" };
```

Valores fixos das telas:

| Tela | Elemento | Valor |
|---|---|---|
| /minha-conta | perfil | Carol Gimenes · caro@opendaycare.com · Professora · Sala Soles · avatar "C" #F2937A |
| /minha-conta | notificações | "Novos comentários de famílias", "Lembrete de resumo (17:00)" — toggles ligados (#5FB97E) |
| /ativar-conta | convite | avatar "M" #A9D9E8/#1F7A93 · "Convidaram você para acompanhar" · "Mateus · Sala Soles" |
| /ativar-conta | inputs | código "7K4P9" · email "lucia.fernandez@gmail.com" · senha (type password) |

Glossário fixo (extensão do da SPEC 01): Mi cuenta→Minha conta · NOTIFICACIONES→NOTIFICAÇÕES · Nuevos comentarios de familias→Novos comentários de famílias · Recordatorio de resumen (17:00)→Lembrete de resumo (17:00) · Cambiar contraseña→Alterar senha · Ayuda y soporte→Ajuda e suporte · Editar→Editar · Bienvenida a OpenDayCare→Boas-vindas à OpenDayCare · "Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta."→"Convidaram você para acompanhar o dia do seu filho. Crie sua senha para ativar a conta." · "Te invitaron a seguir a"→"Convidaram você para acompanhar" · CÓDIGO DE INVITACIÓN→CÓDIGO DE CONVITE · CREAR CONTRASEÑA→CRIAR SENHA · "Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app."→"Autorizo a creche a tirar e compartilhar fotos do meu filho dentro do app." · Activar mi cuenta→Ativar minha conta · ¿Ya tenés cuenta?→Já tem conta? · Iniciar sesión→Entrar · emails, "OpenDayCare", "Sala Soles" e "Soles" mantidos.

## Plano de implementação

Baseline: árvore limpa no HEAD (merge da SPEC 01). Cada passo deixa a app rodando e é commitável isoladamente.

1. `app/_components/sidebar.tsx` — extrair a sidebar de `app/page.tsx` 1:1 (markup e estilos inline atuais), com prop `active`; href "Minha conta" → `/minha-conta`. Manual: `npm run lint` e `npx tsc --noEmit` verdes (arquivo ainda não usado).
2. `app/minha-conta/page.tsx` — página completa com `<Sidebar active="Minha conta" />`, conteúdo do mockup traduzido e metadata. Manual: `/minha-conta` renderiza com o item "Minha conta" ativo.
3. `app/ativar-conta/page.tsx` — página completa sem sidebar, fundo #FBF4EC, conteúdo do mockup traduzido e metadata. Manual: `/ativar-conta` renderiza centrada.
4. `app/page.tsx` — trocar a sidebar inline por `<Sidebar active="Crianças" />` e remover o markup duplicado. Manual: home visualmente idêntica; "Minha conta" navega para `/minha-conta`.

## Critérios de aceitação

- [x] `npx tsc --noEmit`, `npm run lint` e `npm run build` passam sem erros.
- [x] Build expõe as rotas `/`, `/minha-conta` e `/ativar-conta`.
- [x] Sidebar existe uma única vez (`app/_components/sidebar.tsx`), importada pela home e por `/minha-conta`.
- [x] Home: item ativo "Crianças"; `/minha-conta`: item ativo "Minha conta" (bg #FBE3D8, cor #D9583C, weight 800).
- [x] `href` de "Minha conta" (nav) é exatamente `/minha-conta`; `href` de "Crianças" (nav) é exatamente `/`; todos os demais links de navegação e CTAs são `"#"`.
- [x] `/minha-conta` replica o mockup: card de perfil com avatar 64px, card NOTIFICAÇÕES com 2 toggles ligados (#5FB97E, bolinha branca à direita), linhas "Alterar senha"/"Ajuda e suporte" com chevron, botão "Encerrar sessão" (#FBEAE3/#D9583C).
- [x] `/ativar-conta` replica o mockup: fundo #FBF4EC, coluna centrada 440px, código "7K4P9" em Fredoka com letter-spacing 3px, checkbox de autorização marcado (caixa #5FB97E sobre card #FBF1D6), CTA com gradiente (180deg,#F4977E,#EE8164).
- [x] Nenhum texto em espanhol nas três telas (glossário aplicado; "OpenDayCare", "Sala Soles", "Soles" e emails mantidos).
- [x] Toggles, inputs, checkbox, "Editar", "Encerrar sessão" e CTAs não têm handlers nem estado.
- [x] Zero erros no console do navegador em `/`, `/minha-conta` e `/ativar-conta`.

## Decisões

- **Sim:** referência = conteúdo dos arquivos citados (perfil-nino.dc.html → "Minha conta"; ninos.dc.html → ativação) — precedente da SPEC 01, confirmado pelo usuário.
- **Sim:** rotas `/minha-conta` e `/ativar-conta` (PT-BR, coerentes com a UI e com o glossário).
- **Sim:** extrair `Sidebar` para `app/_components/` (pasta privada do App Router, fora do roteamento); home refatorada para usá-la — é a "próxima tela" prevista na SPEC 01.
- **Sim:** tudo estático (sem useState/handlers) — precedente da busca decorativa da SPEC 01; usuário confirmou.
- **Sim:** identidades da SPEC 01 mantidas: Carol Gimenes (avatar "C") e "Mateus · Sala Soles" (avatar "M" #A9D9E8/#1F7A93).
- **Sim:** "Iniciar sesión"→"Entrar" (natural em PT-BR; "Encerrar sessão" já fixado na SPEC 01).
- **Sim:** "Crianças" (nav) aponta para `/` (home existente) — alteração solicitada pelo usuário após a implementação; demais links permanecem `"#"` até existirem telas de destino.
- **Sim:** `/ativar-conta` usa o fundo próprio #FBF4EC do mockup no wrapper da página, sem alterar o body #F6ECDF do layout.
- **Sim:** metadata por rota com sufixo " — OpenDayCare".
- **Não:** formulário funcional/validação, persistência, telas de destino, responsivo, dark mode, módulo de dados.

## Riscos

| Risco | Mitigação |
|---|---|
| Dev server de longa duração serve CSS obsoleto do cache do Turbopack (observado na SPEC 01) | Reiniciar o dev server na verificação ou usar build de produção em porta alternativa |
| Dúvida sobre `_components` gerar rota indesejada | Pasta com `_` é excluída do roteamento no App Router; verificado no build (rota `/minha-conta` gerada, nenhuma rota de `_components`) |

## O que **não** está nesta spec

- Funcionalidade de toggles, formulários, sessão ou navegação real além de `/minha-conta`.
- Autenticação e contas de usuário.
- Base de dados ou qualquer persistência.
- Telas de destino dos links (Nova publicação, login, feed da família, perfil da criança).
- Responsividade/mobile e dark mode.

Cada uma, se um dia existir, vai na própria spec dela.
