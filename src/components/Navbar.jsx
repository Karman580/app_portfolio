import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#050816]/75 backdrop-blur-md border-b border-white/5' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 group-hover:border-[#00E5FF]/80 transition-colors">
            <Shield className="w-5 h-5 text-[#00E5FF] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-lg bg-[#00E5FF]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            AppShield<span className="text-[#00E5FF]">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-[#CBD5E1] hover:text-[#00E5FF] transition-colors">Platform</a>
          <a href="#why-fail" className="text-sm text-[#CBD5E1] hover:text-[#00E5FF] transition-colors">Difference</a>
          <a href="#architecture" className="text-sm text-[#CBD5E1] hover:text-[#00E5FF] transition-colors">Defense Layers</a>
          <a href="#how-it-works" className="text-sm text-[#CBD5E1] hover:text-[#00E5FF] transition-colors">Technology</a>
          <a href="#banks" className="text-sm text-[#CBD5E1] hover:text-[#00E5FF] transition-colors">Banks</a>
          <a href="#awards" className="text-sm text-[#CBD5E1] hover:text-[#00E5FF] transition-colors">Awards</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-lg text-sm font-medium glass-panel text-white hover:border-[#00E5FF]/30 transition-all duration-300"
          >
            Watch Demo
          </a>
          <a 
            href="#contact" 
            className="relative group px-5 py-2.5 rounded-lg text-sm font-medium text-[#050816] bg-[#00E5FF] overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-semibold">
              Request Demo <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#CBD5E1] hover:text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#050816] border-t border-white/5 px-6 py-8 flex flex-col gap-6 z-40 overflow-y-auto">
          <a 
            href="#problem" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-[#CBD5E1] hover:text-[#00E5FF] transition-colors"
          >
            Platform
          </a>
          <a 
            href="#why-fail" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-[#CBD5E1] hover:text-[#00E5FF] transition-colors"
          >
            Difference
          </a>
          <a 
            href="#architecture" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-[#CBD5E1] hover:text-[#00E5FF] transition-colors"
          >
            Defense Layers
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-[#CBD5E1] hover:text-[#00E5FF] transition-colors"
          >
            Technology
          </a>
          <a 
            href="#banks" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-[#CBD5E1] hover:text-[#00E5FF] transition-colors"
          >
            Banks
          </a>
          <a 
            href="#awards" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-[#CBD5E1] hover:text-[#00E5FF] transition-colors"
          >
            Awards
          </a>
          
          <div className="flex flex-col gap-4 mt-8">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-5 py-3 rounded-lg text-sm font-medium glass-panel text-white"
            >
              Watch Demo
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-[#050816] bg-[#00E5FF]"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
