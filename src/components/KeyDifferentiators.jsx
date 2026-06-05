import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, Radio, Users, Shield, Languages, WifiOff, Globe2, Building2, Landmark, Zap } from 'lucide-react';

const differentiators = [
  {
    title: 'Real-Time Scam Detection',
    desc: 'Acts during the scam window before transactions are initiated, preventing direct financial loss.',
    icon: Radio,
    color: 'text-cyan-400'
  },
  {
    title: 'Digital Arrest Detection',
    desc: 'Deep integration flags mock legal threats, fake warrants, and coercion patterns in live streams.',
    icon: Shield,
    color: 'text-red-400'
  },
  {
    title: 'Human-in-the-Loop',
    desc: 'Bridges user isolation during crisis by sync-linking trusted guardians for secondary validation.',
    icon: Users,
    color: 'text-[#7C3AED]'
  },
  {
    title: 'Offline Functionality',
    desc: 'Local model inference requires zero active internet connection to run real-time heuristics.',
    icon: WifiOff,
    color: 'text-amber-400'
  },
  {
    title: 'Multilingual Detection',
    desc: 'Supports Hindi, English, Kannada, Telugu, Bengali, Tamil, and other regional dialects seamlessly.',
    icon: Languages,
    color: 'text-emerald-400'
  },
  {
    title: 'On-Device Edge AI',
    desc: 'Runs directly on smartphones with minimal battery draw and zero cloud-latency bottlenecks.',
    icon: Zap,
    color: 'text-pink-400'
  },
  {
    title: 'Zero Data Sharing',
    desc: 'Guarantees absolute compliance with the Digital Personal Data Protection (DPDP) Act.',
    icon: EyeOff,
    color: 'text-purple-400'
  },
  {
    title: 'National Scale Deployment',
    desc: 'Engineered to withstand massive concurrent endpoints without cloud infrastructure cost spikes.',
    icon: Globe2,
    color: 'text-indigo-400'
  },
  {
    title: 'Bank Integration Ready',
    desc: 'Vulnerability locks sync via standard REST/gRPC SDKs directly into leading banking apps.',
    icon: Building2,
    color: 'text-sky-400'
  },
  {
    title: 'Regulator Ready',
    desc: 'Aligned with RBI standards for cybersecurity, digital payments, and retail user protection.',
    icon: Landmark,
    color: 'text-teal-400'
  }
];

export default function KeyDifferentiators() {
  return (
    <section id="features" className="relative w-full bg-[#050816] py-24 border-b border-white/5 grid-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#00E5FF] font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span> Advanced Core Heuristics
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Key Differentiators
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-lg font-light">
            Engineered to secure end-users against modern social engineering tactics that bypass standard anti-malware programs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            
            // Custom sizes for bento grid look
            const isLarge = idx === 0 || idx === 6;

            return (
              <div 
                key={idx}
                className={`glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 transition-all duration-300 ${
                  isLarge ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-white/5 ${diff.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    Shield Index {idx + 10}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mt-6 mb-2 tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#CBD5E1]/80 font-light leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
