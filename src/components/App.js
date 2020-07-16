import React from 'react';
import ParticlesJs from './Particles';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import CaseStudy from './CaseStudy';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" >
          <ParticlesJs />
          <Header />
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </Route>
        <Route path="/case-study" component={CaseStudy} />
      </Router>
    </>
  );
}

export default App;
