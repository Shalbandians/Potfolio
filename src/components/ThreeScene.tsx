import React, { useEffect, useRef } from 'react';

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      o: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
    }));

    // Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#a855f7'][Math.floor(Math.random() * 4)],
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.008;

      // Stars twinkle
      stars.forEach((s) => {
        s.o = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed * 5 + s.x));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.o})`;
        ctx.fill();
      });

      // Particles + connections
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Floating 3D-like glowing orbs
      const orbs = [
        { cx: w * 0.75, cy: h * 0.35, r: 180, c1: 'rgba(59,130,246,0.12)', c2: 'rgba(59,130,246,0)' },
        { cx: w * 0.8, cy: h * 0.7, r: 140, c1: 'rgba(139,92,246,0.1)', c2: 'rgba(139,92,246,0)' },
        { cx: w * 0.6, cy: h * 0.2, r: 100, c1: 'rgba(6,182,212,0.08)', c2: 'rgba(6,182,212,0)' },
      ];
      orbs.forEach((o) => {
        const pulse = 1 + 0.05 * Math.sin(t * 1.5);
        const grad = ctx.createRadialGradient(o.cx, o.cy, 0, o.cx, o.cy, o.r * pulse);
        grad.addColorStop(0, o.c1);
        grad.addColorStop(1, o.c2);
        ctx.beginPath();
        ctx.arc(o.cx, o.cy, o.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Rotating torus-like rings (ellipses)
      const rings = [
        { cx: w * 0.78, cy: h * 0.4, rx: 90, ry: 30, color: '#8b5cf6', phase: 0 },
        { cx: w * 0.72, cy: h * 0.55, rx: 60, ry: 20, color: '#06b6d4', phase: 1 },
        { cx: w * 0.82, cy: h * 0.65, rx: 45, ry: 15, color: '#f59e0b', phase: 2 },
      ];
      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(ring.cx, ring.cy);
        ctx.rotate(t * 0.4 + ring.phase);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default ThreeScene;
