export async function POST(request: Request) {
  const res = await request.json();

  return Response.json({ res });
}

// import LoginForm form '@/app/ui/login-form'
// function LoginPage(){
//   return (
//     <main>
//     <LoginForm />
//     </main>
//   )
// }
