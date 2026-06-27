'use client';

import { Check, Clock, Coins, DollarSign, ShieldCheck } from 'lucide-react';
import { Offer } from '../types';

interface AcquisitionDeskProps {
  offerName: string;
  offerEmail: string;
  offerAmount: string;
  offerVision: string;
  submittedOffer: boolean;
  localOffers: Offer[];
  onNameChange: (v: string) => void;
  onEmailChange: (v: string) => void;
  onAmountChange: (v: string) => void;
  onVisionChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

export default function AcquisitionDesk({
  offerName, offerEmail, offerAmount, offerVision,
  submittedOffer, localOffers,
  onNameChange, onEmailChange, onAmountChange, onVisionChange,
  onSubmit, onReset
}: AcquisitionDeskProps) {
  return (
    <section id="offer-desk" className="acq-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <div className="acq-left lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">Acquisition Process</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white">
              Submit an <br />
              Acquisition Offer
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              We accommodate serious offers and secure transactional frameworks. The acquisition of **zorae.ai** is designed to be frictionless, safe, and immediate.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">100% Escrow Protection</h4>
                <p className="text-xs text-gray-500 leading-relaxed">We utilize premier escrow service providers (such as Escrow.com, Dan.com, or Sedo) to guarantee payment safety and immediate ownership transfer.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">24-Hour Ownership Transfer</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Once terms are approved, authorization codes (AuthCode) are delivered securely, facilitating registrar push or pull transfers in less than 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Coins className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Flexible Capital Structures</h4>
                <p className="text-xs text-gray-500 leading-relaxed">We entertain direct purchases, secure leasing-to-own agreements (up to 12 months), and potential startup equity structures for vetted founders.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-semibold block w-full mb-1">Supported Escrow Platforms</span>
            <span className="px-3.5 py-1.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">Escrow.com</span>
            <span className="px-3.5 py-1.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">Dan.com</span>
            <span className="px-3.5 py-1.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">Sedo.com</span>
            <span className="px-3.5 py-1.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">Namecheap Push</span>
          </div>
        </div>

        <div className="acq-right lg:col-span-7 flex flex-col justify-between glass-card border border-white/10 rounded-3xl p-8 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />

          <div className="space-y-6">
            <div className="border-b border-white/5 pb-4 flex justify-between items-center">
              <div className="space-y-0.5">
                <h3 className="text-xl font-display font-bold text-white">Acquisition Portal</h3>
                <p className="text-[11px] font-mono text-gray-400">Secure Domain Tender for zorae.ai</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Open for bids
              </span>
            </div>

            {submittedOffer ? (
              <div className="space-y-6 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-display font-bold text-white">Inquiry Successfully Lodged</h4>
                  <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you! Your acquisition proposal has been signed into our database. We have triggered an automatic appraisal and will reach out to you within 12 hours.
                  </p>
                </div>
                <button
                  onClick={onReset}
                  className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-mono text-gray-300 transition-all"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Contact Name *</label>
                    <input type="text" required value={offerName}
                      onChange={(e) => onNameChange(e.target.value)}
                      placeholder="e.g., Jennifer Wu"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Business Email *</label>
                    <input type="email" required value={offerEmail}
                      onChange={(e) => onEmailChange(e.target.value)}
                      placeholder="e.g., j.wu@labs.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Proposed Offer Amount (USD) *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                    </div>
                    <input type="number" required min="500" value={offerAmount}
                      onChange={(e) => onAmountChange(e.target.value)}
                      placeholder="e.g., 8500"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all font-mono font-bold" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 block">Recommended premium starting range: $5,000 - $15,000 USD.</span>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Branding Vision / Startup Concept (Optional)</label>
                  <textarea value={offerVision}
                    onChange={(e) => onVisionChange(e.target.value)}
                    rows={3}
                    placeholder="Share a brief concept of what you are building. This helps us customize our evaluation and speed up response times."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all font-sans leading-relaxed resize-none" />
                </div>

                <button type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 shadow-lg shadow-cyan-500/10 cursor-pointer transition-all duration-200">
                  <Coins className="w-4 h-4" />
                  Submit Secure Proposal
                </button>
              </form>
            )}
          </div>

          {localOffers.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
              <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                Your Pending Bid Inquiries ({localOffers.length}):
              </h4>
              <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2">
                {localOffers.map((offer) => (
                  <div key={offer.id} className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">zorae.ai</div>
                      <div className="text-[10px] text-gray-500 font-mono mt-0.5">{offer.timestamp}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold font-mono">${offer.amount.toLocaleString()}</div>
                      <span className="text-[9px] font-mono text-amber-400 bg-amber-400/5 border border-amber-400/20 px-2 py-0.5 rounded-full inline-block mt-0.5 uppercase">Reviewing</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
