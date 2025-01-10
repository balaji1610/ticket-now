import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ModalProps } from "@/app/interface/interface";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Modal: React.FC<ModalProps> = ({
  open,
  handleClose,
  setOpen,
  title,
  component,
}) => {
  return (
    <Dialog open={open} maxWidth="xl" onClose={handleClose}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        style={{
          height: "1rem",
          textAlign: "center",
          padding: "19px",
          marginRight: "4px",
          fontFamily: "'Roboto'",
        }}
      >
        <h2 style={{ fontFamily: "'Roboto'" }}>{title}</h2>
      </DialogTitle>
      <DialogActions>
        <Grid container>
          <Grid size={{ xs: 12 }}>{component}</Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
