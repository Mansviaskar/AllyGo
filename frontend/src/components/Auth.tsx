'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthForms } from '../pages/auth.forms'
import { ThemeToggle } from '../contexts/theme-toggle'

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex flex-col">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-zinc-950 via-orange-500/5 to-zinc-950" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }} />
      </div>

      {/* Top Bar with Theme Toggle */}
      <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl sm:text-2xl text-orange-500 hover:opacity-80 transition-opacity">
          <span className="hidden sm:block text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent font-extrabold">
              Ally
            </span>
            <span className="text-white font-light">Go</span>
          </span>
        </Link>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <AuthForms mode={mode} onToggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
      </div>

      {/* Footer Info */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8 py-6 text-zinc-400 text-xs sm:text-sm border-t border-white/10">
        <Link to="/privacy" className="hover:text-zinc-300 transition-colors">
          Privacy Policy
        </Link>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <Link to="/terms" className="hover:text-zinc-300 transition-colors">
          Terms of Service
        </Link>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <Link to="/" className="hover:text-foreground/70 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
