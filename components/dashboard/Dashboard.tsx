import React from 'react';
import type { PortfolioData } from '../../types';
import { EditSettingsForm } from './EditSettingsForm';
import { EditProjectsForm } from './EditProjectsForm';
import { EditGeneralForm } from './EditGeneralForm';
import { EditSkillsForm } from './EditSkillsForm';
import { EditExperienceForm } from './EditExperienceForm';

interface DashboardProps {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  animationsEnabled: boolean;
  setAnimationsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;


export const Dashboard: React.FC<DashboardProps> = ({ data, setData, animationsEnabled, setAnimationsEnabled, onClose }) => {
  const handleSave = () => {
    // In a real app, this would be an API call. Here we just close.
    // The state is already updated live.
    console.log("Saving data...", data);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex justify-end" onClick={onClose}>
      <div 
        className="w-full max-w-2xl h-full bg-gray-900 border-l border-gray-700 shadow-2xl flex flex-col dashboard-scrollbar overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10 p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white">Edit Portfolio</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </header>

        <div className="p-6 space-y-8">
            <EditSettingsForm
                data={data}
                setData={setData}
                animationsEnabled={animationsEnabled}
                setAnimationsEnabled={setAnimationsEnabled}
            />
            <EditGeneralForm data={data} setData={setData} />
            <EditSkillsForm skills={data.skills} setData={setData} />
            <EditExperienceForm experiences={data.workExperiences} setData={setData} />
            <EditProjectsForm
                projects={data.projects}
                setData={setData}
            />
        </div>

        <footer className="sticky bottom-0 mt-auto p-4 bg-gray-900 border-t border-gray-700 flex justify-end">
            <button
                onClick={handleSave}
                className="bg-cyan-600 text-white font-bold py-2 px-6 rounded-md hover:bg-cyan-500 transition-all duration-300"
            >
                Done
            </button>
        </footer>
      </div>
    </div>
  );
};