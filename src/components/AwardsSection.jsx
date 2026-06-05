import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AwardsSection() {
  return (
    <section id="awards" className="relative w-full bg-[#050816] py-24 border-b border-white/5 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Award content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-[#00E5FF] font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span> Elite Recognition
            </div>
            
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              RBI Harbinger 2025
            </h2>

            <div className="text-lg text-emerald-400 font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#00FFB2]" /> 
              Special Mention Award • Top 21 Finalist
            </div>

            <p className="text-[#CBD5E1] text-lg font-light leading-relaxed mb-8">
              Presented by the <strong>Reserve Bank of India (RBI) Deputy Governor</strong>, AppShield AI was awarded elite honors for <strong>Innovation in Cyber Fraud Prevention</strong> in the flagship global hackathon.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-[#00FFB2] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-white font-bold">Selected from 1,000+ Global Innovations</span>
                  <p className="text-sm text-[#CBD5E1]/60">Rigorous audit by banking security boards and RBI specialists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-[#00FFB2] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-white font-bold">Validated by Regulators & Central Bank Teams</span>
                  <p className="text-sm text-[#CBD5E1]/60">Acknowledged for protecting vulnerable retail demographics during scannings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Trophy Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#0B1020] to-[#101827] border border-white/5 flex items-center justify-center shadow-2xl">
              {/* Spinning background rings */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#00E5FF]/10 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-10 rounded-full border border-dashed border-[#7C3AED]/20 animate-[spin_20s_linear_infinite_reverse]"></div>
              
              {/* Radial Glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 to-[#7C3AED]/20 blur-2xl animate-pulse"></div>

              {/* Glowing Trophy Graphic */}
              <motion.div 
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center relative shadow-[0_0_40px_rgba(0,229,255,0.2)] mb-4">
                  <Award className="w-12 h-12 text-[#00E5FF] filter drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                </div>
                
                <div className="text-center">
                  <div className="text-xs font-mono text-white/50 uppercase tracking-widest">RBI HARBINGER</div>
                  <div className="text-lg font-bold text-white tracking-tight mt-0.5">Global Hackathon</div>
                  <div className="text-[10px] text-[#00FFB2] uppercase font-bold tracking-widest mt-1">SPECIAL MENTION</div>
                </div>
              </motion.div>

              {/* Floating Shield Badges */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#00FFB2]" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
