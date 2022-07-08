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
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.userData.email = action.payload.email;
      state.userData.id = action.payload.id;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.sid = action.payload.sid;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      state.error = null;
    },

    [authOperations.logOut.fulfilled](state) {
      state.userData = {
        email: null,
        balance: null,
        id: null,
        transactions: [],
      };
      state.sid = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.error = null;
    },

    [authOperations.refresh.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.newSid;
    },

    [authOperations.getUser.fulfilled](state, action) {
      state.userData.email = action.payload.email;
      state.userData.balance = action.payload.balance;
      state.userData.transactions = action.payload.transactions;
      state.isLoggedIn = true;
    },

    [authOperations.getUser.rejected](state, action) {
      state.error = action.payload;
    },

    [authOperations.updateUserBalance.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
    },

    [transactionOperations.addIncome.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
    },

    [transactionOperations.addExpense.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
    },

    [transactionOperations.deleteIncomeItem.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
    },

    [transactionOperations.deleteExpenseItem.fulfilled](state, action) {
      state.userData.balance = action.payload.newBalance;
    },
  },
});

export default authSlice.reducer;
