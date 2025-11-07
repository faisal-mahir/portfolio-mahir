import React from 'react';
import type { Project } from '../types';
import { Section } from './ui/Section';

interface ProjectsProps {
  projects: Project[];
  animate: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, animate }) => {
  return (
    <Section id="projects" title="Featured Projects" animate={animate}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800/50 rounded-lg border border-gray-700 flex flex-col group hover:border-cyan-400 transition-all duration-300 overflow-hidden">
            {project.imageUrl && (
              <div className="aspect-video overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.period}</p>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-700 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};