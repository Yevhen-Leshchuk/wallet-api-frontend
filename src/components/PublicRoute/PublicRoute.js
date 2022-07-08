import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const loginedRedirect = isLoggedIn && restricted;

  return (
    <>
      {loginedRedirect ? <Navigate to={redirectTo} replace={true} /> : children}
    </>
  );
};

// PublicRoute.propTypes = {
//   children: PropTypes.node,
//   redirectTo: PropTypes.string,
//   restricted: PropTypes.bool,
// };

export default PublicRoute;
