// 'use client'
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle ,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"  // Ensure this component exists
// import { Checkbox } from "@/components/ui/checkbox" // Assuming you have a checkbox component
// import cn from "clsx" // Import clsx for className handling
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"
// export function ContactUsForm({ className, ...props }) {
//   return (
//     <div className={cn("flex flex-col gap-6 h-full ", className)} {...props}>
      
//         <CardHeader className="text-left">
//           <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Connect with us</CardTitle>
          
//           <CardDescription className="text-1xl lg:text-2xl">
//           We’re so glad you reached out! Connecting you to our experts on the ground is a priority for us.
//           </CardDescription>
//           <CardDescription className="text-1xl lg:text-2xl">
//          Tell us which region you’re looking to find out more about, and we’ll put you in touch.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form>
//             <div className="grid gap-6">
//               {/* First Name Field */}
//               <div className="grid gap-2">
           
//                 <Input
//                   id="first-name"
//                   type="text"
//                   placeholder="First Name"
//                   required
//                 />
//               </div>

//               {/* Last Name Field */}
//               <div className="grid gap-2">
             
//                 <Input
//                   id="last-name"
//                   type="text"
//                   placeholder="Last Name"
//                   required
//                 />
//               </div>

//               {/* Email Field */}
//               <div className="grid gap-2">
              
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="contact@aasint.com"
//                   required
//                 />
//               </div>

//               {/* Reason Dropdown */}
//               <div className="grid gap-2">
//               <Select>
//                 <SelectTrigger className="">
//                     <SelectValue placeholder="What can we help you with?" />
//                 </SelectTrigger>
//                 <SelectContent>
//                     <SelectItem value="collaboration">collaboration</SelectItem>
//                     <SelectItem value="career">career</SelectItem>
//                     <SelectItem value="data & privacy">data and privacy request</SelectItem>
//                     <SelectItem value="services">Services</SelectItem>
//                     <SelectItem value="system">Services</SelectItem>
//                     <SelectItem value="media inquaries">Media Inquiries</SelectItem>
//                     <SelectItem value="sposorship">Sponsorship</SelectItem>
//                     <SelectItem value="feedbak">Website feedback</SelectItem>
//                     <SelectItem value="partners">Alliance & Partners</SelectItem>
//                     <SelectItem value="none of the above">None of the above</SelectItem>
//                 </SelectContent>
//                 </Select>

//               </div>

//               {/* Message Field */}
//               <div className="grid gap-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="Write your message here"
//                   required
//                   rows={6}
//                 />
//               </div>

//               {/* Attachment Field */}
//               <div className="grid w-full  gap-1.5">
                
//                 <Input id="picture" className='flex  items-center' type="file" />
//                 </div>

//               {/* Checkbox */}
//               <div className="flex items-center justify-center gap-2">
//                 <Checkbox id="agree" required />
//                 <Label htmlFor="agree" className="text-sm">
//                   I agree to the{" "}
//                   <a href="#" className="text-blue-500">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-blue-500">
//                     Privacy Policy
//                   </a>
//                 </Label>
//               </div>

//               {/* Submit Button */}
//               <div className="flex items-center justify-center gap-2">

//               <Button type="submit" className="w-[200px]">
//                 Submit
//               </Button>
//               </div>
//             </div>
//           </form>
//         </CardContent>
     
    
//     </div>
//   )
// }



'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import cn from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from 'react-redux';  // Import useDispatch and useSelector
import { useState } from 'react';
import { createContact } from '@/redux/slices/contactSlice'; // Import the action
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

export function ContactUsForm({ className, ...props }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactType: '',
    message: '',
    attachment: null,  // Rename this key to match the backend input name
  });

  // To handle form input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,  // Handle files properly
    }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();  // Create a FormData object for file upload

    // Append form fields to the FormData object
    form.append('firstName', formData.firstName);
    form.append('lastName', formData.lastName);
    form.append('email', formData.email);
    form.append('contactType', formData.contactType);
    form.append('message', formData.message);

    // Only append the file if it exists
    if (formData.attachment) {
      form.append('attachment', formData.attachment);
    }

    try {
      // Dispatch the action to send the contact data to the backend
      await dispatch(createContact(form));
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // Get loading and error states from the Redux store
  const { loading, error } = useSelector((state) => state.contact);

  return (
    <div className={cn("flex flex-col gap-6 min-h-[100vh]", className)} {...props}>
      <CardHeader className="text-left">
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Connect with us
        </CardTitle>
        <CardDescription className="text-1xl lg:text-2xl">
          We’re so glad you reached out! Connecting you to our experts on the ground is a priority for us.
        </CardDescription>
        <CardDescription className="text-1xl lg:text-2xl">
          Tell us which region you’re looking to find out more about, and we’ll put you in touch.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {/* First Name Field */}
            <div className="grid gap-2">
              <Input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name Field */}
            <div className="grid gap-2">
              <Input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="contact@aasint.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Reason Dropdown */}
            <div className="grid gap-2">
              <Select
                name="contactType"
                value={formData.contactType}
                onValueChange={(value) => handleChange({ target: { name: 'contactType', value } })}  // Correct way to update formData
              >
                <SelectTrigger>
                  <SelectValue placeholder="What can we help you with?" />
                </SelectTrigger>
                <SelectContent className="absolute z-10">
                  <SelectGroup >
                    <SelectLabel>What can we help you with?</SelectLabel>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="career">Career</SelectItem>
                    <SelectItem value="data & privacy">Data and Privacy Request</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="media inquiries">Media Inquiries</SelectItem>
                    <SelectItem value="sponsorship">Sponsorship</SelectItem>
                    <SelectItem value="feedback">Website Feedback</SelectItem>
                    <SelectItem value="partners">Alliance & Partners</SelectItem>
                    <SelectItem value="none">None of the Above</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              />
            </div>

            {/* Attachment Field */}
            <div className="grid w-full gap-1.5">
              <Input
                id="picture"
                name="attachment"
                className="flex items-center"
                type="file"
                onChange={handleChange}
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center justify-center gap-2">
              <Checkbox id="agree" required />
              <Label htmlFor="agree" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </Label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center gap-2">
              <Button type="submit" className="w-[200px]" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>

        {/* Show error message if any */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </CardContent>
    </div>
  );
}
