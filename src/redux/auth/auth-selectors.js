const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const getUserId = state => state.auth.user.id;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserId,
};
export default authSelectors;
