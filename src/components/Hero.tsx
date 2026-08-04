import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import cvFile from '../Muhammad_Rizwan_Resume.pdf';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'Problem Solver'];

  useEffect(() => {
    let i = 0;
    const current = roles[roleIndex];
    const timer = setInterval(() => {
      if (i < current.length) {
        setTypedText(current.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypedText('');
        }, 2000);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#050816]">
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050816] via-[#050816]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />

      {/* Neon glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] z-[1] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] z-[1] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Muhammad
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Rizwan
                </span>
              </span>
            </h1>

            <div className="h-12 mb-6">
              <h2 className="text-xl md:text-2xl text-cyan-300 font-semibold">
                {typedText}
                <span className="animate-pulse text-blue-400">|</span>
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate MERN developer crafting scalable, high-performance web applications with modern technologies and clean architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href={cvFile}
                download="Muhammad_Rizwan_Resume.pdf"
                className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 border border-blue-500/50 text-blue-300 px-8 py-3.5 rounded-full font-semibold text-sm backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-5 justify-center lg:justify-start">
              {[
                { href: 'https://github.com/Rizwan-300', icon: Github, color: 'hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' },
                { href: 'https://www.linkedin.com/in/muhammad-rizwan-093727243/', icon: Linkedin, color: 'hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]' },
                { href: 'mailto:muhammadrizwanramzan300@gmail.com', icon: Mail, color: 'hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]' },
              ].map(({ href, icon: Icon, color }) => (
                <a
                  key={href}
                  href={href}
                  className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/30 ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Avatar + Badges */}
          <div className="relative flex-shrink-0 flex items-center justify-center pb-24 lg:pb-0" style={{ width: '280px', height: '320px' }}>
            {/* Outer glow */}
            <div className="absolute w-40 h-40 rounded-full bg-blue-600/20 blur-[50px] animate-pulse" />
            <div className="absolute w-36 h-36 rounded-full bg-purple-600/15 blur-[40px] animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Orbit rings */}
            <div className="absolute w-44 h-44 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '15s' }} />
            <div className="absolute w-52 h-52 rounded-full border border-dashed border-purple-500/20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

            {/* Orbit dots */}
            <div className="absolute w-44 h-44 animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
            </div>
            <div className="absolute w-52 h-52 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
            </div>

            {/* SVG Avatar */}
            <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44">
              <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                <defs>
                  <radialGradient id="sphereGrad" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="40%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e1b4b" />
                  </radialGradient>
                  <radialGradient id="faceGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#fcd34d" />
                    <stop offset="100%" stopColor="#d97706" />
                  </radialGradient>
                  <radialGradient id="bodyGrad" cx="40%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#3730a3" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="130" fill="url(#sphereGrad)" opacity="0.15" />
                <circle cx="150" cy="150" r="120" stroke="#3b82f6" strokeWidth="1" opacity="0.3" fill="none" />
                <ellipse cx="150" cy="230" rx="60" ry="45" fill="url(#bodyGrad)" filter="url(#glow)" />
                <path d="M125 200 Q150 215 175 200 L178 230 Q150 240 122 230 Z" fill="#4f46e5" />
                <path d="M147 210 L150 235 L153 210 L150 205 Z" fill="#f59e0b" />
                <rect x="138" y="175" width="24" height="28" rx="10" fill="#fcd34d" />
                <ellipse cx="150" cy="155" rx="48" ry="52" fill="url(#faceGrad)" filter="url(#glow)" />
                <path d="M102 145 Q105 95 150 90 Q195 95 198 145 Q185 110 150 108 Q115 110 102 145 Z" fill="#1e1b4b" />
                <path d="M102 145 Q98 130 103 118 Q108 108 115 108 Q108 120 108 140 Z" fill="#1e1b4b" />
                <path d="M198 145 Q202 130 197 118 Q192 108 185 108 Q192 120 192 140 Z" fill="#1e1b4b" />
                <ellipse cx="133" cy="152" rx="8" ry="9" fill="white" />
                <ellipse cx="167" cy="152" rx="8" ry="9" fill="white" />
                <circle cx="135" cy="154" r="5" fill="#1e1b4b" />
                <circle cx="169" cy="154" r="5" fill="#1e1b4b" />
                <circle cx="137" cy="152" r="2" fill="white" />
                <circle cx="171" cy="152" r="2" fill="white" />
                <path d="M124 141 Q133 136 142 140" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M158 140 Q167 136 176 141" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M136 170 Q150 182 164 170" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <rect x="90" y="240" width="120" height="75" rx="6" fill="url(#screenGrad)" stroke="#334155" strokeWidth="2" />
                <rect x="95" y="245" width="110" height="60" rx="4" fill="#0f172a" />
                <rect x="102" y="253" width="50" height="3" rx="1.5" fill="#3b82f6" opacity="0.8" />
                <rect x="102" y="260" width="70" height="3" rx="1.5" fill="#8b5cf6" opacity="0.7" />
                <rect x="108" y="267" width="40" height="3" rx="1.5" fill="#06b6d4" opacity="0.8" />
                <rect x="108" y="274" width="55" height="3" rx="1.5" fill="#10b981" opacity="0.7" />
                <rect x="102" y="281" width="35" height="3" rx="1.5" fill="#f59e0b" opacity="0.8" />
                <rect x="102" y="288" width="60" height="3" rx="1.5" fill="#3b82f6" opacity="0.6" />
                <rect x="165" y="253" width="2" height="10" rx="1" fill="#60a5fa" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite" />
                </rect>
                <rect x="80" y="315" width="140" height="8" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <ellipse cx="100" cy="255" rx="14" ry="30" fill="#4f46e5" transform="rotate(-15 100 255)" />
                <ellipse cx="200" cy="255" rx="14" ry="30" fill="#4f46e5" transform="rotate(15 200 255)" />
                <ellipse cx="93" cy="278" rx="10" ry="8" fill="#fcd34d" transform="rotate(-15 93 278)" />
                <ellipse cx="207" cy="278" rx="10" ry="8" fill="#fcd34d" transform="rotate(15 207 278)" />
                <g filter="url(#glow)">
                  <circle cx="30" cy="60" r="8" fill="#61dafb" opacity="0.9" />
                  <ellipse cx="30" cy="60" rx="20" ry="8" stroke="#61dafb" strokeWidth="1.5" fill="none" opacity="0.7" />
                  <ellipse cx="30" cy="60" rx="20" ry="8" stroke="#61dafb" strokeWidth="1.5" fill="none" opacity="0.7" transform="rotate(60 30 60)" />
                  <ellipse cx="30" cy="60" rx="20" ry="8" stroke="#61dafb" strokeWidth="1.5" fill="none" opacity="0.7" transform="rotate(120 30 60)" />
                  <animateTransform attributeName="transform" type="rotate" from="0 30 60" to="360 30 60" dur="8s" repeatCount="indefinite" />
                </g>
              </svg>
            </div>

            {/* Badges - hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block">
            {/* TOP CENTER - JavaScript (yellow) */}
            <div style={{ position:'absolute', top:'-14px', left:'50%', transform:'translateX(-50%)', animationDuration:'3.2s' }}
              className="z-20 animate-float bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              JavaScript
            </div>
            {/* TOP RIGHT - React.js (cyan) */}
            <div style={{ position:'absolute', top:'-8px', right:'-58px', animationDuration:'3.6s', animationDelay:'0.3s' }}
              className="z-20 animate-float bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              React.js
            </div>
            {/* RIGHT CENTER - Node.js (green) */}
            <div style={{ position:'absolute', top:'42%', right:'-56px', transform:'translateY(-50%)', animationDuration:'4s', animationDelay:'0.6s' }}
              className="z-20 animate-float bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              Node.js
            </div>
            {/* BOTTOM RIGHT - Express.js (dark) */}
            <div style={{ position:'absolute', bottom:'5px', right:'-58px', animationDuration:'3.8s', animationDelay:'0.9s' }}
              className="z-20 animate-float bg-gradient-to-r from-slate-600 to-gray-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              Express.js
            </div>
            {/* BOTTOM CENTER - MongoDB (teal) */}
            <div style={{ position:'absolute', bottom:'-14px', left:'50%', transform:'translateX(-50%)', animationDuration:'3.4s', animationDelay:'1.2s' }}
              className="z-20 animate-float bg-gradient-to-r from-green-600 to-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              MongoDB
            </div>
            {/* BOTTOM LEFT - Next.js (black) */}
            <div style={{ position:'absolute', bottom:'5px', left:'-50px', animationDuration:'4.2s', animationDelay:'1.5s' }}
              className="z-20 animate-float bg-gradient-to-r from-gray-800 to-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              Next.js
            </div>
            {/* LEFT CENTER - TypeScript (blue) */}
            <div style={{ position:'absolute', top:'42%', left:'-60px', transform:'translateY(-50%)', animationDuration:'3.9s', animationDelay:'1.8s' }}
              className="z-20 animate-float bg-gradient-to-r from-blue-600 to-blue-800 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              TypeScript
            </div>
            {/* TOP LEFT - 2+ Yrs Exp (purple) */}
            <div style={{ position:'absolute', top:'-8px', left:'-56px', animationDuration:'4.5s', animationDelay:'2.1s' }}
              className="z-20 animate-float bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap">
              2+ Yrs Exp
            </div>
            </div>

            {/* Mobile badges - shown below avatar as grid */}
            <div className="lg:hidden absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 w-72">
              {['JavaScript','React.js','Node.js','TypeScript','MongoDB','Next.js'].map((t,i) => (
                <span key={t} className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                  style={{ background: ['#ca8a04','#0891b2','#16a34a','#1d4ed8','#0d9488','#111827'][i] }}>
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 animate-bounce">
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
