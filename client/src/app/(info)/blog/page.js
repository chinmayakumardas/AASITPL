'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { posts } from '@/lib/posts';  // Import static posts

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const results = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(results);
      setLoading(false);
    }, 300); // Simulate a delay for lazy loading

    return () => clearTimeout(timeoutId);
  }, [search]);

  const handlePostClick = (post) => {
    // Logic to open modal with full blog content
    console.log(post); // Replace with modal opening logic
  };

  return (
    <div className="blog-container w-full p-20">
      {/* Search Box */}
      <div className='flex justify-between'>
        <h1 className="text-center">All Blog Posts</h1>
        <div className="mb-5 text-center">
          <Input 
            placeholder="Search for blog posts..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p>Loading posts...</p>}

      {/* Grid Layout for Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} shadow="md" className="p-5 gap-2 flex flex-col cursor-pointer" onClick={() => handlePostClick(post)}>
              <img src={post.imageUrl} alt={post.title} className="w-50 h-60 rounded-3xl object-cover" />
              <p className="text-xl   cursor-pointer">{post.publishedAt}</p>
              <p className="text-xl font-bold hover:underline cursor-pointer">{post.title}</p>
              <p className="cursor-pointer hover:underline">{post.excerpt}</p>
            </div>
          ))
        ) : (
          !loading && <p>No posts found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;