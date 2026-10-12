<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Spanish-language daycare app ("open-daycare"): parents/guardians follow a per-child feed of the day. All UI copy is in Spanish. Early stage — only `app/layout.tsx` and `app/page.tsx` exist so far; screens are built from the reference mockups below.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build; strongest verification step
- `npm run lint` — ESLint (flat config, no args needed)
- `npx tsc --noEmit` — typecheck (no script defined for it)
- No test framework exists. Verify with lint + typecheck + build.

## Next.js setup gotchas

- Next 16.4 / React 19 / App Router. Heed the block above — e.g. typed layout props like `LayoutProps<"/">` in `app/layout.tsx`.
- `next.config.ts` enables `cacheComponents: true` and `partialPrefetching: true` — `use cache` directive semantics apply.
- Tailwind 4 is wired via `@tailwindcss/turbopack` rules in `next.config.ts`, NOT PostCSS. There is no postcss config; don't create one. `app/globals.css` uses `@import "tailwindcss"` + `@theme inline`.
- Import alias `@/*` maps to the repo root (`./*`) — e.g. `@/app/...`, not `@/src/...`.

## Design references (source of truth for UI)

- `references/pantallas/*.dc.html` — one clickable mockup per planned screen (login, activar-cuenta, feed, detalle-publicacion, crear-publicacion, ninos, agregar-nino, perfil-nino, resumen-dia, vincular-padre, avisos, mi-cuenta, familia-cuenta, foto). Match these when building pages: Fredoka + Nunito fonts, warm cream palette (#F6ECDF bg, coral gradient CTAs) — note the current layout still has the create-next-app Geist defaults.
- `references/screenshots/` — PNG captures of the same screens.

## Specs

- Large features use the spec-driven skills (`spec`, `spec-impl` in `.agents/skills/`). Specs live in `specs/` and are numbered; a new spec must match the language and section conventions of the two most recent ones.


## MCPs

- Screnshots de Playwright ou qualquer arquivo relacionado a Playwright deverá ser salvo na pasta .playwright-mcp.
- Context7: usaremos este MCP para trazer a documentação atualizada do framework.


## Spec Driven Development - Skills

- /spec: Usaremos esta skill para criar as especificações do projeto.
- /spec-impl: Usaremos esta skill para criar as implementações.

## Spec Driven Development - Agentes

- spec-verify (`.opencode/agent/spec-verify.md`): verifica o checklist de "Critérios de aceitação" de uma spec em `specs/` — usa após o /spec-impl concluir uma spec, ou sempre que um checklist precisar de verificação. Roda cada critério (comandos, Playwright com visão comparando com os mockups de `references/`, Context7 para recomendações atuais do Next.js), corrige pequenas falhas, marca os checkboxes e, se tudo passar, atualiza o estado da spec para "Implementado". Nunca commita por conta própria.


## Regras de código

- Usar código limpo, nomes de variaveis, funcoes, etc em ingles 