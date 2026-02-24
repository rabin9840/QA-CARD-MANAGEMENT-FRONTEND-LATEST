import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import dashboardRoutes from '@/modules/dashboard/router';
import PrivateRoute from './PrivateRoute';
import NoPage from '@/views/PageNotFound';
import { useAppSelector } from '@/app/hooks';
import { RootState } from '@/app/store';
import ActivityLog from '@/views/Activity Log';
import CardCategory from '@/views/Card Category';
import Cards from '@/views/Cards';
import Plans from '@/views/Plans';
import CardDetails from '@/views/Cards/partial/CardDetail';
import PlanCardList from '@/views/Plans/partial/PlanCardList';
import CategoryTable from '@/views/Card Category/partial/CategoryTable';
import CardList from '@/views/Card Category/partial/CardList';

export default function AppRoutes() {
    const isAuthenticated = useAppSelector((state: RootState) => Boolean(state?.auth?.token));

    // Combine all routes
    const allRoutes = [...dashboardRoutes];

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {allRoutes.map(({ path, component: Component, isPrivate }) => {
                    if (isPrivate) {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <PrivateRoute>
                                        <Component />
                                    </PrivateRoute>
                                }
                            />
                        );
                    }

                    if (isAuthenticated && ['/login', '/'].includes(path)) {
                        return <Route key={path} path={path} element={<Navigate to="/" />} />;
                    }

                    return <Route key={path} path={path} element={<Component />} />;
                })}
                <Route path="/404" element={<NoPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
                <Route path="/activity-log" element={<ActivityLog />} />
                <Route path="/card-category" element={<CardCategory />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/card-details" element={<CardDetails />} />
                <Route path="/view-cards" element={<PlanCardList />} />
                <Route path="/category-table" element={<CategoryTable />} />
                <Route path="/category-card-list" element={<CardList />} />
            </Routes>
        </Suspense>
    );
}
