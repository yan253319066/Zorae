import type {Metadata} from 'next';
import Script from 'next/script';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://www.zorae.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'zorae.ai | Premium AI Domain Name for Sale',
    template: '%s | zorae.ai',
  },
  description: 'Acquire zorae.ai, a premium 6-letter .ai domain. Perfect for next-generation artificial intelligence platforms, AI agents, SaaS startups, or robotics. Secure escrow transfer.',
  keywords: ['zorae', 'zorae.ai', 'premium .ai domain', 'buy ai domain', 'domain for sale', '6 letter domain', 'brandable ai name', 'startup domain name', 'ai domain marketplace'],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'zorae.ai - Premium AI Domain Name for Sale',
    description: 'The sunrise of intelligence. Acquire a premium, short, and highly memorable 6-letter AI brand identity.',
    type: 'website',
    url: siteUrl,
    siteName: 'zorae.ai',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'zorae.ai - Premium AI Domain Name for Sale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zorae.ai - Premium AI Domain Name for Sale',
    description: 'Acquire zorae.ai, a premium 6-letter .ai domain. Secure escrow transfer.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'zorae.ai',
      description: 'Premium AI Domain Name for Sale. Acquire zorae.ai, a short 6-letter .ai domain.',
      publisher: {
        '@type': 'Organization',
        name: 'zorae.ai',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Product',
      '@id': `${siteUrl}/#product`,
      url: siteUrl,
      name: 'zorae.ai',
      description: 'Premium 6-letter .ai domain name. Brandable, pronounceable, with excellent SEO authority and clean history.',
      category: 'Domain Names',
      brand: {
        '@type': 'Brand',
        name: 'zorae',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '0',
          priceCurrency: 'USD',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        businessFunction: 'https://schema.org/Sell',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is zorae.ai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'zorae.ai is a premium 6-letter .ai domain name available for acquisition. It is a short, brandable, pronounceable digital asset ideal for AI startups, agents, copilots, or any technology brand seeking a high-value online identity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should I buy a .ai domain instead of .com?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The .ai extension is the gold standard for artificial intelligence brands. Google treats it as a generic TLD with equal ranking weight to .com, while signalling technological relevance to investors, partners, and customers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the acquisition process work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Submit an offer through the acquisition portal on zorae.ai with your name, email, proposed amount, and vision. Once terms are agreed, the transfer is handled via a secure escrow service such as Escrow.com, Dan.com, or Sedo.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the domain transfer secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All transfers use trusted escrow providers to guarantee payment safety and immediate ownership transfer. Authorization codes are delivered securely, with registrar push or pull transfers completed in under 24 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I lease zorae.ai instead of buying outright?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Flexible capital structures are available including lease-to-own agreements up to 12 months and potential startup equity arrangements for vetted founders.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#050608] text-gray-100 font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </body>
    </html>
  );
}
