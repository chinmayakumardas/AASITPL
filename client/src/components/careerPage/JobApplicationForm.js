'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = ["Personal Info", "Education", "Experience", "Certificates", "Declaration"];

export default function MultiStepForm() {
  const { jobid } = useParams();
  const [step, setStep] = useState(0);
  const router = useRouter();
  const parsedJobId = parseInt(jobid, 10);

  if (!parsedJobId) return <p className="text-center text-gray-500">Invalid Job ID</p>;

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
          {step === 0 && <Input placeholder="Full Name" className="mb-4" />}
          {step === 1 && <Input placeholder="Highest Qualification" className="mb-4" />}
          {step === 2 && <Input placeholder="Years of Experience" className="mb-4" />}
          {step === 3 && <Input placeholder="Certifications" className="mb-4" />}
          {step === 4 && <p className="text-gray-600">I declare that all information provided is correct.</p>}
          
          <div className="flex justify-between mt-4">
            <Button onClick={prevStep} disabled={step === 0}>Back</Button>
            {step < steps.length - 1 ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={() => { alert('Application Submitted!'); router.push('/career'); }}>Submit</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
