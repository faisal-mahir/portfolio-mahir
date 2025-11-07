import React from 'react';
import type { PortfolioData, SkillCategory } from '../../types';

interface EditSkillsFormProps {
    skills: SkillCategory[];
    setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;

export const EditSkillsForm: React.FC<EditSkillsFormProps> = ({ skills, setData }) => {

    const handleCategoryChange = (id: number, value: string) => {
        setData(prev => ({
            ...prev,
            skills: prev.skills.map(sc =>
                sc.id === id ? { ...sc, title: value } : sc
            ),
        }));
    };
    
    const handleItemsChange = (id: number, value: string) => {
        setData(prev => ({
            ...prev,
            skills: prev.skills.map(sc =>
                sc.id === id ? { ...sc, items: value.split(',').map(s => s.trim()) } : sc
            ),
        }));
    };

    const addCategory = () => {
        const newCategory: SkillCategory = {
            id: Date.now(),
            title: 'New Skill Category',
            items: ['New Skill 1', 'New Skill 2'],
        };
        setData(prev => ({ ...prev, skills: [...prev.skills, newCategory] }));
    };

    const removeCategory = (id: number) => {
        setData(prev => ({ ...prev, skills: prev.skills.filter(sc => sc.id !== id) }));
    };

    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Edit Skills</h3>
            <div className="space-y-4">
                {skills.map(category => (
                    <div key={category.id} className="bg-gray-800 p-4 rounded-md border border-gray-600 space-y-2 relative">
                         <button onClick={() => removeCategory(category.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-400 p-1 bg-gray-700 rounded-full">
                            <TrashIcon />
                        </button>
                        <input type="text" value={category.title} onChange={e => handleCategoryChange(category.id, e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Category Title" />
                        <textarea value={category.items.join(', ')} onChange={e => handleItemsChange(category.id, e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Skills (comma-separated)" rows={3}></textarea>
                    </div>
                ))}
            </div>
            <button onClick={addCategory} className="mt-4 bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                + Add Skill Category
            </button>
        </div>
    );
};