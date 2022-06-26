import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  email: null,
  id: null,
  accessToken: null,
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
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.email = null;
      state.id = null;
      state.accessToken = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
