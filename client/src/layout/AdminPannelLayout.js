import { AppSidebar } from "@/components/ui/app-sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


import { Provider } from 'react-redux';
import store from '@/redux/store'; // Your Redux store
import { ThemeProvider } from "@/components/ui/theme-provider";

export default function AdminPannelLayout({ children }) {
  const user = { role: 'admin' }; // Replace with actual user logic

  return (
   
<ThemeProvider attribute="class">

    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar user={user} />
          <SidebarInset>
            {children} {/* This renders the selected page's content */}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
</ThemeProvider>
   
  );
}




