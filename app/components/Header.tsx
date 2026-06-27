'use client';

import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030406]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity"
          >
            zorae<span className="text-gradient-cyan-purple font-black">.ai</span>
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
            <span>Available for Acquisition</span>
          </div>

          <button
            onClick={() => document.getElementById('offer-desk')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center text-xs font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            Submit Offer
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
