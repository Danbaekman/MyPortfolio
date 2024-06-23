import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Career from './components/Career';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      
        <About />
        <Skills />
        <Projects />
        <Career />
        <Footer />
    </div>
  );
};

export default App;
