import { s as supabase } from '../../chunks/supabase_D4qrlC5E.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  console.log(request);
  const formData = await request.formData();
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    occasion: formData.get("occasion"),
    //getAll så vi kan få flere værdier. Former data til array
    diet: formData.getAll("diet"),
    date: formData.get("date"),
    time: formData.get("time"),
    comment: formData.get("comment")
  };
  const { error } = await supabase.from("request").insert([data]);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500
    });
  }
  return redirect("/arrangement?requestSend=true");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
