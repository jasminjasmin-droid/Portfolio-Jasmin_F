import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1815] selection:bg-[#FAF0EC] selection:text-[#C54E2C] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
