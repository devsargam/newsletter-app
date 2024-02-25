import { MainNav } from '@/components/NavBar';
import { CreateNewsletter } from '@/components/create-newsletter';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function CreateNewsletterPage() {
  const session = await getServerSession();

  if (!session?.user?.email) return redirect('/login');

  return (
    <>
      <MainNav />
      <section className='flex justify-center py-10'>
        <CreateNewsletter email={session.user.email} />
      </section>
    </>
  );
}
