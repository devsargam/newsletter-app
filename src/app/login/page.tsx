import { MainNav } from '@/components/nav-bar';
import { SigninForm } from '@/components/signin-form';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession();

  if (!!session) return redirect('/');

  return (
    <>
      <MainNav />
      <SigninForm />
    </>
  );
}
