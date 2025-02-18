// pages/blog.js
'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const PAGE_SIZE = 5; // Number of blogs per page

const blogs = [
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
  { id: 4, title: 'Fourth Blog Post', content: 'This is the content of the fourth blog post.' },
  { id: 5, title: 'Fifth Blog Post', content: 'This is the content of the fifth blog post.' },
  { id: 6, title: 'Sixth Blog Post', content: 'This is the content of the sixth blog post.' },
  { id: 7, title: 'Seventh Blog Post', content: 'This is the content of the seventh blog post.' },
  { id: 8, title: 'Eighth Blog Post', content: 'This is the content of the eighth blog post.' },
  { id: 9, title: 'Ninth Blog Post', content: 'This is the content of the ninth blog post.' },
  { id: 10, title: 'Tenth Blog Post', content: 'This is the content of the tenth blog post.' },
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Filter blogs based on the search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate the filtered blogs
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
    setSearchTerm('');
    setCurrentPage(1);
  };

  if (selectedBlog) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{selectedBlog.title}</h1>
        <p className="mt-4">{selectedBlog.content}</p>
        <Button onClick={handleBackToList} className="mt-4">Back to Blog List</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Blog List</h1>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search blogs..."
        className="mt-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {paginatedBlogs.map((blog) => (
          <Card key={blog.id} className="p-4">
            <h3 className="font-bold">{blog.title}</h3>
            <Button onClick={() => handleBlogClick(blog)} className="mt-2">View</Button>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BlogPage;
