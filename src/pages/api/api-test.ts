import { type APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body = await request.json();
    const name = body.name;
    return new Response(
      JSON.stringify({
        message: 'Your name was: ' + name,
      }),
      {
        status: 200,
      }
    );
  }
  return new Response(null, { status: 400 });
};
// https://api.themoviedb.org/3/movie/popular?api_key=04c908115dc6ff5e5aa3709b5a735393&language=en-US&page=1
