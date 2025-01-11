import React from "react";
import { useEffect } from "react";

import adminService from "@/app/service/adminService";
import { useAdminContext } from "@/app/context/adminContext";
import { SkeletonTable } from "@/app/lib/lib";

export default function AdminTable() {
  const { getAllEvents } = adminService();
  const { allEvents, isLoading } = useAdminContext();

  useEffect(() => {
    getAllEvents();
  }, []);

  console.log(allEvents);
  return (
    <div>
      AdminTable
      {isLoading && SkeletonTable()}
    </div>
  );
}
