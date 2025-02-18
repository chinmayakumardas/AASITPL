
import AdminPannelLayout from '@/components/layout/AdminPannelLayout';


export default function EditorLayout({ children }) {
  return (
    <>
      <AdminPannelLayout>
        {children}
      </AdminPannelLayout>
    </>
  );
}
