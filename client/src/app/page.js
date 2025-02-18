
'use client'
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import PublicLayout from '../layout/PublicLayout'
import HeroSection from "@/components/homePage/heroSection";
import ServiceSection from "@/components/homePage/serviceSection";
import { Public } from "@mui/icons-material";
import BlogSection from "@/components/homePage/blogSection";
export default function HomePage() {
  return (
<PublicLayout>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection/>
      <ServiceSection/>
      <BlogSection/>
    </div>


   </PublicLayout>
    
  
  );
}


