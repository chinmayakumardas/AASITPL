'use client';
import { useParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const jobs = [
  { jobid: 1, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
  { jobid: 2, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
  { jobid: 3, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
  { jobid: 4, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
  { jobid: 5, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
];

export default function JobDetailsPage() {
  const { jobid } = useParams();
  const router = useRouter();
  const job = jobs.find(j => j.jobid === parseInt(jobid, 10));

  if (!job) return <p className="text-center text-gray-500">Job not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Experience:</strong> {job.experience}</p>
          <p><strong>Role:</strong> {job.role}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <Button className="mt-4" onClick={() => router.push(`/career/apply/${job.jobid}`)}>Apply Now</Button>
        </CardContent>
      </Card>
    </div>
  );
}
