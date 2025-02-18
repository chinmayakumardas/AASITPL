// pages/admin.js
'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const AdminPage = () => {
  const [pages, setPages] = useState([
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Contact', path: '/contact' },
    { id: 4, name: 'Blog', path: '/blog' },
    { id: 5, name: 'Career', path: '/career' },
  ]);

  const [pageName, setPageName] = useState('');
  const [pagePath, setPagePath] = useState('');
  const [editId, setEditId] = useState(null);

  const addOrUpdatePage = () => {
    if (pageName && pagePath) {
      if (editId) {
        // Update existing page
        setPages((prev) =>
          prev.map((page) =>
            page.id === editId ? { ...page, name: pageName, path: pagePath } : page
          )
        );
        setEditId(null);
      } else {
        // Add new page
        const newId = pages.length ? Math.max(pages.map((p) => p.id)) + 1 : 1;
        setPages((prev) => [...prev, { id: newId, name: pageName, path: pagePath }]);
      }
      setPageName('');
      setPagePath('');
    }
  };

  const editPage = (id) => {
    const pageToEdit = pages.find((page) => page.id === id);
    setPageName(pageToEdit.name);
    setPagePath(pageToEdit.path);
    setEditId(id);
  };

  const deletePage = (id) => {
    setPages((prev) => prev.filter((page) => page.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Manage Pages</h1>
        
        <div className="mt-4">
          <Label>Page Name</Label>
          <Input
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            placeholder="Enter page name"
            className="mt-2"
          />

          <Label className="mt-4">Page Path</Label>
          <Input
            value={pagePath}
            onChange={(e) => setPagePath(e.target.value)}
            placeholder="Enter page path"
            className="mt-2"
          />

          <Button onClick={addOrUpdatePage} className="mt-4">
            {editId ? 'Update Page' : 'Add Page'}
          </Button>
        </div>

        <h2 className="mt-6 text-xl">Existing Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {pages.map((page) => (
            <Card key={page.id} className="p-4 flex flex-col">
              <h3 className="font-bold">{page.name}</h3>
              <p>{page.path}</p>
              <div className="mt-4 flex space-x-2">
                <Button onClick={() => editPage(page.id)} className="flex-1">Edit</Button>
                <Button onClick={() => deletePage(page.id)} className="flex-1" variant="destructive">
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminPage;