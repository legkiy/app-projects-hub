'use client';

import { RootState, useAppSelector } from '@/features/store';
import { FC } from 'react';

type RootStatePath =
  | keyof RootState
  | `${keyof RootState}.${keyof RootState[keyof RootState]}`;

interface IStoreDataDisplay {
  storePath: RootStatePath;
}

const StoreDataDisplay: FC<IStoreDataDisplay> = ({ storePath }) => {
  const store = useAppSelector((state) => getValueByKey(state, storePath));

  function getValueByKey<T>(rootState: T, key: string): number | undefined {
    const keys = key.split('.'); // Разбиваем строку ключа на части
    let value: any = rootState; // Начальное значение - корневой объект

    // Перебираем каждую часть ключа и получаем соответствующее значение
    for (const k of keys) {
      value = value?.[k]; // Обращаемся к значению по текущему ключу
      if (value === undefined) return undefined; // Если значение не найдено, возвращаем undefined
    }

    return value; // Возвращаем найденное значение
  }

  return <div>{store}</div>;
};

export default StoreDataDisplay;
