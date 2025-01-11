import EventApplication from "@/app/compoents/user/eventApplication";
import BookingEvent from "@/app/compoents/user/bookingEvent";
export default function EventTitle() {
  return (
    <div>
      <EventApplication>
        <BookingEvent />
      </EventApplication>
    </div>
  );
}
