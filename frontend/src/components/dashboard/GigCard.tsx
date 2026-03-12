export default function GigCard() {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500 transition">

      <img
        src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
        alt="gig"
        className="h-40 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="text-lg font-semibold text-white">
          Build a React Website
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          Modern responsive website using React and Tailwind.
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-orange-500 font-bold">
            $50
          </span>

          <button className="bg-orange-500 px-3 py-1 rounded-md text-sm hover:bg-orange-600">
            View
          </button>

        </div>

      </div>

    </div>
  );
}