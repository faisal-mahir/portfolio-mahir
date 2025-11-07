import React from 'react';
import type { PortfolioData, Project } from '../../types';

interface EditProjectsFormProps {
    projects: Project[];
    setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;

export const EditProjectsForm: React.FC<EditProjectsFormProps> = ({ projects, setData }) => {

    const handleProjectChange = (id: number, field: keyof Project, value: string) => {
        setData(prev => ({
            ...prev,
            projects: prev.projects.map(p =>
                p.id === id ? { ...p, [field]: field === 'tags' ? value.split(',').map(t => t.trim()) : value } : p
            ),
        }));
    };

    const addProject = () => {
        const newProject: Project = {
            id: Date.now(),
            title: 'New Project',
            period: '2024',
            description: 'A brief description of this awesome new project.',
            tags: ['new', 'tag'],
            imageUrl: '',
        };
        setData(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
    };

    const removeProject = (id: number) => {
        setData(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }));
    };

    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Edit Projects</h3>
            <div className="space-y-4">
                {projects.map(project => (
                    <div key={project.id} className="bg-gray-800 p-4 rounded-md border border-gray-600 space-y-2 relative">
                         <button onClick={() => removeProject(project.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-400 p-1 bg-gray-700 rounded-full">
                            <TrashIcon />
                        </button>
                        <input type="text" value={project.title} onChange={e => handleProjectChange(project.id, 'title', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Title" />
                        <input type="text" value={project.period} onChange={e => handleProjectChange(project.id, 'period', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Period (e.g., 2023-2024)" />
                        <textarea value={project.description} onChange={e => handleProjectChange(project.id, 'description', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Description" rows={3}></textarea>
                        <input type="text" value={project.imageUrl || ''} onChange={e => handleProjectChange(project.id, 'imageUrl', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Image URL (optional)" />
                        <input type="text" value={project.tags.join(', ')} onChange={e => handleProjectChange(project.id, 'tags', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Tags (comma-separated)" />
                    </div>
                ))}
            </div>
            <button onClick={addProject} className="mt-4 bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                + Add Project
            </button>
        </div>
    );
};
