const prerender = false;
async function POST({ request }) {
  const data = await request.formData();
  const name = data.get("name");
  data.get("email");
  data.get("message");
  return new Response(
    JSON.stringify({
      message: "Your name was: " + name
    }),
    {
      status: 200
    }
  );
}

export { POST, prerender };
