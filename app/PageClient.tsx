'use client';

import { useState } from 'react';
import { useOffer } from './hooks/useOffer';
import BrandShowcase from './components/BrandShowcase';
import AcquisitionDesk from './components/AcquisitionDesk';

export default function PageClient() {
  const [activeBrandTab, setActiveBrandTab] = useState<string>('labs');
  const {
    offerName, setOfferName, offerEmail, setOfferEmail,
    offerAmount, setOfferAmount, offerVision, setOfferVision,
    submittedOffer, submitError, submitting,
    localOffers, handleOfferSubmit, resetForm,
  } = useOffer();

  const onOfferSubmit = async (e: React.FormEvent) => {
    await handleOfferSubmit(e);
  };

  return (
    <>
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
    </>
  );
}
