export type MockItemType = { id: string; name: string };

export const mockDnDData: MockItemType[] = [
  {
    id: (Date.now() * (Math.random() + 1)).toString(36),
    name: 'qqqq',
  },
  {
    id: (Date.now() + (Math.random() + 1)).toString(36),
    name: 'wwwww',
  },
  {
    id: (Date.now() + (Math.random() + 1)).toString(36),
    name: 'eeee',
  },
  {
    id: (Date.now() + (Math.random() + 1)).toString(36),
    name: 'rrrr',
  },
  {
    id: (Date.now() + (Math.random() + 1)).toString(36),
    name: 'tttt',
  },
];
