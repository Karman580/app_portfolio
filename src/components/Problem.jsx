import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, PhoneCall, ShieldAlert, Key, Landmark, MessageSquare, AlertTriangle, TrendingUp } from 'lucide-react';

const scamCards = [
  {
    title: 'Digital Arrest Scams',
    icon: AlertOctagon,
    desc: 'Fraudsters impersonate police, CBI, or customs agents over video calls, placing victims under mock "digital arrest" to extort large ransoms.',
    stat: '+720% increase in 2025',
    color: 'from-red-500/20 to-orange-500/20 border-red-500/30 text-red-400'
  },
  {
    title: 'Fake Banking Apps',
    icon: Landmark,
    desc: 'Malicious cloned versions of banking apps distributed via third-party links or chat apps to harvest PINs, credentials, and override SMS.',
    stat: 'Over 100k clones detected monthly',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400'
  },
  {
    title: 'Government Impersonation',
    icon: ShieldAlert,
    desc: 'Fake department alerts claiming packages contain contraband, or threats of phone numbers being disconnected if immediate payment isn\'t made.',
    stat: '42% of social engineering scams',
    color: 'from-[#7C3AED]/20 to-[#2563EB]/20 border-purple-500/30 text-purple-400'
  },
  {
    title: 'WhatsApp Fraud',
    icon: MessageSquare,
    desc: 'International calls, lottery rewards, fake part-time job schemes, and video calls used to blackmail and manipulate vulnerable individuals.',
    stat: '8.5 Crore weekly scam calls blocked nationally',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
  },
  {
    title: 'UPI Fraud',
    icon: Key,
    desc: 'Cleverly disguised payment links claiming to credit money but actually debiting the user. Fraudulent QR code scans at local merchant checkouts.',
    stat: '₹12,400 Crore lost to UPI fraud in India',
    color: 'from-[#00E5FF]/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
  },
  {
    title: 'Social Engineering Calls',
    icon: PhoneCall,
    desc: 'Urgency-based calls claiming a relative is hospitalized, arrested, or in trouble, demanding immediate money transfers before checking facts.',
    stat: 'Average response window: 90 seconds',
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400'
  }
];

export default function Problem() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="problem" className="relative w-full bg-base py-24 border-b border-border-main grid-bg">
      <div className="absolute inset-0 bg-gradient-to-t from-base-muted via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="text-accent-cyan font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span> The Threat Landscape
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary leading-tight">
              The Fraud Epidemic is Evolving <br />
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                Faster Than Traditional Security.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-center gap-4 bg-border-subtle/5 border border-border-main rounded-2xl p-6 backdrop-blur-md">
            <div className="p-3.5 rounded-xl bg-red-500/10 text-accent-danger">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-text-primary">70% of Cyber Crimes</div>
              <div className="text-sm text-text-muted">in India are direct financial frauds targeting retail users.</div>
            </div>
          </div>
        </div>

        {/* Scam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scamCards.map((scam, idx) => {
            const Icon = scam.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ perspective: 1000 }}
              >
                <div
                  className={`h-full p-8 rounded-2xl border transition-all duration-500 bg-gradient-to-br ${scam.color} glass-panel`}
                  style={{
                    transform: isHovered 
                      ? 'rotateX(5deg) rotateY(-5deg) translateY(-8px)' 
                      : 'none',
                    boxShadow: isHovered 
                      ? '0 20px 40px -15px rgba(255, 51, 102, 0.15)' 
                      : 'none'
                  }}
                >
                  {/* Decorative Pulse Glow */}
                  {isHovered && (
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-violet opacity-15 blur-lg transition-opacity duration-300"></div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-border-main ${scam.color.split(' ')[2]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted opacity-50">
                        Vector #{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">
                      {scam.title}
                    </h3>
                    
                    <p className="text-sm text-text-muted leading-relaxed mb-6 font-light">
                      {scam.desc}
                    </p>

                    <div className="pt-4 border-t border-border-main flex items-center justify-between text-xs">
                      <span className="text-text-muted">India Stat:</span>
                      <span className="font-semibold">{scam.stat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
