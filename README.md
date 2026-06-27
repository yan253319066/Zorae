<div align="center">
  <h1>
    <span>zorae</span><span style="color: #67e8f9">.ai</span>
  </h1>
  <p><strong>Premium AI Domain — Interactive Portfolio &amp; Valuation Portal</strong></p>
  <p>6 letters · Dual-syllable elegance · Gold‑standard <code>.AI</code> extension</p>
</div>

---

## About

An immersive landing page and acquisition portal for the premium domain **zorae.ai**. Features cinematic scroll animations, an AI-powered brand advisor chatbot (powered by Google Gemini), an interactive brand sandbox, and a secure offer submission desk.

Visit the live site at [zorae.ai](https://zorae.ai).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animation | [GSAP](https://gsap.com) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) |
| AI | [Google Gemini](https://ai.google.dev) (`@google/genai`) |
| Icons | [Lucide React](https://lucide.dev) |

## Getting Started

### Prerequisites

- **Node.js** 18+ (pnpm recommended)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY="your_gemini_api_key"
```

Get your API key from [aistudio.google.com](https://aistudio.google.com/apikey).

### Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Domain Value Dashboard** — Key metrics (length, SEO, pronunciation, etc.) with floating card animations
- **Brand Sandbox** — Toggle between mock brand identities (Zorae Labs / Zorae Studio / Zorae AI)
- **AI Brand Advisor** — Interactive Gemini-powered chatbot that pitches creative brand angles
- **Acquisition Portal** — Secure offer submission with escrow & payment flexibility
- **Cinematic UX** — GSAP scroll-triggered parallax, spotlight cursor, and gradient orbs

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm clean` | Clean Next.js cache |
