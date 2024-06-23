'use server';
import db from '@/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

interface CreateNewsletterReturn {
  message: string;
  error: boolean;
  description: string;
}

export async function createNewsletter(
  prevState: {
    message: string;
    error: boolean;
    description: string;
  },
  formData: FormData,
): Promise<CreateNewsletterReturn> {
  const schema = z.object({
    title: z.string().min(10).max(50),
    content: z.string().min(8).max(200),
    email: z.string().email(),
  });

  const parse = schema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    email: formData.get('email'),
  });

  if (!parse.success) {
    return {
      error: true,
      message: 'Uh oh!',
      description: parse.error.errors[0].message,
    };
  }

  const data = parse.data;

  try {
    const newNewsletter = await db.newsletter.create({
      data: {
        title: data.title,
        content: data.content,
        createdBy: {
          connect: {
            email: data.email,
          },
        },
      },
    });

    revalidatePath('/');
    return {
      error: false,
      message: `Added newsletter`,
      description: newNewsletter.title,
    };
  } catch (e) {
    return {
      error: true,
      message: 'Uh Oh!',
      description: 'Failed to create Newsletter',
    };
  }
}
