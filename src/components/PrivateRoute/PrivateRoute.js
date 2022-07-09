// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { authSelectors } from 'redux/auth';

// const PrivateRoute = ({ children, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
// };

// PrivateRoute.propTypes = {
//   children: PropTypes.node,
//   redirectTo: PropTypes.string,
// };

// export default PrivateRoute;
