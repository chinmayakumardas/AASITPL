// pages/profile.js
'use client'
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea'; // Adjust based on actual imports
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const ProfilePage = () => {
  const [username] = useState('shadcn');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('I own a computer.');
  const [urls, setUrls] = useState(['https://shadcn.com', 'http://twitter.com/shadcn']);
  const [newUrl, setNewUrl] = useState('');

  const addUrl = () => {
    if (newUrl) {
      setUrls([...urls, newUrl]);
      setNewUrl('');
    }
  };

  const updateProfile = () => {
    // Handle profile update logic here
    console.log({ username, email, bio, urls });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p>This is how others will see you on the site.</p>

        <div className="mt-4">
          <Label>Username</Label>
          <Input value={username} disabled className="mt-2" />

          <Label className="mt-4">Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Select a verified email to display"
            className="mt-2"
          />
          <p className="text-sm text-gray-500">You can manage verified email addresses in your email settings.</p>

          <Label className="mt-4">Bio</Label>
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
            className="mt-2"
          />
          <p className="text-sm text-gray-500">You can @mention other users and organizations to link to them.</p>

          <Label className="mt-4">URLs</Label>
          {urls.map((url, index) => (
            <div key={index} className="flex items-center mt-2">
              <span>{url}</span>
            </div>
          ))}
          <div className="flex items-center mt-2">
            <Input
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Add URL"
              className="mr-2"
            />
            <Button onClick={addUrl}>Add URL</Button>
          </div>
        </div>

        <Button onClick={updateProfile} className="mt-4">Update Profile</Button>
      </Card>
    </div>
  );
};

export default ProfilePage;
