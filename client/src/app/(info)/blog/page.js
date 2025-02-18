'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { posts } from '@/lib/posts';  // Import static posts
const BlogPage = () => {
  const [search, setSearch] = useState('');
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blog-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Search Box */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Input 
          placeholder="Search for blog posts..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          style={{ maxWidth: '400px', margin: '0 auto' }}
        />
      </div>

      {/* Grid Layout for Blog Posts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Card key={post.id} shadow="md" style={{ padding: '20px', cursor: 'pointer' }}>
              <p fontSize="xl" fontWeight="bold">{post.title}</p>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="outline" style={{ marginTop: '10px' }}>Read More</Button>
              </Link>
            </Card>
          ))
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
