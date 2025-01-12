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
  const { selectedEvent, setSelectedEvent, currentUser } = useUserContext();

  const { eventName, seats } = selectedEvent;

  useEffect(() => {
    selectedEvent;
  }, [selectedEvent, setSelectedEvent]);

  const toggleSeatSelection = (
    currentNumber: string,
    booked: boolean,
    bookuserId: number
  ) => {
    if (booked) {
      if (bookuserId == currentUser._id) {
        //unselected
        setSelectedEvent((prev: any) => {
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
      setSelectedEvent((prev: any) => {
        return {
          ...prev,
          seats: prev.seats.map((el: any) => {
            const { seatNumber } = el;
            if (seatNumber === currentNumber) {
              return {
                ...el,
                isBooked: true,
                bookedById: currentUser._id,
                bookedByUser: currentUser.username,
              };
            }
            return el;
          }),
        };
      });
    }
  };

  console.log(selectedEvent);
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
                  ? bookedById == currentUser._id
                    ? "blue" // Selected
                    : "gray" // SoldOUT
                  : "white", // Avilable
                cursor: isBooked
                  ? bookedById == currentUser._id
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
