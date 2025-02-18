// pages/users.js
'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
const UsersPage = () => {
  const initialUsers = JSON.parse(localStorage.getItem('users')) || [];
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleActivateDeactivate = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].active = !updatedUsers[index].active;
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User List</h1>
      <Input
        placeholder="Search by username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {users
          .filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((user, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-bold">{user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Mobile: {user.mob}</p>
              <p>Role: {user.role}</p>
              <p>DOB: {user.dob}</p>
              <p>Status: {user.active ? 'Active' : 'Inactive'}</p>
              <div className="flex space-x-2 mt-2">
                <Button>Edit</Button>
                <Button onClick={() => handleActivateDeactivate(index)}>
                  {user.active ? 'Deactivate' : 'Activate'}
                </Button>
                <Button onClick={() => handleDelete(index)} variant="destructive">Delete</Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default UsersPage;
