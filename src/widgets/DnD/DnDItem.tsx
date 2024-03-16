'use client';

import { FC } from 'react';
import { mockDnDData, MockItemType } from './_mockData';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import style from './dndItem.module.scss';

interface IDnDItem extends MockItemType {}

const DnDItem: FC<IDnDItem> = ({ id, name }) => {
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
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx({ [style['dnd-item']]: isDragging })}
    >
      {name}
      <button {...listeners}>Drag</button>
    </div>
  );
};
export default DnDItem;
