import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { VajraStocksPage } from './pages/VajraStocksPage';

function PortfolioHome() {
  return (
    <div className="min-h-screen bg-carbon selection:bg-emerald-accent/30 selection:text-emerald-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/vajrastocks" element={<VajraStocksPage />} />
    </Routes>
  );
}

export default App;
