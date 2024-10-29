"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      url:ROUTES.DASHBOARD,
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Students",
      url: "#",
      icon: Bot,
    },
  ],

  UNIVERSITY_COURSE: [
    {
      title: "Course",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Course type",
      url: "#",
      icon: Bot,
    },
    {
      title: "University",
      url: "#",
      icon: BookOpen,
    },

  ],

  CERTIFICATION_COURSE: [
    {
      title: "Course",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Category",
      url: "#",
      icon: Bot,
    },

  ],
  ENGAGE: [
    {
      title: "Notifications ",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "FAQ",
      url: "#",
      icon: Bot,
    },
    {
      title: "Settings2",
      url: "#",
      icon: Bot,
    },

  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain label="Main" items={data.navMain} />
        <NavMain label="Certification Course" items={data.CERTIFICATION_COURSE} />
        <NavMain label="University Course" items={data.UNIVERSITY_COURSE} />
        <NavMain label="Engage" items={data.ENGAGE} />

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
