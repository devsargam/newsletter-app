import { MainNav } from '@/components/NavBar';
import { SubscribeNewsletter } from '@/components/subscribe-newsletter';
import prisma from '@/db';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

export default async function UnsubscribePage({
  params,
}: {
  params: { id: string };
}) {
  //   if (session?.user) {
  //     const newsletter = await prisma.newsletter.findFirst({
  //       where: {
  //         AND: [
  //           {
  //             createdBy: {
  //               email: session.user.email!,
  //             },
  //           },
  //           { id: params.id },
  //         ],
  //       },
  //     });

  //     // TODO: Write the logic to admin view newsletter
  //     if (newsletter)
  //       return (
  //         <>
  //           <MainNav />
  //           Only You Can See This
  //         </>
  //       );
  //   }

  const newsletter = await prisma.emailSubscriber.delete({
    where: {
      id: params.id,
    },
  });

  if (!newsletter) return notFound();

  return (
    <main>
      <MainNav />
      <>
        <h1 className='text-center text-2xl'>Your mail has been unsubscibed</h1>
      </>
    </main>
  );
}
