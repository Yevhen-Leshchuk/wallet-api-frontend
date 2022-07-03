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

  isAddIncomeItem: false,
  isDeleteIncomeItem: false,

  isAddExpenseItem: false,
  isDeleteExpenseItem: false,
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
      state.isAddExpenseItem = true;
    },

    [transactionOperations.addIncome.fulfilled](state, action) {
      state.income = action.payload;
      state.isAddIncomeItem = true;
    },

    [transactionOperations.getIncomesData.fulfilled](state, action) {
      state.incomesData.incomes = action.payload.incomes;
      state.incomesData.monthsStats = action.payload.monthsStats;
      state.isAddIncomeItem = false;
      state.isDeleteIncomeItem = false;
    },

    [transactionOperations.getExpensesData.fulfilled](state, action) {
      state.expensesData.expenses = action.payload.expenses;
      state.expensesData.monthsStats = action.payload.monthsStats;
      state.isAddExpenseItem = false;
      state.isDeleteExpenseItem = false;
    },

    [transactionOperations.deleteExpenseItem.fulfilled](state, _) {
      state.isDeleteExpenseItem = true;
    },

    [transactionOperations.deleteIncomeItem.fulfilled](state, _) {
      state.isDeleteIncomeItem = true;
    },
  },
});

export default transactionSlice.reducer;
