# SPEC 03 — Listagem e perfil de crianças

> **Estado:** Implementado
> **Depende de:** SPEC 01, SPEC 02
> **Data:** 2026-10-17
> **Objetivo:** Disponibilizar a listagem de crianças em `/criancas` e um perfil estático próprio para cada criança em `/kids/[id]`, como réplicas desktop em PT-BR do conteúdo de `references/pantallas/feed.dc.html` e `references/pantallas/agregar-nino.dc.html`.

## Por quê

- Os arquivos de referência continuam com nomes incompatíveis com seus conteúdos: `feed.dc.html` contém a listagem de crianças e `agregar-nino.dc.html` contém o perfil de Mateus.
- A SPEC 01 implementou a listagem na home, mas esta spec estabelece `/criancas` como sua rota definitiva e conecta cada card ao perfil correspondente.
- A referência contém informações completas somente para Mateus. Os demais perfis devem usar apenas os dados conhecidos, sem inventar datas, informações médicas ou identidades familiares.

## Escopo

**In:**

- Mover a interface existente de listagem de crianças de `app/page.tsx` para `app/criancas/page.tsx`, preservando a réplica visual desktop de `references/pantallas/feed.dc.html` e os textos em PT-BR.
- Transformar `app/page.tsx` em um redirecionamento de `/` para `/criancas`.
- Criar `app/kids/[id]/page.tsx` como rota dinâmica dos perfis, reproduzindo o conteúdo visual de `references/pantallas/agregar-nino.dc.html` em PT-BR.
- Criar `app/_data/kids.ts` com os dados estáticos compartilhados pela listagem e pelos oito perfis.
- Gerar estaticamente os oito slugs conhecidos em `/kids/[id]` e retornar 404 para qualquer ID inexistente por meio da consulta aos dados e de `notFound()`.
- Reutilizar `app/_components/sidebar.tsx` nas duas interfaces, com “Crianças” ativo e seu link apontando para `/criancas`.
- Fazer cada card da listagem navegar para `/kids/{id}`.
- Fazer “Voltar para Crianças” navegar para `/criancas`.
- Manter busca, “Adicionar criança”, “Editar”, “Resumo do dia”, “Vincular outro pai” e os demais controles sem tela implementada como elementos decorativos, sem handlers e com `href="#"` quando aplicável.
- Definir metadata para as rotas: “Crianças — OpenDayCare” e título individual “{nome} — OpenDayCare”.

**Out of scope (for future specs):**

- Formulário de adicionar ou editar criança.
- Busca funcional, filtros e qualquer estado de interface.
- Resumo do dia, vinculação de pais e demais telas apontadas pelo perfil.
- Backend, banco de dados, autenticação, persistência e mutações.
- Upload ou edição de foto.
- Responsividade mobile e dark mode.
- Componentes adicionais para cards ou seções do perfil; somente a `Sidebar` existente será reutilizada.

## Modelo de dados

Os dados estáticos saem da página atual e passam a ser a fonte única da listagem e dos perfis:

```ts
// app/_data/kids.ts
type Badge = {
  label: string;
  bg: string;
  color: string;
};

type ParentSummary = {
  count: number;
  label: string;
};

type LinkedParent = {
  initials: string;
  name: string;
  relationship: string;
  status: "Ativa" | "Pendente";
  detail: string;
  avatarBg: string;
};

type Kid = {
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

export const kids: Kid[] = [/* oito registros estáticos */];
```

