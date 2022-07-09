import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import Layout from './Layout';
import useMediaQuery from 'common/hooks/mediaRulesHook';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AuthPage = lazy(() =>
  import('pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage" */)
);

const ExpensesPage = lazy(() =>
  import(
    'pages/ExpensesPage/ExpensesPage' /* webpackChunkName: "ExpensesPage" */
  )
);

const IncomesPage = lazy(() =>
  import('pages/IncomesPage/IncomesPage' /* webpackChunkName: "IncomesPage" */)
);

const ReportPage = lazy(() =>
  import('pages/ReportPage/ReportPage' /* webpackChunkName: "ReportPage" */)
);

const MobilePage = lazy(() =>
  import('pages/MobilePage/MobilePage' /* webpackChunkName: "MobilePage" */)
);

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const activeLocation = location.pathname;
  const error = useSelector(authSelectors.getError);

  const mobileMediaQuery = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (!error) {
      return;
    }
    dispatch(authOperations.logOut());
  }, [error, dispatch]);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  useEffect(() => {
    if (mobileMediaQuery && activeLocation === '/mobile') {
      navigate('/expenses');
    }
  }, [navigate, activeLocation, mobileMediaQuery]);

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <PublicRoute restricted redirectTo="/expenses">
                  <AuthPage />
                </PublicRoute>
              }
            />
            <Route
              path="expenses"
              element={
                <PrivateRoute redirectTo="/">
                  <ExpensesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="incomes"
              element={
                <PrivateRoute redirectTo="/">
                  <IncomesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="report/*"
              element={
                <PrivateRoute redirectTo="/">
                  <ReportPage />
                </PrivateRoute>
              }
            />
            {!mobileMediaQuery && (
              <Route
                path="mobile"
                element={
                  <PrivateRoute redirectTo="/">
                    <MobilePage />
                  </PrivateRoute>
                }
              />
            )}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
