"use client";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
export default function Events() {
  return (
    <Stack spacing={5}>
      <Box>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid size={{ xs: 5, md: 5 }}>
            {" "}
            <Button variant="contained" color="success">
              Add Event
            </Button>
          </Grid>
          <Grid size={{ xs: 5, md: 5 }}>Filter Events</Grid>
        </Grid>
      </Box>
      <Box>Table</Box>
    </Stack>
  );
}
