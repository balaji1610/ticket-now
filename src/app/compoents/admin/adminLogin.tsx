"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@mui/material";
import { useAdminContext } from "@/app/context/adminContext";
import { crendentialType } from "@/app/interface/interface";
import adminService from "@/app/service/adminService";

export default function AdminLogin() {
  const router = useRouter();
  const { adminLogin } = adminService();
  const { setAdminCrendential } = useAdminContext();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnchange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setAdminCrendential((prev: crendentialType) => {
      return { ...prev, [name]: value };
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().email(),
      password: Yup.string().matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
        "Required:At least one uppercase, lowercase, number, special character and 8–15 characters"
      ),
    }),

    onSubmit: () => {
      adminLogin();
    },
  });

  return (
    <Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          sx={{
            border: "3px solid #E4E0E1",
            padding: "2rem",
            borderRadius: "20px",
          }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Stack
            direction="column"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Box>
              <AccountCircleIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h5">Admin</Typography>
            </Box>
            <Box>
              <TextField
                required
                label="Email Address"
                sx={{ width: "16rem" }}
                type="email"
                name="username"
                value={formik.values.username}
                onChange={(event) => {
                  handleOnchange(event);
                  formik.handleChange(event);
                }}
                helperText={formik.touched.username && formik.errors.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
              />
            </Box>
            <Box>
              <Box>
                {" "}
                <FormControl variant="outlined" required>
                  <InputLabel error={Boolean(formik.errors.password)}>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={(event) => {
                      handleOnchange(event);
                      formik.handleChange(event);
                    }}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                  />
                </FormControl>
              </Box>

              <Box sx={{ width: "14vw", height: "5vh" }}>
                {formik.touched.password && formik.errors.password && (
                  <FormHelperText error sx={{ width: "17rem" }}>
                    {formik.errors.password}
                  </FormHelperText>
                )}
              </Box>
            </Box>
            <Box>
              <LoadingButton type="submit" variant="contained">
                LOGIN
              </LoadingButton>
            </Box>
            <Box></Box>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
