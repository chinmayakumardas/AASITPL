

// 'use client';
// import { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// const steps = ["Personal Info", "Education", "Experience", "Certificates & Resume", "Declaration"];

// export default function MultiStepForm() {
//   const { jobid } = useParams();
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({});
//   const router = useRouter();
//   const parsedJobId = parseInt(jobid, 10);

//   if (!parsedJobId) return <p className="text-center text-gray-500">Invalid Job ID</p>;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

//   return (
//     <div className=" mx-auto p-6 space-y-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Applying for Job ID: {parsedJobId}</CardTitle>
//           <p className="text-gray-600">Step {step + 1}: {steps[step]}</p>
//         </CardHeader>
//         <CardContent>
//           {/* Step 1: Personal Information */}
//           {step === 0 && (
//             <>
//               <Input name="fullName" placeholder="Full Name" onChange={handleChange} className="mb-4" />
//               <Input name="email" placeholder="Email" type="email" onChange={handleChange} className="mb-4" />
//               <Input name="phone" placeholder="Phone Number" type="tel" onChange={handleChange} className="mb-4" />
//               <Textarea name="address" placeholder="Address" onChange={handleChange} className="mb-4" />
//               <Input name="dob" placeholder="Date of Birth" type="date" onChange={handleChange} className="mb-4" />
//               <Input name="gender" placeholder="Gender" onChange={handleChange} className="mb-4" />
//             </>
//           )}

//           {/* Step 2: Education */}
//           {step === 1 && (
//             <>
//               <Input name="qualification" placeholder="Highest Qualification" onChange={handleChange} className="mb-4" />
//               <Input name="university" placeholder="University/College" onChange={handleChange} className="mb-4" />
//               <Input name="passingYear" placeholder="Year of Passing" type="number" onChange={handleChange} className="mb-4" />
//               <Input name="cgpa" placeholder="CGPA/Percentage" type="number" onChange={handleChange} className="mb-4" />
//             </>
//           )}

//           {/* Step 3: Work Experience */}
//           {step === 2 && (
//             <>
//               <Input name="company" placeholder="Company Name" onChange={handleChange} className="mb-4" />
//               <Input name="role" placeholder="Role/Designation" onChange={handleChange} className="mb-4" />
//               <Input name="duration" placeholder="Duration (Years)" type="number" onChange={handleChange} className="mb-4" />
//               <Textarea name="skills" placeholder="Key Skills" onChange={handleChange} className="mb-4" />
//             </>
//           )}

//           {/* Step 4: Certificates & Resume */}
//           {step === 3 && (
//             <>
//               <Input name="resume" label="Upload Resume" className="mb-4" />
//               <Textarea name="certifications" placeholder="Enter Certification Details" onChange={handleChange} className="mb-4" />
//             </>
//           )}

//           {/* Step 5: Declaration */}
//           {step === 4 && (
//             <>
//               <p className="text-gray-600">
//                 I hereby declare that all the information provided above is true to the best of my knowledge.
//               </p>
//               <Input name="agree" type="checkbox" className="mr-2" /> I agree to the terms & conditions.
//             </>
//           )}

//           <div className="flex justify-between mt-4">
//             <Button onClick={prevStep} disabled={step === 0}>Back</Button>
//             {step < steps.length - 1 ? (
//               <Button onClick={nextStep}>Next</Button>
//             ) : (
//               <Button onClick={() => {
//                 alert('Application Submitted!');
//                 router.push('/career');
//               }}>Submit</Button>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"; // Shadcn UI input component
import { Button } from "@/components/ui/button"; // Shadcn UI button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Card components from Shadcn UI
import { Textarea } from "@/components/ui/textarea"; // Shadcn UI Textarea
import { useDispatch } from 'react-redux';
import { applyForJob } from '@/redux/slices/careerSlice';
import { useToast } from "@/hooks/use-toast";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    gender: '',
    dateOfBirth: '',
    passoutYear: '',
    highestQualification: '',
    yearOfExperience: '',
    address: '',
    skills: '',
    role: '',
  });

  const [resume, setResume] = useState(null); 
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSubmit = new FormData();
      // Append the form fields to FormData
      for (const key in formData) {
        formDataToSubmit.append(key, formData[key]);
      }
      // Append the resume file
      if (resume) {
        formDataToSubmit.append('uploadYourResume', resume);
        formDataToSubmit.append('resumeMimeType', resume.type);
      }

      // Dispatch the applyForJob action
      await dispatch(applyForJob(formDataToSubmit));
      console.log("Applicat data",formData)
      toast({
        description: "Job Applied Successfully!",
      });
      
      router.push('/career'); // Redirect after successful submission
    } catch (error) {
      console.error(error);
      toast({
        description: "Error while applying!",
      });
    }
  };

  return (
    <div className="mx-auto p-6 space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Apply for Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Column 1: Left side */}
          <div className="space-y-4">
            <Input 
              name="fullName" 
              placeholder="Full Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Input 
              name="email" 
              placeholder="Email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <div className="flex mb-4">
              <Input 
                name="contact" 
                placeholder="Phone Number" 
                type="tel" 
                value={formData.contact} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md flex-grow"
              />
            </div>
            <Input 
              name="dateOfBirth" 
              placeholder="Date of Birth" 
              type="date" 
              value={formData.dateOfBirth} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Textarea 
              name="address" 
              placeholder="Address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
          </div>
  
          {/* Column 2: Right side */}
          <div className="space-y-4">
            {/* Gender Dropdown */}
            <div>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
  
            {/* Year of Experience Dropdown */}
            <div>
              <select 
                name="yearOfExperience" 
                value={formData.yearOfExperience} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Experience</option>
                <option value="0-1">0-1 Years</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>
  
            {/* Year of Passing as a dropdown with only years */}
            <div>
              <select 
                name="passoutYear" 
                value={formData.passoutYear} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Year</option>
                {[...Array(30).keys()].map(i => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
  
            <Input 
              name="highestQualification" 
              placeholder="Highest Qualification" 
              value={formData.highestQualification} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Textarea 
              name="skills" 
              placeholder="Key Skills" 
              value={formData.skills} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Input 
              name="role" 
              placeholder="Role" 
              value={formData.role} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
  
            {/* Resume Upload */}
            <input 
              type="file" 
              name="uploadYourResume" 
              onChange={handleFileChange} 
              accept=".pdf,.docx,.txt" 
              className="w-full p-3 border rounded-md" 
            />
          </div>
  
          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-6">
            <Button type="submit" className="w-full sm:w-auto max-w-sm">
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  
  );
}
