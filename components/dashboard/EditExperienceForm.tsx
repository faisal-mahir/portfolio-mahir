import React from 'react';
import type { PortfolioData, Experience } from '../../types';

interface EditExperienceFormProps {
    experiences: Experience[];
    setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;

export const EditExperienceForm: React.FC<EditExperienceFormProps> = ({ experiences, setData }) => {

    const handleExperienceChange = (id: number, field: keyof Experience, value: string) => {
        setData(prev => ({
            ...prev,
            workExperiences: prev.workExperiences.map(e =>
                e.id === id ? { ...e, [field]: value } : e
            ),
        }));
    };

    const addExperience = () => {
        const newExperience: Experience = {
            id: Date.now(),
            role: 'New Role',
            company: 'New Company',
            period: '2024 - Present',
            description: 'A brief description of this new role.',
        };
        setData(prev => ({ ...prev, workExperiences: [...prev.workExperiences, newExperience] }));
    };

    const removeExperience = (id: number) => {
        setData(prev => ({ ...prev, workExperiences: prev.workExperiences.filter(e => e.id !== id) }));
    };

    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Edit Work Experience</h3>
            <div className="space-y-4">
                {experiences.map(exp => (
                    <div key={exp.id} className="bg-gray-800 p-4 rounded-md border border-gray-600 space-y-2 relative">
                         <button onClick={() => removeExperience(exp.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-400 p-1 bg-gray-700 rounded-full">
                            <TrashIcon />
                        </button>
                        <input type="text" value={exp.role} onChange={e => handleExperienceChange(exp.id, 'role', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Role" />
                        <input type="text" value={exp.company} onChange={e => handleExperienceChange(exp.id, 'company', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Company" />
                        <input type="text" value={exp.period} onChange={e => handleExperienceChange(exp.id, 'period', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Period" />
                        <textarea value={exp.description} onChange={e => handleExperienceChange(exp.id, 'description', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Description" rows={3}></textarea>
                    </div>
                ))}
            </div>
            <button onClick={addExperience} className="mt-4 bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                + Add Experience
            </button>
        </div>
    );
};