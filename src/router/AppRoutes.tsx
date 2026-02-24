import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import dashboardRoutes from '@/modules/dashboard/router';
import PrivateRoute from './PrivateRoute';
import NoPage from '@/views/PageNotFound';
// import { useCookies } from 'react-cookie';

import ActivityLog from '@/views/Activity Log';
import CardCategory from '@/views/Card Category';
import Cards from '@/views/Cards';
import Plans from '@/views/Plans';
import CardDetails from '@/views/Cards/partial/CardDetail';
import PlanCardList from '@/views/Plans/partial/PlanCardList';
import CategoryTable from '@/views/Card Category/partial/CategoryTable';
import CardList from '@/views/Card Category/partial/CardList';

const SsoLogin = lazy(() => import('@/views/Authentication/SsoLogin'));

const LoadingFallback = () => (
    <div className="spinner-container">
        <div className="nb-spinner"></div>
    </div>
);

export default function AppRoutes() {
    // const [cookies] = useCookies(['access_token']);
    // const isAuthenticated = !!cookies.access_token;
    const isAuthenticated = true;

    const protectedRoutes = [
        { path: '/activity-log', element: <ActivityLog /> },
        { path: '/card-category', element: <CardCategory /> },
        { path: '/cards', element: <Cards /> },
        { path: '/plans', element: <Plans /> },
        { path: '/card-details', element: <CardDetails /> },
        // { path: '/view-cards', element: <PlanCardList /> },
        { path: '/view-cards/:planId', element: <PlanCardList /> },
        { path: '/category-table', element: <CategoryTable /> },
        // { path: '/category-card-list', element: <CardList /> },
        { path: '/category-card-list/:categoryId', element: <CardList /> },
    ];

    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                {/* PUBLIC ROUTE */}
                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SsoLogin />}
                />

                {/* ============================
                    PROTECTED ROUTES (PARENT)
                   ============================ */}
                <Route element={<PrivateRoute allowedRoles={['admin', 'ADMIN']} />}>
                    {/* Dashboard routes */}
                    {dashboardRoutes.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.component />} />
                    ))}

                    {/* Other mapped protected routes */}
                    {/* {protectedRoutes.map(({ path, component: Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))} */}

                    {protectedRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}

                    {/* 404 inside protected area */}
                    <Route path="*" element={<NoPage />} />
                </Route>

                {/* 404 outside */}
                <Route path="/404" element={<NoPage />} />
            </Routes>
        </Suspense>
    );
}
