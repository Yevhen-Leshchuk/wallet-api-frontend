import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transaction-operations';

const initialState = {
  incomeCategories: [],
  expenseCategories: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [transactionOperations.getIncomeCategories.fulfilled](state, action) {
      state.incomeCategories = action.payload;
    },

    [transactionOperations.getExpenseCategories.fulfilled](state, action) {
      state.expenseCategories = action.payload;
    },
  },
});

export default transactionSlice.reducer;
