
'use client';
import React from "react";
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { useRouter } from 'next/navigation';


export default function AdminPannelLayout({ children }) {

  return (
    <Provider store={store}>
        <header>
            admin header
        </header>
            {children}
          <footer>
            Admin footer
          </footer>
    </Provider>
  );
}




