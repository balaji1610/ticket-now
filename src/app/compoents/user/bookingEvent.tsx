"use client";
import { useUserContext } from "@/app/context/userContext";
import { Box, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import userService from "@/app/service/userService";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import AboutEvent from "./aboutEvent";
export function TicketStatusui(props: { backgroundColor: string }) {
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
  const {
    selectedEvent,
    setSelectedEvent,
    currentUser,
    isBookTicketLoadingButton,
  } = useUserContext();

  const { adminBookingTicket } = userService();

  const { eventName, seats } = selectedEvent;

  const [numberOfSelectedTickets, setNumberOfSelectTickets] = useState<
    null | number
  >(null);

  const checkTicketStatus = () => {
    const checkTicketSoldOutStatus = selectedEvent.seats.every(
      (el: any) => el.isBooked === true
    );

    setSelectedEvent((prev: any) => ({
      ...prev,
      TicketStatus: checkTicketSoldOutStatus ? "sold out" : "available",
    }));
  };

  useEffect(() => {
    selectedEvent;
    const selectNumberTicket = seats?.filter((el: any) => {
      return el.bookedById == currentUser._id;
    });
    setNumberOfSelectTickets(selectNumberTicket.length);
    checkTicketStatus();
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
        toast.error("This ticket is sold out");
      }
    } else {
      //selected
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

  const handleOnBookingTicket = () => {
    adminBookingTicket();
  };

  return (
    <div style={{ paddingBottom: "30px" }}>
      <Box sx={{ margin: "10px 0 30px 0" }}>
        <AboutEvent />
      </Box>

      <Grid container sx={{ padding: "10px" }}>
        <Grid size={{ md: 4, sm: 4, xl: 4 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: numberOfSelectedTickets ? "#1976d2" : "gray",
              }}
              gutterBottom
            >
              {numberOfSelectedTickets
                ? `You have selected ${numberOfSelectedTickets} tickets`
                : "No tickets selected."}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ md: 4, sm: 4, xl: 4 }}>
          {" "}
          <Stack>
            <Box>
              <Stack direction="row" spacing={2}>
                <TicketStatusui backgroundColor="#ffffff" />
                <Box>Avilable</Box>
                <TicketStatusui backgroundColor="#1976d2" />
                <Box>Selected</Box>
                <TicketStatusui backgroundColor="gray" />
                <Box>Soldout</Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ md: 4, sm: 4, xl: 4 }}>
          {/* <LoadingButton variant="contained" color="error">
            Cancel Tickets
          </LoadingButton> */}
        </Grid>
      </Grid>
      <Grid container sx={{ margin: "20px 0 20px 0" }}>
        <Grid size={{ md: 12, sm: 12, xl: 12 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Box
                sx={{
                  width: "25px",
                  height: "80px",
                  border: "1px solid gray",
                  color: "#ffffff",
                  textAlign: "center",
                  backgroundColor: "gray",
                }}
              >
                <Stack spacing={2}>
                  <Box>
                    <h4>A</h4>
                  </Box>
                  <Box>
                    {" "}
                    <h4>B</h4>
                  </Box>
                </Stack>
              </Box>
              <Box>
                {[0, 10].map((startIndex) => (
                  <Box key={startIndex} sx={{ margin: "10px 0 20px 0" }}>
                    {seats
                      ?.slice(startIndex, startIndex + 10)
                      .map((el: any) => {
                        const { seatNumber, isBooked, bookedById } = el;
                        return (
                          <Box
                            key={seatNumber}
                            component="span"
                            sx={{
                              border: "1px solid black",
                              backgroundColor: isBooked
                                ? bookedById === currentUser._id
                                  ? "#1976d2" // Selected
                                  : "gray" // SoldOUT
                                : "#ffffff", // Available
                              color: isBooked ? "#ffffff" : "#000000",
                              cursor: isBooked
                                ? bookedById === currentUser._id
                                  ? "pointer"
                                  : "not-allowed"
                                : "pointer",
                              padding: "5px",
                              margin: "5px",
                            }}
                            onClick={() =>
                              toggleSeatSelection(
                                seatNumber,
                                isBooked,
                                bookedById
                              )
                            }
                          >
                            {seatNumber}
                          </Box>
                        );
                      })}
                  </Box>
                ))}
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Box></Box>
      <Divider>
        {" "}
        <LoadingButton
          variant="contained"
          onClick={handleOnBookingTicket}
          loading={isBookTicketLoadingButton}
        >
          Book Tickets
        </LoadingButton>
      </Divider>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
