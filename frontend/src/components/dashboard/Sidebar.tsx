import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Send,
  Users,
  BadgeCheck,
  Bell,
  Settings,
  Menu,
  X
} from "lucide-react";

const menu = [
  { name: "Overview", path: "/dashboard", icon: LayoutDashboard },
  { name: "My Posts", path: "/dashboard/posts", icon: FileText },
  { name: "My Gigs", path: "/dashboard/gigs", icon: Briefcase },
  { name: "Requests", path: "/dashboard/requests", icon: Send },
  { name: "Matches", path: "/dashboard/matches", icon: Users },
  { name: "Verification", path: "/dashboard/verification", icon: BadgeCheck },
  { name: "Notifications", path: "/dashboard/notifications", icon: Bell, badge: 3 },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-orange-500 p-2 rounded-lg"
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static
        top-0 left-0
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        ${collapsed ? "w-20" : "w-64"}
        min-h-screen
        bg-[#0f0f0f]
        border-r border-gray-800
        p-4
        transition-all duration-300
        z-40
        `}
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          {!collapsed && (
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent">
                Ally
              </span>
              <span className="text-white">Go</span>
            </h1>
          )}

          {/* Collapse Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white"
          >
            <Menu />
          </button>

        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">

          {menu.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-300 hover:bg-orange-500/20 hover:text-white"
                  }`
                }
              >

                {/* Icon */}
                <Icon className="w-5 h-5" />

                {/* Text */}
                {!collapsed && <span>{item.name}</span>}

                {/* Notification Badge */}
                {!collapsed && item.badge && (
                  <span className="ml-auto bg-orange-500 text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}

              </NavLink>
            );
          })}

        </nav>

      </div>
    </>
  );
}