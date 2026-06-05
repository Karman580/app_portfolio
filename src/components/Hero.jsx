import React, { useRef, useEffect, useContext } from 'react';
import { ArrowRight, Play, Award, Smartphone, EyeOff } from 'lucide-react';
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef(null);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let gridCanvas = null; // offscreen cache for the static grid

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Rebuild cached grid
      gridCanvas = document.createElement('canvas');
      gridCanvas.width = canvas.width;
      gridCanvas.height = canvas.height;
      const gctx = gridCanvas.getContext('2d');
      gctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.03)';
      gctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < gridCanvas.width; x += gridSize) {
        gctx.beginPath();
        gctx.moveTo(x, 0);
        gctx.lineTo(x, gridCanvas.height);
        gctx.stroke();
      }
      for (let y = 0; y < gridCanvas.height; y += gridSize) {
        gctx.beginPath();
        gctx.moveTo(0, y);
        gctx.lineTo(gridCanvas.width, y);
        gctx.stroke();
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // We also need to redraw grid on theme change, so we'll just track that in the effect dependencies.

    const threatTypes = ['scam_call', 'phishing', 'fake_app', 'digital_arrest', 'fraud_payment'];
    const threatLabels = {
      scam_call: 'Social Engineering Call',
      phishing: 'Phishing URL',
      fake_app: 'Fake Banking App',
      digital_arrest: 'Digital Arrest Scam',
      fraud_payment: 'UPI Scam Link'
    };

    class ThreatNode {
      constructor(cw, ch) {
        this.cw = cw;
        this.ch = ch;
        this.reset();
      }

      reset() {
        this.x = Math.random() < 0.5 ? -50 : this.cw + 50;
        this.y = Math.random() * this.ch;
        this.targetX = this.cw / 2;
        this.targetY = this.ch * 0.45;
        this.speed = 1.2 + Math.random() * 1.5;
        this.size = 6 + Math.random() * 8;
        this.type = threatTypes[Math.floor(Math.random() * 5)];
        this.color = '#FF3366';
        this.intercepted = false;
        this.interceptProgress = 0;
        this.label = threatLabels[this.type];
      }

      update(shieldRadius) {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < shieldRadius + 60 && !this.intercepted) {
          this.intercepted = true;
        }

        if (this.intercepted) {
          this.interceptProgress += 0.05;
          this.color = '#00FFB2';
          if (this.interceptProgress >= 1) this.reset();
        } else {
          this.x += (dx / distance) * this.speed;
          this.y += (dy / distance) * this.speed;
        }
      }

      draw(ctx) {
        // Connection line — no shadowBlur
        ctx.strokeStyle = this.intercepted ? 'rgba(0, 255, 178, 0.15)' : 'rgba(255, 51, 102, 0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.targetX, this.targetY);
        ctx.stroke();

        // Node shape
        ctx.fillStyle = this.color;
        ctx.beginPath();
        if (this.type === 'fake_app') {
          ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        } else if (this.type === 'scam_call') {
          ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        } else {
          ctx.moveTo(this.x, this.y - this.size / 2);
          ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
          ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
          ctx.closePath();
        }
        ctx.fill();

        // Label text
        ctx.fillStyle = this.intercepted ? '#10B981' : (isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)');
        ctx.font = this.intercepted ? '10px monospace' : '9px monospace';
        ctx.fillText(this.intercepted ? 'BLOCKED' : this.label, this.x + 10, this.y + 3);
      }
    }

    class ShieldWave {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.maxRadius = 140;
      }

      update() {
        this.radius += 1.5;
      }

      draw(ctx) {
        const opacity = 1 - this.radius / this.maxRadius;
        ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    const threats = Array.from({ length: 5 }, () => new ThreatNode(canvas.width, canvas.height));
    let waves = [];
    let frame = 0;

    const render = () => {
      ctx.fillStyle = isDarkMode ? '#050816' : '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Blit cached grid (instead of re-drawing lines every frame)
      if (gridCanvas) {
        ctx.drawImage(gridCanvas, 0, 0);
      }

      const targetX = canvas.width / 2;
      const targetY = canvas.height * 0.45;

      // Central glow — only redraw every 3 frames (it's ambient)
      if (frame % 3 === 0) {
        const gradient = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, 150);
        gradient.addColorStop(0, isDarkMode ? 'rgba(0, 229, 255, 0.1)' : 'rgba(2, 132, 199, 0.08)');
        gradient.addColorStop(1, isDarkMode ? 'rgba(5, 8, 22, 0)' : 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(targetX, targetY, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // Core shield dot — no shadowBlur
      ctx.fillStyle = '#00E5FF';
      ctx.beginPath();
      ctx.arc(targetX, targetY, 12, 0, Math.PI * 2);
      ctx.fill();

      frame++;
      if (frame % 80 === 0) {
        waves.push(new ShieldWave(targetX, targetY));
      }

      waves = waves.filter(w => w.radius < w.maxRadius);
      waves.forEach(w => {
        w.update();
        w.draw(ctx);
      });

      threats.forEach(threat => {
        threat.update(45);
        threat.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-28">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-base/50 via-transparent to-base pointer-events-none z-1"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center items-center text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-border-main border border-border-subtle text-accent-cyan text-xs font-semibold tracking-wider mb-8 uppercase"
        >
          <Award className="w-4 h-4 text-accent-cyan" />
          RBI Harbinger 2025 Top 21 Finalist
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary max-w-5xl leading-none"
        >
          Stop Fraud <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">Before Money Leaves</span> the Account.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-text-muted max-w-3xl font-light leading-relaxed"
        >
          India's first real-time AI-powered cyber fraud prevention platform designed to detect scams during execution and protect users before financial loss occurs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#contact" 
            className="group px-8 py-4 rounded-xl text-base font-semibold text-white bg-accent-cyan flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300"
          >
            Request Demo 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#architecture" 
            className="group px-8 py-4 rounded-xl text-base font-semibold text-text-primary border border-border-main backdrop-blur-md flex items-center gap-2 hover:border-accent-cyan/30 transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-text-primary text-text-primary group-hover:scale-110 transition-transform" />
            Watch Platform Overview
          </a>
        </motion.div>
      </div>

      <div className="relative z-10 w-full border-t border-border-main bg-base/80 backdrop-blur-sm py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-accent-cyan font-semibold text-sm tracking-wider uppercase mb-1">
              <Award className="w-4 h-4" /> RBI Harbinger
            </div>
            <span className="text-text-primary text-xl font-bold">Top 21 Finalist 2025</span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-accent-violet font-semibold text-sm tracking-wider uppercase mb-1">
              <Award className="w-4 h-4" /> Award Winner
            </div>
            <span className="text-text-primary text-xl font-bold">Special Mention Award</span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-text-muted font-semibold text-sm tracking-wider uppercase mb-1">
              <Smartphone className="w-4 h-4 text-text-muted" /> Architecture
            </div>
            <span className="text-text-primary text-xl font-bold">5-Layer Protection</span>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-success font-semibold text-sm tracking-wider uppercase mb-1">
              <EyeOff className="w-4 h-4" /> Secure Edge
            </div>
            <span className="text-text-primary text-xl font-bold">100% On-Device Privacy</span>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-6 h-10 rounded-full border-2 border-border-main flex justify-center p-1.5">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-accent-cyan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
