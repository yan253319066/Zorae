'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  DollarSign, 
  Cpu, 
  Check, 
  MessageSquare, 
  Send, 
  Zap, 
  TrendingUp, 
  Compass, 
  Globe, 
  Coins, 
  Star, 
  Loader2,
  Clock,
  Layers
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Interfaces
interface BrandMockup {
  id: string;
  name: string;
  slogan: string;
  tagline: string;
  description: string;
  color: string;
  accent: string;
  icon: React.ReactNode;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Offer {
  id: string;
  name: string;
  email: string;
  amount: number;
  vision: string;
  timestamp: string;
  status: 'pending' | 'received';
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const chatbotRef = useRef<HTMLDivElement>(null);

  // States
  const [activeBrandTab, setActiveBrandTab] = useState<string>('labs');
  const [chatInput, setChatInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am the **Zorae AI Brand Advisor**. I can help you evaluate the potential of the **zorae.ai** domain. Tell me about your startup idea, and I will show you how Zorae.ai can elevate your brand!"
    }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userStartupIdea, setUserStartupIdea] = useState<string>('');

  // Offer states
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

  // Domain Valuation Data
  const domainStats = [
    { label: "Domain Length", value: "6 Letters", icon: <Layers className="w-5 h-5 text-cyan-400" />, desc: "Short, premium, high recall" },
    { label: "Extension", value: ".AI", icon: <Cpu className="w-5 h-5 text-purple-400" />, desc: "Gold standard for artificial intelligence" },
    { label: "Pronounceability", value: "Perfect", icon: <Globe className="w-5 h-5 text-emerald-400" />, desc: "Liquid, global dual-syllable sound" },
    { label: "Keyword Value", value: "Brandable", icon: <Sparkles className="w-5 h-5 text-yellow-400" />, desc: "No generic dictionary limitations" },
    { label: "SEO Authority", value: "Excellent", icon: <TrendingUp className="w-5 h-5 text-blue-400" />, desc: "Clean history, easy to index" },
    { label: "Acquisition Safety", value: "100% Secure", icon: <ShieldCheck className="w-5 h-5 text-pink-400" />, desc: "Safe Escrow contract transfer" },
  ];

  // Brand Mockups
  const brandMockups: BrandMockup[] = [
    {
      id: 'labs',
      name: 'Zorae Labs',
      slogan: 'Orchestrating the Next Era of Cognitive Systems',
      tagline: 'Enterprise AI Agent Frameworks',
      description: 'A cutting-edge developer platform for deploying multi-agent AI networks. Zorae Labs empowers enterprise teams to automate complex cognitive workflows with military-grade safety parameters.',
      color: 'from-cyan-500/10 to-blue-500/5',
      accent: 'text-cyan-400 border-cyan-500/30',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />
    },
    {
      id: 'studio',
      name: 'Zorae Studio',
      slogan: 'Your Canvas. Amplified by Infinite Creativity.',
      tagline: 'Generative Spatial & Media Suite',
      description: 'The creative standard for spatial computing. Generate immersive 3D architectures, orchestral audio scores, and Hollywood-level visual narrative sequences with zero-latency multimodal generation.',
      color: 'from-purple-500/10 to-pink-500/5',
      accent: 'text-purple-400 border-purple-500/30',
      icon: <Sparkles className="w-8 h-8 text-purple-400" />
    },
    {
      id: 'companion',
      name: 'Zorae AI',
      slogan: 'The Dawn of Intelligent Personal Companionship',
      tagline: 'Context-Aware AI Assistant & Copilot',
      description: 'The personal operating system for your professional and private life. Deeply integrated with calendar, workflows, and spatial devices to deliver proactive, secure executive support in real time.',
      color: 'from-emerald-500/10 to-teal-500/5',
      accent: 'text-emerald-400 border-emerald-500/30',
      icon: <Compass className="w-8 h-8 text-emerald-400" />
    }
  ];

