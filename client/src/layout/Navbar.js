// 'use client'
// import { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import Link from "next/link";
// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
 
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// export function NavbarDemo() {
  
//   const {theme,setTheme } = useTheme()
//   return (
//     <div className="w-full border-2 gap-1 h-[70px] flex items-center justify-between px-20 shadow-md shadow-white/30 ">
//         <div className="text-lg font-bold">
//            <Link href='/'> <img src="/assets/aaslogo.png" className="h-[50px]" alt=""  /></Link>
//         </div> {/* Left Company Name */}
//         <Navbar  />
    
//          <div className="flex justify-center items-center space-x-4">
         
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//               >
//                 {theme === "light" ? (
//                   <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
//                 ) : (
//                   <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
//                 )}
//               </Button>
//             </DropdownMenuTrigger>
//           </DropdownMenu>

//           <SearchIcon className="h-[1.2rem] w-[1.2rem] transition-all  mt-3 cursor-pointer" />
//           <Sheet>
//                <SheetTrigger><MenuIcon className="h-[4rem] w-[4rem] transition-all " /></SheetTrigger>
//                <SheetContent>
//                   <SheetHeader>
//                     <SheetTitle></SheetTitle>
//                     <SheetDescription>
//                   <Accordion type="single" collapsible className="w-full">
//                     <AccordionItem value="item-1">
//                       <AccordionTrigger>Home</AccordionTrigger>
//                       <AccordionContent className="w-full flex flex-col">
//                         <Link href="/route1-1">Sub Item 1.1</Link>
//                         <Link href="/route1-2">Sub Item 1.2</Link>
//                         <Link href="/route1-3">Sub Item 1.3</Link>
//                         <Link href="/route1-4">Sub Item 1.4</Link>
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value="item-2">
//                       <AccordionTrigger>Services</AccordionTrigger>
//                       <AccordionContent className="w-full flex flex-col">
//                         <Link href="/home">Sub Item 2.1</Link>
//                         <Link href="/route2-2">Sub Item 2.2</Link>
//                         <Link href="/route2-3">Sub Item 2.3</Link>
//                         <Link href="/route2-4">Sub Item 2.4</Link>
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value="item-3">
//                       <AccordionTrigger>Insight's</AccordionTrigger>
//                       <AccordionContent className="w-full flex flex-col">
//                         <Link href="/route3-1">Sub Item 3.1</Link>
//                         <Link href="/route3-2">Sub Item 3.2</Link>
//                         <Link href="/route3-3">Sub Item 3.3</Link>
//                         <Link href="/route3-4">Sub Item 3.4</Link>
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value="item-4">
//                       <AccordionTrigger >About us</AccordionTrigger>
//                       <AccordionContent className="w-full flex flex-col">
//                         <Link href="/route4-1">Sub Item 4.1</Link>
//                         <Link href="/route4-2">Sub Item 4.2</Link>
//                         <Link href="/route4-3">Sub Item 4.3</Link>
//                         <Link href="/route4-4">Sub Item 4.4</Link>
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>

//                     </SheetDescription>
//                   </SheetHeader>
//                 </SheetContent>
//           </Sheet>
          
//           </div> {/* Right Company Name */}
//     </div>
//   );
// }

// function Navbar() {
//   const [active, setActive] = useState(null);
//   return (
//  <div className={cn("flex-grow max-w-2xl mx-auto z-50 hidden lg:block")}>
//       <Menu setActive={setActive}  >
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Insights">
//           <div className="text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Blog"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Case Stdies"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="About us">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/overview">Overview</HoveredLink>
//             <HoveredLink href="/about-us">About us</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/career">Careers</HoveredLink>
//             <HoveredLink href="/blog">Blog</HoveredLink>
//             <HoveredLink href="/contact">Connect with us</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }

