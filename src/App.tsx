import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const ThemeContext = createContext<{ dark: boolean; toggle: () => void }>({ dark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(p => !p) }}>
      <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${dark ? 'bg-[#02040a] text-gray-100' : 'bg-[#f0f4ff] text-gray-900'}`}>
        <Header />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
