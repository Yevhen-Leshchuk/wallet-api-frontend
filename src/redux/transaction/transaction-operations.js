import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const getIncomeCategories = createAsyncThunk(
  'transaction/getIncomeCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/income-categories');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getExpenseCategories = createAsyncThunk(
  'transaction/getExpenseCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/expense-categories');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addIncome = createAsyncThunk(
  'transaction/addIncome',
  async ({ description, category, amount, date }, thunkAPI) => {
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addExpense = createAsyncThunk(
  'transaction/addExpense',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/transaction/expense', credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getIncomesData = createAsyncThunk(
  'transaction/getIncome',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/income');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getExpensesData = createAsyncThunk(
  'transaction/getExpense',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transaction/expense');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteIncomeItem = createAsyncThunk(
  'transaction/deleteIncome',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`transaction/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteExpenseItem = createAsyncThunk(
  'transaction/deleteExpense',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`transaction/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
