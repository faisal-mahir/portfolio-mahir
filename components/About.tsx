import React from 'react';
import { Section } from './ui/Section';

interface AboutProps {
  careerObjective: string;
  animate: boolean;
}

export const About: React.FC<AboutProps> = ({ careerObjective, animate }) => {
  return (
    <Section id="about" title="Career Objective" animate={animate}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {careerObjective}
        </p>
        <p className="mt-6 text-cyan-400 italic text-lg">
          "A leader in the virtual world, now ready to bring the same dedication and excellence to the physical one. Let's build something great together, one task at a time."
        </p>
      </div>
    </Section>
  );
};