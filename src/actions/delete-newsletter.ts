'use server';
import db from '@/db';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

export async function deleteNewsletter(id: string) {
  const session = await getServerSession();
  if (!session) {
    return {
      error: true,
      message: 'Uh oh!',
      description: 'You need to sign in',
    };
  }

  await db.newsletter.delete({
    where: {
      id: id,
      createdBy: {
        email: session.user?.email!,
      },
    },
  });

  revalidatePath('/');
  return {
    error: false,
    message: 'Success!',
    description: 'The newsletter has been deleted',
  };
}
