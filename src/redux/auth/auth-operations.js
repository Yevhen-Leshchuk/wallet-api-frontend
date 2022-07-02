import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

// const refreshToken = {
//   set(refreshToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const accessToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    accessToken.set(data.accessToken);
    // refreshToken.set(data.refreshToken);

    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    // refreshToken.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const updateUserBalance = createAsyncThunk('auth/balance', async newBalance => {
  try {
    const { data } = await axios.patch('/user/balance', {
      newBalance: newBalance,
    });

    // refreshToken.set(data.refreshToken);
    accessToken.set(data.accessToken);

    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.refreshToken;
  const userSid = state.auth.sid;

  if (persistedToken === null) {
    console.log('Токена нет, уходим из fetchCurrentUser');
    return thunkAPI.rejectWithValue();
  }

  // refreshToken.set(persistedToken);
  try {
    const { data } = await axios.post('/auth/refresh', { sid: userSid });
    console.log(data);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const getUser = createAsyncThunk('auth/user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;

  if (persistedToken === null) {
    console.log('Токена нет, уходим из fetchCurrentUser');
    return thunkAPI.rejectWithValue();
  }

  accessToken.set(persistedToken);
  try {
    const { data } = await axios.get('/user');
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const operations = {
  register,
  logIn,
  logOut,
  refresh,
  getUser,
  updateUserBalance,
};
export default operations;
