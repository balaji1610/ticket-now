import React from "react";
import { useEffect } from "react";

import adminService from "@/app/service/adminService";
import { useAdminContext } from "@/app/context/adminContext";
import { SkeletonTable } from "@/app/lib/lib";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
export default function AdminTable() {
  const { getAllEvents } = adminService();
  const { allEvents, isLoading } = useAdminContext();

  useEffect(() => {
    getAllEvents();
  }, []);

  console.log(allEvents);
  return (
    <div>
      {isLoading ? (
        SkeletonTable()
      ) : (
        <TableContainer
          component={Paper}
          style={{ height: "30rem", overflow: "scroll" }}
        >
          <Table
            stickyHeader
            sx={{
              minWidth: 650,
              border: "2px solid #ffffff",
              heigh: "10px",
              "& th": {
                color: "#ffffff",
                backgroundColor: "#000000",
                fontSize: "large",
                fontWeight: "bold",
              },
              "& tr": {
                fontSize: "15px",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Event Name </TableCell>
                <TableCell>Date</TableCell>
                <TableCell>venue</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>{" "}
            <TableBody>
              {allEvents.map((el: any) => (
                <TableRow>
                  <TableCell>{el.eventName}</TableCell>
                  <TableCell>{el.date}</TableCell>
                  <TableCell>{el.venue}</TableCell>
                  <TableCell>{el.eventCategory}</TableCell>
                  <TableCell>
                    {" "}
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
