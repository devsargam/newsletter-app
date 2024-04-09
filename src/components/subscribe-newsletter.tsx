import { EmailInput } from './email-input';

type SubscribeNewsletterProps = {
  id: string;
};

export function SubscribeNewsletter({ id }: SubscribeNewsletterProps) {
  return (
    <section>
      <h2 className='text-3xl font-bold'>Subscribe to our Newsletter</h2>
      <p className='text-gray-500 dark:text-gray-400'>
        Sign up to receive updates in your inbox.
      </p>
      <EmailInput id={id} />
    </section>
  );
}
