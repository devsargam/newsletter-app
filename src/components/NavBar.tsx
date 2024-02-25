import Link from 'next/link';

import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import { Logout } from './Logout';

export async function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const session = await getServerSession();
  console.log(session);

  return (
    <nav
      className={cn(
        'flex items-center justify-between space-x-4 px-10 lg:space-x-6 bg-black text-white py-5',
        className,
      )}
      {...props}
    >
      <Link
        href="/"
        className="text-lg font-medium transition-colors hover:text-white"
      >
        Home
      </Link>
      {!session ? (
        <div className="flex items-center space-x-5">
          <Link
            href="/login"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Register
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-5">
          <div>Signed in as: {session.user?.email}</div>
          <Link
            href="/logout"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Logout />
          </Link>
        </div>
      )}
    </nav>
  );
}
