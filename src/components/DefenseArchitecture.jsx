import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Mic, Volume2, Lock, ArrowRight, Check, AlertTriangle, Smartphone } from 'lucide-react';

const layers = [
  {
    id: 1,
    title: 'Layer 1: Malicious App Detection',
    subtitle: 'Cryptographic Certificate Verification',
    desc: 'Detects cloned banking and government applications by analyzing on-device certificates. Instantly flags unauthorized apps that attempt to read SMS or intercept OTPs.',
    icon: Shield,
    visualType: 'app_verification'
  },
  {
    id: 2,
    title: 'Layer 2: Guardian Linking',
    subtitle: 'Real-Time Contact Synchronization',
    desc: 'Bridges the isolation during a scam. Trusted family contacts, guardians, or authorized representatives receive instant alerts with threat levels during suspicious activity.',
    icon: Users,
    visualType: 'guardian_linking'
  },
  {
    id: 3,
    title: 'Layer 3: AI Call Monitoring',
    subtitle: 'On-Device Edge NLP Engine',
    desc: 'Locally monitors incoming calls, WhatsApp calls, and voice applications. Flags urgent phrases like "Digital Arrest", "Verify Pin", or "CBI Investigation" with zero latency.',
    icon: Mic,
    visualType: 'call_waveform'
  },
  {
    id: 4,
    title: 'Layer 4: Safe Word SOS',
    subtitle: 'Covert Voice-Activated Trigger',
    desc: 'If forced to make a call or transfer funds, speaking a pre-configured Safe Word secretly triggers the AppShield emergency system, immediately alerting guardians and bank risk systems.',
    icon: Volume2,
    visualType: 'sos_waveform'
  },
  {
    id: 5,
    title: 'Layer 5: After-Call Payment Protection',
    subtitle: 'Vulnerability Window Lockout',
    desc: 'Imposes a temporary risk-based lock on payment applications (UPI, Netbanking) during and immediately after high-stress calls, neutralizing fear-driven transfers.',
    icon: Lock,
    visualType: 'payment_lock'
  }
];

