import { MainNav } from '@/components/nav-bar';
import { SignupForm } from '@/components/signup-form';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  const session = await getServerSession();
  if (!!session) return redirect('/');

  return (
    <>
      <MainNav />
      <SignupForm />
    </>
  );
}
