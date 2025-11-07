
import React, { useState } from 'react';
import { generateImageFromGemini } from '../services/geminiService';
import { Section } from './ui/Section';

const LoadingSpinner: React.FC = () => (
  <div className="absolute inset-0 bg-gray-900/80 flex justify-center items-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500"></div>
  </div>
);

export const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('A robot chef with AR glasses cooking in a futuristic Danish kitchen');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const examplePrompts = [
    "A virtual reality headset next to a sparkling clean plate",
    "A CEO coding an epic game while washing dishes",
    "An augmented reality overlay showing the perfect way to stack plates"
  ];

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    const result = await generateImageFromGemini(prompt);
    
    if (result) {
      setImageUrl(result);
    } else {
      setError('Failed to generate image. Please try again.');
    }
    setIsLoading(false);
  };
  
  const handlePromptClick = (p: string) => {
    setPrompt(p);
    handleGenerate();
  }

  return (
    <Section id="image-generator" title="Gemini Vision">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-4">
          Curious about my journey? Let Gemini visualize it for you! Enter a prompt or try an example.
        </p>
        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A robot chef in a Danish kitchen"
            className="flex-grow bg-gray-800 text-white border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="bg-cyan-600 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-500 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? 'Generating...' : 'Visualize My Vibe'}
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {examplePrompts.map(p => (
                <button key={p} onClick={() => { setPrompt(p); }} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full hover:bg-cyan-700 transition-colors">
                    {p}
                </button>
            ))}
        </div>

        <div className="w-full aspect-video bg-gray-800/50 rounded-lg border border-gray-700 flex justify-center items-center relative overflow-hidden">
          {isLoading && <LoadingSpinner />}
          {error && <p className="text-red-400">{error}</p>}
          {imageUrl && <img src={imageUrl} alt={prompt} className="w-full h-full object-contain" />}
          {!isLoading && !imageUrl && !error && (
            <div className="text-gray-500 p-8">
              <p className="text-2xl mb-2">Your masterpiece awaits...</p>
              <p>An image representing my unique blend of tech and tenacity will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
