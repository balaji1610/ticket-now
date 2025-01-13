"use client";
import { useEffect, useState } from "react";
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getAllEvents();
  }, []);

  const handleOnEventClick = (title: string, event: any) => {
    const link = title.toLowerCase().split(" ").join("-");
    router.push(`./events/${link}`);
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
                    src={imageLoaded ? thumbnailImage : "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE="}
                    alt="Blog-Template"
                    width={260}
                    height={150}
                    style={{
                      objectFit: "cover",
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD..."
                    onLoad={() => setImageLoaded(true)}
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
