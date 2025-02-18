
'use client';
import React from "react";
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { useRouter } from 'next/navigation';
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster"
import { NavbarDemo } from "./Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
export default function PublicLayout({ children }) {

  return (
          <Provider store={store}>
            <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
>

                <div className="flex flex-col min-h-screen justify-between">
                            <NavbarDemo/>
                            {children}
                            <Footer/>
                            <Toaster  />
                </div>
            </ThemeProvider>
          </Provider>
  );
}




