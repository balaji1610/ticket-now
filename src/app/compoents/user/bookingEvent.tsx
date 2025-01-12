"use client";
import { useUserContext } from "@/app/context/userContext";
import { Box, Stack } from "@mui/material";

import React, { useState } from "react";


export default function BookingEvent() {
  const { selectedEvent } = useUserContext();

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // const { eventName, seats } = selectedEvent;

  const currentSeat = {
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
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a42b" },
      },
      {
        seatNumber: "A3",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a42c" },
      },
      {
        seatNumber: "A4",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a42d" },
      },
      {
        seatNumber: "A5",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a42e" },
      },
      {
        seatNumber: "A6",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a42f" },
      },
      {
        seatNumber: "A7",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a430" },
      },
      {
        seatNumber: "A8",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a431" },
      },
      {
        seatNumber: "A9",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a432" },
      },
      {
        seatNumber: "A10",
        isBooked: false,
        bookedById: null,
        bookedByUser: null,
        _id: { $oid: "6782aeb1a1d0c46582e4a433" },
      },
    ],
    createdEvent: "",
    TicketStatus: "avilable",
  };
  const { eventName, seats } = currentSeat;

  const toggleSeatSelection = (seat: string) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  return (
    <div>
      <h1>{eventName}</h1>
      {JSON.stringify(selectedSeats)}
      <Box sx={{ padding: "20vh" }}>
        {seats.map((el: any, index: number) => {
          const { seatNumber } = el;
          return (
            <Box
              key={seatNumber}
              component="span"
              sx={{
                border: "1px solid black",
                backgroundColor: selectedSeats.includes(seatNumber)
                  ? "blue"
                  : "white",
                color: selectedSeats.includes(seatNumber) ? "white" : "black",
                padding: "5px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() => toggleSeatSelection(seatNumber)}
            >
              {seatNumber}
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
