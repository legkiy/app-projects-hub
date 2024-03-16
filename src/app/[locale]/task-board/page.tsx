import { DnD } from '@/widgets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Task Board',
};

interface Props {}
const TaskBoard = (props: Props) => {
  return (
    <div>
      <DnD />
    </div>
  );
};
export default TaskBoard;
