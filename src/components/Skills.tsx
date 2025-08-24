
import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// 👇 yahan aapke saare skills data import ho rahe hain
import {
  html,
  css,
  javascript,
  react,
  redux,
  node,
  mongodb,
  express,
  tailwind,
  git,
  chakra,
} from "./db/Icon";

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Core Skills (Circular UI)
  const coreSkills = [
    javascript,
    react,
    node,
    mongodb,
    express,
  ];

  // Other Skills (List UI) - aapki given list se map kiya gaya
  const allSkills = [
    git,
    tailwind,
    chakra,
    html,
    css,
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
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* glowing background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-purple-500/20 blur-3xl rounded-full bottom-10 right-20 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Technologies & tools I use to craft scalable, modern web apps 🚀
            </p>
          </div>

          {/* Core Circular Progress with Images */}
          {/* Core Circular Skills with Glow Effect */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
            {coreSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glowing Circular Frame */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500"></div>

                  <div className="relative w-28 h-28 rounded-full flex items-center justify-center border-4 border-slate-600 group-hover:border-blue-400 transition-all duration-500 shadow-inner">
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="w-12 h-12 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                  {skill.title}
                </h3>

                {/* Mastery Dots */}
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i < 4 ? "bg-blue-400" : "bg-slate-600 group-hover:bg-blue-300"
                        }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>


          {/* All Other Skills (List Style with Icon) */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allSkills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-800/40 hover:bg-slate-700/60 p-4 rounded-lg border border-slate-600/30 hover:border-blue-500/40 transition-all duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-gray-200 font-medium">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
