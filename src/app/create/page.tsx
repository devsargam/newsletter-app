import { MainNav } from '@/components/NavBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function CreateNewsletterPage() {
  const session = await getServerSession();

  if (!session) return redirect('/login');

  return (
    <>
      <MainNav />
    </>
  );
}
