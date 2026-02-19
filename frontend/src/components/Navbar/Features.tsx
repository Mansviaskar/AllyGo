import { motion } from "framer-motion"
import {
  GraduationCap,
  Users,
  Star,
  Briefcase,
} from "lucide-react"

type Feature = {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
}

const features: Feature[] = [
  {
    icon: <GraduationCap size={32} />,
    title: "Free For Students",
    subtitle: "Always & forever",
    description:
      "Every tool, resource, and community feature is completely free for enrolled students.",
  },
  {
    icon: <Users size={32} />,
    title: "Peer Learning",
    subtitle: "Grow together",
    description:
      "Collaborate with thousands of students across disciplines and grow faster together.",
  },
  {
    icon: <Star size={32} />,
    title: "Mentor Network",
    subtitle: "Guided growth",
    description:
      "Connect with industry mentors and alumni who have walked your path.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "Career Ready",
    subtitle: "Land your dream job",
    description:
      "Resume reviews, interview prep, and exclusive job boards built for students.",
  },
]

export function Features() {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          

          <h4 className="text-4xl md:text-5xl font-extrabold mb-6">
            Everything You Need  <br></br>
          </h4>
            <span className="text-orange-500 md:text-2xl font-bold">One unified platform that brings learning, earning, and campus support together.</span>

          
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-orange-500/50"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all duration-300 mb-6">
                {feature.icon}
              </div>

              <span className="text-xs uppercase tracking-wider text-gray-500 group-hover:text-orange-500 transition">
                {feature.subtitle}
              </span>

              <h3 className="text-xl font-bold mt-2 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-1/3 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent group-hover:w-[90%] group-hover:left-[5%] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 mt-24 border border-white/10 rounded-xl overflow-hidden"
        >
          {[
            { value: "50K+", label: "Students Joined" },
            { value: "200+", label: "Mentors Available" },
            { value: "100%", label: "Free, Always" },
            { value: "40+", label: "Campus Partners" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-10 bg-white/5 border-r last:border-none border-white/10"
            >
              <div className="text-4xl font-extrabold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
