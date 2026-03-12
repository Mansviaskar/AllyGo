import { User, Briefcase, MessageSquare, Bell } from "lucide-react";

export default function Overview() {
  return (
    <div className="space-y-10">


      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Profile Card */}
        <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <User className="text-orange-500" />
            <h3 className="text-lg font-semibold text-white">
              Profile
            </h3>
          </div>

          <p className="text-gray-400 mb-6">
            Manage your profile and skills
          </p>

          <button className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded-lg">
            View Profile
          </button>
        </div>


        {/* Gigs Card */}
        <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="text-orange-500" />
            <h3 className="text-lg font-semibold text-white">
              Gigs
            </h3>
          </div>

          <p className="text-gray-400 mb-6">
            Find and manage job opportunities
          </p>

          <button className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded-lg">
            Browse Gigs
          </button>
        </div>


        {/* Community Card */}
        <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="text-orange-500" />
            <h3 className="text-lg font-semibold text-white">
              Community
            </h3>
          </div>

          <p className="text-gray-400 mb-6">
            Connect with peers and mentors
          </p>

          <button className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded-lg">
            Join Discussion
          </button>
        </div>

      </div>


      {/* Recent Activity */}
      <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-orange-500" />
          <h3 className="text-xl font-semibold text-white">
            Recent Activity
          </h3>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-5 flex items-center gap-4">

          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>

          <div>
            <p className="text-white font-medium">
              Welcome to AllyGo!
            </p>

            <p className="text-gray-400 text-sm">
              Complete your profile to get started
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}