'use client';

import { FC, memo } from 'react';
import { TaskContainersType } from '../DnD/_mockData';
import styles from './dndColumn.module.scss';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import DnDItem from '../DnD/DnDItem';
import { useTranslations } from 'next-intl';
import { Button } from '@/share/UI';

interface IDnDColumn extends TaskContainersType {}

const DnDColumn: FC<IDnDColumn> = ({ id, title, items }) => {
  const t = useTranslations('taskBoard_page');
  const { setNodeRef } = useDroppable({
    id,
    data: {
      type: 'column',
    },
  });
  return (
    <div ref={setNodeRef} className={styles['dnd-column']}>
      <h2>{t(title)}</h2>
      {title === 'queue' && <Button>CreateTask</Button>}
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
