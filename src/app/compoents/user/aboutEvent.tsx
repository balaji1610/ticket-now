"use client";
import { useUserContext } from "@/app/context/userContext";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { EventCategoryIcon } from "@/app/lib/lib";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function AboutEvent() {
  const { selectedEvent } = useUserContext();
  const { eventName, description, date, venue, eventCategory } = selectedEvent;
  return (
    <div>
      <Grid container direction="row">
        <Grid size={{ md: 12, sm: 12, xl: 12 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
            }}
          >
            {eventName}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6} sx={{ marginTop: "20px" }}>
        <Grid size={{ md: 6, sm: 6, xl: 6 }}>
          <h1>About Event</h1>
          <Typography color="textSecondary" variant="subtitle1">
            {description}
          </Typography>
        </Grid>
        <Grid size={{ md: 6, sm: 6, xl: 6 }}>
          <h1>Event Details</h1>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Stack direction="row" spacing={2}>
                <Box>
                  <InsertInvitationIcon sx={{ color: "#D84040" }} />
                </Box>
                <Box>{dayjs(date).format("MMM D, YYYY")}</Box>
              </Stack>
            </Box>
            <Box>
              {" "}
              <Stack direction="row" spacing={2}>
                <Box>{EventCategoryIcon(eventCategory)}</Box>
                <Box>{eventCategory}</Box>
              </Stack>
            </Box>
            <Box>
              {" "}
              <Stack direction="row" spacing={3}>
                <Box>
                  <LocationOnIcon sx={{ color: "gray" }} />
                </Box>
                <Box>{venue}</Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
