import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://gaqhgqbticnbkilacfmb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhcWhncWJ0aWNuYmtpbGFjZm1iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjI4NTg3OSwiZXhwIjoyMDYxODYxODc5fQ.qYVgpjTEuGCprbSoqrVjqlILzI7UErzIb9xb_Gp88Dk"
);

export { supabase as s };
