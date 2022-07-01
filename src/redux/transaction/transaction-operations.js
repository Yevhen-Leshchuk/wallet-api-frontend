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

const operations = {
  getIncomeCategories,
  getExpenseCategories,
};
export default operations;
