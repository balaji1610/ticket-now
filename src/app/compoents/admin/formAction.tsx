"use client";
import { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid2";
import Dropdown from "@/app/compoents/commonCompoent/dropdown";
import { useAdminContext } from "@/app/context/adminContext";
import { CategoryOptions, PriceOptions } from "@/app/lib/lib";
export default function FormAction() {
  const { singleEventRecord, setSingleEventRecord } = useAdminContext();

  const handleOnCategory = (e: any) => {
    setSingleEventRecord((prev: any) => {
      return { ...prev, ["eventCategory"]: e.target.value };
    });
  };

  const handleOnTicketPrice = (e: any) => {
    setSingleEventRecord((prev: any) => {
      return { ...prev, ["ticketPrice"]: e.target.value };
    });
  };

  const formik = useFormik({
    initialValues: singleEventRecord,

    validationSchema: Yup.object({
      eventName: Yup.string().required("Event name is required"),
      description: Yup.string().required("Description is required"),
      date: Yup.date().required("Event date is required").nullable(),
      venue: Yup.string().required("Venue is required"),
      eventCategory: Yup.string().required("eventCategory is required"),
      ticketPrice: Yup.number().required("ticketPrice is required"),
      thumbnailImage: Yup.string().matches(
        /https?:\/\/[^\s]+?\.(jpg|png|jpeg)$/i,
        "Required:is Only Valid jpg | jpeg |png"
      ),
    }),

    onSubmit: (values) => {
      console.log(values, "submit");
    },
  });

  return (
    <Box sx={{ width: "100vh" }}>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid size={{ md: 6, sm: 6, xl: 6 }}>
            <Stack spacing={4}>
              <Box>
                <TextField
                  required
                  label="Event Name"
                  type="text"
                  name="eventName"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.name && (formik.errors.name as any)
                  }
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  size="small"
                />
              </Box>
              <Box>
                {" "}
                <TextField
                  required
                  label="Event Date"
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.date && (formik.errors.date as any)
                  }
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  size="small"
                  slotProps={{ inputLabel: { shrink: true } }}
                />
              </Box>
              <Box>
                {" "}
                <TextField
                  required
                  label="Venue"
                  type="text"
                  name="venue"
                  value={formik.values.venue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.venue && (formik.errors.venue as any)
                  }
                  error={formik.touched.venue && Boolean(formik.errors.venue)}
                  size="small"
                />
              </Box>
            </Stack>
          </Grid>
          <Grid size={{ md: 6, sm: 6, xl: 6 }}>
            <Stack spacing={4}>
              {" "}
              <Box>
                <TextField
                  required
                  multiline
                  rows={2}
                  label="Description"
                  type="text"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.description &&
                    (formik.errors.description as any)
                  }
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                />
              </Box>
              <Box>
                <Stack direction="row" spacing={2}>
                  <Box>
                    {" "}
                    <Dropdown
                      value={singleEventRecord.eventCategory}
                      options={CategoryOptions}
                      handleDropdownChange={handleOnCategory}
                      label="Category"
                    />
                  </Box>
                  <Box>
                    {" "}
                    <Dropdown
                      value={singleEventRecord.ticketPrice}
                      options={PriceOptions}
                      handleDropdownChange={handleOnTicketPrice}
                      label="Price"
                    />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ margin: "10px 10px" }}>
          <TextField
            required
            fullWidth
            type="text"
            name="thumbnailImage"
            label="Image Link"
            size="small"
            value={formik.values.thumbnailImage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.thumbnailImage &&
              (formik.errors.thumbnailImage as any)
            }
            error={
              formik.touched.thumbnailImage &&
              Boolean(formik.errors.thumbnailImage)
            }
            placeholder="https://www.example.com/image.jpg/png/jpeg"
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <LoadingButton type="submit" variant="contained">
            Add
          </LoadingButton>
        </Box>
      </Box>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
