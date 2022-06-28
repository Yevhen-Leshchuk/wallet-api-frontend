import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

// "userData": {
//     "email": "max5@gmail.com",
//     "balance": 0,
//     "id": "62b62a57db7a81081402ae7b",
//     "transactions": []
//   }

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
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.userData.email = action.payload.email;
      state.userData.id = action.payload.id;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.sid = action.payload.sid;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
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
  },
});

export default authSlice.reducer;
