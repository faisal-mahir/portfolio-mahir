import React from 'react';
import type { PortfolioData } from '../types';

const IconLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;

interface FooterProps {
  name: PortfolioData['name'];
  contact: PortfolioData['contact'];
}

export const Footer: React.FC<FooterProps> = ({ name, contact }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-400">
      <div className="container mx-auto">
        <p className="text-lg">Get in Touch</p>
        <p className="text-xl font-bold text-cyan-400 my-2">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <div className="flex justify-center space-x-6 my-6">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <IconLinkedin />
            </a>
            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <IconGlobe />
            </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and the Gemini API.</p>
      </div>
    </footer>
  );
};