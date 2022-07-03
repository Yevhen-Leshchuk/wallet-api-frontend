import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const getIncomeCategories = createAsyncThunk(
  'transaction/income-categories',
  async () => {
    try {
      const { data } = await axios.get('/transaction/income-categories');

      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const getExpenseCategories = createAsyncThunk(
  'transaction/expense-categories',
  async () => {
    try {
      const { data } = await axios.get('/transaction/expense-categories');

      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const addIncome = createAsyncThunk(
  'transaction/income',
  async ({ description, category, amount, date }) => {
    const number = Number(amount);
    try {
      const { data } = await axios.post('/transaction/income', {
        description: description,
        category: category,
        amount: number,
        date: date,
      });
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const addExpense = createAsyncThunk(
  'transaction/expense',
  async credentials => {
    try {
      const { data } = await axios.post('/transaction/expense', credentials);
      console.log(data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const getIncomesData = createAsyncThunk('transaction/income', async () => {
  try {
    const { data } = await axios.get('/transaction/income');
    console.log(data);

    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const getExpensesData = createAsyncThunk('transaction/expense', async () => {
  try {
    const { data } = await axios.get('/transaction/expense');
    console.log(data);

    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const operations = {
  getIncomeCategories,
  getExpenseCategories,
  addIncome,
  addExpense,
  getIncomesData,
  getExpensesData,
};
export default operations;
