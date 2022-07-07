const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.userData.email;
const getUserId = state => state.auth.userData.id;
const getBalance = state => state.auth.userData.balance;
const getError = state => state.auth.error;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserId,
  getBalance,
  getError,
};
export default authSelectors;
