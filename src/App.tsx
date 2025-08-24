import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-indigo-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;