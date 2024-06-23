'use client';
import { deleteNewsletter } from '@/actions';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { FileEditIcon, FilePlus, FileX2, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export function EditNewsletter() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className='rounded-full' size='icon' variant='default'>
            <FileEditIcon className='w-4 h-4' />
            <span className='sr-only'>Edit</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='border p-1'>Edit Newsletter</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function DeleteNewsletter({ id }: { id: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className='rounded-full'
            size='icon'
            variant='default'
            onClick={() => {
              deleteNewsletter(id);
            }}
          >
            <FileX2 className='w-4 h-4' />
            <span className='sr-only'>Delete</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='border p-1'>Delete Newsletter</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function ShareNewsletter({ id }: { id: string }) {
  const { toast } = useToast();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className='rounded-full'
            size='icon'
            variant='default'
            onClick={async () => {
              const text = `${location.origin}/${id}`;
              await navigator.clipboard.writeText(text);
              toast({
                title: `Copied: ${text} to clipboard`,
              });
            }}
          >
            <Share2 className='w-4 h-4' />
            <span className='sr-only'>Share</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='border p-1'>Share Newsletter</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AddNewsletter() {
  return (
    <Link href={'/create'}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className='rounded-full' size='lg' variant='default'>
              <FilePlus className='w-4 h-4' />
              <span className='sr-only'>Add</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className='border p-1'>Add Newsletter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
}
