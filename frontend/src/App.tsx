import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

import AuthPage from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./components/dashboard/DashboardLayout";

import Overview from "./pages/dashboard/Overview";
import MyPosts from "./pages/dashboard/MyPosts";
import MyGigs from "./pages/dashboard/MyGigs";
import Requests from "./pages/dashboard/Requests";
import Matches from "./pages/dashboard/Matches";
import Verification from "./pages/dashboard/Verification";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";

import { ThemeProvider } from "./contexts/theme-provider";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>

          <Routes>

            {/* Landing Page */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                  <Features />
                  <Footer />
                </>
              }
            />

            {/* Auth Page */}
            <Route path="/auth" element={<AuthPage />} />

            {/* Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Overview />} />
              <Route path="posts" element={<MyPosts />} />
              <Route path="gigs" element={<MyGigs />} />
              <Route path="requests" element={<Requests />} />
              <Route path="matches" element={<Matches />} />
              <Route path="verification" element={<Verification />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
            </Route>

          </Routes>

        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
