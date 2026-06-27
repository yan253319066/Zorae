export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 py-12 relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-lg font-display font-bold text-white tracking-wider">
          zorae<span className="text-gradient-cyan-purple font-black">.ai</span>
        </div>
        <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
          This landing page is a premium property showcase. The domain name zorae.ai is currently active and open for secure transactional transfer under safe escrow regulations.
        </p>
        <div className="text-[10px] font-mono text-gray-600 pt-4">
          &copy; {new Date().getFullYear()} Zorae.ai Domain Portfolio. All Rights Reserved. Managed under Secure Escrow Protocols.
        </div>
      </div>
    </footer>
  );
}
