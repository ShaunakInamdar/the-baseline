# AGENTS.md

Read this first. It is the canonical low-token brief for the repo.

## Repo summary

- This is a generic hackathon starter.
- The active codebase is the root Next.js app.
- Treat all current code as scaffolding meant to be adapted, not preserved.

## Stack

- Next.js 15
- TypeScript
- Clerk
- Supabase
- Anthropic Claude
- Tailwind CSS

## What already exists

- Public landing page at `/`
- Clerk auth pages at `/sign-in` and `/sign-up`
- Protected dashboard at `/dashboard`
- Authenticated AI endpoint at `/api/ai`
- Authenticated example data endpoint at `/api/data`
- Environment template in `.env.example`

## Files worth reading first

- `README.md`
- `app/`
- `components/chat.tsx`
- `lib/ai.ts`
- `lib/supabase.ts`
- `middleware.ts`

## Default assumptions

- Keep the stack unless the user asks to swap parts.
- Replace the sample `items` data model with product-specific tables.
- Prefer the smallest end-to-end setup that makes the user's product real.

## Ask the user first

1. What are we building?
2. Which parts of the default stack should stay or change?
3. What are the first core entities or features?
4. What pages or flows are required for v1?
5. Is AI central or optional?
6. Where should this deploy?

## Then

Propose the smallest implementation plan and start building.
