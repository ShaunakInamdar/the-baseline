# The Baseline

A clean, multipurpose hackathon starter built on Next.js, Clerk, Supabase, and Claude.

> AI agents: read `AGENTS.md` first for the compact repo brief and startup questions.

## Included by default

- Next.js 15 App Router setup
- Clerk authentication
- Supabase client/server wiring
- Claude-backed example AI route
- Protected dashboard page
- Example CRUD route for a sample `items` table
- Tailwind CSS styling

## Quick start

```bash
git clone https://github.com/YOUR_USERNAME/the-baseline.git
cd the-baseline
npm install
```

Copy `.env.example` to `.env.local`, fill in your keys, then run:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Required environment variables

### Clerk

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

### Supabase

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Anthropic

- `ANTHROPIC_API_KEY`

### App

- `NEXT_PUBLIC_APP_URL`

## Example Supabase table

The sample `/api/data` route expects an `items` table:

```sql
create table items (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  content text,
  created_at timestamptz default now()
);

alter table items enable row level security;

create policy "Users see own items" on items
  for all using (user_id = auth.uid()::text);
```

## Project structure

```text
app/                  routes and API handlers
components/           shared UI
lib/                  service clients and helpers
middleware.ts         auth protection
.env.example          required environment variables
AGENTS.md             compact repo context for AI agents
```

## Typical first changes

- Replace the sample `items` model with your own schema
- Add product-specific pages under `app/`
- Update the dashboard to match your first workflow
- Swap auth, DB, or AI providers if needed

## Deploy

The easiest path is Vercel:

```bash
npx vercel
```

Add the same environment variables from `.env.local` to your deployment target.
