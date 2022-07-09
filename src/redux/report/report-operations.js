import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const getIncomesReport = createAsyncThunk(
  '/report/getIncomesReport',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/transaction/period-data/?date=${date}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getExpensesReport = createAsyncThunk(
  '/report/getExpensesReport',
  async (date, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/transaction/period-data/?date=${date}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  getIncomesReport,
  getExpensesReport,
};
export default operations;
