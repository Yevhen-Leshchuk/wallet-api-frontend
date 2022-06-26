const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.email;
const getUserId = state => state.auth.id;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserId,
};
export default authSelectors;
