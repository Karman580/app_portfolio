import React, { useState } from 'react';
import { ArrowRight, Sparkles, Send, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0B1020] py-24 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]/75"></div>
      
      {/* Decorative Blur Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFB2] mb-8 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Secure Deployment Ready
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Ready to Stop Fraud <br />
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">Before It Happens?</span>
        </h2>
        
        <p className="text-[#CBD5E1] text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Integrate our SDK or request an enterprise pilot to safeguard your retail banking channels against social engineering scams.
        </p>

        {/* Dynamic CTA Form / Buttons */}
        <div className="max-w-md mx-auto mb-10">
          {submitted ? (
            <div className="glass-panel p-6 rounded-2xl border-emerald-500/20 text-center flex flex-col items-center gap-3">
              <CheckCircle className="w-8 h-8 text-[#00FFB2]" />
              <div className="text-white font-bold">Request Logged Successfully</div>
              <p className="text-xs text-[#CBD5E1]">Our enterprise security team will connect with you within 12 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <input 
                type="email" 
                placeholder="Enter corporate email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
              />
              <button 
                type="submit"
                className="px-5 py-3 rounded-lg bg-[#00E5FF] text-[#050816] font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all"
              >
                Request Pilot <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Auxiliary buttons */}
        <div className="flex justify-center gap-6 text-sm">
          <a href="mailto:contact@appshieldai.com" className="text-[#CBD5E1]/60 hover:text-white transition-colors">
            Partner With Us
          </a>
          <span className="text-white/10">|</span>
          <a href="mailto:contact@appshieldai.com" className="text-[#CBD5E1]/60 hover:text-white transition-colors">
            Contact Security Team
          </a>
        </div>

      </div>
    </section>
  );
}
