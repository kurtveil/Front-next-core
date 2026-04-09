import Navbar from "@/src/components/shared/Navbar";
import Sidebar from "@/src/components/shared/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <div className="flex min-h-screen ">
          <Sidebar />

          <div className="flex-1 flex flex-col">
            <Navbar />

            <main className="m-2  overflow-y-auto">{children}</main>
          </div>
        </div>
    </>
  );
}
