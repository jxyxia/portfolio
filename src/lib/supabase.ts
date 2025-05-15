import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
