// Importere moduler og supabase
import { supabase } from "../../lib/supabase";

//

export async function GET() {
  // Henter data fra vores supabase database & bruger metoder som from, select og order
  const { data, error } = await supabase
    .from("runningclub")
    .select("id, date, day, location, startTime, endTime, participants")
    .order("date", { ascending: true });

  // Error håndtering
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Returnere data som JSON
  return new Response(
    JSON.stringify(data),
    {status: 200, headers: { "Content-Type": "application/json" } }
  )
}
