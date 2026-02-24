import { ReactNode } from 'react';
// import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    allowedRoles: string[];
    children?: ReactNode;
}

export default function PrivateRoute({ allowedRoles }: ProtectedRouteProps) {
    // const [cookies] = useCookies(['access_token', 'role']);
    // const isAuthenticated = !!cookies.access_token;
    // const [cookies] = useCookies(['access_token', 'role']);
    const isAuthenticated = true;
    const userRole = 'admin';

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
