'use client';

import { FC, memo } from 'react';
import { TaskContainersType, TaskType } from '../DnD/_mockData';
import styles from './dndColumn.module.scss';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import DnDItem from '../DnD/DnDItem';
import { useTranslations } from 'next-intl';
import { Button } from '@/share/UI';
import { CreateTaskForm } from '..';

interface IDnDColumn extends TaskContainersType {
  onOpenCreateTask: () => void;
  openCreateTask: boolean;
  onCreateTask: (data: TaskType) => void;
}

const DnDColumn: FC<IDnDColumn> = ({
  id,
  title,
  items,
  onOpenCreateTask,
  openCreateTask,
  onCreateTask,
}) => {
  const t = useTranslations('taskBoard_page');
  const { setNodeRef } = useDroppable({
    id,
    data: {
      type: 'column',
    },
  });
  return (
    <div ref={setNodeRef} className={styles['dnd-column']}>
      <div className={styles.title}>
        <h2>{t(title)}</h2>
        {title === 'queue' && (
          <>
            <Button onClick={onOpenCreateTask}>CreateTask</Button>
          </>
        )}
      </div>
      {title === 'queue' && openCreateTask && (
        <CreateTaskForm onCreateTask={onCreateTask} />
      )}
      <SortableContext items={items.map((item) => item.id)}>
        <div className={styles['column-items']}>
          {items.map((item) => (
            <DnDItem key={item.id} {...item} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};
export default memo(DnDColumn);
