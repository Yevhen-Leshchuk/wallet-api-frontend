const getIsFetching = state => state.auth.isFetching;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.userData.email;
const getUserId = state => state.auth.userData.id;
const getUserSid = state => state.auth.sid;
const getBalance = state => state.auth.userData.balance;
const getAuthError = state => state.auth.error;

const authSelectors = {
  getIsFetching,
  getIsLoggedIn,
  getUsername,
  getUserId,
  getUserSid,
  getBalance,
  getAuthError,
};
export default authSelectors;
