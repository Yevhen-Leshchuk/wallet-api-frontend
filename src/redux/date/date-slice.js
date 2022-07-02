import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
};

const dateSlice = createSlice({
  name: 'date',
  initialState: initialState,
  reducers: {
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { selectedDate } = dateSlice.actions;
export const selectedDateReducer = dateSlice.reducer;