'use client'
import "../app/globals.css";
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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Adjust path
import { ListItem } from "@mui/material";
import  Insights  from "@/layout/header/Insights";
const components = [
  { title: 'Alert Dialog', href: '/docs/primitives/alert-dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.' },
  { title: 'Hover Card', href: '/docs/primitives/hover-card', description: 'For sighted users to preview content available behind a link.' },
  { title: 'Progress', href: '/docs/primitives/progress', description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
  { title: 'Scroll-area', href: '/docs/primitives/scroll-area', description: 'Visually or semantically separates content.' },
  { title: 'Tabs', href: '/docs/primitives/tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
  { title: 'Tooltip', href: '/docs/primitives/tooltip', description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' },
];
export function NavbarDemo() {
  
  const {theme,setTheme } = useTheme()
  return (
    // <div className="w-full border-2 gap-1 h-[70px] flex items-center justify-between px-20 shadow-md shadow-white/30 ">
    //     <div className="text-lg font-bold flex gap-5 justify-center items-center">  
    //        <Link href='/'> <img src="/assets/aaslogo.png" className="h-[50px]" alt=""  /></Link>
    //        <Navbar  />
      
        
    //     </div> {/* Left Company Name */}
        
    //      <div className="flex justify-center items-center space-x-4">
         
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button
    //             variant="outline"
    //             size="icon"
    //             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    //           >
    //             {theme === "light" ? (
    //               <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
    //             ) : (
    //               <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
    //             )}
    //           </Button>
    //         </DropdownMenuTrigger>
    //       </DropdownMenu>

    //       <SearchIcon className="h-[1.2rem] w-[1.2rem] transition-all  mt-3 cursor-pointer" />
    //           <Sheet className="">
    //     <SheetTrigger className="block lg:hidden">
    //       <MenuIcon className="h-[4rem] w-[4rem] transition-all" />
    //     </SheetTrigger>
    //     <SheetContent>
    //       <SheetHeader>
    //         <SheetTitle></SheetTitle>
    //         <SheetDescription>
    //           <Accordion type="single" collapsible className="w-full">
    //             <AccordionItem value="item-1">
    //               <AccordionTrigger className="p-4 transition-colors duration-300 hover:bg-gray-200">Home</AccordionTrigger>
    //               <AccordionContent className="w-full flex flex-col">
    //                 <Link href="/route1-1" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 1.1</Link>
    //                 <Link href="/route1-2" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 1.2</Link>
    //                 <Link href="/route1-3" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 1.3</Link>
    //                 <Link href="/route1-4" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 1.4</Link>
    //               </AccordionContent>
    //             </AccordionItem>
    //             <AccordionItem value="item-2">
    //               <AccordionTrigger className="p-4 transition-colors duration-300 hover:bg-gray-200">Services</AccordionTrigger>
    //               <AccordionContent className="w-full flex flex-col">
    //                 <Link href="/home" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 2.1</Link>
    //                 <Link href="/route2-2" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 2.2</Link>
    //                 <Link href="/route2-3" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 2.3</Link>
    //                 <Link href="/route2-4" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 2.4</Link>
    //               </AccordionContent>
    //             </AccordionItem>
    //             <AccordionItem value="item-3">
    //               <AccordionTrigger className="p-4 transition-colors duration-300 hover:bg-gray-200">Insight's</AccordionTrigger>
    //               <AccordionContent className="w-full flex flex-col">
    //                 <Link href="/case-studies" className="p-4 transition-colors duration-300 hover:bg-gray-100">Case studies</Link>
    //                 <Link href="/route3-2" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 3.2</Link>
    //                 <Link href="/route3-3" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 3.3</Link>
    //                 <Link href="/route3-4" className="p-4 transition-colors duration-300 hover:bg-gray-100">Sub Item 3.4</Link>
    //               </AccordionContent>
    //             </AccordionItem>
    //             <AccordionItem value="item-4">
    //               <AccordionTrigger className="p-4 transition-colors duration-300 hover:bg-gray-200">About us</AccordionTrigger>
    //               <AccordionContent className="w-full flex flex-col">
    //                 <Link href="/route4-1" className="p-4 transition-colors duration-300 hover:bg-gray-100">Overview</Link>
    //                 <Link href="/route4-2" className="p-4 transition-colors duration-300 hover:bg-gray-100">About us</Link>
    //                 <Link href="/route4-3" className="p-4 transition-colors duration-300 hover:bg-gray-100">Connect with us</Link>
    //                 <Link href="/route4-4" className="p-4 transition-colors duration-300 hover:bg-gray-100">Career</Link>
    //                 <Link href="/route4-4" className="p-4 transition-colors duration-300 hover:bg-gray-100">Team</Link>

    //               </AccordionContent>
    //             </AccordionItem>
    //           </Accordion>
    //         </SheetDescription>
    //       </SheetHeader>
    //     </SheetContent>
    //   </Sheet>
    //       </div> {/* Right Company Name */}
    // </div>


    <header className="py-4  bg-white text-black dark:text-white dark:bg-black flex items-center justify-between shadow-md">
    {/* ShadCN Navigation Menu */}
    <NavigationMenu className=''>
         {/* Company Logo */}
         <Link href='/'> <img src="/assets/aaslogo.png" className="h-[50px] mx-10" alt=""  /></Link>
       <NavigationMenuList className="relative flex jsutify-center items-center">
       
         {/* Static More section 1 */}
         <NavigationMenuItem className="group hidden lg:block">
           <NavigationMenuTrigger className="">Insights</NavigationMenuTrigger>
           <NavigationMenuContent className=" transition-all duration-300 group-hover:w-[100vw] ">
             {/* <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
              
               {components.map((component) => (
                 <ListItem
                   key={component.title}
                   title={component.title}
                   href={component.href}
                 >
                   {component.description}
                 </ListItem>
               ))}
             </ul> */}
             <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]  mt-10">
                <ListItem className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
                  <Insights/>
                  
                </ListItem>
             </ul>
           </NavigationMenuContent>
         </NavigationMenuItem>
         {/* Static Getting Started Section 2 */}
         <NavigationMenuItem className="group hidden lg:block">
           <NavigationMenuTrigger>Services</NavigationMenuTrigger>
           <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
           <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
               {[
                 { label: 'Services', route: 'services' },
                 { label: 'Login', route: 'auth' },
                 { label: 'Contact Us', route: 'contact' }
               ].map((component, index) => (
                 <li key={index}>
                   <Link
                     href={`/${component.route}`} // Use the route value for the URL
                     className="text-blue-600 hover:text-blue-800 cursor-pointer"
                   >
                     {component.label} {/* Use the label value for display text */}
                   </Link>
                 </li>
               ))}
             </ul>

           </NavigationMenuContent>
         </NavigationMenuItem>
        
         {/* Static Getting Started Section 3 */}
         <NavigationMenuItem className="group hidden lg:block">
           <NavigationMenuTrigger>More</NavigationMenuTrigger>
           <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
           <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
               {[
                 { label: 'About us', route: '/about-us' },
                 { label: 'Contact Us', route: '/contact' },
                 { label: 'Career', route: '/career' },
                 { label: 'Team', route: '/team' },
                 
                 {/* { label: 'Login', route: 'auth' }, */}
               ].map((component, index) => (
                 <li key={index}>
                   <Link
                     href={`${component.route}`} // Use the route value for the URL
                     className="text-blue-600 hover:text-blue-800 cursor-pointer"
                   >
                     {component.label} {/* Use the label value for display text */}
                   </Link>
                 </li>
               ))}
             </ul>

           </NavigationMenuContent>
         </NavigationMenuItem>

     
       </NavigationMenuList>

     </NavigationMenu>
           <div className="flex justify-center items-center space-x-4 mx-10">
         
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
     
               <SearchIcon className="h-[1.2rem] w-[1.2rem] transition-all  mt-3 cursor-pointer" />
              <Sheet className="">
                  <SheetTrigger className="block lg:hidden">
                    <MenuIcon className="h-[4rem] w-[4rem] transition-all" />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle></SheetTitle>
                      <SheetDescription className='py-3'>
                        <Accordion type="single" collapsible className="w-full">
                        
                        
                      
                        
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]" >Home</AccordionTrigger>
                        <AccordionContent className="w-full flex flex-col text-[1rem]">
                          <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                          <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                          <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                          <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]">Services</AccordionTrigger>
                        <AccordionContent className="w-full flex flex-col text-[1rem]">
                          <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                          <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                          <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                          <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]">Insights</AccordionTrigger>
                        <AccordionContent className="w-full flex flex-col text-[1rem]">
                          <Link href="/case-studies" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                          <Link href="/mission" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                          <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                          <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]">About us</AccordionTrigger>
                        <AccordionContent className="w-full flex flex-col text-[1rem]">
                          <Link href="/about-us" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                          <Link href="/team" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                          <Link href="/blog" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                          <Link href="/contact" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                        </AccordionContent>
                      </AccordionItem>
                        
                      
                        </Accordion>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
              </Sheet>
               </div> {/* Right Company Name */}
  
  
</header>

  );
}

function Navbar() {
  const [active, setActive] = useState(null);
  return (
 <div className={cn("flex-grow max-w-2xl mx-auto z-50 hidden lg:block")}>
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
