import React, { useState } from 'react';
import { Cpu, Brain, Network, Terminal, Cloud, ShieldCheck } from 'lucide-react';

const stackItems = [
  {
    category: 'Artificial Intelligence',
    icon: Brain,
    items: ['Edge AI Inference', 'TensorFlow Lite', 'PyTorch Mobile', 'Local NLP Engines']
  },
  {
    category: 'Behavioral Analytics',
    icon: Network,
    items: ['Anxiety Speech Analysis', 'Keypad Rhythm Monitors', 'App Switching Tracker', 'Touch Pressure Dynamics']
  },
  {
    category: 'Secure APIs',
    icon: Terminal,
    items: ['gRPC Secure Channels', 'REST Webhook Sync', 'Encrypted TLS Tunneling', 'Hardware Key Attestation']
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
    items: ['Fraud Intelligence Engine', 'Threat Database Sync', 'Anonymous Metadata Aggregator', 'Zero-Knowledge Logs']
  }
];

export default function TechStack() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="relative w-full bg-base py-24 border-b border-border-main">
      <div className="absolute inset-0 bg-base-muted/75 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent-cyan font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span> Cutting-Edge Engineering
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary leading-tight">
            Technology Stack
          </h2>
          <p className="mt-4 text-text-muted text-lg font-light">
            An ultra-secure, decentralized architecture powered by edge models optimized for low battery consumption and high throughput.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stackItems.map((stack, idx) => {
            const Icon = stack.icon;
            const isHovered = hoveredCategory === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="glass-panel p-8 rounded-2xl border border-border-main relative overflow-hidden transition-all duration-300 hover:border-accent-cyan/20"
              >
                {/* Visual Glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-2xl transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-base-muted text-accent-cyan">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary tracking-tight">{stack.category}</h3>
                    <span className="text-[10px] font-mono text-text-muted/30 uppercase tracking-widest">Stack Group 0{idx + 1}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stack.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="py-3 px-4 rounded-xl bg-base/60 border border-border-main text-xs text-text-muted font-mono flex items-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-success shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
