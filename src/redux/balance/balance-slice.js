// import { createSlice } from '@reduxjs/toolkit';
// import balancOperations from './balance-operations';
// import { authOperations } from 'redux/auth';

// const initialState = {
//   balance: null,
// };

// const balanceSlice = createSlice({
//   name: 'balance',
//   initialState,
//   extraReducers: {
//     [balancOperations.updateUserBalance.fulfilled](state, action) {
//       state.balance = action.payload.newBalance;
//     },
//     [authOperations.getUser.fulfilled](state, action) {
//       state.balance = action.payload.balance;
//       console.log(state.balance);
//     },
//   },
// });

// export default balanceSlice.reducer;
