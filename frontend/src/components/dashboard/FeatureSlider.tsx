import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: "🔍",
    title: "See Readiness Clearly",
    desc: "Gain a real-time view of workforce capability so leaders know where skills stand today and where to focus next.",
  },
  {
    icon: "⏱",
    title: "Build Skills Faster",
    desc: "Develop critical skills at the pace of change so teams can confidently deliver as work and priorities change.",
  },
  {
    icon: "✨",
    title: "Put Skills To Work",
    desc: "Align people and AI to the highest impact work based on verified skills rather than assumptions.",
  },
  {
    icon: "📊",
    title: "Prove Impact",
    desc: "Connect skills investment to outcomes leaders can see, trust, and act on.",
  },
  {
    icon: "📚",
    title: "Find Academic Help",
    desc: "Connect with peers who can help you with coding, assignments, and exam preparation.",
  },
  {
    icon: "💼",
    title: "Earn Through Skills",
    desc: "Offer your skills like design, coding, or writing and earn by completing student gigs.",
  },
  {
    icon: "🤝",
    title: "Collaborate With Students",
    desc: "Find study partners and collaborate on projects, hackathons, and learning tasks.",
  },
];

export default function FeatureSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < cards.length - 4) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full">

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          When Students Collaborate, Opportunities Grow
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mt-2">
          AllyGo helps students learn together, earn through skills,
          and discover trusted campus services — all in one platform.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-10 flex items-center">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="mr-3 bg-[#111] border border-gray-700 p-2 rounded-full hover:border-orange-500"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden flex-1">

          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 25}%)`,
            }}
          >

            {cards.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 basis-[calc((100%-72px)/4)]"
              >
                <div className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 hover:scale-105 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">
                    {card.icon}
                  </div>

                  <h3 className="text-orange-500 font-semibold mb-2">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {card.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="ml-3 bg-[#111] border border-gray-700 p-2 rounded-full hover:border-orange-500"
        >
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
}