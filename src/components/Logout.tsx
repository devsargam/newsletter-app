'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';

export function Logout() {
  return <Button onClick={() => signOut()}> Logout </Button>;
}
