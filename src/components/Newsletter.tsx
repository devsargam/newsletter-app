import Image from 'next/image';
import { Separator } from './ui/separator';
import { timeAgo } from '@/utils';
import {
  AddNewsletter,
  DeleteNewsletter,
  EditNewsletter,
} from './NewsletterToolTip';

interface NewsletterProps {
  title: string;
  content: string;
  createdAt: Date;
  id: string;
}

export function Newsletter({ id, content, createdAt, title }: NewsletterProps) {
  return (
    <div className='max-w-64 flex flex-col gap-2 rounded-lg border border-gray-100 dark:border-gray-800'>
      <Image
        alt='Thumbnail'
        className='aspect-[2/1] overflow-hidden object-cover object-center'
        height='150'
        src='/placeholder.svg'
        width='300'
      />
      <div className='p-4 space-y-2'>
        <div className='space-y-1 felx flex-col'>
          <h3 className='text-lg font-bold'>{title}</h3>
          <h4 className='text-sm text-gray-500 dark:text-gray-400'>
            {content}
          </h4>
        </div>
      </div>
      <Separator />
      <div className='flex w-full items-center justify-between p-4'>
        <p className='text-sm text-gray-800'>{timeAgo(createdAt)}</p>
        <div className='gap-2 flex'>
          <EditNewsletter />
          <DeleteNewsletter id={id} />
        </div>
      </div>
    </div>
  );
}

export function CreateNewsletter() {
  return (
    <div className='py-10 w-64 flex flex-col gap-2 rounded-lg border border-gray-100 dark:border-gray-800'>
      <div className='p-4 space-y-2'>
        <div className='space-y-1 felx flex-col'>
          <h3 className='text-lg font-bold text-center'>Create New</h3>
          <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
            Click here to create a new Newsletter
          </p>
        </div>
      </div>
      <Separator />
      <div className='flex items-center gap-4 h-full justify-center w-full'>
        <AddNewsletter />
      </div>
    </div>
  );
}
