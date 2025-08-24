import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Award, ExternalLink, X } from 'lucide-react';
import docker from '../image/docker.png'; // Ensure you have a profile image in this path
import udemyModern from '../image/UdemyModern.png';
import udemy from '../image/udemy.png';
import node from '../image/node.png';
import aws from '../image/aws.png';

const Certifications = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: 'Developing Back–End Apps with Node.js and Express IBM',
      issuer: 'IBM',
      image: node,
      skills: [
        'Web Servers',
        'Server Side',
        'Web Applications',
        'JavaScript',
        'Authentications',
        'Node.js',
        'Back-End Web Development',
        'Computer Science',
        'Cloud Applications',
        'RESTful API',
        'Package and Software Management',
        'JSON',
      ],
      link: 'https://www.coursera.org/account/accomplishments/verify/EELTBLQXY04N', // 👈 yahan apna certificate link dalna
    },
    {
      id: 2,
      title: 'Mastering Loops: Modern JavaScript Techniques',
      issuer: 'Udemy',
      image: udemyModern,
      description:
        'Complete full-stack development certification including frontend, backend, and database technologies.',
      skills: ['Loop', 'JavaScript'],
      link: 'https://www.udemy.com/certificate/UC-b6d748e1-a9be-47dc-a992-1e2da9ec34e0/?utm_campaign=email&utm_medium=email&',
    },
    {
      id: 3,
      title: 'Building Blog using MERN Stack Udemy',
      issuer: 'Udemy',

      image: udemy,

      skills: ['MongoDb', 'Node js', 'Express js', 'React js', 'JavaScript'],
      link: 'https://www.udemy.com/certificate/UC-26b8f0b0-dbf2-4c4f-a72d-b1ad2c515b20/',
    },
    {
      id: 4,
      title: 'Docker Certified Associate (DCA)',
      issuer: 'Learnkarts',
      image: docker,
      skills: ['Docker Fundamentals', 'Getting Started with Docker', 'Advanced Docker'],
      link: 'https://coursera.org/share/bf3adefbf3d9596089a0d7e726bd5795',
    },
    {
      id: 5,
      title: 'Agile AWS Academy Cloud Architecting',
      issuer: 'Amazon Web Services',
      image: aws,
      skills: ['Architecting Solutions On AWS', 'AWS Cloud Best Practices', 'Building Infrastructure On AWS'],
      link: 'https://www.credly.com/badges/362c7f82-47e6-4c91-8aea-60d7ef43a08d/linked_in?t=st6isu',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Professional certifications that demonstrate my commitment to
              continuous learning and expertise
            </p>
          </div>

          {/* Grid of certifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`group bg-slate-700/30 rounded-xl border border-slate-600/30 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-4">{cert.date}</p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="bg-gray-600/50 text-gray-300 px-2 py-1 rounded-full text-xs">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-800 rounded-2xl border border-slate-600/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-6 text-gray-400">
                <span>Issued by: {selectedCert.issuer}</span>
                <span>•</span>
                <span>{selectedCert.date}</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedCert.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-white font-semibold">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link button */}
              <div className="flex gap-4 mt-8">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
