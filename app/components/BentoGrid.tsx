import { Check, Globe, Star, TrendingUp } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="bento-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bento-header text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">Why .AI Domains?</span>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white">
          The Digital Gold Rush
        </h2>
        <p className="text-gray-400 font-light">
          In the artificial intelligence paradigm, a .com is yesterday&apos;s news. Today, <code className="font-mono text-xs text-white bg-white/5 px-1.5 py-0.5 rounded">.AI</code> is the unquestioned signifier of prestige, authority, and high-frequency innovation.
        </p>
      </div>

      <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative md:col-span-2 overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="space-y-4 mb-8">
            <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-2xl w-fit">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">Finite Character Scarcity</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              There are only a mathematically limited number of pronounceable 6-letter domains. As venture funding pours into AI platforms, short brandable assets have become the ultimate bottleneck. Purchasing zorae.ai secures your brand authority before competitive startups lock you out of your identity.
            </p>
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>Domain Availability Rate</span>
            <span className="text-cyan-400 font-semibold">&lt; 0.01% for 6-Letters</span>
          </div>
        </div>

        <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-purple-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="space-y-4 mb-8">
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl w-fit">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">Global SEO Treatment</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Google officially treats the `.ai` extension as a Generic Top-Level Domain (gTLD) for global search indexing, meaning it ranks identically to `.com` in worldwide search results while indicating premium technological relevance.
            </p>
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>Google SEO Compatibility</span>
            <span className="text-purple-400 font-semibold">100% Native</span>
          </div>
        </div>

        <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-blue-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="space-y-4 mb-8">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl w-fit">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-300 transition-colors">Immediate Credibility</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Secure immediate credibility with top-tier VCs, tech partners, and prospective talent. A world-class name conveys that you are well-capitalized, professional, and serious about market leadership from day one.
            </p>
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>Investor Recognition Rate</span>
            <span className="text-blue-400 font-semibold">Premium tier</span>
          </div>
        </div>

        <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative md:col-span-2 overflow-hidden flex flex-col justify-between group">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="space-y-4 mb-8">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl w-fit">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">Perfect Synergy with Modern Tech Trends</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Whether you build spatial computing applications, autonomous LLM agents, cloud services, robotic control libraries, or generative video editors, the prefix &ldquo;Zorae&rdquo; carries a futuristic, airy, yet trustworthy connotation. It expands easily into &ldquo;Zorae Labs&rdquo;, &ldquo;Zorae Systems&rdquo;, &ldquo;Zorae Studio&rdquo;, or &ldquo;Zorae Tech&rdquo;.
            </p>
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>Adaptability Rating</span>
            <span className="text-emerald-400 font-semibold">9.8 / 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}
