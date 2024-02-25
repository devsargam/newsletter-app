import { MainNav } from '@/components/NavBar';
import { SignupForm } from '@/components/SignupForm';
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
