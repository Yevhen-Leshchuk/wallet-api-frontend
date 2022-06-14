import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

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
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<AuthPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="incomes" element={<IncomesPage />} />
            <Route path="report" element={<ReportPage />} />
            <Route path="mobile" element={<MobilePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
