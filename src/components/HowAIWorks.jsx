import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, ShieldAlert, Users, CreditCard, CheckCircle, Database } from 'lucide-react';

const workflowNodes = [
  { step: 1, title: 'Phone Device', desc: 'Active phone, WhatsApp calls & app environment.', icon: Smartphone, color: 'text-blue-400 border-blue-500/20' },
  { step: 2, title: 'On-Device AI Engine', desc: 'Edge NLP & certificate validation engines.', icon: Cpu, color: 'text-purple-400 border-purple-500/20' },
  { step: 3, title: 'Behavioral Analysis', desc: 'Real-time assessment of user anxiety & call context.', icon: ShieldAlert, color: 'text-amber-400 border-amber-500/20' },
  { step: 4, title: 'Threat Detection', desc: 'Flagging call transcripts or suspicious app permissions.', icon: Database, color: 'text-red-400 border-red-500/20' },
  { step: 5, title: 'Guardian Alert System', desc: 'Silent outbound SMS & data links to trusted contacts.', icon: Users, color: 'text-cyan-400 border-cyan-500/20' },
  { step: 6, title: 'Payment Protection', desc: 'UPI & mobile banking app cooling lockouts.', icon: CreditCard, color: 'text-pink-400 border-pink-500/20' },
  { step: 7, title: 'Fraud Prevention', desc: 'Transaction aborted safely. Danger averted.', icon: CheckCircle, color: 'text-emerald-400 border-emerald-500/20' }
];

export default function HowAIWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-base-muted py-24 border-b border-border-main">
      <div className="absolute inset-0 bg-base/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <div className="text-success font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span> Zero-Trust Pipeline
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary leading-tight">
              How the AI Works
            </h2>
            <p className="mt-4 text-text-muted text-lg font-light leading-relaxed">
              Our system operates as a closed loop directly on the user's mobile device, analyzing context without exposing metadata to the cloud.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-center gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-panel p-5 rounded-2xl text-center border-emerald-500/20">
                <div className="text-success text-xs font-mono font-bold uppercase mb-1">Local Processing</div>
                <div className="text-[10px] text-text-muted">No cloud dependency for threat detection.</div>
              </div>
              <div className="glass-panel p-5 rounded-2xl text-center border-cyan-500/20">
                <div className="text-accent-cyan text-xs font-mono font-bold uppercase mb-1">Zero Leaks</div>
                <div className="text-[10px] text-text-muted">Zero data exfiltration or recording transfers.</div>
              </div>
              <div className="glass-panel p-5 rounded-2xl text-center border-purple-500/20">
                <div className="text-accent-violet text-xs font-mono font-bold uppercase mb-1">Privacy First</div>
                <div className="text-[10px] text-text-muted">Privacy by design compliant with DPDP Act.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-[48px] bottom-[48px] left-8 lg:left-1/2 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-violet to-success opacity-20 -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12 relative z-10">
            {workflowNodes.map((node, idx) => {
              const Icon = node.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={node.step} 
                  className={`flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  } gap-6 lg:gap-12 w-full`}
                >
                  {/* Left or Right Content Card */}
                  <div className={`w-full lg:w-1/2 flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <div className="w-full max-w-md glass-panel p-6 rounded-2xl border-border-main hover:border-border-subtle transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-bold text-text-muted opacity-50">STEP 0{node.step}</span>
                        <div className="h-[1px] flex-grow bg-border-main"></div>
                      </div>
                      <h4 className="text-lg font-bold text-text-primary mb-2">{node.title}</h4>
                      <p className="text-sm text-text-muted font-light leading-relaxed">{node.desc}</p>
                    </div>
                  </div>

                  {/* Central Timeline Badge */}
                  <div className="flex items-center justify-center relative z-20 shrink-0 mx-auto lg:mx-0">
                    <div className={`w-14 h-14 rounded-full bg-base border flex items-center justify-center shadow-2xl ${node.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Grid alignment */}
                  <div className="w-full lg:w-1/2 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
