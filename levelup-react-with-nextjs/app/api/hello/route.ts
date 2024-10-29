export async function GET(request: Request) {
  const url = request.url;
  return new Response(`Hello, Next.js! You requested: ${url}`, {
    status: 200,
  });
}
