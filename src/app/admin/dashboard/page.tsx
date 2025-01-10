"use client";

import AdminDashboard from "@/app/compoents/admin/adminDashboard";
import Events from "@/app/compoents/admin/events";
export default function DashBoard() {
  return (
    <div>
      <AdminDashboard>
        <Events />
      </AdminDashboard>
    </div>
  );
}
