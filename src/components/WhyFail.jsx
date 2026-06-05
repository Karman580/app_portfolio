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
    <section id="why-fail" className="relative w-full bg-base py-24 border-b border-border-main">
      <div className="absolute inset-0 bg-base-muted/50 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent-violet font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span> Proactive vs Reactive
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary leading-tight">
            Why Current Solutions Fail
          </h2>
          <p className="mt-4 text-text-muted text-lg font-light">
            Traditional cybersecurity reacts after the money is gone. AppShield AI intervenes before the transaction can even be authorized.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Traditional Panel */}
          <div className="glass-panel border-accent-danger/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-danger/5 rounded-full blur-3xl group-hover:bg-accent-danger/10 transition-colors"></div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-accent-danger/10 text-accent-danger">
                  <ShieldX className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">Traditional Solutions</h3>
                  <p className="text-xs text-text-muted/60">Reactive approach</p>
                </div>
              </div>

              <div className="space-y-6 my-8">
                {traditionalSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative">
                    {idx !== traditionalSteps.length - 1 && (
                      <div className="absolute top-6 left-3 w-[1px] h-[calc(100%+12px)] bg-accent-danger/10"></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 border ${
                      step.failed 
                        ? 'bg-red-950 border-accent-danger text-accent-danger' 
                        : step.highlight 
                        ? 'bg-red-900/40 border-accent-danger/40 text-accent-danger/80'
                        : 'bg-base-muted border-border-main text-text-primary/40'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline">
                        <h4 className={`text-sm font-medium ${step.failed ? 'text-accent-danger font-bold' : 'text-text-muted'}`}>
                          {step.label}
                        </h4>
                        <span className="text-[10px] font-mono text-text-muted/40">{step.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-accent-danger/10 border border-accent-danger/20 text-accent-danger text-xs font-mono text-center">
              CRITICAL FAILPOINT: Financial loss occurs in step 2.
            </div>
          </div>

          {/* AppShield AI Panel */}
          <div className="glass-panel border-accent-cyan/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl group-hover:bg-accent-cyan/10 transition-colors"></div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    AppShield AI <span className="text-xs px-2 py-0.5 rounded-md bg-accent-cyan/25 text-accent-cyan font-mono">Live</span>
                  </h3>
                  <p className="text-xs text-success">Preventive / Real-Time intervention</p>
                </div>
              </div>

              <div className="space-y-6 my-8">
                {appShieldSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative">
                    {idx !== appShieldSteps.length - 1 && (
                      <div className="absolute top-6 left-3 w-[1px] h-[calc(100%+12px)] bg-accent-cyan/20"></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 border ${
                      step.success 
                        ? 'bg-success/20 border-success text-success shadow-sm' 
                        : step.highlight 
                        ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan'
                        : 'bg-base-muted border-border-main text-text-primary/40'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline">
                        <h4 className={`text-sm font-medium ${step.success ? 'text-success font-bold' : 'text-text-muted'}`}>
                          {step.label}
                        </h4>
                        <span className="text-[10px] font-mono text-text-muted/40">{step.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-success/10 border border-success/20 text-success text-xs font-mono text-center">
              SHIELD SECURED: Scam neutralized before payments are made.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
