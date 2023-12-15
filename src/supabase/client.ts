import { createClient } from '@supabase/supabase-js';

export const client = createClient(import.meta.env.REACT_APP_SUPABASE_URL, import.meta.env.REACT_APP_SUPABASE_KEY);
