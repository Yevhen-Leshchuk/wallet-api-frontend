import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';

const initialState = {
  expenses: {
    expenseTotal: null,
    expensesData: {},
  },
  incomes: {
    incomesTotal: null,
    incomesData: {},
  },
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [reportOperations.getIncomesReport.fulfilled](state, action) {
      state.incomes = action.payload.incomes;
    },

    [reportOperations.getExpensesReport.fulfilled](state, action) {
      state.expenses = action.payload.expenses;
    },
  },
});

export default reportSlice.reducer;
