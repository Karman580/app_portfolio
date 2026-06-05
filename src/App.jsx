import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhyFail from './components/WhyFail';
import DefenseArchitecture from './components/DefenseArchitecture';
import HowAIWorks from './components/HowAIWorks';
import KeyDifferentiators from './components/KeyDifferentiators';
import BanksSection from './components/BanksSection';
import AwardsSection from './components/AwardsSection';
import TechStack from './components/TechStack';
import VisionSection from './components/VisionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Theme Context
export const ThemeContext = createContext();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark for cybersecurity vibe
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {/* Changed hardcoded bg to use bg-base and text-text-primary which adapt to the theme */}
      <div className="relative min-h-screen bg-base text-text-muted overflow-x-hidden selection:bg-accent-cyan/30 selection:text-text-primary transition-colors duration-300">
        {/* Background ambient radial gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-accent-blue/5 to-transparent rounded-full blur-[150px] pointer-events-none z-0"></div>
        
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <Problem />
          <WhyFail />
          <DefenseArchitecture />
          <HowAIWorks />
          <KeyDifferentiators />
          <BanksSection />
          <AwardsSection />
          <TechStack />
          <VisionSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
