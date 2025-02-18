// pages/register.js
'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const RegisterPage = () => {
  const [users, setUsers] = useState(() => {
    // Initialize state with users from localStorage
    return JSON.parse(localStorage.getItem('users')) || [];
  });
  
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    mob: '',
    role: 'author',
    dob: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, active: true };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Reset form
    setFormData({
      email: '',
      username: '',
      mob: '',
      role: 'author',
      dob: '',
      password: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User Registration</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          <Label>Email</Label>
          <Input name="email" value={formData.email} onChange={handleChange} required />

          <Label>Username</Label>
          <Input name="username" value={formData.username} onChange={handleChange} required />

          <Label>Mobile</Label>
          <Input name="mob" value={formData.mob} onChange={handleChange} required />

          <Label>Role</Label>
          <Select name="role" value={formData.role} onChange={handleChange}>
            <option value="author">Author</option>
            <option value="editor">Editor</option>
          </Select>

          <Label>Date of Birth</Label>
          <Input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <Label>Password</Label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <Button type="submit" className="mt-4">Register</Button>
      </form>

      <h2 className="text-xl font-bold mt-6">Registered Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {users.map((user, index) => (
          <Card key={index} className="p-4">
            <h3 className="font-bold">{user.username}</h3>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mob}</p>
            <p>Role: {user.role}</p>
            <p>DOB: {user.dob}</p>
            <p>Status: {user.active ? 'Active' : 'Inactive'}</p>
            <div className="flex space-x-2 mt-2">
              <Button>Edit</Button>
              <Button onClick={() => {
                const updatedUsers = [...users];
                updatedUsers[index].active = !updatedUsers[index].active;
                setUsers(updatedUsers);
                localStorage.setItem('users', JSON.stringify(updatedUsers));
              }}>
                {user.active ? 'Deactivate' : 'Activate'}
              </Button>
              <Button onClick={() => {
                const updatedUsers = users.filter((_, i) => i !== index);
                setUsers(updatedUsers);
                localStorage.setItem('users', JSON.stringify(updatedUsers));
              }} variant="destructive">Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RegisterPage;
