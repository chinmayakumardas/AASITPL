'use client'
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export function NavbarDemo() {
  
  const {theme,setTheme } = useTheme()
  return (
    <div className="w-full border-2 gap-1 h-[70px] flex items-center justify-center px-10 shadow-md shadow-white/30">
        <div className="text-lg font-bold">
           <Link href='/'> <img src="/assets/aaslogo.png" className="h-[50px]" alt=""  /></Link>
        </div> {/* Left Company Name */}
        <Navbar  />
    
         <div className="flex items-center space-x-4">
         
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
                )}
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>



          <SearchIcon />
          <Sheet>
               <SheetTrigger><MenuIcon /></SheetTrigger>
               <SheetContent>
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Home</AccordionTrigger>
                      <AccordionContent className="w-full flex flex-col">
                        <Link href="/route1-1">Sub Item 1.1</Link>
                        <Link href="/route1-2">Sub Item 1.2</Link>
                        <Link href="/route1-3">Sub Item 1.3</Link>
                        <Link href="/route1-4">Sub Item 1.4</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Services</AccordionTrigger>
                      <AccordionContent className="w-full flex flex-col">
                        <Link href="/home">Sub Item 2.1</Link>
                        <Link href="/route2-2">Sub Item 2.2</Link>
                        <Link href="/route2-3">Sub Item 2.3</Link>
                        <Link href="/route2-4">Sub Item 2.4</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Insight's</AccordionTrigger>
                      <AccordionContent className="w-full flex flex-col">
                        <Link href="/route3-1">Sub Item 3.1</Link>
                        <Link href="/route3-2">Sub Item 3.2</Link>
                        <Link href="/route3-3">Sub Item 3.3</Link>
                        <Link href="/route3-4">Sub Item 3.4</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger >About us</AccordionTrigger>
                      <AccordionContent className="w-full flex flex-col">
                        <Link href="/route4-1">Sub Item 4.1</Link>
                        <Link href="/route4-2">Sub Item 4.2</Link>
                        <Link href="/route4-3">Sub Item 4.3</Link>
                        <Link href="/route4-4">Sub Item 4.4</Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
          </Sheet>
          
        
          </div> {/* Right Company Name */}
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("flex-grow max-w-2xl mx-auto z-50")}>
      <Menu setActive={setActive}  >
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Insights">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Blog"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Case Stdies"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/overview">Overview</HoveredLink>
            <HoveredLink href="/about-us">About us</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/career">Careers</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/contact">Connect with us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
