const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.userData.email;
const getUserId = state => state.auth.userData.id;
const getBalance = state => state.auth.userData.balance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserId,
  getBalance,
};
export default authSelectors;
