import { DnD } from '@/widgets';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata: Metadata = {
  title: 'Task Board',
};

interface Props {}
const TaskBoard = (props: Props) => {
  const messages = useMessages();
  return (
    <div>
      <NextIntlClientProvider messages={messages}>
        <DnD />
      </NextIntlClientProvider>
    </div>
  );
};
export default TaskBoard;
