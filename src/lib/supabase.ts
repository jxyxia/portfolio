import { createClient } from "@supabase/supabase-js";

// Define TypeScript types for our database tables
export type ContactSubmission = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status?: string;
};

// Use a function to create the client on demand instead of at module level
// This prevents issues during static site generation (SSG) with GitHub Pages
export const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // During build time, return a mock client that won't be used
    if (typeof window === "undefined") {
      return null;
    }
    console.error("Supabase credentials are missing");
    throw new Error("Supabase credentials are missing");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};
