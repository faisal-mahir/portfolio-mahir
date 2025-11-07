import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostModalProps {
  post: BlogPost;
  onClose: () => void;
}

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

export const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 overflow-y-auto">
          <p className="text-sm text-gray-400 mb-2">{post.date}</p>
          <h2 className="text-4xl font-bold text-white mb-6">{post.title}</h2>
          <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-900/50 rounded-full p-2 hover:bg-gray-700 transition-colors"
          aria-label="Close post"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};