| id | nome | idade | pais | detalhe adicional |
|---|---|---|---:|---|
| `mateus-fernandes` | Mateus Fernandes | 3 anos | 2 | AMENDOIM; nascimento “12 mar 2022”; ingresso “fev 2025”; alerta e pais do mockup |
| `sofia-mendes` | Sofia Mendes | 2 anos | 1 | sem informações adicionais |
| `benjamim-ruiz` | Benjamim Ruiz | 3 anos | 2 | sem informações adicionais |
| `valentina-soto` | Valentina Soto | 2 anos | 0 | badge VINCULAR; sem informações adicionais |
| `tomas-diaz` | Tomás Diaz | 3 anos | 1 | LACTOSE; alerta “Intolerância à lactose.” |
| `emma-castro` | Emma Castro | 2 anos | 1 | sem informações adicionais |
| `lucas-romero` | Lucas Romero | 3 anos | 1 | sem informações adicionais |
| `olivia-vega` | Olivia Vega | 2 anos | 1 | sem informações adicionais |

Dados completos exclusivos de Mateus, traduzidos da referência:

- Alerta: “Alergia a amendoim. Evitar frutos secos. Leva inalador na mochila.”
- Lúcia Fernandes: “Mãe · ativa”, estado “ATIVA”.
- Diego Fernandes: “Pai · convite enviado”, estado “PENDENTE”.
- Sala: “Soles”.

Regras para dados ausentes:

- `birthDate` e `joinedAt` ausentes não geram linhas de informação.
- `alert` ausente não gera o bloco “Alergias e notas”.
- `linkedParents` ausente gera somente um resumo da quantidade conhecida, sem nomes, parentescos ou estados inventados.
- Contagem zero exibe “Sem pais vinculados”.

## Plano de implementação

Baseline: SPEC 01 e SPEC 02 implementadas. Cada passo deixa a aplicação funcional e pode ser commitado isoladamente.

1. Criar `app/_data/kids.ts` com os tipos, os oito slugs e todos os dados estáticos definidos nesta spec; alterar a listagem atual para consumir esse módulo sem mudar a aparência. Verificação manual: os oito cards continuam exibindo os mesmos textos, avatares e badges.
2. Criar `app/criancas/page.tsx` com a listagem atual e metadata própria; substituir `app/page.tsx` por `redirect("/criancas")`. Verificação manual: `/` redireciona para `/criancas`, que mantém a interface da SPEC 01.
3. Atualizar `app/_components/sidebar.tsx` para apontar o item “Crianças” para `/criancas`; manter os demais destinos definidos na SPEC 02. Verificação manual: a sidebar navega à listagem tanto nela própria quanto em “Minha conta”.
4. Alterar os cards da listagem para `href="/kids/{id}"`, mantendo “Adicionar criança” e a busca decorativos. Verificação manual: cada card abre o slug esperado.
5. Criar `app/kids/[id]/page.tsx`, reutilizando `Sidebar`, com os oito parâmetros estáticos, lookup pelo slug e `notFound()` para IDs desconhecidos. Verificação manual: os oito perfis abrem e `/kids/inexistente` retorna 404.
6. Implementar no perfil as seções condicionais de dados, alerta e pais conforme o modelo, mantendo todos os controles fora do fluxo com `href="#"`. Verificação manual: Mateus replica todos os blocos do mockup, Tomás exibe o alerta de lactose e os demais não inventam dados ausentes.

## Critérios de aceitação

