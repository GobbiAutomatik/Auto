import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'SUPER_ADMIN' | 'ADMIN' | 'SUPERVISOR' | 'USER';
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasRequiredRole(user.role, requiredRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

function hasRequiredRole(userRole: string, requiredRole: string): boolean {
  const roleHierarchy = {
    'SUPER_ADMIN': 4,
    'ADMIN': 3,
    'SUPERVISOR': 2,
    'USER': 1
  };

  return roleHierarchy[userRole as keyof typeof roleHierarchy] >= 
         roleHierarchy[requiredRole as keyof typeof roleHierarchy];
}