export const prerender = false;

export async function POST({ request }) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');


  return new Response(
    JSON.stringify({
      message: 'Your name was: ' + name,
    }),
    {
      status: 200,
    }
  );
}
