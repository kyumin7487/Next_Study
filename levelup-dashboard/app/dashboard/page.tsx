import { auth } from "@/auth";
import LogoutForm from "@/ui/account/logout-form";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <main className="p-0">
      <h2 className="mb-4 text-xl md:text-2xl">대시보드</h2>
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 md:text-base">
          이름: {session?.user?.name}
        </p>
      </div>
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 md:text-base">
          이메일: {session?.user?.email}
        </p>
      </div>
      <LogoutForm />
    </main>
  );
}
