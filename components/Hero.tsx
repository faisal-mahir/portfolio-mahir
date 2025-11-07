import React from 'react';
import type { PortfolioData } from '../types';

const IconMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const IconLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;

interface HeroProps {
  name: PortfolioData['name'];
  tagline: PortfolioData['tagline'];
  contact: PortfolioData['contact'];
  heroImageUrl: PortfolioData['heroImageUrl'];
  showHeroImage: PortfolioData['showHeroImage'];
}

export const Hero: React.FC<HeroProps> = ({ name, tagline, contact, heroImageUrl, showHeroImage }) => {
  return (
    <header className="py-24 md:py-32 text-center relative overflow-hidden">
        {showHeroImage && heroImageUrl && (
          <div className="absolute inset-0">
            <img src={heroImageUrl} alt="Hero background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gray-900/60"></div> {/* Dark overlay */}
          </div>
        )}
        <div className="absolute inset-0 bg-grid-cyan-500/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative"> {/* Add relative positioning to ensure it's in a new stacking context */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
          {name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-cyan-400 font-medium tracking-wider">
          {tagline}
        </p>
        <div className="mt-8 flex justify-center items-center flex-wrap gap-4 md:gap-8">
          <a href={`mailto:${contact.email}`} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <IconMail /> {contact.email}
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <IconLinkedin /> @mahirDfaisal
          </a>
          <a href={contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            <IconGlobe /> {contact.website}
          </a>
        </div>
      </div>
    </header>
  );
};