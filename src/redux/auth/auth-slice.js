import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  email: null,
  id: null,
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
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.email = action.payload.userData.email;
      state.id = action.payload.userData.id;
      state.sid = action.payload.sid;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.email = null;
      state.id = null;
      state.sid = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.newSid;
    },
  },
});

export default authSlice.reducer;
