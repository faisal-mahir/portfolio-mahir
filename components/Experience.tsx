import React from 'react';
import type { Experience as ExperienceType } from '../types';
import { Section } from './ui/Section';

interface ExperienceProps {
  workExperiences: ExperienceType[];
  animate: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ workExperiences, animate }) => {
  return (
    <Section id="experience" title="Work Experience" animate={animate}>
      <div className="relative border-l-2 border-cyan-800 ml-4 md:ml-0">
        {workExperiences.map((exp) => (
          <div key={exp.id} className="mb-10 ml-8">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-cyan-600 rounded-full -left-4 ring-8 ring-gray-900">
              <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-2xl font-semibold text-white uppercase">{exp.role}</h3>
            <div className="flex items-center text-sm font-medium text-cyan-400 mb-2">
              <span>{exp.company}</span>
              <span className="mx-2">|</span>
              <time>{exp.period}</time>
            </div>
            <p className="mb-4 text-base font-normal text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};