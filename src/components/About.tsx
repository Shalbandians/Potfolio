import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, MapPin, Calendar, Briefcase } from 'lucide-react';
import { useTheme } from '../App';

const experiences = [
  {
    company: 'Byte Craft',
    role: 'Associate Software Engineer',
    period: 'Jan 2025 – Present',
    duration: '6 mos',
    location: 'Pakistan · Remote',
    type: 'Full-time',
    accentBg: 'from-indigo-600 to-violet-600',
    accentColor: '#6366f1',
    badgeDark: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
    badgeLight: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    initials: 'BC',
    current: true,
    points: [
      'Developed full-stack MERN applications serving production users.',
      'Integrated REST APIs, Webhooks & third-party services.',
      'Built responsive UIs with React.js, Redux, Tailwind & Bootstrap.',
      'Deployed apps on Vercel, VPS & AWS with CI/CD pipelines.',
      'Applied Agile methodology with Git & unit testing.',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Redux'],
  },
  {
    company: 'SL2 Studio',
    role: 'Associate Software Engineer',
    period: 'Aug 2023 – Jan 2025',
    duration: '1 yr 5 mos',
    location: 'Pakistan · On-site',
    type: 'Full-time',
    accentBg: 'from-purple-600 to-pink-600',
    accentColor: '#a855f7',
    badgeDark: 'bg-purple-500/10 text-purple-300 border-purple-500/25',
    badgeLight: 'bg-purple-50 text-purple-700 border-purple-200',
    initials: 'SL',
    current: false,
    points: [
      'Developed & deployed production MERN applications.',
      'Built REST APIs & Webhooks including WhatsApp Cloud integration.',
      'Designed responsive UIs with React, Redux, Tailwind CSS.',
      'Deployed on Vercel, VPS & AWS with domain & SSL setup.',
      'Collaborated in Agile teams with Git workflow & unit testing.',
    ],
    tags: ['MERN', 'REST API', 'Webhooks', 'Vercel', 'CI/CD', 'Tailwind'],
  },
];

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { dark } = useTheme();

  const sec = dark ? 'bg-[#02040a]' : 'bg-[#f0f4ff]';
  const heading = dark ? 'text-white' : 'text-gray-900';
  const sub = dark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = dark ? 'bg-[#0a0d1a] border-white/8' : 'bg-white border-gray-200 shadow-md';
  const pointText = dark ? 'text-gray-300' : 'text-gray-600';
  const metaText = dark ? 'text-gray-500' : 'text-gray-400';
  const tagBg = dark
    ? 'bg-white/5 text-gray-400 border-white/8 hover:border-indigo-500/40 hover:text-indigo-300'
    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-indigo-400 hover:text-indigo-600';
  const divider = dark ? 'bg-white/5' : 'bg-gray-100';
  const dotRing = dark ? 'ring-[#02040a]' : 'ring-[#f0f4ff]';
  const centerLine = dark
    ? 'bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent'
    : 'bg-gradient-to-b from-indigo-400 via-purple-400 to-transparent';
  const eduBg = dark
    ? 'bg-[#0a0d1a] border-white/8 hover:border-pink-500/30'
    : 'bg-white border-gray-200 shadow-md hover:border-pink-400';

  return (
    <section id="about" className={`py-20 lg:py-28 relative overflow-hidden transition-colors duration-500 ${sec}`}>
      <div className={`absolute top-0 left-1/2 w-[600px] h-[400px] rounded-full blur-[140px] -translate-x-1/2 pointer-events-none ${dark ? 'bg-indigo-600/6' : 'bg-indigo-300/20'}`} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-20">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Heading */}
          <div id="experience" className="text-center mb-16">
            <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              My Journey
            </span>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 ${heading}`}>
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className={`text-sm sm:text-base max-w-xl mx-auto ${sub}`}>
              Building production-grade applications and shipping real products that users love.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-5 rounded-full" />
          </div>

          {/* ── Left / Right Timeline ── */}
          <div className="relative max-w-5xl mx-auto">

            {/* Center vertical line — hidden on mobile */}
            <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 ${centerLine}`} />

            <div className="space-y-12">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0;
                const badge = dark ? exp.badgeDark : exp.badgeLight;

                return (
                  <div key={i}
                    className={`relative flex flex-col md:flex-row items-center gap-0 transition-all duration-700
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${i * 200}ms` }}>

                    {/* ── LEFT CARD (even) or spacer (odd) ── */}
                    <div className={`w-full md:w-1/2 md:pr-10 ${isLeft ? 'block' : 'hidden md:block'}`}>
                      {isLeft ? (
                        <div className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_48px_rgba(99,102,241,0.12)] card-3d ${cardBg}`}>
                          <div className={`h-1 w-full bg-gradient-to-r ${exp.accentBg}`} />
                          <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.accentBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                <span className="text-white font-extrabold text-base">{exp.initials}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                  <h4 className={`text-base font-bold ${heading}`}>{exp.company}</h4>
                                  {exp.current && (
                                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${badge}`}>
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                      Current
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm font-semibold" style={{ color: exp.accentColor }}>{exp.role}</p>
                              </div>
                            </div>

                            <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs mb-4 ${metaText}`}>
                              <span className="flex items-center gap-1"><Calendar size={10} /> {exp.period} · {exp.duration}</span>
                              <span className="flex items-center gap-1"><MapPin size={10} /> {exp.location}</span>
                              <span className="flex items-center gap-1"><Briefcase size={10} /> {exp.type}</span>
                            </div>

                            <div className={`h-px mb-4 ${divider}`} />

                            <ul className="space-y-2 mb-4">
                              {exp.points.map((pt, j) => (
                                <li key={j} className={`flex items-start gap-2.5 text-xs ${pointText}`}>
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accentColor }} />
                                  {pt}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5">
                              {exp.tags.map(tag => (
                                <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all duration-200 ${tagBg}`}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* ── Center dot ── */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.accentBg} ring-4 ${dotRing} shadow-lg`} />
                    </div>

                    {/* ── RIGHT CARD (odd) or spacer (even) ── */}
                    <div className={`w-full md:w-1/2 md:pl-10 ${!isLeft ? 'block' : 'hidden md:block'}`}>
                      {!isLeft ? (
                        <div className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_48px_rgba(168,85,247,0.12)] card-3d ${cardBg}`}>
                          <div className={`h-1 w-full bg-gradient-to-r ${exp.accentBg}`} />
                          <div className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.accentBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                <span className="text-white font-extrabold text-base">{exp.initials}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                  <h4 className={`text-base font-bold ${heading}`}>{exp.company}</h4>
                                  {exp.current && (
                                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${badge}`}>
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                      Current
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm font-semibold" style={{ color: exp.accentColor }}>{exp.role}</p>
                              </div>
                            </div>

                            <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs mb-4 ${metaText}`}>
                              <span className="flex items-center gap-1"><Calendar size={10} /> {exp.period} · {exp.duration}</span>
                              <span className="flex items-center gap-1"><MapPin size={10} /> {exp.location}</span>
                              <span className="flex items-center gap-1"><Briefcase size={10} /> {exp.type}</span>
                            </div>

                            <div className={`h-px mb-4 ${divider}`} />

                            <ul className="space-y-2 mb-4">
                              {exp.points.map((pt, j) => (
                                <li key={j} className={`flex items-start gap-2.5 text-xs ${pointText}`}>
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accentColor }} />
                                  {pt}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5">
                              {exp.tags.map(tag => (
                                <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all duration-200 ${tagBg}`}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Mobile: full width card */}
                    <div className="md:hidden w-full">
                      <div className={`rounded-2xl border overflow-hidden transition-all duration-300 card-3d ${cardBg}`}>
                        <div className={`h-1 w-full bg-gradient-to-r ${exp.accentBg}`} />
                        <div className="p-5">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.accentBg} flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white font-extrabold text-sm">{exp.initials}</span>
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                <h4 className={`text-base font-bold ${heading}`}>{exp.company}</h4>
                                {exp.current && (
                                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${dark ? exp.badgeDark : exp.badgeLight}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className="text-sm font-semibold" style={{ color: exp.accentColor }}>{exp.role}</p>
                            </div>
                          </div>
                          <div className={`flex flex-wrap gap-x-3 gap-y-1 text-xs mb-4 ${metaText}`}>
                            <span className="flex items-center gap-1"><Calendar size={10} /> {exp.period}</span>
                            <span className="flex items-center gap-1"><MapPin size={10} /> {exp.location}</span>
                          </div>
                          <div className={`h-px mb-4 ${divider}`} />
                          <ul className="space-y-2 mb-4">
                            {exp.points.map((pt, j) => (
                              <li key={j} className={`flex items-start gap-2.5 text-xs ${pointText}`}>
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accentColor }} />
                                {pt}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map(tag => (
                              <span key={tag} className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${tagBg}`}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div id="education" className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-pink-400' : 'text-pink-600'}`}>Education</span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${heading}`}>
                Academic <span className="text-gradient">Background</span>
              </h3>
            </div>

            <div className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(236,72,153,0.1)] ${eduBg}`}>
              <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-rose-500" />
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className={`text-base sm:text-lg font-bold mb-1 ${heading}`}>
                        Bachelor of Science in Computer Science
                      </h4>
                      <p className={`text-sm font-semibold mb-2 ${dark ? 'text-pink-300' : 'text-pink-600'}`}>
                        National College of Business Administration
                      </p>
                      <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs ${metaText}`}>
                        <span className="flex items-center gap-1.5"><Calendar size={11} /> 2021 – 2025</span>
                        <span className="flex items-center gap-1.5"><MapPin size={11} /> Pakistan</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-4 py-2.5 rounded-xl text-sm font-bold border ${dark ? 'bg-pink-500/10 text-pink-300 border-pink-500/20' : 'bg-pink-50 text-pink-700 border-pink-200'}`}>
                    CGPA: 3.24
                  </div>
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
