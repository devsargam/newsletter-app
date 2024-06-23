import { MainNav } from '@/components/nav-bar';
import { SubscribeNewsletter } from '@/components/subscribe-newsletter';
import prisma from '@/db';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

export default async function SingleNewsletter({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession();
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

  const newsletter = await prisma.newsletter.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!newsletter) return notFound();

  return (
    <main>
      <MainNav />
      <SubscribeNewsletter id={params.id} />
    </main>
  );
}
