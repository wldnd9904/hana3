// app/sample/page.tsx  (또는 middleware.ts)
import { redirect } from 'next/navigation';
import { auth, signOut } from '@/lib/auth';

export default async function AuthTTPage() {
  const session = await auth();
  if (!session) return redirect('/api/auth/signin');

  return (
    <>
      <h1>{session.user?.email}</h1>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button>SignOut</button>
      </form>
    </>
  );
}
