import React from 'react';
import ParticlesJs from './Particles';
// import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Navbar from './Nav/Navbar';

function App() {
  return (
    <>
      <ParticlesJs />
      <Navbar />
      {/* <Header /> */}
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

export default App;
