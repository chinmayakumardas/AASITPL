// 'use client';
// import { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const steps = ["Personal Info", "Education", "Experience", "Certificates", "Declaration"];

// export default function MultiStepForm() {
//   const { jobid } = useParams();
//   const [step, setStep] = useState(0);
//   const router = useRouter();
//   const parsedJobId = parseInt(jobid, 10);

//   if (!parsedJobId) return <p className="text-center text-gray-500">Invalid Job ID</p>;

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

//   return (
//     <div className="max-w-lg mx-auto p-6 space-y-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Applying for Job ID: {parsedJobId}</CardTitle>
//           <p className="text-gray-600">Step {step + 1}: {steps[step]}</p>
//         </CardHeader>
//         <CardContent>
//           {step === 0 && <Input placeholder="Full Name" className="mb-4" />}
//           {step === 1 && <Input placeholder="Highest Qualification" className="mb-4" />}
//           {step === 2 && <Input placeholder="Years of Experience" className="mb-4" />}
//           {step === 3 && <Input placeholder="Certifications" className="mb-4" />}
//           {step === 4 && <p className="text-gray-600">I declare that all information provided is correct.</p>}
          
//           <div className="flex justify-between mt-4">
//             <Button onClick={prevStep} disabled={step === 0}>Back</Button>
//             {step < steps.length - 1 ? (
//               <Button onClick={nextStep}>Next</Button>
//             ) : (
//               <Button onClick={() => { alert('Application Submitted!'); router.push('/career'); }}>Submit</Button>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileInput } from "@/components/ui/input";

const steps = ["Personal Info", "Education", "Experience", "Certificates & Resume", "Declaration"];

export default function MultiStepForm() {
  const { jobid } = useParams();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const parsedJobId = parseInt(jobid, 10);

  if (!parsedJobId) return <p className="text-center text-gray-500">Invalid Job ID</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-lg mx-auto p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Applying for Job ID: {parsedJobId}</CardTitle>
          <p className="text-gray-600">Step {step + 1}: {steps[step]}</p>
        </CardHeader>
        <CardContent>
          {/* Step 1: Personal Information */}
          {step === 0 && (
            <>
              <Input name="fullName" placeholder="Full Name" onChange={handleChange} className="mb-4" />
              <Input name="email" placeholder="Email" type="email" onChange={handleChange} className="mb-4" />
              <Input name="phone" placeholder="Phone Number" type="tel" onChange={handleChange} className="mb-4" />
              <Textarea name="address" placeholder="Address" onChange={handleChange} className="mb-4" />
              <Input name="dob" placeholder="Date of Birth" type="date" onChange={handleChange} className="mb-4" />
              <Input name="gender" placeholder="Gender" onChange={handleChange} className="mb-4" />
            </>
          )}

          {/* Step 2: Education */}
          {step === 1 && (
            <>
              <Input name="qualification" placeholder="Highest Qualification" onChange={handleChange} className="mb-4" />
              <Input name="university" placeholder="University/College" onChange={handleChange} className="mb-4" />
              <Input name="passingYear" placeholder="Year of Passing" type="number" onChange={handleChange} className="mb-4" />
              <Input name="cgpa" placeholder="CGPA/Percentage" type="number" onChange={handleChange} className="mb-4" />
            </>
          )}

          {/* Step 3: Work Experience */}
          {step === 2 && (
            <>
              <Input name="company" placeholder="Company Name" onChange={handleChange} className="mb-4" />
              <Input name="role" placeholder="Role/Designation" onChange={handleChange} className="mb-4" />
              <Input name="duration" placeholder="Duration (Years)" type="number" onChange={handleChange} className="mb-4" />
              <Textarea name="skills" placeholder="Key Skills" onChange={handleChange} className="mb-4" />
            </>
          )}

          {/* Step 4: Certificates & Resume */}
          {step === 3 && (
            <>
              <Input name="resume" label="Upload Resume" className="mb-4" />
              <Textarea name="certifications" placeholder="Enter Certification Details" onChange={handleChange} className="mb-4" />
            </>
          )}

          {/* Step 5: Declaration */}
          {step === 4 && (
            <>
              <p className="text-gray-600">
                I hereby declare that all the information provided above is true to the best of my knowledge.
              </p>
              <Input name="agree" type="checkbox" className="mr-2" /> I agree to the terms & conditions.
            </>
          )}

          <div className="flex justify-between mt-4">
            <Button onClick={prevStep} disabled={step === 0}>Back</Button>
            {step < steps.length - 1 ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={() => {
                alert('Application Submitted!');
                router.push('/career');
              }}>Submit</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
