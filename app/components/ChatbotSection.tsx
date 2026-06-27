'use client';

import { ArrowRight, Loader2, Send } from 'lucide-react';
import { Message } from '../types';

interface ChatbotSectionProps {
  messages: Message[];
  isTyping: boolean;
  chatInput: string;
  onChatInputChange: (value: string) => void;
  onSendMessage: (e?: React.FormEvent) => void;
  onPitchNiche: (text: string) => void;
}

export default function ChatbotSection({
  messages, isTyping, chatInput,
  onChatInputChange, onSendMessage, onPitchNiche
}: ChatbotSectionProps) {
  return (
    <section id="ai-advisor" className="chat-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="chat-section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">Interactive Evaluation</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-none">
              AI Brand <br />
              Advisor
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Unlock the cognitive value of Zorae.ai. Our bespoke Gemini-powered advisor lives to consult your vision. Ask questions, simulate valuations, or let it pitch the perfect brand angle based on your startup&apos;s core mechanics.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Or, click to pitch a niche:</h4>
            <div className="space-y-2">
              <button onClick={() => onPitchNiche('An AI real estate valuation assistant')}
                className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 text-xs text-gray-300 transition-all flex items-center justify-between group">
                <span>Real Estate AI Copilot</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
              </button>
              <button onClick={() => onPitchNiche('A smart biomedical research engine')}
                className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 text-xs text-gray-300 transition-all flex items-center justify-between group">
                <span>Intelligent Bio-Med SaaS</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
              </button>
              <button onClick={() => onPitchNiche('A high-frequency algorithmic quant fund')}
                className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 text-xs text-gray-300 transition-all flex items-center justify-between group">
                <span>AI Quantitative Trading</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-xs font-mono text-gray-500">
            Powered by Gemini 3.5 Flash
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col glass-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px]">
          <div className="bg-black/40 border-b border-white/5 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-white tracking-widest uppercase font-bold">COGNITIVE BRAND SIMULATOR</span>
            </div>
            <span className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-1 rounded">
              zorae.ai // advisor_v1.2
            </span>
          </div>

          <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[400px] flex flex-col justify-start">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-3 max-w-[85%] ${
                  msg.role === 'user' ? 'self-end flex-row-reverse space-x-reverse' : 'self-start'
                }`}
              >
                <div className={`p-2 rounded-xl border ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-white'
                    : 'bg-white/5 border-white/10 text-gray-300'
                }`}>
                  <span className={`text-xs font-mono font-bold uppercase ${
                    msg.role === 'user' ? 'text-cyan-400' : 'text-purple-400'
                  }`}>
                    {msg.role === 'user' ? 'You' : 'Advisor'}
                  </span>
                  <div className="text-xs mt-1 leading-relaxed font-sans font-light whitespace-pre-line">
                    {msg.content.split('**').map((part, i) => (
                      i % 2 === 1 ? <strong key={i} className="font-bold text-white">{part}</strong> : part
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl w-fit">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Advisor is analyzing your startup blueprint...</span>
              </div>
            )}
          </div>

          <form onSubmit={onSendMessage} className="bg-black/50 border-t border-white/5 p-4 flex gap-3">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => onChatInputChange(e.target.value)}
              placeholder="Enter your startup idea or domain query..."
              className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 transition-all font-sans"
            />
            <button
              type="submit"
              disabled={isTyping || !chatInput.trim()}
              className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
