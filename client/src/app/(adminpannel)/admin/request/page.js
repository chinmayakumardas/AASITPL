// pages/requests.js
'use client'
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RequestsPage = () => {
  const [requests, setRequests] = useState([
    { id: 1, user: 'John Doe', details: 'Request to join the team.', status: 'pending' },
    { id: 2, user: 'Jane Smith', details: 'Request for document approval.', status: 'pending' },
  ]);

  const approveRequest = (id) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: 'approved' } : request
      )
    );
  };

  const rejectRequest = (id) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: 'rejected' } : request
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Requests</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {requests.map((request) => (
          <Card key={request.id} className="p-4">
            <h3 className="font-bold">{request.user}</h3>
            <p>{request.details}</p>
            <p>Status: {request.status}</p>
            <div className="flex space-x-2 mt-2">
              {request.status === 'pending' && (
                <>
                  <Button onClick={() => approveRequest(request.id)} variant="success">Approve</Button>
                  <Button onClick={() => rejectRequest(request.id)} variant="destructive">Reject</Button>
                </>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RequestsPage;
