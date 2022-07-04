import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const getIncomeCategories = createAsyncThunk(
  'transaction/getIncomeCategories',
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
  'transaction/getExpenseCategories',
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
  'transaction/addIncome',
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
  'transaction/addExpense',
  async credentials => {
    try {
      const { data } = await axios.post('/transaction/expense', credentials);
      // console.log(data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const getIncomesData = createAsyncThunk('transaction/getIncome', async () => {
  try {
    const { data } = await axios.get('/transaction/income');
    // console.log(data);

    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const getExpensesData = createAsyncThunk('transaction/getExpense', async () => {
  try {
    const { data } = await axios.get('/transaction/expense');

    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const deleteIncomeItem = createAsyncThunk(
  'transaction/deleteIncome',
  async id => {
    try {
      const { data } = await axios.delete(`transaction/${id}`);
      // console.log(data);

      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const deleteExpenseItem = createAsyncThunk(
  'transaction/deleteExpense',
  async id => {
    try {
      const { data } = await axios.delete(`transaction/${id}`);
      // console.log(data);

      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const operations = {
  getIncomeCategories,
  getExpenseCategories,
  addIncome,
  addExpense,
  getIncomesData,
  getExpensesData,
  deleteIncomeItem,
  deleteExpenseItem,
};
export default operations;
