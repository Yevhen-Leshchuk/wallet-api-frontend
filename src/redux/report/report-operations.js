import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const getIncomesReport = createAsyncThunk(
  '/report/getIncomesReport',
  async date => {
    try {
      const { data } = await axios.get(
        `/transaction/period-data/?date=${date}`
      );
      // console.log(data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const getExpensesReport = createAsyncThunk(
  '/report/getExpensesReport',
  async date => {
    try {
      const { data } = await axios.get(
        `/transaction/period-data/?date=${date}`
      );
      // console.log(data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

const operations = {
  getIncomesReport,
  getExpensesReport,
};
export default operations;
