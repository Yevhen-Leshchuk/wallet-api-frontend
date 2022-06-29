// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

// // const refreshToken = {
// //   set(refreshToken) {
// //     axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
// //   },
// //   unset() {
// //     axios.defaults.headers.common.Authorization = '';
// //   },
// // };

// const accessToken = {
//   set(accessToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const updateUserBalance = createAsyncThunk('user/balance', async newBalance => {
//   try {
//     const { data } = await axios.patch('/user/balance', {
//       newBalance: newBalance,
//     });

//     // refreshToken.set(data.refreshToken);
//     accessToken.set(data.accessToken);
//     console.log(data);

//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

// const operations = {
//   updateUserBalance,
// };
// export default operations;
