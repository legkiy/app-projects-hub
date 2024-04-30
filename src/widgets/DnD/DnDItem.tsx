'use client';

import { FC } from 'react';
import { TaskType } from './_mockData';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import style from './dndItem.module.scss';
import { Card } from '@/share/UI';

interface IDnDItem extends TaskType {}

const DnDItem: FC<IDnDItem> = ({ id, title, description }) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: {
      type: 'item',
    },
  });

  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        // cursor: isDragging ? 'grabbing' : 'grab',
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(style['dnd-item'], {
        [style['dnd-item-active']]: isDragging,
      })}
      {...listeners}
    >
      <Card>
        <h4>{title}</h4>
        <p>{description}</p>
      </Card>
    </div>
  );
};
export default DnDItem;
