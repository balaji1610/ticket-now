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
export default function FormAction() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const CategoryOptions = [
    {
      label: "music",
      value: "music",
    },
    {
      label: "comdey",
      value: "comedy",
    },
    {
      label: "workshop",
      value: "workshop",
    },
  ];
  const handleOnCatogery = (e: any) => {
    setSelectedCategory(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      date: "",
      venue: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Event name is required"),
      description: Yup.string().required("Description is required"),
      date: Yup.date().required("Event date is required").nullable(),
      venue: Yup.string().required("Venue is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
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
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.name && formik.errors.name}
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
                  helperText={formik.touched.date && formik.errors.date}
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
                  helperText={formik.touched.venue && formik.errors.venue}
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
                    formik.touched.description && formik.errors.description
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
                      value={selectedCategory}
                      options={CategoryOptions}
                      handleDropdownChange={handleOnCatogery}
                      label="Category"
                    />
                  </Box>
                  <Box>Ticket Price</Box>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <LoadingButton type="submit" variant="contained">
          Add{" "}
        </LoadingButton>
      </Box>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
