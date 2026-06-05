import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShieldCheck, ShieldAlert, Award, FileSpreadsheet, HeartHandshake, TrendingDown, ArrowRight } from 'lucide-react';

const useCases = [
  {
    team: 'Retail Banking',
    title: 'Protect Retail Depositors & Accounts',
    desc: 'Seamlessly embeds AppShield\'s transaction lockouts into existing retail mobile banking apps. Automatically pauses transfers during active scam calls without causing user friction.',
    metric: '92% Reduction in retail fraud'
  },
  {
    team: 'Digital Banking',
    title: 'Secure Next-Gen Banking Channels',
    desc: 'Provides lightweight SDKs that run in the background of mobile apps. Hardens digital payments, UPI, and wallets against screen sharing overlays and social engineering attempts.',
    metric: 'Zero-latency edge verification'
  },
  {
    team: 'Fraud Risk Teams',
    title: 'Enrich Risk Scores with Device Context',
    desc: 'Provides threat signals to the bank\'s central risk engine (FRM). Tells the backend if the transaction request was initiated during an active phone or video session.',
    metric: 'Real-time contextual threat logs'
  },
  {
    team: 'Cybersecurity Operations',
    title: 'Proactive Mobile Threat Detection',
    desc: 'Identifies cloned application packages, certificate tampering, and illegal call spoofing patterns across the entire mobile fleet instantly.',
    metric: 'Fleet-wide certificate audits'
  },
  {
    team: 'Customer Protection',
    title: 'Shield Vulnerable Demographics',
    desc: 'Ensures older or less tech-savvy citizens receive emergency guardian support, protecting accounts from digital arrest threats and coercion.',
    metric: 'Zero setup guardian synchronization'
  },
  {
    team: 'Regulatory Compliance',
    title: 'RBI Directive Alignment',
    desc: 'Helps compliance directors align with stringent regulatory guidelines for customer liability, digital trust, and preventive threat architectures.',
    metric: 'DPDP & RBI compliance certified'
  }
];

const benefits = [
  { text: 'Reduce fraud losses', desc: 'Saves millions in restitution and customer complaints.', icon: TrendingDown },
  { text: 'Increase customer trust', desc: 'Position your brand as a proactive security leader.', icon: ShieldCheck },
  { text: 'Strengthen digital safety', desc: 'Secure the entire retail payment landscape.', icon: ShieldAlert },
  { text: 'Improve fraud response', desc: 'Automatic action beats post-facto investigation.', icon: FileSpreadsheet },
  { text: 'Protect vulnerable customers', desc: 'Safeguard elderly and high-risk accounts from coercion.', icon: HeartHandshake }
];

export default function BanksSection() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <section id="banks" className="relative w-full bg-[#0B1020] py-24 border-b border-white/5">
      <div className="absolute inset-0 bg-[#050816]/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#7C3AED] font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span> Enterprise Grade Protection
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Built for Banks, NBFCs and Financial Institutions
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-lg font-light">
            Deploy AppShield AI directly into your mobile infrastructure to protect customer capital before financial loss occurs.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Switcher Controls (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {useCases.map((uc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveUseCase(idx)}
                className={`w-full py-4 px-6 rounded-xl text-left border transition-all duration-300 ${
                  activeUseCase === idx
                    ? 'bg-gradient-to-r from-[#7C3AED]/10 to-[#2563EB]/10 border-[#7C3AED]/40 text-[#7C3AED]'
                    : 'bg-white/5 border-white/5 text-[#CBD5E1] hover:bg-white/10'
                }`}
              >
                <div className="text-sm font-bold text-white">{uc.team}</div>
                <div className="text-[10px] opacity-60 font-mono tracking-wider mt-0.5">{uc.metric}</div>
              </button>
            ))}
          </div>

          {/* Details Card (8 cols) */}
          <div className="lg:col-span-8 bg-[#050816]/80 border border-white/5 rounded-3xl p-8 lg:p-12 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C3AED]/5 rounded-full blur-3xl"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUseCase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[#7C3AED] mb-6">
                  <Building2 className="w-3.5 h-3.5" /> Use Case Integration
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                  {useCases[activeUseCase].title}
                </h3>
                
                <p className="text-[#CBD5E1] font-light leading-relaxed mb-8 text-base">
                  {useCases[activeUseCase].desc}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between border-t border-white/5 pt-6">
                  <div>
                    <span className="text-xs text-[#CBD5E1]/60 font-mono">Performance Metric:</span>
                    <div className="text-white font-semibold mt-0.5">{useCases[activeUseCase].metric}</div>
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00E5FF] hover:underline">
                    Get Integration Specs <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="border-t border-white/5 pt-16">
          <h3 className="text-center text-lg font-bold text-white mb-10 font-display">Core Business Benefits</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="glass-panel p-6 rounded-2xl border-white/5 text-center flex flex-col items-center">
                  <div className="p-3 rounded-xl bg-white/5 text-[#00E5FF] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-white mb-1 tracking-tight">{b.text}</div>
                  <p className="text-[11px] text-[#CBD5E1]/60 leading-normal">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
