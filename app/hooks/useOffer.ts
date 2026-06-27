'use client';

import { useState } from 'react';
import { Offer } from '../types';

export function useOffer() {
  const [offerName, setOfferName] = useState<string>('');
  const [offerEmail, setOfferEmail] = useState<string>('');
  const [offerAmount, setOfferAmount] = useState<string>('');
  const [offerVision, setOfferVision] = useState<string>('');
  const [submittedOffer, setSubmittedOffer] = useState<boolean>(false);
  const [localOffers, setLocalOffers] = useState<Offer[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('zorae_offers');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const handleOfferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerName || !offerEmail || !offerAmount) return;

    const newOffer: Offer = {
      id: Math.random().toString(36).substring(2, 9),
      name: offerName,
      email: offerEmail,
      amount: parseFloat(offerAmount),
      vision: offerVision,
      timestamp: new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'pending'
    };

    const updated = [newOffer, ...localOffers];
    setLocalOffers(updated);
    localStorage.setItem('zorae_offers', JSON.stringify(updated));

    setSubmittedOffer(true);
    setOfferName('');
    setOfferEmail('');
    setOfferAmount('');
    setOfferVision('');

    return newOffer;
  };

  return {
    offerName, setOfferName,
    offerEmail, setOfferEmail,
    offerAmount, setOfferAmount,
    offerVision, setOfferVision,
    submittedOffer, setSubmittedOffer,
    localOffers,
    handleOfferSubmit,
  };
}
