import React from 'react';
import { Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-base border-t border-border-main py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Corporate */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30">
                <Shield className="w-4 h-4 text-accent-cyan" />
              </div>
              <span className="font-display font-bold text-lg text-text-primary">AppShield<span className="text-accent-cyan">AI</span></span>
            </a>
            <p className="text-xs text-text-muted/65 leading-relaxed max-w-sm">
              Securing the critical interaction window during fraudulent social engineering calls. Building trust in digital finance for 1.4 Billion citizens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary text-xs font-bold uppercase tracking-wider mb-4">Platform</h4>
            <div className="flex flex-col gap-2.5 text-xs text-text-muted/60">
              <a href="#problem" className="hover:text-accent-cyan transition-colors">Fraud Vectors</a>
              <a href="#why-fail" className="hover:text-accent-cyan transition-colors">The Difference</a>
              <a href="#architecture" className="hover:text-accent-cyan transition-colors">5-Layer Security</a>
              <a href="#how-it-works" className="hover:text-accent-cyan transition-colors">AI Pipeline</a>
            </div>
          </div>

          {/* Corporate / Contact */}
          <div>
            <h4 className="text-text-primary text-xs font-bold uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="flex flex-col gap-2.5 text-xs text-text-muted/60">
              <span>NobleCraft IT Solutions</span>
              <a href="mailto:contact@appshieldai.com" className="text-accent-cyan hover:underline">
                contact@appshieldai.com
              </a>
              <a href="#contact" className="hover:text-text-primary transition-colors">
                Request Integration spec
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] text-text-muted/40 text-center md:text-left">
            © 2026 AppShield AI. A product owned and operated by NobleCraft IT Solutions (Proprietorship). All Rights Reserved.
          </div>
          
          {/* Subtle RBI Recognition Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-base-muted border border-border-main">
            <Award className="w-4 h-4 text-accent-cyan" />
            <span className="text-[10px] font-mono text-text-primary/80 tracking-wide uppercase">
              RBI Harbinger 2025 Honors
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
