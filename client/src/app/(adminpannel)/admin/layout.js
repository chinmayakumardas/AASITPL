'use client'
import AdminPannelLayout from '@/layout/AdminPannelLayout';
import { Provider } from 'react-redux';

import store from '@/redux/store';
export default function AdminLayout({ children }) {
  return (
        <Provider store={store}>
    <AdminPannelLayout>
        {children}
      </AdminPannelLayout>
    </Provider>
  );
}





