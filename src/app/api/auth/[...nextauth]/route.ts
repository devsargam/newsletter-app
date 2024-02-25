import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/db';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const userFromDb = await db.user.findFirst({
          where: { email: credentials?.email },
        });

        if (!userFromDb) {
          return null;
        }

        if (userFromDb.passwordHash !== credentials?.password) {
          return null;
        }

        return {
          id: userFromDb.id,
          email: userFromDb.email,
          name: userFromDb.username,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
