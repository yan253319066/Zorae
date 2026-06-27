import {
  Sparkles, ShieldCheck, Cpu, Globe, TrendingUp, Layers,
  Compass
} from 'lucide-react';
import { BrandMockup } from './types';

export const domainStats = [
  { label: "Domain Length", value: "6 Letters", icon: <Layers className="w-5 h-5 text-cyan-400" />, desc: "Short, premium, high recall" },
  { label: "Extension", value: ".AI", icon: <Cpu className="w-5 h-5 text-purple-400" />, desc: "Gold standard for artificial intelligence" },
  { label: "Pronounceability", value: "Perfect", icon: <Globe className="w-5 h-5 text-emerald-400" />, desc: "Liquid, global dual-syllable sound" },
  { label: "Keyword Value", value: "Brandable", icon: <Sparkles className="w-5 h-5 text-yellow-400" />, desc: "No generic dictionary limitations" },
  { label: "SEO Authority", value: "Excellent", icon: <TrendingUp className="w-5 h-5 text-blue-400" />, desc: "Clean history, easy to index" },
  { label: "Acquisition Safety", value: "100% Secure", icon: <ShieldCheck className="w-5 h-5 text-pink-400" />, desc: "Safe Escrow contract transfer" },
];

export const brandMockups: BrandMockup[] = [
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
