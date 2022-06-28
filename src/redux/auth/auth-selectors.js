const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.userData.email;
const getUserId = state => state.auth.userData.id;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserId,
};
export default authSelectors;
