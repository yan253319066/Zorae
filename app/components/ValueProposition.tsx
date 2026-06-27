export default function ValueProposition() {
  return (
    <section className="py-20 bg-black/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">Concept & Identity</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
            The Semantics of <br />
            <span className="text-gradient-cyan-purple font-extrabold">Zorae</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
            Choosing a domain is not merely acquiring real estate; it is embedding a primary narrative.
            <span className="text-white font-medium"> Zorae</span> marries linguistic elegance with technological readiness.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-mono">01</span>
              <div>
                <h4 className="text-white font-semibold">The Zora Prefix</h4>
                <p className="text-sm text-gray-400">Derived from dawn or astronomical twilight. It signals birth, emergence, or the arrival of a highly capable new intelligence paradigm.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-mono">02</span>
              <div>
                <h4 className="text-white font-semibold">The Liquid Trailing &ldquo;E&rdquo;</h4>
                <p className="text-sm text-gray-400">Softens pronunciation, making the word fluid and memorable. Fits perfectly alongside high-recall assistants like Alexa, Siri, or Claude.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-mono">03</span>
              <div>
                <h4 className="text-white font-semibold">Native AI Synthesis</h4>
                <p className="text-sm text-gray-400">By pairing directly with the .AI extension, the name reads smoothly as a single fluid string: Zorae AI.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden glass-card border border-white/10 flex flex-col justify-center items-center p-8 text-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-700" />

          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[60px] absolute animate-pulse" />

          <div className="relative space-y-4 z-10">
            <div className="font-mono text-[11px] text-cyan-300 tracking-[0.2em] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
              Sound Assessment
            </div>
            <div className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-wide">
              /ˈzɔːr.eɪ/
            </div>
            <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
              &ldquo;Zohr-ay&rdquo; &mdash; Two syllables. High phonological power. Highly comfortable for native English, European, and Asian speakers alike.
            </p>

            <div className="pt-6 border-t border-white/5 flex justify-center space-x-8 text-xs font-mono text-gray-500">
              <div>
                <div className="text-white font-semibold">6 Letters</div>
                <div>Length</div>
              </div>
              <div>
                <div className="text-white font-semibold">C-V-C-V-V</div>
                <div>Structure</div>
              </div>
              <div>
                <div className="text-white font-semibold">10/10</div>
                <div>Recall</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
