import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import counterSlice, { actions as counterActions } from './counter';
import { useMemo } from 'react';

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
};

const rootActions = { ...counterActions };

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export const useActions = () => {
  const dispath = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispath), [dispath]);
};
