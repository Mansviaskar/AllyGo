import FeatureSlider from "../../components/dashboard/FeatureSlider";
import MyProfileCard from "./MyProfileCard";
import { useAuth } from "../../contexts/AuthContext";
import { BookOpen, Briefcase, Users, Home, Bell } from "lucide-react";

export default function Overview() {
  const { user } = useAuth();
  const storedName = localStorage.getItem("userName");

 
  const displayName =
    user?.user_name && user.user_name !== "abc"
      ? user.user_name
      : storedName && storedName !== "abc"
      ? storedName
      : "Guest User";

  return (
    <div className="space-y-10">

      {/* Profile Card */}
      <MyProfileCard
        name={displayName}
        isVerified={true}
        rating={4.5}
        completedTasks={23}
        role={user?.user_role || "Student"}
        skills={user?.skills || []}
      />

{/* Hero Section */}
<div className="bg-gradient-to-r from-[#111] to-[#1a1a1a] border border-gray-800 rounded-xl min-h-[70vh] flex items-center justify-between px-12">

  <div>

    <h1 className="text-5xl font-bold mb-6">
      Welcome to AllyGo
    </h1>

    <p className="text-gray-400 mb-8 max-w-xl text-lg">
      A student-first platform where you can learn, collaborate,
      earn through skill-based gigs, and discover trusted campus services.
    </p>

    <div className="flex gap-4">

      <button className="bg-orange-600 px-6 py-3 rounded-lg hover:bg-orange-700">
        Explore Opportunities
      </button>

      <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-[#1a1a1a]">
        Find Study Partners
      </button>

    </div>

  </div>

  <div className="hidden md:block text-9xl">
    🎓
  </div>

</div>

      
{/* AllyGo Features */}
<FeatureSlider />


{/* Student Opportunity Feed */}
      <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Student Opportunity Feed
        </h2>

        <div className="space-y-4">

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">
              Frontend Developer Needed
            </h3>
            <p className="text-gray-400 text-sm">
              Help build a student dashboard using React.
            </p>
            <span className="text-orange-500 text-sm">
              Reward: ₹1500
            </span>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">
              Looking for Data Structures Mentor
            </h3>
            <p className="text-gray-400 text-sm">
              Need help preparing for coding interviews.
            </p>
            <span className="text-orange-500 text-sm">
              2 students interested
            </span>
          </div>

        </div>

      </div>


{/* Gig Marketplace */}
      <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Gig Marketplace
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">Logo Design</h3>
            <p className="text-gray-400 text-sm">
              Design a startup logo
            </p>
            <span className="text-orange-500">
              ₹800
            </span>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">Web Development</h3>
            <p className="text-gray-400 text-sm">
              Build landing page
            </p>
            <span className="text-orange-500">
              ₹2000
            </span>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">Content Writing</h3>
            <p className="text-gray-400 text-sm">
              Write blog articles
            </p>
            <span className="text-orange-500">
              ₹500
            </span>
          </div>

        </div>

      </div>


{/* Recommended Study Partners */}
      <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recommended Study Partners
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">
              Rahul Sharma
            </h3>
            <p className="text-gray-400 text-sm">
              Strong in Data Structures
            </p>
            <button className="mt-3 text-orange-500">
              Connect
            </button>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">
              Priya Patel
            </h3>
            <p className="text-gray-400 text-sm">
              Frontend Developer
            </p>
            <button className="mt-3 text-orange-500">
              Connect
            </button>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="font-semibold">
              Arjun Mehta
            </h3>
            <p className="text-gray-400 text-sm">
              Machine Learning
            </p>
            <button className="mt-3 text-orange-500">
              Connect
            </button>
          </div>

        </div>

      </div>


{/* Stats Section Heading */}
<div>

  <h2 className="text-2xl font-semibold mb-2">
    Your Activity Overview
  </h2>

  <p className="text-gray-400 text-sm mb-6">
    Track your academic help posts, skill gigs, peer collaborations,
    and campus services activity in one place.
  </p>

</div>

{/* Stats Cards */}
<div className="grid md:grid-cols-4 gap-6">

  <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
    <BookOpen className="text-orange-500 mb-3"/>
    <p className="text-gray-400 text-sm">Help Posts</p>
    <h2 className="text-3xl font-bold">12</h2>
  </div>

  <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
    <Briefcase className="text-orange-500 mb-3"/>
    <p className="text-gray-400 text-sm">Skill Gigs</p>
    <h2 className="text-3xl font-bold">5</h2>
  </div>

  <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
    <Users className="text-orange-500 mb-3"/>
    <p className="text-gray-400 text-sm">Peer Matches</p>
    <h2 className="text-3xl font-bold">8</h2>
  </div>

  <div className="bg-[#111] border border-gray-800 rounded-xl p-6">
    <Home className="text-orange-500 mb-3"/>
    <p className="text-gray-400 text-sm">Campus Services</p>
    <h2 className="text-3xl font-bold">6</h2>
  </div>

</div>

      
{/* Recent Activity */}
      <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-orange-500"/>
          <h3 className="text-xl font-semibold">
            Recent Activity
          </h3>
        </div>

        <div className="space-y-4 text-gray-300">

          <p>🔔 You received a request for your Web Development gig</p>

          <p>📚 A student matched with you for Data Structures help</p>


        </div>

      </div>

    </div>
  );
}