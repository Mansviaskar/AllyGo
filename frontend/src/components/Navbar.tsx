import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button"
import {ThemeToggle} from "../contexts/theme-toggle"
const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Internships", href: "/internships" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-5xl"
    >
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-4 py-3 rounded-full bg-zinc-700/40 backdrop-blur-md border border-zinc-800"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          {/* <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <span className="text-zinc-950 font-bold text-sm">A</span>
          </div> */}
          <span className="hidden sm:block text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent font-extrabold">
              Ally
            </span>
            <span className="text-white font-light">Go</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm text-zinc-300 hover:text-orange-500 transition-colors duration-200"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* buttons */}
        <div className="hidden md:flex items-center gap-4">
           <ThemeToggle />
          <button className="px-4 py-2 text-sm text-zinc-400 border border-zinc-700 rounded-full hover:text-white hover:bg-zinc-800 transition">
            <a href="/auth">Sign In</a>
          </button>

          <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
            <a href="/auth">Get Started</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-zinc-800"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-zinc-400 hover:text-orange-400 hover:bg-zinc-800 rounded-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-zinc-800 my-2" />
            <button className="w-full text-left px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition">
              <a href="/AllyGo/auth">Sign In</a>
            </button>
            <button className="px-4 py-2 text-sm bg-orange-400 text-white rounded-full hover:bg-orange-600 transition">
              <a href="/AllyGo/auth">Get Started</a>
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
