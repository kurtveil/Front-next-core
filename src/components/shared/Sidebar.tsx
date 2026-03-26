"use client";
import {
  Archive,
  Calendar,
  ChartNoAxesGantt,
  LayoutDashboard,
  ShieldHalf,
} from "lucide-react";
import Link from "next/link";
export const MENU_OPTIONS = [
  {
    name: "DashBoard",
    route: "/",
    icon: (
      <LayoutDashboard className="w-7 h-7 m-3 text-white hover:text-blue-700" />
    ),
  },
   {
    name: "Projects",
    route: "/projects",
    icon: (
      <ChartNoAxesGantt className="w-7 h-7 m-3 text-white hover:text-blue-700" />
    ),
  },
   {
    name: "Team",
    route: "/team",
    icon: (
       <ShieldHalf className="w-7 h-7 m-3 text-white hover:text-blue-700" />
    ),
  },
   {
    name: "Calendar",
    route: "/calendar",
    icon: (
      <Calendar className="w-7 h-7 m-3 text-white hover:text-blue-700" />
    ),
  },
  {
    name:'Archive',
    route: '/archive',
    icon: <Archive className="w-7 h-7 m-3 text-white hover:text-blue-700" />
  }
];
export default function Sidebar() {
  return (
    <>
      <aside className="w-64 border-r border-slate-800 bg-linear-to-b from-gray-950 to-mauve-950 hidden md:block shrink-0">
        <div className="p-6 font-bold text-xl  border-slate-800 text-white">
          <h6>{"Premium WorkSpace"}</h6>
        </div>
        <nav className=" p-4 space-y-2">
          {MENU_OPTIONS.map((menu) => {
            return (
              <Link key={menu.name} href={menu.route}>
                <div className="flex p-2 items-center hover:bg-gray-800 rounded-lg cursor-pointer">
                  {menu.icon}
                  {menu.name}
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
