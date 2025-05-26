// Importere moduler og supabase
import { supabase } from "../../lib/supabase";
import type { APIRoute } from "astro";


export const prerender = false;

export const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "maj",
  "jun",
  "jul",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec",
];

export const GET : APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  let defaultMonth = "aug";
  let month = searchParams.get("month");
  if (!month) {
    month = defaultMonth;
  }
  if (!months.includes(month)) {
    month = defaultMonth;
  }

  // Henter data fra vores supabase database & bruger metoder som from, select og order
  const { data, error } = await supabase
    .from("runningclub")
    .select("id, month, date, day, location, startTime, endTime, participants")
    .eq("month", month)
    .order("date", { ascending: true });

  // Error håndtering
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Returnere data som JSON
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// API-endpoint for tilmelding
export const POST : APIRoute = async ({ request, redirect }) =>{
  
  const formData = await request.formData();
  
  // Data
  const data = {
    name: formData.get("name"),
    number: formData.get("number"),
    eventId: formData.get("eventId")
  };
  
  console.log(data);

  //error håndtering - hvis der skulle være fejl i dataen
  const { error } = await supabase.from("signups").insert([data]);
  
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  // Retur hvis forespørgsel er sendt korrekt
  //return new Response(JSON.stringify({ message: "success" }), { status: 200 });
  // Bruger query string til at sende success tilbage til arrangement siden. Hvis brugeren trykker på send uden errors ville url'en vise true
  return redirect("/runningclub?requestSend=true");
}
