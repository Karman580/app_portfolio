import React, { useState, useEffect, useContext } from 'react';
import { Shield, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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
        ? 'py-4 bg-base/80 backdrop-blur-md border-b border-border-main' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 group-hover:border-accent-cyan/80 transition-colors">
            <Shield className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-lg bg-accent-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-text-primary">
            AppShield<span className="text-accent-cyan">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Platform</a>
          <a href="#why-fail" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Difference</a>
          <a href="#architecture" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Defense Layers</a>
          <a href="#how-it-works" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Technology</a>
          <a href="#banks" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Banks</a>
          <a href="#awards" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">Awards</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-base-subtle transition-colors text-text-muted hover:text-accent-cyan"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-border-main text-text-primary hover:border-accent-cyan/30 transition-all duration-300 backdrop-blur-md"
          >
            Watch Demo
          </a>
          <a 
            href="#contact" 
            className="relative group px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-accent-cyan overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-1.5 font-semibold">
              Request Demo <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-accent-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-text-muted hover:text-text-primary"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-text-muted hover:text-text-primary p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-base border-t border-border-main px-6 py-8 flex flex-col gap-6 z-40 overflow-y-auto">
          <a 
            href="#problem" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text-muted hover:text-accent-cyan transition-colors"
          >
            Platform
          </a>
          <a 
            href="#why-fail" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text-muted hover:text-accent-cyan transition-colors"
          >
            Difference
          </a>
          <a 
            href="#architecture" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text-muted hover:text-accent-cyan transition-colors"
          >
            Defense Layers
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text-muted hover:text-accent-cyan transition-colors"
          >
            Technology
          </a>
          <a 
            href="#banks" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text-muted hover:text-accent-cyan transition-colors"
          >
            Banks
          </a>
          <a 
            href="#awards" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-text-muted hover:text-accent-cyan transition-colors"
          >
            Awards
          </a>
          
          <div className="flex flex-col gap-4 mt-8">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-5 py-3 rounded-lg text-sm font-medium border border-border-main text-text-primary backdrop-blur-md"
            >
              Watch Demo
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-accent-cyan"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
