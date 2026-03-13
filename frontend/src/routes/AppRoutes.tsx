import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from '../store';
import Auth from '../components/Auth';
import { DashboardRoutes } from './DashboardRoutes';
import ProtectedRoute from '../components/ProtectedRoute';

export const AppRoutes = () => {
  const { user } = useAppStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route 
          path="/dashboard/*" 
          element={
            <ProtectedRoute>
              <DashboardRoutes />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/" 
          element={
            user ? <Navigate to="/dashboard" replace /> : <Navigate to="/auth" replace />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};