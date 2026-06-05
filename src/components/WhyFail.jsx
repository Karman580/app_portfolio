import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ShieldX, ShieldCheck, ArrowRight } from 'lucide-react';

const traditionalSteps = [
  { label: 'Scam Call / Phishing Initiated', time: '0:00' },
  { label: 'Victim gets manipulated, transfers money', time: '0:15', highlight: true },
  { label: 'Account debited instantly, money laundered', time: '0:16' },
  { label: 'Victim realizes fraud, contacts customer care', time: '1:30' },
  { label: 'Bank registers complain, files cyber cell report', time: '12:00' },
  { label: 'Mule accounts drained. Recovery rate: <3%', time: '48hr+', failed: true }
];

const appShieldSteps = [
  { label: 'Scam Call / Phishing Initiated', time: '0:00' },
  { label: 'Edge AI monitors local call & detects threats', time: '0:02', highlight: true },
  { label: 'SOS Alert triggered, Guardian notified', time: '0:05' },
  { label: 'Risk engine restrictions lock payment apps', time: '0:10' },
  { label: 'Fear-driven UPI transfer attempt is blocked', time: '0:12' },
  { label: 'Scam aborted. User funds 100% safe', time: '0:15', success: true }
];

export default function WhyFail() {
  const [activeTab, setActiveTab] = useState('timeline'); // comparison or timeline

  return (
    <section id="why-fail" className="relative w-full bg-[#0B1020] py-24 border-b border-white/5">
      <div className="absolute inset-0 bg-[#050816]/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#7C3AED] font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span> Proactive vs Reactive
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Why Current Solutions Fail
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-lg font-light">
            Traditional cybersecurity reacts after the money is gone. AppShield AI intervenes before the transaction can even be authorized.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Traditional Panel */}
          <div className="glass-panel border-red-500/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-400">
                  <ShieldX className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Traditional Solutions</h3>
                  <p className="text-xs text-[#CBD5E1]/60">Reactive approach</p>
                </div>
              </div>

              <div className="space-y-6 my-8">
                {traditionalSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative">
                    {idx !== traditionalSteps.length - 1 && (
                      <div className="absolute top-6 left-3 w-[1px] h-[calc(100%+12px)] bg-red-500/10"></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 border ${
                      step.failed 
                        ? 'bg-red-950 border-red-500 text-red-400' 
                        : step.highlight 
                        ? 'bg-red-900/40 border-red-400/40 text-red-300'
                        : 'bg-white/5 border-white/10 text-white/40'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline">
                        <h4 className={`text-sm font-medium ${step.failed ? 'text-red-400 font-bold' : 'text-[#CBD5E1]'}`}>
                          {step.label}
                        </h4>
                        <span className="text-[10px] font-mono text-white/30">{step.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/10 text-red-300 text-xs font-mono text-center">
              CRITICAL FAILPOINT: Financial loss occurs in step 2.
            </div>
          </div>

          {/* AppShield AI Panel */}
          <div className="glass-panel border-[#00E5FF]/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_0_30px_rgba(0,229,255,0.05)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-3xl group-hover:bg-[#00E5FF]/10 transition-colors"></div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    AppShield AI <span className="text-xs px-2 py-0.5 rounded-md bg-[#00E5FF]/20 text-[#00E5FF] font-mono">Live</span>
                  </h3>
                  <p className="text-xs text-[#00FFB2]">Preventive / Real-Time intervention</p>
                </div>
              </div>

              <div className="space-y-6 my-8">
                {appShieldSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative">
                    {idx !== appShieldSteps.length - 1 && (
                      <div className="absolute top-6 left-3 w-[1px] h-[calc(100%+12px)] bg-[#00E5FF]/20"></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 border ${
                      step.success 
                        ? 'bg-emerald-950 border-[#00FFB2] text-[#00FFB2] shadow-[0_0_10px_rgba(0,255,178,0.2)]' 
                        : step.highlight 
                        ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]'
                        : 'bg-white/5 border-white/10 text-white/40'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline">
                        <h4 className={`text-sm font-medium ${step.success ? 'text-[#00FFB2] font-bold' : 'text-[#CBD5E1]'}`}>
                          {step.label}
                        </h4>
                        <span className="text-[10px] font-mono text-white/30">{step.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-[#00FFB2]/20 text-[#00FFB2] text-xs font-mono text-center">
              SHIELD SECURED: Scam neutralized before payments are made.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
