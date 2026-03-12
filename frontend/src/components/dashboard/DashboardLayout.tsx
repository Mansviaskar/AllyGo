import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout() {

  const location = useLocation();

  return (
    <div className="flex bg-[#0f0f0f] text-white h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar />

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8">

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}