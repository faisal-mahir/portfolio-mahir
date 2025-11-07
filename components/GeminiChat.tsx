
import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import { sendMessageToGemini, startChat } from '../services/geminiService';

const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>;

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startChat();
    setMessages([
      { role: 'model', text: "Hello! I'm Mahir's AI assistant. Ask me anything about his skills, projects, or his unique career goals!" }
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    const response = await sendMessageToGemini(userInput);

    setMessages([...newMessages, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-cyan-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-cyan-500 transition-transform transform hover:scale-110"
          aria-label="Open Chat"
        >
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </button>
      </div>

      <div className={`fixed bottom-24 right-6 z-40 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <header className="p-4 border-b border-gray-700">
          <h3 className="text-xl font-bold text-center text-white uppercase">Chat with my AI</h3>
        </header>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-gray-200'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-gray-700 text-gray-200 p-3 rounded-xl flex items-center space-x-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-0"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex items-center gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about my skills..."
            className="flex-1 bg-gray-900 text-white border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed">
            <SendIcon />
          </button>
        </form>
      </div>
    </>
  );
};
