import React from 'react';
import type { PortfolioData, BlogPost } from '../../types';

interface EditBlogFormProps {
    posts: BlogPost[];
    setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
}

const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>;

export const EditBlogForm: React.FC<EditBlogFormProps> = ({ posts, setData }) => {

    const handlePostChange = (id: number, field: keyof BlogPost, value: string) => {
        setData(prev => ({
            ...prev,
            blogPosts: prev.blogPosts.map(p =>
                p.id === id ? { ...p, [field]: value } : p
            ),
        }));
    };

    const addPost = () => {
        const newPost: BlogPost = {
            id: Date.now(),
            title: 'New Blog Post',
            date: new Date().toISOString().split('T')[0],
            excerpt: 'A short and engaging summary of the new blog post.',
            content: 'Write the full content of your blog post here.',
            imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800',
        };
        setData(prev => ({ ...prev, blogPosts: [...prev.blogPosts, newPost] }));
    };

    const removePost = (id: number) => {
        setData(prev => ({ ...prev, blogPosts: prev.blogPosts.filter(p => p.id !== id) }));
    };

    return (
        <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Edit Blog Posts</h3>
            <div className="space-y-4">
                {posts.map(post => (
                    <div key={post.id} className="bg-gray-800 p-4 rounded-md border border-gray-600 space-y-2 relative">
                         <button onClick={() => removePost(post.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-400 p-1 bg-gray-700 rounded-full">
                            <TrashIcon />
                        </button>
                        <input type="text" value={post.title} onChange={e => handlePostChange(post.id, 'title', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Title" />
                        <input type="text" value={post.date} onChange={e => handlePostChange(post.id, 'date', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Date" />
                        <textarea value={post.excerpt} onChange={e => handlePostChange(post.id, 'excerpt', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Excerpt" rows={2}></textarea>
                        <textarea value={post.content} onChange={e => handlePostChange(post.id, 'content', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Full Content" rows={5}></textarea>
                        <input type="text" value={post.imageUrl} onChange={e => handlePostChange(post.id, 'imageUrl', e.target.value)} className="w-full bg-gray-700 p-2 rounded-md" placeholder="Image URL" />
                    </div>
                ))}
            </div>
            <button onClick={addPost} className="mt-4 bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                + Add Blog Post
            </button>
        </div>
    );
};