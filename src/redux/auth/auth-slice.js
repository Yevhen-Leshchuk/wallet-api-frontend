import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { transactionOperations } from 'redux/transaction';

const initialState = {
  userData: {
    email: null,
    balance: null,
    id: null,
    transactions: [],
  },

  sid: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.userData.email = action.payload.email;
      state.userData.id = action.payload.id;
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.sid = action.payload.sid;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.logOut.fulfilled](state) {
      state.userData = {
        id: null,
        email: null,
        balance: null,
        transactions: [],
      };
      state.sid = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.refresh.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.newSid;
      state.error = null;
    },
    [authOperations.refresh.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.getUser.pending](state, action) {
      state.isFetching = true;
    },
    [authOperations.getUser.fulfilled](state, action) {
      state.userData.email = action.payload.email;
      state.userData.balance = action.payload.balance;
      state.userData.transactions = action.payload.transactions;
      state.isLoggedIn = true;
      state.isFetching = false;
      state.error = null;
    },
    [authOperations.getUser.rejected](state, action) {
      state.error = action.payload;
      state.isFetching = false;
    },

    [authOperations.updateUserBalance.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
      state.error = null;
    },
    [authOperations.updateUserBalance.rejected](state, action) {
      state.error = action.payload;
    },

    [transactionOperations.addIncome.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
      state.error = null;
    },

    [transactionOperations.addExpense.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
      state.error = null;
    },

    [transactionOperations.deleteIncomeItem.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
      state.error = null;
    },

    [transactionOperations.deleteExpenseItem.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
      state.error = null;
    },
  },
});

export default authSlice.reducer;
