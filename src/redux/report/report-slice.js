import { createSlice } from '@reduxjs/toolkit';
import reportOperations from './report-operations';
import { authOperations } from 'redux/auth';

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
    [authOperations.logOut.fulfilled](state, action) {
      state.incomes = {
        expenseTotal: null,
        expensesData: {},
      };
      state.expenses = {
        expenseTotal: null,
        expensesData: {},
      };
      state.error = null;
    },
  },
});

export default reportSlice.reducer;
