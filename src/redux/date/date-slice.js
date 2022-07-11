import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { authOperations } from 'redux/auth';

const initialState = {
  date: moment().format('YYYY-MM-DD'),
};

const dateSlice = createSlice({
  name: 'date',
  initialState: initialState,
  extraReducers: {
    selectedDate: (state, action) => {
      state.date = action.payload;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.date = null;
    },
  },
});

export const { selectedDate } = dateSlice.actions;
export const selectedDateReducer = dateSlice.reducer;
