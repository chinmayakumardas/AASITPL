
import PublicLayout from "@/layout/PublicLayout";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
                <PublicLayout>
                    
                {children}
                  </PublicLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
