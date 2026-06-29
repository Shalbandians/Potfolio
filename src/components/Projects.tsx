import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Code } from 'lucide-react';
import { useTheme } from '../App';
import scan from '../image/scan.png';
import eshop from '../image/eshop.png';
import ume from '../image/ume.png';
import Mh from '../image/Mh.png';
import admin from '../image/admin.png';
import vendor from '../image/vendor.png';
import gencyb from '../image/gencyb.png';
import scrum from '../image/scrum.jpeg';
import verisaya from '../image/verisaya.png';
const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { dark } = useTheme();

  const sec = dark ? 'bg-[#02040a]' : 'bg-[#f0f4ff]';
  const heading = dark ? 'text-white' : 'text-gray-900';
  const sub = dark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = dark ? 'bg-white/5 border-white/8 backdrop-blur-sm hover:border-indigo-500/40' : 'bg-white border-gray-200 shadow-sm hover:border-indigo-400';
  const desc = dark ? 'text-gray-300' : 'text-gray-600';
  const tagBg = dark ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border-indigo-200';

  const projects = [
    {
      id: 1, title: 'Verisaya – Enterprise SaaS Workforce Management Platform',
      description: 'Designed and developed a scalable enterprise-grade SaaS platform for workforce management, training coordination, attendance tracking, subscription management, and advanced organizational reporting.',
      bullets: [
        'Architected a multi-tenant SaaS system supporting Super Admin, Admin, Coordinator, Trainer, and Employee roles with secure role-based access control',
        'Implemented subscription-based organizational management with isolated workspaces and permission handling',
        'Developed a QR code-based attendance system with secure employee check-in/check-out workflows and automated attendance duration calculations',
        'Built a complete training management workflow where Admins and Coordinators can create sessions, assign trainers, and manage employee participation',
        'Enforced department-level and role-based session restrictions to ensure users can only access authorized sessions',
        'Developed advanced reporting and analytics modules including attendance reports, trainer performance, department insights, top-performing employees, and session analytics',
        'Implemented bulk import functionality for onboarding employees and coordinators efficiently',
        'Integrated automated email workflows with temporary password generation for newly created users',
        'Configured and managed complete CI/CD pipelines using GitHub Actions for streamlined deployment and delivery',
        'Deployed backend on AWS EC2, frontend on AWS S3 with Nginx reverse proxy and Linux server configuration',
      ],
      image: verisaya,
      technologies: ['Node.js', 'React.js', 'MongoDB', 'AWS EC2', 'AWS S3', 'GitHub Actions', 'Docker', 'Nginx', 'Linux', 'Express.js', 'CI/CD'],
      liveUrl: 'https://www.verisaya.com/', featured: true
    },
    {
      id: 2, title: 'GenCyb SaaS Platform Deployment',
      description: 'Implemented CI/CD pipelines using GitHub Actions to automate the deployment of a React frontend and Node.js backend to a VPS server. Configured Docker-based deployment to ensure consistent environments and smooth application updates.',
      image: gencyb,
      technologies: ['GitHub Actions', 'CI/CD', 'Docker', 'React', 'Node.js', 'VPS', 'Prisma ORM', 'PostgreSQL'],
      liveUrl: 'https://app.gen-cyb.com/', featured: false
    },
    {
      id: 3, title: 'Scrum Coffee Shop',
      description: 'Full-stack Coffee Shop Management System supporting 100+ users with JWT auth. Integrated Google Wallet and Apple Wallet for digital loyalty cards. Built QR code workflow improving checkout efficiency by ~40%.',
      image: scrum,
      technologies: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT', 'Firebase', 'Google Wallet', 'Apple Wallet'],
      liveUrl: 'https://scrum-backend.vercel.app/', featured: false
    },
    {
      id: 4, title: 'Scan2Alert - VMS Bot',
      description: 'WhatsApp-based platform for vehicle registration, complaints, and Razorpay payments. Integrated WhatsApp Cloud API with real-time payment tracking and automated workflows.',
      image: scan,
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Express', 'Webhooks'],
      liveUrl: 'https://scan2alert.in/', featured: false
    },
    {
      id: 5, title: 'Admin Dashboard',
      description: 'Full-stack MERN dashboard managing vehicles, complaints, and payments. Integrated WhatsApp Cloud API and Razorpay with real-time updates and dynamic analytics.',
      image: admin,
      technologies: ['React', 'MongoDB Atlas', 'Socket.io', 'Express', 'Vercel'],
      liveUrl: 'https://admin-dashboard-three-sooty-11.vercel.app/', featured: false
    },
    {
      id: 6, title: 'Vendor Dashboard',
      description: 'MERN dashboard for vendors to manage products, orders, and payments. Role-based JWT auth, responsive UI with React + Tailwind, deployed on Vercel.',
      image: vendor,
      technologies: ['React', 'MongoDB Atlas', 'Socket.io', 'Express', 'Vercel'],
      liveUrl: 'https://vendor-dashboard-nu.vercel.app/', featured: false
    },
    {
      id: 7, title: 'Multi-Vendor E-commerce Store',
      description: 'Secure JWT auth with Stripe/PayPal/COD payments boosting transactions by 50%. Real-time chat via Socket.IO, coupon management, and seller fund withdrawals.',
      image: eshop,
      technologies: ['React', 'MongoDB Atlas', 'Socket.io', 'Express', 'Stripe'],
      liveUrl: 'https://multi-vender-b42z.vercel.app/', featured: false
    },
    {
      id: 8, title: 'UME Health Referral Portal',
      description: 'Secure registration with email verification and automated notifications. PDF generation for referral files and admin panel for appointment scheduling.',
      image: ume,
      technologies: ['React', 'MongoDB Atlas', 'Express', 'Node.js'],
      liveUrl: 'https://ume-health.vercel.app/', featured: false
    },
    {
      id: 9, title: 'Moving House',
      description: 'Home-Shift Pro platform with state code input for cleaning/moving services. Secure email verification improving registration accuracy by 30%.',
      image: Mh,
      technologies: ['React', 'TailwindCSS', 'Material-UI', 'Email-js', 'Node.js', 'MongoDB'],
      liveUrl: 'https://moving-house.vercel.app/', featured: false
    }
  ];

  return (
    <section id="projects" className={`py-20 lg:py-28 relative overflow-hidden transition-colors duration-500 ${sec}`}>
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none ${dark ? 'bg-purple-600/8' : 'bg-purple-300/15'}`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="text-center mb-16">
            <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 ${dark ? 'text-indigo-400' : 'text-indigo-600'}`}>Portfolio</span>
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${heading}`}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
            <p className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base ${sub}`}>
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id}
                className={`group rounded-2xl border overflow-hidden transition-all duration-400 hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] card-3d ${cardBg} ${project.featured ? 'md:col-span-2' : ''} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  <div className="relative overflow-hidden min-h-[220px]">
                    <img src={project.image} alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      style={{ minHeight: '220px', maxHeight: '400px' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className={`font-bold text-lg sm:text-xl mb-3 group-hover:text-indigo-400 transition-colors ${heading}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-3 ${'bullets' in project ? '' : 'mb-5 line-clamp-4'} ${desc}`}>
                      {project.description}
                    </p>
                    {'bullets' in project && (
                      <ul className={`text-sm leading-relaxed mb-5 space-y-1 list-none ${desc}`}>
                        {(project as any).bullets.map((b: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span key={tech} className={`px-2.5 py-1 rounded-lg text-xs border font-medium ${tagBg}`}>{tech}</span>
                      ))}
                    </div>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5">
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
