import React, { useRef, useEffect } from 'react';

export default function VisionSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 400;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const numLatitudes = 12;
    const numLongitudes = 16;
    const radius = 130;
    const totalPoints = numLatitudes * numLongitudes;

    // Pre-compute base positions
    const baseX = new Float32Array(totalPoints);
    const baseY = new Float32Array(totalPoints);
    const baseZ = new Float32Array(totalPoints);
    // Pre-assign which nodes are "threat" nodes (instead of Math.random per frame)
    const isThreat = new Uint8Array(totalPoints);

    let idx = 0;
    for (let i = 0; i < numLatitudes; i++) {
      const lat = (Math.PI * i) / numLatitudes - Math.PI / 2;
      const cosLat = Math.cos(lat);
      const sinLat = Math.sin(lat);
      for (let j = 0; j < numLongitudes; j++) {
        const lon = (2 * Math.PI * j) / numLongitudes;
        baseX[idx] = radius * cosLat * Math.cos(lon);
        baseY[idx] = radius * sinLat;
        baseZ[idx] = radius * cosLat * Math.sin(lon);
        isThreat[idx] = Math.random() < 0.06 ? 1 : 0;
        idx++;
      }
    }

    // Working arrays for rotated + projected coords
    const rx = new Float32Array(totalPoints);
    const ry = new Float32Array(totalPoints);
    const rz = new Float32Array(totalPoints);
    const px = new Float32Array(totalPoints);
    const py = new Float32Array(totalPoints);

    let angleY = 0;
    const angleXRad = (15 * Math.PI) / 180;
    const cosXR = Math.cos(angleXRad);
    const sinXR = Math.sin(angleXRad);
    const fov = 280;
    const dist = 200;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      const hw = w / 2;
      const hh = h / 2;

      const isDark = document.documentElement.classList.contains('dark');

      ctx.fillStyle = isDark ? '#050816' : '#FFFFFF';
      ctx.fillRect(0, 0, w, h);

      angleY += 0.2;
      const rad = (angleY * Math.PI) / 180;
      const cosY = Math.cos(rad);
      const sinY = Math.sin(rad);

      // Rotate all points (Y then X) and project — flat loop, no object allocation
      for (let i = 0; i < totalPoints; i++) {
        // Rotate Y
        const x1 = baseX[i] * cosY - baseZ[i] * sinY;
        const z1 = baseX[i] * sinY + baseZ[i] * cosY;
        // Rotate X
        const y2 = baseY[i] * cosXR - z1 * sinXR;
        const z2 = baseY[i] * sinXR + z1 * cosXR;

        rx[i] = x1;
        ry[i] = y2;
        rz[i] = z2;

        const factor = fov / (dist + z2);
        px[i] = x1 * factor + hw;
        py[i] = y2 * factor + hh;
      }

      // Draw grid-neighbor connections only (latitude + longitude neighbors)
      // This is O(n) instead of O(n²)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < numLatitudes; i++) {
        for (let j = 0; j < numLongitudes; j++) {
          const a = i * numLongitudes + j;
          if (rz[a] > 20) continue; // skip back-facing points

          const opacity = 0.12 * (1 - (rz[a] + radius) / (2 * radius));
          if (opacity < 0.01) continue;

          ctx.strokeStyle = isDark ? `rgba(0,229,255,${opacity})` : `rgba(2,132,199,${opacity})`;

          // Connect to right neighbor (wrap around longitude)
          const b = i * numLongitudes + ((j + 1) % numLongitudes);
          if (rz[b] <= 20) {
            ctx.beginPath();
            ctx.moveTo(px[a], py[a]);
            ctx.lineTo(px[b], py[b]);
            ctx.stroke();
          }

          // Connect to bottom neighbor
          if (i + 1 < numLatitudes) {
            const c = (i + 1) * numLongitudes + j;
            if (rz[c] <= 20) {
              ctx.beginPath();
              ctx.moveTo(px[a], py[a]);
              ctx.lineTo(px[c], py[c]);
              ctx.stroke();
            }
          }
        }
      }

      // Draw dots — batch by color, no shadowBlur
      ctx.beginPath();
      for (let i = 0; i < totalPoints; i++) {
        if (isThreat[i]) continue;
        ctx.moveTo(px[i] + 1.2, py[i]);
        ctx.arc(px[i], py[i], 1.2, 0, Math.PI * 2);
      }
      ctx.fillStyle = isDark ? '#00E5FF' : '#0284C7';
      ctx.fill();

      // Threat dots
      ctx.beginPath();
      for (let i = 0; i < totalPoints; i++) {
        if (!isThreat[i]) continue;
        ctx.moveTo(px[i] + 2, py[i]);
        ctx.arc(px[i], py[i], 2, 0, Math.PI * 2);
      }
      ctx.fillStyle = isDark ? '#FF3366' : '#EF4444';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative w-full bg-base py-24 border-b border-border-main grid-bg">
      <div className="absolute inset-0 bg-gradient-to-t from-base-muted via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Vision Canvas Globe (5 cols) */}
          <div className="lg:col-span-5 h-[380px] bg-gradient-to-br from-base-muted to-base-subtle border border-border-main rounded-3xl relative overflow-hidden flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 px-3 py-1 rounded-md bg-base-muted/50 border border-border-main text-[10px] font-mono text-accent-cyan tracking-wider uppercase">
              Global Cyber Node Status: Syncing
            </div>
          </div>

          {/* Vision statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-accent-cyan font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span> Next-Gen Protection Infrastructure
            </div>
            
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-text-primary leading-tight mb-6 tracking-tight">
              Building India's Digital Fraud Shield.
            </h2>

            <p className="text-text-muted text-lg font-light leading-relaxed mb-6">
              AppShield AI is creating the next generation of preventive cybersecurity infrastructure for India. We are empowering citizens, commercial banks, regulators, and government agencies to stop financial scams during execution before funds ever leave the account.
            </p>

            <p className="text-text-muted/80 text-sm font-light leading-relaxed">
              By deploying locally, respecting user privacy, and building automated links with authorized fraud response units, we are changing the paradigm from recovery to defense.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
