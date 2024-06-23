import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Career from './components/Career';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
        <About />
        <Skills />
        <Projects />
        <Career />
      </div>
    </div>
  );
};

export default App;
