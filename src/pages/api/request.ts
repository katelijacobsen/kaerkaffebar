// Importere moduler og supabase
import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const prerender = false;

// API route for at håndtere forespørgsel fra form
export const POST: APIRoute = async ({ request, redirect }) => {
  console.log(request);

  const formData = await request.formData();

  // Data
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    occasion: formData.get("occasion"),
    //getAll så vi kan få flere værdier. Former data til array
    diet: formData.getAll("diet"),
    date: formData.get("date"),
    time: formData.get("time"),
    comment: formData.get("comment"),
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
  return redirect("/arrangement?requestSend=true");
};
