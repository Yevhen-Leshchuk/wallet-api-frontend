import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const accessToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    accessToken.set(data.accessToken);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    accessToken.set(data.accessToken);
    console.log(data);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    accessToken.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const operations = {
  register,
  logIn,
  logOut,
};
export default operations;
