'use client';


import { brandMockups } from '../data';

interface BrandShowcaseProps {
  activeBrandTab: string;
  onTabChange: (id: string) => void;
}

export default function BrandShowcase({ activeBrandTab, onTabChange }: BrandShowcaseProps) {
  return (
    <section className="brand-section py-20 bg-black/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">Interactive Sandbox</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Brand Sandbox: Zorae in Action
            </h2>
            <p className="text-gray-400 max-w-2xl font-light">
              Toggle through mock brand directions to see how zorae.ai immediately adapts to different high-growth industries.
            </p>
          </div>

          <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-xl self-start lg:self-auto overflow-x-auto max-w-full">
            {brandMockups.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4.5 py-2.5 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all duration-200 whitespace-nowrap ${
                  activeBrandTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30 shadow-lg'
                    : 'text-gray-400 hover:text-white border border-transparent'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="brand-showcase-container glass-card rounded-3xl p-8 md:p-12 border-white/[0.05] relative overflow-hidden">
          {brandMockups.map((mockup) => {
            if (mockup.id !== activeBrandTab) return null;
            return (
              <div key={mockup.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className={`p-3 rounded-2xl bg-white/5 border ${mockup.accent}`}>
                      {mockup.icon}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-widest">{mockup.tagline}</span>
                      <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-1">{mockup.name}</h3>
                    </div>
                  </div>

                  <p className="text-xl text-gray-300 font-light italic leading-relaxed">
                    &ldquo;{mockup.slogan}&rdquo;
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {mockup.description}
                  </p>

                  <div className="pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Suggested Logo Aura</div>
                      <div className="text-xs text-white font-medium">Glassmorphism / Neon Wire</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Brand Archetype</div>
                      <div className="text-xs text-white font-medium">The Visionary / Creator</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Primary Colorways</div>
                      <div className="text-xs text-white font-medium">Deep Ash, Solar Violet, Ice Blue</div>
                    </div>
                  </div>


                </div>

                <div className="lg:col-span-5 aspect-square relative glass-card rounded-2xl border-white/[0.08] flex flex-col justify-between p-8 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${mockup.color} opacity-40`} />
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050608]/90" />

                  <div className="absolute top-[25%] left-[25%] w-1/2 h-1/2 rounded-full bg-cyan-400/5 blur-[50px] animate-pulse" />

                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider">SECURE LANDING PAGE</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  </div>

                  <div className="relative z-10 text-center py-10 space-y-4">
                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center shadow-xl backdrop-blur-md group-hover:rotate-6 transition-transform duration-500">
                      {mockup.icon}
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-2xl font-display font-bold text-white tracking-tight">
                        {mockup.id === 'labs' ? 'zorae_labs' : mockup.id === 'studio' ? 'zorae.studio' : 'zorae_ai'}
                      </h4>
                      <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">{mockup.tagline}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end relative z-10 text-[9px] font-mono text-gray-500">
                    <span>zorae.ai/dashboard</span>
                    <span>v1.0.4-COGNITIVE</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