export default function DefenseArchitecture() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <section id="architecture" className="relative w-full bg-base py-24 border-b border-border-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <div className="text-accent-cyan font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span> The Core Infrastructure
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary leading-tight">
            5-Layer Defense Architecture
          </h2>
          <p className="mt-4 text-text-muted text-lg font-light">
            An active, multi-stage shield that works in tandem to intercept threat vectors from initial contact to the final transaction attempt.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex overflow-x-auto gap-2 pb-6 mb-12 border-b border-border-main scrollbar-none">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            const isActive = activeLayer === idx;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(idx)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl text-left shrink-0 transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/30 text-accent-cyan' 
                    : 'bg-base-muted border border-border-main text-text-muted hover:bg-base-subtle'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-accent-cyan' : 'text-text-muted/60'}`} />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider opacity-60">Layer 0{layer.id}</div>
                  <div className="text-sm font-bold">{layer.title.split(': ')[1]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Layer Content Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[480px]">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center h-[380px] bg-gradient-to-br from-base-muted to-base-subtle border border-border-main rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex items-center justify-center relative z-10"
              >
                {/* Layer 1: App verification simulator */}
                {layers[activeLayer].visualType === 'app_verification' && (
                  <div className="relative flex flex-col items-center">
                    <div className="flex items-center gap-8 relative">
                      {/* Fake Banking App Card */}
                      <motion.div 
                        animate={{ x: [0, 80, 80], y: [0, 0, 0], scale: [1, 1, 0], opacity: [1, 1, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-28 h-36 bg-red-950/40 border border-red-500/40 rounded-xl p-4 flex flex-col justify-between items-center text-center shadow-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-mono text-red-400">SBI_Mule_Clone.apk</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-950 border border-red-500/30 text-red-400 font-mono">CLONE APP</span>
                      </motion.div>

                      {/* Line of action */}
                      <div className="w-16 h-[2px] bg-dashed border-t-2 border-dashed border-border-main"></div>

                      {/* Shield Center Guard */}
                      <div className="w-32 h-32 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 flex items-center justify-center relative shadow-[0_0_30px_rgba(2,132,199,0.2)]">
                        <Shield className="w-10 h-10 text-accent-cyan" />
                        {/* Pulse Ring */}
                        <motion.div 
                          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border border-accent-cyan/60"
                        />
                      </div>
                    </div>
                    {/* Status Badge */}
                    <motion.div 
                      animate={{ 
                        opacity: [1, 1, 0, 1],
                        borderColor: ['var(--color-accent-cyan)', 'var(--color-accent-cyan)', 'var(--color-accent-danger)', 'var(--color-accent-cyan)'] 
                      }}
                      className="mt-6 px-4 py-1.5 rounded-lg border border-accent-cyan bg-base-muted/85 text-accent-cyan font-mono text-[10px] uppercase tracking-wider"
                    >
                      Certificate Validated: Threat Neutralized
                    </motion.div>
                  </div>
                )}

                {/* Layer 2: Guardian linking simulator */}
                {layers[activeLayer].visualType === 'guardian_linking' && (
                  <div className="flex flex-col items-center w-full max-w-md">
                    <div className="flex justify-between items-center w-full relative">
                      {/* User Node */}
                      <div className="w-20 h-20 rounded-2xl bg-base-muted border border-border-main flex flex-col items-center justify-center relative">
                        <Smartphone className="w-6 h-6 text-text-primary/80" />
                        <span className="text-[9px] font-mono mt-1">Your Device</span>
                        {/* Outgoing Alert lines */}
                        <svg className="absolute top-1/2 left-full w-24 h-12 -translate-y-1/2 overflow-visible pointer-events-none">
                          <motion.path 
                            d="M 0 6 Q 50 -20 100 -20 M 0 6 Q 50 32 100 32" 
                            fill="none" 
                            stroke="var(--color-accent-danger)" 
                            strokeWidth="2" 
                            strokeDasharray="4"
                            animate={{ strokeDashoffset: [-20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          />
                        </svg>
                      </div>

                      {/* Guardians Grid */}
                      <div className="flex flex-col gap-6 ml-24">
                        <div className="w-28 py-2 px-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-2">
                          <Users className="w-4 h-4 text-red-400 shrink-0" />
                          <div className="text-left">
                            <div className="text-[9px] font-bold text-text-primary">Spouse (Alerted)</div>
                            <div className="text-[8px] text-red-400 font-mono">High Risk scam call</div>
                          </div>
                        </div>
                        <div className="w-28 py-2 px-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent-cyan shrink-0" />
                          <div className="text-left">
                            <div className="text-[9px] font-bold text-text-primary">Brother</div>
                            <div className="text-[8px] text-success font-mono">Awaiting Sync</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Layer 3: AI Call monitoring simulator */}
                {layers[activeLayer].visualType === 'call_waveform' && (
                  <div className="flex flex-col items-center w-full px-6">
                    {/* Live waveform — CSS animations instead of 24 Framer Motion loops */}
                    <div className="h-16 flex items-end gap-1.5 w-full max-w-sm justify-between mb-8">
                      {Array.from({ length: 24 }).map((_, i) => {
                        const isRed = i >= 8 && i <= 14;
                        const maxH = 30 + ((i * 7 + 13) % 40); // deterministic pseudo-random
                        return (
                          <div
                            key={i}
                            className={`w-2.5 rounded-full ${isRed ? 'bg-accent-danger' : 'bg-accent-cyan'}`}
                            style={{
                              height: '15px',
                              animation: `waveBar 1.${(i * 3 + 2) % 10}s ease-in-out ${i * 0.06}s infinite alternate`,
                              '--max-h': `${maxH}px`,
                            }}
                          />
                        );
                      })}
                    </div>

                    {/* Detected Scam Words Overlay */}
                    <div className="w-full max-w-md py-4 px-6 rounded-2xl bg-base/80 border border-accent-danger/20 text-center font-mono">
                      <div className="text-[10px] text-accent-danger uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Threat Flagged
                      </div>
                      <p className="text-xs text-text-primary">
                        "Your bank account is under <span className="bg-accent-danger/20 text-accent-danger font-bold px-1 rounded border border-accent-danger/30">digital arrest</span> by CBI. Do not disconnect."
                      </p>
                    </div>
                  </div>
                )}

                {/* Layer 4: SOS word activation */}
                {layers[activeLayer].visualType === 'sos_waveform' && (
                  <div className="flex flex-col items-center">
                    <div className="relative flex items-center justify-center">
                      {/* Pulse Circle */}
                      <motion.div 
                        animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="absolute w-28 h-28 rounded-full border border-accent-danger"
                      />
                      <div className="w-24 h-24 rounded-full bg-red-950 border border-accent-danger flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                        <Mic className="w-8 h-8 text-red-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-red-400 mt-1 uppercase tracking-wider font-bold">SOS ACTIVE</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="text-text-primary text-sm font-semibold mb-1">
                        Safe Word: <span className="text-accent-danger">"Emergency Verification Code"</span>
                      </div>
                      <p className="text-xs text-text-muted">Triggers silently during a call when spoken normally.</p>
                    </div>
                  </div>
                )}

                {/* Layer 5: After-call transaction lockdown */}
                {layers[activeLayer].visualType === 'payment_lock' && (
                  <div className="flex flex-col items-center">
                    <div className="w-48 bg-base border border-border-main rounded-2xl p-5 shadow-2xl relative">
                      {/* Top status */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[8px] font-mono text-text-muted">UPI PAYMENTS</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-accent-danger/20 text-accent-danger font-mono font-bold uppercase">LOCKED</span>
                      </div>
                      
                      {/* Input keypad preview */}
                      <div className="space-y-3">
                        <div className="h-10 rounded-lg bg-base-muted border border-border-subtle flex items-center justify-between px-3">
                          <span className="text-[9px] text-text-muted">Enter Amount</span>
                          <span className="text-[10px] font-bold text-text-primary/40">₹ 50,000</span>
                        </div>
                        <div className="py-2.5 rounded-lg bg-accent-danger/20 border border-accent-danger/30 flex items-center justify-center gap-1.5 text-accent-danger text-xs font-semibold">
                          <Lock className="w-3.5 h-3.5" /> Temporarily Locked
                        </div>
                      </div>

                      {/* Cool Clock Overlay */}
                      <div className="absolute inset-0 bg-base/90 rounded-2xl flex flex-col items-center justify-center p-4 border border-accent-danger/30">
                        <Lock className="w-8 h-8 text-accent-danger mb-2" />
                        <div className="text-xs font-bold text-text-primary">Vulnerability Lock Enabled</div>
                        <div className="text-[9px] text-text-muted text-center mt-1">Unlocked in 14m 52s (After-Call Cooloff)</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Layer Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-sm font-mono text-accent-cyan uppercase tracking-wider">
                  System Phase 0{layers[activeLayer].id}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mt-2 mb-4 tracking-tight leading-tight">
                  {layers[activeLayer].title}
                </h3>
                
                <div className="text-xs px-3 py-1 rounded bg-base-muted border border-border-main text-text-muted inline-block mb-6 font-mono font-semibold">
                  {layers[activeLayer].subtitle}
                </div>

                <p className="text-text-muted leading-relaxed mb-8 font-light">
                  {layers[activeLayer].desc}
                </p>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveLayer((activeLayer + 1) % layers.length)}
                    className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent-cyan transition-colors"
                  >
                    Next Layer <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
