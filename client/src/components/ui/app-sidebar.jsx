

"use client";
import Link from "next/link";
import * as React from "react";
import {
  Grid, Bell, Users, FileText, Edit,
  BookOpen,
  Bot,
  Command,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navData = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Grid,
      isActive: true,
    },
    {
      title: "Notification",
      url: "#",
      icon: Bell,
      
      items: [
        { title: "All Request", url: "/admin/request" },
        { title: "Notification", url: "/admin/notification" },
        
      ],
    },
    {
      title: "User",
      url: "#",
      icon: Users,
      items: [
        { title: "All Users", url: "/admin/user" },
        { title: "Registration", url: "/admin/registration" },
      ],
    },
    {
      title: "Pages",
      url: "#",
      icon: FileText,
      items: [
        { title: "All Page", url: "/admin/page" },
        
      ],
    },
    {
      title: "Blog",
      url: "#",
      icon: Edit,
      items: [
        { title: "All Blog", url: "/admin/blog" },
        { title: "Master", url: "/admin/blog/master" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Profile", url: "/admin/profile" },
        { title: "Password change", url: "/admin/profile/reset-password" },
       
      ],
    },
  ],
  auther: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Profile", url: "#" },
        { title: "Password change", url: "#" },
      ],
    },
  ],
  editor: [
    {
      title: "Home",
      url: "#",
      icon: BookOpen,
      items: [],
    },
    {
      title: "Login",
      url: "#",
      icon: Bot,
      items: [],
    },
  ],
};

const userData = {
  admin: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  editor: {
    name: "Editor",
    email: "editor@example.com",
    avatar: "/avatars/user.jpg",
  },
  auther: {
    name: "Auther",
    email: "auther@example.com",
    avatar: "/avatars/guest.jpg",
  },
};

export function AppSidebar({ user }) {
  const { role } = user;
  const navItems = navData[role] || navData.guest;
  const userInfo = userData[role] || userData.guest;

  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">AAS ONE</span>
                  <span className="truncate text-xs"></span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter>
    </Sidebar>
  );
}