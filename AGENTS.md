# AGENTS.md

Read this first. It is the canonical low-token setup brief for the repo.

## Repo summary

- This is a lean multipurpose starter.
- The repo intentionally has no built-in product flow.
- Keep changes product-driven and minimal.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Clerk
- Supabase
- Anthropic Claude

## Current starter state

- Public landing page at `/`
- Clerk auth pages at `/sign-in` and `/sign-up`
- Clerk middleware in `middleware.ts`
- Supabase helpers in `lib/supabase.ts`
- Anthropic helper in `lib/ai.ts`
- Environment template in `.env.example`

## Setup order

1. Copy `.env.example` to `.env.local`.
2. Decide whether to keep or swap `Clerk`, `Supabase`, and `Claude`.
3. Add product pages in `app/`.
4. Add shared UI in `components/` when needed.
5. Add product routes or server actions only after the data model is clear.

## Service setup notes

### Clerk

- Add Clerk keys to `.env.local`.
- `app/layout.tsx` already supports Clerk when keys exist.
- `middleware.ts` already runs Clerk middleware.
- Protect product routes by expanding `middleware.ts` with `createRouteMatcher(...)`.
- Use `auth()` or Clerk components only where the product needs them.

### Supabase

- Add the three Supabase env vars to `.env.local`.
- Use `getSupabaseClient()` for browser code.
- Use `createServerSupabaseClient()` for server code and routes.
- Create product tables and RLS policies in Supabase before building CRUD flows.

### Anthropic

- Add `ANTHROPIC_API_KEY` to `.env.local`.
- Use `getAIClient()` or `ask()` only in server code.
- Create `app/api/...` routes or server actions when AI becomes part of the product.

## Component conventions

- `app/` for routes, layouts, and route handlers
- `components/` for reusable UI
- `lib/` for service clients and helpers
- Keep product-specific logic close to the feature that uses it

## Ask the user first

1. What are we building?
2. Which stack pieces stay or change?
3. What are the first core entities or user flows?
4. Which pages should exist first?
5. Is auth required immediately?
6. Is AI required immediately?
7. Where should this deploy?

## Then

Propose the smallest end-to-end plan and start building.
