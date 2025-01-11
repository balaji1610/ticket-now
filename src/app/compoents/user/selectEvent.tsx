"use client";
import { useEffect } from "react";
import { useAdminContext } from "@/app/context/adminContext";
import adminService from "@/app/service/adminService";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
export default function SelectEvent() {
  const { allEvents } = useAdminContext();
  const { getAllEvents } = adminService();
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      {" "}
      <Box sx={{ height: "80vh", marginLeft: "2rem" }}>
        {allEvents.map((el: any, index: number) => {
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
              title={el.eventName}
              
            >
              <Stack spacing={1}>
                <Box>
                  <Image
                    src={el.thumbnailImage}
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
                    {el.eventName}
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
