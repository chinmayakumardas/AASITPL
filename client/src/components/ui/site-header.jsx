"use client"

import { SidebarIcon } from "lucide-react"

import { SearchForm } from "@/components/ui/search-form"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
const {theme,setTheme } = useTheme()
  return (
    (<header
      className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
       
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
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
      </div>
    </header>)
  );
}
