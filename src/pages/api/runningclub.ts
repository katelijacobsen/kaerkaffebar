// Importere moduler og supabase
import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const prerender = false;

// API route for at håndtere forespørgsel fra form
export const GET: APIRoute = async ({ url }) => {
  console.log(url);

  const formData = await url.formData();

  // Data
  const data = {
    month: formData.get("month"),
    date: formData.get("date"),
    location: formData.get("location"),
    diet: formData.getAll("diet"),
    startTime: formData.get("startTime"),
    endingTime: formData.get("endingTime"),
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

};

export const POST: APIRoute = async ({ request, redirect }) => {
    
    const formData = await request.formData();

    const data = {
        participant: formData.get("participant"),
    }

    const { error } = await supabase.from("runningclub").insert([data]);
    if (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }

    return redirect("/runningclub");
}