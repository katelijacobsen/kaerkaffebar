// Importere moduler og supabase
import { supabase } from "../../lib/supabase";

export const prerender = false;
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


// API route for at håndtere forespørgsel fra form
export async function POST ({ request, redirect }) {
  console.log(request);

  const formData = await request.formData();

  // Data
  const data = {
    fullName: formData.get("name"),
    phoneNumber: formData.get("number"),
  };
  //error håndtering - hvis der skulle være fejl i dataen
  const { error } = await supabase.from("request").insert([data]);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  // Retur hvis forespørgsel er sendt korrekt
  //return new Response(JSON.stringify({ message: "success" }), { status: 200 });
  // Bruger query string til at sende success tilbage til arrangement siden. Hvis brugeren trykker på send uden errors ville url'en vise true
  return redirect("/runningclub?success=true");
};
