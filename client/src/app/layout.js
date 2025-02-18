// 'use client'
// import PublicLayout from "@/layout/PublicLayout";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import { Provider } from "react-redux";
// import store from "@/redux/store";
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
        
//       >
        
// <Provider store={store}>
//        <ThemeProvider  attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange>
//               <PublicLayout>
             
             
//               {children}
//               </PublicLayout>
//                {/* <PublicLayout>{children}</PublicLayout>
                  
//        */}
//         </ThemeProvider>
//           </Provider>    
//       </body>
//     </html>
//   );
// }
'use client'
import PublicLayout from "@/layout/PublicLayout";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        

              
             
           <Provider store={store}>
              {children}
            </Provider>  
           
        
      </body>
    </html>
  );
}