  // Prevent jumping to hash on refresh by clearing URL hash on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
      }
    }
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // 1. Scroll Indicator Progress Bar
      gsap.to('.scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      // 2. Interactive Spotlight Follower
      const spotlight = document.querySelector('.spotlight-cursor');
      if (spotlight) {
        window.addEventListener('mousemove', (e) => {
          gsap.to(spotlight, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
            ease: 'power3.out'
          });
        });
      }

      // 3. Scroll-Linked Parallax on Background Orbs
      gsap.to('.orb-1', {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
      gsap.to('.orb-2', {
        yPercent: -45,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
      gsap.to('.orb-3', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      // 4. Hero Reveal Animations
      const tl = gsap.timeline();
      tl.fromTo('.hero-badge', 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
      )
      .fromTo('.hero-title', 
        { opacity: 0, y: 30, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power4.out' },
        '-=0.6'
      )
      .fromTo('.hero-subtitle', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo('.hero-ctas', 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-stat-card', 
        { opacity: 0, scale: 0.9, y: 30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
        '-=0.5'
      )
      .then(() => {
        // 5. Weightless Floating Motion on Hero Cards
        gsap.to('.hero-stat-card', {
          y: 'random(-8, 8)',
          rotation: 'random(-1.5, 1.5)',
          duration: 'random(4, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            amount: 1.2,
            from: 'random'
          }
        });
      });

      // 2. Bento Grid Scroll Animations
      gsap.fromTo('.bento-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.bento-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.bento-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Brand Showcase Animations
      gsap.fromTo('.brand-showcase-container',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.brand-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Chat Console Section Animations
      gsap.fromTo('.chat-section-container',
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.chat-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 5. Acquisition / Trust Desk Section Animations
      gsap.fromTo('.acq-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.acq-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.acq-right',
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.acq-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle send message in chatbot
  const handleSendMessage = async (e?: React.FormEvent, directIdea?: string) => {
    if (e) e.preventDefault();
    
    const query = directIdea ? directIdea : chatInput;
    if (!query.trim()) return;

    const userMsg: Message = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          userIdea: directIdea || userStartupIdea
        }),
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Error: ${data.error}`
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.text
        }]);
      }
    } catch (err: any) {
      console.error(err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Connection failed. Please ensure the server is responsive and try again."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Submit Offer
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
    // Reset Form
    setOfferName('');
    setOfferEmail('');
    setOfferAmount('');
    setOfferVision('');

    // Trigger AI message welcoming their offer
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `**Fantastic Offer Received!**\n\nI noticed you submitted an acquisition offer of **$${parseFloat(offerAmount).toLocaleString()} USD** for **zorae.ai**.\n\nYour contact email is **${offerEmail}**. We will analyze this proposal and get back to you within 12 hours. Would you like to discuss any custom terms or share more about your branding goals for Zorae?`
      }]);
      // Smooth scroll to chat console so they can talk about their offer
      document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  // Prepopulate branding chatbot with predefined ideas
  const applyBrandingIdea = (ideaText: string) => {
    setUserStartupIdea(ideaText);
    handleSendMessage(undefined, `I am planning to launch ${ideaText}. Can you explain why zorae.ai is a perfect match and brainstorm brand angles for it?`);
    document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden relative min-h-screen cyber-grid bg-brand-bg text-gray-100">
      
      {/* GSAP Scroll Indicator Progress Bar */}
      <div className="scroll-progress fixed top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[100] shadow-[0_0_12px_rgba(0,242,254,0.5)]" />

      {/* GSAP Spotlight Cursor Follower */}
      <div className="spotlight-cursor fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2 hidden md:block" />

      {/* Dynamic Background Blur Accents with GSAP Parallax Targeting */}
      <div className="orb-1 absolute top-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="orb-2 absolute top-[40%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="orb-3 absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030406]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity"
            >
              zorae<span className="text-gradient-cyan-purple font-black">.ai</span>
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
              <span>Available for Acquisition</span>
            </div>
            
            <button 
              onClick={() => document.getElementById('offer-desk')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center text-xs font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-cyan-500/20 cursor-pointer"
              id="btn-nav-offer"
            >
              Submit Offer
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative pt-28 pb-24 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Glow Badge */}
        <div className="hero-badge inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs text-cyan-300 font-mono mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>Premium Digital Property</span>
        </div>

        {/* Large Cinematic Title */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.05] max-w-5xl mb-8">
          The Sunrise of Intelligence <br />
          <span className="text-gradient-cyan-purple font-black tracking-tight drop-shadow-lg drop-shadow-cyan-500/30">
            zorae.ai
          </span>
        </h1>

        {/* Captivating Subhead */}
        <p className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mb-12 font-sans font-light leading-relaxed">
          Acquire a highly brandable, liquid 6-letter digital asset. Dual-syllable elegance paired with the gold-standard <span className="text-white font-medium font-mono">.AI</span> extension, purpose-crafted for next-generation systems, AI copilots, or modern tech brands.
        </p>

        {/* Quick Action CTAs */}
         <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-20">
          <button
            onClick={() => document.getElementById('offer-desk')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <Coins className="w-5 h-5" />
            Acquire Domain
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('ai-advisor')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-gray-300 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white border border-white/10 active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-purple-400" />
            Talk to AI Advisor
          </button>
        </div>

        {/* Key Domain Performance Parameters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full">
          {domainStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="hero-stat-card glass-card rounded-2xl p-5 text-left flex flex-col justify-between border-white/[0.04] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-white/[0.01] rounded-bl-full group-hover:bg-cyan-500/[0.02] transition-colors" />
              <div className="mb-4 flex items-center justify-between">
                <span className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  {stat.icon}
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">#0{idx+1}</span>
              </div>
              <div>
                <h4 className="text-[11px] font-mono text-gray-500 font-bold uppercase tracking-wider mb-1">{stat.label}</h4>
                <div className="text-white text-lg font-display font-semibold mb-1 group-hover:text-cyan-300 transition-colors">{stat.value}</div>
                <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-black/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">Concept & Identity</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
              The Semantics of <br />
              <span className="text-gradient-cyan-purple font-extrabold">Zorae</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
              Choosing a domain is not merely acquiring real estate; it is embedding a primary narrative. 
              <span className="text-white font-medium"> Zorae</span> marries linguistic elegance with technological readiness.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-mono">01</span>
                <div>
                  <h4 className="text-white font-semibold">The Zora Prefix</h4>
                  <p className="text-sm text-gray-400">Derived from dawn or astronomical twilight. It signals birth, emergence, or the arrival of a highly capable new intelligence paradigm.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-mono">02</span>
                <div>
                  <h4 className="text-white font-semibold">The Liquid Trailing &ldquo;E&rdquo;</h4>
                  <p className="text-sm text-gray-400">Softens pronunciation, making the word fluid and memorable. Fits perfectly alongside high-recall assistants like Alexa, Siri, or Claude.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-mono">03</span>
                <div>
                  <h4 className="text-white font-semibold">Native AI Synthesis</h4>
                  <p className="text-sm text-gray-400">By pairing directly with the .AI extension, the name reads smoothly as a single fluid string: Zorae AI.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden glass-card border border-white/10 flex flex-col justify-center items-center p-8 text-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-700" />
            
            {/* Holographic glowing orb */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[60px] absolute animate-pulse" />
            
            <div className="relative space-y-4 z-10">
              <div className="font-mono text-[11px] text-cyan-300 tracking-[0.2em] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
                Sound Assessment
              </div>
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-wide">
                /ˈzɔːr.eɪ/
              </div>
              <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                &ldquo;Zohr-ay&rdquo; &mdash; Two syllables. High phonological power. Highly comfortable for native English, European, and Asian speakers alike.
              </p>
              
              <div className="pt-6 border-t border-white/5 flex justify-center space-x-8 text-xs font-mono text-gray-500">
                <div>
                  <div className="text-white font-semibold">6 Letters</div>
                  <div>Length</div>
                </div>
                <div>
                  <div className="text-white font-semibold">C-V-C-V-V</div>
                  <div>Structure</div>
                </div>
                <div>
                  <div className="text-white font-semibold">10/10</div>
                  <div>Recall</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID VALUE ARCHITECTURE (ScrollTriggered) */}
      <section ref={bentoRef} className="bento-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bento-header text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">Why .AI Domains?</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white">
            The Digital Gold Rush
          </h2>
          <p className="text-gray-400 font-light">
            In the artificial intelligence paradigm, a .com is yesterday&apos;s news. Today, <code className="font-mono text-xs text-white bg-white/5 px-1.5 py-0.5 rounded">.AI</code> is the unquestioned signifier of prestige, authority, and high-frequency innovation.
          </p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Scarcity */}
          <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative md:col-span-2 overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="space-y-4 mb-8">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-2xl w-fit">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">Finite Character Scarcity</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                There are only a mathematically limited number of pronounceable 6-letter domains. As venture funding pours into AI platforms, short brandable assets have become the ultimate bottleneck. Purchasing **zorae.ai** secures your brand authority before competitive startups lock you out of your identity.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Domain Availability Rate</span>
              <span className="text-cyan-400 font-semibold">&lt; 0.01% for 6-Letters</span>
            </div>
          </div>

          {/* Card 2 - Global SEO */}
          <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-purple-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="space-y-4 mb-8">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-2xl w-fit">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">Global SEO Treatment</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Google officially treats the `.ai` extension as a Generic Top-Level Domain (gTLD) for global search indexing, meaning it ranks identically to `.com` in worldwide search results while indicating premium technological relevance.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Google SEO Compatibility</span>
              <span className="text-purple-400 font-semibold">100% Native</span>
            </div>
          </div>

          {/* Card 3 - Immediate Prestige */}
          <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-blue-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="space-y-4 mb-8">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl w-fit">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-300 transition-colors">Immediate Credibility</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Secure immediate credibility with top-tier VCs, tech partners, and prospective talent. A world-class name conveys that you are well-capitalized, professional, and serious about market leadership from day one.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Investor Recognition Rate</span>
              <span className="text-blue-400 font-semibold">Premium tier</span>
            </div>
          </div>

          {/* Card 4 - Use Case Synergy */}
          <div className="bento-card glass-card rounded-3xl p-8 border-white/[0.05] relative md:col-span-2 overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="space-y-4 mb-8">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl w-fit">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">Perfect Synergy with Modern Tech Trends</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Whether you build spatial computing applications, autonomous LLM agents, cloud services, robotic control libraries, or generative video editors, the prefix &ldquo;Zorae&rdquo; carries a futuristic, airy, yet trustworthy connotation. It expands easily into &ldquo;Zorae Labs&rdquo;, &ldquo;Zorae Systems&rdquo;, &ldquo;Zorae Studio&rdquo;, or &ldquo;Zorae Tech&rdquo;.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Adaptability Rating</span>
              <span className="text-emerald-400 font-semibold">9.8 / 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDING MOCKUP ENGINE / LIVE SHOWCASE */}
      <section className="brand-section py-20 bg-black/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">Interactive Sandbox</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                Brand Sandbox: Zorae in Action
              </h2>
              <p className="text-gray-400 max-w-2xl font-light">
                Toggle through mock brand directions to see how **zorae.ai** immediately adapts to different high-growth industries.
              </p>
            </div>

            {/* TAB SELECTOR */}
            <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-xl self-start lg:self-auto overflow-x-auto max-w-full">
              {brandMockups.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveBrandTab(tab.id)}
                  className={`px-4.5 py-2.5 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all duration-200 whitespace-nowrap ${
                    activeBrandTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30 shadow-lg'
                      : 'text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE BRAND CARD DETAIL DISPLAY */}
          <div className="brand-showcase-container glass-card rounded-3xl p-8 md:p-12 border-white/[0.05] relative overflow-hidden">
            {brandMockups.map((mockup) => {
              if (mockup.id !== activeBrandTab) return null;
              return (
                <div key={mockup.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                  
                  {/* Left Column: Information */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`p-3 rounded-2xl bg-white/5 border ${mockup.accent}`}>
                        {mockup.icon}
                      </span>
                      <div>
                        <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-widest">{mockup.tagline}</span>
                        <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-1">{mockup.name}</h3>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 font-light italic leading-relaxed">
                      &ldquo;{mockup.slogan}&rdquo;
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {mockup.description}
                    </p>

                    <div className="pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Suggested Logo Aura</div>
                        <div className="text-xs text-white font-medium">Glassmorphism / Neon Wire</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Brand Archetype</div>
                        <div className="text-xs text-white font-medium">The Visionary / Creator</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Primary Colorways</div>
                        <div className="text-xs text-white font-medium">Deep Ash, Solar Violet, Ice Blue</div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2.5">
                      <button 
                        onClick={() => applyBrandingIdea(mockup.name)}
                        className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 rounded-lg text-xs font-mono text-cyan-300 transition-all flex items-center gap-1.5"
                      >
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        Pitch this idea with AI Advisor
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Showcase */}
                  <div className="lg:col-span-5 aspect-square relative glass-card rounded-2xl border-white/[0.08] flex flex-col justify-between p-8 overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${mockup.color} opacity-40`} />
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050608]/90" />
                    
                    {/* Floating brand background shapes */}
                    <div className="absolute top-[25%] left-[25%] w-1/2 h-1/2 rounded-full bg-cyan-400/5 blur-[50px] animate-pulse" />

                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-[10px] font-mono text-gray-500 tracking-wider">SECURE LANDING PAGE</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                    </div>

                    {/* Logo Mockup */}
                    <div className="relative z-10 text-center py-10 space-y-4">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center shadow-xl backdrop-blur-md group-hover:rotate-6 transition-transform duration-500">
                        {mockup.icon}
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-2xl font-display font-bold text-white tracking-tight">{mockup.id === 'labs' ? 'zorae_labs' : mockup.id === 'studio' ? 'zorae.studio' : 'zorae_ai'}</h4>
                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">{mockup.tagline}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end relative z-10 text-[9px] font-mono text-gray-500">
                      <span>zorae.ai/dashboard</span>
                      <span>v1.0.4-COGNITIVE</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* AI BRANDING COMPANION (CHATBOT) */}
      <section ref={chatbotRef} id="ai-advisor" className="chat-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="chat-section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Copy & Pre-configured Pitches */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">Interactive Evaluation</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-none">
                AI Brand <br />
                Advisor
              </h2>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                Unlock the cognitive value of Zorae.ai. Our bespoke Gemini-powered advisor lives to consult your vision. Ask questions, simulate valuations, or let it pitch the perfect brand angle based on your startup&apos;s core mechanics.
              </p>
            </div>

            {/* Quick Pitch Templates */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Or, click to pitch a niche:</h4>
              <div className="space-y-2">
                <button
                  onClick={() => applyBrandingIdea("An AI real estate valuation assistant")}
                  className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 text-xs text-gray-300 transition-all flex items-center justify-between group"
                >
                  <span>Real Estate AI Copilot</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
                </button>

                <button
                  onClick={() => applyBrandingIdea("A smart biomedical research engine")}
                  className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 text-xs text-gray-300 transition-all flex items-center justify-between group"
                >
                  <span>Intelligent Bio-Med SaaS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
                </button>

                <button
                  onClick={() => applyBrandingIdea("A high-frequency algorithmic quant fund")}
                  className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/20 text-xs text-gray-300 transition-all flex items-center justify-between group"
                >
                  <span>AI Quantitative Trading</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs font-mono text-gray-500">
              Powered by Gemini 3.5 Flash
            </div>
          </div>

          {/* Right: Immersive Interactive Chat Console */}
          <div className="lg:col-span-8 flex flex-col glass-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[500px]">
            {/* Console Header */}
            <div className="bg-black/40 border-b border-white/5 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-white tracking-widest uppercase font-bold">COGNITIVE BRAND SIMULATOR</span>
              </div>
              <span className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-1 rounded">
                zorae.ai // advisor_v1.2
              </span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[400px] flex flex-col justify-start">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start space-x-3 max-w-[85%] ${
                    msg.role === 'user' ? 'self-end flex-row-reverse space-x-reverse' : 'self-start'
                  }`}
                >
                  <div className={`p-2 rounded-xl border ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-white' 
                      : 'bg-white/5 border-white/10 text-gray-300'
                  }`}>
                    {msg.role === 'user' ? (
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase">You</span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-purple-400 uppercase">Advisor</span>
                    )}
                    
                    {/* Render message with basic Markdown-like support */}
                    <div className="text-xs mt-1 leading-relaxed font-sans font-light whitespace-pre-line">
                      {msg.content.split('**').map((part, i) => (
                        i % 2 === 1 ? <strong key={i} className="font-bold text-white">{part}</strong> : part
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl w-fit">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                  <span>Advisor is analyzing your startup blueprint...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="bg-black/50 border-t border-white/5 p-4 flex gap-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Enter your startup idea or domain query..."
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={isTyping || !chatInput.trim()}
                className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ACQUISITION DESK & TRUST CENTER */}
      <section id="offer-desk" className="acq-section py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Trust & Security Indicators */}
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

            {/* Trust Matrix */}
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

          {/* Right Side: Interactive Bid submission form */}
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
                    onClick={() => setSubmittedOffer(false)}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-xs font-mono text-gray-300 transition-all"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleOfferSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={offerName}
                        onChange={(e) => setOfferName(e.target.value)}
                        placeholder="e.g., Jennifer Wu"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={offerEmail}
                        onChange={(e) => setOfferEmail(e.target.value)}
                        placeholder="e.g., j.wu@labs.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Proposed Offer Amount (USD) *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        required
                        min="500"
                        value={offerAmount}
                        onChange={(e) => setOfferAmount(e.target.value)}
                        placeholder="e.g., 8500"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all font-mono font-bold"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 block">Recommended premium starting range: $5,000 - $15,000 USD.</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block font-bold">Branding Vision / Startup Concept (Optional)</label>
                    <textarea
                      value={offerVision}
                      onChange={(e) => setOfferVision(e.target.value)}
                      rows={3}
                      placeholder="Share a brief concept of what you are building. This helps us customize our evaluation and speed up response times."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 transition-all font-sans leading-relaxed resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 shadow-lg shadow-cyan-500/10 cursor-pointer transition-all duration-200"
                  >
                    <Coins className="w-4 h-4" />
                    Submit Secure Proposal
                  </button>
                </form>
              )}
            </div>

            {/* Display logged bids if they submitted any */}
            {localOffers.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                <h4 className="text-[11px] font-mono text-gray-500 uppercase tracking-widest font-bold">Your Pending Bid Inquiries ({localOffers.length}):</h4>
                <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2">
                  {localOffers.map((offer) => (
                    <div key={offer.id} className="p-3 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-white">zorae.ai</div>
                        <div className="text-[10px] text-gray-500 font-mono mt-0.5">{offer.timestamp}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold font-mono">${offer.amount.toLocaleString()}</div>
                        <span className="text-[9px] font-mono text-amber-400 bg-amber-400/5 border border-amber-400/20 px-2 py-0.5 rounded-full inline-block mt-0.5 uppercase">
                          Reviewing
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black/60 py-12 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-lg font-display font-bold text-white tracking-wider">
            zorae<span className="text-gradient-cyan-purple font-black">.ai</span>
          </div>
          <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
            This landing page is a premium property showcase. The domain name **zorae.ai** is currently active and open for secure transactional transfer under safe escrow regulations.
          </p>
          <div className="text-[10px] font-mono text-gray-600 pt-4">
            &copy; {new Date().getFullYear()} Zorae.ai Domain Portfolio. All Rights Reserved. Managed under Secure Escrow Protocols.
          </div>
        </div>
      </footer>

    </div>
  );
}
