import React from 'react';
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

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-[#CBD5E1] overflow-x-hidden selection:bg-[#00E5FF]/30 selection:text-white">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#2563EB]/5 to-transparent rounded-full blur-[150px] pointer-events-none z-0"></div>
      
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
  );
}
