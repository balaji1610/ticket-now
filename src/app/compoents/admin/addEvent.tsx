"use client";
import FormAction from "./formAction";
import Modal from "@/app/compoents/commonCompoent/modal";
import Button from "@mui/material/Button";
import { useAdminContext } from "@/app/context/adminContext";
import eventRecord from "@/app/utils/eventRecord";
export default function AddEvent() {
  const { isAddEventOpen, setIsAddEventOpen, setSingleEventRecord, isEdit } =
    useAdminContext();

  const addEventClose = () => {
    setIsAddEventOpen(false);
    setSingleEventRecord(eventRecord);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setIsAddEventOpen(true)}>
        Add Event
      </Button>
      <Modal
        open={isAddEventOpen}
        setOpen={setIsAddEventOpen}
        handleClose={addEventClose}
        title={isEdit ? "Update Event" : "Add Event"}
        component={<FormAction />}
      ></Modal>
    </>
  );
}
