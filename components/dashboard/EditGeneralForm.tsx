import React from 'react';
import type { PortfolioData } from '../../types';

interface FormInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange, name, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <input type="text" id={name} name={name} value={value} onChange={onChange} className="w-full bg-gray-700 p-2 rounded-md" placeholder={placeholder} />
    </div>
);

interface FormTextareaProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    placeholder?: string;
    rows?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ label, value, onChange, name, placeholder, rows = 3 }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <textarea id={name} name={name} value={value} onChange={onChange} className="w-full bg-gray-700 p-2 rounded-md" placeholder={placeholder} rows={rows}></textarea>
    </div>
);

interface EditGeneralFormProps {
    data: PortfolioData;
    setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

export const EditGeneralForm: React.FC<EditGeneralFormProps> = ({ data, setData }) => {

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            contact: {
                ...prev.contact,
                [name]: value,
            }
        }));
    };
    
    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">General Information</h3>
            <div className="space-y-4">
                <FormInput label="Full Name" name="name" value={data.name} onChange={handleDataChange} />
                <FormInput label="Tagline" name="tagline" value={data.tagline} onChange={handleDataChange} />
                <FormTextarea label="Career Objective" name="careerObjective" value={data.careerObjective} onChange={handleDataChange} rows={5} />
                
                <h4 className="text-lg font-semibold pt-4 text-gray-300">Contact Details</h4>
                <FormInput label="Email" name="email" value={data.contact.email} onChange={handleContactChange} />
                <FormInput label="LinkedIn URL" name="linkedin" value={data.contact.linkedin} onChange={handleContactChange} />
                <FormInput label="Website URL" name="website" value={data.contact.website} onChange={handleContactChange} />
                <FormInput label="Phone" name="phone" value={data.contact.phone} onChange={handleContactChange} />
                <FormInput label="Address" name="address" value={data.contact.address} onChange={handleContactChange} />
            </div>
        </div>
    );
};