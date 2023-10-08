import { createClient } from "@supabase/supabase-js";

// Create Supabase client
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);
