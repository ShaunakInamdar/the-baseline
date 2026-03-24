# AGENTS.md

Start here. This is the canonical low-token brief for this repo.

## What this repo is

- A reusable hackathon starter, not a finished product.
- The active app is the root Next.js project.
- The goal of a new session is to turn this starter into the user's product with the fewest necessary changes.

## Active stack

- Next.js 15 + App Router + TypeScript
- Clerk for auth
- Supabase for data
- Anthropic Claude for AI
- Tailwind CSS for styling

## What already works

- `/` landing page
- Clerk sign-in and sign-up flows
- `/dashboard` protected page
- `/api/ai` authenticated Claude proxy
- `/api/data` authenticated example CRUD for an `items` table
- `.env.example` lists the required secrets and URLs

## First files to inspect if needed

- `README.md` for setup and the example `items` schema
- `app/` for routes and API handlers
- `components/chat.tsx` for the demo AI UI
- `lib/ai.ts` and `lib/supabase.ts` for integrations
- `middleware.ts` for route protection

## Reference-only folders

Treat these as inherited source material, not current product requirements, unless the user explicitly wants them:

- `frontend/`
- `Ramona/`
- `AI generated/`
- `Planning/`
- `recorded pitches/`
- `VPS/`
- `supabase/migrations/`

## Default working model

- Keep the root app as the starting point.
- Replace the demo `items` flow with product-specific entities.
- Reuse Clerk, Supabase, and Claude unless the user asks to swap them.
- Do not delete legacy/reference folders without explicit approval.

## Ask the user these questions first

1. What product are we building, in one sentence?
2. Should we keep the default stack (`Clerk + Supabase + Claude + Next.js`), or swap any piece?
3. What are the first 1-3 core features or data entities?
4. What pages or flows must exist in v1?
5. Is AI core to the product or just an add-on?
6. Where should this deploy (`Vercel`, VPS, other)?
7. Should the old reference folders stay for inspiration or be removed?

## After the user answers

Return the smallest end-to-end setup plan, then implement it.
