"use client";
type AdminDashboardProps = {
  children: React.ReactNode;
};

import Sidebar from "./sidebar";

export default function AdminDashboard({ children }: AdminDashboardProps) {
  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div> {children}</div>
      </div>
    </div>
  );
}
