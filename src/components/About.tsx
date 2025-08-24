
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/80 pointer-events-none"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer passionate about building scalable applications,
              crafting beautiful UIs, and solving real-world problems.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Work + Academic */}
          <div className="flex flex-col space-y-16">

            {/* LEFT SIDE → Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Work Experience
              </h3>
              <div className="relative border-l border-slate-600 ml-4 pl-6 space-y-10">

                {/* SL2 Studio */}
                <div className="relative">
                  <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-900"></span>
                  <div className="bg-slate-800/60 p-6 rounded-xl shadow-md border border-slate-700 hover:border-blue-400 transition">
                    <h4 className="text-lg font-bold text-blue-400">SL2 Studio</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Associate Software Engineer • Aug 2023 – Jan 2025
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      <li>Developed & deployed MERN applications.</li>
                      <li>Built REST APIs & Webhooks (WhatsApp integration).</li>
                      <li>Designed responsive UIs with React, Redux, Tailwind.</li>
                      <li>Deployed on Vercel, VPS & AWS (CI/CD, domain setup).</li>
                      <li>Collaborated in Agile teams with Git & unit testing.</li>
                    </ul>
                  </div>
                </div>

                {/* Byte Craft */}
                <div className="relative">
                  <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-purple-500 border-4 border-slate-900"></span>
                  <div className="bg-slate-800/60 p-6 rounded-xl shadow-md border border-slate-700 hover:border-purple-400 transition">
                    <h4 className="text-lg font-bold text-purple-400">Byte Craft</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Associate Software Engineer • Jan 2025 – Present
                    </p>
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      <li>Developed full-stack MERN applications.</li>
                      <li>Integrated APIs, Webhooks & third-party services.</li>
                      <li>Built UIs with React.js, Redux, Tailwind & Bootstrap.</li>
                      <li>Deployed apps on Vercel, VPS & AWS environments.</li>
                      <li>Applied Agile, Git & unit testing for CI/CD delivery.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Section */}
            {/* Academic Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Academic
              </h3>

              <div className="bg-gradient-to-r from-slate-800/70 to-slate-900/60 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-pink-400 transition">
                <h4 className="text-lg font-bold text-pink-400">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-300">
                  National College of Business Administration
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-400">2021 – 2025</span>
                  <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: 3.24
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
