import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTheme } from '../App';
import { html, css, javascript, react, redux, node, mongodb, express, tailwind, git, chakra } from "./db/Icon";

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { dark } = useTheme();

  const sec = dark ? 'bg-[#02040a]' : 'bg-[#f0f4ff]';
  const sub = dark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = dark ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-indigo-500/40 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)]' : 'bg-white border-gray-200 shadow-sm hover:border-indigo-400 hover:shadow-indigo-100';
  const skillName = dark ? 'text-white group-hover:text-indigo-400' : 'text-gray-800 group-hover:text-indigo-600';
  const dotActive = dark ? 'bg-indigo-400' : 'bg-indigo-500';
  const dotInactive = dark ? 'bg-slate-600' : 'bg-gray-200';
  const ringBorder = dark ? 'border-slate-600 group-hover:border-indigo-400' : 'border-gray-200 group-hover:border-indigo-400';
  const listCard = dark ? 'bg-white/5 border-white/10 hover:border-indigo-500/40 hover:bg-white/8' : 'bg-white border-gray-200 shadow-sm hover:border-indigo-400';
  const listText = dark ? 'text-gray-200' : 'text-gray-700';

  const coreSkills = [javascript, react, node, mongodb, express];

  const allSkills = [
    git, tailwind, chakra, html, css,
    { title: "Prisma ORM", img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMjguMDAxIDIzLjk5OTlMMjguMDAxIDE5OS45OTlMMTI4LjAwMSAyMzEuOTk5TDIyOC4wMDEgMTk5Ljk5OUwxMjguMDAxIDIzLjk5OTlaIiBmaWxsPSIjMkQzNzQ4Ii8+CjxwYXRoIGQ9Ik0xMjguMDAxIDIzLjk5OTlMMjguMDAxIDE5OS45OTlMMTI4LjAwMSAyMzEuOTk5VjIzLjk5OTlaIiBmaWxsPSIjMEMzNDRCIi8+CjxwYXRoIGQ9Ik0xMjguMDAxIDIzLjk5OTlMMjI4LjAwMSAxOTkuOTk5TDEyOC4wMDEgMjMxLjk5OVYyMy45OTk5WiIgZmlsbD0iIzE2NjE3QSIvPgo8L3N2Zz4K" },
    { title: "PostgreSQL", img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
    { title: "Socket.io", img: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
    { title: "Payment Integration", img: "https://cdn-icons-png.flaticon.com/512/891/891407.png" },
    { title: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
    { title: "Rest APIs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3pChdXqdWy5AeCUpf_zbsH3x4VdtLA0RIA&s" },
    { title: "Docker", img: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
    { title: "Webhooks", img: "https://cdn-icons-png.flaticon.com/512/2798/2798007.png" },
    { title: "VPS Hosting", img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { title: "AWS", img: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },
    { title: "Linux (Ubuntu)", img: "https://cdn-icons-png.flaticon.com/512/518/518713.png" },
    { title: "Material UI", img: "https://mui.com/static/logo.png" },
    { title: "Unit Testing", img: "https://c8.alamy.com/comp/2AP7FJH/unit-testing-concept-icon-software-development-stage-idea-thin-line-illustration-application-perfomance-verification-java-source-code-it-project-2AP7FJH.jpg" },
    { title: "Redux", img: "https://cdn.iconscout.com/icon/free/png-256/free-redux-283024.png" },
    { title: "Bootstrap 5", img: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" },
    { title: "Next.js", img: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { title: "TypeScript", img: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },

  ];

  return (
    <section id="skills" className={`py-20 lg:py-28 relative overflow-hidden transition-colors duration-500 ${sec}`}>
      <div className="absolute inset-0 -z-10">
        <div className={`absolute w-72 h-72 blur-3xl rounded-full top-10 left-20 animate-pulse ${dark ? 'bg-indigo-500/10' : 'bg-indigo-300/20'}`} />
        <div className={`absolute w-80 h-80 blur-3xl rounded-full bottom-10 right-20 animate-pulse ${dark ? 'bg-purple-500/10' : 'bg-purple-300/15'}`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <div className="text-center mb-16">
            <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-indigo-400' : 'text-indigo-600'}`}>Arsenal</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 shimmer-text">Technical Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            <p className={`mt-4 max-w-2xl mx-auto ${sub}`}>Technologies & tools I use to craft scalable, modern web apps 🚀</p>
          </div>

          {/* Core Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {coreSkills.map((skill, index) => (
              <div key={skill.title}
                className={`relative group p-6 rounded-2xl border hover:scale-105 transition-all duration-400 card-3d ${cardBg}`}
                style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" />
                  <div className={`relative w-24 h-24 rounded-full flex items-center justify-center border-4 transition-all duration-500 shadow-inner ${ringBorder}`}>
                    <img src={skill.img} alt={skill.title} className="w-11 h-11 object-contain drop-shadow-lg" />
                  </div>
                </div>
                <h3 className={`text-center font-semibold text-base transition-colors ${skillName}`}>{skill.title}</h3>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i < 4 ? dotActive : dotInactive}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All Skills */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allSkills.map((skill, i) => (
              <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 card-3d ${listCard}`}>
                <img src={skill.img} alt={skill.title} className="w-6 h-6 object-contain flex-shrink-0" />
                <span className={`font-medium text-sm ${listText}`}>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
