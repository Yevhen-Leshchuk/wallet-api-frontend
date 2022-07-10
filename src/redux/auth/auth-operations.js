import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  errorMessage,
  successMessage,
} from 'common/notifications/notification';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const accessToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      successMessage('Вы успешно зарегистрированы!');

      return data;
    } catch (error) {
      errorMessage('Такой пользователь уже существует!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    accessToken.set(data.accessToken);
    successMessage('Добро пожаловать в wallet!');
    return data;
  } catch (error) {
    errorMessage('Неверный логин, или пароль!');
    return thunkAPI.rejectWithValue(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const updateUserBalance = createAsyncThunk(
  'auth/balance',
  async (newBalance, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user/balance', {
        newBalance: newBalance,
      });

      accessToken.set(data.accessToken);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.refreshToken;
  const userSid = state.auth.sid;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const { data } = await axios.post('/auth/refresh', { sid: userSid });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getUser = createAsyncThunk('auth/user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.accessToken;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  accessToken.set(persistedToken);
  try {
    const { data } = await axios.get('/user');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
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
