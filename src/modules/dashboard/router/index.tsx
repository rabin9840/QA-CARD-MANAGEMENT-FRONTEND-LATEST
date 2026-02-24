import { lazy } from 'react';

const Dashboard = lazy(() => import('@/views/Dashboard'));

const dashboardRoutes = [
    { path: '/dashboard', component: Dashboard, isPrivate: false },
    { path: '/', component: Dashboard, isPrivate: false },
];

export default dashboardRoutes;
