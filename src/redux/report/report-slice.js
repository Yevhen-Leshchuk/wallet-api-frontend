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
  error: null,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [reportOperations.getIncomesReport.fulfilled](state, action) {
      state.incomes = action.payload.incomes;
      state.error = null;
    },
    [reportOperations.getIncomesReport.rejected](state, action) {
      state.error = action.payload;
    },

    [reportOperations.getExpensesReport.fulfilled](state, action) {
      state.expenses = action.payload.expenses;
      state.error = null;
    },
    [reportOperations.getExpensesReport.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export default reportSlice.reducer;
