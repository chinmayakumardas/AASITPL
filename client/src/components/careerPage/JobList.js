

// 'use client';
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { useRouter } from "next/navigation";

// const jobs = [
//   { jobid: 1, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
//   { jobid: 2, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
//   { jobid: 3, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
//   { jobid: 4, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
//   { jobid: 5, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
// ];

// export default function JobListPage() {
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 5;
//   const router = useRouter();

//   const handleSearch = () => {
//     setQuery(search);
//   };

//   const filteredJobs = jobs.filter((job) =>
//     job.title.toLowerCase().includes(query.toLowerCase())
//   );

//   const paginatedJobs = filteredJobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

//   return (
//     <div className="w-full mx-auto p-6 space-y-4">
//       <div className="flex space-x-2">
//         <Input
//           placeholder="Search jobs..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <Button onClick={handleSearch}>Search</Button>
//       </div>
//       <div className="overflow-x-auto">
//         {paginatedJobs.length > 0 ? (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Job Title</TableHead>
//                 <TableHead>Experience</TableHead>
//                 <TableHead>Role</TableHead>
//                 <TableHead>Location</TableHead>
//                 <TableHead>Salary</TableHead>
//                 <TableHead>Type</TableHead>
//                 <TableHead>Action</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {paginatedJobs.map((job) => (
//                 <TableRow key={job.jobid} onClick={() => router.push(`/career/jobs/${job.jobid}`)} className="cursor-pointer hover:bg-gray-100">
//                   <TableCell>{job.title}</TableCell>
//                   <TableCell>{job.experience}</TableCell>
//                   <TableCell>{job.role}</TableCell>
//                   <TableCell>{job.location}</TableCell>
//                   <TableCell>{job.salary}</TableCell>
//                   <TableCell>{job.type}</TableCell>
//                   <TableCell>
//                     <Button variant="primary" onClick={(e) => { e.stopPropagation(); router.push(`/career/apply/${job.jobid}`); }}>Apply</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         ) : (
//           <p className="text-gray-500 text-center">No jobs found.</p>
//         )}
//       </div>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href="#" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} />
//           </PaginationItem>
//           {[...Array(Math.ceil(filteredJobs.length / itemsPerPage))].map((_, index) => (
//             <PaginationItem key={index}>
//               <PaginationLink href="#" isActive={page === index + 1} onClick={() => setPage(index + 1)}>
//                 {index + 1}
//               </PaginationLink>
//             </PaginationItem>
//           ))}
//           <PaginationItem>
//             <PaginationNext href="#" onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(filteredJobs.length / itemsPerPage)))} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// }




'use client';
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getJobList, applyForJob } from "@/redux/slices/careerSlice";  // Import thunks

export default function JobListPage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();
  const dispatch = useDispatch();

  // Select job state from Redux
  const { jobList, loading, error, applicationStatus } = useSelector((state) => state.career);

  // Fetch job list when the component mounts
  useEffect(() => {
    dispatch(getJobList());
  }, [dispatch]);

  // Handle search action
  const handleSearch = () => {
    setQuery(search);
  };

  // Filter jobs based on search query
  const filteredJobs = jobList.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  // Paginate filtered jobs
  const paginatedJobs = filteredJobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Handle Apply Job action
  const handleApply = (jobId) => {
  //dispatch(applyForJob({ jobId, userData }));
    router.push(`/career/apply/${jobId}`)
  };

  return (
    <div className="w-full mx-auto p-6 space-y-4">
      <div className="flex  space-x-2">
        <Input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Loading Spinner */}
      {loading && <div>Loading jobs...</div>}

      {/* Displaying Error */}
      {error && <div className="text-red-500">{error}</div>}

      <div className="overflow-x-auto">
        {paginatedJobs.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedJobs.map((job) => (
                <TableRow key={job._id} onClick={() => router.push(`/career/jobs/${job.jobId}`)} className="cursor-pointer hover:bg-gray-100">
                  <TableCell>{job.jobTitle}</TableCell>
                  <TableCell>{job.experience}</TableCell>
                  <TableCell>{job.jobRole.join(", ")}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{`$${job.salary}`}</TableCell>
                  <TableCell>{job.workingSchedule}</TableCell>
                  <TableCell>
                    <Button 
                      
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleApply(job.jobId); 
                      }}
                    >
                      Apply
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-500 text-center">No jobs found.</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} />
          </PaginationItem>
          {[...Array(Math.ceil(filteredJobs.length / itemsPerPage))].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href="#" isActive={page === index + 1} onClick={() => setPage(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(filteredJobs.length / itemsPerPage)))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Show application status */}
      {applicationStatus && (
        <div className={`text-center ${applicationStatus === 'Failed' ? 'text-red-500' : 'text-green-500'}`}>
          {applicationStatus === 'Failed' ? 'Application failed, please try again.' : 'Successfully applied for the job!'}
        </div>
      )}
    </div>
  );
}
