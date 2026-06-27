'use client';

import { ArrowRight, Coins, MessageSquare, Sparkles } from 'lucide-react';
import { domainStats } from '../data';

interface HeroSectionProps {
  onAcquireClick: () => void;
  onAdvisorClick: () => void;
}

export default function HeroSection({ onAcquireClick, onAdvisorClick }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="hero-badge inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs text-cyan-300 font-mono mb-8 backdrop-blur-sm">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span>Premium Digital Property</span>
      </div>

      <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.05] max-w-5xl mb-8">
        The Sunrise of Intelligence <br />
        <span className="text-gradient-cyan-purple font-black tracking-tight drop-shadow-lg drop-shadow-cyan-500/30">
          zorae.ai
        </span>
      </h1>

      <p className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mb-12 font-sans font-light leading-relaxed">
        Acquire a highly brandable, liquid 6-letter digital asset. Dual-syllable elegance paired with the gold-standard <span className="text-white font-medium font-mono">.AI</span> extension, purpose-crafted for next-generation systems, AI copilots, or modern tech brands.
      </p>

      <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-20">
        <button
          onClick={onAcquireClick}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
        >
          <Coins className="w-5 h-5" />
          Acquire Domain
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={onAdvisorClick}
          className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-gray-300 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white border border-white/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 text-purple-400" />
          Talk to AI Advisor
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full">
        {domainStats.map((stat, idx) => (
          <div
            key={idx}
            className="hero-stat-card glass-card rounded-2xl p-5 text-left flex flex-col justify-between border-white/[0.04] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-12 h-12 bg-white/[0.01] rounded-bl-full group-hover:bg-cyan-500/[0.02] transition-colors" />
            <div className="mb-4 flex items-center justify-between">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                {stat.icon}
              </span>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">#0{idx + 1}</span>
            </div>
            <div>
              <h4 className="text-[11px] font-mono text-gray-500 font-bold uppercase tracking-wider mb-1">{stat.label}</h4>
              <div className="text-white text-lg font-display font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{stat.value}</div>
              <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
