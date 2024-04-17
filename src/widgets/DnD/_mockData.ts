import { UniqueIdentifier } from '@dnd-kit/core';

export type TaskContainersType = {
  id: string | UniqueIdentifier;
  title: string;
  items: TaskType[];
};

export type TaskType = {
  id: string | UniqueIdentifier;
  title: string;
  description?: string;
};

export const mockData: TaskContainersType[] = [
  {
    id: 'queue',
    title: 'queue',
    items: [
      {
        id: (Date.now() * (Math.random() + 1)).toString(36),
        title: 'сохранение DnD',
        description:'Сделать сохранение DnD списка в LSs'
      },
    ],
  },
  {
    id: 'inProgress',
    title: 'inProgress',
    items: [
      {
        id: (Date.now() * (Math.random() + 2)).toString(36),
        title: 'DnD',
        description: 'доделать DnD',
      },
    ],
  },
  {
    id: 'complete',
    title: 'complete',
    items: [],
  },
];
