import React, { useState } from 'react';
import { Section } from './ui/Section';

export const Contact: React.FC<{ animate: boolean }> = ({ animate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simulate API call. In a real app, you would use a service like EmailJS or a backend endpoint.
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const isSending = status === 'sending';

  return (
    <Section id="contact" title="Get In Touch" animate={animate}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          Have a question, a proposal, or just want to say hello? Go ahead.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
              required
              disabled={isSending}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
              required
              disabled={isSending}
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            required
            disabled={isSending}
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-cyan-600 text-white font-bold py-3 px-6 rounded-md hover:bg-cyan-500 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          <div className="h-6 mt-4">
            {status === 'success' && <p className="text-green-400">Message sent successfully! Thank you.</p>}
            {status === 'error' && <p className="text-red-400">Please fill out all fields.</p>}
          </div>
        </form>
      </div>
    </Section>
  );
};