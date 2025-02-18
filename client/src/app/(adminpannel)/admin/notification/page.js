// pages/notifications.js
'use client'
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'User John Doe has registered.', read: false },
    { id: 2, message: 'User Jane Smith has updated their profile.', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <Button onClick={clearAll} variant="outline" className="mt-4">Clear All</Button>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`p-4 ${notification.read ? 'bg-gray-100' : 'bg-white'}`}>
            <p>{notification.message}</p>
            <div className="flex justify-between mt-2">
              <Button onClick={() => markAsRead(notification.id)} disabled={notification.read}>
                {notification.read ? 'Read' : 'Mark as Read'}
              </Button>
              <Button onClick={() => deleteNotification(notification.id)} variant="destructive">Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
