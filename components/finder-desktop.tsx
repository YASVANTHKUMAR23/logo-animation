"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { IconBrandApple, IconWifi, IconBatteryFilled } from "@tabler/icons-react";

export interface Project {
  id: string;
  folderLabel: string;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  github: string;
  demo: string;
  top: string;
  left: string;
  imageUrl: string;
  date: { month: string; day: number };
  location: { city: string; country: string };
  tag: string;
}

export const projects: Project[] = [
  {
    id: "current",
    folderLabel: "current",
    title: "Portfolio v2",
    description: "A modern developer portfolio built with Next.js, Framer Motion, and Tailwind CSS featuring smooth scroll animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    gradient: "from-blue-400 to-indigo-600",
    github: "#",
    demo: "#",
    top: "12%",
    left: "12%",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    date: { month: "MAR", day: 15 },
    location: { city: "San Francisco", country: "CA, USA" },
    tag: "Frontend",
  },
  {
    id: "post",
    folderLabel: "post",
    title: "Social Dashboard",
    description: "Full-stack social media dashboard with real-time updates, analytics charts, and post scheduling features.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    gradient: "from-pink-400 to-rose-600",
    github: "#",
    demo: "#",
    top: "12%",
    left: "52%",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    date: { month: "FEB", day: 28 },
    location: { city: "New York", country: "NY, USA" },
    tag: "Full-stack",
  },
  {
    id: "auth-app",
    folderLabel: "auth-app",
    title: "Auth System",
    description: "Secure authentication system with JWT, OAuth2.0, refresh token rotation, and role-based access control.",
    tech: ["Express", "JWT", "OAuth", "MongoDB"],
    gradient: "from-emerald-400 to-teal-600",
    github: "#",
    demo: "#",
    top: "52%",
    left: "18%",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
    date: { month: "JAN", day: 10 },
    location: { city: "London", country: "UK" },
    tag: "Backend",
  },
  {
    id: "api-core",
    folderLabel: "api-core",
    title: "REST API Core",
    description: "Production-ready REST API boilerplate with rate limiting, caching, OpenAPI docs, and CI/CD pipeline.",
    tech: ["Node.js", "Redis", "Docker", "Swagger"],
    gradient: "from-amber-400 to-orange-600",
    github: "#",
    demo: "#",
    top: "52%",
    left: "55%",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    date: { month: "NOV", day: 5 },
    location: { city: "Berlin", country: "Germany" },
    tag: "Architecture",
  },
];

