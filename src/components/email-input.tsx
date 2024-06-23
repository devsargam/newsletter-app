'use client';

import { subscribeNewsletter } from '@/actions';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

type EmailInputProps = {
  id: string;
};

export const EmailInput = ({ id }: EmailInputProps) => {
  const { toast } = useToast();
  const [input, setInput] = useState('');

  const handleClick = async () => {
    console.log(id);
    const res = await subscribeNewsletter(id, input);
    toast({
      title: res.message,
      description: res.description,
      variant: !res.error ? 'default' : 'destructive',
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className='max-w-sm'>
      <Input value={input} onChange={(e) => setInput(e.currentTarget.value)} />
      <Button onClick={handleClick}>Subscribe</Button>
    </form>
  );
};
