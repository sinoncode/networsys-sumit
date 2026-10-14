import React from 'react';
import { redirect } from 'next/navigation';
const Navigate = ({ to }) => { redirect(to); return null; };
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
    const { isAuthed } = useAuth();

    if (!isAuthed) return <Navigate to={redirectTo} replace />;

    return children;
}

export default ProtectedRoute;

export { ProtectedRoute };
