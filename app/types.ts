import { ReactNode } from 'react';

export interface BrandMockup {
  id: string;
  name: string;
  slogan: string;
  tagline: string;
  description: string;
  color: string;
  accent: string;
  icon: ReactNode;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Offer {
  id: string;
  name: string;
  email: string;
  amount: number;
  vision: string;
  timestamp: string;
  status: 'pending' | 'received';
}
