
import AdminPannelLayout from '@/components/layout/AdminPannelLayout';


export default function AutherLayout({ children }) {
  return (
    <>
      <AdminPannelLayout>
        {children}
      </AdminPannelLayout>
    </>
  );
}
