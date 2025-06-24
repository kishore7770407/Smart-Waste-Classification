import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClassificationSection from './components/ClassificationSection';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClassificationSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;