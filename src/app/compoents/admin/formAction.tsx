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
import adminService from "@/app/service/adminService";

export default function FormAction() {
  const { singleEventRecord, setSingleEventRecord, adminLoadingButton } =
    useAdminContext();

  const { createEvent } = adminService();

  const handleOnchange = (event: any) => {
    const { name, value } = event.target;

    setSingleEventRecord((prev: any) => {
      return { ...prev, [name]: value };
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
        "Required: Only valid jpg | jpeg | png"
      ),
    }),

    onSubmit: () => {
      createEvent();
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
                  value={formik.values.eventName}
                  onChange={(event) => {
                    handleOnchange(event);
                    formik.handleChange(event);
                  }}
                  helperText={
                    formik.touched.eventName && (formik.errors.eventName as any)
                  }
                  error={
                    formik.touched.eventName && Boolean(formik.errors.eventName)
                  }
                  size="small"
                />
              </Box>
              <Box>
                <TextField
                  required
                  label="Event Date"
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={(event) => {
                    handleOnchange(event);
                    formik.handleChange(event);
                  }}
                  helperText={
                    formik.touched.date && (formik.errors.date as any)
                  }
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  size="small"
                  slotProps={{ inputLabel: { shrink: true } }}
                />
              </Box>
              <Box>
                <TextField
                  required
                  label="Venue"
                  type="text"
                  name="venue"
                  value={formik.values.venue}
                  onChange={(event) => {
                    handleOnchange(event);
                    formik.handleChange(event);
                  }}
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
              <Box>
                <TextField
                  required
                  multiline
                  rows={2}
                  label="Description"
                  type="text"
                  name="description"
                  value={formik.values.description}
                  onChange={(event) => {
                    handleOnchange(event);
                    formik.handleChange(event);
                  }}
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
                    <Dropdown
                      value={formik.values.eventCategory}
                      options={CategoryOptions}
                      handleDropdownChange={(event: any) => {
                        handleOnchange(event);
                        formik.handleChange(event);
                      }}
                      label="Category"
                      name="eventCategory"
                      error={
                        formik.touched.eventCategory &&
                        Boolean(formik.errors.eventCategory)
                      }
                      helperText={
                        formik.touched.eventCategory &&
                        formik.errors.eventCategory
                      }
                    />
                  </Box>
                  <Box>
                    {" "}
                    <Dropdown
                      value={formik.values.ticketPrice}
                      options={PriceOptions}
                      handleDropdownChange={(event: any) => {
                        handleOnchange(event);
                        formik.handleChange(event);
                      }}
                      label="ticketPrice"
                      name="ticketPrice"
                      error={
                        formik.touched.ticketPrice &&
                        Boolean(formik.errors.ticketPrice)
                      }
                      helperText={
                        formik.touched.ticketPrice && formik.errors.ticketPrice
                      }
                    />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ md: 12, sm: 6, xl: 12 }}>
            <Box sx={{ margin: "10px 10px" }}>
              <TextField
                required
                fullWidth
                type="text"
                name="thumbnailImage"
                label="Image Link"
                size="small"
                value={formik.values.thumbnailImage}
                onChange={(event) => {
                  handleOnchange(event);
                  formik.handleChange(event);
                }}
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
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <LoadingButton
            type="submit"
            variant="contained"
            loading={adminLoadingButton}
          >
            Add
          </LoadingButton>
        </Box>
      </Box>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
