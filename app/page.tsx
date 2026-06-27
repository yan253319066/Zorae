'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import BentoGrid from './components/BentoGrid';
import BrandShowcase from './components/BrandShowcase';
import AcquisitionDesk from './components/AcquisitionDesk';
import Footer from './components/Footer';
import { useState } from 'react';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { useOffer } from './hooks/useOffer';

export default function Home() {
  const { containerRef, heroRef, bentoRef } = useScrollAnimations();
  const {
    offerName, setOfferName, offerEmail, setOfferEmail,
    offerAmount, setOfferAmount, offerVision, setOfferVision,
    submittedOffer, setSubmittedOffer, submitError, submitting,
    localOffers, handleOfferSubmit, resetForm
  } = useOffer();

  const [activeBrandTab, setActiveBrandTab] = useState<string>('labs');

  const onOfferSubmit = async (e: React.FormEvent) => {
    await handleOfferSubmit(e);
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden relative min-h-screen cyber-grid bg-brand-bg text-gray-100">
      <div className="scroll-progress fixed top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[100] shadow-[0_0_12px_rgba(0,242,254,0.5)]" />
      <div className="spotlight-cursor fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2 hidden md:block" />

      <div className="orb-1 absolute top-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="orb-2 absolute top-[40%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="orb-3 absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <Header />

      <section ref={heroRef}>
        <HeroSection
          onAcquireClick={() => document.getElementById('offer-desk')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </section>

      <ValueProposition />

      <section ref={bentoRef}>
        <BentoGrid />
      </section>

      <BrandShowcase
        activeBrandTab={activeBrandTab}
        onTabChange={setActiveBrandTab}
      />

      <AcquisitionDesk
        offerName={offerName}
        offerEmail={offerEmail}
        offerAmount={offerAmount}
        offerVision={offerVision}
        submittedOffer={submittedOffer}
        submitError={submitError}
        submitting={submitting}
        localOffers={localOffers}
        onNameChange={setOfferName}
        onEmailChange={setOfferEmail}
        onAmountChange={setOfferAmount}
        onVisionChange={setOfferVision}
        onSubmit={onOfferSubmit}
        onReset={resetForm}
      />

      <Footer />
    </div>
  );
}