const MacFolderIcon = () => (
  <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8">
    {/* Folder back */}
    <rect x="0" y="12" width="100" height="68" rx="6" fill="url(#folderBack)" />
    {/* Folder tab */}
    <path d="M0 20 Q0 12 8 12 L35 12 Q40 12 43 17 L48 24 L100 24 L100 20 Q100 12 92 12" fill="url(#folderTab)" />
    {/* Folder front */}
    <rect x="0" y="22" width="100" height="58" rx="6" fill="url(#folderFront)" />
    {/* Shine overlay */}
    <rect x="2" y="24" width="96" height="20" rx="4" fill="url(#shine)" opacity="0.3" />

    <defs>
      <linearGradient id="folderBack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5EB5F5" />
        <stop offset="100%" stopColor="#1A7FD4" />
      </linearGradient>
      <linearGradient id="folderTab" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7ECBFF" />
        <stop offset="100%" stopColor="#4AAEE8" />
      </linearGradient>
      <linearGradient id="folderFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6DC0F8" />
        <stop offset="100%" stopColor="#2491E0" />
      </linearGradient>
      <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const MacMenuBar = () => (
  <div
    className="w-full h-5 flex items-center justify-between px-2 flex-shrink-0 z-10"
    style={{
      background: "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    }}
  >
    {/* Left side */}
    <div className="flex items-center gap-2 text-white text-[6px] font-medium">
      <span style={{ fontSize: "7px" }}>&#63743;</span>
      <span className="font-bold">Finder</span>
      <span>File</span>
      <span>Edit</span>
      <span>View</span>
      <span>Go</span>
      <span>Window</span>
      <span>Help</span>
    </div>

    {/* Right side — status icons */}
    <div className="flex items-center gap-1 text-white text-[6px]">
      <svg width="6" height="6" viewBox="0 0 24 24" fill="white">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
      </svg>
      <div className="flex items-center gap-[1px]">
        <div className="border border-white rounded-[1px] w-4 h-[6px] relative">
          <div className="bg-white rounded-[0.5px] h-full w-[70%]" />
        </div>
        <div className="bg-white w-[1px] h-[3px] rounded-r-[1px]" />
      </div>
      <span>Tue 9:41 AM</span>
    </div>
  </div>
);

const dockApps = [
  { name: "Finder",   icon: "https://img.icons8.com/color/96/mac-os.png" },
  { name: "Safari",   icon: "https://img.icons8.com/color/96/safari.png" },
  { name: "Chrome",   icon: "https://img.icons8.com/color/96/chrome--v1.png" },
  { name: "Launchpad",icon: "https://img.icons8.com/color/96/launchpad.png" },
  { name: "Calendar", icon: "https://img.icons8.com/color/96/calendar.png" },
  { name: "Maps",     icon: "https://img.icons8.com/color/96/apple-map.png" },
  { name: "Photos",   icon: "https://img.icons8.com/color/96/gallery.png" },
  { name: "Messages", icon: "https://img.icons8.com/color/96/mac-client.png" },
  { name: "Settings", icon: "https://img.icons8.com/color/96/settings.png" },
  { name: "Trash",    icon: "https://img.icons8.com/color/96/trash.png" },
];

const MacDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return 1.5;
    if (distance === 1) return 1.25;
    if (distance === 2) return 1.1;
    return 1;
  };

  return (
    <div
      className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-end gap-[3px] px-2 py-1 rounded-2xl z-20 flex-shrink-0"
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        border: "0.5px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
      }}
    >
      {dockApps.map((app, index) => (
        <div
          key={app.name}
          className="relative w-8 h-8 rounded-[6px] flex items-center justify-center shadow-sm cursor-pointer overflow-hidden"
          style={{
            transform: `scale(${getScale(index)})`,
            transition: "transform 0.15s ease",
            transformOrigin: "bottom",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          title={app.name}
        >
          <Image src={app.icon} alt={app.name} fill className="object-contain" />
        </div>
      ))}
    </div>
  );
};

export const FinderDesktop = ({
  onFolderClick,
}: {
  onFolderClick: (project: Project) => void;
}) => {
  return (
    <div
      className="relative w-full h-full flex flex-col select-none overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 1. Menu Bar — top, frosted glass */}
      <MacMenuBar />

      {/* 2. Desktop area — folders over wallpaper */}
      <div className="relative flex-1">
        {projects.map((project) => (
          <motion.div
            layoutId={project.id}
            key={project.id}
            className="absolute flex flex-col items-center cursor-pointer group"
            style={{ top: project.top, left: project.left }}
            onClick={(e) => {
              e.stopPropagation();
              onFolderClick(project);
            }}
          >
            {/* Highlight ring on hover */}
            <div className="p-1 rounded-lg group-hover:bg-white/20 transition-colors">
              <MacFolderIcon />
            </div>
            <motion.span
              layoutId={`folder-label-${project.id}`}
              className="text-white text-[7px] font-medium text-center mt-0.5 px-1 rounded"
              style={{
                textShadow: "0px 1px 3px rgba(0,0,0,0.9)",
                background: "transparent",
                maxWidth: "52px",
              }}
            >
              {project.folderLabel}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* 3. Dock — bottom, frosted glass with magnification */}
      <MacDock />
    </div>
  );
};
