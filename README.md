# The Baseline

A lean, multipurpose hackathon starter built on Next.js, Clerk, Supabase, and Claude.

> AI agents: read `AGENTS.md` first. It contains the compact setup brief and the service wiring order.

## What this starter includes

- Next.js 15 App Router shell
- Tailwind CSS and TypeScript
- Optional Clerk auth scaffolding
- Lazy Supabase helpers in `lib/supabase.ts`
- Anthropic helper in `lib/ai.ts`
- Minimal landing page with setup guidance

No demo dashboard, domain model, CRUD example, or product-specific AI flow is included.

## Quick start

```bash
git clone https://github.com/YOUR_USERNAME/the-baseline.git
cd the-baseline
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local`.

### Clerk

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

### Supabase

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Anthropic

- `ANTHROPIC_API_KEY`

### App

- `NEXT_PUBLIC_APP_URL`

## Recommended setup order

1. Configure environment variables.
2. Decide whether to keep Clerk, Supabase, and Claude or swap providers.
3. Create your product pages under `app/`.
4. Add shared UI under `components/` as needed.
5. Add server routes or actions for product logic.
6. Create your database schema and RLS in Supabase.

## Project structure

```text
app/                  routes and app shell
lib/                  service helpers
middleware.ts         Clerk middleware
.env.example          environment template
AGENTS.md             compact repo setup guide for AI agents
```

## Deploy

The easiest path is Vercel:

```bash
npx vercel
```

Add the same environment variables from `.env.local` to your deployment target.
