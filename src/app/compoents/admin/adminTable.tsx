import React from "react";
import { useEffect, useState } from "react";

import adminService from "@/app/service/adminService";
import { useAdminContext } from "@/app/context/adminContext";
import { SkeletonTable } from "@/app/lib/lib";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
export default function AdminTable() {
  const { getAllEvents, deleteEvent } = adminService();
  const {
    allEvents,
    isLoading,
    setIsEdit,
    setUpdateEventId,
    setSingleEventRecord,
    setIsAddEventOpen,
    adminLoadingButton,
    isDeleteLoadingButton,
  } = useAdminContext();

  const [deleteIndex, setDeleteIndex] = useState<null | number>(null);

  useEffect(() => {
    getAllEvents();
  }, []);

  const handleOnEditClick = (editId: string, editData: any) => {
    setIsEdit(true);
    setUpdateEventId(editId);
    setSingleEventRecord(editData);
    setIsAddEventOpen(true);
  };

  const handleOnDeleteClick = (deleteid: string, index: number) => {
    deleteEvent(deleteid);
    setDeleteIndex(index);
  };

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
                backgroundColor: "#6A80B9",
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
                <TableCell>Venue</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>{" "}
            <TableBody>
              {allEvents.map((event: any, index: number) => {
                const {
                  _id: eventID,
                  eventName,
                  date,
                  venue,
                  eventCategory,
                } = event;
                return (
                  <TableRow>
                    <TableCell>{eventName}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{venue}</TableCell>
                    <TableCell>{eventCategory}</TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleOnEditClick(eventID, event)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <LoadingButton
                        variant="contained"
                        color="error"
                        loading={deleteIndex === index && isDeleteLoadingButton}
                        onClick={() => handleOnDeleteClick(eventID, index)}
                      >
                        Delete
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
