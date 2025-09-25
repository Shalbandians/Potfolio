import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github, Code } from 'lucide-react';
import scan from '../image/scan.png';
import eshop from '../image/eshop.png';
import ume from '../image/ume.png';
import Mh from '../image/Mh.png';
import admin from '../image/admin.png';
import vendor from '../image/vendor.png';
const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Scan2Alert - Vehicle Management System',
      description: 'Designed and deployed a WhatsApp-based platform enabling users to register vehicles, submit complaints, and make secure payments via Razor pay.Integrated Razorpay Payment Links API with WhatsAppCloud API to handle payments directly in chat, including real-time payment status tracking. Implemented automated workflows to verify vehicle data, log complaints (issue & location), and instantly notify both vehicle owners and complainants.Leveraged MongoDB for real-time data storage and retrieval, ensuring high performance andreliability.Configured WhatsApp Webhooks for seamless two-way communication and instant data synchronization.Deployed on a Linux VPS using Nginx, SSL, and a custom domain for secure, production-read hoisti.',
      image: scan,
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Express', 'Webhooks'],
      liveUrl: 'https://scan2alert.in/',
      featured: true
    },
    {
      id: 2,
      title: 'Admin Dashboard',
      description: 'Built a full-stack MERN dashboard to manage vehicles, complaints, and payments with a sleek, responsive UI. Integrated WhatsApp Cloud API for instant notifications and Razorpay for seamless payment tracking.Implemented secure login, real-time updates, and dynamic analytics, optimizing React components with useMemo/useCallback.Managed backend & database with Node.js, Express, and MongoDB for smooth data flow and scalability.',
      image: admin,
      technologies: ['React', 'MongoDB Atlas', 'Socket.io', 'Express', 'Postman', 'Vercel'],
      liveUrl: 'https://admin-dashboard-three-sooty-11.vercel.app/',
      githubUrl: 'https://github.com/Shalbandians/Multi-Vender',
      featured: false
    },{
      id: 2,
      title: 'Vendor Dashboard',
      description: 'Built a full-stack MERN dashboard enabling vendors to manage products, orders, and payments in one place. Implemented role-based authentication (admin & vendor) with JWT for secure access.Designed a modern, responsive UI with React + Tailwind CSS, optimized using Context API, useMemo.Backend built with Node.js & Express, storing vendor/product/order data in MongoDB.Deployed on Vercel, ensuring fast, reliable access for end users. ',
      image: vendor,
      technologies: ['React', 'MongoDB Atlas', 'Socket.io', 'Express', 'Postman','Vercel'],
      liveUrl: 'https://vendor-dashboard-nu.vercel.app/',
      githubUrl: 'https://github.com/Shalbandians/Multi-Vender',
      featured: false
    },
    {
      id: 2,
      title: 'Multi-Vender E-commerce Store',
      description: 'Developed secure user authentication with JWT and integrated multiple payment options (Stripe,PayPal, COD), boosting transaction volume by 50% Designed comprehensive order and seller management features, including real-time chat viaSocket.IO and timed product events, increasing seller registrations by 35% and customer engagement by 40%. Created admin tools for efficient monitoring and control of products, events, and seller activities,improving admin productivity by 20%. Implemented coupon management and streamlined seller fund withdrawals with admin approval,enhancing promotional success and reducing withdrawal processing time by 30%.',
      image: eshop,
      technologies: ['React', 'MongoDB Atlas', 'Socket.io', 'Express', 'Postman'],
      liveUrl: 'https://multi-vender-b42z.vercel.app/',
      githubUrl: 'https://github.com/Shalbandians/Multi-Vender',
      featured: false
    },
    {
      id: 3,
      title: 'UME Health Referral Portal',
      description: 'Designed and implemented a secure registration system with email verification and automated notifications. Integrated a PDF generation module for efficient referral file distribution, enhancing workflow efficiency by 40%. Developed an admin panel for streamlined appointment scheduling,improving scheduling accuracy by 30%.',
      image: ume,
      technologies: ['React', 'MongoDB Atlas', 'Express', 'Postman', 'Node.js',],
      liveUrl: 'https://ume-health.vercel.app/',

      featured: false
    },
    {
      id: 4,
      title: 'Moving House',
      description: 'Tech Coordinator at Home-Shift Pro Enhanced user experience by integrating state code input for more efficient cleaning and moving services, and implemented secure email verification, improving registration accuracy by 30% and reducing processing time by 20%.',
      image: Mh,
      technologies: ['React', 'TailwindCss', 'Material-UI', 'Email-js', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://moving-house.vercel.app/',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-slate-700/30 rounded-2xl border border-slate-600/30 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 ${project.featured ? 'md:col-span-2' : ''
                  } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>

                    </div>
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