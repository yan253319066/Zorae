'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import BentoGrid from './components/BentoGrid';
import BrandShowcase from './components/BrandShowcase';
import ChatbotSection from './components/ChatbotSection';
import AcquisitionDesk from './components/AcquisitionDesk';
import Footer from './components/Footer';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { useChat } from './hooks/useChat';
import { useOffer } from './hooks/useOffer';
import { useState } from 'react';

export default function Home() {
  const { containerRef, heroRef, bentoRef, chatbotRef } = useScrollAnimations();
  const {
    chatInput, setChatInput, messages, isTyping,
    handleSendMessage, appendAssistantMessage, setUserStartupIdea
  } = useChat();
  const {
    offerName, setOfferName, offerEmail, setOfferEmail,
    offerAmount, setOfferAmount, offerVision, setOfferVision,
    submittedOffer, setSubmittedOffer, submitError, submitting,
    localOffers, handleOfferSubmit, resetForm
  } = useOffer();

  const [activeBrandTab, setActiveBrandTab] = useState<string>('labs');

  const applyBrandingIdea = (ideaText: string) => {
    setUserStartupIdea(ideaText);
    handleSendMessage(undefined, `I am planning to launch ${ideaText}. Can you explain why zorae.ai is a perfect match and brainstorm brand angles for it?`);
    document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onOfferSubmit = async (e: React.FormEvent) => {
    const offer = await handleOfferSubmit(e);
    if (offer) {
      setTimeout(() => {
        appendAssistantMessage(
          `**Fantastic Offer Received!**\n\nI noticed you submitted an acquisition offer of **$${offer.amount.toLocaleString()} USD** for **zorae.ai**.\n\nYour contact email is **${offer.email}**. We will analyze this proposal and get back to you within 12 hours. Would you like to discuss any custom terms or share more about your branding goals for Zorae?`
        );
        document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }
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
          onAdvisorClick={() => document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </section>

      <ValueProposition />

      <section ref={bentoRef}>
        <BentoGrid />
      </section>

      <BrandShowcase
        activeBrandTab={activeBrandTab}
        onTabChange={setActiveBrandTab}
        onPitchIdea={applyBrandingIdea}
      />

      <section ref={chatbotRef}>
        <ChatbotSection
          messages={messages}
          isTyping={isTyping}
          chatInput={chatInput}
          onChatInputChange={setChatInput}
          onSendMessage={handleSendMessage}
          onPitchNiche={applyBrandingIdea}
        />
      </section>

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
