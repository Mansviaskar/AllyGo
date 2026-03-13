import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Overview from '../pages/dashboard/Overview';
import MyPosts from '../pages/dashboard/MyPosts';
import MyGigs from '../pages/dashboard/MyGigs';
import Requests from '../pages/dashboard/Requests';
import Matches from '../pages/dashboard/Matches';
import Verification from '../pages/dashboard/Verification';
import Notifications from '../pages/dashboard/Notifications';
import Settings from '../pages/dashboard/Settings';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="posts" element={<MyPosts />} />
        <Route path="gigs" element={<MyGigs />} />
        <Route path="requests" element={<Requests />} />
        <Route path="matches" element={<Matches />} />
        <Route path="verification" element={<Verification />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};