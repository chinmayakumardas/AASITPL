
'use client';
import React from "react";
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { useRouter } from 'next/navigation';
import Footer from "./Footer";
import Header from "./Header";

export default function PublicLayout({ children }) {

  return (
            <div className=" ">
                <Provider store={store}>
                        <Header/>
                        {children}
                        <Footer/>
                </Provider>
            </div>
  );
}




