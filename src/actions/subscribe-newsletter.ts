'use server';
import db from '@/db';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

export async function subscribeNewsletter(id: string, email: string) {
  const session = await getServerSession();
  if (!session) {
    return {
      error: true,
      message: 'Uh oh!',
      description: 'You need to sign in',
    };
  }
  try {
    if (
      await db.emailSubscriber.findFirst({
        where: {
          subscribedToId: id,
          email: email,
        },
      })
    )
      return {
        error: true,
        message: 'Error!',
        description: 'You are already subscribed to this newsletter!',
      };

    await db.emailSubscriber.create({
      data: {
        email,
        // subscribedToId: id,
        subscribedTo: {
          connect: {
            id: id,
          },
        },
      },
    });

    revalidatePath('/');
    return {
      error: false,
      message: 'Success!',
      description: 'The email has been subscribed.',
    };
  } catch (e) {
    console.log(e);
    return {
      error: true,
      message: 'Error!',
      description: 'Something went wrong!!!',
    };
  }
}
