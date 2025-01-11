import { createSeatNumber } from "../lib/lib";
const eventRecord:any= {
  _id: "",
  eventName: "",
  description: "",
  date: "",
  venue: "",
  thumbnailImage: "",
  eventCategory: "",
  ticketPrice: "null",
  seats: createSeatNumber(),
  createdEvent: "",
  TicketStatus: "avilable",
};

export default eventRecord;
