'use client';
import { FC, useState } from 'react';
import style from './dnd.module.scss';
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { mockDnDData } from './_mockData';
import DnDItem from './DnDItem';

const DnD: FC = () => {
  const [items, setItems] = useState<typeof mockDnDData>(mockDnDData);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handaleOnDragStart = (event: DragStartEvent) => {};

  const handaleOnDragMove = (event: DragMoveEvent) => {};

  const handaleOnDragEnd = (event: DragEndEvent) => {};
  console.log(items);

  return (
    <div className={style.dnd}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handaleOnDragStart}
        onDragMove={handaleOnDragMove}
        onDragEnd={handaleOnDragEnd}
      >
        <SortableContext items={items.map((el) => el.id)}>
          {items.map((el) => (
            <DnDItem key={el.id} {...el} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
export default DnD;
