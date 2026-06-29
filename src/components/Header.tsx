import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';
import logo from '../image/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const nav = [
    { name: 'About',          href: '#about' },
    { name: 'Skills',         href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects',       href: '#projects' },
    { name: 'Contact',        href: '#contact' },
  ];

  const base = scrolled
    ? dark
      ? 'bg-[#02040a]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_40px_rgba(99,102,241,0.08)]'
      : 'bg-white/85 backdrop-blur-xl border-b border-gray-200 shadow-sm'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${base}`}>
      <nav className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Logo" className="h-12 rounded-full w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {nav.map(item => (
              <a key={item.name} href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-indigo-500 group-hover:w-4/5 transition-all duration-300" />
              </a>
            ))}

            {/* Theme toggle */}
            <button onClick={toggle}
              className={`ml-3 w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${dark ? 'border-white/10 text-yellow-400 hover:bg-white/5' : 'border-gray-200 text-indigo-600 hover:bg-indigo-50'}`}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a href="#contact"
              className="ml-3 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5">
              Hire Me
            </a>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggle}
              className={`w-9 h-9 flex items-center justify-center rounded-xl border transition-colors ${dark ? 'border-white/10 text-yellow-400' : 'border-gray-200 text-indigo-600'}`}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${dark ? 'text-gray-400 border-white/5' : 'text-gray-600 border-gray-200'}`}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`rounded-2xl mt-2 mb-4 p-4 space-y-1 border ${dark ? 'bg-[#0a0d1a]/90 border-white/5' : 'bg-white border-gray-100 shadow-lg'}`}>
            {nav.map(item => (
              <a key={item.name} href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${dark ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
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
