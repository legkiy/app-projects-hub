import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { actions, reducer } = counterSlice;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
