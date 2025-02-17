// 'use client';
// import { useParams, useRouter } from 'next/navigation';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const jobs = [
//   { jobid: 1, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
//   { jobid: 2, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
//   { jobid: 3, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
//   { jobid: 4, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
//   { jobid: 5, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
// ];

// export default function JobDetailsPage() {
//   const { jobid } = useParams();
//   const router = useRouter();
//   const job = jobs.find(j => j.jobid === parseInt(jobid, 10));

//   if (!job) return <p className="text-center text-gray-500">Job not found</p>;

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>{job.title}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p><strong>Experience:</strong> {job.experience}</p>
//           <p><strong>Role:</strong> {job.role}</p>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Salary:</strong> {job.salary}</p>
//           <p><strong>Type:</strong> {job.type}</p>
//           <Button className="mt-4" onClick={() => router.push(`/career/apply/${job.jobid}`)}>Apply Now</Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





// 'use client';
// import { useParams, useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useDispatch, useSelector } from 'react-redux';
// import { getJobById } from "@/redux/slices/careerSlice";  // Import the thunk to fetch job details

// export default function JobDetailsPage() {
//   const { jobid } = useParams();  // Extract jobid from URL parameters
//   const dispatch = useDispatch();
//   const router = useRouter();
  
//   // Select job details and loading/error states from Redux
//   const { jobDetails, loading, error } = useSelector((state) => state.career);
  
//   useEffect(() => {
//     // Dispatch the action to get job details by jobid when the component mounts
//     if (jobid) {
//       dispatch(getJobById(jobid));
//     }
//   }, [dispatch, jobid]);

//   // Show loading state while fetching job details
//   if (loading) {
//     return <div>Loading job details...</div>;
//   }

//   // Show error state if there is an error in fetching job details
//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   console.log(jobDetails)

//   // If no job details found, show a message
//   if (!jobDetails) {
//     return <p className="text-center text-gray-500">Job not found</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>{jobDetails.jobTitle}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p><strong>JobId:</strong> {jobDetails.job.jobId}</p>
//           <p><strong>Experience:</strong> {jobDetails.job.experience}</p>
//           <p><strong>Role:</strong> {jobDetails.job.jobRole}</p>
//           <p><strong>Location:</strong> {jobDetails.job.location}</p>
//           <p><strong>Salary:</strong> {`$${jobDetails.job.salary}`}</p>
//           <p><strong>Type:</strong> {jobDetails.job.workingSchedule}</p>
//           <p><strong>Job Category:</strong> {jobDetails.job.jobCategory}</p>
//           <p><strong>Skills Required:</strong> {jobDetails.job.skills.join(", ")}</p>
//           <p><strong>Number of Vacancies:</strong> {jobDetails.job.numberOfVacancies}</p>
//           <p><strong>Interview Type:</strong> {jobDetails.job.interviewType}</p>
//           <p><strong>Interview Rounds:</strong> {jobDetails.job.interviewRounds.join(", ")}</p>
//           <p><strong>Published On:</strong> {new Date(jobDetails.job.publishDate).toLocaleDateString()}</p>
//           <p><strong>Expiration Date:</strong> {new Date(jobDetails.job.expiredDate).toLocaleDateString()}</p>
//           <p><strong>Job Description:</strong> {jobDetails.job.jobDescription}</p>

//           <Button className="mt-4" onClick={() => router.push(`/career/apply/${jobDetails.jobId}`)}>Apply Now</Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDispatch, useSelector } from 'react-redux';
import { getJobById } from "@/redux/slices/careerSlice";  // Import the thunk to fetch job details

export default function JobDetailsPage() {
  const { jobid } = useParams();  // Extract jobid from URL parameters
  const dispatch = useDispatch();
  const router = useRouter();
  
  // Select job details and loading/error states from Redux
  const { jobDetails, loading, error } = useSelector((state) => state.career);
  
  useEffect(() => {
    // Dispatch the action to get job details by jobid when the component mounts
    if (jobid) {
      dispatch(getJobById(jobid));
    }
  }, [dispatch, jobid]);

  // Show loading state while fetching job details
  if (loading) {
    return <div>Loading job details...</div>;
  }

  // Show error state if there is an error in fetching job details
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  console.log(jobDetails);

  // If no job details found, show a message
  if (!jobDetails) {
    return <p className="text-center text-gray-500">Job not found</p>;
  }

  return (
    <div className="mx-auto p-6">
      {/* Single Card for All Details */}
      <Card className="w-full p-6 relative"> {/* Set relative positioning for the card */}
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{jobDetails.jobTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Job Details Column */}
            <div className="space-y-3">
              <p><strong>Job ID:</strong> {jobDetails.job.jobId}</p>
              <p><strong>Experience:</strong> {jobDetails.job.experience}</p>
              <p><strong>Role:</strong> {jobDetails.job.jobRole.join(", ")}</p>
              <p><strong>Location:</strong> {jobDetails.job.location}</p>
              <p><strong>Salary:</strong> ${jobDetails.job.salary}</p>
              <p><strong>Type:</strong> {jobDetails.job.workingSchedule}</p>
              <p><strong>Job Category:</strong> {jobDetails.job.jobCategory}</p>
              <p><strong>Skills Required:</strong> {jobDetails.job.skills.join(", ")}</p>
              <p><strong>Number of Vacancies:</strong> {jobDetails.job.numberOfVacancies}</p>
              <p><strong>Interview Type:</strong> {jobDetails.job.interviewType}</p>
              <p><strong>Interview Rounds:</strong> {jobDetails.job.interviewRounds.join(", ")}</p>
              <p><strong>Published On:</strong> {new Date(jobDetails.job.publishDate).toLocaleDateString()}</p>
              <p><strong>Expiration Date:</strong> {new Date(jobDetails.job.expiredDate).toLocaleDateString()}</p>
            </div>

            {/* Job Description Column */}
            <div className="space-y-3">
              <p className="font-semibold text-lg">Job Description</p>
              <p className="text-gray-600">
                {jobDetails.job.jobDescription.length > 40 
                  ? `${jobDetails.job.jobDescription}` 
                  : jobDetails.job.jobDescription}
              </p>
            </div>
                {/* Apply Button Positioned in the Right-Bottom Corner */}
                <Button 
                  className="absolute bottom-4 right-4" 
                  onClick={() => router.push(`/career/apply/${jobDetails.job.jobId}`)}
                >
                  Apply Now
                </Button>
          </div>
        </CardContent>

      </Card>
    </div>
  );
}
