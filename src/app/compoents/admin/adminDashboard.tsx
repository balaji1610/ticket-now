"use client";
import Grid from "@mui/material/Grid2";
import Sidebar from "./sidebar";
import Box from "@mui/material/Box";

type AdminDashboardProps = {
  children: React.ReactNode;
};

export default function AdminDashboard({ children }: AdminDashboardProps) {
  return (
    <Grid container sx={{ marginTop: "8vh" }} spacing={2}>
      <Grid size={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Sidebar />
        </Box>
      </Grid>
      <Grid size={{ xs: 10, sm: 10, md: 10, lg: 10 }}>{children}</Grid>
    </Grid>
  );
}
