import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { Section } from './ui/Section';
import { BlogPostModal } from './BlogPostModal';

interface BlogProps {
  posts: BlogPost[];
  animate: boolean;
}

export const Blog: React.FC<BlogProps> = ({ posts, animate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <Section id="blog" title="From The Blog" animate={animate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800/50 rounded-lg border border-gray-700 flex flex-col group hover:border-cyan-400 transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">{post.title}</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="mt-4">
                  <button onClick={() => setSelectedPost(post)} className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {selectedPost && (
        <BlogPostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
};