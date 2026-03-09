import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Briefcase, MessageSquare, Bell } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-orange-500/5 to-zinc-950">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent">
                Ally
              </span>
              <span className="text-white">Go</span>
            </h1>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.user_name}!
          </h2>
          <p className="text-zinc-400">
            {user?.course} • {user?.specialization}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Profile</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">Manage your profile and skills</p>
            <button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 py-2 rounded-lg transition-colors">
              View Profile
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Gigs</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">Find and manage job opportunities</p>
            <button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 py-2 rounded-lg transition-colors">
              Browse Gigs
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">Community</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">Connect with peers and mentors</p>
            <button className="w-full bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 py-2 rounded-lg transition-colors">
              Join Discussion
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-orange-500" />
            <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div>
                <p className="text-white">Welcome to AllyGo!</p>
                <p className="text-zinc-400 text-sm">Complete your profile to get started</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}