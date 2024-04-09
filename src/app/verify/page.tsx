import prisma from '@/db';

// TODO: Verify this with an id
export default async function VerifyPage() {
  await prisma.emailSubscriber.updateMany({
    data: {
      isVerified: true,
    },
  });

  return <>Hey you got verified</>;
}
