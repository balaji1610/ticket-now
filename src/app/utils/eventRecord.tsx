import { createSeatNumber } from "../lib/lib";
const eventRecord: any = {
  eventName: "",
  description: "",
  date: "",
  venue: "",
  thumbnailImage: "",
  eventCategory: "",
  ticketPrice: null,
  seats: createSeatNumber(),
  createdEvent: "",
  TicketStatus: "available",
};

export default eventRecord;
