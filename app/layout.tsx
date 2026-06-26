import type {Metadata} from 'next';
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

export const metadata: Metadata = {
  title: 'zorae.ai | Premium AI Domain Name for Sale',
  description: 'Acquire zorae.ai, a premium 6-letter .ai domain. Perfect for next-generation artificial intelligence platforms, AI agents, SaaS startups, or robotics. Secure escrow transfer.',
  keywords: 'zorae, zorae.ai, premium .ai domain, buy ai domain, domain for sale, 6 letter domain, brandable ai name, startup domain name',
  openGraph: {
    title: 'zorae.ai - Premium AI Domain Name for Sale',
    description: 'The sunrise of intelligence. Acquire a premium, short, and highly memorable 6-letter AI brand identity.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#050608] text-gray-100 font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
