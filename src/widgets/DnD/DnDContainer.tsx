'use client';

import { FC, memo } from 'react';
import { TaskContainersType } from './_mockData';
import styles from './dndContainer.module.scss';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import DnDItem from './DnDItem';
import { useTranslations } from 'next-intl';

interface IDnDContainer extends TaskContainersType {}

const DnDContainer: FC<IDnDContainer> = ({ id, title, items }) => {
  const t = useTranslations('taskBoard_page');
  const { setNodeRef } = useDroppable({
    id,
    data: {
      type: 'container',
    },
  });
  return (
    <div ref={setNodeRef} className={styles['dnd-container']}>
      <h2>{t(title as any)}</h2>
      <SortableContext items={items.map((item) => item.id)}>
        <div className={styles['container-items']}>
          {items.map((item) => (
            <DnDItem key={item.id} {...item} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};
export default memo(DnDContainer);
