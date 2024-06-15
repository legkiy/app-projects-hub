'use client';

import { FC, useState, useEffect } from 'react';
import style from './dnd.module.scss';
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { TaskContainersType, TaskType } from './_mockData';
import { CreateTaskForm, DnDColumn } from '@/widgets';
import DnDItem from './DnDItem';
import useLocalStorage from '@/share/hooks/useLocalStorage/useLocalStorage';
import { defaultTaskContainers } from './_mockData';

const DnD: FC = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);

  const [containers, setContainers] = useState<TaskContainersType[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier>('');
  const [activeItem, setActiveItem] = useState<TaskType>();
  const { getLSItem, setLSItem } = useLocalStorage();

  useEffect(() => {
    const loadTasks = getLSItem('tasks');

    setContainers(loadTasks ? loadTasks : defaultTaskContainers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const findActiveContainer = (
    id: UniqueIdentifier,
    type: 'column' | 'item'
  ) => {
    if (type === 'column') {
      return containers.find((container) => container.id === id);
    }
    return containers.find((container) =>
      container.items.find((item) => item.id === id)
    );
  };

  const findTargetIndex = (
    arr: (TaskContainersType | TaskType)[],
    targetId: UniqueIdentifier
  ) => {
    return arr.findIndex((el) => el.id === targetId);
  };

  const handaleOnDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActiveId(active.id);

    const currentItem = containers
      .flatMap((container) => container.items)
      .find((item) => item.id === active.id);
    setActiveItem(currentItem);
  };

  const handaleOnDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;
    const activeType = active.data.current?.type;
    const overType = over?.data.current?.type;

    // handlie item sorting
    if (active && over && active.id !== over.id) {
      const newItems = [...containers];

      if (activeType === 'item' && overType === 'item') {
        const activeContainer = findActiveContainer(active.id, 'item');
        const overContainer = findActiveContainer(over.id, 'item');

        if (!activeContainer || !overContainer) return;

        const activeContainerIndex = findTargetIndex(
          containers,
          activeContainer.id
        );

        const overContainerIndex = findTargetIndex(
          containers,
          overContainer.id
        );

        const activeItemIndex = findTargetIndex(
          activeContainer.items,
          active.id
        );

        const overItemIndex = findTargetIndex(overContainer.items, over.id);

        if (activeContainerIndex === overContainerIndex) {
          newItems[activeContainerIndex].items = arrayMove(
            newItems[activeContainerIndex].items,
            activeItemIndex,
            overItemIndex
          );

          setContainers(newItems);
        } else {
          const [removedItems] = newItems[activeContainerIndex].items.splice(
            activeItemIndex,
            1
          );

          newItems[overContainerIndex].items.splice(
            overItemIndex,
            0,
            removedItems
          );

          setContainers(newItems);
        }
      }
      // handale drop item into container
      if (activeType === 'item' && overType === 'column') {
        const activeContainer = findActiveContainer(active.id, 'item');
        const overContainer = findActiveContainer(over.id, 'column');

        if (!activeContainer || !overContainer) return;

        const activeContainerIndex = findTargetIndex(
          containers,
          activeContainer.id
        );

        const overContainerIndex = findTargetIndex(
          containers,
          overContainer.id
        );

        const activeItemIndex = findTargetIndex(
          activeContainer.items,
          active.id
        );

        const [removedItem] = newItems[activeContainerIndex].items.splice(
          activeItemIndex,
          1
        );
        newItems[overContainerIndex].items.push(removedItem);
        setContainers(newItems);
      }
    }
  };

  const handaleOnDragEnd = (event: DragEndEvent) => {
    setLSItem('tasks', containers);
  };

  const onCreateTask = (data: TaskType) => {
    const newContainers = [...containers];
    newContainers[0].items.unshift(data);

    setContainers(newContainers);
    setLSItem('tasks', newContainers);
  };

  return (
    <div>
      {/* <CreateTaskForm onCreateTask={onCreateTask} /> */}

      <DndContext
        id="dnd-context"
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handaleOnDragStart}
        onDragMove={handaleOnDragMove}
        onDragEnd={handaleOnDragEnd}
      >
        <div className={style['dnd-box']}>
          {containers.map((container) => (
            <DnDColumn
              key={container.id}
              {...container}
              onOpenCreateTask={() => setOpenCreateTask((prev) => !prev)}
              openCreateTask={openCreateTask}
              onCreateTask={onCreateTask}
            />
          ))}
        </div>
        <DragOverlay>
          {activeId && activeItem && <DnDItem {...activeItem} />}
        </DragOverlay>
      </DndContext>
    </div>
  );
};
export default DnD;
