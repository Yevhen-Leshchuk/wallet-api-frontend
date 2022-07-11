import { lazy } from 'react';

const MainRoutes = [
  {
    name: 'AuthPage',
    path: '/',
    component: import(
      'pages/AuthPage/AuthPage' /* webpackChunkName: "AuthPage" */
    ),
    isPrivate: false,
    redirectTo: '/expense',
    restricted: true,
  },

  {
    name: 'ExpensesPage',
    path: 'expenses',
    component: lazy(() =>
      import(
        'pages/ExpensesPage/ExpensesPage' /* webpackChunkName: "ExpensesPage" */
      )
    ),
    redirectTo: '/',
    isPrivate: true,
  },

  {
    name: 'IncomesPage',
    path: 'incomes',
    component: lazy(() =>
      import(
        'pages/IncomesPage/IncomesPage' /* webpackChunkName: "IncomesPage" */
      )
    ),
    isPrivate: true,
    redirectTo: '/',
  },

  {
    name: 'ReportPage',
    path: 'report/*',
    component: lazy(() =>
      import('pages/ReportPage/ReportPage' /* webpackChunkName: "ReportPage" */)
    ),
    isPrivate: true,
    redirectTo: '/',
  },

  {
    name: 'MobilePage',
    path: 'mobile',
    component: lazy(() =>
      import('pages/MobilePage/MobilePage' /* webpackChunkName: "MobilePage" */)
    ),
    isPrivate: true,
    redirectTo: '/',
    isMobile: true,
  },
];

export default MainRoutes;
