"use client";
import { useUserContext } from "@/app/context/userContext";
import { Box, Stack } from "@mui/material";

import React, { useState, useEffect } from "react";

export function TicketStatus(props: { backgroundColor: string }) {
  const { backgroundColor } = props;
  return (
    <Box
      component="span"
      sx={{
        backgroundColor: backgroundColor,
        border: "1px solid black",
        padding: "10px",
        borderRadius: "2px",
      }}
    ></Box>
  );
}

export default function BookingEvent() {
  const { selectedEvent } = useUserContext();

  const [currentEventDetail, setCurrentEventDetail] = useState<any>({
    _id: { $oid: "6782aeb1a1d0c46582e4a429" },
    eventName: "AR",
    description:
      "A grand musical concert featuring super hit tamil songs of Shri. AR RAHMAN celebrating his 33 successful years in INDIAN CINEMA. Many young and energetic singers will be performing live along with world class musicians of Mouna Raagam Murali`s orchestra",
    date: "2025-01-12",
    venue: "Chennai",
    thumbnailImage:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-a-r-rahman-33-grand-musical-concert-0-2025-1-3-t-5-8-58.jpg",
    eventCategory: "music",
    ticketPrice: "100",
    seats: [
      {
        seatNumber: "A1",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a42a" },
      },
      {
        seatNumber: "A2",
        isBooked: true,
        bookedById: 1,
        bookedByUser: "Anu",
        _id: { $oid: "6782aeb1a1d0c46582e4a42b" },
      },
      {
        seatNumber: "A3",
        isBooked: true,
        bookedById: 2,
        bookedByUser: "balaji",
        _id: { $oid: "6782aeb1a1d0c46582e4a42c" },
      },
    ],
    createdEvent: "",
    TicketStatus: "avilable",
  });
  const { eventName, seats } = currentEventDetail;

  useEffect(() => {
    currentEventDetail;
  }, [currentEventDetail, setCurrentEventDetail]);

  const currentUser = {
    userId: 1,
    bookedByUser: "balaji",
  };

  const toggleSeatSelection = (
    currentNumber: string,
    booked: boolean,
    bookuserId: number
  ) => {
    if (booked) {
      if (bookuserId == currentUser.userId) {
        //unselected
        setCurrentEventDetail((prev: any) => {
          return {
            ...prev,
            seats: prev.seats.map((el: any) => {
              const { seatNumber } = el;
              if (seatNumber === currentNumber) {
                return {
                  ...el,
                  isBooked: false,
                  bookedById: null,
                  bookedByUser: null,
                };
              }
              return el;
            }),
          };
        });
      } else {
        alert("It is SoldOut");
      }
    } else {
      //selected
      alert("It is selected");
      setCurrentEventDetail((prev: any) => {
        return {
          ...prev,
          seats: prev.seats.map((el: any) => {
            const { seatNumber } = el;
            if (seatNumber === currentNumber) {
              return {
                ...el,
                isBooked: true,
                bookedById: currentUser.userId,
                bookedByUser: currentUser.bookedByUser,
              };
            }
            return el;
          }),
        };
      });
    }
  };

  console.log(currentEventDetail);
  return (
    <div>
      <h1>{eventName}</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
      >
        <Stack>
          <Box>
            <Stack direction="row" spacing={2}>
              <TicketStatus backgroundColor="#ffffff" />
              <Box>Avilable</Box>
              <TicketStatus backgroundColor="blue" />
              <Box>Selected</Box>
              <TicketStatus backgroundColor="gray" />
              <Box>Soldout</Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ padding: "20vh" }}>
        {seats.map((el: any, index: number) => {
          const { seatNumber, isBooked, bookedById, bookedByUser } = el;
          return (
            <Box
              key={seatNumber}
              component="span"
              sx={{
                border: "1px solid black",
                backgroundColor: isBooked
                  ? bookedById == currentUser.userId
                    ? "blue" // Selected
                    : "gray" // SoldOUT
                  : "white", // Avilable
                cursor: isBooked
                  ? bookedById == currentUser.userId
                    ? "pointer" // Selected
                    : "not-allowed" // SoldOUT
                  : "pointer", // Avilable

                padding: "5px",
                margin: "5px",
              }}
              onClick={() =>
                toggleSeatSelection(seatNumber, isBooked, bookedById)
              }
            >
              {seatNumber}
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
