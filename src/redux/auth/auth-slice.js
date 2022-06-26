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
  },
});

export default authSlice.reducer;
