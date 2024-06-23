'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export function Logout() {
  const router = useRouter();
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        signOut();
        router.push('/login');
        router.refresh();
        toast({
          title: 'Logged out sucessfully!',
          description: 'Login with other account to continue',
        });
      }}
    >
      Logout
    </Button>
  );
}
