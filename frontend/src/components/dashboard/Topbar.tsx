import { useAuth } from "../../contexts/AuthContext";
import { LogOut, User } from "lucide-react";

export default function Topbar() {
  const { user, logout } = useAuth();

  const storedName = localStorage.getItem("userName");

  
  const displayName =
    user?.user_name && user.user_name !== "abc"
      ? user.user_name
      : storedName && storedName !== "abc"
      ? storedName
      : "Guest User";

  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-800">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full">
          <User size={20} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome, {displayName}! 👋
          </h2>
          <p className="text-gray-400">
            Manage your learning, gigs, and campus services with AllyGo.
          </p>
        </div>

      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>

    </div>
  );
}