"use client";
import FormAction from "./formAction";
import Modal from "@/app/compoents/commonCompoent/modal";
import { useAdminContext } from "@/app/context/adminContext";
import Button from "@mui/material/Button";

export default function AddEvent() {
  const { isAddEventOpen, setIsAddEventOpen } = useAdminContext();

  const addEventClose = () => {
    setIsAddEventOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => setIsAddEventOpen(true)}
      >
        Add Event
      </Button>
      <Modal
        open={isAddEventOpen}
        setOpen={setIsAddEventOpen}
        handleClose={addEventClose}
        title="Add Event"
        component={<FormAction />}
      ></Modal>
    </>
  );
}
