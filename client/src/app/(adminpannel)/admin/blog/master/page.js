'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ManagePage = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [tagName, setTagName] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingTag, setEditingTag] = useState(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  const toggleCategoryModal = () => setIsCategoryModalOpen((prev) => !prev);
  const toggleTagModal = () => setIsTagModalOpen((prev) => !prev);

  const addCategory = () => {
    if (categoryName) {
      setCategories((prev) => [...prev, categoryName]);
      setCategoryName('');
      toggleCategoryModal();
    }
  };

  const addTag = () => {
    if (tagName) {
      setTags((prev) => [...prev, tagName]);
      setTagName('');
      toggleTagModal();
    }
  };

  const editCategory = (index) => {
    setEditingCategory(index);
    setCategoryName(categories[index]);
    toggleCategoryModal();
  };

  const editTag = (index) => {
    setEditingTag(index);
    setTagName(tags[index]);
    toggleTagModal();
  };

  const saveEditedCategory = () => {
    const updatedCategories = [...categories];
    updatedCategories[editingCategory] = categoryName;
    setCategories(updatedCategories);
    setEditingCategory(null);
    setCategoryName('');
    toggleCategoryModal();
  };

  const saveEditedTag = () => {
    const updatedTags = [...tags];
    updatedTags[editingTag] = tagName;
    setTags(updatedTags);
    setEditingTag(null);
    setTagName('');
    toggleTagModal();
  };

  const deleteCategory = (index) => {
    setCategories((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Manage Categories and Tags</h1>

      <div className="flex space-x-4 mt-4">
        <Button onClick={() => setActiveTab('categories')} variant={activeTab === 'categories' ? 'solid' : 'outline'}>
          Categories
        </Button>
        <Button onClick={() => setActiveTab('tags')} variant={activeTab === 'tags' ? 'solid' : 'outline'}>
          Tags
        </Button>
      </div>

      {activeTab === 'categories' && (
        <div className="mt-6">
          <Button onClick={toggleCategoryModal}>Add Category</Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {categories.map((category, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-bold">{category}</h3>
                <div className="flex space-x-2 mt-2">
                  <Button onClick={() => editCategory(index)}>Edit</Button>
                  <Button onClick={() => deleteCategory(index)} variant="destructive">Delete</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tags' && (
        <div className="mt-6">
          <Button onClick={toggleTagModal}>Add Tag</Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {tags.map((tag, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-bold">{tag}</h3>
                <div className="flex space-x-2 mt-2">
                  <Button onClick={() => editTag(index)}>Edit</Button>
                  <Button onClick={() => deleteTag(index)} variant="destructive">Delete</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Category Modal */}
      {isCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold">{editingCategory !== null ? 'Edit Category' : 'Add Category'}</h2>
            <Input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="mt-2"
            />
            <Button onClick={editingCategory !== null ? saveEditedCategory : addCategory} className="mt-2">
              {editingCategory !== null ? 'Save Changes' : 'Add Category'}
            </Button>
            <Button onClick={toggleCategoryModal} variant="outline" className="mt-2">Close</Button>
          </div>
        </div>
      )}

      {/* Tag Modal */}
      {isTagModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold">{editingTag !== null ? 'Edit Tag' : 'Add Tag'}</h2>
            <Input
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
              placeholder="Enter tag name"
              className="mt-2"
            />
            <Button onClick={editingTag !== null ? saveEditedTag : addTag} className="mt-2">
              {editingTag !== null ? 'Save Changes' : 'Add Tag'}
            </Button>
            <Button onClick={toggleTagModal} variant="outline" className="mt-2">Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePage;
