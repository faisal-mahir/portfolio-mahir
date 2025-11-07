import React from 'react';
import type { PortfolioData } from '../types';

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
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and the Gemini API.</p>
      </div>
    </footer>
  );
};