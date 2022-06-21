import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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

// const ReportIncomesPage = lazy(() =>
//   import(
//     'pages/ReportIncomesPage/ReportIncomesPage' /* webpackChunkName: "ReportIncomesPage" */
//   )
// );

const MobilePage = lazy(() =>
  import('pages/MobilePage/MobilePage' /* webpackChunkName: "MobilePage" */)
);

function App() {
  const mobileMediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<AuthPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="incomes" element={<IncomesPage />} />
            <Route path="report/*" element={<ReportPage />} />
            {/* <Route path="report-incomes" element={<ReportIncomesPage />} /> */}
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
