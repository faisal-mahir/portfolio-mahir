import React from 'react';
import type { SkillCategory } from '../types';
import { Section } from './ui/Section';

interface SkillsProps {
  skills: SkillCategory[];
  animate: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skills, animate }) => {
  return (
    <Section id="skills" title="Arsenal of Skills" animate={animate}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
          <div key={skillCategory.id} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
            <h3 className="text-2xl font-bold text-cyan-400 uppercase tracking-wider mb-4">{skillCategory.title}</h3>
            <ul className="space-y-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};