- [x] `npx tsc --noEmit`, `npm run lint` e `npm run build` passam sem erros.
- [x] Acessar `/` redireciona para `/criancas`.
- [x] O build expõe `/criancas` e os oito caminhos `/kids/{id}` definidos no modelo.
- [x] `/criancas` preserva a réplica desktop da listagem de `feed.dc.html`, com sidebar de 248px, grade de duas colunas, oito cards, avatares e badges da SPEC 01.
- [x] Os oito cards têm `href` correspondente a `/kids/{id}` e cada um abre o perfil da criança correta.
- [x] A sidebar usa `/criancas` como destino de “Crianças” em todas as telas e mantém esse item ativo em `/criancas` e `/kids/[id]`.
- [x] Cada perfil replica no desktop a estrutura de `agregar-nino.dc.html`: link de retorno, cabeçalho com avatar/nome/idade/sala, coluna principal e coluna lateral.
- [x] “Voltar para Crianças” aponta exatamente para `/criancas`.
- [x] O perfil de Mateus mostra nascimento “12 mar 2022”, ingresso “fev 2025”, alerta completo e os pais Lúcia Fernandes e Diego Fernandes com seus estados.
- [x] O perfil de Tomás mostra o alerta “Intolerância à lactose.” e não exibe datas ou identidades familiares inventadas.
- [x] Os demais perfis variam nome, avatar, idade e quantidade de pais conforme os dados conhecidos e omitem blocos sem dados.
- [x] `/kids/inexistente` retorna a página 404.
- [x] Busca, “Adicionar criança”, “Editar”, “Resumo do dia”, “Vincular outro pai” e controles sem destino não possuem handlers; os links aplicáveis usam exatamente `href="#"`.
- [x] Não há texto em espanhol nas interfaces; “OpenDayCare”, “Sala Soles” e nomes próprios são mantidos.
- [x] Metadata de `/criancas` é “Crianças — OpenDayCare” e cada perfil usa “{nome} — OpenDayCare”.
- [x] Zero erros no console do navegador em `/criancas` e nos oito perfis.

## Decisões

- **Sim:** referência = conteúdo dos arquivos, não seus nomes; `feed.dc.html` representa a listagem e `agregar-nino.dc.html` representa o perfil.
- **Sim:** mover a listagem de `/` para `/criancas` e redirecionar a home; evita duplicação e estabelece uma rota explícita.
- **Sim:** usar `/kids/[id]`, conforme definido pelo usuário, mesmo com a UI em PT-BR.
- **Sim:** IDs legíveis em kebab-case sem acentos; são estáveis e dispensam identificadores numéricos arbitrários.
- **Sim:** oito perfis próprios, alimentados pela mesma fonte estática da listagem.
- **Sim:** usar somente dados conhecidos; informações clínicas, datas e familiares não serão inventadas.
- **Sim:** preservar todos os detalhes disponíveis para Mateus e usar o texto mínimo “Intolerância à lactose.” para Tomás.
- **Sim:** omitir blocos vazios; evita preencher a interface com dados fictícios ou placeholders sem valor.
- **Sim:** resumir apenas a quantidade de pais quando suas identidades não são conhecidas.
- **Sim:** reutilizar somente a `Sidebar`; não extrair componentes adicionais nesta entrega.
- **Sim:** gerar os oito parâmetros conhecidos e validar o lookup com `notFound()`; `dynamicParams = false` não será usado porque o projeto habilita Cache Components e a opção é incompatível nessa configuração.
- **Não:** busca funcional, formulários, handlers, persistência, mobile e dark mode.

## Riscos

| Risco | Mitigação |
|---|---|
| O mockup fornece detalhes completos somente para Mateus | Renderização condicional baseada apenas em dados conhecidos; critérios proíbem informações inventadas |
| O nome `/kids` não segue o idioma PT-BR da UI | Manter a rota escolhida explicitamente pelo usuário e preservar todos os textos visíveis em PT-BR |
| Cache Components altera o tratamento tradicional de parâmetros dinâmicos | Usar `generateStaticParams`, `PageProps<"/kids/[id]">`, `await params` e lookup com `notFound()` conforme a documentação local do Next.js 16.4 |
| A mudança de `/` para `/criancas` pode quebrar links internos existentes | Atualizar a sidebar e validar o redirecionamento da home e todos os links dos cards |

## O que **não** está nesta spec

- Adição ou edição funcional de crianças.
- Busca ou filtragem da listagem.
- Resumo do dia e vinculação de pais.
- Backend, banco de dados, autenticação ou persistência.
- Informações fictícias para preencher lacunas dos mockups.
- Responsividade mobile e dark mode.
- Componentização adicional além da `Sidebar` existente.

Cada uma, se um dia existir, vai na própria spec dela.
