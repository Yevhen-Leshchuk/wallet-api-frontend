import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transaction-operations';

const initialState = {
  incomeCategories: [],
  expenseCategories: [],

  expense: {
    description: '',
    category: '',
    amount: '',
    date: '',
  },

  income: {
    description: '',
    category: '',
    amount: '',
    date: '',
  },

  incomesData: {
    incomes: [],
    monthsStats: [],
  },

  expensesData: {
    expenses: [],
    monthsStats: [],
  },
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

    [transactionOperations.addExpense.fulfilled](state, action) {
      state.expense = action.payload;
    },

    [transactionOperations.addIncome.fulfilled](state, action) {
      state.income = action.payload;
    },

    [transactionOperations.getIncomesData.fulfilled](state, action) {
      console.log(action.payload.incomes);
      console.log(action.payload.monthsStats);

      state.incomesData.incomes = action.payload.incomes;
      state.incomesData.monthsStats = action.payload.monthsStats;
    },

    [transactionOperations.getExpensesData.fulfilled](state, action) {
      state.expensesData.expenses = action.payload.expenses;
      state.expensesData.monthsStats = action.payload.monthsStats;
    },
  },
});

export default transactionSlice.reducer;
