import { createClient } from "@supabase/supabase-js";

function getSupabaseEnv() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
  }

  if (!supabaseAnonKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
  }

  if (!supabaseServiceKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
    supabaseServiceKey,
  };
}

let browserSupabaseClient: ReturnType<typeof createClient> | undefined;

// Client-side Supabase client — uses anon key, respects RLS
// Call this inside React components or client helpers
export function getSupabaseClient() {
  if (!browserSupabaseClient) {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseEnv();
    browserSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }

  return browserSupabaseClient;
}

// Server-side Supabase client — uses service role key, bypasses RLS
// Use this in API routes / server components for trusted operations
export function createServerSupabaseClient() {
  const { supabaseUrl, supabaseServiceKey } = getSupabaseEnv();

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
