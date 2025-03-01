import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />   
      </main>
      <Footer />
    </>
  );
};

export default App;