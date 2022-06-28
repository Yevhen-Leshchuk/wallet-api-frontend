import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import Layout from './Layout';
import useMediaQuery from 'common/hooks/mediaRulesHook';

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

  const mobileMediaQuery = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
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
            <Route index path="/" element={<AuthPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="incomes" element={<IncomesPage />} />
            <Route path="report/*" element={<ReportPage />} />
            {!mobileMediaQuery && (
              <Route path="mobile" element={<MobilePage />} />
            )}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
