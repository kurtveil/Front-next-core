"use client";
import { User, Bell, Settings, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { MENU_OPTIONS } from "./Sidebar";
import { useState } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { authService } from "@/src/services/auth/auth.service";
import { toast } from "sonner";

export default function Navbar() {
  const currentPath = usePathname();
  const menu = MENU_OPTIONS;
  const path = menu.find((item) => item.route === currentPath)?.name;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const response = await authService.handleLogout();
      if (response){
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error);
      
      // toast.error(error);
    }
  }
  return (
    <>
      <header className="h-16 border-b border-cyan-800 bg-linear-to-b from-gray-950 to-mauve-950 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="text-slate-200 text-sm">
          <h6>{path}</h6>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-1">
            <Bell className="w-7 h-7 text-white hover:text-blue-700 cursor-pointer" />
          </div>

          <div className="p-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              className="flex items-center gap-1 p-1 hover:bg-white/10 rounded-lg transition-all cursor-pointer group"
            >
              <User className="w-7 h-7 text-white hover:text-blue-700 cursor-pointer" />
            </button>
            {/* Menú Desplegable */}
            <div
              className={`
            absolute right-0 mt-2 w-48 py-2 bg-gray-900 border border-cyan-800 rounded-md shadow-xl transition-all duration-200
            ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
          `}
            >
              <Link
                href="/perfil"
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-200 hover:bg-cyan-900/30 hover:text-white"
              >
                <User className="w-4 h-4" /> Mi Perfil
              </Link>
              <Link
                href="/configuracion"
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-200 hover:bg-cyan-900/30 hover:text-white"
              >
                <Settings className="w-4 h-4" /> Ajustes
              </Link>
              <hr className="my-1 border-cyan-800" />
              <button onClick={handleSignOut} className="cursor-pointer w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10">
                <LogOut className="w-4 h-4" /> Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
