
'use client'
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import PublicLayout from '../layout/PublicLayout'
import HeroSection from "@/components/homePage/heroSection";
import ServiceSection from "@/components/homePage/serviceSection";
export default function HomePage() {
  return (
 
  
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection/>
      <ServiceSection/>
    </div>
    
  
  );
}


