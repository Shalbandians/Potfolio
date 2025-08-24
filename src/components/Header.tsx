import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, Award, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Contact', href: 'mailto:muhammadrizwanramzan300@gmail.com', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white">
              MR
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/90 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="inline-block w-4 h-4 mr-3" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;