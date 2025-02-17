// 'use client';
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { useRouter } from "next/navigation";

// const jobs = [
//   { id: 1, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
//   { id: 2, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
//   { id: 3, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
//   { id: 4, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
//   { id: 5, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
// ];

// export default function JobListPage() {
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 10;
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
//                 <TableRow key={job.id}>
//                   <TableCell>{job.title}</TableCell>
//                   <TableCell>{job.experience}</TableCell>
//                   <TableCell>{job.role}</TableCell>
//                   <TableCell>{job.location}</TableCell>
//                   <TableCell>{job.salary}</TableCell>
//                   <TableCell>{job.type}</TableCell>
//                   <TableCell>
//                     <Button variant="primary" onClick={() => router.push(`/jobs/${job.id}`)}>Apply</Button>
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


// 'use client';
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { useRouter } from "next/navigation";

// const jobs = [
//   { id: 1, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
//   { id: 2, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
//   { id: 3, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
//   { id: 4, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
//   { id: 5, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
//   { id: 6, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
//   { id: 7, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
//   { id: 13, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
//   { id: 14, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
//   { id: 51, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
//   { id: 11, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
//   { id: 21, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
//   { id: 31, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
//   { id: 41, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
//   { id: 51, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
// ];

// export default function JobListPage() {
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const itemsPerPage = 10;

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
//                 <TableRow key={job.id}>
//                   <TableCell>{job.title}</TableCell>
//                   <TableCell>{job.experience}</TableCell>
//                   <TableCell>{job.role}</TableCell>
//                   <TableCell>{job.location}</TableCell>
//                   <TableCell>{job.salary}</TableCell>
//                   <TableCell>{job.type}</TableCell>
//                   <TableCell>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button variant="primary" onClick={() => setSelectedJob(job)}>Apply</Button>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
//                           <DialogDescription>
//                             Job ID: {selectedJob?.id}
//                           </DialogDescription>
//                         </DialogHeader>
//                         <Button onClick={() => alert('Application submitted!')}>Submit Application</Button>
//                       </DialogContent>
//                     </Dialog>
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
import { useState } from "react";
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

const jobs = [
  { jobid: 1, title: "Frontend Developer", experience: "2-4 years", role: "Developer", location: "New York", salary: "$80,000 - $100,000", type: "Full-time" },
  { jobid: 2, title: "Backend Developer", experience: "3-5 years", role: "Engineer", location: "San Francisco", salary: "$90,000 - $110,000", type: "Full-time" },
  { jobid: 3, title: "UI/UX Designer", experience: "1-3 years", role: "Designer", location: "Remote", salary: "$70,000 - $90,000", type: "Contract" },
  { jobid: 4, title: "Full Stack Developer", experience: "4-6 years", role: "Developer", location: "Chicago", salary: "$95,000 - $120,000", type: "Full-time" },
  { jobid: 5, title: "Project Manager", experience: "5-7 years", role: "Manager", location: "Los Angeles", salary: "$100,000 - $130,000", type: "Full-time" },
];

export default function JobListPage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const router = useRouter();

  const handleSearch = () => {
    setQuery(search);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  const paginatedJobs = filteredJobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="w-full mx-auto p-6 space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
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
                <TableRow key={job.jobid} onClick={() => router.push(`/career/jobs/${job.jobid}`)} className="cursor-pointer hover:bg-gray-100">
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.experience}</TableCell>
                  <TableCell>{job.role}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>
                    <Button variant="primary" onClick={(e) => { e.stopPropagation(); router.push(`/career/apply/${job.jobid}`); }}>Apply</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-gray-500 text-center">No jobs found.</p>
        )}
      </div>
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
    </div>
  );
}
