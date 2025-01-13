"use client";
import { useEffect } from "react";
import { useAdminContext } from "@/app/context/adminContext";
import { useUserContext } from "@/app/context/userContext";
import adminService from "@/app/service/adminService";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function SelectEvent() {
  const { allEvents } = useAdminContext();
  const { setSelectedEvent } = useUserContext();
  const { getAllEvents } = adminService();
  const router = useRouter();
  useEffect(() => {
    getAllEvents();
  }, []);

  const handleOnEventClick = (title: string, event: any) => {
    router.push(`./events/${title}`);
    setSelectedEvent(event);
  };
  return (
    <div>
      {" "}
      <Box sx={{ height: "80vh", marginLeft: "2rem" }}>
        {allEvents.map((event: any, index: number) => {
          const { eventName, thumbnailImage, TicketStatus } = event;
          return (
            <Box
              sx={{
                m: "10px 20px 10px 20px",
                border: "1px solid #DFDFDE",
                display: "inline-block",
                cursor: "pointer",
                height: "14rem",
                borderRadius: "10px",
              }}
              key={index}
              title={eventName}
              onClick={() => handleOnEventClick(eventName, event)}
            >
              <Stack spacing={1}>
                <Box>
                  <Image
                    src={thumbnailImage}
                    alt="Blog-Template"
                    width={260}
                    height={150}
                    style={{
                      objectFit: "cover",
                    }}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
                  />
                </Box>
                <Box sx={{ borderTop: "1px solid #EBEAFF" }}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    sx={{ mt: "5px", fontWeight: "bold" }}
                  >
                    {eventName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    {TicketStatus}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
