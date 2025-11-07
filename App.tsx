import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ImageGenerator } from './components/ImageGenerator';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';
import { Dashboard } from './components/dashboard/Dashboard';
import { data as initialData } from './data';
import type { PortfolioData } from './types';
import { Login } from './components/Login';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';


const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>;

const App: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialData);
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setLoginOpen(false);
    setDashboardOpen(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setDashboardOpen(false);
  };
  
  const handleEditClick = () => {
    if (isAuthenticated) {
      setDashboardOpen(true);
    } else {
      setLoginOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 selection:bg-cyan-500 selection:text-gray-900">
      <main className="container mx-auto px-4 md:px-8 py-12">
        <Hero 
          name={portfolioData.name} 
          tagline={portfolioData.tagline}
          contact={portfolioData.contact}
          heroImageUrl={portfolioData.heroImageUrl}
          showHeroImage={portfolioData.showHeroImage}
          cvUrl={portfolioData.cvUrl}
        />
        <div className="space-y-24 md:space-y-32">
          <About careerObjective={portfolioData.careerObjective} animate={animationsEnabled} />
          <Skills skills={portfolioData.skills} animate={animationsEnabled} />
          <Projects projects={portfolioData.projects} animate={animationsEnabled} />
          <Experience workExperiences={portfolioData.workExperiences} animate={animationsEnabled} />
          <Blog posts={portfolioData.blogPosts} animate={animationsEnabled} />
          <ImageGenerator />
          <Contact animate={animationsEnabled} />
        </div>
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
      <GeminiChat />

      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={handleEditClick}
          className="bg-purple-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-purple-500 transition-transform transform hover:scale-110"
          aria-label="Open Dashboard"
        >
          <EditIcon />
        </button>
      </div>
      
      {isLoginOpen && (
        <Login
          onClose={() => setLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {isDashboardOpen && isAuthenticated && (
        <Dashboard
          data={portfolioData}
          setData={setPortfolioData}
          animationsEnabled={animationsEnabled}
          setAnimationsEnabled={setAnimationsEnabled}
          onClose={() => setDashboardOpen(false)}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default App;