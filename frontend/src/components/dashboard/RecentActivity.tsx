const activities = [
  { text: "New request received", time: "2 min ago" },
  { text: "Gig matched with a client", time: "15 min ago" },
  { text: "Verification approved", time: "1 hour ago" },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold text-white mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-800 pb-2"
          >

            <span className="text-gray-300">
              {item.text}
            </span>

            <span className="text-gray-500 text-sm">
              {item.time}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}