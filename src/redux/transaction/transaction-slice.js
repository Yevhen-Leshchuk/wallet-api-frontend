import { createSlice } from '@reduxjs/toolkit';
import transactionOperations from './transaction-operations';
import { authOperations } from 'redux/auth';

const initialState = {
  incomeCategories: [],
  expenseCategories: [],

  income: {
    description: '',
    category: '',
    amount: '',
    date: '',
  },

  expense: {
    description: '',
    category: '',
    amount: '',
    date: '',
  },

  incomesData: {
    incomes: null,
    monthsStats: null,
  },

  expensesData: {
    expenses: null,
    monthsStats: null,
  },

  isAddIncomeItem: false,
  isDeleteIncomeItem: false,

  isAddExpenseItem: false,
  isDeleteExpenseItem: false,

  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [transactionOperations.getIncomeCategories.fulfilled](state, action) {
      state.incomeCategories = action.payload;
      state.error = null;
    },
    [transactionOperations.getIncomeCategories.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.getExpenseCategories.fulfilled](state, action) {
      state.expenseCategories = action.payload;
      state.error = null;
    },
    [transactionOperations.getExpenseCategories.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.addExpense.fulfilled](state, action) {
      state.expense = action.payload;
      state.isAddExpenseItem = true;
      state.error = null;
    },
    [transactionOperations.addExpense.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.addIncome.fulfilled](state, action) {
      state.income = action.payload;
      state.isAddIncomeItem = true;
      state.error = null;
    },
    [transactionOperations.addIncome.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.getIncomesData.fulfilled](state, action) {
      state.incomesData.incomes = action.payload.incomes;
      state.incomesData.monthsStats = action.payload.monthsStats;
      state.isAddIncomeItem = false;
      state.isDeleteIncomeItem = false;
      state.error = null;
    },
    [transactionOperations.getIncomesData.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.getExpensesData.fulfilled](state, action) {
      state.expensesData.expenses = action.payload.expenses;
      state.expensesData.monthsStats = action.payload.monthsStats;
      state.isAddExpenseItem = false;
      state.isDeleteExpenseItem = false;
      state.error = null;
    },
    [transactionOperations.getExpensesData.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.deleteExpenseItem.fulfilled](state, _) {
      state.isDeleteExpenseItem = true;
      state.error = null;
    },
    [transactionOperations.deleteExpenseItem.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.deleteIncomeItem.fulfilled](state, _) {
      state.isDeleteIncomeItem = true;
      state.error = null;
    },

    [transactionOperations.deleteIncomeItem.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.incomeCategories = [];
      state.expenseCategories = [];
      state.income = {
        description: '',
        category: '',
        amount: '',
        date: '',
      };
      state.expense = {
        description: '',
        category: '',
        amount: '',
        date: '',
      };

      state.incomesData = {
        incomes: null,
        monthsStats: null,
      };
      state.expensesData = {
        incomes: null,
        monthsStats: null,
      };
      state.isAddIncomeItem = false;
      state.isDeleteIncomeItem = false;
      state.isAddExpenseItem = false;
      state.isDeleteExpenseItem = false;
      state.error = null;
    },
  },
});

export default transactionSlice.reducer;
