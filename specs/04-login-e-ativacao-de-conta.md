# SPEC 04 — Login e reimplantação da Ativação de conta (réplica dos mockups resumen-dia e ninos)

> **Estado:** Aprovado
> **Depende de:** SPEC 02
> **Data:** 2026-10-21
> **Objetivo:** Criar a tela de login em `/login` como réplica desktop em PT-BR do conteúdo de `references/pantallas/resumen-dia.dc.html` sem o seletor Pessoal/Família, e reimplantar `/ativar-conta` com os links cruzados entre as duas telas.

## Por quê

- Os nomes dos arquivos seguem embaralhados (precedente SPECs 01–03): `resumen-dia.dc.html` contém o login e `ninos.dc.html` contém a ativação de conta — referência = conteúdo, confirmado pelo usuário nesta sessão.
- A SPEC 02 já implantou `/ativar-conta` como réplica estática; por decisão do usuário, esta spec a reimplanta (reescrita), mantendo a mesma réplica visual e conectando o link "Entrar" ao novo `/login`.
- Sem o seletor de papel (removido por decisão do usuário), o mockup não define o destino do CTA nem o valor do email — decidido: CTA decorativo (`#`) e email vazio com placeholder.

## Escopo

**In:**

- `app/login/page.tsx` (novo): réplica desktop do conteúdo de `resumen-dia.dc.html` em PT-BR — layout de duas colunas (grid `1.05fr 1fr`, min-height 100vh, fundo próprio #FBF4EC no wrapper, sem alterar o body do layout), painel esquerdo com gradiente `155deg,#F6A98E 0%,#F2937A 45%,#EC7E62 100%`, dois círculos decorativos translúcidos, logo OpenDayCare, h1 "O dia de cada criança, compartilhado com sua família.", parágrafo de apoio e rodapé "🌿 Creche Sala Soles"; painel direito com h2 "Entrar", subtítulo "Entre para ver o dia de hoje.", campo EMAIL (vazio, placeholder "seu@email.com"), campo SENHA (placeholder "••••••••"), link "Esqueceu sua senha?" (`href="#"`), CTA "Entrar" (`href="#"`) e rodapé "A creche te convidou? Ative sua conta" com link para `/ativar-conta`.
- Remoção integral do bloco "INGRESO COMO" com os botões Pessoal e Família.
- `app/ativar-conta/page.tsx` (reescrito nesta spec): mesma réplica 1:1 do conteúdo de `ninos.dc.html` definida na SPEC 02, com o link "Entrar" do rodapé apontando para `/login` (antes `#`); CTA "Ativar minha conta" permanece decorativo.
- Metadata: "Entrar — OpenDayCare" para `/login`; `/ativar-conta` mantém "Ativar conta — OpenDayCare".
- Tradução ES→PT-BR das novas strings conforme o glossário abaixo.

**Out of scope (for future specs):**

- Autenticação, validação, handlers, estado e persistência — tudo decorativo.
- Recuperação de senha ("Esqueceu sua senha?" fica `href="#"`).
- Telas pós-login e destino real do CTA "Entrar".
- Responsividade/mobile e dark mode.
- Sidebar — login e ativação são páginas centradas, sem sidebar.
- Novos dados em `app/_data/`.

## Modelo de dados

Nenhuma estrutura nova: as duas telas são estáticas, com valores inline (modelo da SPEC 02).

Valores fixos novos:

| Tela | Elemento | Valor |
|---|---|---|
| /login | hero | "O dia de cada criança, compartilhado com sua família." · "Publique momentos, gerencie as salas e mantenha as famílias por perto, em um só lugar." · "🌿 Creche Sala Soles" |
| /login | formulário | email vazio (placeholder "seu@email.com") · senha (placeholder "••••••••") · CTA e "Esqueceu sua senha?" com `href="#"` |

Glossário (extensão do da SPEC 02): "El día de cada niño, compartido con su familia."→"O dia de cada criança, compartilhado com sua família." · "Publicá momentos, gestioná las salas y mantené a las familias cerca, desde un solo lugar."→"Publique momentos, gerencie as salas e mantenha as famílias por perto, em um só lugar." · "Guardería Sala Soles"→"Creche Sala Soles" (🌿 mantido) · "Ingresá para ver el día de hoy."→"Entre para ver o dia de hoje." · CONTRASEÑA→SENHA · "¿Olvidaste tu contraseña?"→"Esqueceu sua senha?" · "¿Te invitó la guardería?"→"A creche te convidou?" · "Activá tu cuenta"→"Ative sua conta" · "Iniciar sesión"→"Entrar" (já fixado na SPEC 02) · EMAIL, "OpenDayCare" e "Sala Soles" mantidos.

## Plano de implementação

1. Criar `app/login/page.tsx` com a réplica completa (painel hero + formulário sem o seletor de papel), textos PT-BR e metadata. Manual: `/login` renderiza as duas colunas sem erros e "Ative sua conta" navega para `/ativar-conta`.
2. Reescrever `app/ativar-conta/page.tsx` mantendo a réplica da SPEC 02 e trocando o `href` do "Entrar" do rodapé de `"#"` para `"/login"`. Manual: `/ativar-conta` visualmente idêntico ao atual e "Entrar" navega para `/login`.

## Critérios de aceitação

- [ ] `npx tsc --noEmit`, `npm run lint` e `npm run build` passam sem erros.
- [ ] O build expõe `/login` e `/ativar-conta`.
- [ ] `/login` replica o layout de duas colunas: painel com gradiente `155deg,#F6A98E 0%,#F2937A 45%,#EC7E62 100%`, dois círculos translúcidos e formulário com coluna 392px.
- [ ] `/login` não contém o bloco "INGRESO COMO" nem os botões Pessoal/Família.
- [ ] Email vazio com placeholder "seu@email.com"; senha com placeholder "••••••••".
- [ ] "Esqueceu sua senha?" e CTA "Entrar" usam exatamente `href="#"` e não têm handlers.
- [ ] O link "Ative sua conta" em `/login` aponta exatamente para `/ativar-conta`.
- [ ] O link "Entrar" em `/ativar-conta` aponta exatamente para `/login`.
- [ ] `/ativar-conta` permanece visualmente idêntico à réplica da SPEC 02 (textos, cores e valores fixos).
- [ ] Nenhum texto em espanhol nas duas telas (glossário aplicado; "OpenDayCare", "Sala Soles" e emails mantidos).
- [ ] Metadata de `/login` é "Entrar — OpenDayCare"; a de `/ativar-conta` permanece "Ativar conta — OpenDayCare".
- [ ] Zero erros no console do navegador em `/login` e `/ativar-conta`.

## Decisões

- **Sim:** referência = conteúdo dos arquivos (`resumen-dia.dc.html` → login; `ninos.dc.html` → ativação) — precedente das SPECs 01–03, confirmado pelo usuário.
- **Sim:** rota `/login` (escolha explícita do usuário; precedente de rota em inglês `/kids` da SPEC 03; textos visíveis permanecem PT-BR).
- **Sim:** reimplantar `/ativar-conta` nesta spec (decisão do usuário) — mesmo conteúdo do mockup; única mudança comportamental é o link "Entrar" → `/login`.
- **Sim:** remover integralmente o seletor Pessoal/Família (decisão do usuário).
- **Sim:** CTA "Entrar" decorativo com `href="#"` — telas pós-login não existem; consistente com as SPECs 01–03.
- **Sim:** email vazio com placeholder "seu@email.com" — sem seletor de papel não há valor padrão coerente.
- **Sim:** manter "Esqueceu sua senha?" decorativo — fidelidade ao mockup; recuperação de senha fica para spec futura.
- **Sim:** 🌿 mantido no rodapé do hero — fidelidade 1:1 ao mockup.
- **Não:** autenticação, validação, handlers, persistência, recuperação de senha, responsivo, dark mode.

## Riscos

| Risco | Mitigação |
|---|---|
| Reescrita de `/ativar-conta` pode introduzir regressão visual vs. SPEC 02 | Comparação lado a lado com a tela atual e o mockup na verificação; critério exige identidade visual |
| Rota `/login` em inglês quebra o padrão PT-BR das rotas | Escolha explícita do usuário (precedente `/kids`); UI permanece PT-BR |
| Dev server de longa duração serve CSS obsoleto do cache do Turbopack (observado na SPEC 02) | Reiniciar o dev server na verificação ou usar build de produção |

## O que **não** está nesta spec

- Autenticação, sessão e contas de usuário.
- Formulários funcionais, validação e recuperação de senha.
- Telas pós-login (feed da família, feed da equipe).
- Responsividade/mobile e dark mode.

Cada uma, se um dia existir, vai na própria spec dela.
