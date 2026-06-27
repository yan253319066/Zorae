'use client';

import { useState } from 'react';
import { Offer } from '../types';

const API_ENDPOINT = '/api/offers';

function loadLocalOffers(): Offer[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem('zorae_offers');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveLocalOffers(offers: Offer[]) {
  try {
    window.localStorage.setItem('zorae_offers', JSON.stringify(offers));
  } catch {
    // quota exceeded — silently ignore
  }
}

export function useOffer() {
  const [offerName, setOfferName] = useState<string>('');
  const [offerEmail, setOfferEmail] = useState<string>('');
  const [offerAmount, setOfferAmount] = useState<string>('');
  const [offerVision, setOfferVision] = useState<string>('');
  const [submittedOffer, setSubmittedOffer] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [localOffers, setLocalOffers] = useState<Offer[]>(loadLocalOffers);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleOfferSubmit = async (e: React.FormEvent): Promise<Offer | undefined> => {
    e.preventDefault();
    if (!offerName || !offerEmail || !offerAmount) return;

    setSubmitting(true);
    setSubmitError(null);

    const amount = parseFloat(offerAmount);
    let savedOffer: Offer | null = null;

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: offerName,
          email: offerEmail,
          amount,
          vision: offerVision,
        }),
      });

      if (!res.ok) {
        let detail = `Server error: ${res.status}`;
        try {
          const errBody = await res.json();
          if (errBody?.error) detail = errBody.error;
        } catch {}
        throw new Error(detail);
      }

      savedOffer = await res.json();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const isNetworkErr = message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('network');
      console.warn('D1 submit failed, falling back to localStorage', err);
      setSubmitError(
        isNetworkErr
          ? 'Server unreachable — saved locally. Will sync when online.'
          : `${message} — saved locally. Will sync when online.`,
      );

      savedOffer = {
        id: Math.random().toString(36).substring(2, 9),
        name: offerName,
        email: offerEmail,
        amount,
        vision: offerVision,
        timestamp: new Date().toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'pending',
      };
    }

    if (savedOffer) {
      const updated = [savedOffer, ...localOffers];
      setLocalOffers(updated);
      saveLocalOffers(updated);
    }

    setSubmittedOffer(true);
    setSubmitting(false);
    setOfferName('');
    setOfferEmail('');
    setOfferAmount('');
    setOfferVision('');

    return savedOffer ?? undefined;
  };

  const resetForm = () => {
    setSubmittedOffer(false);
    setSubmitError(null);
  };

  return {
    offerName, setOfferName,
    offerEmail, setOfferEmail,
    offerAmount, setOfferAmount,
    offerVision, setOfferVision,
    submittedOffer, setSubmittedOffer,
    submitError,
    submitting,
    localOffers,
    handleOfferSubmit,
    resetForm,
  };
}
