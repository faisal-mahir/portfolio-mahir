import React from 'react';
import type { PortfolioData } from '../../types';

interface EditSettingsFormProps {
    data: PortfolioData;
    setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
    animationsEnabled: boolean;
    setAnimationsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle: React.FC<{ id: string; checked: boolean; onChange: () => void; label: string; }> = ({ id, checked, onChange, label }) => (
    <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-gray-300">{label}</label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                name={id}
                id={id}
                checked={checked}
                onChange={onChange}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                style={{
                    right: checked ? '0' : '1rem',
                    transition: 'right 0.2s ease-in-out',
                }}
            />
            <label
                htmlFor={id}
                className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${checked ? 'bg-cyan-600' : 'bg-gray-600'}`}
            ></label>
        </div>
    </div>
);


export const EditSettingsForm: React.FC<EditSettingsFormProps> = ({ data, setData, animationsEnabled, setAnimationsEnabled }) => {

    const handleHeroImageToggle = () => {
        setData(prev => ({ ...prev, showHeroImage: !prev.showHeroImage }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, heroImageUrl: e.target.value }));
    };

    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Visual Settings</h3>
            <div className="space-y-4">
                <Toggle
                    id="animations-toggle"
                    checked={animationsEnabled}
                    onChange={() => setAnimationsEnabled(!animationsEnabled)}
                    label="Enable Scroll Animations"
                />
                <Toggle
                    id="hero-image-toggle"
                    checked={data.showHeroImage}
                    onChange={handleHeroImageToggle}
                    label="Show Hero Background Image"
                />

                {data.showHeroImage && (
                    <div className="pt-2">
                        <label htmlFor="heroImageUrl" className="block text-sm font-medium text-gray-400 mb-1">Hero Image URL</label>
                        <input
                            type="text"
                            id="heroImageUrl"
                            value={data.heroImageUrl}
                            onChange={handleInputChange}
                            className="w-full bg-gray-700 p-2 rounded-md"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};