import React, { useState } from 'react';

interface LoginProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

export const Login: React.FC<LoginProps> = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // IMPORTANT: This is NOT secure and is for demonstration purposes only in a static frontend environment.
  // In a real application, authentication should always be handled by a secure backend service.
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid credentials. Hint: admin / password');
      setPassword('');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="p-4 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Admin Login</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
                <CloseIcon />
            </button>
        </header>
        <form onSubmit={handleLogin} className="p-6 space-y-4">
            <div>
                <label className="block text-gray-400 mb-1" htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-gray-700 p-2 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
            </div>
            <div>
                <label className="block text-gray-400 mb-1" htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-700 p-2 rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-500 transition-colors">
                Login
            </button>
        </form>
      </div>
    </div>
  );
};